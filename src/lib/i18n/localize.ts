import {
  COMPLIANCE_HIGHLIGHTS,
  COMPLIANCE_ITEMS,
  COMPLIANCE_LIFECYCLE,
  COMPLIANCE_POSTURE,
  COMPLIANCE_REGIONS,
  COMPLIANCE_RESPONSE,
  COMPLIANCE_STANDARDS,
  getComplianceCategories,
  getComplianceChapters,
  type ComplianceItem,
} from "@/lib/compliance";
import {
  customers,
  developerSurface,
  homePrompts,
  interview,
  news,
  offices,
  ownedProducts,
  plans,
  selectedWork,
  solutions,
  stats,
  timeline,
  values,
  type NewsPost,
  type OwnedProduct,
  type SelectedWork,
} from "@/lib/site";
import { SITE } from "@/lib/site";
import { getMessages } from "./messages";
import type { Locale } from "./locales";

function required<T>(value: T | undefined | null, path: string): T {
  if (value == null) {
    throw new Error(`Missing i18n value: ${path}`);
  }
  return value;
}

export function localizeOwnedProducts(locale: Locale): OwnedProduct[] {
  const copy = getMessages(locale).products;
  return ownedProducts.map((product) => {
    const t = copy[product.slug as keyof typeof copy];
    return {
      ...product,
      name: t.name,
      kicker: t.kicker,
      status: t.status as OwnedProduct["status"],
      explore: t.explore,
      line: t.line,
      mission: t.mission,
      title: t.title,
      titleSecond: t.titleSecond,
      primary: t.primary,
      blurb: t.blurb,
      features: t.features.map((feature) => ({
        title: feature.title,
        body: feature.body,
      })),
      quote: {
        kicker: t.quote.kicker,
        title: t.quote.title,
        body: t.quote.body,
      },
    };
  });
}

export function localizeOwnedProduct(slug: string, locale: Locale) {
  return localizeOwnedProducts(locale).find((product) => product.slug === slug);
}

export function localizeCustomers(locale: Locale) {
  const notes = getMessages(locale).chrome.customerNotes;
  return customers.map((customer) => ({
    ...customer,
    note: required(
      notes[customer.note as keyof typeof notes],
      `chrome.customerNotes.${customer.note}`,
    ),
  }));
}

export function localizeNews(locale: Locale): NewsPost[] {
  const copy = getMessages(locale).news;
  return news.map((post) => {
    const t = copy[post.slug as keyof typeof copy];
    return {
      ...post,
      date: t.date,
      title: t.title,
      standfirst: t.standfirst,
      body: [...t.body],
    };
  });
}

export function localizeNewsPost(slug: string, locale: Locale) {
  return localizeNews(locale).find((post) => post.slug === slug);
}

export function localizeWork(locale: Locale): SelectedWork[] {
  const copy = getMessages(locale).work;
  return selectedWork.map((item) => {
    const t = copy.items[item.slug as keyof typeof copy.items];
    return {
      ...item,
      title: t.title,
      field: required(
        copy.fields[item.field as keyof typeof copy.fields],
        `work.fields.${item.field}`,
      ),
      form: required(
        copy.forms[item.form as keyof typeof copy.forms],
        `work.forms.${item.form}`,
      ),
      line: t.line,
      lede: t.lede,
      story: [...t.story],
      outcome: t.outcome,
    };
  });
}

export function localizeWorkItem(slug: string, locale: Locale) {
  return localizeWork(locale).find((item) => item.slug === slug);
}

export function localizeWorkNeighbors(slug: string, locale: Locale) {
  const items = localizeWork(locale);
  const i = items.findIndex((item) => item.slug === slug);
  if (i < 0) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? items[i - 1] : undefined,
    next: i < items.length - 1 ? items[i + 1] : undefined,
  };
}

export function localizeSolutions(locale: Locale) {
  const copy = getMessages(locale).solutions;
  return solutions.map((item) => {
    const t = copy[item.slug as keyof typeof copy];
    return {
      ...item,
      name: t.name,
      audience: t.audience,
      line: t.line,
      body: t.body,
      capabilities: [...t.capabilities],
    };
  });
}

