import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { pageTitle, plans } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: pageTitle("Pricing") }] }),
  component: Pricing,
});

function Pricing() {
  return (
    <main>
      <PageHero
        kicker="Pricing"
        title="Product sites."
        titleSecond="Custom by conversation."
        lede="Pricing lives on each product. SiteCreator is free to publish. Doutor Fiscal is on a waitlist. FCR and software-house work start with sales."
      />
      <Section className="pb-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-xl border border-border p-6"
            >
              <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
                {p.name}
              </h2>
              <p className="mt-4 font-display text-4xl font-medium tracking-tight">
                {p.price}
                <span className="text-base font-normal text-muted">
                  {p.period}
                </span>
              </p>
              <p className="mt-3 min-h-12 text-sm text-muted">{p.blurb}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <BtnLink
                to={p.external ? undefined : p.href}
                href={p.external ? p.href : undefined}
                variant={p.name === "Custom" ? "primary" : "secondary"}
                className="mt-8 w-full"
                {...(p.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {p.cta}
              </BtnLink>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pb-24 sm:pb-32">
        <Kicker>Need a custom plan?</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Talk to sales.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Custom contracts, dedicated infrastructure, SSO, compliance, and
          volume pricing. Or email sales@unfld.com.
        </p>
        <div className="mt-8">
          <BtnLink to="/contact">Contact sales</BtnLink>
        </div>
      </Section>
    </main>
  );
}
