import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import { cn } from "#/lib/utils";

const pillars = [
  {
    key: "Pillar1",
    icon: "hugeicons:graduation-scroll",
    accent: "decode-green",
    rotation: "-rotate-1",
  },
  { key: "Pillar2", icon: "hugeicons:briefcase-01", accent: "decode-yellow", rotation: "rotate-1" },
  { key: "Pillar3", icon: "hugeicons:user-multiple", accent: "decode-red", rotation: "-rotate-2" },
  {
    key: "Pillar4",
    icon: "hugeicons:calendar-03",
    accent: "decode-purple-light",
    rotation: "rotate-2",
  },
] as const;

const accentBgMap: Record<string, string> = {
  "decode-green": "bg-decode-green/10",
  "decode-yellow": "bg-decode-yellow/10",
  "decode-red": "bg-decode-red/10",
  "decode-purple-light": "bg-decode-purple-light/10",
};

const accentTextMap: Record<string, string> = {
  "decode-green": "text-decode-green",
  "decode-yellow": "text-decode-yellow",
  "decode-red": "text-decode-red",
  "decode-purple-light": "text-decode-purple-light",
};

const washiMap: Record<string, string> = {
  "decode-green": "washi-green",
  "decode-yellow": "washi-yellow",
  "decode-red": "washi-red",
  "decode-purple-light": "washi-purple",
};

export function OfferingsSection() {
  const t = useTranslations();

  return (
    <section
      id="offerings"
      className="relative overflow-hidden bg-decode-purple py-20 md:py-28"
      aria-labelledby="offerings-heading"
    >
      {/* Grid paper background */}
      <div className="grid-paper absolute inset-0 opacity-20" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <div className="absolute top-12 right-8 hidden rotate-8 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect torn-edge-top torn-edge-bottom paper-crease paint-stain-yellow rounded-sm bg-card p-2">
          <div className="flex h-32 w-28 items-center justify-center rounded bg-linear-to-br from-decode-yellow/25 to-decode-green/25 text-muted-foreground">
            📸
          </div>
        </div>
      </div>

      <div className="absolute top-2/3 left-12 hidden -rotate-6 lg:block" aria-hidden="true">
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-red rounded-sm bg-card p-2">
          <div className="flex h-28 w-32 items-center justify-center rounded bg-linear-to-br from-decode-red/20 to-decode-yellow/20 text-muted-foreground">
            🎞️
          </div>
        </div>
      </div>

      <div className="absolute right-1/4 bottom-16 hidden rotate-12 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect torn-edge-top torn-edge-bottom paper-crease paint-stain-green rounded-sm bg-card p-2">
          <div className="flex h-24 w-28 items-center justify-center rounded bg-linear-to-br from-decode-green/20 to-decode-purple/20 text-muted-foreground">
            📷
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 left-8 hidden -rotate-3 lg:block" aria-hidden="true">
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-purple rounded-sm bg-card p-2">
          <div className="flex h-32 w-24 items-center justify-center rounded bg-linear-to-br from-decode-yellow/20 to-decode-red/20 text-muted-foreground">
            🎬
          </div>
        </div>
      </div>

      {/* Decorative washi tapes */}
      <div
        className="washi-yellow absolute top-16 left-8 h-3 w-20 rotate-12 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-green absolute right-12 bottom-20 h-3 w-16 -rotate-6 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-1/3 right-16 hidden h-3 w-20 rotate-8 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute bottom-1/3 left-1/3 hidden h-3 w-24 -rotate-8 rounded-sm lg:block"
        aria-hidden="true"
      />

      {/* DECORATIVE DOTS */}
      <div
        className="absolute top-20 right-1/3 hidden size-2 rounded-full bg-decode-yellow lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 hidden size-2.5 rounded-full bg-decode-red/40 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute right-8 bottom-1/4 hidden size-2 rounded-full bg-decode-green/50 lg:block"
        aria-hidden="true"
      />
      {/* PAINT STAINS */}
      <div
        className="absolute top-2/3 left-1/2 hidden h-28 w-32 rounded-full bg-decode-red/8 blur-3xl lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/4 bottom-1/2 hidden h-24 w-20 rounded-full bg-decode-purple/8 blur-2xl lg:block"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <AnimateInView animation="fade-up" className="mb-4 text-center">
          <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1 font-bold text-primary-foreground/60 text-xs uppercase tracking-widest">
            {t("offeringsSubtitle")}
          </span>
        </AnimateInView>

        <AnimateInView animation="fade-up" delay={100} className="mb-12 text-center md:mb-16">
          <h2
            id="offerings-heading"
            className="text-balance font-bold font-serif text-3xl text-primary-foreground sm:text-4xl md:text-5xl"
          >
            {t("offeringsTitle")}
          </h2>
        </AnimateInView>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {pillars.map((pillar, index) => {
            return (
              <AnimateInView
                key={pillar.key}
                animation={index % 2 === 0 ? "fade-left" : "fade-right"}
                delay={index * 100}
                duration={700}
              >
                <article
                  className={`scrapbook-card relative rounded-lg bg-card p-6 md:p-8 ${pillar.rotation} transition-transform duration-300 hover:rotate-0`}
                >
                  {/* Tape decoration */}
                  <div
                    className={`absolute -top-2 ${index % 2 === 0 ? "left-8" : "right-8"} h-5 w-16 ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} rounded-sm ${washiMap[pillar.accent]}`}
                    aria-hidden="true"
                  />

                  {/* Pin */}
                  <div
                    className={`absolute -top-1.5 ${index % 2 === 0 ? "right-5" : "left-5"} size-3 rounded-full shadow-md ${accentBgMap[pillar.accent].replace("/10", "")}`}
                    style={{ background: `var(--${pillar.accent})` }}
                    aria-hidden="true"
                  />

                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl ${accentBgMap[pillar.accent]}`}
                    >
                      <Icon
                        icon={pillar.icon}
                        className={cn("text-xl", accentTextMap[pillar.accent])}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-bold font-serif text-foreground text-lg md:text-xl">
                      {t(`offerings${pillar.key}Title`)}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`offerings${pillar.key}Desc`)}
                  </p>
                </article>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
