// Registered details checked against D16 (Receita, 10/11/2026) and D19 (CCM).
// Source: https://docs.unfld.com.br/Resumo.txt
export const SITE = {
  name: "UNFLD",
  url: "https://www.unfld.com.br",
  legal: "UNFOLDING THE FUTURE LTDA",
  trading: "UNFLD",
  cnpj: "62.855.761/0001-82",
  tagline: "Unfolding the future. One real system at a time.",
  email: "hello@unfld.com.br",
  registeredEmail: "admin@unfld.com.br",
  sales: "sales@unfld.com.br",
  security: "security@unfld.com.br",
  press: "press@unfld.com.br",
  careers: "careers@unfld.com.br",
  privacy: "privacy@unfld.com.br",
  legalEmail: "legal@unfld.com.br",
  aup: "aup@unfld.com.br",
  brand: "brand@unfld.com.br",
  dpo: "dpo@unfld.com.br",
  phone: "(43) 3422-8348",
  phoneHref: "+554334228348",
  whatsapp: "(53) 99995-4138",
  whatsappHref: "https://wa.link/03wpz4",
  whatsappE164: "+5553999954138",
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
    line1: "Avenida Brigadeiro Faria Lima, 1811",
    line2: "Sala 1119",
    district: "Jardim Paulistano",
    city: "São Paulo",
    region: "SP",
    postal: "01452-001",
    country: "Brazil",
  },
} as const;

export type NavLink = { label: string; to: string; external?: boolean };

export const headerNav: NavLink[] = [
  { label: "Products", to: "/products" },
  { label: "Build with us", to: "/build-with-us" },
  { label: "Company", to: "/company" },
  { label: "What's new?", to: "/blog" },
];

