import { pickAccept } from "@/lib/accept";
import { organizationJsonLd } from "@/lib/jsonld";
import {
  machinePages,
  renderLlmsTxt,
  siteUrl,
} from "@/lib/machine";
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

export const API_VERSION = "1.0.0";
export const API_PREFIX = "/api/v1";

export type ApiErrorBody = {
  error: {
    code: string;
    message: string;
    hint: string;
    status: number;
    docs: string;
  };
};

const DOCS = siteUrl("/api");
const OPENAPI = siteUrl("/openapi.json");

export function jsonHeaders(extra: HeadersInit = {}): Headers {
  const headers = new Headers(extra);
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Cache-Control", "public, max-age=300");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Accept, Content-Type");
  headers.set("Vary", "Accept, Accept-Encoding");
  return headers;
}

export function apiError(
  status: number,
  code: string,
  message: string,
  hint: string,
): Response {
  const body: ApiErrorBody = {
    error: {
      code,
      message,
      hint,
      status,
      docs: DOCS,
    },
  };
  return new Response(JSON.stringify(body, null, 2) + "\n", {
    status,
    headers: jsonHeaders({ "Cache-Control": "no-store" }),
  });
}

function jsonOk(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload, null, 2) + "\n", {
    status,
    headers: jsonHeaders(),
  });
}

function productResource(slug: string) {
  const product = getOwnedProduct(slug);
  if (!product) return null;
  return {
    slug: product.slug,
    name: product.name,
    shortName: product.shortName,
    formalName: product.formalName ?? null,
    status: product.status,
    kicker: product.kicker,
    line: product.line,
    mission: product.mission,
    description: product.blurb,
    href: siteUrl(product.href),
    productUrl: product.url ?? null,
    features: product.features,
  };
}

function newsResource(slug: string) {
  const post = getNews(slug);
  if (!post) return null;
  return {
    slug: post.slug,
    date: post.date,
    title: post.title,
    standfirst: post.standfirst,
    body: post.body,
    href: siteUrl(`/news/${post.slug}`),
  };
}

function workResource(slug: string) {
  const work = getWork(slug);
  if (!work) return null;
  return {
    slug: work.slug,
    client: work.client,
    title: work.title,
    year: work.year,
    field: work.field,
    form: work.form,
    line: work.line,
    lede: work.lede,
    outcome: work.outcome,
    href: siteUrl(`/work/${work.slug}`),
  };
}

function organizationResource() {
  const jsonLd = organizationJsonLd();
  return {
    name: SITE.name,
    legalName: SITE.legal,
    tradingName: SITE.trading,
    taxId: SITE.cnpj,
    url: SITE.url,
    tagline: SITE.tagline,
    email: SITE.email,
    salesEmail: SITE.sales,
    securityEmail: SITE.security,
    telephone: SITE.phone,
    telephoneE164: SITE.phoneHref,
    founded: SITE.founded,
    activity: SITE.activity,
    address: {
      ...SITE.address,
      formatted: formatAddress(),
    },
    jsonLd,
  };
}

function catalogIndex() {
  return {
    name: SITE.name,
    version: API_VERSION,
    description:
      "Public read-only catalog of UNFLD products, news, selected work, and company facts. No authentication.",
    documentation: DOCS,
    openapi: OPENAPI,
    openapiYaml: siteUrl("/api/openapi.yaml"),
    llms: siteUrl("/llms.txt"),
    agentInstructions: siteUrl("/agents.md"),
    authentication: "none",
    rateLimit: {
      limit: 60,
      window: "1m",
      note: "Burst traffic may be throttled at the edge. Identify as a bot with a descriptive User-Agent.",
    },
    links: {
      organization: siteUrl(`${API_PREFIX}/organization`),
      products: siteUrl(`${API_PREFIX}/products`),
      news: siteUrl(`${API_PREFIX}/news`),
      work: siteUrl(`${API_PREFIX}/work`),
      pages: siteUrl(`${API_PREFIX}/pages`),
      contact: siteUrl(`${API_PREFIX}/contact`),
    },
  };
}

