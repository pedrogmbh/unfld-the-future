import { createFileRoute } from "@tanstack/react-router";
import { CodeTabs, HOUSE_SAMPLES } from "@/components/site/code-tabs";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/api")({
  head: () => ({ meta: [{ title: pageTitle("Developers") }] }),
  component: ApiPage,
});

function ApiPage() {
  return (
    <main>
      <PageHero
        kicker="Developers"
        title="Custom software."
        lede="We still sit with the operation and ship what it actually runs. There is no public UNFLD API product. If the brief is a system, talk to us."
        actions={
          <>
            <BtnLink to="/contact">Contact Sales</BtnLink>
            <BtnLink to="/products" variant="secondary">
              Our products
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            [
              "A software house",
              "SporTV, Netflix, Timac Agro, Embraer, and the rest of the roster. The same quality bar as the products we own.",
            ],
            [
              "Field and WhatsApp",
              "FCR collects agronomy results offline. SiteCreator and Doutor Fiscal meet the company in the thread it already uses.",
            ],
            [
              "Owned products",
              "When the answer is a product we already run, we send you there. When it is not, we build.",
            ],
          ].map(([t, d]) => (
            <article key={t} className="rounded-xl border border-border p-6">
              <h2 className="font-medium">{t}</h2>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <Kicker>How we work</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Sit with the operation.
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            ["1", "Understand the plot.", "Agronomy, fiscal, hiring, NR-1 — we start with the people who do the work."],
            ["2", "Ship the smallest true thing.", "An app, a WhatsApp product, a dashboard. Not a six-month theatre."],
            ["3", "Operate, or hand it over.", "Owned products stay with us. Custom work is yours, with the support you contract."],
          ].map(([n, t, d]) => (
            <li key={n}>
              <p className="font-mono text-sm text-subtle">{n}</p>
              <h3 className="mt-3 font-medium">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Reveal>
            <CodeTabs samples={HOUSE_SAMPLES} />
          </Reveal>
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["FCR", "Ferramenta de Coleta. Agronomy engineers. Timac Agro."],
            ["SiteCreator", "A site in five minutes, over WhatsApp. sitecreator.com.br."],
            ["Doutor Fiscal", "Fiscal work on WhatsApp. doutorfiscal.com."],
            ["Dialogus", "Psychosocial risk and NR-1. dialoguspsicossocial.com.br."],
            ["Queravaga", "Into the job market in minutes. queravaga.com."],
            ["Custom", "When none of those is the brief. Contact sales."],
          ].map(([t, d]) => (
            <article key={t} className="bg-bg p-7">
              <h3 className="font-medium">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
