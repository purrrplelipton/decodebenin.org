import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import type { Speaker } from "#/lib/data";
import { cn } from "#/lib/utils";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0.5", "-rotate-1.5"];
const washiColors = ["washi-green", "washi-yellow", "washi-red", "washi-purple"];

const sessionBadgeColors: Record<string, string> = {
  Keynote: "bg-decode-red/15 text-decode-red",
  Masterclass: "bg-decode-green/15 text-decode-green",
  Panel: "bg-decode-yellow/15 text-decode-yellow",
  Standard: "bg-decode-purple-light/15 text-decode-purple-light",
};

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
  onClick: () => void;
}

export function SpeakerCard({ speaker, index, onClick }: SpeakerCardProps) {
  const t = useTranslations();

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t("speakersViewProfile").replace("{name}", speaker.name)}
      className={cn(
        "scrapbook-card group/card relative w-[240px] shrink-0 cursor-pointer rounded-lg bg-card p-3 text-left transition-all duration-300 hover:rotate-0 hover:scale-105 focus-visible:rotate-0 focus-visible:scale-105 focus-visible:ring-2 focus-visible:ring-ring/50 md:w-[280px]",
        rotations[index % rotations.length],
      )}
    >
      {/* Washi tape strip */}
      <div
        className={cn(
          "absolute -top-2 left-1/2 h-5 w-14 -translate-x-1/2 rounded-sm",
          index % 2 === 0 ? "rotate-2" : "-rotate-1",
          washiColors[index % washiColors.length],
        )}
        aria-hidden="true"
      />

      {/* Pin */}
      <div
        className="absolute -top-1.5 right-3 size-3 rounded-full bg-decode-red shadow-md"
        aria-hidden="true"
      />

      {/* Photo area */}
      <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={speaker.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover/card:scale-110"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-secondary">
            <Icon
              icon="hugeicons:user"
              className="text-4xl text-muted-foreground/40"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Session format badge */}
        <span
          className={cn(
            "absolute bottom-2 left-2 rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider",
            sessionBadgeColors[speaker.sessionFormat],
          )}
        >
          {speaker.sessionFormat}
        </span>
      </div>

      {/* Name and info */}
      <h3 className="truncate font-bold font-serif text-foreground text-sm leading-tight">
        {speaker.name}
      </h3>
      <p className="mt-0.5 truncate text-muted-foreground text-xs">{speaker.title}</p>

      {/* Topic label -- typed style */}
      <div className="mt-2 border-border/50 border-t pt-2">
        <p className="line-clamp-2 font-mono text-[11px] text-decode-purple-light leading-snug">
          {speaker.topic}
        </p>
      </div>
    </button>
  );
}
