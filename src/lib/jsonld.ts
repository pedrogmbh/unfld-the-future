import { SITE } from "@/lib/site";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/locales";
import { getMessages } from "@/lib/i18n/messages";
import { localizeOwnedProducts } from "@/lib/i18n/localize";

function orgId() {
  return `${SITE.url}/#organization`;
}

function websiteId() {
  return `${SITE.url}/#website`;
}

export function organizationJsonLd(locale: Locale = DEFAULT_LOCALE) {
  const messages = getMessages(locale);
  return {
    "@type": "Organization",
    "@id": orgId(),
    name: SITE.name,
    legalName: SITE.legal,
    alternateName: [SITE.trading, "UNFOLDING THE FUTURE", "Unfolding the Future"],
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    image: `${SITE.url}/og.jpg`,
    description: messages.pages.root.description,
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
        telephone: SITE.whatsappE164,
        url: SITE.whatsappHref,
        availableLanguage: [...LOCALES],
      },
      {
        "@type": "ContactPoint",
        contactType: "WhatsApp Business",
        email: SITE.sales,
        telephone: SITE.whatsappE164,
        url: SITE.whatsappHref,
        availableLanguage: [...LOCALES],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.email,
        telephone: SITE.phoneHref,
        availableLanguage: [...LOCALES],
      },
      {
        "@type": "ContactPoint",
        contactType: "security",
        email: SITE.security,
        telephone: SITE.phoneHref,
        availableLanguage: [...LOCALES],
      },
    ],
    sameAs: [
      "https://github.com/pedrogmbh/unfld-the-future",
      SITE.whatsappHref,
    ],
    knowsAbout: [
      "UNFLD",
      "UNFLD developer resources",
      ...localizeOwnedProducts(locale).map((product) => product.name),
    ],
    identifier: [
      { "@type": "PropertyValue", name: "CNPJ", value: SITE.cnpj },
      { "@type": "PropertyValue", name: "domain", value: "unfld.com.br" },
      {
        "@type": "PropertyValue",
        name: "WhatsApp Business",
        value: SITE.whatsapp,
      },
    ],
    slogan: messages.catalog.tagline,
  };
}

export function homeJsonLd(locale: Locale = DEFAULT_LOCALE) {
  const messages = getMessages(locale);
  return {
    "@context": "https://schema.org",
    ...organizationJsonLd(locale),
    mainEntityOfPage: {
      "@type": "WebSite",
      "@id": websiteId(),
      name: SITE.name,
      alternateName: ["UNFLD", "unfld.com.br", "UNFOLDING THE FUTURE"],
      url: SITE.url,
      description: messages.catalog.tagline,
      inLanguage: [...LOCALES],
      publisher: { "@id": orgId() },
    },
    makesOffer: localizeOwnedProducts(locale).map((product) => ({
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

export function developerResourcesJsonLd(
  path: "/developers" | "/api",
  locale: Locale = DEFAULT_LOCALE,
) {
  const copy = getMessages(locale).catalog.developer;
  const title = path === "/api" ? copy.apiTitle : copy.developersTitle;
  const description =
    path === "/api" ? copy.apiDescription : copy.developersDescription;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    headline: title,
    url: `${SITE.url}${path}`,
    description,
    isPartOf: { "@id": websiteId() },
    about: { "@id": orgId() },
    inLanguage: locale,
    mainEntity: {
      "@type": "WebAPI",
      name: copy.apiTitle,
      description: copy.apiDescription,
      url: `${SITE.url}/api/v1`,
      documentation: `${SITE.url}/openapi.json`,
      provider: { "@id": orgId() },
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
