export const SITE = {
  name: "UNFLD",
  legal: "UNFLD Ltda.",
  tagline: "Unfold the future.",
  email: "hello@unfld.com",
  sales: "sales@unfld.com",
  security: "security@unfld.com",
  press: "press@unfld.com",
  year: 2026,
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

export const footer = {
  products: [
    { label: "Forge", to: "/forge" },
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
  { value: "40+", label: "Products shipped" },
  { value: "12", label: "Countries live" },
  { value: "<80ms", label: "Median API latency" },
  { value: "99.99%", label: "Relay uptime" },
] as const;

export const homePrompts = [
  {
    q: "How do we forecast Q4 without last quarter’s lag?",
    a: "Pulse reads live operations — inventory, pipeline, cash — and projects the quarter as it happens, not after the export.",
  },
  {
    q: "Can we ship an iOS and Android app in one cycle?",
    a: "Forge teams design, build, and operate both surfaces from a single product system. One backlog. One release train.",
  },
  {
    q: "What does a unified API for our stack look like?",
    a: "Relay exposes apps, intelligence, and events through one base URL. Auth, metering, and webhooks included.",
  },
] as const;

export const offices = [
  {
    city: "São Paulo",
    region: "Brazil",
    coords: "23.5505°S, 46.6333°W",
    href: "/sao-paulo",
    role: "Headquarters",
  },
  {
    city: "Porto Alegre",
    region: "Brazil",
    coords: "30.0346°S, 51.2177°W",
    href: "/company",
    role: "Product & design",
  },
  {
    city: "Lisbon",
    region: "Portugal",
    coords: "38.7223°N, 9.1393°W",
    href: "/company",
    role: "Europe engineering",
  },
  {
    city: "Austin",
    region: "United States",
    coords: "30.2672°N, 97.7431°W",
    href: "/company",
    role: "Infrastructure",
  },
] as const;

export const values = [
  {
    n: "01",
    title: "Reasoning from first principles",
    body: "We break problems to their fundamentals — logic and evidence over consensus. The software-house years taught us what to keep. Everything else we unfolded.",
  },
  {
    n: "02",
    title: "Own the product",
    body: "We used to ship for others. Now we build what we operate. Ownership is the only way to make something that lasts a decade.",
  },
  {
    n: "03",
    title: "Move, then sharpen",
    body: "Rapid development and iteration lets us innovate at breakneck speeds. We are not interested in speed for speed’s sake — we solve real problems fast.",
  },
] as const;

export const timeline = [
  {
    date: "2018",
    title: "A software house",
    body: "UNFLD begins as a focused studio shipping apps and platforms for other companies.",
  },
  {
    date: "2022",
    title: "First owned product",
    body: "The first UNFLD-branded app ships. We learn what it means to operate, not just deliver.",
  },
  {
    date: "2024",
    title: "The unfold",
    body: "We stop taking new client retainers. The house becomes a product company.",
  },
  {
    date: "2025",
    title: "Relay & Pulse",
    body: "APIs and intelligence leave the lab. Enterprises start building on our stack.",
  },
  {
    date: "2026",
    title: "Pulse 2 · global",
    body: "Pulse 2 launches. Offices in Lisbon and Austin. Infrastructure at continental scale.",
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
    slug: "pulse-2",
    date: "Aug 18, 2026",
    title: "Introducing Pulse 2",
    standfirst:
      "Pulse 2 is our intelligence platform rebuilt for live operations — models that read the business as it happens.",
    body: [
      "Pulse 2 is the largest rewrite of our intelligence stack since we stopped being a software house. It connects to the systems companies already run — ERPs, warehouses, ledgers, CRMs — and produces a live picture instead of a quarterly lag.",
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
    slug: "lisbon-office",
    date: "Jul 9, 2026",
    title: "We’re hiring in Lisbon",
    standfirst:
      "A new engineering office in Lisbon — infrastructure, Relay, and Pulse, minutes from the river.",
    body: [
      "Lisbon is our first European office. Small, focused teams building the infrastructure behind Forge, Pulse, and Relay.",
      "We prioritize in-person work. Visa sponsorship is available. Open roles are listed on the Careers page.",
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
    date: "Mar 12, 2024",
    title: "From software house to product company",
    standfirst:
      "We used to ship for others. We don’t anymore. This is the unfold.",
    body: [
      "For six years UNFLD was a software house — a focused studio that designed and built digital products for other companies. We were good at it. We also knew it was not the end of the story.",
      "Owning the product is the only way to make something that compounds. So we stopped taking new retainers, finished what we owed, and turned the house inside out.",
      "UNFLD now builds its own apps, services, APIs, intelligence, and counsel. The craft is the same. The ownership is not.",
    ],
  },
];

export const roles = [
  {
    id: "mts-pulse",
    title: "Member of Technical Staff — Pulse",
    team: "Intelligence",
    locations: ["São Paulo", "Lisbon"],
    type: "Full-time",
  },
  {
    id: "eng-relay",
    title: "Software Engineer — Relay (APIs)",
    team: "Platform",
    locations: ["São Paulo", "Austin"],
    type: "Full-time",
  },
  {
    id: "eng-build",
    title: "Software Engineer — Build",
    team: "Engineering",
    locations: ["Porto Alegre", "Lisbon"],
    type: "Full-time",
  },
  {
    id: "design-studio",
    title: "Product Designer — Studio",
    team: "Design",
    locations: ["São Paulo", "Porto Alegre"],
    type: "Full-time",
  },
  {
    id: "infra-dc",
    title: "Lead Engineer — Data Center",
    team: "Infrastructure",
    locations: ["Austin"],
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
    locations: ["Austin", "Lisbon"],
    type: "Full-time",
  },
  {
    id: "ios-forge",
    title: "iOS Engineer — Forge",
    team: "Apps",
    locations: ["São Paulo", "Porto Alegre"],
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

export function pageTitle(page?: string) {
  return page ? `${page} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
}
