import { siteUrl, machinePages } from "@/lib/machine";
import {
  SITE,
  formatAddress,
  getOwnedProduct,
  getWork,
  ownedProducts,
  selectedWork,
} from "@/lib/site";

export function isKnownDocumentPath(pathname: string): boolean {
  const path = normalizePath(pathname);
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
  return `# ${SITE.name}

> ${SITE.tagline}

Across hiring, small business, workplace health, drawing, and vehicle retail, UNFLD turns complex work into technology people can actually use. We also build beside organizations whose most important problems do not fit an off-the-shelf product.

UNFLD is the trading name of ${SITE.legal}, CNPJ ${SITE.cnpj}, ${formatAddress()}.

## Products by UNFLD

${products}

## For agents

- [When to use UNFLD](${siteUrl("/agents.md")})
- [llms.txt](${siteUrl("/llms.txt")})
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
- [Home](${siteUrl("/")})
`;
}

export function renderDocumentMarkdown(pathname: string): string | null {
  const path = normalizePath(pathname);
  if (path === "/") return homeMarkdown();
  const product = ownedProducts.find((item) => item.href === path);
  if (product) return productMarkdown(product.slug);

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
- [Home](${siteUrl("/")})

## A short list of public pages

${nearby}
`;
}

export function knownDocumentPaths(): string[] {
  return ["/", ...machinePages().map((page) => page.path)];
}
