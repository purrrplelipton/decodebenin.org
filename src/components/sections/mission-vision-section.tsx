import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import { values } from "#/lib/data";

export function MissionVisionSection() {
  const t = useTranslations();

  return (
    <section
      className="relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="mission-heading"
    >
      {/* Dotted paper bg */}
      <div className="dotted-paper absolute inset-0 opacity-40" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <div className="absolute top-16 right-8 hidden rotate-6 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect torn-edge-top torn-edge-bottom paper-crease paint-stain-yellow rounded-sm bg-card p-2">
          <div className="flex h-28 w-24 items-center justify-center rounded bg-linear-to-br from-decode-yellow/20 to-decode-green/20 text-muted-foreground">
            📸
          </div>
        </div>
      </div>

      <div className="absolute top-2/3 left-10 hidden -rotate-8 lg:block" aria-hidden="true">
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-red rounded-sm bg-card p-2">
          <div className="flex h-32 w-28 items-center justify-center rounded bg-linear-to-br from-decode-red/20 to-decode-purple/20 text-muted-foreground">
            🎞️
          </div>
        </div>
      </div>

      <div className="absolute right-1/4 bottom-20 hidden rotate-10 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect torn-edge-top torn-edge-bottom paper-crease paint-stain-green rounded-sm bg-card p-2">
          <div className="flex h-24 w-32 items-center justify-center rounded bg-linear-to-br from-decode-green/20 to-decode-yellow/20 text-muted-foreground">
            📷
          </div>
        </div>
      </div>

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
        className="washi-red absolute top-1/3 right-1/3 hidden h-3 w-24 rotate-12 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute bottom-1/3 left-1/4 hidden h-3 w-20 -rotate-6 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-4 size-3 rounded-full bg-decode-red/50"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/3 hidden size-2.5 rounded-full bg-decode-green/40 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/2 bottom-1/4 hidden size-2 rounded-full bg-decode-yellow/50 lg:block"
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
              {values.map((val, i) => {
                const colors = [
                  "bg-decode-green/10 text-decode-green border-decode-green/20",
                  "bg-decode-yellow/10 text-decode-yellow border-decode-yellow/20",
                  "bg-decode-red/10 text-decode-red border-decode-red/20",
                  "bg-decode-purple-light/10 text-decode-purple-light border-decode-purple-light/20",
                ];
                return (
                  <span
                    key={val}
                    className={`inline-flex items-center rounded-full border px-5 py-2 font-bold text-sm ${colors[i % colors.length]}`}
                  >
                    {t(`mission${val}`)}
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
