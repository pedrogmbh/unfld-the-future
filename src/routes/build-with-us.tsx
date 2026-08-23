import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";

export const Route = createFileRoute("/build-with-us")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.buildWithUs;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/build-with-us",
      locale: match.context.locale,
    });
  },
  component: BuildWithUsPage,
});

export function BuildWithUsPage() {
  const { pages, chrome } = useMessages();
  const p = pages.buildWithUs;
  const pillars = [
    { title: p.pillar1Title, body: p.pillar1Body },
    { title: p.pillar2Title, body: p.pillar2Body },
    { title: p.pillar3Title, body: p.pillar3Body },
    { title: p.pillar4Title, body: p.pillar4Body },
  ];
  const engagements = [
    { kicker: p.eng1Kicker, title: p.eng1Title, body: p.eng1Body },
    { kicker: p.eng2Kicker, title: p.eng2Title, body: p.eng2Body },
    { kicker: p.eng3Kicker, title: p.eng3Title, body: p.eng3Body },
    { kicker: p.eng4Kicker, title: p.eng4Title, body: p.eng4Body },
  ];
  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        lede={p.lede}
        actions={
          <>
            <BtnLink to="/contact">{chrome.talkToUnfld}</BtnLink>
            <BtnLink to="/how-we-work" variant="secondary">
              {chrome.common.howWeWork}
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16">
        <Kicker>{p.modelKicker}</Kicker>
        <h2 className="max-w-2xl font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight">
          {p.modelTitle}
        </h2>
        <Stagger
          className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
          delay={0.06}
        >
          {pillars.map((pillar, i) => (
            <StaggerItem key={pillar.title}>
              <div className="flex h-full flex-col justify-between bg-bg p-7">
                <div>
                  <p className="font-mono text-xs text-subtle">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-lg font-medium tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pillar.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="py-16">
        <Kicker>{p.focusKicker}</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          {p.focusTitle}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {engagements.map((e) => (
            <article
              key={e.title}
              className="rounded-xl border border-border p-7 sm:p-8"
            >
              <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                {e.kicker}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                {e.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{e.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <div className="rounded-xl border border-border bg-bg-elevated p-8 sm:p-12">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {p.ctaTitle}
              <br />
              <span className="text-muted">
                {p.ctaTitleSecond}
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              {p.ctaLede}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnLink to="/contact">{chrome.talkToUnfld}</BtnLink>
              <BtnLink to="/work" variant="secondary">
                {chrome.common.selectedWork}
              </BtnLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
