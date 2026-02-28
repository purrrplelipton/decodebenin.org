import { useTranslations } from "use-intl";
import {
  CareerGrowthTrajectory,
  CommunityForEveryone,
  GettingStartedBeginnersSupport,
  StayingConnectedAlumniAndGrowth,
} from "#/assets/images";
import { AnimateInView } from "#/components/animate-in-view";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#/components/ui/accordion";

const faqItems = [
  { q: "Q1", a: "A1" },
  { q: "Q2", a: "A2" },
  { q: "Q3", a: "A3" },
  { q: "Q4", a: "A4" },
] as const;

export function FaqSection() {
  const t = useTranslations();

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      {/* Dotted paper bg */}
      <div className="dotted-paper absolute inset-0 opacity-40" aria-hidden="true" />

      {/* SCATTERED PHOTO CARDS */}
      <div
        className="absolute top-20 left-8 -rotate-8 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-green rounded-sm bg-card p-2">
          <img
            src={StayingConnectedAlumniAndGrowth}
            alt="Program alumni now mentors and leaders giving back and helping new community members"
            loading="lazy"
            className="h-28 w-24 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute top-2/3 right-12 rotate-6 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-yellow rounded-sm bg-card p-2">
          <img
            src={GettingStartedBeginnersSupport}
            alt="Experienced person encouragingly helping and supporting beginner with new concept"
            loading="lazy"
            className="h-32 w-28 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute bottom-20 left-1/3 -rotate-4 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card pin-effect torn-edge-all paper-crease paint-stain-red rounded-sm bg-card p-2">
          <img
            src={CareerGrowthTrajectory}
            alt="Young person looking satisfied with visible resume, portfolio pieces, and achievement timeline"
            loading="lazy"
            className="h-24 w-32 rounded object-cover"
          />
        </div>
      </div>

      <div
        className="absolute right-1/4 bottom-32 rotate-10 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      >
        <div className="scrapbook-card torn-edge-all paper-crease paint-stain-purple rounded-sm bg-card p-2">
          <img
            src={CommunityForEveryone}
            alt="People of different ages, backgrounds, and experience levels gathered together at inclusive community event"
            loading="lazy"
            className="h-28 w-24 rounded object-cover"
          />
        </div>
      </div>

      {/* Decorative washi */}
      <div
        className="washi-green absolute top-16 right-8 h-3 w-20 rotate-6 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-yellow absolute bottom-20 left-12 h-3 w-14 -rotate-3 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="washi-red absolute top-1/2 left-1/4 h-3 w-20 rotate-8 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-purple absolute right-1/3 bottom-1/3 h-3 w-16 -rotate-6 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-6 size-2 rounded-full bg-decode-red/50"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/3 size-2.5 rounded-full bg-decode-green/40 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/2 size-2 rounded-full bg-decode-yellow/50 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6">
        <AnimateInView animation="fade-up" className="mb-12 text-center md:mb-16">
          <h2
            id="faq-heading"
            className="text-balance font-bold font-serif text-3xl text-foreground sm:text-4xl md:text-5xl"
          >
            {t("faqTitle")}
          </h2>
        </AnimateInView>

        <AnimateInView animation="fade-up" delay={100}>
          <div className="scrapbook-card relative rounded-lg bg-card p-4 md:p-6">
            {/* Tape at top */}
            <div
              className="washi-purple absolute -top-2 left-1/2 h-5 w-20 -translate-x-1/2 rounded-sm"
              aria-hidden="true"
            />

            <Accordion className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.q} value={item.q} className="border-border/50">
                  <AccordionTrigger className="py-5 text-left font-semibold text-base text-foreground hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-decode-purple/10 font-bold text-decode-purple-light text-xs">
                        {index + 1}
                      </span>
                      {t(`faq${item.q}`)}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-10 text-muted-foreground leading-relaxed">
                    {t(`faq${item.a}`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
