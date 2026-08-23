import { getCookie, getRequestHeader } from "@tanstack/react-start/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  localeFromAcceptLanguage,
  parseLocale,
  type Locale,
} from "./locales";

export function localeFromServerRequest(): Locale {
  const cookie = parseLocale(getCookie(LOCALE_COOKIE));
  if (cookie) return cookie;
  const accept =
    typeof getRequestHeader === "function"
      ? getRequestHeader("accept-language")
      : undefined;
  return localeFromAcceptLanguage(accept ?? null);
}
