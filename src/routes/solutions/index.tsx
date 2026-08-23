import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { TextArrow } from "@/components/site/buttons";
import { Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizeSolutions } from "@/lib/i18n/localize";

export const Route = createFileRoute("/solutions/")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.solutions;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/solutions",
      locale: match.context.locale,
    });
  },
  component: Solutions,
});

const PRIMARY_SLUGS = [
  "agronomy",
  "hiring",
  "small-business",
  "workplace-health",
  "custom-systems",
];

function Solutions() {
  const locale = useLocale();
  const { pages, chrome } = useMessages();
  const p = pages.solutions;
  const primarySolutions = localizeSolutions(locale).filter((s) =>
    PRIMARY_SLUGS.includes(s.slug),
  );

  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
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
                  {chrome.common.learnMore}
                </TextArrow>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
