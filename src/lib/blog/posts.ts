import type { Locale } from "@/lib/i18n/locales";

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
  /** BCP 47 language of this edition. */
  inLanguage: string;
  /** Visible byline. Defaults to "name, role". */
  byline?: string;
  editions?: Partial<
    Record<
      Locale,
      Pick<BlogPost, "title" | "description" | "byline" | "cover" | "coverAlt" | "ogImage" | "tags">
    >
  >;
  draft?: boolean;
};

export const posts: readonly BlogPost[] = [
  {
    slug: "hive-mind",
    title: "O espaço entre duas ideias",
    description:
      "Meu mentor chamava de hive mind as vezes em que chegávamos à mesma conclusão antes de conversar. Essa lembrança deu forma à nova marca da UNFLD.",
    date: "2026-11-13",
    cover: "/blog/hive-mind/cover.webp",
    ogImage: "/blog/hive-mind/hive-mind-1200x630.jpg",
    coverAlt:
      "O espaço entre duas ideias, de Pedro Viana. A assinatura UNFLD ao lado de duas dobras cor de mel.",
    tags: ["Identidade visual", "Hive Mind", "Célula aberta"],
    author: { name: "Pedro Viana", role: "CEO" },
    byline: "Pedro Viana, fundador da UNFLD",
    inLanguage: "pt-BR",
    editions: {
      "en-US": {
        title: "The space between two ideas",
        description:
          "My mentor called it hive mind when we reached the same conclusion before we spoke. That memory shaped UNFLD’s new identity.",
        byline: "Pedro Viana, founder of UNFLD",
        coverAlt:
          "The space between two ideas, by Pedro Viana. The UNFLD logo beside two honey-colored folds.",
        tags: ["Visual identity", "Hive Mind", "Open cell"],
        cover: "/blog/hive-mind/cover-en.webp",
        ogImage: "/blog/hive-mind/hive-mind-en-1200x630.jpg",
      },
      "es-AR": {
        title: "El espacio entre dos ideas",
        description:
          "Mi mentor llamaba hive mind a esas veces en que llegábamos a la misma conclusión antes de hablar. Ese recuerdo le dio forma a la nueva identidad de UNFLD.",
        byline: "Pedro Viana, fundador de UNFLD",
        coverAlt:
          "El espacio entre dos ideas, de Pedro Viana. La firma UNFLD junto a dos pliegues color miel.",
        tags: ["Identidad visual", "Hive Mind", "Celda abierta"],
        cover: "/blog/hive-mind/cover-es.webp",
        ogImage: "/blog/hive-mind/hive-mind-es-1200x630.jpg",
      },
      "fr-FR": {
        title: "L’espace entre deux idées",
        description:
          "Mon mentor disait hive mind quand nous arrivions à la même conclusion avant même d’en parler. Ce souvenir a donné sa forme à la nouvelle identité de UNFLD.",
        byline: "Pedro Viana, fondateur de UNFLD",
        coverAlt:
          "L’espace entre deux idées, par Pedro Viana. La signature UNFLD à côté de deux plis couleur miel.",
        tags: ["Identité visuelle", "Hive Mind", "Alvéole ouverte"],
        cover: "/blog/hive-mind/cover-fr.webp",
        ogImage: "/blog/hive-mind/hive-mind-fr-1200x630.jpg",
      },
    },
  },
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

function localizePost(post: BlogPost, locale?: Locale): BlogPost {
  const edition = locale && post.editions?.[locale];
  return edition && locale ? { ...post, ...edition, inLanguage: locale } : post;
}

export function publishedPosts(locale?: Locale): BlogPost[] {
  return posts
    .filter((post) => !post.draft)
    .map((post) => localizePost(post, locale))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));
}

export function getPost(slug: string, locale?: Locale): BlogPost {
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return localizePost(post, locale);
}

export function postByline(post: BlogPost): string {
  return post.byline ?? `${post.author.name}, ${post.author.role}`;
}

export function nextPost(slug: string, locale?: Locale): BlogPost | undefined {
  const list = publishedPosts(locale);
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
