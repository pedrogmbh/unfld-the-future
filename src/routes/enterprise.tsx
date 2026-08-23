import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";

export const Route = createFileRoute("/enterprise")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.enterprise;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/enterprise",
      locale: match.context.locale,
    });
  },
  component: Enterprise,
});

function Enterprise() {
  const { pages, chrome } = useMessages();
  const p = pages.enterprise;
  const capabilities = [
    [p.c1Title, p.c1Body],
    [p.c2Title, p.c2Body],
    [p.c3Title, p.c3Body],
    [p.c4Title, p.c4Body],
    [p.c5Title, p.c5Body],
    [p.c6Title, p.c6Body],
    [p.c7Title, p.c7Body],
    [p.c8Title, p.c8Body],
    [p.c9Title, p.c9Body],
  ];
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
            <BtnLink to="/security" variant="secondary">
              {chrome.nav.security}
            </BtnLink>
          </>
        }
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([t, d]) => (
            <article key={t} className="bg-bg p-7">
              <h2 className="font-medium">{t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
