import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { interpolate } from "@/lib/i18n/interpolate";
import { useLocale, useMessages } from "@/lib/i18n";
import { legalVars } from "@/lib/i18n/localize";
import type { Messages } from "@/locales/types";

export function LegalDoc({
  kicker,
  title,
  updated,
  children,
}: {
  kicker?: string;
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  const { chrome } = useMessages();
  return (
    <main>
      <PageHero
        kicker={kicker ?? chrome.legalKicker}
        title={title}
        lede={updated ? interpolate(chrome.lastUpdated, { date: updated }) : undefined}
      />
      <Section className="pb-24 sm:pb-32">
        <article className="legal-prose max-w-3xl space-y-8 text-[15px] leading-relaxed text-muted">
          {children}
        </article>
      </Section>
    </main>
  );
}

export function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl font-medium tracking-tight text-fg">
      {children}
    </h2>
  );
}

type LegalDocMessages = Messages["legal"]["terms"];

export function LegalFromMessages({
  doc,
  kicker,
  afterIntro,
}: {
  doc: LegalDocMessages;
  kicker?: string;
  afterIntro?: React.ReactNode;
}) {
  const locale = useLocale();
  const messages = useMessages();
  const vars = legalVars(locale);
  return (
    <LegalDoc title={doc.title} kicker={kicker} updated={messages.legal.updated}>
      <p>{interpolate(doc.intro, vars)}</p>
      {afterIntro}
      {doc.sections.flatMap((section) => [
        <H key={`${section.heading}-h`}>{section.heading}</H>,
        <p key={`${section.heading}-p`}>{interpolate(section.body, vars)}</p>,
      ])}
    </LegalDoc>
  );
}
