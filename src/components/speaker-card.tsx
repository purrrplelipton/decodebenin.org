import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { cn } from "#/lib/utils";
import type { Speaker } from "#/types";
import { ScrollArea } from "./ui/scroll-area";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0.5", "-rotate-1.5"];

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

  return (
    <article
      className={cn(
        "scrapbook-card pin-effect tape-effect group/card relative grid aspect-3/4 w-64 shrink-0 grid-cols-1 grid-rows-1 rounded-lg bg-linear-to-t from-black to-transparent transition-all duration-300 *:rounded-lg sm:w-64 md:w-72 *:[grid-area:1/1]",
        rotations[index % rotations.length],
        isChecked ? "rotate-0 scale-102" : "hover:z-30 hover:rotate-0 hover:scale-102",
        isChecked ? "z-40" : "z-0",
      )}
    >
      {/* Full card image */}
      <Avatar className="size-full object-cover transition-transform duration-500 after:rounded-lg group-hover/card:scale-105">
        <AvatarImage
          src={speaker.image}
          alt={speaker.name}
          loading="lazy"
          className="rounded-lg object-top"
        />
        <AvatarFallback className="rounded-lg">{speaker.name}</AvatarFallback>
      </Avatar>

      {/* Clickable label for the checkbox -- covers the card */}
      <label className="z-10 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={(e) => onCheckedChange(e.target.checked)}
          aria-label={t("speakersViewProfile", { name: speaker.name })}
        />
      </label>

      {/* Badges Container - Top Right */}
      <div className="pointer-events-none z-20 flex items-start justify-start gap-2 p-3">
        {speaker.sessionFormatKey && (
          <span className="rounded-full bg-primary/80 px-2 py-1 font-bold text-[10px] text-primary-foreground tracking-wide shadow-sm ring-1 ring-white/20 backdrop-blur-md transition-colors group-hover/card:bg-primary">
            {t(speaker.sessionFormatKey)}
          </span>
        )}
        {speaker.languageKey && (
          <span className="rounded-full bg-black/60 px-2 py-1 font-bold text-[10px] text-white tracking-wide shadow-sm ring-1 ring-white/20 backdrop-blur-md transition-colors group-hover/card:bg-black/80">
            {t(speaker.languageKey)}
          </span>
        )}
      </div>

      <ScrollArea
        className={cn(
          "z-30 flex flex-col justify-end self-end bg-linear-to-t to-transparent p-4 text-white transition-all duration-500",
          isChecked
            ? "pointer-events-auto h-full from-black/95 via-black/85"
            : "pointer-events-none from-black/90 via-black/60",
        )}
      >
        <h3 className="font-bold font-serif text-lg text-white leading-tight drop-shadow-lg">
          {speaker.name}
        </h3>

        {/* We cast here to bypass TS complaining about dynamic keys */}
        {speaker.titleKey && (
          <p className="mt-1 font-medium text-white/90 text-xs leading-snug drop-shadow-md">
            {t(speaker.titleKey)}
          </p>
        )}

        <div
          className={cn(
            "origin-bottom transition-all transition-discrete duration-500 ease-in-out [interpolate-size:allow-keywords]",
            isChecked ? "mt-3" : "h-0 overflow-hidden opacity-0",
          )}
        >
          {speaker.topicKey && t(speaker.topicKey) !== "" && (
            <div className="mb-3 rounded-md border border-white/10 bg-white/10 p-2.5 backdrop-blur-sm">
              <p className="mb-1 font-semibold text-[10px] text-primary-300 uppercase tracking-wider">
                {t("speakerTopicLabel")}
              </p>
              <p className="font-medium text-sm text-white leading-snug">{t(speaker.topicKey)}</p>
            </div>
          )}

          {speaker.bioKey && t(speaker.bioKey) !== "" && (
            <div className="border-white/10 border-t pt-3">
              <p className="whitespace-pre-line font-light text-white/85 text-xs leading-relaxed">
                {t(speaker.bioKey)}
              </p>
            </div>
          )}

          {speaker.linkedin && (
            <a
              href={`https://linkedin.com/in/${speaker.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0A66C2]/90 px-4 py-2 font-medium font-mono text-white text-xs shadow-md transition-all hover:bg-[#0A66C2] active:scale-95"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon="hugeicons:linkedin-01" className="text-base" />
              <span>Connect on LinkedIn</span>
            </a>
          )}
        </div>
      </ScrollArea>
    </article>
  );
}