export function handleCatalogApi(request: Request, path: string): Response {
  const method = request.method.toUpperCase();
  if (method === "OPTIONS") {
    return new Response(null, { status: 204, headers: jsonHeaders() });
  }
  if (method !== "GET" && method !== "HEAD") {
    return apiError(
      405,
      "method_not_allowed",
      `${method} is not supported on the UNFLD catalog API.`,
      "Use GET (or HEAD). This API is read-only.",
    );
  }

  const accept = pickAccept(request.headers.get("accept"), [
    "application/json",
    "text/markdown",
    "text/plain",
  ]);
  if (accept === "text/markdown" || accept === "text/plain") {
    return apiError(
      406,
      "not_acceptable",
      "Catalog endpoints speak JSON.",
      `Request application/json, or read ${DOCS} and ${OPENAPI}.`,
    );
  }

  const normalized = path.replace(/^\/+|\/+$/g, "");
  const segments = normalized ? normalized.split("/") : [];

  if (segments.length === 0) return jsonOk(catalogIndex());

  if (segments[0] === "organization" && segments.length === 1) {
    return jsonOk(organizationResource());
  }

  if (segments[0] === "contact" && segments.length === 1) {
    return jsonOk({
      sales: SITE.sales,
      hello: SITE.email,
      security: SITE.security,
      press: SITE.press,
      careers: SITE.careers,
      privacy: SITE.privacy,
      telephone: SITE.phone,
      telephoneE164: SITE.phoneHref,
      address: formatAddress(),
      contactPage: siteUrl("/contact"),
      hint: "Email sales@unfld.com.br for product or custom-system conversations. Do not invent a ticket or CRM write API — none exists.",
    });
  }

  if (segments[0] === "pages" && segments.length === 1) {
    return jsonOk({
      items: machinePages().map((page) => ({
        path: page.path,
        title: page.title,
        description: page.description,
        section: page.section,
        href: siteUrl(page.path),
      })),
    });
  }

  if (segments[0] === "products") {
    if (segments.length === 1) {
      return jsonOk({
        items: ownedProducts
          .map((product) => productResource(product.slug))
          .filter(Boolean),
      });
    }
    if (segments.length === 2) {
      const item = productResource(segments[1] ?? "");
      if (!item) {
        return apiError(
          404,
          "product_not_found",
          `No UNFLD product is published at slug "${segments[1]}".`,
          `GET ${API_PREFIX}/products for slugs: ${ownedProducts.map((p) => p.slug).join(", ")}.`,
        );
      }
      return jsonOk(item);
    }
  }

  if (segments[0] === "news") {
    if (segments.length === 1) {
      return jsonOk({
        items: news.map((post) => newsResource(post.slug)).filter(Boolean),
      });
    }
    if (segments.length === 2) {
      const item = newsResource(segments[1] ?? "");
      if (!item) {
        return apiError(
          404,
          "news_not_found",
          `No news post is published at slug "${segments[1]}".`,
          `GET ${API_PREFIX}/news for published slugs.`,
        );
      }
      return jsonOk(item);
    }
  }

  if (segments[0] === "work") {
    if (segments.length === 1) {
      return jsonOk({
        items: selectedWork.map((work) => workResource(work.slug)).filter(Boolean),
      });
    }
    if (segments.length === 2) {
      const item = workResource(segments[1] ?? "");
      if (!item) {
        return apiError(
          404,
          "work_not_found",
          `No selected-work entry is published at slug "${segments[1]}".`,
          `GET ${API_PREFIX}/work for published slugs.`,
        );
      }
      return jsonOk(item);
    }
  }

  return apiError(
    404,
    "not_found",
    `No catalog resource matches /api/v1/${normalized}.`,
    `GET ${API_PREFIX} for the index, or open ${OPENAPI}.`,
  );
}

const errorSchema = {
  type: "object",
  required: ["error"],
  properties: {
    error: {
      type: "object",
      required: ["code", "message", "hint", "status", "docs"],
      properties: {
        code: { type: "string", examples: ["not_found"] },
        message: { type: "string" },
        hint: {
          type: "string",
          description: "What an agent should try next.",
        },
        status: { type: "integer" },
        docs: { type: "string", format: "uri" },
      },
    },
  },
} as const;

