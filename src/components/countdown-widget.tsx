import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownWidget() {
  const t = useTranslations();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  if (!mounted) return null;

  return (
    <div className="fixed right-6 bottom-6 z-40 hidden lg:block">
      <div className="scrapbook-card pin-effect rounded-lg border border-decode-green/30 bg-decode-green/10 p-4 shadow-lg transition-shadow hover:shadow-xl">
        <div className="text-center">
          <div className="mb-3 font-semibold text-decode-green text-sm uppercase tracking-wide">
            {t("countdownTitle")}
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="rounded bg-card p-2">
              <div className="font-bold text-foreground text-xl">{timeLeft.days}</div>
              <div className="text-muted-foreground text-xs">{t("countdownDays")}</div>
            </div>
            <div className="rounded bg-card p-2">
              <div className="font-bold text-foreground text-xl">{timeLeft.hours}</div>
              <div className="text-muted-foreground text-xs">{t("countdownHours")}</div>
            </div>
            <div className="rounded bg-card p-2">
              <div className="font-bold text-foreground text-xl">{timeLeft.minutes}</div>
              <div className="text-muted-foreground text-xs">{t("countdownMinutes")}</div>
            </div>
            <div className="rounded bg-card p-2">
              <div className="font-bold text-foreground text-xl">{timeLeft.seconds}</div>
              <div className="text-muted-foreground text-xs">{t("countdownSeconds")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
