import AutoScroll from "embla-carousel-auto-scroll";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import { SpeakerCard } from "#/components/speaker-card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/components/ui/carousel";
import type { Speaker } from "#/types";

const SCROLL_SPEED = 0.5;
const GROUP_NAME = "speaker-carousel";

export function SpeakersCarousel({ speakers }: { speakers: Speaker[] }) {
  const t = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const [checkedIndexes, setCheckedIndexes] = useState<Set<number>>(new Set());
  const [isInView, setIsInView] = useState(false);

  // -- Helpers --
  const getAutoScroll = useCallback(() => {
    return api?.plugins()?.autoScroll;
  }, [api]);

  // -- Card checked/unchecked --
  const handleCardCheckedChange = useCallback(
    (index: number, checked: boolean) => {
      const autoScroll = getAutoScroll();

      if (checked) {
        autoScroll?.stop();
        setCheckedIndexes((prev) => new Set(prev).add(index));
      } else {
        setCheckedIndexes((prev) => {
          const next = new Set(prev);
          next.delete(index);
          return next;
        });
      }
    },
    [getAutoScroll],
  );

  // -- Click outside to uncheck all cards --
  useEffect(() => {
    if (checkedIndexes.size === 0) return;

    function handleClickOutside(e: MouseEvent | TouchEvent) {
      const target = e.target as HTMLElement;
      // If click is inside a speaker card article, ignore
      if (target.closest("article.scrapbook-card")) return;
      // If click is on a nav button, ignore
      if (target.closest("[data-carousel-nav]")) return;

      setCheckedIndexes(new Set());
      // Auto-scroll will resume via isInView effect
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [checkedIndexes.size]);

  // Stop autoScroll when cards are checked (prevent resume on drag)
  useEffect(() => {
    if (checkedIndexes.size > 0) {
      const autoScroll = getAutoScroll();
      if (autoScroll?.isPlaying()) {
        autoScroll.stop();
      }
    }
  }, [checkedIndexes.size, getAutoScroll]);

  // Play/pause based on visibility and checked cards
  useEffect(() => {
    const autoScroll = getAutoScroll();
    if (!autoScroll) return;

    if (isInView && checkedIndexes.size === 0) {
      const timer = setTimeout(() => {
        if (!autoScroll.isPlaying()) {
          autoScroll.play();
        }
      }, 200);
      return () => clearTimeout(timer);
    }

    if (autoScroll.isPlaying()) {
      autoScroll.stop();
    }
  }, [isInView, checkedIndexes.size, getAutoScroll]);

  return (
    <AnimateInView
      animation="fade-up"
      delay={300}
      triggerOnce={false}
      className="relative grid grid-cols-1 grid-rows-1 *:[grid-area:1/1]"
      onInViewChange={setIsInView}
    >
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          dragFree: true,
          containScroll: false,
          align: "start",
        }}
        plugins={[
          AutoScroll({
            speed: SCROLL_SPEED,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            playOnInit: true,
          }),
        ]}
        className="relative w-full"
        style={{
          maskImage: "linear-gradient(to right, #0000, #000 10%, #000 90%, #0000)",
          WebkitMaskImage: "linear-gradient(to right, #0000, #000 10%, #000 90%, #0000)",
        }}
        aria-label={t("speakersAriaLabel")}
        onMouseEnter={() => getAutoScroll()?.stop()}
      >
        <CarouselPrevious
          className="z-10 -translate-x-1/2 rounded-full border-border bg-card shadow-md transition-transform hover:-translate-y-0.5"
          aria-label={t("speakersPrevious")}
          data-carousel-nav
        />

        <CarouselNext
          className="z-10 translate-x-1/2 rounded-full border-border bg-card shadow-md transition-transform hover:-translate-y-0.5"
          aria-label={t("speakersNext")}
          data-carousel-nav
        />

        <CarouselContent className="py-4 [maskImage:linear-gradient(90deg,#0000,#000_4%,#000_96%,#0000)]">
          {speakers.map((s, i) => (
            <CarouselItem key={`${s.id}-${i}`} className="basis-auto rounded-lg">
              <SpeakerCard
                {...s}
                index={i}
                groupName={GROUP_NAME}
                isChecked={checkedIndexes.has(i)}
                onCheckedChange={(checked) => handleCardCheckedChange(i, checked)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

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
    </AnimateInView>
  );
}
