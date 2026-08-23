import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  localeFromAcceptLanguage,
  parseLocale,
  type Locale,
} from "./locales";
import { readClientCookie } from "./runtime";

export function localeFromSearch(search: unknown): Locale | undefined {
  if (!search || typeof search !== "object") return undefined;
  const hl = (search as { hl?: unknown }).hl;
  return parseLocale(hl);
}

export async function resolveRequestLocale(search?: unknown): Promise<Locale> {
  const fromQuery = localeFromSearch(search);
  if (fromQuery) return fromQuery;

  if (typeof document !== "undefined") {
    return parseLocale(readClientCookie(LOCALE_COOKIE)) ?? DEFAULT_LOCALE;
  }

  try {
    const server = await import("@tanstack/react-start/server");
    const cookie = parseLocale(server.getCookie(LOCALE_COOKIE));
    if (cookie) return cookie;
    const accept =
      typeof server.getRequestHeader === "function"
        ? server.getRequestHeader("accept-language")
        : undefined;
    return localeFromAcceptLanguage(accept ?? null);
  } catch {
    return DEFAULT_LOCALE;
  }
}
