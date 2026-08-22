import {
  SITE,
  footer,
  news,
  ownedProducts,
  solutions,
} from "@/lib/site";

export type MachineSection =
  | "Products"
  | "Solutions"
  | "Developers"
  | "Company"
  | "News"
  | "Legal";

export type MachinePage = {
  path: string;
  title: string;
  description: string;
  section: MachineSection;
  lastmod?: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: number;
};

const page = (
  path: string,
  title: string,
  description: string,
  section: MachineSection,
  extra: Pick<MachinePage, "lastmod" | "changefreq" | "priority"> = {},
): MachinePage => ({ path, title, description, section, ...extra });

function newsLastmod(date: string): string | undefined {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString().slice(0, 10);
}

function xmlEscape(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/** Absolute URL on the public origin. Paths must start with `/`. */
export function siteUrl(path: string): string {
  if (path === "/") return `${SITE.url}/`;
  return `${SITE.url}${path}`;
}

/**
 * Every public HTML page we want crawlers and agents to find.
 * Built from owned products, solutions, news, and the footer sitemap.
 */
export function machinePages(): MachinePage[] {
  const pages: MachinePage[] = [
    page(
      "/",
      SITE.name,
      `${SITE.name} is the trading name of ${SITE.legal}. A São Paulo software house that also ships its own digital products.`,
      "Company",
      { changefreq: "weekly", priority: 1 },
    ),
    page(
      "/products",
      "Products",
      "Owned products in market: FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus Psicossocial.",
      "Products",
      { changefreq: "weekly", priority: 0.9 },
    ),
    ...ownedProducts.map((product) =>
      page(
        product.href,
        product.name,
        product.blurb,
        "Products",
        { changefreq: "monthly", priority: 0.8 },
      ),
    ),
    page(
      "/solutions",
      "Solutions",
      "How UNFLD works with business, government, operations, legal and fiscal teams, and security reviews.",
      "Solutions",
      { changefreq: "monthly", priority: 0.7 },
    ),
    ...solutions.map((solution) =>
      page(
        `/solutions/${solution.slug}`,
        solution.name,
        solution.line,
        "Solutions",
        { changefreq: "monthly", priority: 0.6 },
      ),
    ),
    page(
      "/api",
      "API",
      "Developer surface for UNFLD products and software-house work.",
      "Developers",
      { changefreq: "monthly", priority: 0.7 },
    ),
    page("/docs", "Docs", "Documentation and notes for UNFLD products.", "Developers", {
      changefreq: "monthly",
      priority: 0.6,
    }),
    page("/console", "Console", "Product console entry.", "Developers", {
      changefreq: "yearly",
      priority: 0.4,
    }),
    page("/status", "Status", "Availability of UNFLD surfaces.", "Developers", {
      changefreq: "weekly",
      priority: 0.5,
    }),
    page(
      "/company",
      "Company",
      "About UNFLD — a software house that also ships what it owns, from São Paulo.",
      "Company",
      { changefreq: "monthly", priority: 0.8 },
    ),
    page("/careers", "Careers", "Open roles and how UNFLD hires.", "Company", {
      changefreq: "weekly",
      priority: 0.6,
    }),
    page(
      "/careers/open-roles",
      "Open roles",
      "Current openings across products, engineering, design, counsel, and security.",
      "Company",
      { changefreq: "weekly", priority: 0.6 },
    ),
    page("/news", "News", "Notes from UNFLD — product launches and the company story.", "News", {
      changefreq: "weekly",
      priority: 0.6,
    }),
    ...news.map((post) =>
      page( `/news/${post.slug}`, post.title, post.standfirst, "News", {
        lastmod: newsLastmod(post.date),
        changefreq: "yearly",
        priority: 0.5,
      }),
    ),
    page(
      "/security",
      "Security",
      "How we treat data on products we operate and on software we ship for others.",
      "Company",
      { changefreq: "yearly", priority: 0.5 },
    ),
    page(
      "/compliance",
      "Compliance",
      "Information security policies, controls, ISMS alignment, data residency, and compliance answers.",
      "Company",
      { changefreq: "monthly", priority: 0.7 },
    ),
    page(
      "/sao-paulo",
      "São Paulo",
      `Headquarters — ${SITE.address.line1}, ${SITE.address.district}, ${SITE.address.city}.`,
      "Company",
      { changefreq: "yearly", priority: 0.4 },
    ),
    page(
      "/infrastructure",
      "Infrastructure",
      "How we run the products we operate.",
      "Company",
      { changefreq: "yearly", priority: 0.4 },
    ),
    page(
      "/enterprise",
      "Enterprise",
      "Seat-level contracts, dedicated planes, and reviews for larger organisations.",
      "Company",
      { changefreq: "yearly", priority: 0.5 },
    ),
    page("/pricing", "Pricing", "Plans for SiteCreator, Doutor Fiscal, Dialogus, and custom work.", "Company", {
      changefreq: "monthly",
      priority: 0.6,
    }),
    page("/contact", "Contact", `Sales, press, and the registered office. ${SITE.sales}.`, "Company", {
      changefreq: "yearly",
      priority: 0.6,
    }),
    page("/download", "Download", "Where to get UNFLD products on web, iOS, Android, and desktop.", "Company", {
      changefreq: "yearly",
      priority: 0.4,
    }),
    page("/legal", "Legal", "Terms, privacy, cookies, acceptable use, and brand guidelines.", "Legal", {
      changefreq: "yearly",
      priority: 0.4,
    }),
    page("/legal/terms-of-service", "Terms of Service", "Terms for UNFLD products and this site.", "Legal", {
      changefreq: "yearly",
      priority: 0.3,
    }),
    page(
      "/legal/terms-of-service-enterprise",
      "Enterprise Terms",
      "Terms for enterprise contracts.",
      "Legal",
      { changefreq: "yearly", priority: 0.3 },
    ),
    page("/legal/privacy-policy", "Privacy Policy", "How UNFLD handles personal data.", "Legal", {
      changefreq: "yearly",
      priority: 0.3,
    }),
    page("/legal/cookie-policy", "Cookie Policy", "Cookies and similar technologies on unfld.com.", "Legal", {
      changefreq: "yearly",
      priority: 0.3,
    }),
    page(
      "/legal/acceptable-use-policy",
      "Acceptable Use Policy",
      "What is allowed on UNFLD products and services.",
      "Legal",
      { changefreq: "yearly", priority: 0.3 },
    ),
    page("/legal/brand-guidelines", "Brand Guidelines", "Name, mark, and how to write UNFLD.", "Legal", {
      changefreq: "yearly",
      priority: 0.3,
    }),
  ];

  const seen = new Set<string>();
  const unique: MachinePage[] = [];
  for (const entry of pages) {
    if (seen.has(entry.path)) continue;
    seen.add(entry.path);
    unique.push(entry);
  }

  for (const group of Object.values(footer)) {
    for (const link of group) {
      if (link.to.startsWith("http") || seen.has(link.to)) continue;
      unique.push(
        page(link.to, link.label, link.label, "Company", {
          changefreq: "monthly",
          priority: 0.4,
        }),
      );
      seen.add(link.to);
    }
  }

  return unique;
}

export function renderSitemap(pages = machinePages()): string {
  const urls = pages
    .map((entry) => {
      const loc = xmlEscape(siteUrl(entry.path));
      const lastmod = entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : "";
      const changefreq = entry.changefreq
        ? `\n    <changefreq>${entry.changefreq}</changefreq>`
        : "";
      const priority =
        entry.priority !== undefined
          ? `\n    <priority>${entry.priority.toFixed(1)}</priority>`
          : "";
      return `  <url>\n    <loc>${loc}</loc>${lastmod}${changefreq}${priority}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function renderLlmsTxt(pages = machinePages()): string {
  const bySection = new Map<MachineSection, MachinePage[]>();
  for (const entry of pages) {
    const list = bySection.get(entry.section) ?? [];
    list.push(entry);
    bySection.set(entry.section, list);
  }

  const sections: MachineSection[] = [
    "Products",
    "Solutions",
    "Developers",
    "Company",
    "News",
    "Legal",
  ];

  const blocks = sections
    .map((section) => {
      const entries = bySection.get(section);
      if (!entries?.length) return "";
      const links = entries
        .map((entry) => `- [${entry.title}](${siteUrl(entry.path)}): ${entry.description}`)
        .join("\n");
      return `## ${section}\n\n${links}`;
    })
    .filter(Boolean)
    .join("\n\n");

  const productSites = ownedProducts
    .filter((product) => product.url)
    .map((product) => `- [${product.name}](${product.url}): ${product.line}`)
    .join("\n");

  return `# ${SITE.name}

> ${SITE.name} is the trading name of ${SITE.legal}. A São Paulo software house that also ships its own digital products.

${SITE.tagline} Pronounced unfold. CNPJ ${SITE.cnpj}. Headquarters at ${SITE.address.line1}, ${SITE.address.district}, ${SITE.address.city}/${SITE.address.region}, ${SITE.address.country}. Contact ${SITE.email}; sales ${SITE.sales}; security ${SITE.security}.

Owned products in market: FCR (Ferramenta de Coleta, with Timac Agro), SiteCreator, Doutor Fiscal, Queravaga, and Dialogus Psicossocial. We still build for other companies.

This file follows [llmstxt.org](https://llmstxt.org/). The XML sitemap is at ${siteUrl("/sitemap.xml")}.

${blocks}

## Optional

- [sitemap.xml](${siteUrl("/sitemap.xml")}): URL list for crawlers.
- [robots.txt](${siteUrl("/robots.txt")}): crawl rules and sitemap pointer.
- [llms.txt](${siteUrl("/llms.txt")}): this file.

${productSites}
`;
}

export function renderRobotsTxt(): string {
  return `# ${SITE.name} — ${SITE.url}
# Machine indexes: /sitemap.xml · /llms.txt

User-agent: *
Allow: /

Sitemap: ${siteUrl("/sitemap.xml")}
`;
}

export function machineHeaders(contentType: string): HeadersInit {
  return {
    "Content-Type": contentType,
    "Cache-Control": "public, max-age=3600",
    "X-Content-Type-Options": "nosniff",
  };
}
