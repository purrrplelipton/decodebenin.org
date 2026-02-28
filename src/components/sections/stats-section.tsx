import { useTranslations } from "use-intl";
import {
  GrowingCommunityGroupPhoto,
  ImpactMomentStudentAchievementDisplay,
  MentorshipMultiplierEffect,
  NetworkExpansionConnectionPoints,
} from "#/assets/images";
import { AnimateInView } from "#/components/animate-in-view";
import { useCountUp } from "#/hooks/use-count-up";
import { useInView } from "#/hooks/use-in-view";
import { cn } from "#/lib/utils";

function StatCard({
  end,
  suffix,
  prefix,
  label,
  accent,
  rotation,
  delay,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  accent: string;
  rotation: string;
  delay: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3, triggerOnce: false });
  const { display } = useCountUp({ end, suffix, prefix, enabled: isInView, duration: 2500 });

  const accentClasses: Record<string, string> = {
    green: "border-decode-green/30 bg-decode-green/5",
    yellow: "border-decode-yellow/30 bg-decode-yellow/5",
    red: "border-decode-red/30 bg-decode-red/5",
  };
  const numberClasses: Record<string, string> = {
    green: "text-decode-green",
    yellow: "text-decode-yellow",
    red: "text-decode-red",
  };

  return (
    <AnimateInView animation="scale" delay={delay} duration={700}>
      <div
        ref={ref}
        className={cn(
          "scrapbook-card relative rounded-lg border p-6 text-center backdrop-blur-lg transition-transform duration-300 hover:rotate-0 md:p-8",
          accentClasses[accent],
          rotation,
        )}
      >
        <div
          className={cn(
            "absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 rounded-sm",
            accent === "green" ? "washi-green" : accent === "yellow" ? "washi-yellow" : "washi-red",
          )}
          aria-hidden="true"
        />
        <p
          className={cn(
            "font-bold font-serif text-4xl md:text-5xl lg:text-6xl",
            numberClasses[accent],
          )}
          aria-live="polite"
        >
          {display}
        </p>
        <p className="mt-2 font-medium text-primary-foreground/70 text-sm md:text-base">{label}</p>
      </div>
    </AnimateInView>
  );
}

export function StatsSection() {
  const t = useTranslations();

  return (
    <section
      className="relative overflow-hidden bg-decode-purple py-20 md:py-28"
      aria-labelledby="stats-heading"
    >
      {/* Grid paper bg */}
      <div className="grid-paper absolute inset-0 opacity-15" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-green absolute top-20 left-8 -rotate-10 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={GrowingCommunityGroupPhoto}
          alt="Large diverse group of Decode Benin community members smiling together in community space"
          loading="lazy"
          className="h-28 w-24 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-yellow absolute top-1/2 right-12 rotate-5 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={ImpactMomentStudentAchievementDisplay}
          alt="Young person reviewing bulletin board displaying multiple achievement certificates and project showcases"
          loading="lazy"
          className="h-32 w-28 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-red absolute bottom-24 left-1/4 -rotate-6 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={NetworkExpansionConnectionPoints}
          alt="Young people gathered around map of Benin showing community's reach with visual indicators"
          loading="lazy"
          className="h-24 w-32 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-purple absolute right-1/3 bottom-12 rotate-8 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={MentorshipMultiplierEffect}
          alt="Three-generation chain of mentor, mid-level developer, and student engaged with each other"
          loading="lazy"
          className="h-28 w-24 rounded object-cover"
        />
      </AnimateInView>

      {/* Decorative elements */}
      <div
        className="washi-yellow absolute top-12 left-16 h-3 w-14 rotate-6 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-green absolute right-10 bottom-16 h-3 w-18 -rotate-3 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-1/3 left-1/3 h-3 w-20 rotate-12 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/4 bottom-1/2 h-3 w-16 -rotate-8 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 size-2 rounded-full bg-decode-yellow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/5 size-3 rounded-full bg-decode-green/60"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/2 size-2 rounded-full bg-decode-red/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/2 size-2.5 rounded-full bg-decode-purple/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      {/* PAINT STAINS */}
      <div
        className="absolute top-1/4 left-1/3 h-32 w-36 rounded-full bg-decode-yellow/8 opacity-10 blur-3xl sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/3 bottom-1/3 h-28 w-24 rounded-full bg-decode-green/8 opacity-10 blur-2xl sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        <AnimateInView animation="fade-up" className="mb-4 text-center">
          <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1 font-bold text-primary-foreground/60 text-xs uppercase tracking-widest">
            {t("statsSubtitle")}
          </span>
        </AnimateInView>

        <AnimateInView animation="fade-up" delay={100} className="mb-12 text-center md:mb-16">
          <h2
            id="stats-heading"
            className="text-balance font-bold font-serif text-3xl text-primary-foreground sm:text-4xl"
          >
            {t("statsTitle")}
          </h2>
        </AnimateInView>

        <div className="grid gap-6 sm:grid-cols-3 md:gap-8">
          <StatCard
            end={500}
            suffix="+"
            label={t("statsMembers")}
            accent="green"
            rotation="-rotate-2"
            delay={0}
          />
          <StatCard
            end={20}
            suffix="+"
            label={t("statsPartners")}
            accent="yellow"
            rotation="rotate-1"
            delay={150}
          />
          <StatCard end={1} label={t("statsGoal")} accent="red" rotation="-rotate-1" delay={300} />
        </div>
      </div>
    </section>
  );
}
