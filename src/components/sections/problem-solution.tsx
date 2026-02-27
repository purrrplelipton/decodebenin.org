import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";

export function ProblemSolutionSection() {
  const t = useTranslations();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="problem-solution-heading"
    >
      {/* Dotted paper background */}
      <div className="dotted-paper absolute inset-0 opacity-50" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <div className="absolute top-12 right-8 hidden rotate-8 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect torn-edge-top torn-edge-bottom paper-crease paint-stain-red rounded-sm bg-card p-2">
          <div className="flex h-32 w-28 items-center justify-center rounded bg-linear-to-br from-decode-red/20 to-decode-yellow/20 text-muted-foreground">
            📸
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-12 hidden -rotate-6 lg:block" aria-hidden="true">
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-green rounded-sm bg-card p-2">
          <div className="flex h-28 w-32 items-center justify-center rounded bg-linear-to-br from-decode-green/20 to-decode-purple/20 text-muted-foreground">
            🎞️
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-1/4 hidden rotate-12 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect torn-edge-top torn-edge-bottom paper-crease paint-stain-yellow rounded-sm bg-card p-2">
          <div className="flex h-24 w-32 items-center justify-center rounded bg-linear-to-br from-decode-yellow/20 to-decode-red/20 text-muted-foreground">
            📷
          </div>
        </div>
      </div>

      <div className="absolute right-1/3 bottom-16 hidden -rotate-4 lg:block" aria-hidden="true">
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-purple rounded-sm bg-card p-2">
          <div className="flex h-28 w-24 items-center justify-center rounded bg-linear-to-br from-decode-purple/20 to-decode-green/20 text-muted-foreground">
            🎬
          </div>
        </div>
      </div>

      {/* Scrapbook decorations */}
      <div
        className="washi-yellow absolute top-12 right-8 h-3 w-20 -rotate-2 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-green absolute bottom-16 left-12 h-3 w-16 rotate-6 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-1/3 left-1/4 hidden h-3 w-20 rotate-8 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/4 bottom-1/3 hidden h-3 w-20 -rotate-10 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/2 hidden size-2 rounded-full bg-decode-green/50 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/3 hidden size-2.5 rounded-full bg-decode-red/40 lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="problem-solution-heading" className="sr-only">
          The Problem and Our Solution
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Problem Card */}
          <AnimateInView animation="fade-left" duration={700}>
            <article className="scrapbook-card relative -rotate-1 rounded-lg bg-card p-6 transition-transform duration-300 hover:rotate-0 md:p-8">
              {/* Tape effect */}
              <div
                className="washi-red absolute -top-2 left-8 h-5 w-16 rotate-1 rounded-sm"
                aria-hidden="true"
              />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-decode-red/10">
                  <Icon
                    icon="hugeicons:alert-01"
                    className="text-decode-red text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold font-serif text-foreground text-xl md:text-2xl">
                  {t("problemTitle")}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t("problemText")}</p>

              {/* Decorative pin */}
              <div
                className="absolute -top-1.5 right-6 size-3 rounded-full bg-decode-red shadow-md"
                aria-hidden="true"
              />
            </article>
          </AnimateInView>

          {/* Solution Card */}
          <AnimateInView animation="fade-right" delay={200} duration={700}>
            <article className="scrapbook-card relative rotate-1 rounded-lg bg-card p-6 transition-transform duration-300 hover:rotate-0 md:p-8">
              {/* Tape effect */}
              <div
                className="washi-green absolute -top-2 right-8 h-5 w-16 -rotate-1 rounded-sm"
                aria-hidden="true"
              />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-decode-green/10">
                  <Icon
                    icon="hugeicons:bulb-charging"
                    className="text-decode-green text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold font-serif text-foreground text-xl md:text-2xl">
                  {t("solutionTitle")}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t("solutionText")}</p>

              {/* Decorative pin */}
              <div
                className="absolute -top-1.5 left-6 size-3 rounded-full bg-decode-green shadow-md"
                aria-hidden="true"
              />
            </article>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
