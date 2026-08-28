import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { WorkTile } from "@/components/site/work-page";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { interpolate } from "@/lib/i18n/interpolate";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import {
  formatAddressLocalized,
  localizeCustomers,
  localizeFacts,
  localizeNews,
  localizeOffices,
  localizeOwnedProducts,
  localizeTimeline,
  localizeValues,
  localizeWork,
} from "@/lib/i18n/localize";

export const Route = createFileRoute("/company")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.company;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/company",
      locale: match.context.locale,
    });
  },
  component: Company,
});

function Company() {
  const locale = useLocale();
  const { pages, chrome } = useMessages();
  const p = pages.company;
  const facts = localizeFacts(locale);
  const owned = localizeOwnedProducts(locale);
  const work = localizeWork(locale).filter((item) => item.featured);
  const featured = work;
  const customerList = localizeCustomers(locale);
  const valueList = localizeValues(locale);
  const officeList = localizeOffices(locale);
  const timelineList = localizeTimeline(locale);
  const posts = localizeNews(locale);

  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
        actions={
          <>
            <BtnLink to="/careers">{chrome.nav.careers}</BtnLink>
            <BtnLink to="/news" variant="secondary">
              {chrome.nav.news}
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16 sm:pb-20">
        <Kicker>{p.whoKicker}</Kicker>
        <h2 className="max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-tight tracking-tight">
          {p.whoTitle}
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
          {interpolate(p.whoBody, { founded: facts.founded })}
        </p>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            [chrome.facts.tradingName, SITE.name],
            [chrome.facts.legalName, SITE.legal],
            [chrome.facts.cnpj, SITE.cnpj],
            [chrome.facts.opened, facts.founded],
            [chrome.facts.activity, facts.activityName],
            [chrome.facts.nature, facts.legalNature],
            [chrome.facts.status, `${facts.statusValue} · ${facts.establishment}`],
            [chrome.facts.size, facts.porte],
          ].map(([k, v]) => (
            <div key={k} className="bg-bg p-6">
              <dt className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                {k}
              </dt>
              <dd className="mt-2 font-display text-lg font-medium tracking-tight">
                {v}
              </dd>
              {k === chrome.facts.activity ? (
                <p className="mt-2 font-mono text-[11px] text-subtle">
                  CNAE {SITE.activity.code}
                </p>
              ) : null}
            </div>
          ))}
        </dl>
        <div className="mt-6 flex flex-col gap-2 font-mono text-[12px] leading-relaxed text-subtle sm:flex-row sm:flex-wrap sm:gap-x-8">
          <p>{formatAddressLocalized(locale)}</p>
          <p>
            <a href={`tel:${SITE.phoneHref}`} className="hover:text-fg">
              {SITE.phone}
            </a>
          </p>
          <p>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              {chrome.whatsapp} {SITE.whatsapp}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${SITE.registeredEmail}`}
              className="hover:text-fg"
            >
              {SITE.registeredEmail}
            </a>
          </p>
        </div>
      </Section>

      <section className="px-5 sm:px-8 lg:px-12">
        <Stagger className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2" delay={0.08}>
          {[
            {
              href: "/products",
              img: "/images/forge.jpg",
              t: p.tileProducts,
              d: p.tileProductsBody,
            },
            {
              href: "/sao-paulo",
              img: "/images/hq.jpg",
              t: p.tileSp,
              d: p.tileSpBody,
            },
            {
              href: "/work",
              img: "/images/work/plastic-hero.png",
              t: p.tileWork,
              d: p.tileWorkBody,
            },
            {
              href: "/careers",
              img: "/images/office.jpg",
              t: p.tileCareers,
              d: p.tileCareersBody,
            },
          ].map((c) => (
            <StaggerItem key={c.t}>
              <Link
                to={c.href as never}
                className="group relative block overflow-hidden rounded-xl"
              >
                <img
                  src={c.img}
                  alt=""
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-xl font-medium">{c.t}</p>
                  <p className="text-sm text-muted">{c.d}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Section id="products" className="py-20 sm:py-28">
        <Kicker>{p.portfolioKicker}</Kicker>
        <h2 className="max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-tight tracking-tight">
          {p.portfolioTitle}
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          {p.portfolioLede}
        </p>
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
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{product.line}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section id="clients" className="pb-20 sm:pb-28">
        <Kicker>{p.workKicker}</Kicker>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium tracking-tight">
              {p.workTitle}
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              {p.workLede}
            </p>
          </div>
          <Link to="/work" className="text-[13px] text-muted hover:text-fg">
            {chrome.common.allWorkArrow}
          </Link>
        </div>
        <Stagger
          className="mt-12 grid gap-8 sm:grid-cols-2"
          delay={0.08}
        >
          {featured.map((w) => (
            <StaggerItem key={w.slug}>
              <WorkTile work={w} variant="half" />
            </StaggerItem>
          ))}
        </Stagger>
        <Stagger
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
          delay={0.04}
        >
          {customerList.map((c) => (
            <StaggerItem key={c.name}>
              {c.workSlug ? (
                <Link
                  to="/work/$slug"
                  params={{ slug: c.workSlug }}
                  className="block bg-bg p-6 transition-colors hover:bg-bg-elevated sm:p-8"
                >
                  <p className="font-display text-xl font-medium tracking-tight">
                    {c.name}
                  </p>
                  <p className="mt-2 text-sm text-muted">{c.note}</p>
                </Link>
              ) : (
                <div className="bg-bg p-6 sm:p-8">
                  <p className="font-display text-xl font-medium tracking-tight">
                    {c.name}
                  </p>
                  <p className="mt-2 text-sm text-muted">{c.note}</p>
                </div>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <Kicker>{p.valuesKicker}</Kicker>
        <h2 className="max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-tight tracking-tight">
          {p.valuesTitle}
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {valueList.map((v) => (
            <Reveal key={v.n}>
              <p className="font-mono text-[12px] text-subtle">{v.n}</p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="offices" className="pb-20 sm:pb-28">
        <Kicker>{p.officeKicker}</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          {p.officeTitle}
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          {p.officeLede}
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {officeList.map((o) => (
            <Link
              key={o.city}
              to={o.href as never}
              className="bg-bg p-6 transition-colors hover:bg-bg-elevated lg:col-span-2"
            >
              <p className="font-display text-xl font-medium">{o.city}</p>
              <p className="mt-1 text-sm text-muted">{o.role}</p>
              <p className="mt-2 text-sm text-muted">{o.detail}</p>
              <p className="mt-4 font-mono text-[11px] text-subtle">{o.coords}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <Kicker>{p.pathKicker}</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          {p.pathTitle}
        </h2>
        <ol className="mt-12 space-y-0">
          {timelineList.map((t, i) => (
            <li
              key={t.date}
              className="grid gap-2 border-t border-border py-8 sm:grid-cols-[8rem_1fr] sm:gap-10"
            >
              <p className="font-mono text-sm text-subtle">{t.date}</p>
              <div>
                <h3 className="font-display text-xl font-medium">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
              </div>
              <span className="sr-only">{interpolate(chrome.step, { n: i + 1 })}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl font-medium">{p.latestNews}</h2>
          <Link to="/news" className="text-[13px] text-muted hover:text-fg">
            {chrome.common.allPostsArrow}
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.slice(0, 4).map((post) => (
            <Link key={post.slug} to="/news/$slug" params={{ slug: post.slug }}>
              <p className="text-[12px] text-subtle">{post.date}</p>
              <p className="mt-2 font-medium">{post.title}</p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
