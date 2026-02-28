import { useTranslations } from "use-intl";
import { AnimateInView } from "#/components/animate-in-view";
import { partners } from "#/lib/data";

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return <img src={logo} alt={name} className="h-8 w-auto shrink-0" />;
}

export function PartnersMarquee() {
  const t = useTranslations();

  return (
    <section
      className="relative overflow-hidden border-border border-y bg-card py-12"
      aria-label={t("partnersTitle")}
    >
      {/* Subtle scrapbook decorations */}
      <div
        className="washi-green absolute top-4 left-8 h-2 w-16 rotate-6 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="washi-yellow absolute right-8 bottom-4 h-2 w-12 -rotate-3 rounded-sm opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 size-1.5 rounded-full bg-decode-red/30 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/3 size-1 rounded-full bg-decode-green/30 opacity-10 sm:opacity-100 lg:opacity-25 xl:opacity-100"
        aria-hidden="true"
      />

      <AnimateInView animation="fade" className="mb-8 text-center">
        <span className="inline-block rounded-full bg-decode-green/10 px-4 py-1 font-bold text-decode-green text-xs uppercase tracking-widest">
          {t("partnersTitle")}
        </span>
      </AnimateInView>

      {/* Marquee row 1 */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, #0000, #000 66%, #000 66%, #0000)",
        }}
      >
        <div
          className="flex gap-4"
          style={{
            animation: "marquee 30s linear infinite",
            willChange: "transform",
          }}
          aria-hidden="true"
        >
          {[...partners, ...partners].map((partner, i) => (
            <PartnerLogo key={`${partner.slug}-${i}`} name={partner.name} logo={partner.logo} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div
        className="relative mt-4 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, #0000, #000 66%, #000 66%, #0000)",
        }}
      >
        <div
          className="flex gap-4"
          style={{
            animation: "marquee-reverse 35s linear infinite",
            willChange: "transform",
          }}
          aria-hidden="true"
        >
          {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, i) => (
            <PartnerLogo key={`rev-${partner.slug}-${i}`} name={partner.name} logo={partner.logo} />
          ))}
        </div>
      </div>

      {/* Screen reader accessible list */}
      <div className="sr-only">
        <h2>{t("partnersTitle")}</h2>
        <ul>
          {partners.map((partner) => (
            <li key={partner.slug}>{partner.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
