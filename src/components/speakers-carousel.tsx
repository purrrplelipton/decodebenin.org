import { Icon } from "@iconify-icon/react";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "use-intl";
import { SpeakerCard } from "#/components/speaker-card";
import { Button } from "#/components/ui/button";
import type { Speaker } from "#/types";

const PAUSE_TIMEOUT_MS = 5_000;
const SCROLL_SPEED = 1;
const GROUP_NAME = "speaker-carousel";

export function SpeakersCarousel({ speakers }: { speakers: Speaker[] }) {
  const t = useTranslations();
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: false,
      align: "start",
    },
    [
      AutoScroll({
        speed: SCROLL_SPEED,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true,
      }),
    ],
  );

  // -- Helpers --
  const getAutoScroll = useCallback(() => {
    return emblaApi?.plugins()?.autoScroll;
  }, [emblaApi]);

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const scheduleResume = useCallback(() => {
    clearResumeTimer();
    resumeTimerRef.current = setTimeout(() => {
      const autoScroll = getAutoScroll();
      if (autoScroll && !autoScroll.isPlaying()) {
        autoScroll.play();
      }
    }, PAUSE_TIMEOUT_MS);
  }, [clearResumeTimer, getAutoScroll]);

  // -- Hover: decelerate then stop (desktop) --
  const handleMouseEnter = useCallback(() => {
    clearResumeTimer();
    const autoScroll = getAutoScroll();
    if (autoScroll?.isPlaying()) {
      autoScroll.stop();
    }
  }, [clearResumeTimer, getAutoScroll]);

  const handleMouseLeave = useCallback(() => {
    // Only resume if no card is checked
    if (checkedIndex !== null) return;
    const autoScroll = getAutoScroll();
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }
  }, [checkedIndex, getAutoScroll]);

  // -- Prev/Next navigation --
  const navigate = useCallback(
    (direction: "prev" | "next") => {
      if (!emblaApi) return;
      const autoScroll = getAutoScroll();
      if (autoScroll?.isPlaying()) {
        autoScroll.stop();
      }

      if (direction === "prev") {
        emblaApi.scrollPrev();
      } else {
        emblaApi.scrollNext();
      }

      // Uncheck any open card
      setCheckedIndex(null);
      scheduleResume();
    },
    [emblaApi, getAutoScroll, scheduleResume],
  );

  // -- Card checked/unchecked --
  const handleCardCheckedChange = useCallback(
    (index: number, checked: boolean) => {
      if (checked) {
        setCheckedIndex(index);
        clearResumeTimer();
        const autoScroll = getAutoScroll();
        if (autoScroll?.isPlaying()) {
          autoScroll.stop();
        }
      } else {
        setCheckedIndex(null);
        scheduleResume();
      }
    },
    [clearResumeTimer, getAutoScroll, scheduleResume],
  );

  // -- Click outside to uncheck all cards and resume --
  useEffect(() => {
    if (checkedIndex === null) return;

    function handleClickOutside(e: MouseEvent | TouchEvent) {
      const target = e.target as HTMLElement;
      // If click is inside a speaker card article, ignore
      if (target.closest("article.scrapbook-card")) return;
      // If click is on a nav button, ignore
      if (target.closest("[data-carousel-nav]")) return;

      setCheckedIndex(null);
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (autoScroll && !autoScroll.isPlaying()) {
        autoScroll.play();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [checkedIndex, emblaApi]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearResumeTimer();
  }, [clearResumeTimer]);

  // Respect reduced motion
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      const autoScroll = getAutoScroll();
      if (autoScroll?.isPlaying()) {
        autoScroll.stop();
      }
    }
  }, [getAutoScroll]);

  return (
    <div className="relative">
      {/* Carousel viewport with fade edges */}
      <div
        className="overflow-hidden"
        ref={emblaRef}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        }}
        aria-label={t("speakersAriaLabel")}
        role="region"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex gap-3 py-4 cursor-grab active:cursor-grabbing">
          {speakers.map((s, i) => (
            <SpeakerCard
              key={`${s.id}-${i}`}
              {...s}
              index={i}
              groupName={GROUP_NAME}
              isChecked={checkedIndex === i}
              onCheckedChange={(checked) => handleCardCheckedChange(i, checked)}
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
          data-carousel-nav
        >
          <Icon icon="hugeicons:arrow-left-01" className="text-lg" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-full border-border bg-card shadow-md transition-transform hover:-translate-y-0.5"
          onClick={() => navigate("next")}
          aria-label={t("speakersNext")}
          data-carousel-nav
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
    </div>
  );
}
