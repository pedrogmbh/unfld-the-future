import { useContext } from "react";
import { LocaleContext } from "./context";
import { getMessages } from "./messages";
import type { Locale } from "./locales";
import type { Messages } from "@/locales/types";

export function useLocale(): Locale {
  return useContext(LocaleContext).locale;
}

export function useSetLocale(): (locale: Locale) => void {
  return useContext(LocaleContext).setLocale;
}

export function useMessages(): Messages {
  return getMessages(useLocale());
}
