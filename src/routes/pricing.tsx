import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { plans, SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/pricing")({
  head: () =>
    buildPageHead({
      title: "Pricing & availability",
      description:
        "A clear next step for every product. Current availability, pricing model, and next steps across UNFLD products.",
      path: "/pricing",
    }),
  component: Pricing,
});

function Pricing() {
  return (
    <main>
      <PageHero
        kicker="Pricing & availability"
        title="A clear next step"
        titleSecond="for every product."
        lede="Choose a product below to see its current availability, pricing model, and next step. Custom systems and enterprise configurations begin with a scoped conversation."
      />
      <Section className="pb-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-xl border border-border p-6"
            >
              <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
                {p.name}
              </h2>
              <p className="mt-4 font-display text-3xl font-medium tracking-tight">
                {p.price}
                <span className="text-sm font-normal text-muted">
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
        <Kicker>Custom systems & enterprise</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Scope a custom system.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Custom contracts, dedicated infrastructure, SSO, compliance, and volume pricing. Or reach us directly at{" "}
          <a
            href={`mailto:${SITE.sales}`}
            className="text-fg underline-offset-4 hover:underline"
          >
            {SITE.sales}
          </a>
          .
        </p>
        <div className="mt-8">
          <BtnLink to="/contact">Talk to UNFLD</BtnLink>
        </div>
      </Section>
    </main>
  );
}
