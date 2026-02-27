import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import { Button } from "#/components/ui/button";

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
      <div className="absolute top-12 left-4 hidden -rotate-12 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect rounded-sm bg-card p-2 shadow-lg">
          <div className="flex h-32 w-24 items-center justify-center rounded bg-linear-to-br from-decode-yellow/20 to-decode-green/20 text-muted-foreground text-xs">
            📸
          </div>
        </div>
      </div>

      <div className="absolute top-32 left-20 hidden rotate-6 lg:block" aria-hidden="true">
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <div className="flex h-40 w-32 items-center justify-center rounded bg-linear-to-br from-decode-red/20 to-decode-yellow/20 text-muted-foreground text-xs">
            📷
          </div>
        </div>
      </div>

      <div className="absolute top-48 left-2 hidden -rotate-3 lg:block" aria-hidden="true">
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <div className="flex h-24 w-32 items-center justify-center rounded bg-linear-to-br from-decode-green/20 to-decode-purple/20 text-muted-foreground text-xs">
            🎞️
          </div>
        </div>
      </div>

      {/* Top right cluster */}
      <div className="absolute top-16 right-6 hidden rotate-8 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect rounded-sm bg-card p-2">
          <div className="flex h-36 w-28 items-center justify-center rounded bg-linear-to-br from-decode-yellow/30 to-decode-red/30 text-2xl text-muted-foreground">
            📷
          </div>
        </div>
      </div>

      <div className="absolute top-40 right-32 hidden -rotate-6 lg:block" aria-hidden="true">
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <div className="flex h-28 w-28 items-center justify-center rounded bg-linear-to-br from-decode-green/20 to-decode-yellow/20 text-muted-foreground text-xl">
            🎬
          </div>
        </div>
      </div>

      <div className="absolute top-28 right-72 hidden rotate-12 lg:block" aria-hidden="true">
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <div className="flex h-32 w-24 items-center justify-center rounded bg-linear-to-br from-decode-red/20 to-decode-purple/20 text-lg text-muted-foreground">
            📸
          </div>
        </div>
      </div>

      {/* Bottom left cluster */}
      <div className="absolute bottom-20 left-8 hidden -rotate-8 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect rounded-sm bg-card p-2">
          <div className="flex h-28 w-28 items-center justify-center rounded bg-linear-to-br from-decode-green/20 to-decode-yellow/20 text-muted-foreground text-xl">
            🎞️
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 left-24 hidden rotate-5 lg:block" aria-hidden="true">
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <div className="flex h-28 w-36 items-center justify-center rounded bg-linear-to-br from-decode-red/20 to-decode-green/20 text-lg text-muted-foreground">
            📷
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-40 hidden -rotate-10 lg:block" aria-hidden="true">
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <div className="flex h-24 w-32 items-center justify-center rounded bg-linear-to-br from-decode-yellow/20 to-decode-purple/20 text-muted-foreground text-xl">
            🎬
          </div>
        </div>
      </div>

      {/* Bottom right cluster */}
      <div className="absolute right-8 bottom-12 hidden rotate-10 lg:block" aria-hidden="true">
        <div className="scrapbook-card pin-effect rounded-sm bg-card p-2">
          <div className="flex h-32 w-24 items-center justify-center rounded bg-linear-to-br from-decode-yellow/20 to-decode-green/20 text-muted-foreground text-xs">
            📸
          </div>
        </div>
      </div>

      <div className="absolute right-40 bottom-32 hidden -rotate-4 lg:block" aria-hidden="true">
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <div className="flex h-40 w-32 items-center justify-center rounded bg-linear-to-br from-decode-red/20 to-decode-yellow/20 text-muted-foreground text-xs">
            🎞️
          </div>
        </div>
      </div>

      <div className="absolute right-16 bottom-48 hidden rotate-7 lg:block" aria-hidden="true">
        <div className="scrapbook-card rounded-sm bg-card p-2">
          <div className="flex h-24 w-32 items-center justify-center rounded bg-linear-to-br from-decode-green/20 to-decode-purple/20 text-muted-foreground text-xs">
            📷
          </div>
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
        className="absolute top-1/2 right-1/4 hidden h-28 w-40 rotate-12 rounded-sm border-2 border-primary-foreground/10 border-dashed lg:block"
        aria-hidden="true"
      />

      {/* WASHI TAPE ACCENTS - More tape in various orientations */}
      <div
        className="washi-yellow absolute top-32 right-16 h-4 w-20 rotate-12 rounded-sm md:right-48 md:w-32"
        aria-hidden="true"
      />
      <div
        className="washi-yellow absolute top-1/3 right-1/3 hidden h-3 w-24 -rotate-8 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="washi-green absolute bottom-48 left-12 h-4 w-16 -rotate-6 rounded-sm md:left-32 md:w-24"
        aria-hidden="true"
      />
      <div
        className="washi-green absolute bottom-1/3 left-1/4 hidden h-3 w-32 rotate-12 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-1/3 left-4 h-4 w-12 rotate-45 rounded-sm md:left-16"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-2/3 right-12 hidden h-3 w-20 -rotate-10 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/3 bottom-1/4 hidden h-4 w-28 rotate-6 rounded-sm lg:block"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute top-1/2 left-1/3 hidden h-3 w-16 rotate-12 rounded-sm lg:block"
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
        className="absolute bottom-1/2 left-1/2 hidden size-3 rounded-full bg-decode-green/40 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 hidden size-2.5 rounded-full bg-decode-red/40 lg:block"
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
                <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
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
                <a
                  href="https://nestuge.com/decodebenin1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
