import { createIsomorphicFn } from "@tanstack/react-start";
import {
  LOCALE_COOKIE,
  localeFromClientHints,
  parseLocale,
  type Locale,
} from "./locales";
import { peekRequestLocale } from "./request-locale";
import { readClientCookie } from "./runtime";

export function localeFromSearch(search: unknown): Locale | undefined {
  if (!search || typeof search !== "object") return undefined;
  const hl = (search as { hl?: unknown }).hl;
  return parseLocale(hl);
}

const localeFromHints = createIsomorphicFn()
  .client(() =>
    localeFromClientHints(readClientCookie(LOCALE_COOKIE), document.documentElement.lang),
  )
  .server(() => peekRequestLocale());

export async function resolveRequestLocale(search?: unknown): Promise<Locale> {
  const fromQuery = localeFromSearch(search);
  if (fromQuery) return fromQuery;
  return localeFromHints();
}