function errorResponses() {
  return {
    "400": {
      description: "The request was well-formed but cannot be processed.",
      content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
    },
    "404": {
      description: "No catalog resource matches this path or slug.",
      content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
    },
    "405": {
      description: "Method not allowed. Catalog endpoints accept GET, HEAD, and OPTIONS.",
      content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
    },
    "406": {
      description: "Accept cannot be satisfied. Request application/json.",
      content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
    },
  };
}

export function openApiDocument() {
  return {
    openapi: "3.1.0",
    info: {
      title: "UNFLD Catalog API",
      summary: "Public read-only catalog for UNFLD products, news, work, and company facts.",
      description: [
        "UNFLD (UNFOLDING THE FUTURE LTDA) publishes a public catalog so agents can identify products, quote company facts, and route humans to the right URL or inbox.",
        "",
        "Authentication: none. There is no write API, webhook, or user-account surface on unfld.com.br.",
        "Rate limit: 60 requests per minute per client. Identify yourself with a descriptive User-Agent.",
        "",
        `Human docs: ${DOCS}`,
        `Agent index: ${siteUrl("/llms.txt")}`,
        `When to use UNFLD: ${siteUrl("/agents.md")}`,
      ].join("\n"),
      version: API_VERSION,
      contact: {
        name: "UNFLD",
        email: SITE.sales,
        url: SITE.url,
      },
      license: {
        name: "UNFLD site terms",
        url: siteUrl("/legal/terms-of-service"),
      },
    },
    servers: [
      { url: SITE.url, description: "Production" },
    ],
    tags: [
      { name: "Discovery", description: "Index and machine documents." },
      { name: "Organization", description: "Legal identity and contact." },
      { name: "Products", description: "Products by UNFLD." },
      { name: "News", description: "Public news posts." },
      { name: "Work", description: "Selected work." },
    ],
    paths: {
      "/api/v1": {
        get: {
          operationId: "getCatalogIndex",
          tags: ["Discovery"],
          summary: "Catalog index",
          description:
            "Start here. Returns documentation links and the list of catalog collections.",
          responses: {
            "200": {
              description: "Catalog index.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/CatalogIndex" },
                },
              },
            },
            ...errorResponses(),
          },
        },
      },
      "/api/v1/organization": {
        get: {
          operationId: "getOrganization",
          tags: ["Organization"],
          summary: "Company identity",
          description:
            "Legal name, CNPJ, São Paulo address, phones, and emails for UNFOLDING THE FUTURE LTDA trading as UNFLD.",
          responses: {
            "200": {
              description: "Organization record.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Organization" },
                },
              },
            },
            ...errorResponses(),
          },
        },
      },
      "/api/v1/contact": {
        get: {
          operationId: "getContact",
          tags: ["Organization"],
          summary: "Public contact points",
          description:
            "Emails and phone for sales, press, careers, privacy, and security. There is no ticket-create endpoint.",
          responses: {
            "200": {
              description: "Contact record.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Contact" },
                },
              },
            },
            ...errorResponses(),
          },
        },
      },
      "/api/v1/products": {
        get: {
          operationId: "listProducts",
          tags: ["Products"],
          summary: "List products by UNFLD",
          description:
            "FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus — with status and canonical URLs.",
          responses: {
            "200": {
              description: "Product collection.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ProductCollection" },
                },
              },
            },
            ...errorResponses(),
          },
        },
      },
      "/api/v1/products/{slug}": {
        get: {
          operationId: "getProduct",
          tags: ["Products"],
          summary: "Get one product",
          description: "Typed product record for a published slug.",
          parameters: [
            {
              name: "slug",
              in: "path",
              required: true,
              description: "Product slug.",
              schema: {
                type: "string",
                enum: ownedProducts.map((product) => product.slug),
              },
              examples: {
                fcr: { value: "fcr" },
                sitecreator: { value: "sitecreator" },
              },
            },
          ],
          responses: {
            "200": {
              description: "Product record.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Product" },
                },
              },
            },
            ...errorResponses(),
          },
        },
      },
      "/api/v1/news": {
        get: {
          operationId: "listNews",
          tags: ["News"],
          summary: "List news posts",
          description: "Public UNFLD news, newest first.",
          responses: {
            "200": {
              description: "News collection.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/NewsCollection" },
                },
              },
            },
            ...errorResponses(),
          },
        },
      },
      "/api/v1/news/{slug}": {
        get: {
          operationId: "getNewsPost",
          tags: ["News"],
          summary: "Get one news post",
          parameters: [
            {
              name: "slug",
              in: "path",
              required: true,
              description: "News slug.",
              schema: { type: "string", examples: news.map((post) => post.slug) },
            },
          ],
          responses: {
            "200": {
              description: "News post.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/NewsPost" },
                },
              },
            },
            ...errorResponses(),
          },
        },
      },
      "/api/v1/work": {
        get: {
          operationId: "listWork",
          tags: ["Work"],
          summary: "List selected work",
          description: "Named client work the team can discuss in public.",
          responses: {
            "200": {
              description: "Work collection.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/WorkCollection" },
                },
              },
            },
            ...errorResponses(),
          },
        },
      },
      "/api/v1/work/{slug}": {
        get: {
          operationId: "getWork",
          tags: ["Work"],
          summary: "Get one selected-work entry",
          parameters: [
            {
              name: "slug",
              in: "path",
              required: true,
              description: "Work slug.",
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "Work record.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Work" },
                },
              },
            },
            ...errorResponses(),
          },
        },
      },
      "/api/v1/pages": {
        get: {
          operationId: "listPages",
          tags: ["Discovery"],
          summary: "List canonical HTML pages",
          description: "The same public pages listed in sitemap.xml and llms.txt.",
          responses: {
            "200": {
              description: "Page collection.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/PageCollection" },
                },
              },
            },
            ...errorResponses(),
          },
        },
      },
    },
    components: {
      schemas: {
        Error: errorSchema,
        CatalogIndex: {
          type: "object",
          required: ["name", "version", "links", "openapi", "authentication"],
          properties: {
            name: { type: "string" },
            version: { type: "string" },
            description: { type: "string" },
            documentation: { type: "string", format: "uri" },
            openapi: { type: "string", format: "uri" },
            authentication: { type: "string", const: "none" },
            links: { type: "object", additionalProperties: { type: "string" } },
          },
        },
        Organization: {
          type: "object",
          required: ["name", "legalName", "taxId", "url", "address"],
          properties: {
            name: { type: "string" },
            legalName: { type: "string" },
            taxId: { type: "string" },
            url: { type: "string", format: "uri" },
            email: { type: "string" },
            telephoneE164: { type: "string" },
            address: { type: "object" },
          },
        },
        Contact: {
          type: "object",
          required: ["sales", "telephoneE164"],
          properties: {
            sales: { type: "string" },
            hello: { type: "string" },
            security: { type: "string" },
            telephoneE164: { type: "string" },
            hint: { type: "string" },
          },
        },
        Product: {
          type: "object",
          required: ["slug", "name", "status", "description", "href"],
          properties: {
            slug: { type: "string" },
            name: { type: "string" },
            shortName: { type: "string" },
            status: { type: "string" },
            description: { type: "string" },
            href: { type: "string", format: "uri" },
            productUrl: { type: "string", nullable: true },
          },
        },
        ProductCollection: {
          type: "object",
          required: ["items"],
          properties: {
            items: { type: "array", items: { $ref: "#/components/schemas/Product" } },
          },
        },
        NewsPost: {
          type: "object",
          required: ["slug", "title", "standfirst", "href"],
          properties: {
            slug: { type: "string" },
            title: { type: "string" },
            standfirst: { type: "string" },
            href: { type: "string", format: "uri" },
          },
        },
        NewsCollection: {
          type: "object",
          required: ["items"],
          properties: {
            items: { type: "array", items: { $ref: "#/components/schemas/NewsPost" } },
          },
        },
        Work: {
          type: "object",
          required: ["slug", "client", "title", "href"],
          properties: {
            slug: { type: "string" },
            client: { type: "string" },
            title: { type: "string" },
            href: { type: "string", format: "uri" },
          },
        },
        WorkCollection: {
          type: "object",
          required: ["items"],
          properties: {
            items: { type: "array", items: { $ref: "#/components/schemas/Work" } },
          },
        },
        PageCollection: {
          type: "object",
          required: ["items"],
          properties: {
            items: {
              type: "array",
              items: {
                type: "object",
                required: ["path", "title", "href"],
                properties: {
                  path: { type: "string" },
                  title: { type: "string" },
                  href: { type: "string", format: "uri" },
                },
              },
            },
          },
        },
      },
    },
    externalDocs: {
      description: "UNFLD API documentation",
      url: DOCS,
    },
  };
}

