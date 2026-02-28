import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import {
  Pillar1EducationAndLearningResources,
  Pillar2IndustryMentorship,
  Pillar3CommunityConnection,
  Pillar4EventsAndNetworking,
} from "#/assets/images";
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
      <div
        className="absolute top-12 right-8 rotate-8 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-yellow rounded-sm bg-card p-2">
          <img
            src={Pillar1EducationAndLearningResources}
            alt="Modern learning setup with laptop showing tutorials surrounded by tech books and notepads"
            loading="lazy"
            className="h-32 w-28 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute top-2/3 left-12 -rotate-6 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-red rounded-sm bg-card p-2">
          <img
            src={Pillar2IndustryMentorship}
            alt="Senior developer explaining code to junior developer at monitor in professional office setting"
            loading="lazy"
            className="h-28 w-32 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute right-1/4 bottom-16 rotate-12 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-green rounded-sm bg-card p-2">
          <img
            src={Pillar3CommunityConnection}
            alt="Diverse young people sitting together in casual community space engaged in discussion"
            loading="lazy"
            className="h-24 w-28 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute bottom-40 left-8 -rotate-3 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-purple rounded-sm bg-card p-2">
          <img
            src={Pillar4EventsAndNetworking}
            alt="Active community event with people mingling, chatting, and speaker demo happening in background"
            loading="lazy"
            className="h-32 w-24 rounded object-cover"
          />
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
        className="washi-red absolute top-1/3 right-16 h-3 w-20 rotate-8 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute bottom-1/3 left-1/3 h-3 w-24 -rotate-8 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      {/* DECORATIVE DOTS */}
      <div
        className="absolute top-20 right-1/3 size-2 rounded-full bg-decode-yellow opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 size-2.5 rounded-full bg-decode-red/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute right-8 bottom-1/4 size-2 rounded-full bg-decode-green/50 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      {/* PAINT STAINS */}
      <div
        className="absolute top-2/3 left-1/2 h-28 w-32 rounded-full bg-decode-red/8 opacity-10 blur-3xl sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/4 bottom-1/2 h-24 w-20 rounded-full bg-decode-purple/8 opacity-10 blur-2xl sm:opacity-100 lg:opacity-25 xl:opacity-100"
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
                  className={cn(
                    "scrapbook-card relative rounded-lg bg-card p-6 transition-transform duration-300 hover:rotate-0 md:p-8",
                    pillar.rotation,
                  )}
                >
                  {/* Tape decoration */}
                  <div
                    className={cn(
                      "absolute -top-2 h-5 w-16 rounded-sm",
                      index % 2 === 0 ? "left-8 rotate-1" : "right-8 -rotate-1",
                      washiMap[pillar.accent],
                    )}
                    aria-hidden="true"
                  />

                  {/* Pin */}
                  <div
                    className={cn(
                      "absolute -top-1.5 size-3 rounded-full shadow-md",
                      index % 2 === 0 ? "right-5" : "left-5",
                      accentBgMap[pillar.accent].replace("/10", ""),
                    )}
                    style={{ background: `var(--${pillar.accent})` }}
                    aria-hidden="true"
                  />

                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={cn(
                        "flex size-11 items-center justify-center rounded-xl",
                        accentBgMap[pillar.accent],
                      )}
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
