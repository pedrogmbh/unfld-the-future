export const SITE = {
  name: "UNFLD",
  legal: "UNFOLDING THE FUTURE LTDA",
  trading: "UNFLD",
  cnpj: "62.855.761/0001-82",
  tagline: "Unfold the future.",
  email: "hello@unfld.com",
  registeredEmail: "admin@unfolding.com.br",
  sales: "sales@unfld.com",
  security: "security@unfld.com",
  press: "press@unfld.com",
  phone: "(43) 3422-8348",
  phoneHref: "+554334228348",
  year: 2026,
  founded: "Sep 23, 2025",
  status: "Ativa",
  establishment: "Matriz",
  porte: "ME",
  legalNature: "Sociedade Empresária Limitada",
  legalNatureCode: "206-2",
  activity: {
    code: "62.04-0-00",
    name: "Consultoria em tecnologia da informação",
    nameEn: "Information technology consultancy",
  },
  address: {
    line1: "Rua Avanhandava, 126",
    line2: "10º andar, Edifício Cambuí",
    district: "Bela Vista",
    city: "São Paulo",
    region: "SP",
    postal: "01306-901",
    country: "Brazil",
  },
} as const;

export type NavLink = { label: string; to: string; external?: boolean };

export const headerNav: NavLink[] = [
  { label: "Products", to: "/products" },
  { label: "Solutions", to: "/solutions" },
  { label: "Developers", to: "/api" },
  { label: "Company", to: "/company" },
  { label: "News", to: "/news" },
];

export type OwnedProduct = {
  slug: string;
  name: string;
  href: string;
  kicker: string;
  explore: string;
  line: string;
  blurb: string;
  image: string;
  url?: string;
  title: string;
  titleSecond: string;
  primary: string;
  features: { title: string; body: string }[];
  quote: { kicker: string; title: string; body: string };
};

