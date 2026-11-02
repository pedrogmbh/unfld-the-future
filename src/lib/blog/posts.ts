export type BlogAuthor = {
  name: string;
  role: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601 calendar date (YYYY-MM-DD). */
  date: string;
  /** ISO 8601 calendar date. Metadata falls back to `date`. */
  updated?: string;
  cover: string;
  /** 1200×630 share image. */
  ogImage: string;
  coverAlt: string;
  tags: readonly string[];
  author: BlogAuthor;
  /** BCP 47. The post renders in this language on every site locale. */
  inLanguage: string;
  /** Visible byline. Defaults to "name, role". */
  byline?: string;
  draft?: boolean;
};

export const posts: readonly BlogPost[] = [
  {
    slug: "sentinela-cve",
    title: "A CVE é publicada. O Sentinela já a leu.",
    description:
      "O Sentinela CVE lê cada CVE publicada no @CVEnew, abre o registro oficial e diz, com evidência, se a UNFLD está exposta. Duas vezes por dia útil.",
    date: "2026-11-02",
    cover: "/blog/sentinela-cve/cover.webp",
    ogImage: "/blog/sentinela-cve/og.png",
    coverAlt:
      "Composição em preto do Sentinela CVE: nomes de componentes passam por uma linha de varredura, com a marca UNFLD.",
    tags: ["Sentinela CVE", "Grok Bot", "CVE", "Segurança"],
    author: { name: "Pedro Viana", role: "CEO" },
    byline: "Pedro Viana, CEO da UNFLD",
    inLanguage: "pt-BR",
  },
];

export function publishedPosts(): BlogPost[] {
  return posts
    .filter((post) => !post.draft)
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));
}

export function getPost(slug: string): BlogPost {
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return post;
}

export function postByline(post: BlogPost): string {
  return post.byline ?? `${post.author.name}, ${post.author.role}`;
}

export function nextPost(slug: string): BlogPost | undefined {
  const list = publishedPosts();
  const index = list.findIndex((post) => post.slug === slug);
  if (index < 0) return undefined;
  return list[index + 1];
}

export function formatBlogDate(iso: string, locale: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, (month ?? 1) - 1, day ?? 1)));
}
