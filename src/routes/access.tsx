import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizeOwnedProducts } from "@/lib/i18n/localize";

export const Route = createFileRoute("/access")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.access;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/access",
      locale: match.context.locale,
    });
  },
  component: AccessPage,
});

export function AccessPage() {
  const locale = useLocale();
  const { pages, chrome } = useMessages();
  const p = pages.access;
  const owned = localizeOwnedProducts(locale);
  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {owned.map((product) => (
            <article
              key={product.slug}
              className="flex flex-col justify-between rounded-xl border border-border p-7 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                    {product.kicker}
                  </p>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-mono text-subtle">
                    {product.status}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-medium tracking-tight">
                  {product.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {product.line}
                </p>
              </div>
              <div className="mt-8">
                {product.url ? (
                  <BtnLink
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    className="w-full"
                  >
                    {product.primary}
                  </BtnLink>
                ) : (
                  <BtnLink to={product.href} variant="primary" className="w-full">
                    {chrome.common.learnMore}
                  </BtnLink>
                )}
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-between rounded-xl border border-border bg-bg-elevated p-7 sm:p-8">
            <div>
              <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                {p.customKicker}
              </p>
              <h2 className="mt-4 font-display text-2xl font-medium tracking-tight">
                {p.customTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.customBody}
              </p>
            </div>
            <div className="mt-8">
              <BtnLink to="/contact" variant="secondary" className="w-full">
                {chrome.talkToUnfld}
              </BtnLink>
            </div>
          </article>
        </div>
      </Section>
    </main>
  );
}