export const ownedProducts: readonly OwnedProduct[] = [
  {
    slug: "fcr",
    name: "FCR",
    href: "/fcr",
    kicker: "Agronomy",
    explore: "Explore",
    line: "Ferramenta de Coleta — for agronomy engineers.",
    title: "Ferramenta de Coleta.",
    titleSecond: "For agronomists.",
    primary: "App Store",
    url: "https://apps.apple.com/br/app/fcr/id6461211731",
    blurb:
      "FCR is Ferramenta de Coleta, an agronomy app for agronomy engineers. Collect technical results in the field — offline, then sync. Made in partnership with Timac Agro.",
    image: "/images/pulse.jpg",
    features: [
      {
        title: "Ferramenta de Coleta",
        body: "The product agronomy engineers take to the plot. Results collected where the work happens, not back at a desk.",
      },
      {
        title: "Field first",
        body: "Capture technical results offline. Sync when the signal returns. The report should not wait on coverage.",
      },
      {
        title: "Built with Timac Agro",
        body: "FCR is an UNFLD product, made in partnership with Timac Agro. The brief came from agronomists. The app is how we answered it.",
      },
      {
        title: "For agronomy engineers",
        body: "Not a generic field form. The language, the cadence, and the reports match how agronomists already work.",
      },
      {
        title: "Reports that land",
        body: "What is collected in the field becomes a result the technical team can read. That is the product.",
      },
      {
        title: "Owned by UNFLD",
        body: "We design it, ship it, and run it. The partnership is with Timac Agro. The product is ours.",
      },
    ],
    quote: {
      kicker: "FCR",
      title: "The plot is not a spreadsheet.",
      body: "Ferramenta de Coleta is how agronomy engineers collect results in the field. UNFLD built it. Timac Agro is the partner it was built with.",
    },
  },
  {
    slug: "sitecreator",
    name: "SiteCreator",
    href: "/sitecreator",
    kicker: "Small business",
    explore: "Explore",
    line: "A site on the air in five minutes, over WhatsApp.",
    title: "A site in five minutes.",
    titleSecond: "Over WhatsApp.",
    primary: "Open SiteCreator",
    url: "https://www.sitecreator.com.br",
    blurb:
      "For MEI and microempresa. Send the CNPJ. We pull Receita, Instagram, and Facebook, and publish a site — with a free address. WhatsApp is the login.",
    image: "/images/studio.jpg",
    features: [
      {
        title: "WhatsApp is the account",
        body: "The number authenticates. No password, no email form, no agency kickoff. Open WhatsApp and start.",
      },
      {
        title: "Send the CNPJ",
        body: "We consult the Receita, then Instagram and Facebook, to understand the business. An audio is optional — hours, specialty, the way the house talks.",
      },
      {
        title: "On the air in about five minutes",
        body: "seunegocio.live.sitecreator.com.br, with SSL. A site, not a digital business card.",
      },
      {
        title: "Free to publish",
        body: "One site, free subdomain, hosting, WhatsApp button, updates by audio. Own domain, professional email, and priority from R$49 / month.",
      },
      {
        title: "Change it in the chat",
        body: "New hours, a new dish, a new photo: send an audio. We update the site. The client still clicks through to WhatsApp.",
      },
      {
        title: "For MEI and microempresa",
        body: "Bakery, salon, workshop, clinic. If there is a CNPJ and WhatsApp, there is a site. sitecreator.com.br.",
      },
    ],
    quote: {
      kicker: "SiteCreator",
      title: "Not every site needs an agency.",
      body: "Send the CNPJ. Speak as you speak to the customer. Five minutes later the site is on the air. That is SiteCreator.",
    },
  },
  {
    slug: "doutor-fiscal",
    name: "Doutor Fiscal",
    href: "/doutor-fiscal",
    kicker: "Fiscal",
    explore: "Explore",
    line: "The company’s fiscal work, now on WhatsApp.",
    title: "Fiscal work,",
    titleSecond: "on WhatsApp.",
    primary: "Open Doutor Fiscal",
    url: "https://www.doutorfiscal.com",
    blurb:
      "BPO financeiro plus fiscal intelligence, for MEI, micro, and small companies. Send an audio asking for the invoice. The system calculates, issues NF-e or NFS-e, and returns the PDF.",
    image: "/images/build.jpg",
    features: [
      {
        title: "WhatsApp first",
        body: "The number that calls is the company. No form, no password. Audio, text, or a PDF — the product asks only for what is missing.",
      },
      {
        title: "Audio becomes a note",
        body: "“Issue one thousand five hundred for João at the bakery.” It transcribes, calculates Simples Nacional, emits, and returns the PDF.",
      },
      {
        title: "A fiscal inbox",
        body: "Each CNPJ gets empresa@doutorfiscal.com. The box triages invoices, posts to the ERP, and notifies on WhatsApp — or blocks what looks wrong.",
      },
      {
        title: "BPO, not a spreadsheet",
        body: "Issuance, collections, payments, reconciliation. The writing and the conference stay with the product. You stay on the phone.",
      },
      {
        title: "Waitlist pricing",
        body: "MEI from R$59 / month. Micro from R$159. Small company from R$349. Cancel in WhatsApp. No loyalty clause.",
      },
      {
        title: "Made for who invoices",
        body: "Bakery, atelier, clinic, shop. Doutor Fiscal takes the work that stalls the day: the note, the boleto, the invoice, the conversation with the fisco.",
      },
    ],
    quote: {
      kicker: "Doutor Fiscal",
      title: "The accountant should not be the bottleneck for a note.",
      body: "Fiscal intelligence on WhatsApp, plus a mailbox that thinks. doutorfiscal.com — waitlist open.",
    },
  },
  {
    slug: "queravaga",
    name: "Queravaga",
    href: "/queravaga",
    kicker: "Work",
    explore: "Explore",
    line: "Into the job market in minutes.",
    title: "Into the market",
    titleSecond: "in minutes.",
    primary: "Open Queravaga",
    url: "https://www.queravaga.com",
    blurb:
      "Connects people looking for work with teams that need to hire. A profile ready for interviews — in the time of a coffee.",
    image: "/images/forge.jpg",
    features: [
      {
        title: "A profile, ready",
        body: "Your profile comes out formatted for the market. No bureaucracy. No spreadsheet of versions.",
      },
      {
        title: "Access to interviews",
        body: "Teams that need people find people who are ready to start. The matching is the product.",
      },
      {
        title: "In the time of a coffee",
        body: "The promise is speed with dignity. Into the job market in minutes — not a two-week ritual.",
      },
      {
        title: "Two sides",
        body: "For people looking, and for companies that need to hire. One product. Both directions.",
      },
      {
        title: "An UNFLD product",
        body: "Queravaga is ours. We launched it on 20 August 2026. We operate it. queravaga.com.",
      },
      {
        title: "A different way in",
        body: "The market does not need another board. It needs a shorter path between talent and a chair.",
      },
    ],
    quote: {
      kicker: "Queravaga",
      title: "The job market is slower than it needs to be.",
      body: "Queravaga is how UNFLD shortens that path. Profile ready. Interviews in reach. Ours to run.",
    },
  },
  {
    slug: "dialogus",
    name: "Dialogus Psicossocial",
    href: "/dialogus",
    kicker: "NR-1",
    explore: "Explore",
    line: "Psychosocial risk, managed as a system.",
    title: "Psychosocial risk,",
    titleSecond: "as a system.",
    primary: "Open Dialogus",
    url: "https://www.dialoguspsicossocial.com.br",
    blurb:
      "A platform for the strategic management of psychosocial risks. Structured listening, ILO and WHO-style digital mapping, dashboards, and action plans — so NR-1 is not a campaign.",
    image: "/images/office.jpg",
    features: [
      {
        title: "NR-1 as management",
        body: "Managing psychosocial risk is a legal requirement, with deadlines and a PGR that has to stand up. Dialogus is built for that standard.",
      },
      {
        title: "Structured listening",
        body: "Lis, the Dialogus assistant, conducts individual dialogues. Method plus technology. Risk named, classified, visible — without performing care.",
      },
      {
        title: "Mapped to ILO and WHO",
        body: "Digital questionnaires that can follow ILO and WHO methods, and can be tailored to the company. The mapping is the start, not the slide.",
      },
      {
        title: "A dashboard leadership can use",
        body: "Aggregated data, criticality, and follow-through. Individual answers stay confidential. Directors see what they can act on.",
      },
      {
        title: "Action by criticality",
        body: "Preventive and corrective programmes matched to the score, aligned to NR-1. Audit-ready reports, not a wellness poster.",
      },
      {
        title: "Plans on the product site",
        body: "Essencial, Avançar, and Integral — on dialoguspsicossocial.com.br. Software and specialised accompaniment sit together.",
      },
    ],
    quote: {
      kicker: "Dialogus",
      title: "It is not enough to say the company cares. You have to show how.",
      body: "Dialogus Psicossocial is how organisations map psychosocial risk and stand up to NR-1 — with a product, not a slide.",
    },
  },
];

