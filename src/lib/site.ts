export const SITE = {
  name: "UNFLD",
  url: "https://unfld.com",
  legal: "UNFOLDING THE FUTURE LTDA",
  trading: "UNFLD",
  cnpj: "62.855.761/0001-82",
  tagline: "Unfolding the future. One real system at a time.",
  email: "hello@unfld.com.br",
  registeredEmail: "admin@unfolding.com.br",
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
  { label: "Build with us", to: "/build-with-us" },
  { label: "Company", to: "/company" },
  { label: "News", to: "/news" },
  { label: "Pricing", to: "/pricing" },
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
    slug: "fcr",
    name: "FCR by UNFLD",
    shortName: "FCR",
    formalName: "Ferramenta de Coleta",
    href: "/fcr",
    kicker: "Agronomy",
    status: "Private deployment",
    explore: "Explore",
    line: "Field intelligence for agronomy teams.",
    mission: "Unfolding the future of agronomy.",
    title: "FCR by UNFLD",
    titleSecond: "Unfolding the future of agronomy.",
    primary: "App Store",
    url: "https://apps.apple.com/br/app/fcr/id6461211731",
    blurb:
      "FCR is field intelligence for agronomy teams: capture evidence offline, synchronize operations, turn agronomic data into recommendations, and give managers a traceable view of what happens in the field. Built and evolved with Timac Agro.",
    image: "/images/pulse.jpg",
    features: [
      {
        title: "Field intelligence",
        body: "Work from property and crop context through plots, collections, soil data, recommendations, approvals, and producer-ready reports—without breaking when connectivity disappears.",
      },
      {
        title: "Field first",
        body: "Capture technical results offline. Sync when the signal returns. The report should not wait on coverage.",
      },
      {
        title: "Evolved with Timac Agro",
        body: "Built by UNFLD, evolved with Timac Agro. The brief came from agronomists. The system is how we answered it.",
      },
      {
        title: "For agronomy teams",
        body: "Not a generic field form. The cadence, context, and recommendations match how agronomy teams actually work in the plot.",
      },
      {
        title: "Reports that drive decisions",
        body: "Field evidence becomes technical guidance, customer-ready reporting, commercial opportunity, and management data. Collection is the beginning, not the product.",
      },
      {
        title: "Built by UNFLD",
        body: "Built by UNFLD, evolved with Timac Agro. We design, ship, and operate the platform together.",
      },
    ],
    quote: {
      kicker: "FCR",
      title: "The plot is not a spreadsheet.",
      body: "Field intelligence for agronomy teams. Built by UNFLD, evolved with Timac Agro.",
    },
  },
  {
    slug: "sitecreator",
    name: "SiteCreator by UNFLD",
    shortName: "SiteCreator",
    href: "/sitecreator",
    kicker: "Digital presence",
    status: "Live",
    explore: "Explore",
    line: "Your business online in minutes, through WhatsApp.",
    mission: "Unfolding the future of small business online.",
    title: "Unfolding the future",
    titleSecond: "of small business online.",
    primary: "Open SiteCreator",
    url: "https://www.sitecreator.com.br",
    blurb:
      "Send your CNPJ. SiteCreator gathers the public business information you approve, prepares the first version, and publishes a real website with hosting, SSL, and a direct path back to WhatsApp.",
    image: "/images/studio.jpg",
    features: [
      {
        title: "WhatsApp is the entry point",
        body: "The number authenticates. No password, no complicated admin panel. Open WhatsApp and start.",
      },
      {
        title: "Send the CNPJ",
        body: "SiteCreator gathers the public business information you approve, preparing a structured presence tailored to your business.",
      },
      {
        title: "Online in minutes",
        body: "Your first version can be online in minutes with hosting, SSL, and a direct path back to WhatsApp.",
      },
      {
        title: "Free to start",
        body: "A real website with hosting, free subdomain, WhatsApp button, and updates via chat. Custom domain from R$49 / month.",
      },
      {
        title: "Update through chat",
        body: "New hours, new photos, new services: send a message. The site stays fresh without agency overhead.",
      },
      {
        title: "For MEI and small business",
        body: "Tailored for bakeries, salons, workshops, clinics, and independent operators across Brazil.",
      },
    ],
    quote: {
      kicker: "SiteCreator",
      title: "Not every site needs an agency.",
      body: "Your business online in minutes, through WhatsApp. That is SiteCreator by UNFLD.",
    },
  },
  {
    slug: "doutor-fiscal",
    name: "Doutor Fiscal by UNFLD",
    shortName: "Doutor Fiscal",
    href: "/doutor-fiscal",
    kicker: "Fiscal operations",
    status: "Waitlist",
    explore: "Explore",
    line: "Fiscal routines handled through WhatsApp.",
    mission: "Unfolding the future of fiscal operations.",
    title: "Unfolding the future",
    titleSecond: "of fiscal operations.",
    primary: "Open Doutor Fiscal",
    url: "https://www.doutorfiscal.com",
    blurb:
      "A WhatsApp-first fiscal operations service for MEIs and small businesses, combining guided workflows, automation, and human review where the work requires it.",
    image: "/images/build.jpg",
    features: [
      {
        title: "WhatsApp first",
        body: "The number that calls is the company. Guided workflows, audio, text, or document uploads—the product asks only for what is missing.",
      },
      {
        title: "Structured issuance",
        body: "It turns the request into a structured draft, validates the required data, applies the configured fiscal rules, and returns the issued document when the transaction is eligible.",
      },
      {
        title: "A fiscal inbox",
        body: "Each company gets a dedicated fiscal inbox that organizes invoices, extracts details, and notifies you directly on WhatsApp.",
      },
      {
        title: "Frictionless routines",
        body: "Issuing a routine invoice should not interrupt the business day. Streamlined workflows keep your focus on your customers.",
      },
      {
        title: "Waitlist pricing",
        body: "MEI from R$59 / month. Micro from R$159. Small company from R$349. Cancel anytime in WhatsApp.",
      },
      {
        title: "Made for daily operations",
        body: "Doutor Fiscal manages routine issuance and fiscal organisation with clarity and precision.",
      },
    ],
    quote: {
      kicker: "Doutor Fiscal",
      title: "Issuing a routine invoice should not interrupt the business day.",
      body: "Fiscal routines that start—and finish—on WhatsApp. doutorfiscal.com — waitlist open.",
    },
  },
  {
    slug: "queravaga",
    name: "Queravaga by UNFLD",
    shortName: "Queravaga",
    href: "/queravaga",
    kicker: "Hiring",
    status: "Early access",
    explore: "Explore",
    line: "A shorter path from profile to interview.",
    mission: "Unfolding the future of hiring.",
    title: "Unfolding the future",
    titleSecond: "of hiring.",
    primary: "Open Queravaga",
    url: "https://www.queravaga.com",
    blurb:
      "Queravaga helps people present their experience clearly and helps hiring teams find candidates who are ready for a real conversation—without turning either side into a form-filling machine.",
    image: "/images/forge.jpg",
    features: [
      {
        title: "A profile, ready",
        body: "Present your experience clearly and concisely without navigating complex forms or endless formatting.",
      },
      {
        title: "A shorter path to interviews",
        body: "The product shortens the path between a credible profile and a relevant interview.",
      },
      {
        title: "Fast and respectful",
        body: "Speed with dignity: create your profile in minutes and connect with opportunities quickly.",
      },
      {
        title: "Two sides",
        body: "Built for candidates ready to work and hiring teams looking for motivated people.",
      },
      {
        title: "Early access",
        body: "Launched in August 2026 and now evolving with its first candidates and hiring teams.",
      },
      {
        title: "Direct connection",
        body: "Shortening the distance between talent and real work.",
      },
    ],
    quote: {
      kicker: "Queravaga",
      title: "A shorter path from profile to interview.",
      body: "Queravaga is UNFLD unfolding the future of hiring: clear profiles, faster conversations, and less friction.",
    },
  },
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
      "Structured listening, validated assessment methods, risk visibility, action planning, and evidence for continuous NR-1 management.",
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
        title: "Validated assessment",
        body: "Structured questionnaires and assessment methods tailored to organizational context and operational risk.",
      },
      {
        title: "Executive dashboards",
        body: "Aggregated analytics, risk criticality, and progress tracking while maintaining complete individual privacy.",
      },
      {
        title: "Action planning",
        body: "Preventive and corrective programs aligned with risk levels, generating audit-ready documentation for PGR.",
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
];

