import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { TextArrow } from "@/components/site/buttons";
import { Section } from "@/components/site/section";
import { pageTitle, solutions } from "@/lib/site";

export const Route = createFileRoute("/solutions/")({
  head: () => ({ meta: [{ title: pageTitle("Solutions") }] }),
  component: Solutions,
});

function Solutions() {
  return (
    <main>
      <PageHero
        kicker="Solutions"
        title="UNFLD for every"
        titleSecond="team."
        lede="Purpose-built products for the industries and workflows that matter most. From startups to government agencies."
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              to="/solutions/$slug"
              params={{ slug: s.slug }}
              className="group bg-bg p-8 transition-colors hover:bg-bg-elevated sm:p-10"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl font-medium tracking-tight">
                  {s.name}
                </h2>
                <TextArrow className="text-[13px] text-muted">Learn more</TextArrow>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{s.line}</p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
