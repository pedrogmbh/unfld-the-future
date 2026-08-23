export const catalog = {
  tagline: "Unfolding the future. One real system at a time.",
  offices: {
    role: "Headquarters",
    region: "Brazil",
  },
  stats: {
    experience: "Experience rooted in",
    products: "Products by UNFLD",
    hq: "Headquarters · São Paulo",
  },
  values: [
    {
      title: "Understand the real work.",
      body: "We begin with the people, constraints, and decisions already inside the operation. Technology comes after understanding.",
    },
    {
      title: "Make progress visible.",
      body: "We ship in small, verifiable steps. Every release should reduce uncertainty or improve the work.",
    },
    {
      title: "Stay responsible for the outcome.",
      body: "Delivery is not the finish line. We measure what changed, fix what did not, and keep earning the right to expand.",
    },
  ],
  timeline: [
    {
      title: "Experience rooted in 2019",
      body: "The team’s product-building history begins in 2019, shipping apps and systems across media, industry, luxury, agribusiness, and aviation.",
    },
    {
      title: "Complex operations",
      body: "Partnering directly with technical and operational teams to solve domain problems where off-the-shelf software falls short.",
    },
    {
      title: "UNFOLDING THE FUTURE LTDA",
      body: "On 23 September 2025, UNFOLDING THE FUTURE LTDA is incorporated in São Paulo (CNPJ 62.855.761/0001-82), trading as UNFLD, carrying prior experience into a new corporate structure.",
    },
    {
      title: "Products by UNFLD",
      body: "FCR, SiteCreator, Doutor Fiscal, Queravaga, Dialogus, Oluart, and Unifikar advance across their respective stages, alongside custom systems built beside our partners.",
    },
  ],
  interview: [
    {
      title: "Submit an introduction",
      body: "Share your background and examples of real work at careers@unfld.com.br. We review submissions directly.",
    },
    {
      title: "Initial conversation",
      body: "A direct discussion to understand your background, interests, and how you approach complex problems.",
    },
    {
      title: "Technical and domain review",
      body: "Deep dive into problem solving, system design, and practical execution with the team.",
    },
    {
      title: "Offer & next steps",
      body: "Clear, transparent terms with defined scope, compensation, and expectations.",
    },
  ],
  homePrompts: [
    {
      q: "Agronomy teams make decisions in the field. Their software should work there too.",
      a: "FCR is field intelligence for agronomy teams: capture evidence offline, synchronize operations, turn agronomic data into recommendations, and give managers a traceable view of what happens in the field. Built and evolved with Timac Agro.",
    },
    {
      q: "We are MEI and small business. We need a real site, not an agency.",
      a: "SiteCreator gathers public business information from your CNPJ and publishes a real website in minutes through WhatsApp, complete with hosting, SSL, and direct chat links.",
    },
    {
      q: "How do we make psychosocial risk management actionable and compliant?",
      a: "Dialogus by UNFLD integrates structured listening, validated assessment, risk visibility, and action planning into a documented occupational-risk process aligned with NR-1.",
    },
    {
      q: "I want to learn to draw without a projector or a surprise subscription.",
      a: "Oluart projects any image onto paper through the phone camera. Trace, practice, and keep the price you saw: free to start, Premium at R$29.90 a month, or a lifetime plan at R$199.",
    },
    {
      q: "Our lot needs a digital showroom and a way to share stock with partner stores.",
      a: "Unifikar is a used-vehicle marketplace and a commercial network: a branded vitrine for each store, shared inventory with a confidential floor price, and one inbox for marketplace and storefront leads.",
    },
  ],
  developer: {
    apiTitle: "UNFLD API — Developer catalog",
    apiDescription:
      "UNFLD developer resources: public catalog API, OpenAPI 3.1, versioning policy, and llms.txt. No authentication.",
    developersTitle: "UNFLD developer resources",
    developersDescription:
      "UNFLD developer resources for agents and integrators: catalog API, OpenAPI spec, versioning policy, CLI source, and llms.txt.",
    versioningTitle: "UNFLD API versioning and deprecation",
    versioningDescription:
      "Versioning, deprecation, and Sunset policy for the UNFLD catalog API (/api/v1).",
    heroTitle: "UNFLD API.",
    heroTitleSecond: "A public catalog.",
    heroLede:
      "Read-only JSON for products, news, selected work, and company facts. No account. No write surface. OpenAPI is published at /openapi.json.",
    developersHeroTitle: "UNFLD developer resources.",
    developersHeroTitleSecond: "API, OpenAPI, agents.",
    developersHeroLede:
      "The UNFLD catalog API, OpenAPI document, versioning policy, and machine-readable copy — published at www.unfld.com.br so a search for UNFLD developer resources lands here.",
    howTitle: "How an agent should call UNFLD.",
    howLede:
      "Fetch the OpenAPI document, bind tools to each operationId, then GET the collection you need. On error, read the hint. For prose, request the same page with Accept: text/markdown.",
    versioningUpdated: "23 August 2026",
    endpoints: [
      "Catalog index, documentation links, rate-limit policy, and collection URLs.",
      "Legal name, CNPJ, São Paulo address, phones, and emails.",
      "FCR, SiteCreator, Doutor Fiscal, Queravaga, Dialogus, Oluart, and Unifikar.",
      "One product. Slugs: fcr, sitecreator, doutor-fiscal, queravaga, dialogus, oluart, unifikar.",
      "Public news posts.",
      "Selected work the team can discuss in public.",
      "Canonical HTML pages from the sitemap.",
      "Public inboxes. There is no ticket-create endpoint.",
    ],
    rules: [
      {
        title: "No authentication",
        body: "The catalog is public and read-only. Do not send API keys, cookies, or personal data.",
      },
      {
        title: "JSON errors",
        body: "Failures return application/json with error.code, error.message, and error.hint. Agents should follow the hint instead of retrying blindly.",
      },
      {
        title: "Rate limits",
        body: "Every catalog response includes RateLimit, RateLimit-Policy, RateLimit-Limit, RateLimit-Remaining, RateLimit-Reset, and X-RateLimit-*. A 429 includes Retry-After.",
      },
      {
        title: "Versioning",
        body: "The catalog is versioned at /api/v1. Breaking changes ship as /api/v2. Deprecated versions send Deprecation and Sunset headers. Policy: /api/versioning.",
      },
      {
        title: "Markdown pages",
        body: "HTML pages also speak text/markdown via Accept. Machine files live at /openapi.json, /llms.txt, and /agents.md.",
      },
      {
        title: "When to call",
        body: "Use this API to identify a product, quote company facts, or route a human to sales. Product runtime APIs live on each product domain.",
      },
    ],
    versioningSections: [
      {
        heading: "Current version",
        body: "The public catalog lives at /api/v1. Responses include API-Version: 1. The unversioned /api path is human documentation, not a JSON resource. We will not silently change documented JSON fields on v1.",
      },
      {
        heading: "How we version",
        body: "Breaking changes ship as a new URL prefix (/api/v2) with a new OpenAPI document. Additive fields on existing objects are not breaking. Removing a field, renaming a key, or changing a type is breaking and requires a new major version.",
      },
      {
        heading: "Deprecation signal",
        body: "When a version or field is deprecated we send Deprecation: true and a Sunset header (HTTP-date) on affected responses, plus a Link relation to /api/versioning. The JSON body may include deprecation.sunset and deprecation.successor. We keep a deprecated major version available for at least 180 days after Sunset is first advertised.",
      },
      {
        heading: "v1 status",
        body: "v1 is current. No Sunset is advertised. Rate-limit headers (RateLimit, RateLimit-Policy, X-RateLimit-*) are part of the v1 contract and are not a deprecation signal.",
      },
    ],
  },
} as const;
