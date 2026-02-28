import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import {
  SolutionImpactMentorAndStudent,
  TheDigitalDivideLimitedResources,
  TheEducationGapClassroomDisparity,
  TheSolutionInclusiveLearningCommunity,
} from "#/assets/images";
import { AnimateInView } from "#/components/animate-in-view";

export function ProblemSolutionSection() {
  const t = useTranslations();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="problem-solution-heading"
    >
      {/* Dotted paper background */}
      <div className="dotted-paper absolute inset-0 opacity-50" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-red absolute top-12 right-8 rotate-8 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={TheEducationGapClassroomDisparity}
          alt="Traditional Beninese classroom with basic wooden desks and limited technology resources"
          loading="lazy"
          className="h-32 w-28 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-right"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-green absolute bottom-32 left-12 -rotate-6 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={TheDigitalDivideLimitedResources}
          alt="Young student's hand reaching toward computer screen in shared cybercafé space"
          loading="lazy"
          className="h-28 w-32 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-yellow absolute top-1/2 right-1/4 rotate-12 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={TheSolutionInclusiveLearningCommunity}
          alt="Diverse group of young people working together in modern well-equipped tech learning space"
          loading="lazy"
          className="h-24 w-32 rounded object-cover"
        />
      </AnimateInView>

      <AnimateInView
        animation="throw-out-left"
        duration={700}
        className="scrapbook-card torn-edge-all paper-crease paint-stain-purple absolute right-1/3 bottom-16 -rotate-4 rounded-sm bg-card p-2 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <img
          src={SolutionImpactMentorAndStudent}
          alt="Mentor and student smiling while looking at laptop showing student's accomplishment"
          loading="lazy"
          className="h-28 w-24 rounded object-cover"
        />
      </AnimateInView>

      {/* Scrapbook decorations */}
      <div
        className="washi-yellow absolute top-12 right-8 h-3 w-20 -rotate-2 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-green absolute bottom-16 left-12 h-3 w-16 rotate-6 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-1/3 left-1/4 h-3 w-20 rotate-8 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/4 bottom-1/3 h-3 w-20 -rotate-10 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/2 size-2 rounded-full bg-decode-green/50 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/3 size-2.5 rounded-full bg-decode-red/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="problem-solution-heading" className="sr-only">
          The Problem and Our Solution
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Problem Card */}
          <AnimateInView animation="fade-left" duration={700}>
            <article className="scrapbook-card relative -rotate-1 rounded-lg bg-card p-6 transition-transform duration-300 hover:rotate-0 md:p-8">
              {/* Tape effect */}
              <div
                className="washi-red absolute -top-2 left-8 h-5 w-16 rotate-1 rounded-sm"
                aria-hidden="true"
              />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-decode-red/10">
                  <Icon
                    icon="hugeicons:alert-01"
                    className="text-decode-red text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold font-serif text-foreground text-xl md:text-2xl">
                  {t("problemTitle")}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t("problemText")}</p>

              {/* Decorative pin */}
              <div
                className="absolute -top-1.5 right-6 size-3 rounded-full bg-decode-red shadow-md"
                aria-hidden="true"
              />
            </article>
          </AnimateInView>

          {/* Solution Card */}
          <AnimateInView animation="fade-right" delay={200} duration={700}>
            <article className="scrapbook-card relative rotate-1 rounded-lg bg-card p-6 transition-transform duration-300 hover:rotate-0 md:p-8">
              {/* Tape effect */}
              <div
                className="washi-green absolute -top-2 right-8 h-5 w-16 -rotate-1 rounded-sm"
                aria-hidden="true"
              />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-decode-green/10">
                  <Icon
                    icon="hugeicons:bulb-charging"
                    className="text-decode-green text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold font-serif text-foreground text-xl md:text-2xl">
                  {t("solutionTitle")}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t("solutionText")}</p>

              {/* Decorative pin */}
              <div
                className="absolute -top-1.5 left-6 size-3 rounded-full bg-decode-green shadow-md"
                aria-hidden="true"
              />
            </article>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
