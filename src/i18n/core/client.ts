import { getServerLocale } from "./request-context";
import {
  defaultLocale,
  extractLocaleFromPath,
  isValidLocale,
  LOCALE_COOKIE,
  shouldIgnorePath,
} from "./shared";

export function getCurrentLocale(): string {
  if (typeof window === "undefined") {
    return getServerLocale() || defaultLocale;
  }

  // 1. Try URL prefix
  const pathLocale = extractLocaleFromPath(window.location.pathname);
  if (pathLocale) return pathLocale;

  // 2. Try cookie
  const cookieLocale = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${LOCALE_COOKIE}=`))
    ?.split("=")[1];

  if (isValidLocale(cookieLocale)) return cookieLocale;

  // 3. Fallback to default
  return defaultLocale;
}

export function localizeUrl(url: URL, locale?: string): URL {
  const activeLocale = locale ?? getCurrentLocale();
  if (activeLocale === defaultLocale) return url;

  const pathname = url.pathname;

  // Don't double-prefix
  if (pathname.startsWith(`/${activeLocale}/`) || pathname === `/${activeLocale}`) {
    return url;
  }

  // Skip ignored paths
  if (shouldIgnorePath(pathname)) {
    return url;
  }

  const newUrl = new URL(url.toString());
  newUrl.pathname = `/${activeLocale}${pathname === "/" ? "" : pathname}`;
  return newUrl;
}

export function deLocalizeUrl(url: URL): URL {
  const pathname = url.pathname;
  const locale = extractLocaleFromPath(pathname);

  if (!locale) return url;

  const newUrl = new URL(url.toString());
  newUrl.pathname = pathname.replace(`/${locale}`, "") || "/";
  return newUrl;
}