export type OwnedProduct = {
  slug: string;
  name: string;
  shortName: string;
  formalName?: string;
  href: string;
  kicker: string;
  status: "Live" | "Private deployment" | "Early access" | "Waitlist";
  explore: string;
  line: string;
  mission: string;
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
    slug: "dialogus",
    name: "Dialogus by UNFLD",
    shortName: "Dialogus",
    formalName: "Dialogus Psicossocial",
    href: "/dialogus",
    kicker: "Workplace health",
    status: "Live",
    explore: "Explore",
    line: "Psychosocial risk management built for NR-1.",
    mission: "Unfolding the future of workplace health.",
    title: "Unfolding the future",
    titleSecond: "of workplace health.",
    primary: "Open Dialogus",
    url: "https://www.dialoguspsicossocial.com.br",
    blurb:
      "Structured listening, assessment methods selected with qualified professionals, risk visibility, action planning, and evidence for continuous NR-1 management.",
    image: "/images/office.jpg",
    features: [
      {
        title: "Continuous NR-1 management",
        body: "Dialogus helps organizations integrate psychosocial risk into a documented, continuous occupational-risk process aligned with NR-1.",
      },
      {
        title: "Structured listening",
        body: "Lis, the Dialogus conversational assistant, conducts individual dialogues with confidentiality and methodological rigor.",
      },
      {
        title: "Structured assessment",
        body: "Structured assessment methods selected with qualified occupational-health professionals, tailored to organizational context and operational risk.",
      },
      {
        title: "Executive dashboards",
        body: "Aggregated analytics, risk criticality, and progress tracking with individual-level access limited according to the configured confidentiality model.",
      },
      {
        title: "Action planning",
        body: "Action plans that generate documented evidence to support PGR review, follow-up, and continuous improvement.",
      },
      {
        title: "Documented care",
        body: "Care becomes credible when risk is heard, understood, acted on, and revisited.",
      },
    ],
    quote: {
      kicker: "Dialogus",
      title: "Care becomes credible when risk is heard, understood, acted on, and revisited.",
      body: "Psychosocial risk management built for NR-1. Software and specialized accompaniment working together.",
    },
  },
  {
    slug: "oluart",
    name: "Oluart by UNFLD",
    shortName: "Oluart",
    href: "/oluart",
    kicker: "Drawing",
    status: "Live",
    explore: "Explore",
    line: "Draw on paper with augmented reality.",
    mission: "Unfolding the future of learning to draw.",
    title: "Unfolding the future",
    titleSecond: "of learning to draw.",
    primary: "Open Oluart",
    url: "https://www.oluart.com",
    blurb:
      "Oluart projects any image onto paper through the phone camera so people can trace, practice, and learn to draw. Transparent pricing, a usable free tier, and support in Portuguese.",
    image: "/images/relay.jpg",
    features: [
      {
        title: "AR projection on paper",
        body: "Point the camera at the page. Adjust opacity, zoom, and rotation, then trace the image in real space.",
      },
      {
        title: "Your photos and a growing library",
        body: "Upload a photo or choose from more than 800 templates — animals, characters, cars, nature, tattoos — with new references added weekly.",
      },
      {
        title: "Honest pricing",
        body: "Free to start, with full AR projection and fewer ads. Premium at R$29.90 a month, or a lifetime purchase at R$199. A three-day refund if it is not the right fit.",
      },
      {
        title: "Made by an artist",
        body: "Built in Brazil, for artists. Support answers in Portuguese. No weekly traps, no surprise charges.",
      },
      {
        title: "Offline when you need it",
        body: "Premium and lifetime plans download templates and tutorials for use without a signal.",
      },
      {
        title: "On iOS and Android",
        body: "Available on the App Store and Google Play. iPhone X or later on iOS 15.1+, and recent Android devices on Android 13+.",
      },
    ],
    quote: {
      kicker: "Oluart",
      title: "The price you see is the price you pay.",
      body: "Project an image onto paper and learn to draw. Oluart by UNFLD — transparent, Brazilian, and free to start.",
    },
  },
  {
    slug: "unifikar",
    name: "Unifikar by UNFLD",
    shortName: "Unifikar",
    href: "/unifikar",
    kicker: "Vehicle retail",
    status: "Early access",
    explore: "Explore",
    line: "A marketplace and commercial network for used vehicles.",
    mission: "Unfolding the future of used-vehicle retail.",
    title: "Unfolding the future",
    titleSecond: "of used-vehicle retail.",
    primary: "Open Unifikar",
    url: "https://www.unifikar.com",
    blurb:
      "Unifikar connects buyers to used vehicles from partner dealerships and private sellers, and gives stores a whitelabel showroom, a shared inventory network, and one place to manage leads.",
    image: "/images/infra.jpg",
    features: [
      {
        title: "A central marketplace",
        body: "Search used vehicles across partner stores, or list a vehicle with national reach and a clear path back to the seller.",
      },
      {
        title: "Whitelabel showrooms",
        body: "Each store gets a branded public vitrine — identity, domain, and inventory — without rebuilding a site from scratch.",
      },
      {
        title: "A commercial network",
        body: "Dealerships share stock, set a confidential floor price, and republish partner vehicles under an agreed policy.",
      },
      {
        title: "Leads in one place",
        body: "Interest from the marketplace and from each storefront arrives as a single inbox the team can assign and follow.",
      },
      {
        title: "Plans for the size of the lot",
        body: "Essencial, Profissional, and Rede — from a first storefront of 15 vehicles to multi-unit operations with centralized management.",
      },
      {
        title: "Built for the store floor",
        body: "Public price and confidential minimum stay apart. The lot, the partner, and the buyer each see what they are meant to see.",
      },
    ],
    quote: {
      kicker: "Unifikar",
      title: "Inventory should move through a network, not a single window.",
      body: "A marketplace for used vehicles and a commercial network for the stores that sell them. Unifikar by UNFLD.",
    },
  },
  {
  "slug": "telemedicina",
  "name": "Telemedicine by UNFLD",
  "shortName": "Telemedicine",
  "href": "/telemedicina",
  "kicker": "Telemedicine",
  "status": "Live",
  "explore": "Explore",
  "line": "Four brands. One care platform.",
  "mission": "Telemedicine by UNFLD",
  "title": "Health, closer.",
  "titleSecond": "To every routine.",
  "primary": "Find your brand",
  "blurb": "One UNFLD telemedicine and health-benefits platform, four audience-focused brands. Meet MedAgro, TaxiMed, SinistroMed, and Lux Health.",
  "image": "/images/telemedicina/medagro-1280.webp",
  "features": [
    {
      "title": "A doctor, online, 24/7",
      "body": "Medical consultations by video, accessible from a phone wherever there is an internet connection."
    },
    {
      "title": "Psychology and nutrition",
      "body": "Online consultations for emotional well-being and nutritional support."
    },
    {
      "title": "Care beyond the screen",
      "body": "Health appointment scheduling and an annual check-up."
    },
    {
      "title": "Support at the pharmacy",
      "body": "Discounts on medicines and a medication subsidy."
    }
  ],
  "quote": {
    "kicker": "Telemedicine",
    "title": "The same foundation of care.",
    "body": "The four clubs bring together the same seven benefits. The language, identity, and experience reflect each audience’s daily life."
  }
},
];

export type Customer = {
  name: string;
  note: string;
  workSlug?: string;
};

