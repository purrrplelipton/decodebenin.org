import { Icon as _Icon } from "@iconify-icon/react";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslations } from "use-intl";
import { LogoWhite } from "#/assets/images";
import { Button } from "#/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "#/components/ui/sheet";
import { useScrollDirection } from "#/hooks/use-scroll-direction";
import { getCurrentLocale } from "#/i18n/core/client";
import { LOCALE_COOKIE } from "#/i18n/core/shared";
import { navLinks } from "#/lib/data";
import { cn } from "#/lib/utils";

function ensureComponent<T>(component: T): T {
  if (typeof component === "object" && component !== null && "default" in component) {
    return (component as { default: T }).default;
  }
  return component;
}

const Icon = ensureComponent(_Icon);

export function SiteHeader() {
  const { isVisible, isAtTop } = useScrollDirection();
  const t = useTranslations();
  const currentLocale = getCurrentLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLocaleChange = (newLocale: string | null) => {
    if (!newLocale) return;

    // 1. Set cookie for persistence
    // biome-ignore lint/suspicious/noDocumentCookie: Direct cookie assignment is used for locale persistence across requests and SSR.
    document.cookie = `${LOCALE_COOKIE}=${newLocale}; path=/; max-age=31536000`;

    // 2. Refresh or navigate to localized URL
    const pathname = window.location.pathname;
    const parts = pathname.split("/").filter(Boolean);
    const firstPart = parts[0];

    const supportedLocales = ["en", "fr"];
    const isFirstPartLocale = supportedLocales.includes(firstPart);

    let newPath = pathname;

    if (newLocale === "en") {
      if (isFirstPartLocale) {
        newPath = `/${parts.slice(1).join("/")}`;
      }
    } else if (isFirstPartLocale) {
      newPath = `/${newLocale}/${parts.slice(1).join("/")}`;
    } else {
      newPath = `/${newLocale}${pathname}`;
    }

    if (!newPath.startsWith("/")) newPath = `/${newPath}`;
    if (newPath === "//") newPath = "/";

    window.location.assign(newPath);
  };

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-transform duration-300 ease-in-out",
        { "-translate-y-full": !isVisible },
        { "ambient-elevation-2 bg-decode-purple/95 backdrop-blur-md": !isAtTop },
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        {/* Logo */}
        <a
          href="#hero"
          className="relative z-10 flex items-center gap-2"
          aria-label="Decode Benin - Home"
        >
          <img src={LogoWhite} alt="Decode Benin" width={120} height={28} className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="rounded-lg px-3 py-2 font-medium text-primary-foreground/80 text-sm transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
            >
              {t(`nav${link.key}`)}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => handleLocaleChange(currentLocale === "en" ? "fr" : "en")}
            className="gap-1.5 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            aria-label={`Switch to ${currentLocale === "en" ? "French" : "English"}`}
          >
            {
              <ReactCountryFlag
                countryCode={currentLocale === "en" ? "BJ" : "NG"}
                svg
                style={{ width: "1em", height: "1em" }}
                aria-hidden="true"
              />
            }
            <span className="font-bold text-xs uppercase">
              {currentLocale === "en" ? "FR" : "EN"}
            </span>
          </Button>
          <Button
            size="sm"
            className="rounded-full bg-decode-yellow px-5 font-bold text-foreground hover:bg-decode-yellow/90"
            nativeButton={false}
            render={
              <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
                {t("navJoinCommunity")}
              </a>
            }
          />
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => handleLocaleChange(currentLocale === "en" ? "fr" : "en")}
            className="text-primary-foreground/80 hover:bg-primary-foreground/10"
            aria-label={`Switch to ${currentLocale === "en" ? "French" : "English"}`}
          >
            {
              <ReactCountryFlag
                countryCode={currentLocale === "en" ? "NG" : "BJ"}
                svg
                style={{ width: "1em", height: "1em" }}
                aria-hidden="true"
              />
            }
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  aria-label="Open navigation menu"
                >
                  <Icon icon="hugeicons:menu-01" className="text-xl" aria-hidden="true" />
                </Button>
              }
            />

            <SheetContent
              side="right"
              className="w-full max-w-xs border-decode-purple/20 bg-decode-purple text-primary-foreground"
            >
              <SheetHeader className="border-primary-foreground/10 border-b pb-4">
                <SheetTitle className="text-primary-foreground">
                  <img
                    src={LogoWhite}
                    alt="Decode Benin"
                    width={120}
                    height={28}
                    className="h-8 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 pt-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.key}
                    render={
                      <a
                        href={link.href}
                        className="rounded-lg px-4 py-3 font-medium text-base text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {t(`nav${link.key}`)}
                      </a>
                    }
                  />
                ))}
              </nav>
              <div className="mt-auto border-primary-foreground/10 border-t pt-4">
                <Button
                  className="w-full rounded-full bg-decode-yellow font-bold text-foreground hover:bg-decode-yellow/90"
                  render={
                    <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
                      {t("navJoinCommunity")}
                    </a>
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
