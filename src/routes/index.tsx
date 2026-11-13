import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { Kicker, Section } from "@/components/site/section";
import { homeJsonLd } from "@/lib/jsonld";
import { buildPageHead } from "@/lib/meta";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizeOwnedProducts, localizeWork } from "@/lib/i18n/localize";

const PROOF_SLUGS = ["netflix-tudum-2020", "embraer"] as const;

const PROOF_IMAGE: Record<(typeof PROOF_SLUGS)[number], string> = {
  "netflix-tudum-2020": "tudum",
  embraer: "embraer",
};

export const Route = createFileRoute("/")({
  head: ({ match }) =>
    buildPageHead({
      path: "/",
      description: undefined,
      jsonLd: homeJsonLd(match.context.locale),
      locale: match.context.locale,
    }),
  component: Home,
});

function Home() {
  const locale = useLocale();
  const { pages, chrome } = useMessages();
  const home = pages.home;
  const company = pages.company;
  const owned = localizeOwnedProducts(locale);
  const work = new Map(localizeWork(locale).map((item) => [item.slug, item]));
  const proof = PROOF_SLUGS.map((slug) => work.get(slug)).filter(
    (item) => item != null,
  );
  const fronts = [
    {
      to: "/products" as const,
      label: home.frontProduct,
      body: company.portfolioLede,
    },
    {
      to: "/build-with-us" as const,
      label: home.frontDesign,
      body: pages.buildWithUs.metaDescription,
    },
    {
      to: "/company" as const,
      label: home.frontConsulting,
      body: chrome.facts.activityName,
    },
  ];

  return (
    <main>
      <section className="flex w-full flex-col justify-center px-5 pt-32 pb-14 sm:px-8 sm:pt-36 sm:pb-20 lg:min-h-[90dvh] lg:px-12">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <h1 className="font-display text-[clamp(3.5rem,6.4vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.015em]">
              {home.heroTitle}
              <br />
              <span className="text-fg">{home.heroTitleSecond}</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted sm:text-xl">
              {`${company.title} ${company.titleSecond}`}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <BtnLink to="/contact">{chrome.talkToUnfld}</BtnLink>
              <Link
                to="/products"
                className="rounded-full text-[13px] font-medium text-muted transition-colors hover:text-fg"
              >
                {home.ourProducts}
              </Link>
            </div>
          </div>
          <picture className="block min-w-0 overflow-hidden">
            <source
              type="image/avif"
              srcSet="/images/hive-fold-800.avif 800w, /images/hive-fold-1600.avif 1600w"
              sizes="(min-width: 1024px) 552px, 100vw"
            />
            <img
              src="/images/hive-fold-800.webp"
              srcSet="/images/hive-fold-800.webp 800w, /images/hive-fold-1600.webp 1600w"
              sizes="(min-width: 1024px) 552px, 100vw"
              alt={home.heroImageAlt}
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="aspect-[16/10] w-full object-cover lg:aspect-[4/5]"
            />
          </picture>
        </div>
      </section>

      <Section className="py-20 sm:py-28">
        <div className="home-rise">
          <h2 className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">
            {home.frontsTitle}
          </h2>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {fronts.map((front, index) => (
              <li key={front.to} className="min-w-0 bg-bg">
                <Link
                  to={front.to}
                  className="group block h-full p-6 transition-colors duration-200 hover:bg-bg-elevated sm:p-8"
                >
                  <p className="font-mono text-[12px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
                    {front.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {front.body}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="products" className="pb-20 sm:pb-28">
        <div className="home-rise">
          <h2 className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">
            {home.productsKicker}
          </h2>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-8">
            {owned.map((product) => (
              <li key={product.slug}>
                <Link
                  to={product.href as never}
                  className="rounded-sm font-sans text-lg font-medium tracking-tight transition-colors hover:text-muted sm:text-xl"
                >
                  {product.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="clients" className="pb-20 sm:pb-28">
        <div className="home-rise">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Kicker>{home.selectedWorkKicker}</Kicker>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight tracking-tight">
                {home.selectedWorkTitle}
              </h2>
            </div>
            <Link
              to="/work"
              className="rounded-sm text-[13px] font-medium text-muted transition-colors hover:text-fg"
            >
              {chrome.common.allWorkArrow}
            </Link>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {proof.map((item) => (
              <Link
                key={item.slug}
                to="/work/$slug"
                params={{ slug: item.slug }}
                className="group block min-w-0"
              >
                <ProofImage
                  id={PROOF_IMAGE[item.slug as (typeof PROOF_SLUGS)[number]]}
                />
                <p className="mt-4 text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
                  {item.client}
                  <span> · {item.year}</span>
                </p>
                <h3 className="mt-2 font-display text-xl font-medium tracking-tight sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                  {item.line}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <div className="home-rise border-t border-border pt-16 sm:pt-20">
          <h2 className="max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight tracking-tight">
            {`${pages.contact.title} ${pages.contact.titleSecond}`}
          </h2>
          <div className="mt-8">
            <BtnLink to="/contact">{chrome.talkToUnfld}</BtnLink>
          </div>
        </div>
      </Section>
    </main>
  );
}

function ProofImage({ id }: { id: string }) {
  const widths = [640, 960, 1280];
  const sizes = "(min-width: 1024px) 540px, (min-width: 640px) 46vw, 100vw";
  const srcSet = (ext: "avif" | "webp") =>
    widths.map((width) => `/images/home/${id}-${width}.${ext} ${width}w`).join(", ");

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={`/images/home/${id}-960.webp`}
        alt=""
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
        sizes={sizes}
        className="aspect-video w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-fg/10"
      />
    </picture>
  );
}
