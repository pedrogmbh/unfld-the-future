import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { WorkTile } from "@/components/site/work-page";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import {
  pageTitle,
  selectedWork,
  workRows,
} from "@/lib/site";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: pageTitle("Selected work") },
      {
        name: "description",
        content:
          "Selected work from UNFLD’s team history — media, aviation, energy, education, sport, and the systems behind them.",
      },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const rows = workRows();

  return (
    <main>
      <PageHero
        kicker="Selected work"
        title="Work people"
        titleSecond="actually used."
        lede="Selected work from the history we carry — media, aviation, energy, education, sport, and the systems behind them. Direct engagements, prior companies, and projects built beside others. Named where the relationship and permission are clear."
        actions={
          <>
            <BtnLink to="/contact">Talk to UNFLD</BtnLink>
            <BtnLink to="/build-with-us" variant="secondary">
              Build with us
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16 sm:pb-24">
        <Kicker>Index</Kicker>
        <ol>
          {selectedWork.map((w, i) => (
            <li key={w.slug} className="border-t border-border last:border-b">
              <Link
                to="/work/$slug"
                params={{ slug: w.slug }}
                className="grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-5 transition-colors hover:text-muted sm:grid-cols-[4.5rem_minmax(0,11rem)_1fr_auto] sm:gap-8"
              >
                <span className="font-mono text-[13px] text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hidden font-display text-[15px] font-medium tracking-tight sm:block">
                  {w.client}
                </span>
                <span className="min-w-0 font-display text-[15px] font-medium tracking-tight sm:text-lg">
                  <span className="sm:hidden">{w.client} · </span>
                  {w.title}
                </span>
                <span className="font-mono text-[12px] text-subtle">
                  {w.year}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <Kicker>Chapters</Kicker>
        </Reveal>
        <div className="mt-8 space-y-14 sm:space-y-20">
          {rows.map((row) =>
            Array.isArray(row) ? (
              <Stagger
                key={row.map((w) => w.slug).join("-")}
                className="grid gap-10 sm:grid-cols-2 sm:gap-6"
                delay={0.08}
              >
                {row.map((w) => (
                  <StaggerItem key={w.slug}>
                    <WorkTile work={w} variant="half" />
                  </StaggerItem>
                ))}
              </Stagger>
            ) : (
              <Reveal key={row.slug}>
                <WorkTile work={row} variant="full" />
              </Reveal>
            ),
          )}
        </div>
      </Section>
    </main>
  );
}
