import { SITE } from "@/lib/site";
import { getMessages } from "@/lib/i18n/messages";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/locales";
import { getCurrentLocale } from "@/lib/i18n/runtime";
import type { Messages } from "@/locales/types";

export type PageMetaOptions = {
  title?: string;
  description?: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  locale?: Locale;
};

export function buildPageHead({
  title,
  description,
  path,
  type = "website",
  image = `${SITE.url}/og.jpg`,
  jsonLd,
  locale = getCurrentLocale(),
}: PageMetaOptions) {
  const messages = getMessages(locale);
  const resolvedDescription = description ?? messages.pages.home.metaDescription;
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} — ${messages.catalog.tagline}`;
  const canonicalUrl = `${SITE.url}${path === "/" ? "/" : path}`;

  const meta: Array<
    | { title: string }
    | { name: string; content: string }
    | { property: string; content: string }
  > = [
    { title: fullTitle },
    { name: "description", content: resolvedDescription },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: resolvedDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: locale.replace("-", "_") },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: resolvedDescription },
    { name: "twitter:image", content: image },
  ];

  const links = [
    { rel: "canonical", href: canonicalUrl },
    ...LOCALES.map((code) => ({
      rel: "alternate",
      hrefLang: code,
      href: canonicalUrl,
    })),
    { rel: "alternate", hrefLang: "x-default", href: canonicalUrl },
  ];

  const scripts = jsonLd
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLd),
        },
      ]
    : [];

  return {
    meta,
    links,
    scripts,
  };
}

void DEFAULT_LOCALE;

export function ownedProductPageHead(
  slug: keyof Messages["products"],
  path: string,
  locale: Locale,
) {
  const product = getMessages(locale).products[slug];
  return buildPageHead({
    title: `${product.name} — ${product.line.replace(/\.$/, "")}`,
    description: product.blurb,
    path,
    locale,
  });
}
