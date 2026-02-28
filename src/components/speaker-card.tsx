import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { cn } from "#/lib/utils";
import type { Speaker } from "#/types";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0.5", "-rotate-1.5"];
const washiColors = ["washi-green", "washi-yellow", "washi-red", "washi-purple"];

const sessionBadgeColors: Record<string, string> = {
  Keynote: "bg-decode-red/15 text-decode-red",
  Speak: "bg-decode-green/15 text-decode-green",
  Panel: "bg-decode-yellow/15 text-decode-yellow",
  Standard: "bg-decode-purple-light/15 text-decode-purple-light",
};

interface SpeakerCardProps extends Speaker {
  /** Unique index across duplicated arrays -- used for checkbox id uniqueness */
  index: number;
  /** Name of the shared radio-like group for unchecking via outside clicks */
  groupName: string;
  /** Whether this card's checkbox is checked (expanded) */
  isChecked: boolean;
  /** Called when this card is checked/unchecked */
  onCheckedChange: (checked: boolean) => void;
}

export function SpeakerCard({
  index,
  groupName,
  isChecked,
  onCheckedChange,
  ...speaker
}: SpeakerCardProps) {
  const t = useTranslations();
  const uniqueId = `${groupName}-${speaker.id}-${index}`;

  return (
    <article
      className={cn(
        "scrapbook-card group/card relative shrink-0 overflow-hidden rounded-lg transition-all duration-300",
        "w-60 sm:w-64 md:w-72",
        "aspect-[3/4]",
        rotations[index % rotations.length],
        isChecked && "!rotate-0 scale-[1.02]",
        !isChecked && "hover:rotate-0 hover:scale-[1.02]",
      )}
    >
      {/* Washi tape strip */}
      <div
        className={cn(
          "absolute -top-1 left-1/2 z-30 h-5 w-14 -translate-x-1/2 rounded-sm",
          index % 2 === 0 ? "rotate-2" : "-rotate-1",
          washiColors[index % washiColors.length],
        )}
        aria-hidden="true"
      />

      {/* Pin */}
      <div
        className="absolute -top-1 right-3 z-30 size-3 rounded-full bg-decode-red shadow-md"
        aria-hidden="true"
      />

      {/* Hidden checkbox for expand toggle */}
      <input
        type="checkbox"
        id={uniqueId}
        className="peer sr-only"
        checked={isChecked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        aria-label={t("speakersViewProfile", { name: speaker.name })}
      />

      {/* Full card image */}
      <div className="absolute inset-0">
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={speaker.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-secondary">
            <Icon
              icon="hugeicons:user"
              className="text-6xl text-muted-foreground/30"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* Session format badge -- always visible top-left */}
      <span
        className={cn(
          "absolute top-5 left-2 z-20 rounded-full px-2 py-0.5 font-bold font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm",
          sessionBadgeColors[speaker.sessionFormat],
        )}
      >
        {speaker.sessionFormat}
      </span>

      {/* Gradient overlay - always present at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 peer-checked:from-black/90 peer-checked:via-black/70 peer-checked:to-black/40" />

      {/* Clickable label for the checkbox -- covers the card */}
      <label
        htmlFor={uniqueId}
        className="absolute inset-0 z-20 cursor-pointer"
        aria-hidden="true"
      />

      {/* Bottom overlay - collapsed state: name + title */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-3 text-white transition-all duration-300 pointer-events-none",
          isChecked ? "opacity-0 translate-y-2" : "opacity-100",
        )}
      >
        <h3 className="truncate font-bold font-serif text-sm leading-tight drop-shadow-md">
          {speaker.name}
        </h3>
        <p className="mt-0.5 truncate text-white/80 text-xs drop-shadow-md">
          {speaker.title}
        </p>
        {speaker.topic && (
          <p className="mt-1.5 line-clamp-1 font-mono text-[10px] text-white/60 leading-snug">
            {speaker.topic}
          </p>
        )}
      </div>

      {/* Expanded overlay - checked state: full info */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-3 text-white transition-all duration-300",
          isChecked
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <h3 className="font-bold font-serif text-sm leading-tight drop-shadow-md">
          {speaker.name}
        </h3>
        <p className="mt-0.5 text-white/80 text-xs drop-shadow-md">
          {speaker.title}
        </p>

        {speaker.topic && (
          <div className="mt-2 border-white/20 border-t pt-2">
            <p className="font-mono text-[10px] text-white/70 uppercase tracking-wider">
              {t("speakersTopic")}
            </p>
            <p className="mt-0.5 line-clamp-2 font-mono text-[11px] text-white/90 leading-snug">
              {speaker.topic}
            </p>
          </div>
        )}

        {speaker.bio && (
          <div className="mt-2 border-white/20 border-t pt-2">
            <p className="line-clamp-3 text-[11px] text-white/80 leading-relaxed">
              {speaker.bio}
            </p>
          </div>
        )}

        {speaker.linkedin && (
          <a
            href={`https://linkedin.com/in/${speaker.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto relative z-30 mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-white/15 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-sm transition-colors hover:bg-white/25"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon icon="hugeicons:linkedin-01" className="text-sm" />
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </article>
  );
}