function yamlScalar(value: unknown): string {
  if (value === null) return "null";
  if (typeof value === "boolean" || typeof value === "number") return String(value);
  const text = String(value);
  if (text === "") return '""';
  if (/^[\w./:@+-]+$/.test(text) && !["true", "false", "null", "yes", "no"].includes(text)) {
    return text;
  }
  return JSON.stringify(text);
}

function toYaml(value: unknown, indent = 0): string {
  const pad = "  ".repeat(indent);
  if (Array.isArray(value)) {
    if (value.length === 0) return `${pad}[]\n`;
    return value
      .map((item) => {
        if (item !== null && typeof item === "object") {
          const nested = toYaml(item, indent + 1);
          const [first, ...rest] = nested.split("\n");
          return `${pad}- ${first.trimStart()}\n${rest.filter(Boolean).map((line) => `${line}`).join("\n")}${rest.length ? "\n" : ""}`;
        }
        return `${pad}- ${yamlScalar(item)}\n`;
      })
      .join("");
  }
  if (value !== null && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return `${pad}{}\n`;
    return entries
      .map(([key, item]) => {
        if (item !== null && typeof item === "object") {
          const nested = toYaml(item, indent + 1);
          return `${pad}${key}:\n${nested}`;
        }
        return `${pad}${key}: ${yamlScalar(item)}\n`;
      })
      .join("");
  }
  return `${pad}${yamlScalar(value)}\n`;
}

