import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { interpolate } from "@/lib/i18n/interpolate";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import { formatAddressLocalized, localizeFacts, localizeOffices } from "@/lib/i18n/localize";

export const Route = createFileRoute("/sao-paulo")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.saoPaulo;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/sao-paulo",
      locale: match.context.locale,
    });
  },
  component: SaoPaulo,
});

function SaoPaulo() {
  const locale = useLocale();
  const { pages, chrome } = useMessages();
  const p = pages.saoPaulo;
  const hq = localizeOffices(locale)[0];
  const facts = localizeFacts(locale);

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
            <BtnLink to="/careers" variant="secondary">
              {chrome.nav.careers}
            </BtnLink>
          </>
        }
      />
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl">
          <img
            src="/images/hq.jpg"
            alt={p.imageAlt}
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </section>
      <Section className="py-20 sm:py-28">
        <h2 className="font-display text-3xl font-medium tracking-tight">
          {p.officeTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          {p.officeLede}
        </p>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <dt className="text-[12px] tracking-[0.16em] text-subtle uppercase">
              {chrome.common.address}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">
              {formatAddressLocalized(locale)}
            </dd>
          </div>
          <div>
            <dt className="text-[12px] tracking-[0.16em] text-subtle uppercase">
              {chrome.common.coordinates}
            </dt>
            <dd className="mt-2 font-mono text-sm">{hq.coords}</dd>
          </div>
          <div>
            <dt className="text-[12px] tracking-[0.16em] text-subtle uppercase">
              {chrome.common.legalEntity}
            </dt>
            <dd className="mt-2 text-sm text-muted">
              {SITE.legal} · CNPJ {SITE.cnpj}
              <br />
              {facts.statusValue} · {facts.establishment} · {interpolate(chrome.common.opened, { date: facts.founded })}
            </dd>
          </div>
          <div>
            <dt className="text-[12px] tracking-[0.16em] text-subtle uppercase">
              {chrome.common.contact}
            </dt>
            <dd className="mt-2 text-sm text-muted">
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-fg">
                {SITE.phone}
              </a>
              <br />
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fg"
              >
                {chrome.whatsapp} {SITE.whatsapp}
              </a>
              <br />
              <a
                href={`mailto:${SITE.registeredEmail}`}
                className="hover:text-fg"
              >
                {SITE.registeredEmail}
              </a>
            </dd>
          </div>
        </dl>
      </Section>
    </main>
  );
}