export function localizePlans(locale: Locale) {
  const copy = getMessages(locale).plans;
  return plans.map((plan) => {
    const t = copy[plan.name as keyof typeof copy];
    return {
      ...plan,
      price: t.price,
      period: t.period,
      blurb: t.blurb,
      cta: t.cta,
      features: [...t.features],
    };
  });
}

export function localizeValues(locale: Locale) {
  return values.map((value, index) => ({
    ...value,
    title: getMessages(locale).catalog.values[index].title,
    body: getMessages(locale).catalog.values[index].body,
  }));
}

export function localizeTimeline(locale: Locale) {
  return timeline.map((item, index) => ({
    ...item,
    title: getMessages(locale).catalog.timeline[index].title,
    body: getMessages(locale).catalog.timeline[index].body,
  }));
}

export function localizeInterview(locale: Locale) {
  return interview.map((item, index) => ({
    ...item,
    title: getMessages(locale).catalog.interview[index].title,
    body: getMessages(locale).catalog.interview[index].body,
  }));
}

export function localizeHomePrompts(locale: Locale) {
  return homePrompts.map((item, index) => ({
    q: getMessages(locale).catalog.homePrompts[index].q,
    a: getMessages(locale).catalog.homePrompts[index].a,
  }));
}

export function localizeOffices(locale: Locale) {
  const copy = getMessages(locale).catalog.offices;
  return offices.map((office) => ({
    ...office,
    region: copy.region,
    role: copy.role,
  }));
}

export function localizeStats(locale: Locale) {
  const labels = getMessages(locale).catalog.stats;
  return stats.map((stat, index) => ({
    ...stat,
    label: required(
      [labels.experience, labels.products, labels.hq][index],
      `catalog.stats.${index}`,
    ),
  }));
}

export function localizeDeveloperSurface(locale: Locale) {
  const copy = getMessages(locale).catalog.developer;
  return {
    ...developerSurface,
    apiTitle: copy.apiTitle,
    apiDescription: copy.apiDescription,
    developersTitle: copy.developersTitle,
    developersDescription: copy.developersDescription,
    versioningTitle: copy.versioningTitle,
    versioningDescription: copy.versioningDescription,
    heroTitle: copy.heroTitle,
    heroTitleSecond: copy.heroTitleSecond,
    heroLede: copy.heroLede,
    developersHeroTitle: copy.developersHeroTitle,
    developersHeroTitleSecond: copy.developersHeroTitleSecond,
    developersHeroLede: copy.developersHeroLede,
    howTitle: copy.howTitle,
    howLede: copy.howLede,
    versioningUpdated: copy.versioningUpdated,
    endpoints: developerSurface.endpoints.map((endpoint, index) => ({
      ...endpoint,
      body: required(copy.endpoints[index], `catalog.developer.endpoints.${index}`),
    })),
    rules: copy.rules.map((rule) => ({ title: rule.title, body: rule.body })),
    versioningSections: copy.versioningSections.map((section) => ({
      heading: section.heading,
      body: section.body,
    })),
  };
}

export function localizeFacts(locale: Locale) {
  const facts = getMessages(locale).chrome.facts;
  return {
    country: facts.country,
    activityName: facts.activityName,
    statusValue: facts.statusValue,
    establishment: facts.establishment,
    porte: facts.porte,
    legalNature: facts.legalNature,
    founded: facts.founded,
    tagline: getMessages(locale).catalog.tagline,
  };
}

export function formatAddressLocalized(locale: Locale) {
  const { line1, line2, district, city, region, postal } = SITE.address;
  const country = localizeFacts(locale).country;
  return `${line1}, ${line2}, ${district}, ${city}/${region}, ${postal}, ${country}`;
}

export function formatLegalContactLocalized(locale: Locale) {
  return `${SITE.legal}, ${formatAddressLocalized(locale)}. CNPJ ${SITE.cnpj}. ${SITE.phone}. ${SITE.registeredEmail}.`;
}