export function renderOpenApiJson(): string {
  return JSON.stringify(openApiDocument(), null, 2) + "\n";
}

export function renderOpenApiYaml(): string {
  return toYaml(openApiDocument());
}

export function renderAgentsMd(): string {
  return `# When to use UNFLD

UNFLD is the trading name of ${SITE.legal} (CNPJ ${SITE.cnpj}), a São Paulo product company and software house. Use this file when deciding whether to call UNFLD — and how.

## When to use this

Reach for UNFLD when the job is one of these:

1. **Identify the right UNFLD product** for a Brazilian operational problem — agronomy field work (FCR), small-business websites via WhatsApp (SiteCreator), fiscal routines via WhatsApp (Doutor Fiscal), hiring conversations (Queravaga), or NR-1 psychosocial risk (Dialogus).
2. **Quote company facts** — legal name, CNPJ, São Paulo address, phones, and inboxes — without inventing them.
3. **Route a human** to a product URL, the contact page, or ${SITE.sales}.
4. **Scope a custom system** beside an organization whose operation does not fit an off-the-shelf product. Point them at ${siteUrl("/build-with-us")} and ${SITE.sales}.
5. **Retrieve structured catalog data** (products, news, selected work, pages) from the public API.

## How an agent should call UNFLD

1. Read ${siteUrl("/llms.txt")} for the curated page map.
2. Fetch ${OPENAPI} (or ${siteUrl("/api/openapi.yaml")}) and bind tools to the \`operationId\` values.
3. Call \`GET ${siteUrl(API_PREFIX)}\` then the collection you need. No API key. Send \`Accept: application/json\`.
4. On errors, read the JSON \`error.code\`, \`error.message\`, and \`error.hint\` — do not retry a 404 with a different HTTP method.
5. For page-level prose, request the same URL with \`Accept: text/markdown\`.

## When not to use UNFLD

- Do not treat UNFLD as a general LLM, payment processor, CRM, or legal advisor.
- Do not invent write endpoints, webhooks, login, or per-user data APIs. They are not published here.
- Do not send personal data to this catalog. It is public marketing and company facts only.
- Product runtime APIs (WhatsApp bots, field sync, hiring accounts) live on each product domain, not on unfld.com.br.

## Developer resources

- Docs: ${DOCS}
- OpenAPI: ${OPENAPI}
- Catalog: ${siteUrl(API_PREFIX)}
- Agent index: ${siteUrl("/llms.txt")}
- Sitemap: ${siteUrl("/sitemap.xml")}

${renderLlmsTxt().split("\n").slice(4).join("\n")}
`;
}
