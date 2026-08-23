import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  localeFromAcceptLanguage,
  parseLocale,
  type Locale,
} from "./locales";

/** Shared ALS slot so middleware and the SSR bundle see the same store. */
export const REQUEST_LOCALE_ALS_KEY = "__unfldRequestLocaleALS__";

type LocaleStore = { getStore: () => Locale | undefined };

function cookieValue(header: string | null | undefined, name: string): string | undefined {
  if (!header) return undefined;
  const prefix = `${name}=`;
  for (const part of header.split(";")) {
    const pair = part.trim();
    if (!pair.startsWith(prefix)) continue;
    try {
      return decodeURIComponent(pair.slice(prefix.length));
    } catch {
      return pair.slice(prefix.length);
    }
  }
  return undefined;
}

export function localeFromRequestHeaders(headers: Headers): Locale {
  const cookie = parseLocale(cookieValue(headers.get("cookie"), LOCALE_COOKIE));
  if (cookie) return cookie;
  return localeFromAcceptLanguage(headers.get("accept-language"));
}

export function peekRequestLocale(): Locale {
  const als = (globalThis as typeof globalThis & {
    [REQUEST_LOCALE_ALS_KEY]?: LocaleStore;
  })[REQUEST_LOCALE_ALS_KEY];
  return als?.getStore() ?? DEFAULT_LOCALE;
}
