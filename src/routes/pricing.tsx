import { createFileRoute } from "@tanstack/react-router";
import { BtnLink, WhatsAppBtn } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizePlans } from "@/lib/i18n/localize";

export const Route = createFileRoute("/pricing")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.pricing;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/pricing",
      locale: match.context.locale,
    });
  },
  component: Pricing,
});

function Pricing() {
  const locale = useLocale();
  const { pages, chrome } = useMessages();
  const p = pages.pricing;
  const planList = localizePlans(locale);
  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
      />
      <Section className="pb-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {planList.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-xl border border-border p-6"
            >
              <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
                {plan.name}
              </h2>
              <p className="mt-4 font-display text-3xl font-medium tracking-tight">
                {plan.price}
                <span className="text-sm font-normal text-muted">
                  {plan.period}
                </span>
              </p>
              <p className="mt-3 min-h-12 text-sm text-muted">{plan.blurb}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <BtnLink
                to={plan.external ? undefined : plan.href}
                href={plan.external ? plan.href : undefined}
                variant={plan.name === "Custom" ? "primary" : "secondary"}
                className="mt-8 w-full"
                {...(plan.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {plan.cta}
              </BtnLink>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pb-24 sm:pb-32">
        <Kicker>{p.customKicker}</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          {p.customTitle}
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          {p.customLede}{" "}
          <a
            href={`mailto:${SITE.sales}`}
            className="text-fg underline-offset-4 hover:underline"
          >
            {SITE.sales}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <BtnLink to="/contact">{chrome.talkToUnfld}</BtnLink>
          <WhatsAppBtn>
            {chrome.whatsapp} {SITE.whatsapp}
          </WhatsAppBtn>
        </div>
      </Section>
    </main>
  );
}
