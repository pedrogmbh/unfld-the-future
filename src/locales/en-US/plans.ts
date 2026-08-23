export const plans = {
  SiteCreator: {
    price: "Free",
    period: " · R$49 / domain",
    blurb: "Your business online in minutes, through WhatsApp. For MEI and small business.",
    cta: "Open SiteCreator",
    features: [
      "WhatsApp as entry point",
      "CNPJ-based setup",
      "Free *.live.sitecreator.com.br",
      "Custom domain from R$49 / month",
    ],
  },
  "Doutor Fiscal": {
    price: "R$59",
    period: "/month",
    blurb: "Waitlist open. Fiscal routines handled through WhatsApp, for MEI and small businesses.",
    cta: "Open Doutor Fiscal",
    features: [
      "Routine issuance on WhatsApp",
      "Dedicated fiscal inbox",
      "MEI R$59 · Micro R$159 · Small R$349",
      "Cancel anytime in WhatsApp",
    ],
  },
  Dialogus: {
    price: "Plans",
    period: "",
    blurb: "Psychosocial risk management built for NR-1. Essencial, Avançar, and Integral plans.",
    cta: "Open Dialogus",
    features: [
      "Structured listening with Lis",
      "Validated assessment methods",
      "Executive dashboards and action plans",
      "Continuous NR-1 documentation",
    ],
  },
  Queravaga: {
    price: "Early access",
    period: "",
    blurb: "A shorter path from profile to interview. For candidates and hiring teams.",
    cta: "Open Queravaga",
    features: [
      "Clear profile in minutes",
      "Direct paths from profiles to hiring conversations",
      "Candidate and hiring team portals",
      "Free early access registration",
    ],
  },
  Custom: {
    price: "Talk to UNFLD",
    period: "",
    blurb: "Custom systems built beside your team. Scoped by conversation.",
    cta: "Talk to UNFLD",
    features: [
      "Custom software systems",
      "FCR agronomy deployments",
      "Enterprise configurations",
      "Dedicated scoping & delivery",
    ],
  },
} as const;
