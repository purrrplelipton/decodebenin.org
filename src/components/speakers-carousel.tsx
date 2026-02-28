import { Icon } from "@iconify-icon/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "use-intl";
import { SpeakerCard } from "#/components/speaker-card";
import { SpeakerDialog } from "#/components/speaker-dialog";
import { Button } from "#/components/ui/button";
import type { Speaker } from "#/lib/data";
import { cn } from "#/lib/utils";

const PAUSE_TIMEOUT_MS = 5_000;
const CARD_WIDTH_MOBILE = 252; // 240px + 12px gap
const CARD_WIDTH_DESKTOP = 292; // 280px + 12px gap
const BASE_SPEED = 40; // seconds for one full cycle

interface SpeakersCarouselProps {
  speakers: Speaker[];
}

export function SpeakersCarousel({ speakers }: SpeakersCarouselProps) {
  const t = useTranslations();
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveringRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);

  const [isPaused, setIsPaused] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [decelerating, setDecelerating] = useState(false);

  // Triple the speakers for seamless loop
  const tripled = [...speakers, ...speakers, ...speakers];

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const scheduleResume = useCallback(() => {
    clearResumeTimer();
    resumeTimerRef.current = setTimeout(() => {
      if (!isHoveringRef.current && !dialogOpen) {
        setIsPaused(false);
        setDecelerating(false);
      }
    }, PAUSE_TIMEOUT_MS);
  }, [clearResumeTimer, dialogOpen]);

  const pauseCarousel = useCallback(() => {
    setIsPaused(true);
    setDecelerating(false);
    scheduleResume();
  }, [scheduleResume]);

  // -- Prev/Next navigation --
  const navigate = useCallback(
    (direction: "prev" | "next") => {
      const track = trackRef.current;
      if (!track) return;

      // Get current computed translation
      const style = getComputedStyle(track);
      const matrix = new DOMMatrix(style.transform);
      const currentX = matrix.m41;

      // Determine card width based on viewport
      const cardWidth = window.innerWidth < 768 ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
      const shift = direction === "next" ? -cardWidth : cardWidth;
      const totalWidth = track.scrollWidth / 3;

      // Calculate new position and normalize to stay within the middle copy
      let newX = currentX + shift;
      if (Math.abs(newX) >= totalWidth * 2) {
        newX += totalWidth;
      } else if (Math.abs(newX) < totalWidth) {
        newX -= totalWidth;
      }

      // Pause animation and apply manual transform with transition
      setIsPaused(true);
      setDecelerating(false);
      track.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
      track.style.transform = `translateX(${newX}px) translateZ(0)`;

      const handleEnd = () => {
        track.style.transition = "";
        track.removeEventListener("transitionend", handleEnd);
      };
      track.addEventListener("transitionend", handleEnd);

      scheduleResume();
    },
    [scheduleResume],
  );

  // -- Hover interactions (desktop) --
  const handleMouseEnter = useCallback(() => {
    isHoveringRef.current = true;
    clearResumeTimer();
    // Slowly decelerate instead of abrupt stop
    setDecelerating(true);
    // After deceleration transition completes, fully pause
    setTimeout(() => {
      if (isHoveringRef.current) {
        setIsPaused(true);
        setDecelerating(false);
      }
    }, 1000);
  }, [clearResumeTimer]);

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
    if (!isDraggingRef.current && !dialogOpen) {
      setIsPaused(false);
      setDecelerating(false);
    }
  }, [dialogOpen]);

  // -- Drag interactions (desktop) --
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      // Only enable drag for mouse (not touch -- touch has its own scroll)
      if (e.pointerType !== "mouse") return;
      const track = trackRef.current;
      if (!track) return;

      isDraggingRef.current = true;
      dragStartXRef.current = e.clientX;

      const style = getComputedStyle(track);
      const matrix = new DOMMatrix(style.transform);
      dragScrollLeftRef.current = matrix.m41;

      setIsPaused(true);
      setDecelerating(false);
      clearResumeTimer();

      track.style.transition = "";
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [clearResumeTimer],
  );

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const delta = e.clientX - dragStartXRef.current;
    track.style.transform = `translateX(${dragScrollLeftRef.current + delta}px) translateZ(0)`;
  }, []);

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      scheduleResume();
    },
    [scheduleResume],
  );

  // -- Dialog interactions --
  const handleCardClick = useCallback(
    (speaker: Speaker) => {
      if (isDraggingRef.current) return;
      setSelectedSpeaker(speaker);
      setDialogOpen(true);
      setIsPaused(true);
      setDecelerating(false);
      clearResumeTimer();
    },
    [clearResumeTimer],
  );

  const handleDialogChange = useCallback(
    (open: boolean) => {
      setDialogOpen(open);
      if (!open) {
        setSelectedSpeaker(null);
        if (!isHoveringRef.current) {
          setIsPaused(false);
          setDecelerating(false);
        }
      }
    },
    [],
  );

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearResumeTimer();
  }, [clearResumeTimer]);

  // Respect reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const isAnimationPaused = isPaused || prefersReducedMotion;

  return (
    <div className="relative">
      {/* Carousel container with fade edges */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
        aria-label={t("speakersAriaLabel")}
        role="region"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className={cn(
            "flex gap-3 py-4",
            !isAnimationPaused && !decelerating && "cursor-grab",
            isDraggingRef.current && "cursor-grabbing",
          )}
          style={{
            animation: prefersReducedMotion
              ? "none"
              : `speakers-marquee ${BASE_SPEED}s linear infinite`,
            animationPlayState: isAnimationPaused ? "paused" : "running",
            animationDuration: decelerating ? `${BASE_SPEED * 8}s` : `${BASE_SPEED}s`,
            transition: decelerating ? "animation-duration 1s ease-out" : undefined,
            willChange: "transform",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {tripled.map((speaker, i) => (
            <SpeakerCard
              key={`${speaker.id}-${i}`}
              speaker={speaker}
              index={i}
              onClick={() => handleCardClick(speaker)}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next controls */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-full border-border bg-card shadow-md transition-transform hover:-translate-y-0.5"
          onClick={() => navigate("prev")}
          aria-label={t("speakersPrevious")}
        >
          <Icon icon="hugeicons:arrow-left-01" className="text-lg" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-full border-border bg-card shadow-md transition-transform hover:-translate-y-0.5"
          onClick={() => navigate("next")}
          aria-label={t("speakersNext")}
        >
          <Icon icon="hugeicons:arrow-right-01" className="text-lg" />
        </Button>
      </div>

      {/* Screen reader accessible list */}
      <div className="sr-only">
        <ul>
          {speakers.map((s) => (
            <li key={s.id}>
              {s.name} - {s.title} - {s.topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Speaker dialog */}
      <SpeakerDialog
        speaker={selectedSpeaker}
        open={dialogOpen}
        onOpenChange={handleDialogChange}
      />
    </div>
  );
}
