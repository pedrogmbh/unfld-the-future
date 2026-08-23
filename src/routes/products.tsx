import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { TextArrow } from "@/components/site/buttons";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizeOwnedProducts } from "@/lib/i18n/localize";

export const Route = createFileRoute("/products")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.products;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/products",
      locale: match.context.locale,
    });
  },
  component: Products,
});

function Products() {
  const locale = useLocale();
  const { pages, chrome } = useMessages();
  const p = pages.products;
  const owned = localizeOwnedProducts(locale);
  return (
    <ProductPage
      kicker={p.kicker}
      title={p.title}
      titleSecond={p.titleSecond}
      lede={p.lede}
      primary={p.primary}
      primaryTo="/contact"
      secondary={p.secondary}
      secondaryTo="/how-we-work"
      image="/images/forge.jpg"
      imageAlt={p.imageAlt}
      features={[
        { title: p.feature1Title, body: p.feature1Body },
        { title: p.feature2Title, body: p.feature2Body },
        { title: p.feature3Title, body: p.feature3Body },
        { title: p.feature4Title, body: p.feature4Body },
        { title: p.feature5Title, body: p.feature5Body },
        { title: p.feature6Title, body: p.feature6Body },
      ]}
      quote={{
        kicker: p.quoteKicker,
        title: p.quoteTitle,
        body: p.quoteBody,
      }}
    >
      <Section className="pb-20 sm:pb-28">
        <Kicker>{p.portfolioKicker}</Kicker>
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium tracking-tight">
          {p.portfolioTitle}
        </h2>
        <Stagger
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
          delay={0.06}
        >
          {owned.map((product) => (
            <StaggerItem key={product.slug}>
              <Link
                to={product.href as never}
                className="group block h-full bg-bg p-6 transition-colors duration-200 hover:bg-bg-elevated sm:p-8"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                    {product.kicker}
                  </p>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-mono text-subtle">
                    {product.status}
                  </span>
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {product.name}
                  </h3>
                  <TextArrow className="text-[13px] text-muted group-hover:text-fg">
                    {product.explore}
                  </TextArrow>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {product.line}
                </p>
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem>
            <Link
              to="/build-with-us"
              className="group block h-full bg-bg p-6 transition-colors duration-200 hover:bg-bg-elevated sm:p-8"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                  {chrome.common.customSystems}
                </p>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-mono text-subtle">
                  {chrome.common.scoped}
                </span>
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  {chrome.common.builtWithUnfld}
                </h3>
                <TextArrow className="text-[13px] text-muted group-hover:text-fg">
                  {chrome.common.explore}
                </TextArrow>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.customBody}
              </p>
            </Link>
          </StaggerItem>
        </Stagger>
      </Section>
    </ProductPage>
  );
}
