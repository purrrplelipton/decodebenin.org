import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { cn } from "#/lib/utils";
import type { Speaker } from "#/types";

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
        "scrapbook-card pin-effect tape-effect group/card relative grid aspect-3/4 w-60 shrink-0 grid-cols-1 grid-rows-1 rounded-lg transition-all duration-300 *:rounded-lg sm:w-64 md:w-72 *:[grid-area:1/1]",
        rotations[index % rotations.length],
        isChecked ? "rotate-0 scale-102" : "hover:rotate-0 hover:scale-102",
      )}
    >
      {/* Full card image */}
      <Avatar className="size-full object-cover transition-transform duration-500 after:rounded-lg group-hover/card:scale-105">
        <AvatarImage src={speaker.image} alt={speaker.name} loading="lazy" className="rounded-lg" />
        <AvatarFallback className="rounded-lg">{speaker.name}</AvatarFallback>
      </Avatar>

      {/* Clickable label for the checkbox -- covers the card */}
      {(speaker.bio || speaker.linkedin) && (
        <label className="z-10">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={(e) => onCheckedChange(e.target.checked)}
            aria-label={t("speakersViewProfile", { name: speaker.name })}
          />
        </label>
      )}

      <div className="z-20 flex flex-col justify-end self-end bg-linear-to-t from-black/75 to-black/25 p-3 text-white transition-all duration-300">
        <h3 className="font-bold font-serif text-sm leading-tight drop-shadow-md">
          {speaker.name}
        </h3>
        <p className="mt-0.5 text-white/80 text-xs drop-shadow-md">{speaker.title}</p>

        <div
          className={cn("transition-all transition-discrete [interpolate-size:allow-keywords]", {
            "h-0 overflow-hidden": !isChecked,
          })}
        >
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
              className="pointer-events-auto mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-white/15 px-3 py-1.5 font-mono text-white text-xs backdrop-blur-sm transition-colors hover:bg-white/25"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon="hugeicons:linkedin-01" className="text-sm" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
