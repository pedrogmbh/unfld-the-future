import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";

export const Route = createFileRoute("/how-we-work")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.howWeWork;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/how-we-work",
      locale: match.context.locale,
    });
  },
  component: HowWeWorkPage,
});

export function HowWeWorkPage() {
  const { pages, chrome } = useMessages();
  const p = pages.howWeWork;
  const steps = [
    { step: "01", title: p.step1Title, body: p.step1Body },
    { step: "02", title: p.step2Title, body: p.step2Body },
    { step: "03", title: p.step3Title, body: p.step3Body },
    { step: "04", title: p.step4Title, body: p.step4Body },
  ];
  const deliverables = [
    { title: p.d1Title, body: p.d1Body },
    { title: p.d2Title, body: p.d2Body },
    { title: p.d3Title, body: p.d3Body },
    { title: p.d4Title, body: p.d4Body },
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
            <BtnLink to="/build-with-us" variant="secondary">
              {chrome.common.buildWithUs}
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16">
        <Kicker>{p.lifeKicker}</Kicker>
        <h2 className="max-w-2xl font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight">
          {p.lifeTitle}
        </h2>
        <div className="mt-12 space-y-0">
          {steps.map((s) => (
            <div
              key={s.step}
              className="grid gap-4 border-t border-border py-8 sm:grid-cols-[6rem_16rem_1fr] sm:gap-8"
            >
              <p className="font-mono text-sm text-subtle">{s.step}</p>
              <h3 className="font-display text-xl font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <Kicker>{p.standardsKicker}</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          {p.standardsTitle}
        </h2>
        <Stagger
          className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2"
          delay={0.06}
        >
          {deliverables.map((d) => (
            <StaggerItem key={d.title}>
              <div className="h-full bg-bg p-8">
                <h3 className="font-display text-lg font-medium tracking-tight">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {d.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <div className="rounded-xl border border-border bg-bg-elevated p-8 sm:p-12">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {p.ctaTitle}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              {p.ctaLede}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnLink to="/contact">{chrome.talkToUnfld}</BtnLink>
              <BtnLink to="/enterprise" variant="secondary">
                {chrome.common.enterpriseOptions}
              </BtnLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
