import { createRouter } from "@tanstack/react-router";
import { deLocalizeUrl, getCurrentLocale, localizeUrl } from "./i18n/core/client";
import type { Locale } from "./i18n/core/shared";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const locale = getCurrentLocale() as Locale;

  const router = createRouter({
    routeTree,
    context: { locale },
    rewrite: {
      input: ({ url }) => deLocalizeUrl(url),
      output: ({ url }) => localizeUrl(url, locale),
    },
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    scrollRestoration: true,
    defaultViewTransition: true,
  });

  return router;
}
