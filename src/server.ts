import handler, { createServerEntry } from "@tanstack/react-start/server-entry";
import { setServerLocale } from "./i18n/core/request-context";
import { createCookieHeader, handleLocaleMiddleware } from "./i18n/core/server";
import { getLocaleFromRequest } from "./i18n/core/shared";

export default createServerEntry({
  async fetch(request: Request) {
    const middlewareResult = handleLocaleMiddleware(request);

    if (middlewareResult.redirect) {
      return middlewareResult.redirect;
    }

    const locale = getLocaleFromRequest(request);

    // Run the standard handler within the locale context to ensure sync getRouter() works
    return await setServerLocale(locale, async () => {
      const response = await handler.fetch(request);

      if (middlewareResult.setCookie) {
        const cookieValue = createCookieHeader(
          middlewareResult.setCookie.name,
          middlewareResult.setCookie.value,
        );
        response.headers.append("Set-Cookie", cookieValue);
      }

      return response;
    });
  },
});
