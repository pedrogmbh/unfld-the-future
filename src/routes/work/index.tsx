import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { WorkTile } from "@/components/site/work-page";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { workRows } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizeWork } from "@/lib/i18n/localize";

export const Route = createFileRoute("/work/")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.work;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/work",
      locale: match.context.locale,
    });
  },
  component: WorkIndex,
});

function WorkIndex() {
  const locale = useLocale();
  const { pages, chrome } = useMessages();
  const p = pages.work;
  const items = localizeWork(locale);
  const rows = workRows(items);

  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
        actions={
          <>
            <BtnLink to="/contact">{chrome.talkToUnfld}</BtnLink>
            <BtnLink to="/build-with-us" variant="secondary">
              {chrome.common.buildWithUs}
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16 sm:pb-24">
        <Kicker>{p.index}</Kicker>
        <ol>
          {items.map((w, i) => (
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
          <Kicker>{p.chapters}</Kicker>
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
