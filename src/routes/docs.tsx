import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/site/code-block";
import { CodeTabs, HOUSE_SAMPLES } from "@/components/site/code-tabs";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/docs")({
  head: () => ({ meta: [{ title: pageTitle("Docs") }] }),
  component: Docs,
});

const groups = [
  {
    title: "Start",
    items: [
      ["Contact", "Custom software begins with the brief, not a key."],
      ["Products", "Each owned product has its own site."],
      ["Company", "Who we are, and who we have shipped for."],
    ],
  },
  {
    title: "Products",
    items: [
      ["FCR", "Ferramenta de Coleta — agronomy, with Timac Agro."],
      ["SiteCreator", "A site in five minutes, over WhatsApp."],
      ["Doutor Fiscal", "Fiscal work and BPO on WhatsApp."],
    ],
  },
  {
    title: "Also",
    items: [
      ["Dialogus", "Psychosocial risk. NR-1."],
      ["Queravaga", "Into the job market in minutes."],
      ["Enterprise", "Contracts, residency, a named team."],
    ],
  },
];

const SHAPE = `{
  "tool": "Ferramenta de Coleta",
  "partner": "Timac Agro",
  "offline": true
}`;

const SITE_FLOW = `channel: whatsapp
cnpj:    from the Receita
site:    *.live.sitecreator.com.br`;

function Docs() {
  return (
    <main>
      <PageHero
        kicker="Developers"
        title="Documentation"
        lede="There is no public UNFLD API. Product documentation lives on each product site. This page is how we work, and where to go next."
      />
      <Section className="pb-16">
        <div className="grid gap-10 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
                {g.title}
              </h2>
              <ul className="mt-4 space-y-4">
                {g.items.map(([t, d]) => (
                  <li key={t}>
                    <Link to="/products" className="font-medium hover:opacity-70">
                      {t}
                    </Link>
                    <p className="text-sm text-muted">{d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-16">
        <Kicker>Shape of the work</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Field collection. WhatsApp products.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Illustrative payloads — not a public SDK. FCR syncs when the signal
          returns. SiteCreator publishes from a CNPJ and a chat.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <CodeBlock code={SHAPE} filename="fcr.json" />
          <CodeBlock code={SITE_FLOW} filename="sitecreator.txt" />
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Kicker>Samples</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          How the work looks.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Switch languages in the window. Colors are the same ones we use on the
          homepage — keywords, calls, and strings.
        </p>
        <div className="mt-10">
          <CodeTabs samples={HOUSE_SAMPLES} />
        </div>
      </Section>
    </main>
  );
}
