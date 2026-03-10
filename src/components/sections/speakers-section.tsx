import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import { SpeakersCarousel } from "#/components/speakers-carousel";
import { speakers } from "#/lib/data";

export function SpeakersSection() {
  const t = useTranslations();

  return (
    <section
      id="speakers"
      className="dotted-paper relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="speakers-heading"
    >
      {/* Warm corkboard overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.30 0.15 290 / 0.04) 1px, transparent 1px), radial-gradient(oklch(0.88 0.18 90 / 0.03) 2px, transparent 2px)",
          backgroundSize: "16px 16px, 32px 32px",
          backgroundPosition: "0 0, 8px 8px",
        }}
        aria-hidden="true"
      />

      {/* SCATTERED PHOTO CARDS */}
      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-green absolute top-20 left-6 -rotate-8 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/diverse-tech-community-gathering.avif"
          aria-hidden
          loading="lazy"
          className="h-28 w-24 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-yellow absolute top-1/4 right-8 rotate-6 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/knowledge-sharing-presentation.avif"
          aria-hidden
          loading="lazy"
          className="h-32 w-28 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-red absolute right-12 bottom-32 -rotate-4 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/networking-at-community-events.avif"
          aria-hidden
          loading="lazy"
          className="h-24 w-32 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-purple absolute bottom-24 left-16 rotate-10 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/startup-pitch-moment.avif"
          aria-hidden
          loading="lazy"
          className="h-28 w-24 rounded object-cover"
        />
      </AnimateInView>

      {/* WASHI TAPE ACCENTS */}
      <div
        className="washi-green absolute top-12 left-10 h-3 w-20 rotate-3 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-yellow absolute right-16 bottom-20 h-3 w-16 -rotate-6 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-1/2 left-4 h-3 w-24 -rotate-10 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/4 bottom-1/3 h-3 w-20 rotate-8 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      {/* DECORATIVE DOTS */}
      <div
        className="absolute top-2/3 right-10 size-3 rounded-full bg-decode-red/40"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/3 size-2 rounded-full bg-decode-green/50 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/3 bottom-1/4 size-2.5 rounded-full bg-decode-yellow/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      {/* PAINT STAINS */}
      <div
        className="absolute top-1/3 right-1/4 h-24 w-28 rounded-full bg-decode-yellow/8 opacity-10 blur-2xl sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/5 h-20 w-24 rounded-full bg-decode-green/10 opacity-10 blur-2xl sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Section header */}
        <AnimateInView
          as="span"
          animation="fade-up"
          className="mx-auto mb-4 block w-fit rounded-full bg-decode-green/10 px-4 py-1 font-bold text-decode-green text-xs uppercase tracking-widest"
        >
          {t("speakersSubtitle")}
        </AnimateInView>

        <AnimateInView
          as="h2"
          id="speakers-heading"
          animation="fade-up"
          delay={100}
          className="mb-10 text-balance text-center font-bold font-serif text-3xl text-foreground sm:text-4xl md:mb-14 md:text-5xl"
        >
          {t("speakersTitle")}
        </AnimateInView>

        {/* Carousel */}
        <SpeakersCarousel speakers={speakers} />
      </div>
    </section>
  );
}