export type Customer = {
  name: string;
  note: string;
  workSlug?: string;
};

export const customers: readonly Customer[] = [
  { name: "Timac Agro", note: "Principal partnership" },
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

export const footer = {
  products: [
    { label: "All products", to: "/products" },
    { label: "FCR", to: "/fcr" },
    { label: "SiteCreator", to: "/sitecreator" },
    { label: "Doutor Fiscal", to: "/doutor-fiscal" },
    { label: "Queravaga", to: "/queravaga" },
    { label: "Dialogus", to: "/dialogus" },
  ],
  access: [
    { label: "FCR", to: "/fcr" },
    { label: "SiteCreator", to: "/sitecreator" },
    { label: "Doutor Fiscal", to: "/doutor-fiscal" },
    { label: "Queravaga", to: "/queravaga" },
    { label: "Dialogus", to: "/dialogus" },
  ],
  buildWithUs: [
    { label: "Custom software", to: "/build-with-us" },
    { label: "How we work", to: "/how-we-work" },
    { label: "Enterprise", to: "/enterprise" },
    { label: "Security", to: "/security" },
  ],
  // Retained alias for backward compatibility
  developers: [
    { label: "Custom software", to: "/build-with-us" },
    { label: "How we work", to: "/how-we-work" },
    { label: "Enterprise", to: "/enterprise" },
    { label: "Security", to: "/security" },
  ],
  download: [
    { label: "FCR", to: "/fcr" },
    { label: "SiteCreator", to: "/sitecreator" },
    { label: "Doutor Fiscal", to: "/doutor-fiscal" },
    { label: "Queravaga", to: "/queravaga" },
    { label: "Dialogus", to: "/dialogus" },
  ],
  solutions: [
    { label: "Small business", to: "/solutions/business" },
    { label: "Public missions", to: "/solutions/government" },
    { label: "Operations", to: "/solutions/operations" },
    { label: "Fiscal & risk", to: "/solutions/legal" },
    { label: "Security", to: "/solutions/security" },
  ],
  company: [
    { label: "About", to: "/company" },
    { label: "Selected work", to: "/work" },
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
  { value: "2019", label: "Experience rooted in" },
  { value: "5", label: "Products by UNFLD" },
  { value: "SP", label: "Headquarters · São Paulo" },
] as const;

export const homePrompts = [
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
    body: "FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus advance across their respective stages, alongside custom systems built beside our partners.",
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
    title: "Queravaga begins shortening the path to work",
    standfirst:
      "A shorter path from profile to interview — for people looking for work and teams ready to hire.",
    body: [
      "Queravaga is UNFLD unfolding the future of hiring: a clearer profile for candidates, a faster route to relevant conversations, and less friction for teams ready to hire.",
      "The promise is simple: present experience clearly in minutes without bureaucracy or complex formatting rituals.",
      "Launched in August 2026 and now evolving with its first candidates and hiring teams at queravaga.com.",
    ],
  },
  {
    slug: "the-unfold",
    date: "Sep 23, 2025",
    title: "UNFLD, UNFOLDING THE FUTURE",
    standfirst:
      "UNFLD is short for UNFOLDING THE FUTURE. We turn what should exist next into something people can use now.",
    body: [
      "UNFLD is short for UNFOLDING THE FUTURE—and that is more than the legal name. It is the job: find consequential work that should be simpler, build the system, and keep improving it in use.",
      "Our team’s experience spans products and projects delivered directly, through prior companies, and alongside partners across agriculture, media, industry, and enterprise operations.",
      "FCR unfolds the future of agronomy. SiteCreator brings small businesses online. Doutor Fiscal simplifies fiscal operations. Queravaga shortens the path to work. Dialogus makes workplace risk visible and actionable. Different markets; one operating belief.",
    ],
  },
];

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
    slug: "agronomy",
    name: "Agronomy",
    line: "Field intelligence for agronomy teams: capture evidence offline and turn field data into recommendations.",
    body: "Work from property and crop context through plots, collections, soil data, recommendations, approvals, and producer-ready reports—without breaking when connectivity disappears.",
    capabilities: [
      "Offline collection in the field",
      "Traceable management workflows",
      "Agronomic recommendation engine",
    ],
  },
  {
    slug: "hiring",
    name: "Hiring",
    line: "A shorter path from profile to interview: clear profiles, faster conversations, less friction.",
    body: "Queravaga helps candidates present their experience clearly and helps hiring teams find candidates ready for real conversations—without turning either side into a form-filling machine.",
    capabilities: [
      "Clear candidate profiles",
      "Direct WhatsApp & web workflows",
      "Reduced hiring friction",
    ],
  },
  {
    slug: "small-business",
    name: "Small business",
    line: "Digital presence and fiscal routines handled through WhatsApp.",
    body: "SiteCreator and Doutor Fiscal provide WhatsApp-first presence and fiscal workflows for MEIs and small businesses. Your business online in minutes and routine fiscal obligations simplified.",
    capabilities: [
      "WhatsApp-first interface",
      "Instant digital presence",
      "Guided fiscal routines",
    ],
  },
  {
    slug: "workplace-health",
    name: "Workplace health",
    line: "Psychosocial risk management built for NR-1.",
    body: "Dialogus helps organizations integrate psychosocial risk into a documented, continuous occupational-risk process aligned with NR-1 with structured listening, risk visibility, and action planning.",
    capabilities: [
      "Continuous NR-1 alignment",
      "Structured listening & assessment",
      "Actionable management dashboards",
    ],
  },
  {
    slug: "custom-systems",
    name: "Custom systems",
    line: "We design and ship custom systems beside organizations whose problems do not fit an off-the-shelf product.",
    body: "Custom digital systems designed around your team's real constraints, workflows, and integrations—built with accountability and maintained in use.",
    capabilities: [
      "Scoped discovery & architecture",
      "Dedicated operational workflows",
      "Ongoing evolution & support",
    ],
  },
  {
    slug: "business",
    name: "Business",
    line: "Use a product already built for the problem—or build the system your operation uniquely requires.",
    body: "SiteCreator and Doutor Fiscal provide WhatsApp-first presence and fiscal workflows for MEIs and small businesses. Custom systems when your operation requires tailored workflows.",
    capabilities: [
      "WhatsApp-first workflows",
      "Product-specific capabilities",
      "Custom software options",
    ],
  },
  {
    slug: "government",
    name: "Public missions",
    line: "Custom digital systems for public-service operations—with scope, hosting, access controls, and audit requirements defined in the contract.",
    body: "Custom digital systems for public-service operations—with scope, hosting, access controls, and audit requirements defined in the contract.",
    capabilities: [
      "Contract-defined hosting",
      "Audit trail & access controls",
      "Defined data residency",
    ],
  },
  {
    slug: "operations",
    name: "Operations",
    line: "Put software where the work actually happens—in the field, in the conversation, and in the decisions managers need to make next.",
    body: "Put software where the work actually happens—in the field, in the conversation, and in the decisions managers need to make next.",
    capabilities: [
      "Field-level offline workflows",
      "Real-time communication channels",
      "Management decision data",
    ],
  },
  {
    slug: "support",
    name: "Operations",
    line: "Put software where the work actually happens—in the field, in the conversation, and in the decisions managers need to make next.",
    body: "Put software where the work actually happens—in the field, in the conversation, and in the decisions managers need to make next.",
    capabilities: [
      "Field-level offline workflows",
      "Real-time communication channels",
      "Management decision data",
    ],
  },
  {
    slug: "legal",
    name: "Fiscal & workplace risk",
    line: "Software for documented fiscal and workplace-risk routines in Brazil.",
    body: "Software for documented fiscal and workplace-risk routines in Brazil. Doutor Fiscal for invoice issuance and fiscal organization. Dialogus for continuous NR-1 occupational risk documentation.",
    capabilities: [
      "Documented fiscal workflows",
      "NR-1 process integration",
      "Auditable compliance records",
    ],
  },
  {
    slug: "security",
    name: "Security & controls",
    line: "Security requirements are defined against the product, data, users, and deployment—not copied from a generic checklist.",
    body: "Security requirements are defined against the product, data, users, and deployment—not copied from a generic checklist. Ask for the controls and evidence available for your scope.",
    capabilities: [
      "Product-specific controls",
      "Data isolation options",
      "Clear subprocessor boundaries",
    ],
  },
] as const;

