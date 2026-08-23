import { SITE } from "@/lib/site";

export type PageMetaOptions = {
  title?: string;
  description?: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function buildPageHead({
  title,
  description = "Across agronomy, hiring, small business, and workplace health, UNFLD turns complex work into technology people can actually use. We also build beside organizations whose most important problems do not fit an off-the-shelf product.",
  path,
  type = "website",
  image = `${SITE.url}/og.jpg`,
  jsonLd,
}: PageMetaOptions) {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} — ${SITE.tagline}`;
  const canonicalUrl = `${SITE.url}${path === "/" ? "/" : path}`;

  const meta: Array<
    | { title: string }
    | { name: string; content: string }
    | { property: string; content: string }
  > = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE.name },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  const links = [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", hrefLang: "pt-BR", href: canonicalUrl },
    { rel: "alternate", hrefLang: "en", href: canonicalUrl },
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