export function localizeFooter(locale: Locale) {
  const labels = getMessages(locale).chrome.footer;
  return {
    products: [
      { label: labels.allProducts, to: "/products" },
      { label: "FCR", to: "/fcr" },
      { label: "SiteCreator", to: "/sitecreator" },
      { label: "Doutor Fiscal", to: "/doutor-fiscal" },
      { label: "Queravaga", to: "/queravaga" },
      { label: "Dialogus", to: "/dialogus" },
      { label: labels.access, to: "/access" },
    ],
    access: [
      { label: "FCR", to: "/fcr" },
      { label: "SiteCreator", to: "/sitecreator" },
      { label: "Doutor Fiscal", to: "/doutor-fiscal" },
      { label: "Queravaga", to: "/queravaga" },
      { label: "Dialogus", to: "/dialogus" },
    ],
    buildWithUs: [
      { label: labels.customSoftware, to: "/build-with-us" },
      { label: labels.howWeWork, to: "/how-we-work" },
      { label: labels.unfldApi, to: "/api" },
      { label: getMessages(locale).chrome.nav.enterprise, to: "/enterprise" },
      { label: getMessages(locale).chrome.nav.security, to: "/security" },
    ],
    developers: [
      { label: labels.developerResources, to: "/developers" },
      { label: labels.unfldApi, to: "/api" },
      { label: labels.versioning, to: "/api/versioning" },
      { label: labels.openapi, to: "/openapi.json", external: true },
      { label: labels.catalog, to: "/api/v1", external: true },
      { label: labels.agentIndex, to: "/llms.txt", external: true },
      { label: labels.whenToUse, to: "/agents.md", external: true },
    ],
    solutions: [
      { label: labels.smallBusiness, to: "/solutions/business" },
      { label: labels.publicMissions, to: "/solutions/government" },
      { label: labels.operations, to: "/solutions/operations" },
      { label: labels.fiscalRisk, to: "/solutions/legal" },
      { label: getMessages(locale).chrome.nav.security, to: "/solutions/security" },
    ],
    company: [
      { label: getMessages(locale).chrome.nav.about, to: "/company" },
      { label: getMessages(locale).chrome.nav.selectedWork, to: "/work" },
      { label: getMessages(locale).chrome.nav.careers, to: "/careers" },
      { label: getMessages(locale).chrome.nav.news, to: "/news" },
      { label: getMessages(locale).chrome.nav.security, to: "/security" },
      { label: getMessages(locale).chrome.nav.compliance, to: "/compliance" },
      { label: getMessages(locale).chrome.nav.saoPaulo, to: "/sao-paulo" },
      { label: getMessages(locale).chrome.nav.infrastructure, to: "/infrastructure" },
      { label: getMessages(locale).chrome.nav.enterprise, to: "/enterprise" },
      { label: getMessages(locale).chrome.nav.pricing, to: "/pricing" },
      { label: getMessages(locale).chrome.nav.contact, to: "/contact" },
    ],
    legal: [
      { label: labels.legal, to: "/legal" },
      { label: getMessages(locale).chrome.nav.compliance, to: "/compliance" },
      { label: labels.terms, to: "/legal/terms-of-service" },
      { label: labels.enterpriseTerms, to: "/legal/terms-of-service-enterprise" },
      { label: labels.privacy, to: "/legal/privacy-policy" },
      { label: labels.cookies, to: "/legal/cookie-policy" },
      { label: labels.aup, to: "/legal/acceptable-use-policy" },
      { label: labels.brand, to: "/legal/brand-guidelines" },
    ],
  };
}

export function pageTitleLocalized(locale: Locale, page?: string) {
  const name = SITE.name;
  const tagline = getMessages(locale).catalog.tagline;
  return page ? `${page} | ${name}` : `${name} — ${tagline}`;
}

export function legalVars(locale: Locale) {
  const facts = localizeFacts(locale);
  return {
    legal: SITE.legal,
    nature: facts.legalNature,
    cnpj: SITE.cnpj,
    founded: facts.founded,
    legalEmail: SITE.legalEmail,
    contact: formatLegalContactLocalized(locale),
    privacy: SITE.privacy,
    dpo: SITE.dpo,
    aup: SITE.aup,
    brand: SITE.brand,
  };
}

export function localizeComplianceItems(locale: Locale): ComplianceItem[] {
  const copy = getMessages(locale).compliance.items;
  return COMPLIANCE_ITEMS.map((item) => {
    const t = required(copy[item.id as keyof typeof copy], `compliance.items.${item.id}`);
    return {
      ...item,
      category: t.category,
      question: t.question,
      answer: t.answer,
    };
  });
}

