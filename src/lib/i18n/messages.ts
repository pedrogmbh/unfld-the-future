import { enUS } from "@/locales/en-US";
import type { Messages } from "@/locales/types";
import { DEFAULT_LOCALE, type Locale } from "./locales";
import { getCurrentLocale } from "./runtime";

const registry: Partial<Record<Locale, Messages>> = {
  "en-US": enUS as Messages,
};

export function registerMessages(locale: Locale, messages: Messages): void {
  registry[locale] = messages;
}

export function getMessages(locale: Locale = getCurrentLocale()): Messages {
  const bundle = registry[locale];
  if (!bundle) {
    if (locale === DEFAULT_LOCALE) return enUS as Messages;
    throw new Error(`Missing i18n bundle for ${locale}`);
  }
  return bundle;
}

export function hasMessages(locale: Locale): boolean {
  return Boolean(registry[locale]);
}
