export const defaultLocale = "en";
export const supportedLocales = ["en", "fr"] as const;
export const LOCALE_COOKIE = "locale";

// Paths that bypass locale handling entirely
export const ignoredPathsRegex = /^\/(?:api|rpc|dashboard)(?:\/|$)/;

export type Locale = (typeof supportedLocales)[number];

export function isValidLocale(locale: string | undefined): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}

export function shouldIgnorePath(pathname: string): boolean {
  return ignoredPathsRegex.test(pathname);
}

export function extractLocaleFromPath(pathname: string): Locale | null {
  const match = /^\/([a-z]{2})(?:\/|$)/.exec(pathname);
  const locale = match?.[1];
  return locale && isValidLocale(locale) && locale !== defaultLocale ? locale : null;
}

export function getLocaleFromRequest(request: Request): Locale {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // 1. URL prefix
  const urlLocale = extractLocaleFromPath(pathname);
  if (urlLocale) return urlLocale;

  // 2. Cookie
  const cookieHeader = request.headers.get("cookie") || "";
  const match = new RegExp(`(?:^|; )\\s*${LOCALE_COOKIE}=([^;]*)`).exec(cookieHeader);
  const cookieLocale = match?.[1];
  if (cookieLocale && isValidLocale(cookieLocale)) return cookieLocale as Locale;

  // 3. Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";
  const languages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().split("-")[0]);
  for (const lang of languages) {
    if (isValidLocale(lang)) return lang as Locale;
  }

  return defaultLocale;
}
