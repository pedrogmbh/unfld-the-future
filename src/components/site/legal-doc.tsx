import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";

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
  return (
    <main>
      <PageHero
        kicker={kicker ?? "Legal"}
        title={title}
        lede={updated ? `Last updated ${updated}.` : undefined}
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
