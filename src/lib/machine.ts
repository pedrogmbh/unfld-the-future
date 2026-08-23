import {
  SITE,
  footer,
  news,
  ownedProducts,
  selectedWork,
  solutions,
} from "@/lib/site";

export type MachineSection =
  | "Products"
  | "Build with us"
  | "Developers"
  | "Solutions"
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

const canonicalSolutions = solutions.filter((s) =>
  [
    "agronomy",
    "hiring",
    "small-business",
    "workplace-health",
    "custom-systems",
    "government",
    "operations",
    "legal",
  ].includes(s.slug),
);

/**
 * Every public canonical HTML page we want crawlers and agents to find.
 * Excludes legacy duplicate routes (/api, /docs, /console, /download, /solutions/support).
 */
export function machinePages(): MachinePage[] {
  const pages: MachinePage[] = [
    page(
      "/",
      SITE.name,
      "Across agronomy, hiring, small business, and workplace health, UNFLD turns complex work into technology people can actually use. We also build beside organizations whose most important problems do not fit an off-the-shelf product.",
      "Company",
      { changefreq: "weekly", priority: 1 },
    ),
    page(
      "/products",
      "Products by UNFLD",
      "Explore FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus—five products by UNFLD across agronomy, small business, hiring, and workplace health.",
      "Products",
      { changefreq: "weekly", priority: 0.9 },
    ),
    ...ownedProducts.map((product) =>
      page(
        product.href,
        `${product.name} — ${product.line}`,
        product.blurb,
        "Products",
        { changefreq: "monthly", priority: 0.8 },
      ),
    ),
    page(
      "/access",
      "Access UNFLD products",
      "Direct, secure entry points for FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus.",
      "Products",
      { changefreq: "monthly", priority: 0.7 },
    ),
    page(
      "/build-with-us",
      "Build with UNFLD",
      "Custom digital systems designed and shipped beside organizations whose consequential operations cannot be reduced to an off-the-shelf template.",
      "Build with us",
      { changefreq: "monthly", priority: 0.8 },
    ),
    page(
      "/how-we-work",
      "How we build custom software",
      "A practical overview of discovery, delivery, ownership, security, and handover for custom systems built with UNFLD.",
      "Build with us",
      { changefreq: "monthly", priority: 0.7 },
    ),
    page(
      "/developers",
      "UNFLD developer resources",
      "UNFLD developer resources: catalog API, OpenAPI spec, versioning policy, agent instructions, and llms.txt. No authentication.",
      "Developers",
      { changefreq: "monthly", priority: 0.9 },
    ),
    page(
      "/api",
      "UNFLD API — Developer catalog",
      "Public read-only UNFLD catalog API: products, news, selected work, and company facts. OpenAPI at /openapi.json. No authentication.",
      "Developers",
      { changefreq: "monthly", priority: 0.8 },
    ),
    page(
      "/api/versioning",
      "UNFLD API versioning and deprecation",
      "Versioning, deprecation, and Sunset policy for the UNFLD catalog API at /api/v1.",
      "Developers",
      { changefreq: "yearly", priority: 0.6 },
    ),
    page(
      "/solutions",
      "Solutions",
      "Start with the work that needs to change. Purpose-built solutions across agronomy, hiring, small business, workplace health, and custom systems.",
      "Solutions",
      { changefreq: "monthly", priority: 0.7 },
    ),
    ...canonicalSolutions.map((solution) =>
      page(
        `/solutions/${solution.slug}`,
        `${solution.name} Solutions`,
        solution.line,
        "Solutions",
        { changefreq: "monthly", priority: 0.6 },
      ),
    ),
    page(
      "/status",
      "Service status",
      "Operational status and service availability notes for UNFLD corporate and product endpoints.",
      "Build with us",
      { changefreq: "weekly", priority: 0.5 },
    ),
    page(
      "/company",
      "Company",
      "UNFLD is a product company and technology partner. We turn what should exist next into something people can use now.",
      "Company",
      { changefreq: "monthly", priority: 0.8 },
    ),
    page(
      "/careers",
      "Careers",
      "Do work you can point to. Join UNFLD when you want responsibility to be concrete—not ceremonial.",
      "Company",
      { changefreq: "weekly", priority: 0.6 },
    ),
    page(
      "/careers/open-roles",
      "Open roles",
      "Open work at UNFLD. Introductions and role inquiries.",
      "Company",
      { changefreq: "weekly", priority: 0.6 },
    ),
    page(
      "/news",
      "News & updates",
      "Product releases, field notes, company decisions, and evidence from the systems we operate.",
      "News",
      { changefreq: "weekly", priority: 0.6 },
    ),
    ...news.map((post) =>
      page(`/news/${post.slug}`, post.title, post.standfirst, "News", {
        lastmod: newsLastmod(post.date),
        changefreq: "yearly",
        priority: 0.5,
      }),
    ),
    page(
      "/security",
      "Security at UNFLD",
      "Security at UNFLD starts with a narrower promise: know what data a product needs, limit who and what can reach it, and make important actions traceable.",
      "Build with us",
      { changefreq: "yearly", priority: 0.6 },
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
      `Registered headquarters and meeting point — ${SITE.address.line1}, ${SITE.address.district}, ${SITE.address.city}.`,
      "Company",
      { changefreq: "yearly", priority: 0.4 },
    ),
    page(
      "/infrastructure",
      "Infrastructure",
      "Infrastructure chosen for the system—not for the slide. Hosting designed around users, data, availability, and contractual controls.",
      "Build with us",
      { changefreq: "yearly", priority: 0.5 },
    ),
    page(
      "/enterprise",
      "Enterprise",
      "A contract shaped around the system you actually need. Available controls confirmed per product and order form.",
      "Build with us",
      { changefreq: "yearly", priority: 0.6 },
    ),
    page(
      "/pricing",
      "Pricing & availability",
      "A clear next step for every product: current availability, pricing model, and next steps.",
      "Company",
      { changefreq: "monthly", priority: 0.6 },
    ),
    page(
      "/contact",
      "Contact",
      `Tell us what needs to work differently. Sales, partnerships, press, and security. ${SITE.sales}.`,
      "Company",
      { changefreq: "yearly", priority: 0.6 },
    ),
    page(
      "/work",
      "Selected work",
      "Selected work from UNFLD’s team history — media, aviation, energy, education, sport, and the systems behind them.",
      "Company",
      { changefreq: "monthly", priority: 0.7 },
    ),
    ...selectedWork.map((work) =>
      page(
        `/work/${work.slug}`,
        work.client === work.title
          ? work.title
          : `${work.client} — ${work.title}`,
        work.lede,
        "Company",
        { changefreq: "yearly", priority: 0.5 },
      ),
    ),
    page(
      "/legal",
      "Legal",
      "The policies that govern UNFLD’s corporate website and the services that expressly incorporate them.",
      "Legal",
      { changefreq: "yearly", priority: 0.4 },
    ),
    page(
      "/legal/terms-of-service",
      "Terms of Service",
      "Terms governing the UNFLD website and services that expressly incorporate them.",
      "Legal",
      { changefreq: "yearly", priority: 0.3 },
    ),
    page(
      "/legal/terms-of-service-enterprise",
      "Enterprise Terms",
      "Terms for services under an enterprise order form issued by UNFOLDING THE FUTURE LTDA.",
      "Legal",
      { changefreq: "yearly", priority: 0.3 },
    ),
    page(
      "/legal/privacy-policy",
      "Privacy Policy",
      "How UNFOLDING THE FUTURE LTDA processes personal data for the UNFLD website and applicable products.",
      "Legal",
      { changefreq: "yearly", priority: 0.3 },
    ),
    page(
      "/legal/cookie-policy",
      "Cookie Policy",
      "Cookies and similar technologies used on unfld.com.br and applicable UNFLD product domains.",
      "Legal",
      { changefreq: "yearly", priority: 0.3 },
    ),
    page(
      "/legal/acceptable-use-policy",
      "Acceptable Use Policy",
      "What is permitted on UNFLD services and website surfaces.",
      "Legal",
      { changefreq: "yearly", priority: 0.3 },
    ),
    page(
      "/legal/brand-guidelines",
      "Brand Guidelines",
      "How to name, write, and visually represent UNFLD and its fold mark.",
      "Legal",
      { changefreq: "yearly", priority: 0.3 },
    ),
  ];

  const legacyRedirects = new Set([
    "/docs",
    "/console",
    "/download",
    "/solutions/support",
    "/solutions/business",
  ]);

  const seen = new Set<string>();
  const unique: MachinePage[] = [];
  for (const entry of pages) {
    if (seen.has(entry.path) || legacyRedirects.has(entry.path)) continue;
    seen.add(entry.path);
    unique.push(entry);
  }

  for (const group of Object.values(footer)) {
    for (const link of group) {
      if (
        link.to.startsWith("http") ||
        link.to.startsWith("/api/v1") ||
        /\.[a-z0-9]+$/i.test(link.to) ||
        ("external" in link && link.external) ||
        seen.has(link.to) ||
        legacyRedirects.has(link.to)
      )
        continue;
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
    "Build with us",
    "Developers",
    "Solutions",
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
    .map(
      (product) =>
        `- [${product.name}](${product.url}): ${product.line} (Status: ${product.status})`,
    )
    .join("\n");

  return `# ${SITE.name}

> UNFLD builds and operates technology for essential work and builds custom systems beside organizations whose most important problems do not fit an off-the-shelf product.

Unfolding the future. One real system at a time. UNFLD is the trading name of ${SITE.legal}, CNPJ ${SITE.cnpj}, headquartered in São Paulo, Brazil (${SITE.address.line1}, ${SITE.address.district}, ${SITE.address.city}/${SITE.address.region}). Contact sales at ${SITE.sales}; security at ${SITE.security}; careers at ${SITE.careers}.

Products by UNFLD: FCR (field intelligence for agronomy), SiteCreator (digital presence via WhatsApp), Doutor Fiscal (fiscal routines via WhatsApp), Queravaga (hiring conversations), and Dialogus (workplace health for NR-1). Each product is identified below with its current availability stage. We also design and ship custom software systems beside teams with consequential operations.

This file follows [llmstxt.org](https://llmstxt.org/). The XML sitemap is at ${siteUrl("/sitemap.xml")}.

## When to use this

Use UNFLD when you need to identify the right UNFLD product for a Brazilian operational problem, quote company facts (legal name, CNPJ, São Paulo address, phones), route a human to a product URL or ${SITE.sales}, or retrieve structured catalog data.

How an agent should call UNFLD:

1. Read this file, then ${siteUrl("/agents.md")} for job-level guidance.
2. Fetch ${siteUrl("/openapi.json")} and bind tools to each operationId.
3. Call GET ${siteUrl("/api/v1")} with Accept: application/json. No API key.
4. For page prose, request the same URL with Accept: text/markdown.

Do not use UNFLD as a general LLM, payment processor, or legal advisor. There is no write, login, or webhook API on unfld.com.br.

## Developer resources

- [UNFLD developer resources](${siteUrl("/developers")}): API docs, OpenAPI, versioning, and agent files for UNFLD — search for this name.
- [UNFLD API](${siteUrl("/api")}): Human documentation for the public catalog.
- [UNFLD API versioning](${siteUrl("/api/versioning")}): Deprecation and Sunset policy for /api/v1.
- [OpenAPI JSON](${siteUrl("/openapi.json")}): Machine specification with operationIds and typed schemas.
- [OpenAPI YAML](${siteUrl("/api/openapi.yaml")}): Same specification as YAML.
- [Catalog index](${siteUrl("/api/v1")}): JSON entry point with rate-limit policy.
- [Agent instructions](${siteUrl("/agents.md")}): When-to-use guidance for agents.

${blocks}

## Optional

- [sitemap.xml](${siteUrl("/sitemap.xml")}): Canonical URL list for search engines and indexers.
- [robots.txt](${siteUrl("/robots.txt")}): Crawl directives and sitemap reference.
- [llms.txt](${siteUrl("/llms.txt")}): This curated discovery document.
- [agents.md](${siteUrl("/agents.md")}): When to use UNFLD and how to call the catalog.
- [unfld CLI](${siteUrl("/developers")}): Official catalog client source in this repository (\`cli/\`, package name \`unfld\`). Install from the repo until the npm release is cut.

## External Product Sites

${productSites}
`;
}

export function renderRobotsTxt(): string {
  return `# ${SITE.name} — ${SITE.url}
# Machine indexes: /sitemap.xml · /llms.txt · /openapi.json · /agents.md

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
