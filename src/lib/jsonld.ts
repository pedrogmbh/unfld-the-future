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
    knowsAbout: ownedProducts.map((product) => product.shortName),
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
