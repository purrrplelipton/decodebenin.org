import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { IntlProvider } from "use-intl";
import { CountdownWidget } from "#/components/countdown-widget";
import { SiteFooter } from "#/components/site-footer";
import { SiteHeader } from "#/components/site-header";
import { ScrollArea } from "#/components/ui/scroll-area";
import { TooltipProvider } from "#/components/ui/tooltip";
import { ScrollContainerProvider, useScrollContainerRef } from "#/context/scroll-container";
import { getCurrentLocale } from "#/i18n/core/client";
import type { Locale } from "#/i18n/core/shared";
import { messages } from "#/i18n/messages";
import appCss from "#/styles.css?url";

/**
 * Toggle this to wire up real error reporting (Sentry, LogRocket, Datadog, etc)
 * without rewriting your route config.
 */
function reportError(error: unknown, meta?: Record<string, unknown>): void {
  // Always log in dev to avoid silent failures
  if (import.meta.env.DEV) {
    console.error("[AppError]", error, meta);
    return;
  }

  // Production example: sendBeacon to your backend
  // (keep it tiny + non-blocking)
  try {
    const payload = JSON.stringify({
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      meta,
      href: globalThis.location?.href,
      ts: Date.now(),
    });

    if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
      navigator.sendBeacon("/api/client-error", payload);
    } else {
      // last resort (still non-blocking-ish)
      fetch("/api/client-error", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // never let reporting crash the app
  }
}

function safeJsonStringify(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

function normalizeError(err: unknown): Error {
  if (err instanceof Error) return err;
  if (typeof err === "string") return new Error(err);

  // This might be objects thrown from validateSearch/beforeLoad, etc
  return new Error(`Non-Error thrown: ${safeJsonStringify(err)}`);
}

function useGlobalBrowserErrorHooks() {
  useEffect(() => {
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      reportError(event.reason, { kind: "unhandledrejection" });
    };

    const onError = (event: ErrorEvent) => {
      reportError(event.error ?? event.message, {
        kind: "globalThis.onerror",
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    };

    globalThis.addEventListener?.("unhandledrejection", onUnhandledRejection);
    globalThis.addEventListener?.("error", onError);

    return () => {
      globalThis.removeEventListener?.("unhandledrejection", onUnhandledRejection);
      globalThis.removeEventListener?.("error", onError);
    };
  }, []);
}

export interface MyRouterContext {
  locale: Locale;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  /**
   * createRootRoute options are basically RouteOptions (minus path/id/parent-route stuff),
   * so you can use errorComponent, pendingComponent, beforeLoad, loader, validateSearch, etc.
   */
  wrapInSuspense: true, // ensure suspense boundary exists even if router decides not to
  pendingMs: 200,
  pendingMinMs: 350,

  pendingComponent: RootPending,
  errorComponent: RootError,
  notFoundComponent: RootNotFound,

  /**
   * Fired when an error happens during navigation/preload (loader/beforeLoad/validateSearch).
   * Great place for centralized logging.
   */
  onError: (err) => {
    reportError(err, { kind: "router.onError" });
  },

  onCatch: (error) => {
    reportError(error, { kind: "router.onCatch" });
  },

  head: () => {
    const locale = getCurrentLocale() as Locale;
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
        {
          name: "referrer",
          content: "strict-origin-when-cross-origin",
        },
        {
          name: "color-scheme",
          content: "light dark",
        },
        {
          title: messages[locale]?.root_meta_title ?? messages.en.root_meta_title,
        },
        {
          name: "description",
          content: messages[locale]?.root_meta_description ?? messages.en.root_meta_description,
        },
        {
          name: "keywords",
          content: messages[locale]?.root_meta_keywords ?? messages.en.root_meta_keywords,
        },
        { name: "author", content: "Decode Benin Initiative" },
        { name: "creator", content: "Decode Benin Initiative" },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "#2D1B69",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "#1a0a3e",
        },

        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://decodebenin.com" },
        { property: "og:locale", content: locale === "fr" ? "fr_FR" : "en_US" },
        { property: "og:locale:alternate", content: locale === "fr" ? "en_US" : "fr_FR" },
        {
          property: "og:title",
          content: messages[locale]?.root_meta_title ?? messages.en.root_meta_title,
        },
        {
          property: "og:description",
          content: messages[locale]?.root_meta_description ?? messages.en.root_meta_description,
        },
        {
          property: "og:image",
          content: "/images/og-image.jpg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Decode Benin - Decoding Your Future in Tech" },
        { property: "og:site_name", content: "Decode Benin" },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: messages[locale]?.root_meta_title ?? messages.en.root_meta_title,
        },
        {
          name: "twitter:description",
          content: messages[locale]?.root_meta_description ?? messages.en.root_meta_description,
        },
        { name: "twitter:creator", content: "@decodebenin" },

        {
          name: "robots",
          content: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
        },
        {
          name: "googlebot",
          content: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
        },
        {
          name: "language",
          content: locale === "fr" ? "French" : "English",
        },
        { name: "revisit-after", content: "7 days" },
      ],

      links: [
        { rel: "stylesheet", href: appCss },

        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/manifest.json" },

        { rel: "canonical", href: "https://decodebenin.com" },
      ],
    };
  },

  /**
   * RootShell MUST be your HTML skeleton.
   * It wraps root component / root error / root notFound.
   */
  shellComponent: RootShell,

  /**
   * RootLayout is your "real app layout" (Providers, dialogs, Outlet).
   * Keeping it separate makes error/pending boundaries way cleaner.
   */
  component: RootLayout,
});

