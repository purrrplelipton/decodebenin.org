import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import {
  DiverseTechCommunityGathering,
  FemaleDevInFocus,
  HandsOnCodingWorkshop,
  LateNightCodingSprint,
  LearningInSessionCloseUp,
  NetworkingCoffeeChat,
  ProjectShowcaseMoment,
  StartupPitchMoment,
  StudentsWithCertificatesOfAchievement,
  SuccessfulTeamCelebration,
  TechWorkshopInSession,
  YoungDeveloperMentoringSession,
} from "#/assets/images";
import { AnimateInView } from "#/components/animate-in-view";
import { Button } from "#/components/ui/button";
import { env } from "#/env";

export function HeroSection() {
  const t = useTranslations();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-decode-purple"
      aria-labelledby="hero-heading"
    >
      {/* Grid paper background */}
      <div className="grid-paper absolute inset-0 opacity-20" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS - Layer 1 (Various sizes and rotations) */}

      {/* Top left cluster */}
      <div
        className="absolute top-12 left-4 -rotate-12 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card pin-effect rounded-sm bg-card p-2 shadow-lg">
          <img
            src={YoungDeveloperMentoringSession}
            alt="Black developer explaining code on laptop to student in bright tech workspace with African-inspired decor"
            loading="lazy"
            className="h-32 w-24 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute top-32 left-20 rotate-6 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <img
            src={DiverseTechCommunityGathering}
            alt="Group of 4-5 young West African professionals laughing while collaborating around laptops in creative co-working space"
            loading="lazy"
            className="h-40 w-32 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute top-48 left-2 -rotate-3 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <img
            src={HandsOnCodingWorkshop}
            alt="Close-up of diverse hands typing on RGB-lit keyboard with code visible on monitor"
            loading="lazy"
            className="h-24 w-32 rounded object-cover"
          />
        </div>
      </div>

      {/* Top right cluster */}
      <div
        className="absolute top-16 right-6 rotate-8 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card pin-effect rounded-sm bg-card p-2">
          <img
            src={StudentsWithCertificatesOfAchievement}
            alt="Three young Black students smiling while holding achievement certificates in learning space with tech setup"
            loading="lazy"
            className="h-36 w-28 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute top-40 right-32 -rotate-6 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <img
            src={TechWorkshopInSession}
            alt="Busy workshop room with students concentrating at computers while mentor guides nearby"
            loading="lazy"
            className="h-28 w-28 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute top-28 right-72 rotate-12 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <img
            src={StartupPitchMoment}
            alt="Young entrepreneur confidently presenting to investors showing prototype on screen in modern startup office"
            loading="lazy"
            className="h-32 w-24 rounded object-cover"
          />
        </div>
      </div>

      {/* Bottom left cluster */}
      <div
        className="absolute bottom-20 left-8 -rotate-8 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card pin-effect rounded-sm bg-card p-2">
          <img
            src={NetworkingCoffeeChat}
            alt="Two young professionals engaged in conversation over coffee at bright café table with laptops"
            loading="lazy"
            className="h-28 w-28 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute bottom-40 left-24 rotate-5 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <img
            src={LateNightCodingSprint}
            alt="Developer silhouetted against glowing laptop screen surrounded by coffee cups in modern workspace"
            loading="lazy"
            className="h-28 w-36 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute bottom-10 left-40 -rotate-10 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <img
            src={FemaleDevInFocus}
            alt="Young African woman with glasses problem-solving at dual-monitor desk with Benin flag visible"
            loading="lazy"
            className="h-24 w-32 rounded object-cover"
          />
        </div>
      </div>

      {/* Bottom right cluster */}
      <div
        className="absolute right-8 bottom-12 rotate-10 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card pin-effect rounded-sm bg-card p-2">
          <img
            src={SuccessfulTeamCelebration}
            alt="Diverse young developers celebrating completed project arms-raised around monitor in tech office"
            loading="lazy"
            className="h-32 w-24 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute right-40 bottom-32 -rotate-4 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <img
            src={LearningInSessionCloseUp}
            alt="Hands taking notes on notepad while laptop displays code on desk with tech books"
            loading="lazy"
            className="h-40 w-32 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute right-16 bottom-48 rotate-7 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <img
            src={ProjectShowcaseMoment}
            alt="Developer proudly showing completed project on laptop to another person in personal workspace"
            loading="lazy"
            className="h-24 w-32 rounded object-cover"
          />
        </div>
      </div>

      {/* Decorative scrapbook frame borders */}
      <div
        className="absolute top-20 right-8 h-32 w-48 rotate-3 rounded-sm border-2 border-primary-foreground/10 border-dashed md:right-24 md:h-48 md:w-72"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-32 left-8 h-24 w-36 -rotate-6 rounded-sm border-2 border-primary-foreground/10 border-dashed md:left-20 md:h-36 md:w-52"
        aria-hidden="true"
      />

      {/* Additional decorative frame */}
      <div
        className="absolute top-1/2 right-1/4 h-28 w-40 rotate-12 rounded-sm border-2 border-primary-foreground/10 border-dashed opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      {/* WASHI TAPE ACCENTS - More tape in various orientations */}
      <div
        className="washi-yellow absolute top-32 right-16 h-4 w-20 rotate-12 rounded-sm md:right-48 md:w-32"
        aria-hidden="true"
      />
      <div
        className="washi-yellow absolute top-1/3 right-1/3 h-3 w-24 -rotate-8 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-green absolute bottom-48 left-12 h-4 w-16 -rotate-6 rounded-sm md:left-32 md:w-24"
        aria-hidden="true"
      />
      <div
        className="washi-green absolute bottom-1/3 left-1/4 h-3 w-32 rotate-12 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-1/3 left-4 h-4 w-12 rotate-45 rounded-sm md:left-16"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-2/3 right-12 h-3 w-20 -rotate-10 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/3 bottom-1/4 h-4 w-28 rotate-6 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute top-1/2 left-1/3 h-3 w-16 rotate-12 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      {/* DECORATIVE DOTS & STICKERS - More variety */}
      <div
        className="absolute top-1/4 right-1/4 size-3 animate-bounce rounded-full bg-decode-green"
        aria-hidden="true"
      />
      <div
        className="absolute top-2/3 right-1/3 size-2 rounded-full bg-decode-yellow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 size-4 rounded-full bg-decode-red/60"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/2 size-2.5 rounded-full bg-decode-green/70"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/4 bottom-1/3 size-3 rounded-full bg-decode-red/50"
        aria-hidden="true"
      />
      <div
        className="absolute top-3/4 left-1/3 size-2 rounded-full bg-decode-yellow/60"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/2 left-1/2 size-3 rounded-full bg-decode-green/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 size-2.5 rounded-full bg-decode-red/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-24 text-center md:px-6">
        <AnimateInView animation="fade-down" duration={800}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 font-medium text-primary-foreground/70 text-xs">
            <span
              className="inline-block size-2 animate-pulse rounded-full bg-decode-green"
              aria-hidden="true"
            />
            June 6th, 2026 &mdash; Decode Benin 1.0
          </div>
        </AnimateInView>

        <AnimateInView animation="fade-up" delay={100} duration={900}>
          <h1
            id="hero-heading"
            className="text-balance font-bold font-serif text-4xl text-primary-foreground leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t("heroHeadline")}
          </h1>
        </AnimateInView>

        <AnimateInView animation="fade-up" delay={250} duration={800}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-primary-foreground/70 leading-relaxed sm:text-lg md:text-xl">
            {t("heroSubheadline")}
          </p>
        </AnimateInView>

        <AnimateInView animation="fade-up" delay={400} duration={700}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-decode-yellow px-8 font-bold text-base text-foreground hover:bg-decode-yellow/90"
              nativeButton={false}
              render={
                <a href={env.VITE_SLACK_INVITE_URL} target="_blank" rel="noopener noreferrer">
                  <Icon icon="hugeicons:users" aria-hidden="true" />
                  {t("heroCtaPrimary")}
                </a>
              }
            />
            <Button
              size="lg"
              className="rounded-full border-primary-foreground/20 px-8 text-base text-primary-foreground hover:bg-primary-foreground/10"
              nativeButton={false}
              render={
                <a href={env.VITE_NESTUGE_URL} target="_blank" rel="noopener noreferrer">
                  {t("heroCtaSecondary")}
                  <Icon icon="hugeicons:arrow-right-02" aria-hidden="true" />
                </a>
              }
            />
          </div>
        </AnimateInView>

        {/* Scroll indicator */}
        {/* <AnimateInView animation="fade" delay={800}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
            <div className="flex flex-col items-center gap-2">
              <span className="font-medium text-primary-foreground/40 text-xs uppercase tracking-widest">
                Scroll
              </span>
              <div className="h-8 w-px bg-linear-to-b from-primary-foreground/40 to-transparent" />
            </div>
          </div>
        </AnimateInView> */}
      </div>
    </section>
  );
}