export const plans = [
  {
    name: "SiteCreator",
    price: "Free",
    period: " · R$49 / domain",
    blurb: "Your business online in minutes, through WhatsApp. For MEI and small business.",
    cta: "Open SiteCreator",
    href: "https://www.sitecreator.com.br",
    external: true,
    features: [
      "WhatsApp as entry point",
      "CNPJ-based setup",
      "Free *.live.sitecreator.com.br",
      "Custom domain from R$49 / month",
    ],
  },
  {
    name: "Doutor Fiscal",
    price: "R$59",
    period: "/month",
    blurb: "Waitlist open. Fiscal routines handled through WhatsApp, for MEI and small businesses.",
    cta: "Open Doutor Fiscal",
    href: "https://www.doutorfiscal.com",
    external: true,
    features: [
      "Routine issuance on WhatsApp",
      "Dedicated fiscal inbox",
      "MEI R$59 · Micro R$159 · Small R$349",
      "Cancel anytime in WhatsApp",
    ],
  },
  {
    name: "Dialogus",
    price: "Plans",
    period: "",
    blurb: "Psychosocial risk management built for NR-1. Essencial, Avançar, and Integral plans.",
    cta: "Open Dialogus",
    href: "https://www.dialoguspsicossocial.com.br",
    external: true,
    features: [
      "Structured listening with Lis",
      "Validated assessment methods",
      "Executive dashboards and action plans",
      "Continuous NR-1 documentation",
    ],
  },
  {
    name: "Queravaga",
    price: "Early access",
    period: "",
    blurb: "A shorter path from profile to interview. For candidates and hiring teams.",
    cta: "Open Queravaga",
    href: "https://www.queravaga.com",
    external: true,
    features: [
      "Clear profile in minutes",
      "Direct candidate-to-team matching",
      "Candidate and hiring team portals",
      "Free early access registration",
    ],
  },
  {
    name: "Custom",
    price: "Talk to UNFLD",
    period: "",
    blurb: "Custom systems built beside your team. Scoped by conversation.",
    cta: "Talk to UNFLD",
    href: "/contact",
    external: false,
    features: [
      "Custom software systems",
      "FCR agronomy deployments",
      "Enterprise configurations",
      "Dedicated scoping & delivery",
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
      "The same conviction later lives in Queravaga: shorten the path from profile to interview. Here it was built as a marketplace — clear, fast, respectful of time.",
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
