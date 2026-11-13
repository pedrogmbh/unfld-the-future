export const govtech = {
  metaTitle: "GovTech",
  metaDescription:
    "UNFLD designs, builds, and operates digital systems for federal, state, and municipal bodies in Brazil. Supplier registrations, certificates, and corporate records are public at docs.unfld.com.br.",
  hero: {
    kicker: "GovTech · Brazilian public sector",
    title: "Public service,",
    titleSecond: "unfolded.",
    lede: "We design, build, and operate digital systems for federal, state, and municipal bodies in Brazil. Registered as a supplier, with our habilitação file in the open, and accountable long after go-live.",
    primary: "Contact Sales",
    secondary: "Open documentation",
    mapLabel: "Brazil, by federative unit. Select a state to see our status there.",
    legendHq: "Headquarters",
    legendRegistered: "Supplier registration",
    legendProgress: "Registration in review",
    legendRemote: "Remote delivery",
    remoteDetail: "Remote delivery, with on-site visits when the contract requires them.",
    portalsLink: "Procurement portals in {{uf}}",
  },
  stats: {
    documents: "documents in our public habilitação hub",
    registrations: "supplier registrations across federal and state systems",
    ufs: "federative units served through remote delivery",
    spheres: "spheres of government: federal, state, and municipal",
  },
  spheres: {
    kicker: "Who we serve",
    title: "Every sphere of the federation.",
    lede: "Public service in Brazil runs on three levels at once. Each one buys differently, works with different teams, and deserves software sized to its reality.",
    federalCount: "Union",
    stateCount: "states and the Federal District",
    municipalCount: "municipalities",
    federalName: "Federal",
    federalBody:
      "Ministries, autarchies, foundations, regulatory agencies, and state-owned companies. Registered in SICAF and in the Petrobras supplier registry.",
    stateName: "State",
    stateBody:
      "Secretariats, health and education networks, public security, and state companies. Supplier registrations in Minas Gerais and Santa Catarina, with Paraná in review.",
    municipalName: "Municipal",
    municipalBody:
      "City halls, municipal councils, and public consortia. Small teams that need software they can afford, understand, and keep running.",
    also: "We also work with legislative houses, courts of accounts, public consortia, and mixed-capital companies.",
  },
  capabilities: {
    kicker: "What we build",
    title: "Software for the counter, the field, and the office.",
    lede: "Most public systems fail at the handoffs: between citizen and clerk, field and office, one department and the next. We design for those handoffs first.",
    items: [
      {
        title: "Citizen services",
        body: "Digital services with plain-language forms, status tracking, and gov.br sign-in when the body is enabled for it.",
      },
      {
        title: "Conversational service",
        body: "WhatsApp and web channels for scheduling, reminders, and triage, with human handoff and a recorded history.",
      },
      {
        title: "Process management",
        body: "Digital protocol, deadline-aware workflows, electronic signatures, and an audit trail from intake to decision.",
      },
      {
        title: "Transparency and open data",
        body: "Portals and open-data APIs that support active transparency under the Access to Information Law.",
      },
      {
        title: "Management dashboards",
        body: "Indicators for secretaries and mayors, built on data the body already holds, with clear definitions and refresh rules.",
      },
      {
        title: "Public health",
        body: "Telemedicine, scheduling, and follow-up for primary care, occupational health, and public health programs.",
      },
      {
        title: "Workforce wellbeing",
        body: "Psychosocial risk listening and action plans for public teams under pressure, with documented evidence.",
      },
      {
        title: "Legacy modernization",
        body: "APIs around legacy systems, careful data migration, and gradual replacement without interrupting the service.",
      },
    ],
  },
  products: {
    kicker: "Ready to deploy",
    title: "Products already in market.",
    lede: "When a ready product fits, a body can start sooner and pay less than for a custom build. When it does not, we say so.",
    dialogusContext: "Public teams and state-owned companies",
    dialogusBody:
      "Psychosocial risk management aligned with NR-1: confidential listening, structured assessment, dashboards, and action plans for teams in health, education, and public security.",
    telemedicineContext: "Health programs and public workforces",
    telemedicineBody:
      "Telemedicine and health benefits on one platform, adaptable to programs that need to reach people far from a clinic.",
    oluartContext: "Public schools and cultural programs",
    oluartBody:
      "Drawing practice with augmented reality on phones students already carry. No projector and no extra equipment.",
    open: "See product",
  },
  principles: {
    kicker: "Public money, public standards",
    title: "Commitments we put in writing.",
    items: [
      {
        title: "You own what you pay for",
        body: "Source code, data, and documentation delivered as the contract defines, with knowledge transfer to your team.",
      },
      {
        title: "Data stays in Brazil",
        body: "Hosting region and data residency set in the contract, with LGPD controller and operator roles defined from day one.",
      },
      {
        title: "Accessible by default",
        body: "Interfaces built against WCAG 2.2 AA and eMAG guidance, tested with keyboard navigation and screen readers.",
      },
      {
        title: "Every action leaves a trace",
        body: "Role-based access, audit logs, and records ready for internal control and the courts of accounts.",
      },
      {
        title: "No lock-in",
        body: "Open standards, documented APIs, and exportable data. You can change suppliers without losing the system.",
      },
      {
        title: "Payment follows working software",
        body: "Small, verifiable releases tied to acceptance criteria, so every measurement reflects something that works.",
      },
    ],
  },
  paths: {
    kicker: "How to contract us",
    title: "Five legal paths. One standard of delivery.",
    lede: "Lei 14.133/2021 and LC 182/2021 give public bodies several ways to buy technology. Choose the one that fits the problem; we adapt the proposal to it.",
    fitLabel: "Best for",
    items: [
      {
        name: "Pregão eletrônico",
        law: "Lei 14.133/2021",
        body: "The standard competitive auction for common services with objective specifications. We bid on Compras.gov.br and on the platform named in the notice.",
        fit: "Defined scope, measurable deliverables, recurring services.",
      },
      {
        name: "Dispensa eletrônica",
        law: "Lei 14.133/2021, art. 75",
        body: "Direct contracting within the legal value limits, still competitive and fully published on PNCP. Fast for focused needs.",
        fit: "Pilots, discovery, accessibility audits, smaller modules.",
      },
      {
        name: "CPSI",
        law: "LC 182/2021",
        body: "The Public Contract for Innovative Solutions lets a body test a solution for up to 12 months, renewable once, before signing a supply contract.",
        fit: "Problems without a known market answer, where testing comes first.",
      },
      {
        name: "Registro de preços",
        law: "Lei 14.133/2021, arts. 82–86",
        body: "A price registration record lets one or several bodies contract on demand. Where the record allows it, other bodies may join it.",
        fit: "Shared needs across secretariats or consortia of municipalities.",
      },
      {
        name: "Diálogo competitivo",
        law: "Lei 14.133/2021, art. 32",
        body: "For complex objects where the solution is not yet defined. Suppliers develop alternatives with the body before the final proposals.",
        fit: "Large modernization programs and structural redesigns.",
      },
    ],
  },
  delivery: {
    kicker: "From notice to operation",
    title: "How a public project runs with us.",
    lede: "Every phase produces something the contract manager can check. No black boxes between signature and go-live.",
    steps: [
      {
        title: "Market research",
        body: "We answer price surveys and public consultations with itemized, comparable quotes and stated validity.",
      },
      {
        title: "Proposal and habilitação",
        body: "A proposal aligned with the reference terms, with every habilitação document already public and current.",
      },
      {
        title: "Kickoff and work plan",
        body: "Joint planning with the contract manager: scope, milestones, acceptance criteria, risks, and communication rules.",
      },
      {
        title: "Incremental delivery",
        body: "Releases every few weeks, demonstrated to the contract manager and measured against the acceptance criteria.",
      },
      {
        title: "Handover",
        body: "Source code, technical documentation, and training so your team can operate and evolve the system.",
      },
      {
        title: "Support and service levels",
        body: "Monitoring, incident response, and continuous improvement under the service levels set in the contract.",
      },
    ],
  },
  docs: {
    kicker: "Public documentation",
    title: "Our habilitação file is open.",
    lede: "Certificates, registrations, and corporate records are published as the issuers' original PDFs. An automated routine checks expiring certificates every Monday and Thursday. Anyone can open them, before the session or after.",
    hub: "Open documentation hub",
    live: "Live from docs.unfld.com.br",
    snapshot: "Snapshot of {{date}}",
    issued: "Issued",
    validUntil: "Valid until",
    noExpiry: "No printed expiry",
    calculated: "calculated",
    open: "Open PDF",
    openAria: "Open {{name}} (PDF, new tab)",
    statusValid: "Valid",
    statusSoon: "Renews soon",
    statusDue: "Renewal due",
    verify:
      "Confirm authenticity with each issuer before use. A certificate in our hub is evidence, not a substitute for the requirements of your notice.",
    categories: {
      legal: "Legal standing",
      fiscal: "Fiscal, social, and labor",
      economic: "Economic and financial",
      integrity: "Integrity",
    },
    items: {
      D16: "CNPJ registration and status",
      D21: "Partners and administrators",
      D12: "Commercial registry summary",
      D13: "Consolidated articles of association",
      D34: "Federal taxes and federal debt roll",
      D08: "São Paulo state taxes",
      D25: "Paraná state taxes",
      D35: "São Paulo municipal taxes",
      D15: "FGTS regularity",
      D09: "Labor debts",
      D19: "Municipal registry (CCM)",
      D10: "Bankruptcy and judicial recovery",
      D07: "Federal sanctions registries",
      D41: "Minas Gerais debarment registry",
      D11: "Civil and criminal records",
    },
  },
  record: {
    kicker: "Company record",
    title: "Everything a registration form asks for.",
    lede: "Copy the fields you need. Each one matches the registry documents above.",
    legalName: "Legal name",
    tradingName: "Trading name",
    cnpj: "CNPJ",
    nire: "NIRE",
    ccm: "CCM · São Paulo",
    nature: "Legal nature",
    size: "Size",
    sizeValue: "ME · microenterprise",
    primaryCnae: "Primary CNAE",
    primaryCnaeName: "IT consulting",
    secondaryCnae: "Secondary CNAEs (selection)",
    hq: "Headquarters",
    signature: "Representation",
    signatureValue: "Sole managing partner, signing alone",
    email: "Bids and proposals",
    copy: "Copy",
    copied: "Copied",
    copyAria: "Copy {{field}}",
  },
  registrations: {
    kicker: "Supplier registrations",
    title: "Already where public buyers look.",
    lede: "Registration does not win a contract, but it removes the first obstacle. These are the systems where UNFLD is registered today.",
    active: "Active",
    inReview: "In progress",
    validUntil: "Valid until {{date}}",
    open: "Open certificate",
    items: {
      sicaf: {
        name: "SICAF",
        detail: "Federal supplier registry used by Compras.gov.br and the bodies that adopt it.",
      },
      petrobras: {
        name: "Petrobras",
        detail: "Supplier registry. Technical criterion approved for software licensing and maintenance.",
      },
      mg: {
        name: "CAGEF · Minas Gerais",
        detail: "State supplier registration under Lei 14.133/2021, active, with no CAFIMP or CADIN records.",
      },
      sc: {
        name: "e-LIC · Santa Catarina",
        detail: "Supplier registration certificate in the state procurement system.",
      },
      pr: {
        name: "GMS · Paraná",
        detail: "Simplified registration issued for ICT services lines, awaiting evaluation by the state.",
      },
      caixa: {
        name: "Licitações CAIXA",
        detail: "Bidder adhesion submitted for CAIXA procurements and those of its partner bodies.",
      },
    },
    portalsTitle: "Procurement portals by state",
    portalsLede: "From the catalog we maintain in our documentation hub. Municipalities may use other systems: always confirm the address in the notice.",
    selectLabel: "State",
    national: "National",
    loading: "Loading the portal catalog…",
    error: "The catalog could not be loaded right now.",
    openCatalog: "Open the full catalog",
    sourceNote: "Portal names and descriptions are kept in Portuguese, as published by each operator.",
    visit: "Visit",
  },
  laws: {
    kicker: "Built inside the law",
    title: "The legal framework we work within.",
    lede: "Public technology is regulated technology. These are the norms that shape how we propose, build, and operate.",
    items: [
      {
        code: "Lei 14.133/2021",
        name: "Public Procurement Law",
        body: "Modalities, direct contracting, habilitação, contract management, and payment by measured delivery.",
      },
      {
        code: "LC 182/2021",
        name: "Startup Legal Framework",
        body: "The CPSI lets a body test an innovative solution before buying it at scale.",
      },
      {
        code: "LC 123/2006",
        name: "Micro and Small Business Statute",
        body: "As a microenterprise, UNFLD can use exclusive and reserved quotas when the notice provides for them.",
      },
      {
        code: "Lei 13.709/2018",
        name: "LGPD",
        body: "Controller and operator roles, processing records, security measures, and incident response defined by contract.",
      },
      {
        code: "Lei 14.129/2021",
        name: "Digital Government Law",
        body: "Digital services, interoperability, and open data as the default way to serve citizens.",
      },
      {
        code: "Lei 12.527/2011",
        name: "Access to Information Law",
        body: "Active transparency and data published in open, machine-readable formats.",
      },
      {
        code: "Lei 13.146/2015",
        name: "Brazilian Inclusion Law",
        body: "Digital accessibility as an obligation, verified against eMAG and WCAG.",
      },
    ],
  },
  faq: {
    kicker: "Questions from procurement teams",
    title: "Answers before the session.",
    items: [
      {
        q: "Can UNFLD take part in bids reserved for microenterprises?",
        a: "Yes. UNFLD is registered as a microenterprise (ME) with the Receita Federal and may use the differentiated treatment of LC 123/2006 when the notice provides for it.",
      },
      {
        q: "Where can we find your current certificates?",
        a: "At docs.unfld.com.br. An automated routine checks expiring certificates every Monday and Thursday and publishes the issuer's PDF. Always confirm authenticity with the issuer.",
      },
      {
        q: "Do you serve bodies outside São Paulo?",
        a: "Yes. Delivery is remote by default in all 27 federative units, with on-site visits when the contract requires them.",
      },
      {
        q: "Can you answer a price survey?",
        a: "Yes. Send the reference terms or the item description to sales@unfld.com.br and we return an itemized quote with validity and conditions.",
      },
      {
        q: "Who owns the source code and the data?",
        a: "The contracting body, as defined in the contract. We deliver source code, documentation, and data exports, and we train your team to operate the system.",
      },
      {
        q: "Do you accept proofs of concept or a CPSI?",
        a: "Yes. A proof of concept under the notice rules, or an innovation contract under LC 182/2021, is a sound way to test before scaling.",
      },
      {
        q: "Which CNAEs do you hold?",
        a: "Primary 6204-0/00, IT consulting. Secondary activities include 6201-5/02 web design, 6202-3/00 development and licensing of customizable software, and 6399-2/00 other information services.",
      },
    ],
  },
  cta: {
    kicker: "Start a conversation",
    title: "Bring us the service that needs to work better.",
    body: "Tell us about the problem, the people involved, and the procurement path you are considering. We answer with a clear scope, or with an honest no.",
    primary: "Contact Sales",
    docs: "Open documentation",
  },
} as const;
