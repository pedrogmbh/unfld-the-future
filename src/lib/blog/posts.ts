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
    title: "Quem lê a CVE quando ninguém tem tempo?",
    description:
      "Vulnerabilidades novas surgem mais rápido do que qualquer time consegue ler. Esta é a história do agente que a UNFLD colocou para confirmar cada uma em fontes oficiais, cruzar com o que roda em produção e preparar a correção para revisão humana.",
    date: "2026-11-02",
    updated: "2026-11-02",
    cover: "/blog/sentinela-cve/cover.webp",
    ogImage: "/blog/sentinela-cve/og.png",
    coverAlt:
      "Capa do Sentinela CVE. À esquerda, a pergunta: quem lê a CVE quando ninguém tem tempo? À direita, nomes de componentes das rodadas reais passam por um painel de varredura com a marca UNFLD.",
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