function RootScrollArea({ children }: { children: React.ReactNode }) {
  const viewportRef = useScrollContainerRef();
  return (
    <ScrollArea className="h-dvh" viewportRef={viewportRef}>
      {children}
    </ScrollArea>
  );
}

function RootShell({ children }: { children: React.ReactNode }) {
  const locale = getCurrentLocale() as Locale;

  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        <IntlProvider
          locale={locale}
          messages={messages[locale] ?? messages.en}
          timeZone="UTC"
          onError={(err) => {
            if (err.code === "MISSING_MESSAGE") return;
            console.error(err);
          }}
        >
          {children}
        </IntlProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootLayout() {
  useGlobalBrowserErrorHooks();

  return (
    <ScrollContainerProvider>
      <RootScrollArea>
        <TooltipProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-decode-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-foreground focus:outline-none"
          >
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content" className="min-h-dvh">
            <Outlet />
          </main>
          <SiteFooter />
          <CountdownWidget />
        </TooltipProvider>
      </RootScrollArea>
    </ScrollContainerProvider>
  );
}

function RootPending() {
  const locale = getCurrentLocale() as Locale;
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <div style={{ fontSize: 18, fontWeight: 600 }}>
          {messages[locale]?.root_loading ?? messages.en.root_loading}
        </div>
        <div style={{ opacity: 0.75, marginTop: 8 }}>
          {messages[locale]?.root_loading_desc ?? messages.en.root_loading_desc}
        </div>
      </div>
    </div>
  );
}

function RootError({ error }: { error: unknown }) {
  const err = useMemo(() => normalizeError(error), [error]);

  useEffect(() => {
    reportError(err, { kind: "RootError.render" });
  }, [err]);

  const isDev = import.meta.env.DEV;
  const locale = getCurrentLocale() as Locale;
  const m = messages[locale] ?? messages.en;

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: 760 }}>
        <h1 style={{ margin: 0, fontSize: 28 }}>{m.root_error_title}</h1>
        <p style={{ opacity: 0.8, marginTop: 10 }}>{m.root_error_desc}</p>

        <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={globalThis.location?.reload}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.06)",
              cursor: "pointer",
            }}
          >
            {m.root_error_reload}
          </button>

          <Link
            to="/"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.06)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {m.root_error_go_home}
          </Link>
        </div>

        {isDev ? (
          <pre
            style={{
              marginTop: 18,
              padding: 14,
              borderRadius: 12,
              overflow: "auto",
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.12)",
              whiteSpace: "pre-wrap",
            }}
          >
            {err.stack ?? err.message}
          </pre>
        ) : null}
      </div>
    </div>
  );
}

/**
 * TanStack Router's “not found” handler supports passing custom data into the NotFound error.
 */
function RootNotFound({ data }: { data?: unknown }) {
  const isDev = import.meta.env.DEV;
  const locale = getCurrentLocale() as Locale;
  const m = messages[locale] ?? messages.en;

  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div style={{ maxWidth: 640 }}>
        <h1 style={{ margin: 0 }}>{m.root_not_found_title}</h1>
        <p style={{ opacity: 0.8, marginTop: 10 }}>{m.root_not_found_desc}</p>

        <Link
          to="/"
          style={{
            marginTop: "1rem",
            color: "#0066cc",
            display: "inline-block",
          }}
        >
          {m.root_not_found_go_home}
        </Link>

        {isDev && data ? (
          <pre
            style={{
              marginTop: 18,
              padding: 14,
              borderRadius: 12,
              overflow: "auto",
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.12)",
              textAlign: "left",
              whiteSpace: "pre-wrap",
            }}
          >
            notFound data:
            {"\n"}
            {safeJsonStringify(data)}
          </pre>
        ) : null}
      </div>
    </div>
  );
}
