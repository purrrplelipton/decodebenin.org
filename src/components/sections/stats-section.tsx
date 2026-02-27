import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import { useCountUp } from "#/hooks/use-count-up";
import { useInView } from "#/hooks/use-in-view";

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
        className={`scrapbook-card relative rounded-lg border ${accentClasses[accent]} p-6 text-center ${rotation} transition-transform duration-300 hover:rotate-0 md:p-8`}
      >
        <div
          className={`absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 rounded-sm ${accent === "green" ? "washi-green" : accent === "yellow" ? "washi-yellow" : "washi-red"}`}
          aria-hidden="true"
        />
        <p
          className={`font-bold font-serif text-4xl ${numberClasses[accent]} md:text-5xl lg:text-6xl`}
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
      <div className="absolute top-20 left-8 hidden -rotate-10 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect torn-edge-top torn-edge-bottom paper-crease paint-stain-green rounded-sm bg-card p-2">
          <div className="flex h-28 w-24 items-center justify-center rounded bg-linear-to-br from-decode-green/20 to-decode-yellow/20 text-muted-foreground">
            📸
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-12 hidden rotate-5 lg:block" aria-hidden="true">
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-yellow rounded-sm bg-card p-2">
          <div className="flex h-32 w-28 items-center justify-center rounded bg-linear-to-br from-decode-yellow/25 to-decode-red/25 text-muted-foreground">
            🎞️
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/4 hidden -rotate-6 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect torn-edge-top torn-edge-bottom paper-crease paint-stain-red rounded-sm bg-card p-2">
          <div className="flex h-24 w-32 items-center justify-center rounded bg-linear-to-br from-decode-red/20 to-decode-purple/20 text-muted-foreground">
            📷
          </div>
        </div>
      </div>

      <div className="absolute right-1/3 bottom-12 hidden rotate-8 lg:block" aria-hidden="true">
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-purple rounded-sm bg-card p-2">
          <div className="flex h-28 w-24 items-center justify-center rounded bg-linear-to-br from-decode-purple/20 to-decode-green/20 text-muted-foreground">
            🎬
          </div>
        </div>
      </div>

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
        className="washi-red absolute top-1/3 left-1/3 hidden h-3 w-20 rotate-12 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/4 bottom-1/2 hidden h-3 w-16 -rotate-8 rounded-sm lg:block"
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
        className="absolute top-1/2 right-1/2 hidden size-2 rounded-full bg-decode-red/40 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/2 hidden size-2.5 rounded-full bg-decode-purple/40 lg:block"
        aria-hidden="true"
      />

      {/* PAINT STAINS */}
      <div
        className="absolute top-1/4 left-1/3 hidden h-32 w-36 rounded-full bg-decode-yellow/8 blur-3xl lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/3 bottom-1/3 hidden h-28 w-24 rounded-full bg-decode-green/8 blur-2xl lg:block"
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
