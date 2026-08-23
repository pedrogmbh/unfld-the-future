/**
 * Bind the request locale before TanStack Start SSR. Root `beforeLoad` must
 * not call `getCookie` after a dynamic import — on Vercel that await leaves
 * Start's request ALS and the page dies as an unhandled HTTPError 500.
 */
import {
  localeFromRequestHeaders,
} from "../../src/lib/i18n/request-locale";
import { runWithRequestLocale } from "../../src/lib/i18n/request-locale.server";

interface LocaleEvent {
  url: URL;
  req: { method: string; headers: Headers };
}

export default function localeMiddleware(
  event: LocaleEvent,
  next: () => unknown | Promise<unknown>,
): unknown | Promise<unknown> {
  const request = new Request(event.url, {
    method: event.req.method,
    headers: event.req.headers,
  });
  const locale = localeFromRequestHeaders(request.headers);
  return runWithRequestLocale(locale, () => next());
}