export const customers: readonly Customer[] = [
  { name: "Netflix", note: "Selected work", workSlug: "netflix-tudum-2020" },
  { name: "Embraer", note: "Selected work", workSlug: "embraer" },
  { name: "SporTV", note: "Selected work", workSlug: "sportv-album-de-campeao" },
  { name: "O Boticário", note: "Selected work", workSlug: "o-boticario-planeta-de-plastico" },
  { name: "Spotify", note: "Selected work", workSlug: "spotify-retrospectiva" },
  { name: "Omega", note: "Selected work", workSlug: "omega-luz-livre" },
  { name: "PUCPR", note: "Selected work", workSlug: "pucpr-multiversidade" },
  { name: "FLAGCX", note: "Selected work", workSlug: "neuronos" },
  { name: "MatchOne", note: "Selected work", workSlug: "matchone" },
  { name: "L’Oréal Paris", note: "Team experience" },
  { name: "Cartier", note: "Team experience" },
  { name: "Subvrsive", note: "Partner project · WPP" },
  { name: "Siemens GmbH", note: "Team experience" },
  { name: "Aircraft Philipp", note: "Team experience" },
  { name: "Polenghi", note: "Team experience" },
  { name: "IOHK", note: "Partner project · Input Output Group" },
];

export const telemedicineBrands = [
  {
    "slug": "medagro",
    "name": "MedAgro",
    "url": "https://www.medagro.com.br"
  },
  {
    "slug": "taximed",
    "name": "TaxiMed",
    "url": "https://www.taximed.com.br"
  },
  {
    "slug": "sinistromed",
    "name": "SinistroMed",
    "url": "https://www.sinistromed.com.br"
  },
  {
    "slug": "lux-health",
    "name": "Lux Health",
    "url": "https://www.luxhealth.com.br"
  }
] as const;

export const footer = {
  products: [
    { label: "All products", to: "/products" },
    { label: "Dialogus", to: "/dialogus" },
    { label: "Oluart", to: "/oluart" },
    { label: "Unifikar", to: "/unifikar" },
    { label: "Telemedicine", to: "/telemedicina" },
    { label: "Access", to: "/access" },
  ],
  buildWithUs: [
    { label: "Careers", to: "/careers" },
    { label: "Custom software", to: "/build-with-us" },
    { label: "How we work", to: "/how-we-work" },
    { label: "Enterprise", to: "/enterprise" },
    { label: "Security", to: "/security" },
    { label: "Contact", to: "/contact" },
  ],
  download: [
    { label: "Dialogus", to: "/dialogus" },
    { label: "Oluart", to: "/oluart" },
    { label: "Unifikar", to: "/unifikar" },
    { label: "Telemedicine", to: "/telemedicina" },
  ],
  solutions: [
    { label: "Small business", to: "/solutions/small-business" },
    { label: "Drawing", to: "/solutions/drawing" },
    { label: "Vehicle retail", to: "/solutions/vehicles" },
    { label: "Public missions", to: "/solutions/government" },
    { label: "Operations", to: "/solutions/operations" },
    { label: "Fiscal & risk", to: "/solutions/legal" },
    { label: "Security", to: "/security" },
  ],
  company: [
    { label: "About", to: "/company" },
    { label: "Selected work", to: "/work" },
    { label: "What's new?", to: "/blog" },
    { label: "Security", to: "/security" },
    { label: "Compliance", to: "/compliance" },
    { label: "Enterprise", to: "/enterprise" },
  ],
  legal: [
    { label: "Legal", to: "/legal" },
    { label: "Compliance", to: "/compliance" },
    { label: "Terms", to: "/legal/terms-of-service" },
    { label: "Privacy", to: "/legal/privacy-policy" },
    { label: "Cookies", to: "/legal/cookie-policy" },
    { label: "AUP", to: "/legal/acceptable-use-policy" },
    { label: "Brand", to: "/legal/brand-guidelines" },
  ],
} as const;

/** Footer legal-bar chip. Kept off `footer` so machinePages() still iterates link arrays. */
export const systemsStatus = {
  label: "All systems operational.",
  to: "/status",
} as const;

export const stats = [
  { value: "2019", label: "Experience rooted in" },
  { value: "4", label: "Products by UNFLD" },
  { value: "SP", label: "Headquarters · São Paulo" },
] as const;

export const homePrompts = [
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
] as const;

