import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";
import { buildPageHead } from "@/lib/meta";
import { SITE, telemedicineBrands } from "@/lib/site";

export const Route = createFileRoute("/telemedicina")({
  head: ({ match }) => {
    const copy = getMessages(match.context.locale).pages.telemedicine;
    return buildPageHead({
      title: copy.metaTitle,
      description: copy.metaDescription,
      path: "/telemedicina",
      locale: match.context.locale,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: copy.metaTitle,
        description: copy.metaDescription,
        url: `${SITE.url}/telemedicina`,
        inLanguage: match.context.locale,
        about: { "@id": `${SITE.url}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: telemedicineBrands.map((brand, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "WebSite",
              name: brand.name,
              url: brand.url,
              description: copy.brands[brand.slug].description,
            },
          })),
        },
      },
    });
  },
  component: Telemedicine,
});

function Telemedicine() {
  const { pages } = useMessages();
  const copy = pages.telemedicine;

  return (
    <main>
      <PageHero
        kicker={copy.kicker}
        title={copy.title}
        titleSecond={copy.titleSecond}
        lede={copy.lede}
        className="sm:pb-16"
        actions={
          <>
            <BtnLink href="#brands">{copy.choose}</BtnLink>
            <BtnLink href="#benefits" variant="secondary">
              {copy.viewBenefits}
            </BtnLink>
          </>
        }
      />

      <Section id="brands" className="scroll-mt-28 pb-20 sm:pb-28">
        <h2 className="max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight">
          {copy.brandsLabel}
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {telemedicineBrands.map((brand) => {
            const text = copy.brands[brand.slug];
            const imageBase = `/images/telemedicina/${brand.slug}`;
            const sizes = "(min-width: 1024px) 564px, 100vw";
            return (
              <article
                key={brand.slug}
                id={brand.slug}
                className="flex min-w-0 scroll-mt-28 flex-col overflow-hidden border border-border bg-bg"
              >
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={text.visit}
                  className="group block overflow-hidden border-b border-border"
                >
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={`${imageBase}-640.avif 640w, ${imageBase}-1280.avif 1280w`}
                      sizes={sizes}
                    />
                    <img
                      src={`${imageBase}-1280.webp`}
                      srcSet={`${imageBase}-640.webp 640w, ${imageBase}-1280.webp 1280w`}
                      sizes={sizes}
                      alt={text.alt}
                      width={1280}
                      height={720}
                      loading="lazy"
                      decoding="async"
                      className="aspect-video w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                    />
                  </picture>
                </a>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                    {text.audience}
                  </p>
                  <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                    {brand.name}
                  </h3>
                  <p className="mt-4 flex-1 text-[17px] leading-relaxed text-muted">
                    {text.description}
                  </p>
                  <div className="mt-8">
                    <BtnLink
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      {text.visit}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </BtnLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-sm text-subtle">{copy.screensNote}</p>
      </Section>

      <Section id="benefits" className="scroll-mt-28 pb-20 sm:pb-28">
        <Reveal>
          <div className="grid gap-6 border-t border-border pt-12 lg:grid-cols-2 lg:gap-16">
            <h2 className="max-w-xl font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight">
              {copy.foundationTitle}
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted">{copy.foundationBody}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {copy.benefits.map((benefit) => (
            <div key={benefit.title} className="min-w-0 bg-bg p-6">
              <h3 className="text-xl font-semibold leading-snug">{benefit.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{benefit.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <div className="flex flex-col items-start gap-8 border-t border-border pt-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight">
              {copy.closeTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{copy.closeBody}</p>
          </div>
          <BtnLink href="#brands" className="shrink-0">
            {copy.choose}
          </BtnLink>
        </div>
      </Section>
    </main>
  );
}
