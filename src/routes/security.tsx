import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/security")({
  head: () =>
    buildPageHead({
      title: "Security at UNFLD",
      description:
        "Security at UNFLD: know what data a product needs, limit who and what can reach it, and make important actions traceable.",
      path: "/security",
    }),
  component: Security,
});

const principles = [
  [
    "Data minimization",
    "We collect and retain only the data required to operate the service, deliver contractual functionality, and satisfy regulatory obligations.",
  ],
  [
    "Access boundaries",
    "Access controls are documented per product and deployment. Role restrictions, MFA, and access reviews are applied according to the system’s current architecture and contractual scope.",
  ],
  [
    "Traceable actions",
    "Relevant security and authentication events are logged according to the product scope, architecture, and documented retention model.",
  ],
];

const practices = [
  [
    "Product documentation",
    "Product-specific security documentation is available during commercial review, identifying controls, data locations, and subprocessors.",
  ],
  [
    "Data encryption",
    "Data is encrypted in transit using modern TLS configurations and encrypted at rest on underlying datastores.",
  ],
  [
    "Deployment options",
    "Available isolation, regional-hosting, and retention options are confirmed during architecture review and recorded in the applicable order form.",
  ],
  [
    "Identity & access",
    "Support for single sign-on (SSO), role-based access control (RBAC), and session timeouts where supported by the product.",
  ],
  [
    "Vulnerability triage",
    "Automated dependency scanning and controlled release workflows are documented for the products and environments where they are enabled.",
  ],
  [
    "Incident response",
    "Documented incident response workflows with escalation channels and notification commitments defined in enterprise agreements.",
  ],
];

function Security() {
  return (
    <main>
      <PageHero
        kicker="Trust & Security"
        title="Security at UNFLD"
        lede="Security at UNFLD starts with a narrower promise: know what data a product needs, limit who and what can reach it, and make important actions traceable."
        actions={
          <>
            <BtnLink to="/contact">Contact security</BtnLink>
            <BtnLink to="/compliance" variant="secondary">
              Compliance disclosures
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16">
        <Kicker>Core controls</Kicker>
        <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight">
          Controls appropriate to the product, data, and deployment model
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {principles.map(([t, d]) => (
            <article key={t}>
              <h3 className="font-medium">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-16">
        <Kicker>Commercial review</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Security documentation
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Product-specific security documentation is available during commercial review. It identifies current controls, responsible parties, subprocessors, data locations, retention, incident channels, and known exceptions.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {practices.map(([t, d]) => (
            <article key={t} className="bg-bg p-7">
              <h3 className="font-medium">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pb-16">
        <div className="rounded-xl border border-border bg-bg-elevated p-8 sm:p-10">
          <Kicker>Compliance disclosures</Kicker>
          <h2 className="font-display text-2xl font-medium tracking-tight">
            Standing answers to vendor security review
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            The compliance repository holds our standing answers across 19 control domains: information security policy, access management, encryption, data residency, backup and continuity, incident response, and supply chain. It is published rather than sent on request.
          </p>
          <div className="mt-6">
            <BtnLink to="/compliance">Open the compliance repository</BtnLink>
          </div>
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Kicker>Coordinated disclosure</Kicker>
        <h2 className="font-display text-2xl font-medium">Report suspected vulnerabilities</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Report suspected vulnerabilities to{" "}
          <a
            href={`mailto:${SITE.security}`}
            className="text-fg underline-offset-4 hover:underline"
          >
            {SITE.security}
          </a>
          . We will confirm receipt, assess scope, and coordinate remediation and disclosure in good faith.
        </p>
      </Section>
    </main>
  );
}