export const offices = [
  {
    city: "São Paulo",
    region: "Brazil",
    role: "Headquarters",
    detail: `${SITE.address.line1}, ${SITE.address.line2} · ${SITE.address.district}`,
    mapHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatAddress())}`,
  },
] as const;

export const values = [
  {
    n: "01",
    title: "Understand the real work.",
    body: "We begin with the people, constraints, and decisions already inside the operation. Technology comes after understanding.",
  },
  {
    n: "02",
    title: "Make progress visible.",
    body: "We ship in small, verifiable steps. Every release should reduce uncertainty or improve the work.",
  },
  {
    n: "03",
    title: "Stay responsible for the outcome.",
    body: "Delivery is not the finish line. We measure what changed, fix what did not, and keep earning the right to expand.",
  },
] as const;

export const timeline = [
  {
    date: "2019",
    title: "Experience rooted in 2019",
    body: "The team’s product-building history begins in 2019, shipping apps and systems across media, industry, luxury, agribusiness, and aviation.",
  },
  {
    date: "2021",
    title: "Complex operations",
    body: "Partnering directly with technical and operational teams to solve domain problems where off-the-shelf software falls short.",
  },
  {
    date: "2025",
    title: "UNFOLDING THE FUTURE LTDA",
    body: "On 23 September 2025, UNFOLDING THE FUTURE LTDA is incorporated in São Paulo (CNPJ 62.855.761/0001-82), trading as UNFLD, carrying prior experience into a new corporate structure.",
  },
  {
    date: "2026",
    title: "Products by UNFLD",
    body: "Dialogus, Oluart, and Unifikar advance across their respective stages, alongside custom systems built beside our partners.",
  },
] as const;

export const roles: readonly {
  id: string;
  title: string;
  team: string;
  locations: readonly string[];
  type: string;
}[] = [];

export const interview = [
  {
    n: "01",
    title: "Submit an introduction",
    body: "Share your background and examples of real work at careers@unfld.com.br. We review submissions directly.",
  },
  {
    n: "02",
    title: "Initial conversation",
    body: "A direct discussion to understand your background, interests, and how you approach complex problems.",
  },
  {
    n: "03",
    title: "Technical and domain review",
    body: "Deep dive into problem solving, system design, and practical execution with the team.",
  },
  {
    n: "04",
    title: "Offer & next steps",
    body: "Clear, transparent terms with defined scope, compensation, and expectations.",
  },
] as const;

export const solutions = [
  {
    slug: "hiring",
    name: "Hiring",
    audience: "Candidates seeking straightforward job placement and hiring teams needing verified candidates.",
    line: "A shorter path from profile to interview: clear profiles, faster conversations, less friction.",
    body: "We build custom hiring systems beside teams that need clear candidate profiles, practical evaluation steps, and direct paths to relevant conversations.",
    capabilities: [
      "Clear candidate profiles generated in minutes without complex formatting",
      "Direct communication pathways between hiring managers and applicants",
      "Reduced administrative friction for high-turnover operational hiring",
    ],
  },
  {
    slug: "small-business",
    name: "Small business",
    audience: "MEIs (microempreendedores individuais), microenterprises, and Brazilian SMB owners.",
    line: "Digital presence and fiscal routines handled through WhatsApp.",
    body: "We build custom digital systems for small businesses, connecting web presence, internal routines, and customer conversations around the operation.",
    capabilities: [
      "Web presence with custom domain support",
      "Custom systems for administrative routines",
      "Conversational workflows eliminating complex dashboard overhead",
    ],
  },
  {
    slug: "drawing",
    name: "Drawing",
    audience: "People learning to draw, art teachers, and artists who need a stable tracing reference on paper.",
    line: "Learn to draw by projecting a reference onto the page.",
    body: "Oluart uses the phone camera as an AR projector: choose a template or a personal photo, place the phone over the paper, and trace. Built for honest pricing and a calm drawing session — not a maze of weekly charges.",
    capabilities: [
      "Real-time AR projection with opacity, zoom, and rotation",
      "Personal photo upload and a weekly-growing template library",
      "Free tier, monthly Premium, and a one-time lifetime plan",
    ],
  },
  {
    slug: "vehicles",
    name: "Vehicle retail",
    audience: "Used-car dealerships, multi-store groups, and people looking for a used vehicle.",
    line: "A marketplace and a store network that share inventory, leads, and digital showrooms.",
    body: "Unifikar is a used-vehicle marketplace and a whitelabel commercial network. Buyers search partner lots. Stores publish their own vitrine, share stock under a protected floor price, and handle leads from the marketplace and the storefront in one place.",
    capabilities: [
      "National marketplace for used vehicles from partner stores and private sellers",
      "Whitelabel storefronts with custom domain and brand identity",
      "Shared inventory, confidential floor prices, and a unified lead inbox",
    ],
  },
  {
    slug: "workplace-health",
    name: "Workplace health",
    audience: "HR directors, SESMT leaders, occupational health coordinators, and legal compliance officers.",
    line: "Psychosocial risk management built for NR-1.",
    body: "Dialogus helps organizations integrate psychosocial risk into a documented, continuous occupational-risk process aligned with NR-1. Combines confidential conversational listening through Lis, structured assessments selected with qualified occupational-health professionals, aggregated risk dashboards, and action plans generating documented evidence.",
    capabilities: [
      "Continuous NR-1 alignment and documented PGR evidence",
      "Confidential conversational listening and structured risk mapping",
      "Actionable management dashboards with role-based access control",
    ],
  },
  {
    slug: "custom-systems",
    name: "Custom systems",
    audience: "Operations leaders, enterprise engineering heads, and executives facing bespoke operational bottlenecks.",
    line: "We design and ship custom systems beside organizations whose problems do not fit an off-the-shelf product.",
    body: "When off-the-shelf software falls short, UNFLD embeds beside your operational team. We discover real workflow constraints, design tailored web/mobile/conversational architecture, deploy in rapid verifiable iterations, and operate or execute a structured code and infrastructure handover.",
    capabilities: [
      "Field & operational workflow discovery by senior engineering teams",
      "Dedicated data planes, Brazilian regional hosting, and custom SLAs",
      "Full source code and infrastructure-as-code handover or ongoing operations",
    ],
  },
  {
    slug: "government",
    name: "Public missions",
    audience: "Public agency leaders, municipal secretariats, and state departments.",
    line: "Custom digital systems for public-service operations—with scope, hosting, access controls, and audit requirements defined in the contract.",
    body: "We deliver secure, auditable digital platforms tailored to public sector workflows, municipal operations, and regulatory monitoring. Infrastructure, data residency in Brazil, and access controls are explicitly governed by contract.",
    capabilities: [
      "Contract-defined infrastructure and Brazilian data residency",
      "Comprehensive audit logging and role-based administrative controls",
      "Structured documentation and verified knowledge transfer protocols",
    ],
  },
  {
    slug: "operations",
    name: "Operations",
    audience: "Supply chain managers, field service directors, and operations executives.",
    line: "Put software where the work actually happens—in the conversation, on the phone, and in the decisions managers need to make next.",
    body: "Operational efficiency happens when technology removes friction where the work is. From conversational fiscal routines to custom tracking systems, UNFLD builds systems that reflect real operational constraints.",
    capabilities: [
      "Resilient mobile and conversational interfaces",
      "Real-time status synchronization and exception alerts",
      "Traceable decision data connecting daily work to executive reporting",
    ],
  },
  {
    slug: "legal",
    name: "Fiscal & workplace operations",
    audience: "Corporate controllers, compliance officers, HR leaders, and legal operations teams.",
    line: "Software for documented fiscal and workplace-risk routines in Brazil.",
    body: "Brazilian regulatory environments require documented routines. Dialogus supports NR-1 psychosocial risk management. We also build custom systems for auditable operational records.",
    capabilities: [
      "Documented fiscal routines and automated draft validation",
      "Continuous NR-1 occupational risk integration and evidence generation",
      "Documented operational records designed to support review and audit",
    ],
  },
  {
    slug: "business",
    name: "Business",
    audience: "Small business owners and enterprise operators.",
    line: "Use a product already built for the problem—or build the system your operation uniquely requires.",
    body: "We build custom systems beside small businesses whose operation requires tailored workflows.",
    capabilities: [
      "WhatsApp-first workflows",
      "Product-specific capabilities",
      "Custom software options",
    ],
  },
  {
    slug: "support",
    name: "Operations",
    audience: "Operations teams and field leaders.",
    line: "Put software where the work actually happens—in the conversation, on the phone, and in the decisions managers need to make next.",
    body: "Put software where the work actually happens—in the conversation, on the phone, and in the decisions managers need to make next.",
    capabilities: [
      "Workflows that follow the operation",
      "Real-time communication channels",
      "Management decision data",
    ],
  },
  {
    slug: "security",
    name: "Security & controls",
    audience: "Security officers and enterprise architects.",
    line: "Security requirements are defined against the product, data, users, and deployment—not copied from a generic checklist.",
    body: "Security requirements are defined against the product, data, users, and deployment—not copied from a generic checklist. Ask for the controls and evidence available for your scope.",
    capabilities: [
      "Product-specific controls",
      "Data isolation options",
      "Clear subprocessor boundaries",
    ],
  },
] as const;

export type SelectedWork = {
  slug: string;
  client: string;
  title: string;
  year: string;
  field: string;
  form: string;
  line: string;
  lede: string;
  story: readonly string[];
  outcome: string;
  image: string;
  gallery: readonly string[];
  film?: { id: string; hash?: string; title: string };
  size: "full" | "half";
  featured?: boolean;
};

export const selectedWork: readonly SelectedWork[] = [
  {
    slug: "netflix-tudum-2020",
    client: "Netflix",
    title: "Almanaque Tudum",
    year: "2020",
    field: "Entertainment",
    form: "Web experience",
    size: "full",
    featured: true,
    line: "A digital almanac of slang, series, and the sound of a logo.",
    lede: "Netflix asked for a surface that treated Tudum as language — internet slang mixed with the films and series people already loved. We built a web almanac: bold type, sharp humor, and a system worth wandering through.",
    story: [
      "Tudum is a sound. The brief was to make it a place.",
      "The almanac gathered popular slang and the catalog into one visual object — graphic, comic, and precise. Something a fan could wander through rather than scan.",
      "We built an experience that felt like the platform itself: dense, referential, and light on its feet. Fandom, held as language.",
    ],
    outcome:
      "A surface fans could explore. Not a campaign page. An object.",
    image: "/images/work/tudum-2020-01.png",
    gallery: [
      "/images/work/tudum-2020-hero.png",
      "/images/work/tudum-2020-03.png",
      "/images/work/tudum-2020-04.png",
      "/images/work/tudum-2020-05.png",
      "/images/work/tudum-2020-02.png",
    ],
    film: { id: "1010713650", hash: "7fdafb68bc", title: "Almanaque Tudum 2020" },
  },
  {
    slug: "embraer",
    client: "Embraer",
    title: "Corporate portal",
    year: "2021",
    field: "Aviation",
    form: "Corporate site",
    size: "half",
    featured: true,
    line: "Aircraft and technology, shown so the next click feels inevitable.",
    lede: "A corporate portal for one of the world’s aerospace companies. Photography and film in place of brochure language. Serious work, held lightly.",
    story: [
      "Aerospace is serious. The portal still had to invite the next click.",
      "We built Embraer’s corporate surface around the aircraft and the technologies behind them, using photography and film rather than catalog copy. Navigation as a flight path: clear, quiet, exact.",
      "Heavy industry does not need heavy chrome. The work was to make a complex company readable without making it small.",
    ],
    outcome: "A house of aircraft that could be walked, not merely listed.",
    image: "/images/work/embraer-hero.png",
    gallery: [
      "/images/work/embraer-01.png",
      "/images/work/embraer-02.png",
    ],
    film: { id: "1012551597", hash: "8a3db3ea9d", title: "Embraer" },
  },
  {
    slug: "o-boticario-planeta-de-plastico",
    client: "O Boticário",
    title: "Planeta de Plástico",
    year: "2021",
    field: "Environment",
    form: "Interactive experience",
    size: "half",
    featured: true,
    line: "A statistic that could be walked through.",
    lede: "O Boticário needed plastic waste to be felt, not merely cited. We built an interactive reading of familiar rooms buried in waste — data made spatial. At the end, a household calculator. On mobile, the camera entered the story.",
    story: [
      "The numbers on plastic waste are known. They do not move people until they occupy a room.",
      "We built 3D environments of ordinary life, covered. A kitchen, a street, a planet assembled from fragments. Data became space. At the close of the experience, a calculator for a household’s yearly plastic.",
      "On mobile, the phone’s camera became a second door into the same argument. The brief was not to decorate a cause. It was to make the scale undeniable.",
    ],
    outcome: "Waste, made spatial. A cause with a room you could stand in.",
    image: "/images/work/plastic-hero.png",
    gallery: [
      "/images/work/plastic-01.png",
      "/images/work/plastic-02.png",
      "/images/work/plastic-03.png",
      "/images/work/plastic-04.png",
    ],
    film: { id: "686120248", title: "Planeta de Plástico" },
  },
  {
    slug: "sportv-album-de-campeao",
    client: "SporTV",
    title: "Álbum de Campeão",
    year: "2021",
    field: "Sport",
    form: "Mobile app",
    size: "full",
    line: "Tokyo 2020, held in the hand.",
    lede: "A virtual sticker album of Brazilian athletes at the Tokyo Olympics and Paralympics. Collecting became the event. A live leaderboard of collectors. Daily presence on Ohayo Tokyo.",
    story: [
      "The Games asked for a way to hold them when you were not in the stadium.",
      "With SporTV we built Álbum de Campeão: a virtual sticker album covering most of the Brazilian delegation across the Olympics and Paralympics. Packs, trades, athlete pages, a live ranking of collectors.",
      "Collecting became its own event. The album lived on social channels and received daily presence on Ohayo Tokyo, the program built to follow the Games. Sport, as something you could keep.",
    ],
    outcome: "A second stadium, in the pocket. Athletes as cards people actually hunted.",
    image: "/images/work/album-hero.png",
    gallery: [
      "/images/work/album-01.png",
      "/images/work/album-02.png",
      "/images/work/album-03.png",
    ],
    film: { id: "708760172", hash: "4cab3966ce", title: "Álbum de Campeão" },
  },
  {
    slug: "spotify-retrospectiva",
    client: "Spotify",
    title: "Retrospectiva",
    year: "2021",
    field: "Music",
    form: "Campaign site",
    size: "half",
    line: "A year of listening, made tangible.",
    lede: "When Spotify Wrapped 2021 arrived, the top listeners of three Brazilian artists could claim a shirt of the artist they had lived with all year. We built the page that made that claim feel personal.",
    story: [
      "Wrapped is a mirror. This was a gift behind it.",
      "The top listeners of Luísa Sonza, Juliette, and Matuê were invited to a dedicated page to claim a shirt of the artist they had spent the year with. We built that surface: follow the steps, take the gift, leave without theatre.",
      "Loyalty is usually a metric. Here it became an object you could wear.",
    ],
    outcome: "A claim that felt like recognition, not a form.",
    image: "/images/work/spotify-01.png",
    gallery: [
      "/images/work/spotify-hero.png",
      "/images/work/spotify-02.png",
      "/images/work/spotify-03.png",
      "/images/work/spotify-04.png",
    ],
    film: { id: "1010707046", hash: "7d25ce0886", title: "Retrospectiva" },
  },
  {
    slug: "netflix-tudum-2021",
    client: "Netflix",
    title: "Almanaque Tudum",
    year: "2021",
    field: "Entertainment",
    form: "Web and mobile",
    size: "half",
    line: "The print object, opened onto the screen — then widened.",
    lede: "The second year brought the physical almanac onto web and mobile, then added an audiobook, a fan-club battle, soundtrack remixes across five genres, and a path into Netflix’s global event.",
    story: [
      "The almanac had been an object people wanted to hold. The work was to bring it onto screens without flattening it.",
      "We built the 2021 edition for web and mobile, then widened it: an audiobook so more people could enter; a fan-club battle for the most loved series; remixes of iconic soundtracks across five genres, carried into social challenges; a path into Netflix’s global event.",
      "The joke stayed sharp. Slang stayed native. The surface got larger without losing the tone the first year had earned.",
    ],
    outcome: "A second year that grew in reach without growing loud.",
    image: "/images/work/tudum-2021-01.png",
    gallery: [
      "/images/work/tudum-2021-hero.png",
      "/images/work/tudum-2021-02.png",
      "/images/work/tudum-2021-03.png",
    ],
    film: { id: "665731293", hash: "ae60ecfd26", title: "Almanaque Tudum 2021" },
  },
  {
    slug: "omega-luz-livre",
    client: "Omega",
    title: "Luz Livre",
    year: "2022",
    field: "Energy",
    form: "Movement site",
    size: "full",
    featured: true,
    line: "The right to choose clean power, argued in public.",
    lede: "A public argument for opening the free energy market to every Brazilian. Clean power, a simpler bill, the right to choose. Software in service of a choice that should exist.",
    story: [
      "The free energy market was still closed to most Brazilians. The work was not a product page. It was a movement.",
      "Luz Livre made the case for opening that market: clean, affordable, simpler electricity, chosen rather than assigned. We built the surface that carried the argument — clear enough to join, exact enough to trust.",
      "Energy policy is usually written for specialists. This had to be written for the people who pay the bill.",
    ],
    outcome: "A public argument with a door. Choice, given a place to stand.",
    image: "/images/work/luzlivre-hero.png",
    gallery: [
      "/images/work/luzlivre-01.png",
      "/images/work/luzlivre-02.png",
      "/images/work/luzlivre-03.png",
      "/images/work/luzlivre-04.png",
    ],
    film: { id: "1010764833", hash: "8b989a72ec", title: "Luz Livre" },
  },
  {
    slug: "pucpr-multiversidade",
    client: "PUCPR",
    title: "Multiversidade",
    year: "2021",
    field: "Education",
    form: "University portal",
    size: "half",
    line: "The decision to study somewhere, given a door.",
    lede: "The university’s vestibular as a portal: undergraduate programs, the 4D degrees, and a path to exam results. One surface for the decision to study there.",
    story: [
      "Choosing a university is a sequence of unanswered questions. The portal had to hold them without becoming a brochure.",
      "Multiversidade gathered undergraduate programs — including the 4D degrees — and a path to vestibular results on one surface. Prospective students could see the offer and, later, see themselves in it.",
      "Education marketing often speaks at the applicant. This had to speak with them: a place you could actually enter.",
    ],
    outcome: "A vestibular that felt like an invitation, not a funnel.",
    image: "/images/work/pucpr-hero.png",
    gallery: [
      "/images/work/pucpr-01.png",
      "/images/work/pucpr-03.png",
      "/images/work/pucpr-02.png",
      "/images/work/pucpr-04.png",
    ],
    film: { id: "1010749228", title: "Multiversidade" },
  },
  {
    slug: "sportv-doe-gols",
    client: "SporTV",
    title: "Doe Gols",
    year: "2020",
    field: "Sport",
    form: "Campaign site",
    size: "half",
    line: "Each goal became three pairs of sneakers.",
    lede: "A hotsite for SporTV that turned every goal in the Brazilian Série A into three pairs of sneakers, given to institutions across Brazil — with Topper and Fundação Abrinq.",
    story: [
      "A championship produces goals. This one also produced shoes.",
      "With SporTV, Topper, and Fundação Abrinq, we built a public ledger for the Brazilian Série A: each goal scored became three pairs of sneakers, given to institutions across the country. The site held the count in the open — goals on one side, pairs on the other.",
      "Sport as a mechanism, not a slogan. The excitement of the round, converted without being diluted.",
    ],
    outcome: "A scoreboard that counted gifts as clearly as it counted goals.",
    image: "/images/work/doegols-02.png",
    gallery: [
      "/images/work/doegols-hero.png",
      "/images/work/doegols-01.png",
      "/images/work/doegols-03.png",
      "/images/work/doegols-04.png",
    ],
    film: { id: "397876050", title: "Doe Gols" },
  },
  {
    slug: "matchone",
    client: "MatchOne",
    title: "MatchOne",
    year: "2021",
    field: "Hiring",
    form: "Platform",
    size: "half",
    line: "Roles and people, matched without a form factory.",
    lede: "A hiring platform that connects candidates and companies without turning either side into paperwork. Apply. Evaluate. Decide.",
    story: [
      "Hiring still asks too much of both sides before a real conversation.",
      "MatchOne is a platform for open roles and the people who might fill them. Candidates apply without a maze. Companies evaluate without drowning in files. Matching does the quiet work in between.",
    ],
    outcome: "A shorter path from opening to decision.",
    image: "/images/work/matchone-02.png",
    gallery: [
      "/images/work/matchone-hero.png",
      "/images/work/matchone-01.png",
      "/images/work/matchone-03.png",
      "/images/work/matchone-04.png",
    ],
  },
  {
    slug: "neuronos",
    client: "FLAGCX",
    title: "NeuronOS",
    year: "2021",
    field: "Finance",
    form: "Operations platform",
    size: "half",
    line: "Company finance as a structure, not a pile of files.",
    lede: "A financial control platform built with FLAGCX: chart of accounts, company records, payments, users. Structure for money as it actually moves.",
    story: [
      "Company finance is a structure, or it is a mess.",
      "With FLAGCX we built NeuronOS — a control plane for how money is recorded and released. Chart of accounts. Company registrations. Users and permissions. Payments, visible.",
      "The interface is quiet on purpose. Finance does not need theatre. It needs a ledger people can trust, and a path from record to payment that does not lose the thread.",
    ],
    outcome: "Control, made visible. Accuracy as an operating habit.",
    image: "/images/work/neuron-01.png",
    gallery: [
      "/images/work/neuron-hero.png",
      "/images/work/neuron-02.png",
      "/images/work/neuron-03.png",
    ],
  },
];

export function getWork(slug: string) {
  return selectedWork.find((w) => w.slug === slug);
}

export function featuredWork() {
  return selectedWork.filter((w) => w.featured);
}

export function workNeighbors(slug: string) {
  const i = selectedWork.findIndex((w) => w.slug === slug);
  if (i < 0) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? selectedWork[i - 1] : undefined,
    next: i < selectedWork.length - 1 ? selectedWork[i + 1] : undefined,
  };
}

export function workRows(items: readonly SelectedWork[] = selectedWork) {
  const rows: Array<SelectedWork | SelectedWork[]> = [];
  let buffer: SelectedWork[] = [];
  for (const item of items) {
    if (item.size === "full") {
      if (buffer.length) {
        rows.push(buffer);
        buffer = [];
      }
      rows.push(item);
    } else {
      buffer.push(item);
      if (buffer.length === 2) {
        rows.push(buffer);
        buffer = [];
      }
    }
  }
  if (buffer.length) rows.push(buffer);
  return rows;
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
  return `${SITE.legal}, ${formatAddress()}. CNPJ ${SITE.cnpj}. ${SITE.phone}. WhatsApp Business ${SITE.whatsapp}. ${SITE.registeredEmail}.`;
}
