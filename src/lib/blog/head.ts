import { isLocale, type Locale } from "@/lib/i18n/locales";
import { organizationId } from "@/lib/jsonld";
import { buildPageHead } from "@/lib/meta";
import { SITE } from "@/lib/site";
import { getPost } from "./posts";

export function postPath(slug: string): string {
  return `/blog/${slug}`;
}

export function absoluteAsset(path: string): string {
  return `${SITE.url}${path}`;
}

function articleLocale(code: string): Locale | undefined {
  return isLocale(code) ? code : undefined;
}

export function blogPostingJsonLd(slug: string) {
  const post = getPost(slug);
  const url = `${SITE.url}${postPath(post.slug)}`;
  const modified = post.updated ?? post.date;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: modified,
    image: absoluteAsset(post.ogImage),
    inLanguage: post.inLanguage,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: { "@id": organizationId() },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags.join(", "),
    url,
  };
}

export function buildPostHead(slug: string) {
  const post = getPost(slug);
  const modified = post.updated ?? post.date;
  const head = buildPageHead({
    title: post.title,
    description: post.description,
    path: postPath(post.slug),
    type: "article",
    image: absoluteAsset(post.ogImage),
    jsonLd: blogPostingJsonLd(slug),
    locale: articleLocale(post.inLanguage),
  });

  head.meta.push(
    { property: "article:published_time", content: post.date },
    { property: "article:modified_time", content: modified },
    { property: "article:author", content: post.author.name },
    { property: "og:image:alt", content: post.coverAlt },
  );

  return head;
}
