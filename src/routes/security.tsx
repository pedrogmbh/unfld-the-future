import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";

export const Route = createFileRoute("/security")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.security;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/security",
      locale: match.context.locale,
    });
  },
  component: Security,
});

function Security() {
  const { pages, chrome } = useMessages();
  const p = pages.security;
  const principles = [
    [p.p1Title, p.p1Body],
    [p.p2Title, p.p2Body],
    [p.p3Title, p.p3Body],
  ];
  const practices = [
    [p.pr1Title, p.pr1Body],
    [p.pr2Title, p.pr2Body],
    [p.pr3Title, p.pr3Body],
    [p.pr4Title, p.pr4Body],
    [p.pr5Title, p.pr5Body],
    [p.pr6Title, p.pr6Body],
  ];
  const [disclosureBefore, disclosureAfter] = p.disclosureLede.split("{{email}}");
  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        lede={p.lede}
        actions={
          <>
            <BtnLink to="/contact">{chrome.common.contactSecurity}</BtnLink>
            <BtnLink to="/compliance" variant="secondary">
              {chrome.common.complianceDisclosures}
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16">
        <Kicker>{p.controlsKicker}</Kicker>
        <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight">
          {p.controlsTitle}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {principles.map(([t, d]) => (
            <article key={t}>
              <h3 className="font-medium">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-16">
        <Kicker>{p.reviewKicker}</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          {p.reviewTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          {p.reviewLede}
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {practices.map(([t, d]) => (
            <article key={t} className="bg-bg p-7">
              <h3 className="font-medium">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pb-16">
        <div className="rounded-xl border border-border bg-bg-elevated p-8 sm:p-10">
          <Kicker>{p.disclosuresKicker}</Kicker>
          <h2 className="font-display text-2xl font-medium tracking-tight">
            {p.disclosuresTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {p.disclosuresLede}
          </p>
          <div className="mt-6">
            <BtnLink to="/compliance">{p.openRepo}</BtnLink>
          </div>
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Kicker>{p.disclosureKicker}</Kicker>
        <h2 className="font-display text-2xl font-medium">{p.disclosureTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {disclosureBefore}
          <a
            href={`mailto:${SITE.security}`}
            className="text-fg underline-offset-4 hover:underline"
          >
            {SITE.security}
          </a>
          {disclosureAfter}
        </p>
      </Section>
    </main>
  );
}
