import { createIsomorphicFn } from "@tanstack/react-start";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  parseLocale,
  type Locale,
} from "./locales";
import { readClientCookie } from "./runtime";

export function localeFromSearch(search: unknown): Locale | undefined {
  if (!search || typeof search !== "object") return undefined;
  const hl = (search as { hl?: unknown }).hl;
  return parseLocale(hl);
}

const localeFromHints = createIsomorphicFn()
  .client(() => parseLocale(readClientCookie(LOCALE_COOKIE)) ?? DEFAULT_LOCALE)
  .server(async () => {
    const { localeFromServerRequest } = await import("./resolve.server");
    return localeFromServerRequest();
  });

export async function resolveRequestLocale(search?: unknown): Promise<Locale> {
  const fromQuery = localeFromSearch(search);
  if (fromQuery) return fromQuery;
  return localeFromHints();
}
