import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import {
  HandsOnProjectWork,
  KnowledgeSharingPresentation,
  NetworkingAtCommunityEvents,
  WorkshopLearningEnvironment,
} from "#/assets/images";
import { AnimateInView } from "#/components/animate-in-view";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/components/ui/carousel";
import { galleryImages } from "#/lib/data";
import { cn } from "#/lib/utils";

export function GallerySection() {
  const t = useTranslations();

  return (
    <section
      className="relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="gallery-heading"
    >
      {/* Dotted paper bg */}
      <div className="dotted-paper absolute inset-0 opacity-40" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <div
        className="absolute top-24 right-8 rotate-8 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-yellow rounded-sm bg-card p-2">
          <img
            src={WorkshopLearningEnvironment}
            alt="Active workshop with attendees taking notes while presenter demonstrates content"
            loading="lazy"
            className="h-32 w-28 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute top-1/2 left-12 -rotate-6 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-red rounded-sm bg-card p-2">
          <img
            src={HandsOnProjectWork}
            alt="Workshop participants coding, building, and designing with projects visible on screens"
            loading="lazy"
            className="h-28 w-32 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute right-1/4 bottom-28 rotate-10 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-green rounded-sm bg-card p-2">
          <img
            src={KnowledgeSharingPresentation}
            alt="Confident presenter demonstrating expertise to engaged audience with tech demo visible"
            loading="lazy"
            className="h-24 w-32 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute bottom-12 left-1/3 -rotate-4 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-purple rounded-sm bg-card p-2">
          <img
            src={NetworkingAtCommunityEvents}
            alt="People naturally networking in small groups at vibrant modern venue with Benin-inspired décor"
            loading="lazy"
            className="h-28 w-24 rounded object-cover"
          />
        </div>
      </div>

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
        <AnimateInView animation="fade-up" className="mb-12 text-center md:mb-16">
          <h2
            id="gallery-heading"
            className="text-balance font-bold font-serif text-3xl text-foreground sm:text-4xl md:text-5xl"
          >
            {t("galleryTitle")}
          </h2>
        </AnimateInView>

        {/* Photo gallery carousel */}
        <AnimateInView animation="fade-up" delay={100}>
          <div className="mx-auto max-w-4xl">
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
              aria-label="Community photo gallery"
            >
              <CarouselContent className="-ml-4">
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
                      key={image.alt}
                      className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                    >
                      <div
                        className={cn(
                          "scrapbook-card relative rounded-lg bg-card p-3 transition-transform duration-300 hover:rotate-0",
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
                        {/* Photo placeholder */}
                        <div className="flex aspect-4/3 items-center justify-center rounded-md bg-muted">
                          <div className="flex flex-col items-center gap-2 text-muted-foreground">
                            <svg
                              className="size-8 opacity-40"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                              />
                            </svg>
                            <span className="text-xs">{image.alt}</span>
                          </div>
                        </div>
                        {/* Caption area */}
                        <p className="mt-2 text-center text-muted-foreground text-xs">
                          {image.alt}
                        </p>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="-mr-4 border-border bg-card text-foreground hover:bg-accent sm:flex md:-mr-12" />
              <CarouselNext className="-ml-4 border-border bg-card text-foreground hover:bg-accent sm:flex md:-ml-12" />
            </Carousel>
          </div>
        </AnimateInView>

        {/* Testimonial */}
        <AnimateInView animation="fade-up" delay={250} className="mt-12 md:mt-16">
          <blockquote className="scrapbook-card relative mx-auto max-w-2xl -rotate-1 rounded-lg bg-card p-6 text-center transition-transform duration-300 hover:rotate-0 md:p-8">
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
          </blockquote>
        </AnimateInView>
      </div>
    </section>
  );
}
