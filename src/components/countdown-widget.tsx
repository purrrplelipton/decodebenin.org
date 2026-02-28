import { Icon } from "@iconify-icon/react";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { cn } from "#/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const STORAGE_KEYS = {
  VISITED: "decode_countdown_visited",
  EXPANDED: "decode_countdown_expanded",
};

export function CountdownWidget() {
  const t = useTranslations();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);

    // PERSISTENCE LOGIC
    const visited = localStorage.getItem(STORAGE_KEYS.VISITED);
    const expandedPref = localStorage.getItem(STORAGE_KEYS.EXPANDED);

    if (!visited) {
      // First time visitor: expand by default
      setIsExpanded(true);
      localStorage.setItem(STORAGE_KEYS.VISITED, "true");
      localStorage.setItem(STORAGE_KEYS.EXPANDED, "true");
    } else {
      // Returning visitor: respect preference, default to collapsed
      setIsExpanded(expandedPref === "true");
    }

    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-06-06T09:00:00").getTime();
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleExpanded = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    localStorage.setItem(STORAGE_KEYS.EXPANDED, String(newState));
  };

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed right-0 bottom-6 z-40 transition-transform duration-500 ease-in-out lg:bottom-12",
        isExpanded
          ? "translate-x-0"
          : "translate-x-[calc(100%-24px)] lg:translate-x-[calc(100%-32px)]",
      )}
    >
      <div className="flex items-center">
        {/* Pull Tab Trigger */}
        <button
          type="button"
          onClick={toggleExpanded}
          className={cn(
            "scrapbook-card relative -mr-1 flex h-24 w-8 items-center justify-center rounded-l-md border-decode-green/30 border-y border-l bg-decode-green/20 text-decode-green transition-colors hover:bg-decode-green/30 focus:outline-none focus:ring-2 focus:ring-decode-green lg:h-32 lg:w-10",
            !isExpanded && "animate-pulse",
          )}
          aria-label={isExpanded ? t("uiClose") : t("countdownTitle")}
        >
          <div className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 rotate-12">
            <div className="h-6 w-3 rounded-sm bg-decode-yellow/40 opacity-60 shadow-sm" />
          </div>

          <Icon
            icon={isExpanded ? "hugeicons:arrow-right-01" : "hugeicons:clock-01"}
            className={cn(
              "text-xl transition-transform lg:text-2xl",
              !isExpanded && "animate-bounce",
            )}
          />

          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 font-bold text-[10px] uppercase tracking-tighter opacity-70 [writing-mode:vertical-lr] lg:text-xs">
            {isExpanded ? t("uiClose") : t("countdownTitle")}
          </span>
        </button>

        {/* Content Area */}
        <div className="scrapbook-card pin-effect rounded-l-lg border border-decode-green/30 bg-background/95 p-4 shadow-2xl backdrop-blur-md lg:p-6">
          <div className="text-center">
            <div className="mb-4 font-bold text-decode-green text-xs uppercase tracking-widest opacity-80 lg:text-sm">
              {t("countdownTitle")}
            </div>
            <div className="grid grid-cols-4 gap-3 lg:gap-4">
              <CountdownItem value={timeLeft.days} label={t("countdownDays")} />
              <CountdownItem value={timeLeft.hours} label={t("countdownHours")} />
              <CountdownItem value={timeLeft.minutes} label={t("countdownMinutes")} />
              <CountdownItem value={timeLeft.seconds} label={t("countdownSeconds")} />
            </div>

            {/* Close Button Inside (Optional but helpful) */}
            <button
              type="button"
              onClick={toggleExpanded}
              className="mt-4 text-[10px] text-muted-foreground underline transition-colors hover:text-decode-green lg:text-xs"
            >
              {t("uiClose")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="relative rounded-md bg-decode-green/5 p-2 ring-1 ring-decode-green/10 transition-transform hover:scale-105 lg:p-3">
      <div className="font-bold font-mono text-decode-purple text-xl lg:text-2xl">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-tighter lg:text-xs">
        {label}
      </div>
      {/* Subtle paper texture/dots */}
      <div className="dotted-paper pointer-events-none absolute inset-0 opacity-5" />
    </div>
  );
}
