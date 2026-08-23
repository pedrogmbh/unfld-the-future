export const LOCALES = ["en-US", "pt-BR", "es-AR", "fr-FR"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en-US";

export const LOCALE_COOKIE = "unfld-locale";

export const LOCALE_QUERY = "hl";

export const LOCALE_META: Record<
  Locale,
  { html: string; short: string; native: string; english: string }
> = {
  "en-US": { html: "en-US", short: "EN", native: "English", english: "English" },
  "pt-BR": {
    html: "pt-BR",
    short: "PT",
    native: "Português",
    english: "Portuguese",
  },
  "es-AR": { html: "es-AR", short: "ES", native: "Español", english: "Spanish" },
  "fr-FR": { html: "fr-FR", short: "FR", native: "Français", english: "French" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

export function parseLocale(value: unknown): Locale | undefined {
  if (isLocale(value)) return value;
  if (typeof value !== "string") return undefined;
  const lower = value.toLowerCase();
  if (lower === "en" || lower.startsWith("en-")) return "en-US";
  if (lower === "pt" || lower.startsWith("pt-")) return "pt-BR";
  if (lower === "es" || lower.startsWith("es-")) return "es-AR";
  if (lower === "fr" || lower.startsWith("fr-")) return "fr-FR";
  return undefined;
}

export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE;
  const parts = header.split(",").map((part) => {
    const [tag, ...params] = part.trim().split(";");
    const q = params.find((p) => p.trim().startsWith("q="));
    const quality = q ? Number.parseFloat(q.trim().slice(2)) : 1;
    return { tag: tag.trim(), quality: Number.isFinite(quality) ? quality : 0 };
  });
  parts.sort((a, b) => b.quality - a.quality);
  for (const part of parts) {
    const match = parseLocale(part.tag);
    if (match) return match;
  }
  return DEFAULT_LOCALE;
}
