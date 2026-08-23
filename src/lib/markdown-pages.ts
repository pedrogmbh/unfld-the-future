import { siteUrl, machinePages } from "@/lib/machine";
import {
  SITE,
  formatAddress,
  getNews,
  getOwnedProduct,
  getWork,
  news,
  ownedProducts,
  selectedWork,
} from "@/lib/site";

const EXTRA_DOCUMENT_PATHS = new Set([
  "/api",
  "/docs",
  "/developers",
  "/api/versioning",
]);

export function isKnownDocumentPath(pathname: string): boolean {
  const path = normalizePath(pathname);
  if (EXTRA_DOCUMENT_PATHS.has(path)) return true;
  return machinePages().some((page) => page.path === path);
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed || "/";
}

function pageByPath(path: string) {
  return machinePages().find((page) => page.path === path);
}

function productMarkdown(slug: string): string | null {
  const product = getOwnedProduct(slug);
  if (!product) return null;
  const features = product.features
    .map((feature) => `### ${feature.title}\n\n${feature.body}`)
    .join("\n\n");
  return `# ${product.name}

> ${product.line}

- Status: ${product.status}
- Field: ${product.kicker}
- Page: ${siteUrl(product.href)}
${product.url ? `- Product: ${product.url}` : ""}

${product.blurb}

${features}
`;
}

function newsMarkdown(slug: string): string | null {
  const post = getNews(slug);
  if (!post) return null;
  return `# ${post.title}

${post.date}

${post.standfirst}

${post.body.join("\n\n")}

[All news](${siteUrl("/news")})
`;
}

function workMarkdown(slug: string): string | null {
  const work = getWork(slug);
  if (!work) return null;
  return `# ${work.client} — ${work.title}

${work.year} · ${work.field} · ${work.form}

${work.lede}

${work.story.join("\n\n")}

**Outcome.** ${work.outcome}

[Selected work](${siteUrl("/work")})
`;
}

function homeMarkdown(): string {
  const products = ownedProducts
    .map((product) => `- [${product.name}](${siteUrl(product.href)}): ${product.line}`)
    .join("\n");
  const posts = news
    .map((post) => `- [${post.title}](${siteUrl(`/news/${post.slug}`)}): ${post.standfirst}`)
    .join("\n");
  return `# ${SITE.name}

> ${SITE.tagline}

Across agronomy, hiring, small business, workplace health, drawing, and vehicle retail, UNFLD turns complex work into technology people can actually use. We also build beside organizations whose most important problems do not fit an off-the-shelf product.

UNFLD is the trading name of ${SITE.legal}, CNPJ ${SITE.cnpj}, ${formatAddress()}.

## Products by UNFLD

${products}

## Latest news

${posts}

## For agents

- [When to use UNFLD](${siteUrl("/agents.md")})
- [llms.txt](${siteUrl("/llms.txt")})
- [UNFLD developer resources](${siteUrl("/developers")})
- [UNFLD API](${siteUrl("/api")})
- [OpenAPI](${siteUrl("/openapi.json")})
- [Catalog](${siteUrl("/api/v1")})
- [Sitemap](${siteUrl("/sitemap.xml")})
`;
}

function apiDocsMarkdown(): string {
  return `# UNFLD developer resources

UNFLD developer resources for the public catalog: products, news, selected work, and company facts. No authentication.

## When to use this

Use the catalog to identify the right UNFLD product, quote company facts, or route a human to ${SITE.sales}. Do not invent write, login, or webhook endpoints.

## Endpoints

- \`GET /api/v1\` — catalog index
- \`GET /api/v1/organization\` — legal identity
- \`GET /api/v1/products\` — products by UNFLD
- \`GET /api/v1/products/{slug}\` — one product
- \`GET /api/v1/news\` — news
- \`GET /api/v1/work\` — selected work
- \`GET /api/v1/pages\` — canonical pages
- \`GET /api/v1/contact\` — public inboxes

## Policy

- [UNFLD API versioning](${siteUrl("/api/versioning")}) — deprecation and Sunset
- Rate-limit headers: RateLimit, RateLimit-Policy, X-RateLimit-* . 429 includes Retry-After.

## Machine documents

- [UNFLD developer resources](${siteUrl("/developers")})
- [UNFLD API](${siteUrl("/api")})
- [OpenAPI JSON](${siteUrl("/openapi.json")})
- [OpenAPI YAML](${siteUrl("/api/openapi.yaml")})
- [Agent instructions](${siteUrl("/agents.md")})
- [llms.txt](${siteUrl("/llms.txt")})
`;
}

function versioningMarkdown(): string {
  return `# UNFLD API versioning and deprecation

The public catalog is versioned at /api/v1. Breaking changes ship as /api/v2.

Deprecated versions send \`Deprecation: true\` and a \`Sunset\` HTTP-date header, plus a Link to this page. A deprecated major version stays available for at least 180 days after Sunset is first advertised.

v1 is current. No Sunset is advertised.

[UNFLD developer resources](${siteUrl("/developers")}) · [UNFLD API](${siteUrl("/api")})
`;
}

function genericMarkdown(path: string): string | null {
  const page = pageByPath(path);
  if (!page) return null;
  return `# ${page.title}

${page.description}

Canonical URL: ${siteUrl(page.path)}

## Next

- [llms.txt](${siteUrl("/llms.txt")})
- [UNFLD API](${siteUrl("/api")})
- [OpenAPI](${siteUrl("/openapi.json")})
- [Home](${siteUrl("/")})
`;
}

export function renderDocumentMarkdown(pathname: string): string | null {
  const path = normalizePath(pathname);
  if (path === "/") return homeMarkdown();
  if (path === "/api" || path === "/docs" || path === "/developers") {
    return apiDocsMarkdown();
  }
  if (path === "/api/versioning") return versioningMarkdown();

  const product = ownedProducts.find((item) => item.href === path);
  if (product) return productMarkdown(product.slug);

  if (path.startsWith("/news/")) {
    return newsMarkdown(path.slice("/news/".length));
  }
  if (path.startsWith("/work/")) {
    return workMarkdown(path.slice("/work/".length));
  }

  return genericMarkdown(path);
}

export function renderNotFoundMarkdown(pathname: string): string {
  const path = normalizePath(pathname);
  const nearby = machinePages()
    .slice(0, 12)
    .map((page) => `- [${page.title}](${siteUrl(page.path)})`)
    .join("\n");
  return `# 404 — This page folded away

\`${path}\` does not match anything UNFLD publishes.

## Where to look next

- [llms.txt](${siteUrl("/llms.txt")}) — curated site map for agents
- [agents.md](${siteUrl("/agents.md")}) — when to use UNFLD
- [sitemap.xml](${siteUrl("/sitemap.xml")}) — every canonical HTML URL
- [UNFLD API](${siteUrl("/api")}) — catalog documentation
- [OpenAPI](${siteUrl("/openapi.json")})
- [Catalog index](${siteUrl("/api/v1")})
- [Home](${siteUrl("/")})

## A short list of public pages

${nearby}
`;
}

export function knownDocumentPaths(): string[] {
  return ["/", "/api", ...machinePages().map((page) => page.path)];
}
