export const SITE = {
  name: "UNFLD",
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

export const customers = [
  { name: "Timac Agro", note: "Principal partnership" },
  { name: "SporTV", note: "Team experience" },
  { name: "Netflix", note: "Team experience" },
  { name: "Embraer", note: "Team experience" },
  { name: "L’Oréal Paris", note: "Team experience" },
  { name: "Cartier", note: "Team experience" },
  { name: "Subvrsive", note: "Partner project · WPP" },
  { name: "Siemens GmbH", note: "Team experience" },
  { name: "Aircraft Philipp", note: "Team experience" },
  { name: "Spotify", note: "Team experience" },
  { name: "O Boticário", note: "Team experience" },
  { name: "PUCPR", note: "Partner project" },
  { name: "FLAGCX", note: "Team experience" },
  { name: "Polenghi", note: "Team experience" },
  { name: "IOHK", note: "Partner project · Input Output Group" },
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
