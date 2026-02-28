import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "#/components/ui/dialog";
import { ScrollArea } from "#/components/ui/scroll-area";
import type { Speaker } from "#/lib/data";
import { cn } from "#/lib/utils";

const sessionBadgeColors: Record<string, string> = {
  Keynote: "bg-decode-red/15 text-decode-red",
  Masterclass: "bg-decode-green/15 text-decode-green",
  Panel: "bg-decode-yellow/15 text-decode-yellow",
  Standard: "bg-decode-purple-light/15 text-decode-purple-light",
};

const roleLabels: Record<string, string> = {
  speaker: "speakersRoleSpeaker",
  panelist: "speakersRolePanelist",
  convener: "speakersRoleConvener",
};

const socialIcons: Record<string, string> = {
  twitter: "hugeicons:new-twitter",
  linkedin: "hugeicons:linkedin-01",
  instagram: "hugeicons:instagram",
  website: "hugeicons:globe-02",
};

interface SpeakerDialogProps {
  speaker: Speaker | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SpeakerDialog({ speaker, open, onOpenChange }: SpeakerDialogProps) {
  const t = useTranslations();

  if (!speaker) return null;

  const socialEntries = speaker.socials
    ? Object.entries(speaker.socials).filter(([, url]) => !!url)
    : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="overflow-hidden border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-xl"
        showCloseButton={false}
      >
        <div className="relative p-6 md:p-10">
          {/* Scrapbook card background */}
          <div className="absolute inset-4 -rotate-1 rounded-sm bg-card shadow-xl transition-transform" />
          <div className="grid-paper absolute inset-4 -rotate-1 rounded-sm opacity-30" />

          {/* Decorative tape */}
          <div
            className="washi-green absolute -top-2 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 rounded-sm opacity-80"
            aria-hidden="true"
          />
          <div
            className="washi-yellow absolute right-12 -bottom-2 h-5 w-20 rotate-6 rounded-sm opacity-70"
            aria-hidden="true"
          />

          {/* Red pin */}
          <div
            className="absolute top-8 right-8 z-20 size-4 rounded-full bg-decode-red shadow-md"
            aria-hidden="true"
          />

          <ScrollArea className="scrapbook-card relative z-10 flex max-h-[75vh] flex-col rounded-sm bg-card p-5 md:p-7">
            <DialogHeader className="mb-4">
              {/* Photo */}
              <div className="torn-edge-all relative mx-auto mb-4 aspect-square w-32 overflow-hidden rounded-md bg-muted md:w-40">
                {speaker.image ? (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="size-full object-cover"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-secondary">
                    <Icon
                      icon="hugeicons:user"
                      className="text-5xl text-muted-foreground/40"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>

              <DialogTitle className="text-center font-bold font-serif text-2xl text-decode-purple md:text-3xl">
                {speaker.name}
              </DialogTitle>

              <DialogDescription className="mt-1 text-center text-muted-foreground text-sm">
                {speaker.title}
              </DialogDescription>

              {/* Role + Session badges */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-decode-purple/10 px-3 py-0.5 font-mono text-[10px] font-bold text-decode-purple uppercase tracking-wider">
                  {t(roleLabels[speaker.role])}
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider",
                    sessionBadgeColors[speaker.sessionFormat],
                  )}
                >
                  {speaker.sessionFormat}
                </span>
              </div>
            </DialogHeader>

            {/* Topic banner */}
            <div className="relative mb-4 rounded-md bg-decode-yellow/10 px-4 py-3">
              <div
                className="washi-yellow absolute -top-1 left-4 h-3 w-10 -rotate-1 rounded-sm"
                aria-hidden="true"
              />
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {t("speakersTopic")}
              </p>
              <p className="mt-1 font-serif text-sm leading-relaxed text-foreground">
                {speaker.topic}
              </p>
            </div>

            {/* Bio */}
            <div className="mb-4">
              <p className="mb-1 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {t("speakersBio")}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{speaker.bio}</p>
            </div>

            {/* Socials */}
            {socialEntries.length > 0 && (
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {t("speakersSocials")}
                </p>
                <div className="flex gap-2">
                  {socialEntries.map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-decode-purple/10 hover:text-decode-purple"
                      aria-label={platform}
                    >
                      <Icon
                        icon={socialIcons[platform] || "hugeicons:link-01"}
                        className="text-lg"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Footer watermark */}
            <div className="mt-4 flex justify-end">
              <div className="washi-purple -rotate-2 rounded-sm px-3 py-0.5 font-mono text-decode-purple/40 text-[10px]">
                DECODE BENIN {"//"} 2026
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
