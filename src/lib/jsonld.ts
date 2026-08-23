import { SITE, ownedProducts } from "@/lib/site";

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legal,
    alternateName: [SITE.trading, "UNFOLDING THE FUTURE", "Unfolding the Future"],
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    image: `${SITE.url}/og.jpg`,
    description:
      "UNFLD builds and operates technology for essential work and builds custom systems beside organizations with consequential operations.",
    email: SITE.email,
    telephone: SITE.phoneHref,
    taxID: SITE.cnpj,
    foundingDate: "2025-09-23",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: "BR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.sales,
        telephone: SITE.phoneHref,
        availableLanguage: ["en", "pt-BR"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.email,
        telephone: SITE.phoneHref,
        availableLanguage: ["en", "pt-BR"],
      },
      {
        "@type": "ContactPoint",
        contactType: "security",
        email: SITE.security,
        telephone: SITE.phoneHref,
        availableLanguage: ["en", "pt-BR"],
      },
    ],
    sameAs: ["https://github.com/pedrogmbh/unfld-the-future"],
    knowsAbout: [
      "UNFLD",
      "UNFLD developer resources",
      ...ownedProducts.map((product) => product.shortName),
    ],
    identifier: [
      { "@type": "PropertyValue", name: "CNPJ", value: SITE.cnpj },
      { "@type": "PropertyValue", name: "domain", value: "unfld.com.br" },
    ],
    slogan: SITE.tagline,
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    ...organizationJsonLd(),
    mainEntityOfPage: {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE.name,
      alternateName: ["UNFLD", "unfld.com.br", "UNFOLDING THE FUTURE"],
      url: SITE.url,
      description: SITE.tagline,
      inLanguage: ["en", "pt-BR"],
      publisher: { "@id": ORG_ID },
    },
    makesOffer: ownedProducts.map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: product.name,
        applicationCategory: "BusinessApplication",
        url: `${SITE.url}${product.href}`,
        description: product.blurb,
      },
    })),
  };
}

export function developerResourcesJsonLd(path: "/developers" | "/api") {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "UNFLD developer resources",
    headline: "UNFLD developer resources",
    url: `${SITE.url}${path}`,
    description:
      "UNFLD developer resources: public catalog API, OpenAPI 3.1, versioning policy, and agent files.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: {
      "@type": "WebAPI",
      name: "UNFLD Catalog API",
      description:
        "Public read-only catalog of UNFLD products, news, selected work, and company facts.",
      url: `${SITE.url}/api/v1`,
      documentation: `${SITE.url}/openapi.json`,
      provider: { "@id": ORG_ID },
    },
    significantLink: [
      `${SITE.url}/developers`,
      `${SITE.url}/api`,
      `${SITE.url}/api/versioning`,
      `${SITE.url}/openapi.json`,
      `${SITE.url}/llms.txt`,
      `${SITE.url}/agents.md`,
    ],
  };
}
