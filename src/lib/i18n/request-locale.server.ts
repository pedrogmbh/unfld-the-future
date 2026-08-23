import { AsyncLocalStorage } from "node:async_hooks";
import type { Locale } from "./locales";
import { REQUEST_LOCALE_ALS_KEY } from "./request-locale";

type GlobalWithLocaleAls = typeof globalThis & {
  [REQUEST_LOCALE_ALS_KEY]?: AsyncLocalStorage<Locale>;
};

function localeAls(): AsyncLocalStorage<Locale> {
  const globalRef = globalThis as GlobalWithLocaleAls;
  return (globalRef[REQUEST_LOCALE_ALS_KEY] ??= new AsyncLocalStorage<Locale>());
}

export function runWithRequestLocale<T>(locale: Locale, fn: () => T): T {
  return localeAls().run(locale, fn);
}
