import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/enterprise")({
  head: () =>
    buildPageHead({
      title: "Enterprise",
      description:
        "A contract shaped around the system you actually need. Available controls are confirmed per product and order form.",
      path: "/enterprise",
    }),
  component: Enterprise,
});

const capabilities = [
  [
    "Enterprise identity",
    "Support for SAML SSO and directory integration where supported by the specific product scope.",
  ],
  [
    "Isolated environments",
    "Isolation options—including dedicated environments or private connectivity—are confirmed for the proposed architecture and recorded in the order form.",
  ],
  [
    "Audit exports",
    "Traceable event logs, access reporting, and structured telemetry exportable for enterprise compliance.",
  ],
  [
    "Regional hosting",
    "Brazilian-region hosting may be defined in the order form to support agreed residency, architecture, and latency requirements.",
  ],
  [
    "Service level commitments",
    "Contractual availability objectives, scheduled maintenance windows, and prioritized incident escalation.",
  ],
  [
    "Named technical team",
    "Direct engineering access, structured onboarding, and continuous architecture reviews.",
  ],
  [
    "Contractual privacy basis",
    "Customer data is used only for the purposes defined in the applicable agreement and privacy documentation. Any model-improvement use requires an explicit contractual basis.",
  ],
  [
    "Commercial flexibility",
    "Volume-adjusted terms, custom invoicing, and purchase-order workflows tailored to corporate procurement.",
  ],
  [
    "Security documentation",
    "Comprehensive architecture reviews, security questionnaire support, and contractual data processing agreements.",
  ],
];

function Enterprise() {
  return (
    <main>
      <PageHero
        kicker="Enterprise"
        title="A contract shaped around"
        titleSecond="the system you actually need."
        lede="Available controls are confirmed per product and order form. Options may include enterprise identity, isolated environments, audit exports, regional hosting, service levels, and named support."
        actions={
          <>
            <BtnLink to="/contact">Talk to UNFLD</BtnLink>
            <BtnLink to="/security" variant="secondary">
              Security
            </BtnLink>
          </>
        }
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([t, d]) => (
            <article key={t} className="bg-bg p-7">
              <h2 className="font-medium">{t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
