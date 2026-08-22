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
  { label: "Products", to: "/forge" },
  { label: "Solutions", to: "/solutions" },
  { label: "Developers", to: "/api" },
  { label: "Company", to: "/company" },
  { label: "News", to: "/news" },
];

export const products = [
  {
    slug: "forge",
    name: "Forge",
    href: "/forge",
    kicker: "Apps",
    explore: "Explore",
    line: "Products we own and operate.",
    blurb:
      "Consumer and B2B apps shipped under the UNFLD name — designed, built, and run by the same team.",
    image: "/images/forge.jpg",
  },
  {
    slug: "build",
    name: "Build",
    href: "/build",
    kicker: "Engineering",
    explore: "Explore",
    line: "Bring UNFLD to your computer.",
    blurb:
      "A product-engineering system for complex work. Agents, workflows, and a terminal that ships.",
    image: "/images/build.jpg",
  },
  {
    slug: "studio",
    name: "Studio",
    href: "/studio",
    kicker: "Creative",
    explore: "Explore",
    line: "Brand, design, and generative media.",
    blurb:
      "The creative stack behind every UNFLD surface — identity, motion, and image systems built for product.",
    image: "/images/studio.jpg",
  },
  {
    slug: "pulse",
    name: "Pulse",
    href: "/pulse",
    kicker: "Intelligence",
    explore: "Explore",
    line: "See the business as it happens.",
    blurb:
      "Business intelligence that reads live operations, not last quarter’s export. Dashboards, models, decisions.",
    image: "/images/pulse.jpg",
  },
  {
    slug: "relay",
    name: "Relay",
    href: "/relay",
    kicker: "APIs",
    explore: "Explore",
    line: "One API. Every product.",
    blurb:
      "Services, events, and data planes that connect Forge, Pulse, and the systems around them.",
    image: "/images/relay.jpg",
  },
] as const;

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
    kicker: "Operations",
    explore: "Explore",
    line: "Resolution on the first contact.",
    title: "The first contact",
    titleSecond: "is the last.",
    primary: "Talk to sales",
    blurb:
      "An operations product we own and run. Context, routing, and resolution in one surface — so the first contact can be the last.",
    image: "/images/pulse.jpg",
    features: [
      {
        title: "One surface",
        body: "Context, routing, and history in the same place. The person who answers does not start from zero.",
      },
      {
        title: "Owned, not handed off",
        body: "FCR is an UNFLD product. We design it, ship it, and run it. The release train does not stop at launch.",
      },
      {
        title: "Built for operations",
        body: "Support, success, and field teams that measure resolution — not tickets opened.",
      },
      {
        title: "The same craft",
        body: "The software-house years taught us how contact centers actually work. FCR is that knowledge, as a product.",
      },
      {
        title: "Enterprise ready",
        body: "When the team outgrows a single queue, the controls are already there. Talk to us about seats and identity.",
      },
      {
        title: "A long horizon",
        body: "We ship products we intend to run for a decade. FCR is one of them.",
      },
    ],
    quote: {
      kicker: "FCR",
      title: "A ticket that bounces is a product failure.",
      body: "We built FCR so the first conversation can finish the work. That is the product.",
    },
  },
  {
    slug: "sitecreator",
    name: "SiteCreator",
    href: "/sitecreator",
    kicker: "Sites",
    explore: "Explore",
    line: "A site, without a custom build.",
    title: "A site, without",
    titleSecond: "a custom build.",
    primary: "Talk to sales",
    blurb:
      "Publish and operate a site without a six-month project. Structure, pages, and content — in a product UNFLD runs.",
    image: "/images/studio.jpg",
    features: [
      {
        title: "Structure first",
        body: "Pages, content, and publishing in a system — not a pile of files someone has to remember.",
      },
      {
        title: "Operated by UNFLD",
        body: "SiteCreator is ours. We keep it current. You do not inherit a frozen brochure.",
      },
      {
        title: "For teams, not agencies",
        body: "When the need is a site, not a six-month discovery. The craft is still ours.",
      },
      {
        title: "Same design language",
        body: "Identity and motion come from the system we use on unfld.com. No leftover template skin.",
      },
      {
        title: "From the house",
        body: "We have shipped hundreds of sites as a software house. SiteCreator is that muscle, productized.",
      },
      {
        title: "A long horizon",
        body: "A site you can still edit next year. That is the point.",
      },
    ],
    quote: {
      kicker: "SiteCreator",
      title: "Not every site needs a custom build. Every site needs an operator.",
      body: "SiteCreator is how UNFLD publishes and runs sites as a product — not as a project that ends.",
    },
  },
  {
    slug: "doutor-fiscal",
    name: "Doutor Fiscal",
    href: "/doutor-fiscal",
    kicker: "Fiscal",
    explore: "Explore",
    line: "Brazilian fiscal work, as a product.",
    title: "Fiscal work,",
    titleSecond: "as a product.",
    primary: "Talk to sales",
    blurb:
      "Documents, obligations, and the tax reform as it lands — for finance and accounting teams that need a system, not another spreadsheet.",
    image: "/images/build.jpg",
    features: [
      {
        title: "Brazilian by design",
        body: "Obligations, documents, and the cadence of the Receita — not a generic ledger with a tax plug-in.",
      },
      {
        title: "Reform as it lands",
        body: "The tax reform is not a blog post. Doutor Fiscal is built to absorb the rules as they become real.",
      },
      {
        title: "For finance teams",
        body: "Accounting, fiscal, and controllers who already know the work. The product should keep up.",
      },
      {
        title: "Owned by UNFLD",
        body: "We run Doutor Fiscal. Support, releases, and the boring reliability work stay with us.",
      },
      {
        title: "The house behind it",
        body: "Years of shipping for companies that live under Brazilian tax law. This is that knowledge, as software.",
      },
      {
        title: "A long horizon",
        body: "Fiscal software that is wrong next year is not software. We intend to be here for the next decade of rules.",
      },
    ],
    quote: {
      kicker: "Doutor Fiscal",
      title: "Spreadsheets are not a fiscal system.",
      body: "Doutor Fiscal is the product we run for teams that need the work done — documents, obligations, and the reform — without hoping a folder stays current.",
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
    url: "https://www.queravaga.com/",
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
        body: "Queravaga is ours. We launched it on 20 August 2026. We operate it.",
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
    kicker: "People",
    explore: "Explore",
    line: "Psychosocial risk, mapped.",
    title: "Psychosocial risk,",
    titleSecond: "mapped.",
    primary: "Open Dialogus",
    url: "https://www.dialoguspsicossocial.com.br/",
    blurb:
      "Structured listening and digital mapping for psychosocial risk. Dashboards, action plans, and NR-1 compliance — for leadership that has to show how it cares.",
    image: "/images/office.jpg",
    features: [
      {
        title: "Mapped, not guessed",
        body: "Digital questionnaires that can follow ILO and WHO methods, and can be tailored to the company. Risk named, classified, visible.",
      },
      {
        title: "NR-1 as management",
        body: "The 2026 update of NR-1 asks for proof, not a wellness campaign. Dialogus is built for that standard.",
      },
      {
        title: "A dashboard leadership can use",
        body: "Complex data, turned into something a director can act on. Criticality, plans, follow-through.",
      },
      {
        title: "Structured listening",
        body: "Dialogue with method. Technology that protects people rather than performing care.",
      },
      {
        title: "Action by criticality",
        body: "Plans that match the score. Preventive and corrective work, not a generic programme copied from last year.",
      },
      {
        title: "An UNFLD product",
        body: "Dialogus Psicossocial is ours to operate. The consultancy around it, and the software, sit together.",
      },
    ],
    quote: {
      kicker: "Dialogus",
      title: "It is not enough to say the company cares. You have to show how.",
      body: "Dialogus Psicossocial is how UNFLD helps organisations map psychosocial risk and stand up to NR-1 — with a product, not a slide.",
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
    { label: "Forge", to: "/forge" },
    { label: "FCR", to: "/fcr" },
    { label: "SiteCreator", to: "/sitecreator" },
    { label: "Doutor Fiscal", to: "/doutor-fiscal" },
    { label: "Queravaga", to: "/queravaga" },
    { label: "Dialogus", to: "/dialogus" },
    { label: "Build", to: "/build" },
    { label: "Studio", to: "/studio" },
    { label: "Pulse", to: "/pulse" },
    { label: "Relay", to: "/relay" },
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
    { label: "Customer Support", to: "/solutions/support" },
    { label: "Legal", to: "/solutions/legal" },
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
    q: "Can we hire without a two-week process?",
    a: "Queravaga is built for that gap — a profile ready for interviews, and a path into the market in minutes, not weeks.",
  },
  {
    q: "How do we prove psychosocial risk is managed, not just discussed?",
    a: "Dialogus Psicossocial maps the risk, scores criticality, and gives leadership a dashboard that stands up to NR-1 — structured listening, not a campaign.",
  },
  {
    q: "We need software that understands our operation, not a generic suite.",
    a: "That is still the software-house work. We sit with the operation — agribusiness, industry, media, luxury — then we ship. Timac Agro is one of the partnerships that taught us how.",
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
      "If you are looking, or you need to hire, Queravaga is live.",
    ],
  },
  {
    slug: "pulse-2",
    date: "Aug 18, 2026",
    title: "Introducing Pulse 2",
    standfirst:
      "Pulse 2 is our intelligence platform rebuilt for live operations — models that read the business as it happens.",
    body: [
      "Pulse 2 is the largest rewrite of our intelligence stack since we stopped being only a software house. It connects to the systems companies already run — ERPs, warehouses, ledgers, CRMs — and produces a live picture instead of a quarterly lag.",
      "The new engine is built on Relay events. Every product UNFLD operates now emits a consistent stream; Pulse 2 is the first surface that can read all of them at once.",
      "Pulse 2 is available today on web, and through the Relay API for teams that want models inside their own tools.",
    ],
    code: {
      filename: "pulse_query.py",
      content: `import os
from unfld import Client
from unfld.chat import user

client = Client(api_key=os.getenv("UNFLD_API_KEY"))
chat = client.chat.create(model="pulse-2")
chat.append(user("Forecast Q4 cash from live operations"))
print(chat.sample().content)`,
    },
  },
  {
    slug: "relay-ga",
    date: "Aug 12, 2026",
    title: "Relay is generally available",
    standfirst:
      "One API for Forge, Pulse, and the services around them. Usage-based, with a playground in every account.",
    body: [
      "Relay leaves private preview today. Developers get a single base URL, one key, and SDKs that match the way they already work.",
      "The first GA release covers text and structured APIs, webhooks, files, and live Pulse queries. Image and voice endpoints follow on the existing roadmap.",
      "Create a key in the Console and call api.unfld.com/v1. Docs are live at unfld.com/docs.",
    ],
    code: {
      filename: "relay.ts",
      content: `import { Unfld } from "@unfld/sdk";

const client = new Unfld({ apiKey: process.env.UNFLD_API_KEY });
const pulse = await client.pulse.query({
  prompt: "Show live pipeline versus target",
});
console.log(pulse.answer);`,
    },
  },
  {
    slug: "forge-ios",
    date: "Aug 4, 2026",
    title: "Forge apps on the App Store and Google Play",
    standfirst:
      "The products we own are now on iOS and Android — same accounts, same Relay backend, native clients.",
    body: [
      "Forge has always been web-first. Native clients were the missing surface. They ship today with biometric unlock, offline caches, and the same design language as the web products.",
      "Existing Forge accounts work immediately. No new sign-up.",
    ],
  },
  {
    slug: "build-mode",
    date: "Jul 28, 2026",
    title: "UNFLD Build on web and desktop",
    standfirst:
      "A coding agent and product-engineering system for complex work, now in the browser and on macOS.",
    body: [
      "Build is how we make UNFLD products. We opened it because the same harness is useful on any codebase.",
      "Install from the Download page, or run it in the browser. It works with any language, any repo, right now.",
    ],
  },
  {
    slug: "enterprise",
    date: "Jun 22, 2026",
    title: "UNFLD for Enterprise",
    standfirst:
      "SSO, data residency, dedicated throughput, and a named team — for organizations that need the whole stack.",
    body: [
      "Enterprise is the contract layer around products companies already use. Same Forge, Pulse, and Relay — with the controls a security review expects.",
      "Talk to sales if you need custom rate limits, a dedicated data plane, or volume pricing.",
    ],
  },
  {
    slug: "studio-system",
    date: "Jun 3, 2026",
    title: "Studio, our creative system",
    standfirst:
      "The identity, motion, and image stack we use on every UNFLD surface is now a product.",
    body: [
      "Studio is not an agency. It is the system that produces brand, interface, and generative media for products we operate — and, now, for a small number of partners.",
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
      "Owning the product is the other half of the story. FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus Psicossocial are ours to operate. The craft is the same. On these, the ownership is not someone else’s.",
    ],
  },
];

