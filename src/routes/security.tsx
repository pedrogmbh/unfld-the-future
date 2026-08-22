import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { pageTitle, SITE } from "@/lib/site";

export const Route = createFileRoute("/security")({
  head: () => ({ meta: [{ title: pageTitle("Security") }] }),
  component: Security,
});

const practices = [
  ["Product Security", "Threat modeling, review, and a release bar that can say no."],
  ["Data Security", "Encryption in transit and at rest. Residencies on Enterprise."],
  ["Data Privacy", "No training on Company and Enterprise data. Clear retention."],
  ["Access Control", "SSO, SCIM, least privilege, and session that expire."],
  ["Application Security", "Dependency policy, SAST, and a public disclosure program."],
  ["Infrastructure Security", "The compute we run is the compute we harden."],
  ["Endpoint Security", "Managed, encrypted laptops. Lost device: report in hours, not days."],
  ["Network Security", "Private paths between products. No surprise egress."],
  ["Corporate Security", "Background checks, training, and a culture that reports early."],
];

function Security() {
  return (
    <main>
      <PageHero
        kicker="Trust & Security"
        title="Security at UNFLD"
        lede="Data privacy and security are fundamental to our mission. We prioritize the responsible management of data and the trust our users place in our products."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <BtnLink to="/compliance">Explore compliance controls</BtnLink>
            <BtnLink to="/contact" variant="secondary">
              Talk to security
            </BtnLink>
          </div>
        }
      />
      <Section className="pb-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Robust security", "Industry-leading safeguards to protect your data from unauthorized access, use, or disclosure."],
            ["Industry standards", "Compliance with relevant data privacy regulations and adherence to industry best practices."],
            ["Transparency", "Clear, accessible information about our data handling practices and policies."],
          ].map(([t, d]) => (
            <article key={t}>
              <h2 className="font-medium">{t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pb-16">
        <Kicker>In depth</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Security practices
        </h2>
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
          <Kicker>Audit & compliance</Kicker>
          <h2 className="font-display text-2xl font-medium tracking-tight">
            Institutional compliance repository
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Review detailed answers across 19 security domains—including PSSI, ISO 27001/27002 alignment, GDPR/LGPD data residency, encryption, disaster recovery, and SOC operations.
          </p>
          <div className="mt-6">
            <BtnLink to="/compliance">View full compliance index</BtnLink>
          </div>
        </div>
      </Section>
      <Section className="pb-24 sm:pb-32">
        <h2 className="font-display text-2xl font-medium">Report a vulnerability</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Contact the UNFLD security team at {SITE.security} with the subject
          line “Responsible Disclosure.” We acknowledge quickly and do not
          pursue legal action against good-faith research.
        </p>
      </Section>
    </main>
  );
}
