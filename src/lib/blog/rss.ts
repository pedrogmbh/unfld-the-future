import { xmlEscape } from "@/lib/machine";
import { SITE } from "@/lib/site";
import { postPath } from "./head";
import { publishedPosts } from "./posts";

/** 09:00 in America/Sao_Paulo, the morning slot of the current cadence. */
function rfc822(isoDate: string): string {
  return new Date(`${isoDate}T09:00:00-03:00`).toUTCString();
}

export function renderRss(entries = publishedPosts()): string {
  const items = entries
    .map((post) => {
      const link = xmlEscape(`${SITE.url}${postPath(post.slug)}`);
      return `    <item>
      <title>${xmlEscape(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${rfc822(post.updated ?? post.date)}</pubDate>
      <description>${xmlEscape(post.description)}</description>
    </item>`;
    })
    .join("\n");

  const self = xmlEscape(`${SITE.url}/rss.xml`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(`${SITE.name} Blog`)}</title>
    <link>${xmlEscape(`${SITE.url}/blog`)}</link>
    <description>${xmlEscape("Pages from UNFLD on the systems we build and operate.")}</description>
    <language>pt-BR</language>
    <atom:link href="${self}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;
}