export function localizeComplianceCategories(locale: Locale) {
  const cats = getMessages(locale).compliance.categories;
  const items = localizeComplianceItems(locale);
  return getComplianceCategories().map((cat) => {
    const t = required(
      cats[cat.name as keyof typeof cats],
      `compliance.categories.${cat.name}`,
    );
    return {
      ...cat,
      name: t.name,
      short: t.short,
      description: t.description,
      items: items.filter((item) => {
        const source = COMPLIANCE_ITEMS.find((entry) => entry.id === item.id);
        return source?.category === cat.name;
      }),
    };
  });
}

export function localizeComplianceChapters(locale: Locale) {
  const chaptersCopy = getMessages(locale).complianceMeta.chapters;
  const catsCopy = getMessages(locale).compliance.categories;
  const itemsCopy = getMessages(locale).compliance.items;
  return getComplianceChapters().map((chapter) => {
    const t = required(
      chaptersCopy[chapter.slug as keyof typeof chaptersCopy],
      `complianceMeta.chapters.${chapter.slug}`,
    );
    const categories = chapter.categories.map((cat) => {
      const ct = required(
        catsCopy[cat.name as keyof typeof catsCopy],
        `compliance.categories.${cat.name}`,
      );
      return {
        ...cat,
        name: ct.name,
        short: ct.short,
        description: ct.description,
        items: cat.items.map((item) => {
          const it = required(
            itemsCopy[item.id as keyof typeof itemsCopy],
            `compliance.items.${item.id}`,
          );
          return { ...item, category: it.category, question: it.question, answer: it.answer };
        }),
      };
    });
    return {
      ...chapter,
      title: t.title,
      lede: t.lede,
      categories,
      items: categories.flatMap((cat) => cat.items),
    };
  });
}

export function localizeCompliancePosture(locale: Locale) {
  const copy = getMessages(locale).complianceMeta.posture;
  return COMPLIANCE_POSTURE.map((stat, index) => ({
    ...stat,
    label: required(copy[index]?.label, `complianceMeta.posture.${index}.label`),
    note: required(copy[index]?.note, `complianceMeta.posture.${index}.note`),
  }));
}

export function localizeComplianceHighlights(locale: Locale) {
  const copy = getMessages(locale).complianceMeta.highlights;
  return COMPLIANCE_HIGHLIGHTS.map((highlight, index) => ({
    ...highlight,
    title: required(copy[index]?.title, `complianceMeta.highlights.${index}.title`),
    desc: required(copy[index]?.desc, `complianceMeta.highlights.${index}.desc`),
  }));
}

export function localizeComplianceStandards(locale: Locale) {
  const copy = getMessages(locale).complianceMeta.standards;
  return COMPLIANCE_STANDARDS.map((standard, index) => ({
    ...standard,
    scope: required(copy[index]?.scope, `complianceMeta.standards.${index}.scope`),
    detail: required(copy[index]?.detail, `complianceMeta.standards.${index}.detail`),
  }));
}

export function localizeComplianceRegions(locale: Locale) {
  const copy = getMessages(locale).complianceMeta.regions;
  return COMPLIANCE_REGIONS.map((region, index) => ({
    ...region,
    country: required(copy[index]?.country, `complianceMeta.regions.${index}.country`),
    role: required(copy[index]?.role, `complianceMeta.regions.${index}.role`),
    note: required(copy[index]?.note, `complianceMeta.regions.${index}.note`),
  }));
}

export function localizeComplianceLifecycle(locale: Locale) {
  const copy = getMessages(locale).complianceMeta.lifecycle;
  return COMPLIANCE_LIFECYCLE.map((step, index) => ({
    ...step,
    title: required(copy[index]?.title, `complianceMeta.lifecycle.${index}.title`),
    body: required(copy[index]?.body, `complianceMeta.lifecycle.${index}.body`),
  }));
}

export function localizeComplianceResponse(locale: Locale) {
  const copy = getMessages(locale).complianceMeta.response;
  return COMPLIANCE_RESPONSE.map((item, index) => ({
    ...item,
    label: required(copy[index]?.label, `complianceMeta.response.${index}.label`),
  }));
}
