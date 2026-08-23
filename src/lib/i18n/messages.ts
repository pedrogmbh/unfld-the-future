import { enUS } from "@/locales/en-US";
import esAR from "@/locales/es-AR.json";
import frFR from "@/locales/fr-FR.json";
import ptBR from "@/locales/pt-BR.json";
import type { Messages } from "@/locales/types";
import { DEFAULT_LOCALE, type Locale } from "./locales";
import { getCurrentLocale } from "./runtime";

const registry: Record<Locale, Messages> = {
  "en-US": enUS as Messages,
  "pt-BR": ptBR as Messages,
  "es-AR": esAR as Messages,
  "fr-FR": frFR as Messages,
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
