import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "#/components/ui/carousel";
import { partners } from "#/lib/data";

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex shrink-0 items-center justify-center px-4">
      <img
        src={logo}
        alt={name}
        className="h-8 w-auto grayscale transition-all hover:grayscale-0"
      />
    </div>
  );
}

export function PartnersMarquee() {
  const t = useTranslations();
  const [api1, setApi1] = useState<CarouselApi>();
  const [api2, setApi2] = useState<CarouselApi>();
  const [isInView, setIsInView] = useState(false);

  // -- Play/pause carousel 1 --
  useEffect(() => {
    const autoScroll = api1?.plugins().autoScroll;
    if (!autoScroll) return;

    if (isInView) {
      const timer = setTimeout(() => {
        if (!autoScroll.isPlaying()) autoScroll.play();
      }, 100);
      return () => clearTimeout(timer);
    }

    if (autoScroll.isPlaying()) autoScroll.stop();
  }, [api1, isInView]);

  // -- Play/pause carousel 2 --
  useEffect(() => {
    const autoScroll = api2?.plugins().autoScroll;
    if (!autoScroll) return;

    if (isInView) {
      const timer = setTimeout(() => {
        if (!autoScroll.isPlaying()) autoScroll.play();
      }, 150); // Staggered delay
      return () => clearTimeout(timer);
    }

    if (autoScroll.isPlaying()) autoScroll.stop();
  }, [api2, isInView]);

  return (
    <section
      className="relative overflow-hidden border-border border-y bg-card py-12"
      aria-label={t("partnersTitle")}
    >
      {/* Subtle scrapbook decorations */}
      <div
        className="washi-green absolute top-4 left-8 h-2 w-16 rotate-6 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-yellow absolute right-8 bottom-4 h-2 w-12 -rotate-3 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 size-1.5 rounded-full bg-decode-red/30 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/3 size-1 rounded-full bg-decode-green/30 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      <AnimateInView
        as="div"
        animation="fade"
        onInViewChange={setIsInView}
        triggerOnce={false}
        className="mx-auto mb-8 block w-fit rounded-full bg-decode-green/10 px-4 py-1 text-center font-bold text-decode-green text-xs uppercase tracking-widest"
      >
        {t("partnersTitle")}
      </AnimateInView>

      <div className="flex flex-col gap-6">
        {/* Marquee row 1 */}
        <Carousel
          setApi={setApi1}
          opts={{ align: "start", loop: true, dragFree: true }}
          plugins={[
            AutoScroll({
              speed: 0.5,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full"
          style={{
            maskImage: "linear-gradient(to right, #0000, #000 10%, #000 90%, #0000)",
            WebkitMaskImage: "linear-gradient(to right, #0000, #000 10%, #000 90%, #0000)",
          }}
        >
          <CarouselContent className="ml-0">
            {partners.map((partner, i) => (
              <CarouselItem key={`${partner.slug}-${i}`} className="basis-auto pl-0">
                <PartnerLogo name={partner.name} logo={partner.logo} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Marquee row 2 (reverse) */}
        <Carousel
          setApi={setApi2}
          opts={{ align: "start", loop: true, dragFree: true }}
          plugins={[
            AutoScroll({
              direction: "backward", // Reverse direction
              speed: 0.5,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full"
          style={{
            maskImage: "linear-gradient(to right, #0000, #000 10%, #000 90%, #0000)",
            WebkitMaskImage: "linear-gradient(to right, #0000, #000 10%, #000 90%, #0000)",
          }}
        >
          <CarouselContent className="ml-0">
            {partners
              .slice()
              .reverse()
              .map((partner, i) => (
                <CarouselItem key={`rev-${partner.slug}-${i}`} className="basis-auto pl-0">
                  <PartnerLogo name={partner.name} logo={partner.logo} />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Screen reader accessible list */}
      <div className="sr-only">
        <h2>{t("partnersTitle")}</h2>
        <ul>
          {partners.map((partner) => (
            <li key={partner.slug}>{partner.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
