import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { schedule } from "#/lib/data";
import { cn } from "#/lib/utils";

const TAB_THEMES = [
  {
    icon: "hugeicons:sunrise",
    colorScheme: "var(--color-decode-green)",
  },
  {
    icon: "hugeicons:sun-03",
    colorScheme: "var(--color-decode-yellow)",
  },
  {
    icon: "hugeicons:sunset",
    colorScheme: "var(--color-decode-red)",
  },
];

export function ScheduleSection() {
  const t = useTranslations();

  return (
    <section
      id="schedule"
      className="dotted-paper relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="schedule-heading"
    >
      <style>{`
        .schedule-tab {
          flex: 1;
          transform: scaleX(1.2) translateY(0);
          transition: opacity 0.4s ease;
        }

        .schedule-tab:hover {
          z-index: 10 !important;
          animation: 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards tabHover;
        }

        .schedule-tab[data-active] {
          z-index: 15 !important;
          animation: 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards tabActive;
        }

        .schedule-tab:not(:hover):not([data-active]) {
          animation: 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards tabReturn;
        }

        .schedule-tab:first-child {
          transform-origin: left;
        }

        .schedule-tab:last-child {
          transform-origin: right;
        }

        @keyframes tabHover {
          0% { transform: scaleX(1.2); }
          50% { transform: scaleX(1.25); }
          100% { transform: scaleX(1.2); }
        }

        @keyframes tabActive {
          0% { transform: scaleX(1.2); }
          30% { transform: scaleX(1.3); }
          100% { transform: scaleX(1.2); }
        }

        @keyframes tabReturn {
          0% { transform: scaleX(1.2); }
          100% { transform: scaleX(1.2); }
        }

        /* Prevent un-scaled text skewing too much and un-scale the content a bit to balance the stretching */
        .schedule-tab-content {
          transform: scaleX(0.833);
        }

        .schedule-tab:hover .ribbon-bg {
          filter: brightness(1.15);
        }
      `}</style>

      {/* Warm corkboard overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.30 0.15 290 / 0.04) 1px, transparent 1px), radial-gradient(oklch(0.88 0.18 90 / 0.03) 2px, transparent 2px)",
          backgroundSize: "16px 16px, 32px 32px",
          backgroundPosition: "0 0, 8px 8px",
        }}
        aria-hidden="true"
      />

      {/* WASHI TAPE ACCENTS */}
      <div
        className="washi-green absolute top-12 right-10 h-3 w-20 rotate-3 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute bottom-20 left-16 h-3 w-16 -rotate-6 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute top-1/2 right-4 h-3 w-24 -rotate-10 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      {/* DECORATIVE BLOBS */}
      <div
        className="absolute top-1/4 right-1/4 h-24 w-28 rounded-full bg-decode-blue/8 opacity-10 blur-2xl sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/4 h-20 w-24 rounded-full bg-decode-red/10 opacity-10 blur-2xl sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        {/* Section header */}
        <AnimateInView
          as="span"
          animation="fade-up"
          className="mx-auto mb-4 block w-fit rounded-full bg-decode-yellow/10 px-4 py-1 font-bold text-decode-yellow text-xs uppercase tracking-widest"
        >
          {t("scheduleSubtitle")}
        </AnimateInView>

        <AnimateInView
          as="h2"
          id="schedule-heading"
          animation="fade-up"
          delay={100}
          className="mb-10 text-balance text-center font-bold font-serif text-3xl text-foreground sm:text-4xl md:mb-14 md:text-5xl"
        >
          {t("scheduleTitle")}
        </AnimateInView>

        <div className="mx-auto w-full max-w-4xl">
          <Tabs orientation="horizontal" defaultValue={schedule[0].id} className="gap-0">
            <TabsList className="w-full bg-transparent p-0 data-[orientation=horizontal]:h-14">
              {schedule.map((session, idx) => {
                const theme = TAB_THEMES[idx % TAB_THEMES.length];

                return (
                  <TabsTrigger
                    key={session.id}
                    value={session.id}
                    style={{
                      ["--color-scheme" as string]: theme.colorScheme,
                      zIndex: schedule.length - idx,
                    }}
                    className={cn(
                      "group schedule-tab relative flex flex-row items-center justify-center overflow-hidden rounded-none rounded-t-2xl border-(--color-scheme) border-2 border-b-0 bg-background/95 not-data-active:bg-muted/50 px-2 py-4 text-foreground not-data-active:opacity-75 outline-none ring-(--color-scheme) backdrop-blur-md sm:px-6",
                    )}
                  >
                    {/* Side-light gradient simulating ribbon gloss */}
                    <div
                      className="ribbon-bg absolute inset-0 -z-10 rounded-[inherit] transition-[filter] duration-200"
                      style={{
                        background: `linear-gradient(
                          to right,
                          color-mix(in oklch, var(--color-scheme) 40%, transparent) 0%,
                          color-mix(in oklch, var(--color-scheme) 70%, transparent) 15%,
                          color-mix(in oklch, var(--color-scheme) 90%, transparent) 40%,
                          color-mix(in oklch, var(--color-scheme) 80%, transparent) 60%,
                          color-mix(in oklch, var(--color-scheme) 50%, transparent) 85%,
                          color-mix(in oklch, var(--color-scheme) 25%, transparent) 100%
                        )`,
                      }}
                    />

                    {/* Top specular highlight */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[inherit]"
                      style={{
                        background: `linear-gradient(135deg,
                          rgba(255,255,255,.25) 0%,
                          rgba(255,255,255,.08) 25%,
                          transparent 50%,
                          rgba(0,0,0,.12) 75%,
                          rgba(0,0,0,.35) 100%
                        )`,
                      }}
                    />

                    {/* Vertical depth gradient + shadow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[inherit]"
                      style={{
                        background: `linear-gradient(to bottom,
                          color-mix(in oklch, var(--color-scheme) 45%, transparent) 0%,
                          color-mix(in oklch, var(--color-scheme) 35%, transparent) 50%,
                          color-mix(in oklch, var(--color-scheme) 25%, transparent) 100%
                        )`,
                        boxShadow: `
                          0 1px 3px  rgba(0,0,0,.40),
                          0 4px 12px rgba(0,0,0,.25),
                          inset 0  1px 2px rgba(255,255,255,.15),
                          inset 0 -1px 3px rgba(0,0,0,.20)
                        `,
                      }}
                    />

                    <div className="schedule-tab-content relative z-10 flex w-full items-center justify-center gap-2">
                      <Icon
                        icon={theme.icon}
                        className="shrink-0 text-xl drop-shadow-sm group-data-active:hidden sm:text-2xl"
                      />
                      <span
                        className="not-group-data-active:sr-only whitespace-nowrap font-black text-xs uppercase leading-relaxed tracking-widest drop-shadow-sm sm:text-sm lg:text-base"
                        style={{ animation: "ribbon-curl 2.5s ease-in-out infinite" }}
                      >
                        {t(session.sessionNameKey)}
                      </span>
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {schedule.map((session) => (
              <TabsContent
                key={session.id}
                value={session.id}
                className="scrapbook-card torn-edge-bottom paper-crease data-active:fade-in-0 data-active:slide-in-from-bottom-2 mt-0 flex flex-col gap-6 rounded-b-xl bg-card p-6 shadow-sm duration-500 data-active:animate-in sm:p-8 md:p-10"
              >
                {session.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex flex-col gap-4 border-border/50 border-l-2 pl-6 md:flex-row md:items-start md:gap-8 md:pl-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute top-1.5 -left-[7px] size-3 rounded-full bg-muted-foreground/30 transition-colors duration-300 group-hover:bg-decode-green" />

                    <div className="w-full shrink-0 md:w-56">
                      <p className="font-semibold text-foreground/80 text-sm md:text-base">
                        {item.time}
                      </p>
                      {item.duration && (
                        <p className="mt-1 font-medium text-muted-foreground text-xs uppercase tracking-wider">
                          {item.duration}
                        </p>
                      )}
                    </div>

                    <div className="flex-1 space-y-2">
                      <h4 className="font-bold text-base text-foreground md:text-lg">
                        {t(item.activityKey)}
                      </h4>

                      {item.speakerAndTopicKey && (
                        <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                          {t(item.speakerAndTopicKey)
                            .split("\\n")
                            .map((line: string, i: number) => (
                              <span key={`${item.id}-line-${i}`}>
                                {i !== 0 && <br />}
                                {line}
                              </span>
                            ))}
                        </p>
                      )}

                      {(item.speakerName || item.topicKey) && (
                        <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                          {item.speakerName && (
                            <span className="font-semibold">{item.speakerName}</span>
                          )}
                          {item.speakerName && item.topicKey && " - "}
                          {item.topicKey && <span>{t(item.topicKey)}</span>}
                        </p>
                      )}

                      {/* Tags */}
                      {(item.locationKey || item.languageKey) && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.locationKey && (
                            <span className="inline-flex rounded-full bg-decode-green/10 px-2.5 py-0.5 font-bold text-decode-green text-xs tracking-wide">
                              {t(item.locationKey)}
                            </span>
                          )}
                          {item.languageKey && (
                            <span className="inline-flex rounded-full bg-decode-purple/10 px-2.5 py-0.5 font-bold text-decode-purple text-xs tracking-wide">
                              {t(item.languageKey)}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
