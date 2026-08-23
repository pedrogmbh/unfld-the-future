import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getMessages } from "./messages";
import { DEFAULT_LOCALE, type Locale } from "./locales";

/** Inlined so createI18n cannot read a TDZ `LOCALES` during a circular chunk. */
const BUNDLED_LOCALES = ["en-US", "pt-BR", "es-AR", "fr-FR"] as const;

function flattenMessages(
  obj: unknown,
  prefix = "",
  out: Record<string, string> = {},
): Record<string, string> {
  if (typeof obj === "string") {
    out[prefix] = obj;
    return out;
  }
  if (Array.isArray(obj)) {
    obj.forEach((value, index) => {
      flattenMessages(value, prefix ? `${prefix}.${index}` : String(index), out);
    });
    return out;
  }
  if (obj && typeof obj === "object") {
    for (const [key, value] of Object.entries(obj)) {
      flattenMessages(value, prefix ? `${prefix}.${key}` : key, out);
    }
  }
  return out;
}

export function createI18n(lng: Locale) {
  const instance = i18n.createInstance();
  const resources = Object.fromEntries(
    BUNDLED_LOCALES.map((locale) => [
      locale,
      { translation: flattenMessages(getMessages(locale)) },
    ]),
  );

  instance.use(initReactI18next).init({
    lng,
    fallbackLng: false,
    supportedLngs: [...BUNDLED_LOCALES],
    nonExplicitSupportedLngs: false,
    load: "currentOnly",
    resources,
    interpolation: { escapeValue: false },
    returnNull: false,
    returnEmptyString: false,
    returnObjects: false,
    parseMissingKeyHandler: (key) => `⟦${key}⟧`,
    initAsync: false,
  });

  if (!instance.isInitialized) {
    instance.changeLanguage(lng);
  }

  return instance;
}

let defaultI18n: ReturnType<typeof createI18n> | undefined;

/**
 * Lazy: the production SSR graph has a circular chunk (router ↔ site/i18n).
 * Constructing i18n at import time reads `LOCALES` / `getMessages` before
 * that chunk finishes and takes the whole site down with HTTPError 500.
 */
export function getDefaultI18n() {
  defaultI18n ??= createI18n(DEFAULT_LOCALE);
  return defaultI18n;
}
