import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import { Button } from "#/components/ui/button";
import { env } from "#/env";
import { teamMembers } from "#/lib/data";
import { cn } from "#/lib/utils";

export function AboutSection() {
  const t = useTranslations();

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-decode-purple py-20 text-primary-foreground md:py-28"
      aria-labelledby="about-heading"
    >
      {/* Grid paper bg */}
      <div className="grid-paper absolute inset-0" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-green absolute top-24 left-6 -rotate-8 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/founder-in-action-authentic-leadership.avif"
          alt="Founder teaching or mentoring students demonstrating passion for community mission"
          loading="lazy"
          className="h-28 w-24 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-yellow absolute top-1/3 right-12 rotate-6 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/behind-the-scenes-community-building.avif"
          alt="Team members collaborating on organizing events and managing community resources"
          loading="lazy"
          className="h-32 w-28 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-red absolute right-8 bottom-32 -rotate-4 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/community-manager-engagement.avif"
          alt="Community team member actively listening and connecting with members at networking event"
          loading="lazy"
          className="h-24 w-32 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-purple absolute bottom-20 left-24 rotate-10 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/images/admin-and-operations-making-it-happen.avif"
          alt="Team members managing operations with organized planning documents and project boards visible"
          loading="lazy"
          className="h-28 w-24 rounded object-cover"
        />
      </AnimateInView>

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
        className="washi-red absolute top-1/2 left-8 h-3 w-24 -rotate-10 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/4 bottom-1/3 h-3 w-20 rotate-8 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      {/* DECORATIVE DOTS */}
      <div
        className="absolute top-2/3 right-8 size-3 rounded-full bg-decode-red/40"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/3 size-2 rounded-full bg-decode-green/50 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/3 bottom-1/4 size-2.5 rounded-full bg-decode-yellow/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      {/* PAINT STAINS */}
      <div
        className="absolute top-1/3 right-1/3 h-24 w-28 rounded-full bg-decode-yellow/8 opacity-10 blur-2xl sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/4 h-20 w-24 rounded-full bg-decode-green/10 opacity-10 blur-2xl sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Story */}
        <AnimateInView animation="fade-up" className="mb-16 text-center md:mb-20">
          <h2
            id="about-heading"
            className="text-balance font-bold font-serif text-3xl sm:text-4xl md:text-5xl"
          >
            {t("aboutStoryTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed opacity-70 md:text-lg">
            {t("aboutStoryText")}
          </p>
        </AnimateInView>

        {/* Founder card */}
        <AnimateInView
          animation="fade-up"
          delay={100}
          className="scrapbook-card relative mx-auto flex max-w-3xl -rotate-1 flex-col gap-6 rounded-lg bg-card p-6 transition-transform duration-300 hover:rotate-0 sm:flex-row sm:items-start md:p-8"
        >
          <div
            className="washi-green absolute -top-2 left-12 h-5 w-16 rotate-1 rounded-sm"
            aria-hidden="true"
          />
          <div
            className="absolute -top-1.5 right-8 size-3 rounded-full bg-decode-green shadow-md"
            aria-hidden="true"
          />

          {/* Founder photo placeholder */}
          <div className="scrapbook-card shrink-0 rounded-lg bg-muted p-2">
            <img
              src="/images/adedoyinsolami-adeyeye.avif"
              alt="Adedoyinsolami Adeyeye"
              className="size-28 rounded-md sm:size-36"
            />
          </div>

          <div className="grow">
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

          <a
            href="https://linkedin.com/in/adedoyinsola-adeyeye-csm%C2%AE-mba-in-view-b88b74233"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-6 bottom-6 text-muted-foreground transition-colors hover:text-decode-purple-light md:right-8 md:bottom-8"
            aria-label={t("speakersViewProfile", { name: t("aboutFounderName") })}
          >
            <Icon icon="hugeicons:linkedin-01" className="text-xl" />
          </a>
        </AnimateInView>

        {/* Team */}
        <div className="mt-16 md:mt-20">
          <AnimateInView
            as="h3"
            animation="fade-up"
            className="mb-10 text-center font-bold font-serif text-2xl md:text-3xl"
          >
            {t("aboutTeamTitle")}
          </AnimateInView>

          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => {
              const rotations = ["rotate-2", "-rotate-1", "rotate-1", "-rotate-2"];
              const washis = ["washi-green", "washi-yellow", "washi-red", "washi-purple"];
              return (
                <AnimateInView
                  key={member.roleKey}
                  animation="scale"
                  delay={index * 100}
                  duration={600}
                  className={cn(
                    "scrapbook-card relative w-full rounded-lg bg-card p-4 text-center sm:w-[calc(((1/2)*100%)-var(--spacing)*6)] lg:w-[calc(((1/3)*100%)-var(--spacing)*6)]",
                    rotations[index % rotations.length],
                    "transition-transform duration-300 hover:rotate-0",
                  )}
                >
                  <div
                    className={cn(
                      "absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 rounded-sm",
                      washis[index % washis.length],
                    )}
                    aria-hidden="true"
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto mb-3 flex size-20 rounded-full object-cover"
                  />
                  <p className="font-bold text-foreground text-sm">{member.name}</p>
                  <p className="text-muted-foreground text-xs">{t(member.roleKey)}</p>

                  {member.linkedIn && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedIn}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 text-muted-foreground transition-colors hover:text-decode-purple-light"
                      aria-label={t("speakersViewProfile", { name: member.name })}
                    >
                      <Icon icon="hugeicons:linkedin-01" className="text-lg" />
                    </a>
                  )}
                </AnimateInView>
              );
            })}
          </div>
        </div>

        {/* Venue & Details Section */}
        <div className="mt-16 md:mt-24">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <AnimateInView
              animation="fade-right"
              className="scrapbook-card tape-effect relative flex w-full max-w-sm rotate-3 items-center gap-4 rounded-lg bg-card p-6 shadow-xl transition-transform duration-300 hover:rotate-0 md:p-8"
            >
              <div
                className="washi-red absolute -top-4 -right-4 h-6 w-24 rotate-12 rounded-sm"
                aria-hidden="true"
              />
              <div
                className="absolute -top-1.5 left-10 size-4 rounded-full bg-decode-red shadow-md ring-2 ring-white"
                aria-hidden="true"
              />

              <div className="flex size-14 items-center justify-center rounded-full bg-decode-red/10 text-decode-red">
                <Icon icon="hugeicons:calendar-03" className="text-3xl" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-muted-foreground text-xs uppercase tracking-widest">
                  {t("eventTimeLabel")}
                </p>
                <h3 className="font-bold font-serif text-foreground text-xl">{t("eventTime")}</h3>
              </div>
            </AnimateInView>

            <AnimateInView
              animation="fade-left"
              delay={200}
              className="scrapbook-card pin-effect relative flex w-full max-w-sm -rotate-3 items-center gap-4 rounded-lg bg-card p-6 shadow-xl transition-transform duration-300 hover:rotate-0 md:p-8"
            >
              <div
                className="washi-green absolute -bottom-4 -left-4 h-6 w-28 -rotate-6 rounded-sm"
                aria-hidden="true"
              />
              <div
                className="absolute -top-1.5 right-12 size-4 rounded-full bg-decode-green shadow-md ring-2 ring-white"
                aria-hidden="true"
              />

              <div className="flex size-14 items-center justify-center rounded-full bg-decode-green/10 text-decode-green">
                <Icon icon="hugeicons:location-01" className="text-3xl" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-muted-foreground text-xs uppercase tracking-widest">
                  {t("eventVenueLabel")}
                </p>
                <h3 className="font-bold font-serif text-foreground text-xl">{t("eventVenue")}</h3>
              </div>
            </AnimateInView>
          </div>
        </div>

        {/* Events CTA */}
        <AnimateInView
          animation="fade-up"
          delay={200}
          className="scrapbook-card relative mx-auto mt-16 max-w-3xl rotate-1 rounded-lg bg-card p-6 text-center transition-transform duration-300 hover:rotate-0 md:mt-24 md:p-8"
        >
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
                <a href={env.VITE_NESTUGE_URL} target="_blank" rel="noopener noreferrer">
                  {t("heroCtaSecondary")}
                </a>
              }
            />

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-border px-8 text-foreground"
              nativeButton={false}
              render={
                <a
                  href="http://join.slack.com/t/thedecodebeni-l1t3433/shared_invite/zt-3oqv3m5jk-3lmxJEAu4SfPodwh66xMKA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("heroCtaPrimary")}
                </a>
              }
            />
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
