import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import {
  MissionInActionRoadmapClarity,
  ValuesInPracticeCollaboration,
  VisionFutureTechLeaders,
} from "#/assets/images";
import { AnimateInView } from "#/components/animate-in-view";
import { values } from "#/lib/data";
import { cn } from "#/lib/utils";

export function MissionVisionSection() {
  const t = useTranslations();

  return (
    <section
      className="relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="mission-heading"
    >
      {/* Dotted paper bg */}
      <div className="dotted-paper absolute inset-0" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-yellow absolute top-16 right-8 rotate-6 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={MissionInActionRoadmapClarity}
          alt="Young professional studying visible career roadmap document at desk with thoughtful expression"
          loading="lazy"
          className="h-28 w-24 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-red absolute top-2/3 left-10 -rotate-8 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={VisionFutureTechLeaders}
          alt="Diverse young people standing confidently in modern tech environment with growth indicators visible"
          loading="lazy"
          className="h-32 w-28 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-green absolute right-1/4 bottom-20 rotate-10 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={ValuesInPracticeCollaboration}
          alt="Diverse hands coming together on desk with laptops and notebooks photographed from above"
          loading="lazy"
          className="h-24 w-32 rounded object-cover"
        />
      </AnimateInView>

      {/* Decorative elements */}
      <div
        className="washi-green absolute top-20 right-10 h-3 w-20 rotate-3 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-yellow absolute bottom-24 left-8 h-3 w-16 -rotate-8 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-1/3 right-1/3 h-3 w-24 rotate-12 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute bottom-1/3 left-1/4 h-3 w-20 -rotate-6 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-4 size-3 rounded-full bg-decode-red/50"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/3 size-2.5 rounded-full bg-decode-green/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/2 bottom-1/4 size-2 rounded-full bg-decode-yellow/50 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Mission */}
          <AnimateInView animation="fade-left" duration={700}>
            <article className="scrapbook-card relative rotate-1 rounded-lg bg-card p-6 transition-transform duration-300 hover:rotate-0 md:p-8">
              <div
                className="washi-green absolute -top-2 left-10 h-5 w-16 -rotate-1 rounded-sm"
                aria-hidden="true"
              />
              <div
                className="absolute -top-1.5 right-6 size-3 rounded-full bg-decode-green shadow-md"
                aria-hidden="true"
              />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-decode-green/10">
                  <Icon
                    icon="hugeicons:target-02"
                    className="text-decode-green text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h2
                  id="mission-heading"
                  className="font-bold font-serif text-foreground text-xl md:text-2xl"
                >
                  {t("missionLabel")}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t("missionText")}</p>
            </article>
          </AnimateInView>

          {/* Vision */}
          <AnimateInView animation="fade-right" delay={150} duration={700}>
            <article className="scrapbook-card relative -rotate-1 rounded-lg bg-card p-6 transition-transform duration-300 hover:rotate-0 md:p-8">
              <div
                className="washi-yellow absolute -top-2 right-10 h-5 w-16 rotate-1 rounded-sm"
                aria-hidden="true"
              />
              <div
                className="absolute -top-1.5 left-6 size-3 rounded-full bg-decode-yellow shadow-md"
                aria-hidden="true"
              />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-decode-yellow/10">
                  <Icon
                    icon="hugeicons:eye"
                    className="text-decode-yellow text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="font-bold font-serif text-foreground text-xl md:text-2xl">
                  {t("visionLabel")}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t("visionText")}</p>
            </article>
          </AnimateInView>
        </div>

        {/* Values */}
        <AnimateInView animation="fade-up" delay={300} duration={700} className="mt-12 md:mt-16">
          <div className="scrapbook-card relative mx-auto max-w-3xl rounded-lg bg-card p-6 text-center md:p-8">
            <div
              className="washi-purple absolute -top-2 left-1/2 h-5 w-20 -translate-x-1/2 rounded-sm"
              aria-hidden="true"
            />

            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-decode-purple/10">
                <Icon
                  icon="hugeicons:heart-check"
                  className="text-decode-purple-light text-xl"
                  aria-hidden="true"
                />
              </div>
              <h2 className="font-bold font-serif text-foreground text-xl md:text-2xl">
                {t("missionValuesLabel")}
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {values.map(({ value, id }, i) => {
                const colors = [
                  "bg-decode-green/10 text-decode-green border-decode-green/20",
                  "bg-decode-yellow/10 text-decode-yellow border-decode-yellow/20",
                  "bg-decode-red/10 text-decode-red border-decode-red/20",
                  "bg-decode-purple-light/10 text-decode-purple-light border-decode-purple-light/20",
                ];
                return (
                  <span
                    key={id}
                    className={cn(
                      "inline-flex items-center rounded-full border px-5 py-2 font-bold text-sm",
                      colors[i % colors.length],
                    )}
                  >
                    {t(`mission${value}`)}
                  </span>
                );
              })}
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
