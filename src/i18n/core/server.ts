import { parse, serialize } from "cookie";
import {
  defaultLocale,
  extractLocaleFromPath,
  isValidLocale,
  LOCALE_COOKIE,
  shouldIgnorePath,
} from "./shared";

export interface LocaleMiddlewareResult {
  redirect?: Response;
  setCookie?: {
    name: string;
    value: string;
  };
}

export function parseLocaleCookie(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  const cookies = parse(cookieHeader);
  const locale = cookies[LOCALE_COOKIE];
  return isValidLocale(locale) ? locale : null;
}

export function createCookieHeader(name: string, value: string): string {
  return serialize(name, value, {
    path: "/",
    maxAge: 31536000, // 1 year
    sameSite: "lax",
  });
}

export function handleLocaleMiddleware(request: Request): LocaleMiddlewareResult {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Skip for ignored paths
  if (shouldIgnorePath(pathname)) {
    return {};
  }

  // Redirect /en/* to /* (default locale shouldn't have prefix)
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    url.pathname = pathname.replace(`/${defaultLocale}`, "") || "/";
    return { redirect: Response.redirect(url.toString(), 301) };
  }

  const urlLocale = extractLocaleFromPath(pathname);

  if (urlLocale) {
    // Strip locale from ignored paths: /es/dashboard → /dashboard
    const strippedPath = pathname.replace(`/${urlLocale}`, "") || "/";
    if (shouldIgnorePath(strippedPath)) {
      url.pathname = strippedPath;
      return { redirect: Response.redirect(url.toString(), 301) };
    }

    // Sync cookie when URL has explicit locale
    const cookieLocale = parseLocaleCookie(request.headers.get("cookie"));
    if (urlLocale !== cookieLocale) {
      return { setCookie: { name: LOCALE_COOKIE, value: urlLocale } };
    }
  }

  return {};
}

export function getLocaleFromRequest(req: Request): string {
  if (shouldIgnorePath(new URL(req.url).pathname)) return defaultLocale;

  // 1. Try URL prefixFirst
  const pathLocale = extractLocaleFromPath(new URL(req.url).pathname);
  if (pathLocale) return pathLocale;

  // 2. Try cookie
  const cookieLocale = parseLocaleCookie(req.headers.get("cookie"));
  if (cookieLocale) return cookieLocale;

  // 3. Try Accept-Language header
  const acceptLanguage = req.headers.get("accept-language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();
    if (isValidLocale(preferredLocale)) return preferredLocale;
  }

  return defaultLocale;
}
