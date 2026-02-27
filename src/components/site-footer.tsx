import { Icon } from "@iconify-icon/react";
import { useTranslations } from "use-intl";
import { LogoWhite } from "#/assets/images";
import { Button } from "#/components/ui/button";
import { socialLinks } from "#/lib/data";

const iconMap: Record<string, string> = {
  twitter: "hugeicons:twitter",
  linkedin: "hugeicons:linkedin-01",
  instagram: "hugeicons:instagram",
};

export function SiteFooter() {
  const t = useTranslations();

  return (
    <footer className="bg-decode-purple text-primary-foreground">
      {/* CTA Banner */}
      <div className="border-primary-foreground/10 border-b">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center md:flex-row md:justify-between md:px-6 md:text-left">
          <div className="max-w-lg">
            <h2 className="text-balance font-bold font-serif text-2xl md:text-3xl">
              {t("footerStayUpdated")}
            </h2>
            <p className="mt-2 text-primary-foreground/70 leading-relaxed">
              {t("footerStayUpdatedDesc")}
            </p>
          </div>
          <Button
            size="lg"
            className="rounded-full bg-decode-yellow px-8 font-bold text-foreground hover:bg-decode-yellow/90"
            nativeButton={false}
            render={
              <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
                {t("footerJoinSlack")}
              </a>
            }
          />
        </div>
      </div>

      {/* Footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Logo & socials */}
          <div className="space-y-4">
            <img
              src={LogoWhite}
              alt="Decode Benin"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
            <ul className="flex items-center gap-3" aria-label="Social media links">
              {socialLinks.map((link) => {
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                      aria-label={`Follow us on ${link.name}`}
                    >
                      <Icon icon={iconMap[link.icon]} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-3 font-bold text-primary-foreground/50 text-xs uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Button
                  variant="ghost"
                  size="xs"
                  className="h-auto p-0 text-primary-foreground/70 transition-colors hover:bg-transparent hover:text-primary-foreground"
                >
                  {t("footerTerms")}
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  size="xs"
                  className="h-auto p-0 text-primary-foreground/70 transition-colors hover:bg-transparent hover:text-primary-foreground"
                >
                  {t("footerPrivacy")}
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  size="xs"
                  className="h-auto p-0 text-primary-foreground/70 transition-colors hover:bg-transparent hover:text-primary-foreground"
                >
                  {t("footerContact")}
                </Button>
              </li>
            </ul>
          </nav>

          {/* Community */}
          <div>
            <h3 className="mb-3 font-bold text-primary-foreground/50 text-xs uppercase tracking-widest">
              Community
            </h3>
            <Button
              size="sm"
              className="rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              nativeButton={false}
              render={
                <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
                  {t("footerJoinSlack")}
                </a>
              }
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-primary-foreground/10 border-t pt-6 text-center">
          <p className="text-primary-foreground/50 text-xs">{t("footerCopyright")}</p>
        </div>
      </div>
    </footer>
  );
}
