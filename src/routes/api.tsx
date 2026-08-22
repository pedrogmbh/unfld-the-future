import { createFileRoute } from "@tanstack/react-router";
import { CodeTabs, RELAY_SAMPLES } from "@/components/site/code-tabs";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/api")({
  head: () => ({ meta: [{ title: pageTitle("API") }] }),
  component: ApiPage,
});

function ApiPage() {
  return (
    <main>
      <PageHero
        kicker="Relay API"
        title="Build with UNFLD."
        lede="Generate structured answers, query live intelligence, emit events, and connect Forge — all through one API."
        actions={
          <>
            <BtnLink to="/console">Get an API key</BtnLink>
            <BtnLink to="/docs" variant="secondary">
              Documentation
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ["Works with your SDK", "Native clients, or point the OpenAI SDK at our base URL."],
            ["Usage-based from $2/M", "Prepaid credits and enterprise invoicing when you need them."],
            ["Playground included", "Every account gets a console to try Pulse and Relay live."],
          ].map(([t, d]) => (
            <article key={t} className="rounded-xl border border-border p-6">
              <h2 className="font-medium">{t}</h2>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <Kicker>Zero to first token</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Three steps.
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            ["1", "Sign up at the Console.", "Create an account. No credit card for the playground."],
            ["2", "Create an API key.", "Keys live on the API Keys page. Rotate them whenever you want."],
            ["3", "Call pulse-2.", "Set the base URL to https://api.unfld.com/v1 and send a query."],
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
            <CodeTabs samples={RELAY_SAMPLES} />
          </Reveal>
        </div>
      </Section>

      <Section className="py-16">
        <Kicker>Models</Kicker>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="border-b border-border text-[12px] tracking-wide text-subtle uppercase">
              <tr>
                <th className="px-5 py-3 font-medium">Model</th>
                <th className="px-5 py-3 font-medium">Context</th>
                <th className="px-5 py-3 font-medium">Input</th>
                <th className="px-5 py-3 font-medium">Output</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              {[
                ["pulse-2", "500K", "$2.00 / 1M", "$6.00 / 1M"],
                ["pulse-lite", "128K", "$0.40 / 1M", "$1.20 / 1M"],
                ["forge-embed", "8K", "$0.10 / 1M", "—"],
                ["studio-image", "—", "from $0.04 / img", "—"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-border last:border-0">
                  {row.map((c) => (
                    <td key={c} className="px-5 py-3 font-mono text-[13px] text-fg">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Text & code", "Structured JSON, tools, and long-running agents."],
            ["Live Pulse", "Query operations as they happen, not after the export."],
            ["Events", "Subscribe to Forge, Pulse, and Studio through one envelope."],
            ["Files & collections", "Private corpora with the same auth as the rest of Relay."],
            ["Studio media", "On-brand image generation constrained to the UNFLD world."],
            ["Voice", "Speech in and out for support and ops products."],
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