export const roles = [
  {
    id: "mts-pulse",
    title: "Member of Technical Staff — Pulse",
    team: "Intelligence",
    locations: ["São Paulo"],
    type: "Full-time",
  },
  {
    id: "eng-relay",
    title: "Software Engineer — Relay (APIs)",
    team: "Platform",
    locations: ["São Paulo"],
    type: "Full-time",
  },
  {
    id: "eng-build",
    title: "Software Engineer — Build",
    team: "Engineering",
    locations: ["São Paulo"],
    type: "Full-time",
  },
  {
    id: "design-studio",
    title: "Product Designer — Studio",
    team: "Design",
    locations: ["São Paulo"],
    type: "Full-time",
  },
  {
    id: "eng-owned",
    title: "Software Engineer — Owned products",
    team: "Apps",
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
  {
    id: "ios-forge",
    title: "iOS Engineer — Forge",
    team: "Apps",
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
    line: "UNFLD across sales, operations, finance, and engineering — with enterprise-grade controls.",
    body: "Deploy Forge apps, Pulse intelligence, and Relay APIs across the company. Seat management, SSO, and consolidated billing from day one.",
  },
  {
    slug: "government",
    name: "Government",
    line: "Products for the public mission — with the security, compliance, and deployment controls agencies require.",
    body: "Data residency, dedicated planes, and audit that stands up to a review. Built for ministries, cities, and national programs.",
  },
  {
    slug: "support",
    name: "Customer Support",
    line: "Reduce response times and resolution costs with products that handle voice, chat, and email.",
    body: "Forge support surfaces plus Pulse on top of your ticket history. The same quality bar we hold on our own apps.",
  },
  {
    slug: "legal",
    name: "Legal",
    line: "Accelerate contract review, research, and compliance analysis with systems that understand nuance.",
    body: "Pulse for legal operations, Relay for matter data, and counsel from a team that has sat through the audits.",
  },
  {
    slug: "security",
    name: "Security",
    line: "Analyze threats, triage alerts, and automate response at machine speed.",
    body: "Relay event streams into Pulse models trained on your telemetry. No training on your data unless you opt in.",
  },
] as const;

export const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    blurb: "Start with Forge web and the Relay playground.",
    cta: "Get started",
    href: "/console",
    features: [
      "Forge web apps",
      "Pulse Lite dashboards",
      "Relay playground",
      "Community support",
    ],
  },
  {
    name: "Studio",
    price: "$30",
    period: "/month",
    blurb: "The full product surface for independent teams.",
    cta: "Start Studio",
    href: "/console",
    features: [
      "Everything in Free",
      "Pulse 2",
      "Build on web and desktop",
      "Higher Relay limits",
      "Image generation in Studio",
      "Priority in the queue",
    ],
  },
  {
    name: "Company",
    price: "$100",
    period: "/seat /month",
    blurb: "Shared workspace, admin, and significantly higher usage.",
    cta: "Start Company",
    href: "/console",
    features: [
      "Everything in Studio",
      "Seat management",
      "SSO",
      "Consolidated billing",
      "SOC 2 (Type I & II)",
      "No training on your data",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    blurb: "Dedicated throughput, residency, and a named team.",
    cta: "Contact sales",
    href: "/contact",
    features: [
      "Everything in Company",
      "Custom rate limits",
      "Data residency",
      "Dedicated data plane",
      "Volume pricing",
      "Named account team",
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