export const customers = [
  { name: "Timac Agro", note: "A principal partnership" },
  { name: "SporTV" },
  { name: "Netflix" },
  { name: "Embraer" },
  { name: "L’Oréal Paris" },
  { name: "Cartier" },
  { name: "Subvrsive", note: "WPP" },
  { name: "Siemens GmbH" },
  { name: "Aircraft Philipp" },
  { name: "Spotify" },
  { name: "O Boticário" },
  { name: "PUCPR" },
  { name: "FLAGCX" },
  { name: "Polenghi" },
  { name: "IOHK", note: "Input Output Group" },
] as const;

export const footer = {
  products: [
    { label: "All products", to: "/products" },
    { label: "FCR", to: "/fcr" },
    { label: "SiteCreator", to: "/sitecreator" },
    { label: "Doutor Fiscal", to: "/doutor-fiscal" },
    { label: "Queravaga", to: "/queravaga" },
    { label: "Dialogus", to: "/dialogus" },
  ],
  download: [
    { label: "Web", to: "/download" },
    { label: "iOS", to: "/download" },
    { label: "Android", to: "/download" },
    { label: "Desktop", to: "/download" },
  ],
  solutions: [
    { label: "Business", to: "/solutions/business" },
    { label: "Government", to: "/solutions/government" },
    { label: "Operations", to: "/solutions/support" },
    { label: "Legal & fiscal", to: "/solutions/legal" },
    { label: "Security", to: "/solutions/security" },
    { label: "Use Cases", to: "/solutions" },
  ],
  developers: [
    { label: "API", to: "/api" },
    { label: "Docs", to: "/docs" },
    { label: "Console", to: "/console" },
    { label: "Status", to: "/status" },
  ],
  company: [
    { label: "About", to: "/company" },
    { label: "Careers", to: "/careers" },
    { label: "News", to: "/news" },
    { label: "Security", to: "/security" },
    { label: "São Paulo", to: "/sao-paulo" },
    { label: "Infrastructure", to: "/infrastructure" },
    { label: "Enterprise", to: "/enterprise" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact", to: "/contact" },
  ],
  legal: [
    { label: "Legal", to: "/legal" },
    { label: "Terms", to: "/legal/terms-of-service" },
    { label: "Enterprise Terms", to: "/legal/terms-of-service-enterprise" },
    { label: "Privacy", to: "/legal/privacy-policy" },
    { label: "Cookies", to: "/legal/cookie-policy" },
    { label: "AUP", to: "/legal/acceptable-use-policy" },
    { label: "Brand", to: "/legal/brand-guidelines" },
  ],
} as const;

export const stats = [
  { value: "2019", label: "Building since" },
  { value: "15+", label: "Companies shipped for" },
  { value: "5", label: "Products we own" },
  { value: "SP", label: "Headquarters · São Paulo" },
] as const;

export const homePrompts = [
  {
    q: "Our agronomists collect results in the field. Coverage is not a given.",
    a: "FCR — Ferramenta de Coleta — is an agronomy app for agronomy engineers. Offline collection, then sync. Made in partnership with Timac Agro.",
  },
  {
    q: "We are MEI. We need a site, not an agency.",
    a: "SiteCreator publishes over WhatsApp. Send the CNPJ. We pull Receita and social, and the site is on the air in about five minutes — sitecreator.com.br.",
  },
  {
    q: "How do we prove psychosocial risk is managed, not just discussed?",
    a: "Dialogus Psicossocial maps the risk with structured listening, ILO and WHO-style questionnaires, and a dashboard that stands up to NR-1.",
  },
] as const;

export const offices = [
  {
    city: "São Paulo",
    region: "Brazil",
    coords: "23.5554°S, 46.6468°W",
    href: "/sao-paulo",
    role: "Headquarters",
    detail: "Rua Avanhandava, 126 · Bela Vista",
  },
] as const;

export const values = [
  {
    n: "01",
    title: "Think before we build",
    body: "Technology without understanding is noise. We sit with people, context, and purpose before a line of code. The software-house years taught us what to keep.",
  },
  {
    n: "02",
    title: "Own what we ship",
    body: "We still build for others. We also operate products under our own name. Ownership is how something lasts a decade — whether the brief is ours or a partner’s.",
  },
  {
    n: "03",
    title: "Move, then sharpen",
    body: "Rapid development and iteration lets us solve real problems fast. We are not interested in speed for speed’s sake. We ship, then we make it exact.",
  },
] as const;

export const timeline = [
  {
    date: "2019",
    title: "A software house",
    body: "We begin as a focused studio shipping apps and platforms for other companies — craft before scale.",
  },
  {
    date: "2021",
    title: "Work that travelled",
    body: "The roster grows. Media, industry, luxury, agribusiness, aviation. The same quality bar, for companies that already operate at scale.",
  },
  {
    date: "2025",
    title: "UNFLD",
    body: "On 23 September 2025, UNFOLDING THE FUTURE LTDA is incorporated in São Paulo (CNPJ 62.855.761/0001-82), trading as UNFLD. The house keeps building for others. It also starts shipping what it owns.",
  },
  {
    date: "2026",
    title: "Products we operate",
    body: "FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus Psicossocial are in market. The craft is the same. The ownership, on these, is ours.",
  },
] as const;

export type NewsPost = {
  slug: string;
  date: string;
  title: string;
  standfirst: string;
  body: string[];
  code?: { filename: string; content: string };
};

export const news: NewsPost[] = [
  {
    slug: "queravaga",
    date: "Aug 20, 2026",
    title: "Queravaga is in the market",
    standfirst:
      "A new way into work. Profile ready, interviews in reach — for people looking, and for teams that need to hire.",
    body: [
      "Queravaga is an UNFLD product. It is not a job board we built for someone else. We own it, we operate it, and it launched today.",
      "The promise is simple: into the job market in the time of a coffee. A profile formatted for hiring teams, and a path to interviews without a two-week ritual.",
      "If you are looking, or you need to hire, Queravaga is live at queravaga.com.",
    ],
  },
  {
    slug: "the-unfold",
    date: "Sep 23, 2025",
    title: "UNFLD, UNFOLDING THE FUTURE",
    standfirst:
      "Our trading name is UNFLD. Our legal name is UNFOLDING THE FUTURE. We build for others, and we ship what we own.",
    body: [
      "UNFLD is the name we trade under. The company is UNFOLDING THE FUTURE LTDA, incorporated in São Paulo. Five letters. Pronounced unfold.",
      "For years we were a software house — a focused studio that designed and built digital products for other companies. SporTV, Netflix, Timac Agro, Embraer, L’Oréal Paris, Cartier, and the rest of the roster on the Company page. We were good at it. We still are. That work continues.",
      "Owning the product is the other half of the story. FCR (Ferramenta de Coleta, with Timac Agro), SiteCreator, Doutor Fiscal, Queravaga, and Dialogus Psicossocial are ours to operate. The craft is the same. On these, the ownership is not someone else’s.",
    ],
  },
];

export const roles = [
  {
    id: "eng-owned",
    title: "Software Engineer — Owned products",
    team: "Products",
    locations: ["São Paulo"],
    type: "Full-time",
  },
  {
    id: "eng-house",
    title: "Software Engineer — Software house",
    team: "Engineering",
    locations: ["São Paulo"],
    type: "Full-time",
  },
  {
    id: "eng-fcr",
    title: "Mobile Engineer — FCR",
    team: "Agronomy",
    locations: ["São Paulo"],
    type: "Full-time",
  },
  {
    id: "design-product",
    title: "Product Designer",
    team: "Design",
    locations: ["São Paulo"],
    type: "Full-time",
  },
  {
    id: "counsel-ent",
    title: "Enterprise Counsel",
    team: "Go-to-market",
    locations: ["São Paulo"],
    type: "Full-time",
  },
  {
    id: "sec-app",
    title: "Application Security Engineer",
    team: "Security",
    locations: ["São Paulo"],
    type: "Full-time",
  },
] as const;

export const interview = [
  {
    n: "01",
    title: "Submit your application",
    body: "Our team reviews your CV and a statement of exceptional work. We generally do not use recruiters for assessments.",
  },
  {
    n: "02",
    title: "Screening interview",
    body: "A short conversation to learn about you and whether the role fits. Expect a few technical questions and a review of your background.",
  },
  {
    n: "03",
    title: "Technical interviews",
    body: "Sessions where we dive into how you approach complex problems. We care about reasoning, not trivia.",
  },
  {
    n: "04",
    title: "Offer extended",
    body: "If you have demonstrated the skills and mindset we look for, we will extend an offer to join UNFLD.",
  },
] as const;

export const solutions = [
  {
    slug: "business",
    name: "Business",
    line: "Owned products and custom software — under one house, from São Paulo.",
    body: "SiteCreator and Doutor Fiscal for MEI, micro, and small companies. Queravaga when hiring has to move. Custom software when the operation is not a template. Seat-level contracts when the review requires them.",
  },
  {
    slug: "government",
    name: "Government",
    line: "Products for the public mission — with the security, compliance, and deployment controls agencies require.",
    body: "NR-1 and psychosocial risk through Dialogus. Custom systems with data residency, dedicated planes, and audit that stands up to a review. Built for ministries, cities, and national programs.",
  },
  {
    slug: "support",
    name: "Operations",
    line: "Field collection, fiscal work, and the WhatsApp thread the company already lives in.",
    body: "FCR for agronomy engineers in the plot. Doutor Fiscal for notes, invoices, and BPO on WhatsApp. The same quality bar we hold when we ship for Timac Agro and the rest of the roster.",
  },
  {
    slug: "legal",
    name: "Legal & fiscal",
    line: "Brazilian obligations as a product — and counsel from a team that has sat through the audits.",
    body: "Doutor Fiscal for NF-e, NFS-e, and the fiscal inbox. Dialogus for NR-1 documentation. Custom work when the brief is a system, not a plan.",
  },
  {
    slug: "security",
    name: "Security",
    line: "How we treat data on products we operate, and on software we ship for others.",
    body: "Private paths, no surprise egress, and no training on your data unless you opt in. Talk to us about the review you actually have to pass.",
  },
] as const;

export const plans = [
  {
    name: "SiteCreator",
    price: "Free",
    period: " · R$49 / domain",
    blurb: "A site on the air in five minutes, over WhatsApp. For MEI and microempresa.",
    cta: "Open SiteCreator",
    href: "https://www.sitecreator.com.br",
    external: true,
    features: [
      "WhatsApp as login",
      "CNPJ, Receita, Instagram, Facebook",
      "Free *.live.sitecreator.com.br",
      "Own domain from R$49 / month",
    ],
  },
  {
    name: "Doutor Fiscal",
    price: "R$59",
    period: "/month",
    blurb: "Waitlist. Fiscal work and BPO on WhatsApp, from MEI to small company.",
    cta: "Open Doutor Fiscal",
    href: "https://www.doutorfiscal.com",
    external: true,
    features: [
      "Audio becomes NF-e / NFS-e",
      "empresa@doutorfiscal.com",
      "MEI R$59 · Micro R$159 · Small R$349",
      "Cancel in WhatsApp",
    ],
  },
  {
    name: "Dialogus",
    price: "Plans",
    period: "",
    blurb: "Psychosocial risk and NR-1. Essencial, Avançar, and Integral on the product site.",
    cta: "Open Dialogus",
    href: "https://www.dialoguspsicossocial.com.br",
    external: true,
    features: [
      "Structured listening with Lis",
      "ILO / WHO-style mapping",
      "Dashboards and action plans",
      "Audit-ready NR-1 reports",
    ],
  },
  {
    name: "Custom",
    price: "Contact",
    period: "",
    blurb: "FCR with Timac Agro, Queravaga, and the software-house work. Named team when you need one.",
    cta: "Contact sales",
    href: "/contact",
    external: false,
    features: [
      "FCR — Ferramenta de Coleta",
      "Queravaga hiring",
      "Custom software",
      "Enterprise contracts",
    ],
  },
] as const;

export function getNews(slug: string) {
  return news.find((p) => p.slug === slug);
}

export function getOwnedProduct(slug: string) {
  return ownedProducts.find((p) => p.slug === slug);
}

export function pageTitle(page?: string) {
  return page ? `${page} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
}

export function formatAddress() {
  const { line1, line2, district, city, region, postal, country } = SITE.address;
  return `${line1}, ${line2}, ${district}, ${city}/${region}, ${postal}, ${country}`;
}

export function formatLegalContact() {
  return `${SITE.legal}, ${formatAddress()}. CNPJ ${SITE.cnpj}. ${SITE.phone}. ${SITE.registeredEmail}.`;
}
