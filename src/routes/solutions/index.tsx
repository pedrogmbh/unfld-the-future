import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { TextArrow } from "@/components/site/buttons";
import { Section } from "@/components/site/section";
import { solutions } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/solutions/")({
  head: () =>
    buildPageHead({
      title: "Solutions",
      description:
        "Start with the work that needs to change. Agronomy, hiring, small business, workplace health, and custom systems.",
      path: "/solutions",
    }),
  component: Solutions,
});

const primarySolutions = solutions.filter((s) =>
  [
    "agronomy",
    "hiring",
    "small-business",
    "workplace-health",
    "custom-systems",
  ].includes(s.slug),
);

function Solutions() {
  return (
    <main>
      <PageHero
        kicker="Solutions"
        title="Start with the work"
        titleSecond="that needs to change."
        lede="Across agronomy, hiring, small business, workplace health, and custom systems, we turn complex work into technology people can actually use."
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {primarySolutions.map((s) => (
            <Link
              key={s.slug}
              to="/solutions/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col justify-between bg-bg p-8 transition-colors hover:bg-bg-elevated sm:p-10"
            >
              <div>
                <h2 className="font-display text-2xl font-medium tracking-tight">
                  {s.name}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">{s.line}</p>
              </div>
              <div className="mt-8">
                <TextArrow className="text-[13px] text-muted group-hover:text-fg">
                  Learn more
                </TextArrow>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
