import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: pageTitle("How we build — UNFLD") },
      {
        name: "description",
        content:
          "A practical overview of discovery, delivery, ownership, security, and handover for custom systems built with UNFLD.",
      },
    ],
  }),
  component: HowWeWorkPage,
});

const steps = [
  {
    step: "01",
    title: "Discovery & field context",
    body: "We begin by observing the daily work—mapping user roles, environment constraints (connectivity, devices, channels), and existing data flows. We define success in operational metrics, not vanity deliverables.",
  },
  {
    step: "02",
    title: "Scoped architecture & prototype",
    body: "We architect the smallest viable system that solves the core operational problem. We choose infrastructure based on availability, privacy, and compliance requirements rather than generic templates.",
  },
  {
    step: "03",
    title: "Iterative deployment & evidence",
    body: "We ship functional software in short, verifiable cycles. Real users test the system in active operations, giving immediate feedback that shapes the next release.",
  },
  {
    step: "04",
    title: "Governance, security & handover",
    body: "Depending on contract terms, we either operate the platform with dedicated monitoring and support or execute a clean code and infrastructure handover with full documentation.",
  },
] as const;

const deliverables = [
  {
    title: "Defined deliverables",
    body: "Clear milestone agreements, source code repositories, infrastructure definitions as code, and production deployment pipelines.",
  },
  {
    title: "Shared responsibilities",
    body: "Transparent allocation of domain expertise, acceptance criteria, security reviews, and operational ownership across both teams.",
  },
  {
    title: "Acceptance & validation",
    body: "Milestones are signed off based on working software in production conditions, verified against the agreed operational outcomes.",
  },
  {
    title: "Security & data controls",
    body: "Explicit data boundaries, regional hosting, customer-controlled access policies, and audit documentation defined per scope.",
  },
] as const;

export function HowWeWorkPage() {
  return (
    <main>
      <PageHero
        kicker="Process & governance"
        title="How we build."
        lede="A practical overview of discovery, delivery, ownership, security, and handover for custom systems built with UNFLD."
        actions={
          <>
            <BtnLink to="/contact">Talk to UNFLD</BtnLink>
            <BtnLink to="/build-with-us" variant="secondary">
              Build with us
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16">
        <Kicker>The lifecycle</Kicker>
        <h2 className="max-w-2xl font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight">
          From operational insight to working system.
        </h2>
        <div className="mt-12 space-y-0">
          {steps.map((s) => (
            <div
              key={s.step}
              className="grid gap-4 border-t border-border py-8 sm:grid-cols-[6rem_16rem_1fr] sm:gap-8"
            >
              <p className="font-mono text-sm text-subtle">{s.step}</p>
              <h3 className="font-display text-xl font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <Kicker>Engagement standards</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Deliverables, ownership & acceptance.
        </h2>
        <Stagger
          className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2"
          delay={0.06}
        >
          {deliverables.map((d) => (
            <StaggerItem key={d.title}>
              <div className="h-full bg-bg p-8">
                <h3 className="font-display text-lg font-medium tracking-tight">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {d.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <div className="rounded-xl border border-border bg-bg-elevated p-8 sm:p-12">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Ready to scope a custom system?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Describe the problem your team is facing and the operational
              constraints involved. We will connect you directly with an
              engineering lead.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnLink to="/contact">Talk to UNFLD</BtnLink>
              <BtnLink to="/enterprise" variant="secondary">
                Enterprise options
              </BtnLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
