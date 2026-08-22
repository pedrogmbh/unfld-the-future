import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/enterprise")({
  head: () => ({ meta: [{ title: pageTitle("Enterprise") }] }),
  component: Enterprise,
});

function Enterprise() {
  return (
    <main>
      <PageHero
        kicker="Enterprise"
        title="The stack, with"
        titleSecond="the controls."
        lede="SSO, data residency, dedicated throughput, and a named team — for organizations that need UNFLD products, or the software-house work, under one contract."
        actions={
          <>
            <BtnLink to="/contact">Contact sales</BtnLink>
            <BtnLink to="/security" variant="secondary">
              Security
            </BtnLink>
          </>
        }
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Custom rate limits", "Tailored throughput for your workload."],
            ["Dedicated support", "Named account team and onboarding."],
            ["SSO & SCIM", "Bring your identity provider."],
            ["Data residency", "Control where your data lives."],
            ["Volume pricing", "Discounts at scale."],
            ["Dedicated data plane", "Isolation when the review requires it."],
            ["Customer-managed keys", "You hold the encryption material."],
            ["Advanced audit", "Who did what, when, exported on demand."],
            ["No training", "Your data does not train our models."],
          ].map(([t, d]) => (
            <article key={t} className="bg-bg p-7">
              <h2 className="font-medium">{t}</h2>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
