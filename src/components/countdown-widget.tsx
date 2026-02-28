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
        { "translate-x-[calc(100%-32px)] lg:translate-x-[calc(100%-44px)]": !isExpanded },
      )}
    >
      <style>{`
        @keyframes ribbon-flap {
          0%, 100% {
            transform: skewY(-1deg) perspective(800px) rotateX(0deg);
          }
          25% {
            transform: skewY(2deg) perspective(800px) rotateX(-2deg) translateY(-2px);
          }
          50% {
            transform: skewY(-2deg) perspective(800px) rotateX(2deg) translateY(1px);
          }
          75% {
            transform: skewY(1deg) perspective(800px) rotateX(-1deg) translateY(-1px);
          }
        }
        
        @keyframes ribbon-curl {
          0%, 100% {
            text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          }
          50% {
            text-shadow: 0 6px 16px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1);
          }
        }

        .ribbon-tab {
          animation: ribbon-flap 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .ribbon-tab::before {
          content: '';
          position: absolute;
          inset: -2px -1px -2px 0;
          background: linear-gradient(
            to right,
            rgba(34, 197, 94, 0.5) 0%,
            rgba(34, 197, 94, 0.8) 15%,
            rgba(34, 197, 94, 0.95) 40%,
            rgba(34, 197, 94, 0.85) 60%,
            rgba(34, 197, 94, 0.6) 85%,
            rgba(34, 197, 94, 0.3) 100%
          );
          border-radius: inherit;
          filter: blur(0.5px);
          z-index: -1;
        }

        .ribbon-tab::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.08) 25%,
            transparent 50%,
            rgba(0, 0, 0, 0.12) 75%,
            rgba(0, 0, 0, 0.35) 100%
          );
          border-radius: inherit;
          pointer-events: none;
        }

        .ribbon-tab:hover::before {
          filter: blur(0.5px) brightness(1.15);
        }

        .ribbon-tab:active {
          animation: none;
          transform: skewY(-1deg) perspective(800px) rotateX(-3deg) translateY(-3px);
        }
      `}</style>
      <div className="flex items-center">
        {/* Pull Tab Trigger */}
        <button
          type="button"
          onClick={toggleExpanded}
          className="ribbon-tab relative -mr-1 flex flex-col items-center justify-center gap-1.5 rounded-l-lg border-decode-green border-y-2 border-r-0 border-l-2 px-2.5 py-3 text-center text-decode-green transition-all focus:outline-none focus:ring-2 focus:ring-decode-green/60 focus:ring-offset-1 lg:gap-2 lg:px-3 lg:py-4"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(34, 197, 94, 0.45) 0%,
              rgba(34, 197, 94, 0.35) 50%,
              rgba(34, 197, 94, 0.25) 100%
            )`,
            boxShadow: `
              0 1px 3px rgba(0, 0, 0, 0.4),
              0 4px 12px rgba(0, 0, 0, 0.25),
              inset 0 1px 2px rgba(255, 255, 255, 0.15),
              inset 0 -1px 3px rgba(0, 0, 0, 0.2)
            `,
          }}
          aria-label={isExpanded ? t("uiClose") : t("countdownTitle")}
        >
          <Icon
            icon={isExpanded ? "hugeicons:arrow-right-01" : "hugeicons:clock-01"}
            className="relative z-10 text-xl drop-shadow-lg transition-transform lg:text-2xl"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
              textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
            }}
          />

          <span
            className="relative z-10 font-bold text-[10px] uppercase leading-tight tracking-tighter lg:text-[11px]"
            style={{
              animation: "ribbon-curl 2.5s ease-in-out infinite",
            }}
          >
            {isExpanded ? t("uiClose") : t("countdownPull")}
          </span>
        </button>

        {/* Content Area */}
        <div className="scrapbook-card pin-effect rounded-l-lg border border-decode-green/30 bg-background/95 p-4 text-center shadow-2xl backdrop-blur-md lg:p-6">
          <div className="mb-4 font-bold text-decode-green text-xs uppercase tracking-widest opacity-80 lg:text-sm">
            {t("countdownTitle")}
          </div>
          <div className="grid grid-cols-4 gap-3 lg:gap-4">
            <CountdownItem value={timeLeft.days} label={t("countdownDays")} />
            <CountdownItem value={timeLeft.hours} label={t("countdownHours")} />
            <CountdownItem value={timeLeft.minutes} label={t("countdownMinutes")} />
            <CountdownItem value={timeLeft.seconds} label={t("countdownSeconds")} />
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
