import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { ParallaxImage, Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";

export function ProductPage({
  kicker,
  title,
  titleSecond,
  lede,
  primary,
  primaryTo,
  primaryHref,
  secondary,
  secondaryTo,
  image,
  imageAlt,
  features,
  quote,
  children,
}: {
  kicker: string;
  title: string;
  titleSecond?: string;
  lede: string;
  primary: string;
  primaryTo?: string;
  primaryHref?: string;
  secondary?: string;
  secondaryTo?: string;
  image: string;
  imageAlt: string;
  features: { title: string; body: string }[];
  quote?: { kicker: string; title: string; body: string };
  children?: React.ReactNode;
}) {
  return (
    <main>
      <PageHero
        kicker={kicker}
        title={title}
        titleSecond={titleSecond}
        lede={lede}
        actions={
          <>
            <BtnLink
              to={primaryTo}
              href={primaryHref}
              {...(primaryHref ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {primary}
            </BtnLink>
            {secondary && secondaryTo ? (
              <BtnLink to={secondaryTo} variant="secondary">
                {secondary}
              </BtnLink>
            ) : null}
          </>
        }
      />
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <ParallaxImage src={image} alt={imageAlt} />
        </div>
      </section>
      <Section className="py-20 sm:py-28">
        <Stagger
          className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
          delay={0.06}
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <article className="h-full bg-bg p-7 sm:p-8">
                <h2 className="font-display text-xl font-medium tracking-tight">
                  {f.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      {children}
      {quote ? (
        <Section className="pb-24 sm:pb-32">
          <Reveal>
            <Kicker>{quote.kicker}</Kicker>
            <h2 className="max-w-3xl font-display text-[clamp(1.8rem,4vw,3.2rem)] font-medium leading-[1.05] tracking-tight">
              {quote.title}
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
              {quote.body}
            </p>
          </Reveal>
        </Section>
      ) : null}
    </main>
  );
}
