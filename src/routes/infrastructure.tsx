import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/infrastructure")({
  head: () =>
    buildPageHead({
      title: "Infrastructure",
      description:
        "Infrastructure chosen for the system—not for the slide. Hosting designed around users, data, availability, and contractual controls.",
      path: "/infrastructure",
    }),
  component: Infra,
});

const pillars = [
  {
    title: "Hosting regions",
    desc: "Hosting regions and data locations vary by product and contract. Brazilian-region deployment is available where the architecture and agreement require it.",
  },
  {
    title: "Recovery objectives",
    desc: "Automated database backups, point-in-time recovery configurations, and documented recovery objectives tailored to product criticality.",
  },
  {
    title: "Monitoring coverage",
    desc: "Monitoring coverage is documented per product, including the health checks, logs, alerts, ownership, and escalation paths currently configured.",
  },
  {
    title: "Data-retention model",
    desc: "Retention windows, deletion workflows, and storage tiers designed in accordance with LGPD obligations and customer agreements.",
  },
];

function Infra() {
  return (
    <main>
      <PageHero
        kicker="Infrastructure"
        title="Infrastructure chosen for the system"
        titleSecond="—not for the slide."
        lede="UNFLD designs hosting around the product’s users, data, availability needs, integrations, and contractual controls. Architecture varies by product and client scope."
        actions={
          <>
            <BtnLink to="/contact">Talk to UNFLD</BtnLink>
            <BtnLink to="/security" variant="secondary">
              Security
            </BtnLink>
          </>
        }
      />
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl">
          <img
            src="/images/infra.jpg"
            alt="Infrastructure overview"
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </section>

      <Section className="py-20">
        <Kicker>Operational architecture</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Verifiable infrastructure standards
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article key={p.title} className="bg-bg p-6 sm:p-7">
              <h3 className="font-display text-lg font-medium tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Kicker>Tailored deployment</Kicker>
        <h2 className="max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-tight tracking-tight">
          Architected for accountability.
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          Whether delivering a high-throughput field intelligence tool like FCR, an instant WhatsApp-first presence engine like SiteCreator, or an enterprise custom system, our infrastructure choices balance operational isolation, observable performance, and compliance requirements.
        </p>
      </Section>
    </main>
  );
}
