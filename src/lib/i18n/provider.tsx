import { useCallback, useMemo, useState, type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { useRouter } from "@tanstack/react-router";
import { LocaleContext } from "./context";
import { getDefaultI18n } from "./instance";
import {
  LOCALE_COOKIE,
  LOCALE_META,
  type Locale,
} from "./locales";
import { setCurrentLocale, writeLocaleCookie } from "./runtime";

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      setCurrentLocale(next);
      writeLocaleCookie(LOCALE_COOKIE, next);
      void getDefaultI18n().changeLanguage(next);
      if (typeof document !== "undefined") {
        document.documentElement.lang = LOCALE_META[next].html;
      }
      void router.invalidate();
    },
    [router],
  );

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>
      <I18nextProvider i18n={getDefaultI18n()}>{children}</I18nextProvider>
    </LocaleContext.Provider>
  );
}
