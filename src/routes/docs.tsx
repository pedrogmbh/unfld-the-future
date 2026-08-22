import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeBlock } from "@/components/site/code-block";
import { CodeTabs, RELAY_SAMPLES } from "@/components/site/code-tabs";
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
      ["Quickstart", "A key, a call, a response."],
      ["Authentication", "Bearer tokens, rotation, and scoped keys."],
      ["Errors", "Codes, retries, and idempotency."],
    ],
  },
  {
    title: "Relay",
    items: [
      ["Pulse query", "Ask the live business a question."],
      ["Events", "Subscribe, filter, and verify signatures."],
      ["Files", "Upload, chunk, and retrieve collections."],
    ],
  },
  {
    title: "Products",
    items: [
      ["Forge apps", "Identity, webhooks, and app tokens."],
      ["Build", "CLI flags, workflows, and plugins."],
      ["Studio", "Image endpoints and brand constraints."],
    ],
  },
];

const INSTALL = `pip install unfld
# or
npm install @unfld/sdk`;

const AUTH = `from unfld import Client
import os

client = Client(
    api_key=os.getenv("UNFLD_API_KEY")
)`;

function Docs() {
  return (
    <main>
      <PageHero
        kicker="Developers"
        title="Documentation"
        lede="Reference for Relay, Pulse, Forge, and Build. Written the way we wish vendor docs were written."
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
                    <Link to="/api" className="font-medium hover:opacity-70">
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
        <Kicker>Quickstart</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Zero to first token.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Install an SDK, create a key in the Console, and call Pulse. The same
          surface speaks text, code, events, and media.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <CodeBlock code={INSTALL} filename="install.sh" />
          <CodeBlock code={AUTH} filename="auth.py" />
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Kicker>First request</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          One API. Every modality.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Switch languages in the window. Colors are the same ones we use on the
          homepage — keywords, calls, and strings.
        </p>
        <div className="mt-10">
          <CodeTabs samples={RELAY_SAMPLES} />
        </div>
      </Section>
    </main>
  );
}
