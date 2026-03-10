import { Icon } from "@iconify-icon/react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/components/ui/carousel";
import { galleryImages } from "#/lib/data";
import { cn } from "#/lib/utils";

const SCROLL_SPEED = 0.6;

export function GallerySection() {
  const t = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const [isInView, setIsInView] = useState(false);

  // -- Play/pause based on visibility --
  useEffect(() => {
    if (!api) return;
    const autoScroll = api.plugins().autoScroll;
    if (!autoScroll) return;

    if (isInView) {
      const timer = setTimeout(() => {
        if (!autoScroll.isPlaying()) autoScroll.play();
      }, 250);
      return () => clearTimeout(timer);
    }

    if (autoScroll.isPlaying()) autoScroll.stop();
  }, [api, isInView]);

  const handleMouseEnter = useCallback(() => {
    const autoScroll = api?.plugins().autoScroll;
    if (autoScroll?.isPlaying()) autoScroll.stop();
  }, [api]);

  const handleMouseLeave = useCallback(() => {
    // Resume handled by isInView effect if still in view
    if (isInView) {
      const autoScroll = api?.plugins().autoScroll;
      if (autoScroll && !autoScroll.isPlaying()) autoScroll.play();
    }
  }, [api, isInView]);

  return (
    <section
      className="relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="gallery-heading"
    >
      {/* Dotted paper bg */}
      <div className="dotted-paper absolute inset-0" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-yellow absolute top-24 right-8 rotate-8 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/workshop-learning-environment.avif"
          alt="Active workshop with attendees taking notes while presenter demonstrates content"
          loading="lazy"
          className="h-32 w-28 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-red absolute top-1/2 left-12 -rotate-6 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/hands-on-project-work.avif"
          alt="Workshop participants coding, building, and designing with projects visible on screens"
          loading="lazy"
          className="h-28 w-32 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-green absolute right-1/4 bottom-28 rotate-10 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/knowledge-sharing-presentation.avif"
          alt="Confident presenter demonstrating expertise to engaged audience with tech demo visible"
          loading="lazy"
          className="h-24 w-32 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-purple absolute bottom-12 left-1/3 -rotate-4 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/networking-at-community-events.avif"
          alt="People naturally networking in small groups at vibrant modern venue with Benin-inspired décor"
          loading="lazy"
          className="h-28 w-24 rounded object-cover"
        />
      </AnimateInView>

      {/* Decorative */}
      <div
        className="washi-red absolute top-16 right-12 h-3 w-20 rotate-3 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-yellow absolute bottom-20 left-10 h-3 w-16 -rotate-6 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-green absolute top-1/3 left-1/4 h-3 w-20 rotate-8 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/3 bottom-1/3 h-3 w-20 -rotate-8 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/3 size-2 rounded-full bg-decode-yellow opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-2/3 left-1/2 size-2.5 rounded-full bg-decode-green/50 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/2 bottom-1/4 size-2 rounded-full bg-decode-red/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <AnimateInView
          as="h2"
          id="gallery-heading"
          animation="fade-up"
          className="mb-12 text-balance text-center font-bold font-serif text-3xl text-foreground sm:text-4xl md:mb-16 md:text-5xl"
          onInViewChange={setIsInView}
        >
          {t("galleryTitle")}
        </AnimateInView>

        {/* Photo gallery carousel */}
        <AnimateInView
          animation="fade-up"
          delay={100}
          className="mx-auto max-w-5xl"
          triggerOnce={false}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            plugins={[
              AutoScroll({
                speed: SCROLL_SPEED,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                playOnInit: true,
              }),
            ]}
            className="w-full"
            aria-label={t("galleryAriaLabel")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent className="-ml-4 py-8">
              {galleryImages.map((image, index) => {
                const rotations = [
                  "rotate-1",
                  "-rotate-2",
                  "rotate-2",
                  "-rotate-1",
                  "rotate-1",
                  "-rotate-2",
                ];
                const washis = [
                  "washi-green",
                  "washi-yellow",
                  "washi-red",
                  "washi-green",
                  "washi-yellow",
                  "washi-red",
                ];
                return (
                  <CarouselItem
                    key={image.id}
                    className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                  >
                    <div
                      className={cn(
                        "scrapbook-card relative rounded-lg bg-card p-3 shadow-sm transition-transform duration-300 hover:rotate-0 hover:shadow-md",
                        rotations[index % rotations.length],
                      )}
                    >
                      {/* Tape */}
                      <div
                        className={cn(
                          "absolute -top-2 left-1/2 h-5 w-14 -translate-x-1/2 rounded-sm",
                          washis[index % washis.length],
                        )}
                        aria-hidden="true"
                      />
                      {/* Photo */}
                      <div className="aspect-4/3 overflow-hidden rounded-md bg-muted">
                        <img
                          src={image.src}
                          alt={t(image.altKey)}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      {/* Caption area */}
                      <p className="mt-2 text-center text-muted-foreground text-xs">
                        {t(image.altKey)}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-mr-4 border-border bg-card text-foreground hover:bg-accent md:-mr-12" />
            <CarouselNext className="ml-4 border-border bg-card text-foreground hover:bg-accent md:ml-12" />
          </Carousel>
        </AnimateInView>

        {/* Testimonial */}
        <AnimateInView
          as="blockquote"
          animation="fade-up"
          delay={250}
          className="scrapbook-card relative mx-auto mt-12 max-w-2xl -rotate-1 rounded-lg bg-card p-6 text-center transition-transform duration-300 hover:rotate-0 md:mt-16 md:p-8"
        >
          <div
            className="washi-purple absolute -top-2 left-1/2 h-5 w-20 -translate-x-1/2 rounded-sm"
            aria-hidden="true"
          />
          <div
            className="absolute -top-1.5 right-8 size-3 rounded-full bg-decode-purple-light shadow-md"
            aria-hidden="true"
          />

          <Icon
            icon="hugeicons:quote-up"
            className="mx-auto mb-4 text-4xl text-decode-purple-light/30"
            aria-hidden="true"
          />
          <p className="font-medium font-serif text-foreground text-lg italic leading-relaxed md:text-xl">
            {t("galleryTestimonial")}
          </p>
          <footer className="mt-4">
            <cite className="font-bold text-muted-foreground text-sm not-italic">
              &mdash; {t("galleryTestimonialAuthor")}
            </cite>
          </footer>
        </AnimateInView>
      </div>
    </section>
  );
}
