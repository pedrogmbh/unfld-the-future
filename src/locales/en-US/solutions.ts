export const solutions = {
  agronomy: {
    name: "Agronomy",
    audience: "Agronomy engineering teams, agricultural consultants, and farm operations managers.",
    line: "Field intelligence for agronomy teams: capture evidence offline and turn field data into recommendations.",
    body: "Work from property and crop context through plots, collections, soil data, recommendations, approvals, and producer-ready reports—without breaking when connectivity disappears in the field. Powered by FCR, built and evolved with Timac Agro.",
    capabilities: [
      "Offline collection in the field with background synchronization",
      "Traceable management workflows connecting technicians to coordinators",
      "Agronomic recommendation engine generating producer-ready reports",
    ],
  },
  hiring: {
    name: "Hiring",
    audience: "Candidates seeking straightforward job placement and hiring teams needing verified candidates.",
    line: "A shorter path from profile to interview: clear profiles, faster conversations, less friction.",
    body: "Queravaga helps candidates present their experience clearly in minutes and helps hiring teams find candidates ready for real conversations—without turning either side into a form-filling machine.",
    capabilities: [
      "Clear candidate profiles generated in minutes without complex formatting",
      "Direct communication pathways between hiring managers and applicants",
      "Reduced administrative friction for high-turnover operational hiring",
    ],
  },
  "small-business": {
    name: "Small business",
    audience: "MEIs (microempreendedores individuais), microenterprises, and Brazilian SMB owners.",
    line: "Digital presence and fiscal routines handled through WhatsApp.",
    body: "Small businesses in Brazil operate inside WhatsApp. SiteCreator delivers an approved, verified website with hosting and SSL in minutes from a CNPJ. Doutor Fiscal streamlines invoice issuance, Simples Nacional tracking, and routine fiscal compliance without interrupting daily sales.",
    capabilities: [
      "Instant web presence via SiteCreator with custom domain support",
      "Guided invoice issuance and fiscal organization via Doutor Fiscal",
      "Conversational workflows eliminating complex dashboard overhead",
    ],
  },
  "workplace-health": {
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
  "custom-systems": {
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
  government: {
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
  operations: {
    name: "Operations",
    audience: "Supply chain managers, field service directors, and operations executives.",
    line: "Put software where the work actually happens—in the field, in the conversation, and in the decisions managers need to make next.",
    body: "Operational efficiency happens when technology removes friction at the edge. From offline agronomic intelligence to conversational fiscal routines and custom tracking systems, UNFLD builds systems that reflect real operational constraints.",
    capabilities: [
      "Resilient offline-first mobile and conversational interfaces",
      "Real-time status synchronization and exception alerts",
      "Traceable decision data connecting field actions to executive reporting",
    ],
  },
  legal: {
    name: "Fiscal & workplace operations",
    audience: "Corporate controllers, compliance officers, HR leaders, and legal operations teams.",
    line: "Software for documented fiscal and workplace-risk routines in Brazil.",
    body: "Brazilian regulatory environments require rigorous documentation. UNFLD provides specialized software tools—such as Doutor Fiscal for invoice issuance and Dialogus for NR-1 psychosocial risk management—that generate auditable records and streamline routine compliance without substituting for legal counsel.",
    capabilities: [
      "Documented fiscal routines and automated draft validation",
      "Continuous NR-1 occupational risk integration and evidence generation",
      "Documented operational records designed to support review and audit",
    ],
  },
  business: {
    name: "Business",
    audience: "Small business owners and enterprise operators.",
    line: "Use a product already built for the problem—or build the system your operation uniquely requires.",
    body: "SiteCreator and Doutor Fiscal provide WhatsApp-first presence and fiscal workflows for MEIs and small businesses. Custom systems when your operation requires tailored workflows.",
    capabilities: [
      "WhatsApp-first workflows",
      "Product-specific capabilities",
      "Custom software options",
    ],
  },
  support: {
    name: "Operations",
    audience: "Operations teams and field leaders.",
    line: "Put software where the work actually happens—in the field, in the conversation, and in the decisions managers need to make next.",
    body: "Put software where the work actually happens—in the field, in the conversation, and in the decisions managers need to make next.",
    capabilities: [
      "Field-level offline workflows",
      "Real-time communication channels",
      "Management decision data",
    ],
  },
  security: {
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
} as const;
