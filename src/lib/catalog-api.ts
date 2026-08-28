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
export const RATE_LIMIT_PER_MINUTE = 60;

export type ApiErrorBody = {
  error: {
    code: string;
    message: string;
    hint: string;
    status: number;
    docs: string;
  };
};

function docsUrl() {
  return siteUrl("/api");
}

function openApiUrl() {
  return siteUrl("/openapi.json");
}

export function rateLimitHeaders(): Record<string, string> {
  const limit = String(RATE_LIMIT_PER_MINUTE);
  return {
    "API-Version": "1",
    RateLimit: `limit=${limit}, remaining=${limit}, reset=60`,
    "RateLimit-Policy": `${limit};w=60`,
    "RateLimit-Limit": limit,
    "RateLimit-Remaining": limit,
    "RateLimit-Reset": "60",
    "X-RateLimit-Limit": limit,
    "X-RateLimit-Remaining": limit,
    "X-RateLimit-Reset": "60",
    Link: `<${siteUrl("/api/versioning")}>; rel="describedby"; type="text/html"`,
  };
}

export function jsonHeaders(extra: HeadersInit = {}): Headers {
  const headers = new Headers(rateLimitHeaders());
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Cache-Control", "public, max-age=300");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Accept, Content-Type");
  headers.set(
    "Access-Control-Expose-Headers",
    "API-Version, RateLimit, RateLimit-Policy, RateLimit-Limit, RateLimit-Remaining, RateLimit-Reset, Retry-After, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Link",
  );
  headers.set("Vary", "Accept, Accept-Encoding");
  new Headers(extra).forEach((value, key) => {
    headers.set(key, value);
  });
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
      docs: docsUrl(),
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
    whatsapp: SITE.whatsapp,
    whatsappE164: SITE.whatsappE164,
    whatsappUrl: SITE.whatsappHref,
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
    documentation: docsUrl(),
    openapi: openApiUrl(),
    openapiYaml: siteUrl("/api/openapi.yaml"),
    llms: siteUrl("/llms.txt"),
    agentInstructions: siteUrl("/agents.md"),
    authentication: "none",
    rateLimit: {
      limit: RATE_LIMIT_PER_MINUTE,
      windowSeconds: 60,
      policy: `${RATE_LIMIT_PER_MINUTE};w=60`,
      note: "Read RateLimit, RateLimit-Policy, and X-RateLimit-* on every response. A 429 includes Retry-After.",
    },
    versioning: {
      current: "v1",
      policy: siteUrl("/api/versioning"),
      deprecation: "none",
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
      `Request application/json, or read ${docsUrl()} and ${openApiUrl()}.`,
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
      whatsapp: SITE.whatsapp,
      whatsappE164: SITE.whatsappE164,
      whatsappUrl: SITE.whatsappHref,
      address: formatAddress(),
      contactPage: siteUrl("/contact"),
      hint: "Email sales@unfld.com.br or WhatsApp Business (53) 99995-4138 for product or custom-system conversations. Do not invent a ticket or CRM write API — none exists.",
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
    `GET ${API_PREFIX} for the index, or open ${openApiUrl()}.`,
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

const rateLimitHeaderMap = {
  RateLimit: {
    description: "IETF combined quota: limit, remaining, reset (seconds).",
    schema: { type: "string", examples: ["limit=60, remaining=60, reset=60"] },
  },
  "RateLimit-Policy": {
    description: "Quota policy. 60 requests per 60-second window.",
    schema: { type: "string", examples: ["60;w=60"] },
  },
  "RateLimit-Limit": {
    schema: { type: "integer", examples: [60] },
  },
  "RateLimit-Remaining": {
    schema: { type: "integer", examples: [60] },
  },
  "RateLimit-Reset": {
    description: "Seconds until the window resets.",
    schema: { type: "integer", examples: [60] },
  },
  "X-RateLimit-Limit": { schema: { type: "integer", examples: [60] } },
  "X-RateLimit-Remaining": { schema: { type: "integer", examples: [60] } },
  "X-RateLimit-Reset": { schema: { type: "integer", examples: [60] } },
  "API-Version": { schema: { type: "string", examples: ["1"] } },
} as const;

function okHeaders() {
  return { ...rateLimitHeaderMap };
}

function jsonOkResponse(description: string, schemaRef: string) {
  return {
    description,
    headers: okHeaders(),
    content: {
      "application/json": {
        schema: { $ref: schemaRef },
      },
    },
  };
}

function errorResponses() {
  return {
    "400": {
      description: "The request was well-formed but cannot be processed.",
      headers: okHeaders(),
      content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
    },
    "404": {
      description: "No catalog resource matches this path or slug.",
      headers: okHeaders(),
      content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
    },
    "405": {
      description: "Method not allowed. Catalog endpoints accept GET, HEAD, and OPTIONS.",
      headers: okHeaders(),
      content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
    },
    "406": {
      description: "Accept cannot be satisfied. Request application/json.",
      headers: okHeaders(),
      content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
    },
    "429": {
      description: "Rate limit exceeded. Wait Retry-After seconds, then retry the same GET.",
      headers: {
        ...okHeaders(),
        "Retry-After": {
          description: "Seconds to wait before retrying.",
          schema: { type: "integer", examples: [60] },
        },
      },
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
        `Rate limit: ${RATE_LIMIT_PER_MINUTE} requests per minute per client. Responses include RateLimit, RateLimit-Policy, RateLimit-Limit, RateLimit-Remaining, RateLimit-Reset, and X-RateLimit-* . A 429 includes Retry-After.`,
        "",
        `Versioning: URL path /api/v1. Policy and deprecation signals: ${siteUrl("/api/versioning")}. Breaking changes ship as /api/v2. Deprecated versions send Deprecation and Sunset headers for at least 180 days.`,
        "",
        `Human docs: ${docsUrl()}`,
        `UNFLD developer resources: ${siteUrl("/developers")}`,
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
            "200": jsonOkResponse("Catalog index.", "#/components/schemas/CatalogIndex"),
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
            "200": jsonOkResponse(
              "Organization record.",
              "#/components/schemas/Organization",
            ),
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
            "Emails, landline, and WhatsApp Business for sales, press, careers, privacy, and security. There is no ticket-create endpoint.",
          responses: {
            "200": jsonOkResponse("Contact record.", "#/components/schemas/Contact"),
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
            "FCR, SiteCreator, Doutor Fiscal, Queravaga, Dialogus, Oluart, and Unifikar — with status and canonical URLs.",
          responses: {
            "200": jsonOkResponse(
              "Product collection.",
              "#/components/schemas/ProductCollection",
            ),
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
            "200": jsonOkResponse("Product record.", "#/components/schemas/Product"),
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
            "200": jsonOkResponse(
              "News collection.",
              "#/components/schemas/NewsCollection",
            ),
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
              schema: {
                type: "string",
                enum: news.map((post) => post.slug),
              },
            },
          ],
          responses: {
            "200": jsonOkResponse("News post.", "#/components/schemas/NewsPost"),
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
            "200": jsonOkResponse("Work collection.", "#/components/schemas/WorkCollection"),
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
              schema: {
                type: "string",
                enum: selectedWork.map((work) => work.slug),
              },
            },
          ],
          responses: {
            "200": jsonOkResponse("Work record.", "#/components/schemas/Work"),
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
            "200": jsonOkResponse(
              "Page collection.",
              "#/components/schemas/PageCollection",
            ),
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
          additionalProperties: false,
          required: [
            "name",
            "version",
            "description",
            "documentation",
            "openapi",
            "openapiYaml",
            "llms",
            "agentInstructions",
            "authentication",
            "rateLimit",
            "versioning",
            "links",
          ],
          properties: {
            name: { type: "string" },
            version: { type: "string" },
            description: { type: "string" },
            documentation: { type: "string", format: "uri" },
            openapi: { type: "string", format: "uri" },
            openapiYaml: { type: "string", format: "uri" },
            llms: { type: "string", format: "uri" },
            agentInstructions: { type: "string", format: "uri" },
            authentication: { type: "string", const: "none" },
            rateLimit: { $ref: "#/components/schemas/RateLimitInfo" },
            versioning: { $ref: "#/components/schemas/VersioningInfo" },
            links: { $ref: "#/components/schemas/CatalogLinks" },
          },
        },
        RateLimitInfo: {
          type: "object",
          additionalProperties: false,
          required: ["limit", "windowSeconds", "policy", "note"],
          properties: {
            limit: { type: "integer" },
            windowSeconds: { type: "integer" },
            policy: { type: "string" },
            note: { type: "string" },
          },
        },
        VersioningInfo: {
          type: "object",
          additionalProperties: false,
          required: ["current", "policy", "deprecation"],
          properties: {
            current: { type: "string" },
            policy: { type: "string", format: "uri" },
            deprecation: { type: "string" },
          },
        },
        CatalogLinks: {
          type: "object",
          additionalProperties: false,
          required: [
            "organization",
            "products",
            "news",
            "work",
            "pages",
            "contact",
          ],
          properties: {
            organization: { type: "string", format: "uri" },
            products: { type: "string", format: "uri" },
            news: { type: "string", format: "uri" },
            work: { type: "string", format: "uri" },
            pages: { type: "string", format: "uri" },
            contact: { type: "string", format: "uri" },
          },
        },
        OrganizationAddress: {
          type: "object",
          additionalProperties: false,
          required: [
            "line1",
            "line2",
            "district",
            "city",
            "region",
            "postal",
            "country",
            "formatted",
          ],
          properties: {
            line1: { type: "string" },
            line2: { type: "string" },
            district: { type: "string" },
            city: { type: "string" },
            region: { type: "string" },
            postal: { type: "string" },
            country: { type: "string" },
            formatted: { type: "string" },
          },
        },
        OrganizationActivity: {
          type: "object",
          additionalProperties: false,
          required: ["code", "name", "nameEn"],
          properties: {
            code: { type: "string" },
            name: { type: "string" },
            nameEn: { type: "string" },
          },
        },
        OrganizationJsonLd: {
          type: "object",
          additionalProperties: true,
          required: ["@type", "@id", "name", "legalName", "url"],
          properties: {
            "@type": { type: "string", const: "Organization" },
            "@id": { type: "string", format: "uri" },
            name: { type: "string" },
            legalName: { type: "string" },
            alternateName: {
              type: "array",
              items: { type: "string" },
            },
            url: { type: "string", format: "uri" },
            logo: { type: "string", format: "uri" },
            image: { type: "string", format: "uri" },
            description: { type: "string" },
            email: { type: "string" },
            telephone: { type: "string" },
            taxID: { type: "string" },
            foundingDate: { type: "string" },
            address: {
              type: "object",
              additionalProperties: false,
              required: [
                "@type",
                "streetAddress",
                "addressLocality",
                "addressRegion",
                "postalCode",
                "addressCountry",
              ],
              properties: {
                "@type": { type: "string", const: "PostalAddress" },
                streetAddress: { type: "string" },
                addressLocality: { type: "string" },
                addressRegion: { type: "string" },
                postalCode: { type: "string" },
                addressCountry: { type: "string" },
              },
            },
            contactPoint: {
              type: "array",
              items: {
                type: "object",
                additionalProperties: false,
                required: ["@type", "contactType", "email"],
                properties: {
                  "@type": { type: "string", const: "ContactPoint" },
                  contactType: { type: "string" },
                  email: { type: "string" },
                  telephone: { type: "string" },
                  url: { type: "string", format: "uri" },
                  availableLanguage: {
                    type: "array",
                    items: { type: "string" },
                  },
                },
              },
            },
            sameAs: { type: "array", items: { type: "string", format: "uri" } },
            knowsAbout: { type: "array", items: { type: "string" } },
            identifier: {
              type: "array",
              items: {
                type: "object",
                additionalProperties: false,
                required: ["@type", "name", "value"],
                properties: {
                  "@type": { type: "string", const: "PropertyValue" },
                  name: { type: "string" },
                  value: { type: "string" },
                },
              },
            },
            slogan: { type: "string" },
          },
        },
        Organization: {
          type: "object",
          additionalProperties: false,
          required: [
            "name",
            "legalName",
            "tradingName",
            "taxId",
            "url",
            "tagline",
            "email",
            "salesEmail",
            "securityEmail",
            "telephone",
            "telephoneE164",
            "whatsapp",
            "whatsappE164",
            "whatsappUrl",
            "founded",
            "activity",
            "address",
          ],
          properties: {
            name: { type: "string" },
            legalName: { type: "string" },
            tradingName: { type: "string" },
            taxId: { type: "string" },
            url: { type: "string", format: "uri" },
            tagline: { type: "string" },
            email: { type: "string" },
            salesEmail: { type: "string" },
            securityEmail: { type: "string" },
            telephone: { type: "string" },
            telephoneE164: { type: "string" },
            whatsapp: { type: "string" },
            whatsappE164: { type: "string" },
            whatsappUrl: { type: "string", format: "uri" },
            founded: { type: "string" },
            activity: { $ref: "#/components/schemas/OrganizationActivity" },
            address: { $ref: "#/components/schemas/OrganizationAddress" },
            jsonLd: { $ref: "#/components/schemas/OrganizationJsonLd" },
          },
        },
        Contact: {
          type: "object",
          additionalProperties: false,
          required: [
            "sales",
            "hello",
            "security",
            "press",
            "careers",
            "privacy",
            "telephone",
            "telephoneE164",
            "whatsapp",
            "whatsappE164",
            "whatsappUrl",
            "address",
            "contactPage",
            "hint",
          ],
          properties: {
            sales: { type: "string" },
            hello: { type: "string" },
            security: { type: "string" },
            press: { type: "string" },
            careers: { type: "string" },
            privacy: { type: "string" },
            telephone: { type: "string" },
            telephoneE164: { type: "string" },
            whatsapp: { type: "string" },
            whatsappE164: { type: "string" },
            whatsappUrl: { type: "string", format: "uri" },
            address: { type: "string" },
            contactPage: { type: "string", format: "uri" },
            hint: { type: "string" },
          },
        },
        ProductFeature: {
          type: "object",
          additionalProperties: false,
          required: ["title", "body"],
          properties: {
            title: { type: "string" },
            body: { type: "string" },
          },
        },
        Product: {
          type: "object",
          additionalProperties: false,
          required: [
            "slug",
            "name",
            "shortName",
            "status",
            "kicker",
            "line",
            "mission",
            "description",
            "href",
            "features",
          ],
          properties: {
            slug: { type: "string" },
            name: { type: "string" },
            shortName: { type: "string" },
            formalName: { type: "string", nullable: true },
            status: { type: "string" },
            kicker: { type: "string" },
            line: { type: "string" },
            mission: { type: "string" },
            description: { type: "string" },
            href: { type: "string", format: "uri" },
            productUrl: { type: "string", nullable: true },
            features: {
              type: "array",
              items: { $ref: "#/components/schemas/ProductFeature" },
            },
          },
        },
        ProductCollection: {
          type: "object",
          additionalProperties: false,
          required: ["items"],
          properties: {
            items: { type: "array", items: { $ref: "#/components/schemas/Product" } },
          },
        },
        NewsPost: {
          type: "object",
          additionalProperties: false,
          required: ["slug", "date", "title", "standfirst", "body", "href"],
          properties: {
            slug: { type: "string" },
            date: { type: "string" },
            title: { type: "string" },
            standfirst: { type: "string" },
            body: { type: "array", items: { type: "string" } },
            href: { type: "string", format: "uri" },
          },
        },
        NewsCollection: {
          type: "object",
          additionalProperties: false,
          required: ["items"],
          properties: {
            items: { type: "array", items: { $ref: "#/components/schemas/NewsPost" } },
          },
        },
        Work: {
          type: "object",
          additionalProperties: false,
          required: [
            "slug",
            "client",
            "title",
            "year",
            "field",
            "form",
            "line",
            "lede",
            "outcome",
            "href",
          ],
          properties: {
            slug: { type: "string" },
            client: { type: "string" },
            title: { type: "string" },
            year: { type: "string" },
            field: { type: "string" },
            form: { type: "string" },
            line: { type: "string" },
            lede: { type: "string" },
            outcome: { type: "string" },
            href: { type: "string", format: "uri" },
          },
        },
        WorkCollection: {
          type: "object",
          additionalProperties: false,
          required: ["items"],
          properties: {
            items: { type: "array", items: { $ref: "#/components/schemas/Work" } },
          },
        },
        Page: {
          type: "object",
          additionalProperties: false,
          required: ["path", "title", "description", "section", "href"],
          properties: {
            path: { type: "string" },
            title: { type: "string" },
            description: { type: "string" },
            section: { type: "string" },
            href: { type: "string", format: "uri" },
          },
        },
        PageCollection: {
          type: "object",
          additionalProperties: false,
          required: ["items"],
          properties: {
            items: { type: "array", items: { $ref: "#/components/schemas/Page" } },
          },
        },
      },
    },
    externalDocs: {
      description: "UNFLD API documentation",
      url: docsUrl(),
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

1. **Identify the right UNFLD product** for a Brazilian operational problem — agronomy field work (FCR), small-business websites via WhatsApp (SiteCreator), fiscal routines via WhatsApp (Doutor Fiscal), hiring conversations (Queravaga), NR-1 psychosocial risk (Dialogus), AR drawing on paper (Oluart), or used-vehicle retail (Unifikar).
2. **Quote company facts** — legal name, CNPJ, São Paulo address, phones, and inboxes — without inventing them.
3. **Route a human** to a product URL, the contact page, ${SITE.sales}, or WhatsApp Business ${SITE.whatsapp} (${SITE.whatsappHref}).
4. **Scope a custom system** beside an organization whose operation does not fit an off-the-shelf product. Point them at ${siteUrl("/build-with-us")} and ${SITE.sales}.
5. **Retrieve structured catalog data** (products, news, selected work, pages) from the public API.

## How an agent should call UNFLD

1. Read ${siteUrl("/llms.txt")} for the curated page map.
2. Fetch ${openApiUrl()} (or ${siteUrl("/api/openapi.yaml")}) and bind tools to the \`operationId\` values.
3. Call \`GET ${siteUrl(API_PREFIX)}\` then the collection you need. No API key. Send \`Accept: application/json\`.
4. On errors, read the JSON \`error.code\`, \`error.message\`, and \`error.hint\` — do not retry a 404 with a different HTTP method.
5. For page-level prose, request the same URL with \`Accept: text/markdown\`.

## When not to use UNFLD

- Do not treat UNFLD as a general LLM, payment processor, CRM, or legal advisor.
- Do not invent write endpoints, webhooks, login, or per-user data APIs. They are not published here.
- Do not send personal data to this catalog. It is public marketing and company facts only.
- Product runtime APIs (WhatsApp bots, field sync, hiring accounts) live on each product domain, not on unfld.com.br.

## Developer resources

- UNFLD developer resources: ${siteUrl("/developers")}
- Docs: ${docsUrl()}
- Versioning: ${siteUrl("/api/versioning")}
- OpenAPI: ${openApiUrl()}
- Catalog: ${siteUrl(API_PREFIX)}
- Agent index: ${siteUrl("/llms.txt")}
- Sitemap: ${siteUrl("/sitemap.xml")}

${renderLlmsTxt().split("\n").slice(4).join("\n")}
`;
}
