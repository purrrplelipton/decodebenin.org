import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import { Button } from "#/components/ui/button";
import { teamMembers } from "#/lib/data";

export function AboutSection() {
  const t = useTranslations();

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-decode-purple py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      {/* Grid paper bg */}
      <div className="grid-paper absolute inset-0 opacity-15" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <div className="absolute top-24 left-6 hidden -rotate-8 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect torn-edge-top torn-edge-bottom paper-crease paint-stain-green rounded-sm bg-card p-2">
          <div className="flex h-28 w-24 items-center justify-center rounded bg-linear-to-br from-decode-green/20 to-decode-yellow/20 text-muted-foreground">
            📸
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-12 hidden rotate-6 lg:block" aria-hidden="true">
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-yellow rounded-sm bg-card p-2">
          <div className="flex h-32 w-28 items-center justify-center rounded bg-linear-to-br from-decode-yellow/20 to-decode-red/20 text-muted-foreground">
            🎞️
          </div>
        </div>
      </div>

      <div className="absolute right-8 bottom-32 hidden -rotate-4 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect torn-edge-top torn-edge-bottom paper-crease paint-stain-red rounded-sm bg-card p-2">
          <div className="flex h-24 w-32 items-center justify-center rounded bg-linear-to-br from-decode-red/20 to-decode-purple/20 text-muted-foreground">
            📷
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-24 hidden rotate-10 lg:block" aria-hidden="true">
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-purple rounded-sm bg-card p-2">
          <div className="flex h-28 w-24 items-center justify-center rounded bg-linear-to-br from-decode-purple/20 to-decode-green/20 text-muted-foreground">
            🎬
          </div>
        </div>
      </div>

      {/* WASHI TAPE ACCENTS */}
      <div
        className="washi-green absolute top-16 left-10 h-3 w-20 rotate-3 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-yellow absolute right-12 bottom-24 h-3 w-16 -rotate-6 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-1/2 left-8 hidden h-3 w-24 -rotate-10 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/4 bottom-1/3 hidden h-3 w-20 rotate-8 rounded-sm lg:block"
        aria-hidden="true"
      />

      {/* DECORATIVE DOTS */}
      <div
        className="absolute top-2/3 right-8 size-3 rounded-full bg-decode-red/40"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/3 hidden size-2 rounded-full bg-decode-green/50 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/3 bottom-1/4 hidden size-2.5 rounded-full bg-decode-yellow/40 lg:block"
        aria-hidden="true"
      />

      {/* PAINT STAINS */}
      <div
        className="absolute top-1/3 right-1/3 hidden h-24 w-28 rounded-full bg-decode-yellow/8 blur-2xl lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/4 hidden h-20 w-24 rounded-full bg-decode-green/10 blur-2xl lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Story */}
        <AnimateInView animation="fade-up" className="mb-16 text-center md:mb-20">
          <h2
            id="about-heading"
            className="text-balance font-bold font-serif text-3xl text-primary-foreground sm:text-4xl md:text-5xl"
          >
            {t("aboutStoryTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base text-primary-foreground/70 leading-relaxed md:text-lg">
            {t("aboutStoryText")}
          </p>
        </AnimateInView>

        {/* Founder card */}
        <AnimateInView animation="fade-up" delay={100}>
          <div className="scrapbook-card relative mx-auto max-w-3xl -rotate-1 rounded-lg bg-card p-6 transition-transform duration-300 hover:rotate-0 md:p-8">
            <div
              className="washi-green absolute -top-2 left-12 h-5 w-16 rotate-1 rounded-sm"
              aria-hidden="true"
            />
            <div
              className="absolute -top-1.5 right-8 size-3 rounded-full bg-decode-green shadow-md"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Founder photo placeholder */}
              <div className="scrapbook-card shrink-0 rounded-lg bg-muted p-2">
                <div className="flex size-28 items-center justify-center rounded-md bg-background sm:size-36">
                  <Icon
                    icon="hugeicons:user"
                    className="text-5xl text-muted-foreground/40"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-bold font-serif text-foreground text-xl md:text-2xl">
                  {t("aboutFounderName")}
                </h3>
                <p className="mt-1 font-semibold text-decode-purple-light text-sm">
                  {t("aboutFounderTitle")}
                </p>
                <p className="mt-1 font-mono text-muted-foreground text-xs leading-relaxed">
                  {t("aboutFounderCredentials")}
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">{t("aboutFounderBio")}</p>
              </div>
            </div>
          </div>
        </AnimateInView>

        {/* Team */}
        <div className="mt-16 md:mt-20">
          <AnimateInView animation="fade-up" className="mb-10 text-center">
            <h3 className="font-bold font-serif text-2xl text-primary-foreground md:text-3xl">
              {t("aboutTeamTitle")}
            </h3>
          </AnimateInView>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => {
              const rotations = ["rotate-2", "-rotate-1", "rotate-1", "-rotate-2"];
              const washis = ["washi-green", "washi-yellow", "washi-red", "washi-purple"];
              return (
                <AnimateInView
                  key={member.role}
                  animation="scale"
                  delay={index * 100}
                  duration={600}
                >
                  <div
                    className={`scrapbook-card relative rounded-lg bg-card p-4 text-center ${rotations[index % rotations.length]} transition-transform duration-300 hover:rotate-0`}
                  >
                    <div
                      className={`absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 rounded-sm ${washis[index % washis.length]}`}
                      aria-hidden="true"
                    />
                    {/* Photo placeholder */}
                    <div className="mx-auto mb-3 flex size-20 items-center justify-center rounded-full bg-muted">
                      <Icon
                        icon="hugeicons:user"
                        className="text-4xl text-muted-foreground/40"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="font-bold text-foreground text-sm">{member.name}</p>
                    <p className="text-muted-foreground text-xs">{member.role}</p>
                  </div>
                </AnimateInView>
              );
            })}
          </div>
        </div>

        {/* Venue & Details Section */}
        <div className="mt-16 md:mt-24">
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
            <AnimateInView animation="fade-right" className="w-full max-w-sm">
              <div className="scrapbook-card tape-effect relative rotate-3 rounded-lg bg-card p-6 shadow-xl transition-transform duration-300 hover:rotate-0 md:p-8">
                <div
                  className="washi-red absolute -top-4 -right-4 h-6 w-24 rotate-12 rounded-sm"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-1.5 left-10 size-4 rounded-full bg-decode-red shadow-md ring-2 ring-white"
                  aria-hidden="true"
                />

                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-full bg-decode-red/10 text-decode-red">
                    <Icon icon="hugeicons:calendar-01" className="text-3xl" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-muted-foreground text-xs uppercase tracking-widest">
                      {t("eventTimeLabel")}
                    </p>
                    <h3 className="font-bold font-serif text-foreground text-xl">
                      {t("eventTime")}
                    </h3>
                  </div>
                </div>
              </div>
            </AnimateInView>

            <AnimateInView animation="fade-left" delay={200} className="w-full max-w-sm">
              <div className="scrapbook-card pin-effect relative -rotate-3 rounded-lg bg-card p-6 shadow-xl transition-transform duration-300 hover:rotate-0 md:p-8">
                <div
                  className="washi-green absolute -bottom-4 -left-4 h-6 w-28 -rotate-6 rounded-sm"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-1.5 right-12 size-4 rounded-full bg-decode-green shadow-md ring-2 ring-white"
                  aria-hidden="true"
                />

                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-full bg-decode-green/10 text-decode-green">
                    <Icon icon="hugeicons:location-01" className="text-3xl" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-muted-foreground text-xs uppercase tracking-widest">
                      {t("eventVenueLabel")}
                    </p>
                    <h3 className="font-bold font-serif text-foreground text-xl">
                      {t("eventVenue")}
                    </h3>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>

        {/* Events CTA */}
        <AnimateInView animation="fade-up" delay={200} className="mt-16 md:mt-24">
          <div className="scrapbook-card relative mx-auto max-w-3xl rotate-1 rounded-lg bg-card p-6 text-center transition-transform duration-300 hover:rotate-0 md:p-8">
            <div
              className="washi-yellow absolute -top-2 left-1/2 h-5 w-20 -translate-x-1/2 rounded-sm"
              aria-hidden="true"
            />
            <div
              className="absolute -top-1.5 left-8 size-3 rounded-full bg-decode-yellow shadow-md"
              aria-hidden="true"
            />

            <Icon
              icon="hugeicons:passport"
              className="mx-auto mb-4 text-5xl text-decode-yellow"
              aria-hidden="true"
            />
            <h3 className="font-bold font-serif text-2xl text-foreground md:text-3xl">
              {t("aboutEventsTitle")}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground leading-relaxed">
              {t("aboutEventsText")}
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="rounded-full bg-decode-yellow px-8 font-bold text-foreground hover:bg-decode-yellow/90"
                nativeButton={false}
                render={
                  <a
                    href="https://nestuge.com/decodebenin1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("heroCtaSecondary")}
                  </a>
                }
              />

              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-border px-8"
                nativeButton={false}
                render={
                  <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
                    {t("heroCtaPrimary")}
                  </a>
                }
              />
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
