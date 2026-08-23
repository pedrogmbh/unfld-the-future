import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";

export const Route = createFileRoute("/infrastructure")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.infrastructure;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/infrastructure",
      locale: match.context.locale,
    });
  },
  component: Infra,
});

function Infra() {
  const { pages, chrome } = useMessages();
  const p = pages.infrastructure;
  const pillars = [
    { title: p.p1Title, desc: p.p1Body },
    { title: p.p2Title, desc: p.p2Body },
    { title: p.p3Title, desc: p.p3Body },
    { title: p.p4Title, desc: p.p4Body },
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
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl">
          <img
            src="/images/infra.jpg"
            alt={p.imageAlt}
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </section>

      <Section className="py-20">
        <Kicker>{p.archKicker}</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          {p.archTitle}
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="bg-bg p-6 sm:p-7">
              <h3 className="font-display text-lg font-medium tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.desc}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Kicker>{p.deployKicker}</Kicker>
        <h2 className="max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-tight tracking-tight">
          {p.deployTitle}
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          {p.deployLede}
        </p>
      </Section>
    </main>
  );
}
