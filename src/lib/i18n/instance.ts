import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getMessages } from "./messages";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./locales";

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
    LOCALES.filter((locale) => {
      try {
        getMessages(locale);
        return true;
      } catch {
        return locale === DEFAULT_LOCALE;
      }
    }).map((locale) => [
      locale,
      { translation: flattenMessages(getMessages(locale)) },
    ]),
  );

  instance.use(initReactI18next).init({
    lng,
    fallbackLng: false,
    supportedLngs: [...LOCALES],
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

export const defaultI18n = createI18n(DEFAULT_LOCALE);
