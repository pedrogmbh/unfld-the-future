import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import {
  customers,
  formatAddress,
  news,
  offices,
  ownedProducts,
  pageTitle,
  SITE,
  timeline,
  values,
} from "@/lib/site";

export const Route = createFileRoute("/company")({
  head: () => ({ meta: [{ title: pageTitle("Company") }] }),
  component: Company,
});

function Company() {
  return (
    <main>
      <PageHero
        kicker="Our mission"
        title="Unfold the"
        titleSecond="products ahead."
        lede="UNFLD is the trading name of UNFOLDING THE FUTURE. We are a software house that also ships its own products — apps, services, and counsel, from São Paulo."
        actions={
          <>
            <BtnLink to="/careers">Careers</BtnLink>
            <BtnLink to="/news" variant="secondary">
              News
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16 sm:pb-20">
        <Kicker>Who we are</Kicker>
        <h2 className="max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-tight tracking-tight">
          Five letters. A full legal name. A house that still builds.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
          We trade as UNFLD. The company is UNFOLDING THE FUTURE LTDA — a
          Brazilian limited company (sociedade empresária limitada) in Bela
          Vista, São Paulo, active since {SITE.founded}. For years we designed
          and shipped digital products for other companies. We still do. We
          also operate products under our own name.
        </p>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Trading name", SITE.name],
            ["Legal name", SITE.legal],
            ["CNPJ", SITE.cnpj],
            ["Opened", SITE.founded],
            ["Activity", SITE.activity.nameEn],
            ["Nature", SITE.legalNature],
            ["Status", `${SITE.status} · ${SITE.establishment}`],
            ["Size", SITE.porte],
          ].map(([k, v]) => (
            <div key={k} className="bg-bg p-6">
              <dt className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                {k}
              </dt>
              <dd className="mt-2 font-display text-lg font-medium tracking-tight">
                {v}
              </dd>
              {k === "Activity" ? (
                <p className="mt-2 font-mono text-[11px] text-subtle">
                  CNAE {SITE.activity.code}
                </p>
              ) : null}
            </div>
          ))}
        </dl>
        <div className="mt-6 flex flex-col gap-2 font-mono text-[12px] leading-relaxed text-subtle sm:flex-row sm:flex-wrap sm:gap-x-8">
          <p>{formatAddress()}</p>
          <p>
            <a href={`tel:${SITE.phoneHref}`} className="hover:text-fg">
              {SITE.phone}
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
              href: "/forge",
              img: "/images/forge.jpg",
              t: "Products we own",
              d: "FCR, SiteCreator, Doutor Fiscal, Queravaga, Dialogus.",
            },
            {
              href: "/sao-paulo",
              img: "/images/hq.jpg",
              t: "São Paulo",
              d: "Bela Vista. Headquarters.",
            },
            {
              href: "/dialogus",
              img: "/images/office.jpg",
              t: "Dialogus",
              d: "Psychosocial risk. NR-1.",
            },
            {
              href: "/careers",
              img: "/images/office.jpg",
              t: "Careers",
              d: "Join the team.",
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
        <Kicker>Products we own</Kicker>
        <h2 className="max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-tight tracking-tight">
          Five products. Operated by UNFLD.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Distinct from the software-house work. These are ours to run.
        </p>
        <Stagger
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
          delay={0.06}
        >
          {ownedProducts.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                to={p.href as never}
                className="group block h-full bg-bg p-6 transition-colors duration-200 hover:bg-bg-elevated sm:p-8"
              >
                <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                  {p.kicker}
                </p>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.line}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section id="clients" className="pb-20 sm:pb-28">
        <Kicker>Software house</Kicker>
        <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium tracking-tight">
          Companies we have built for.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          When we develop as a software house, we sit with the operation and
          ship. Timac Agro is one of the principal partnerships. The list is
          not complete.
        </p>
        <Stagger
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
          delay={0.04}
        >
          {customers.map((c) => (
            <StaggerItem key={c.name}>
              <div className="bg-bg p-6 sm:p-8">
                <p className="font-display text-xl font-medium tracking-tight">
                  {c.name}
                </p>
                {"note" in c && c.note ? (
                  <p className="mt-2 text-sm text-muted">{c.note}</p>
                ) : null}
              </div>
            </StaggerItem>
          ))}
          <StaggerItem>
            <div className="flex h-full items-center bg-bg p-6 sm:p-8">
              <p className="font-display text-xl font-medium tracking-tight text-muted">
                And others.
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <Kicker>At our core</Kicker>
        <h2 className="max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-tight tracking-tight">
          A focused team connected by curiosity, ownership, and an unwavering drive.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {values.map((v) => (
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
        <Kicker>Office</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Based in São Paulo.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Headquarters in Bela Vista, minutes from Avenida Paulista. We
          prioritize in-person work to support fast, collaborative projects.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
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
        <Kicker>Our path of progress</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          From a house to products we own.
        </h2>
        <ol className="mt-12 space-y-0">
          {timeline.map((t, i) => (
            <li
              key={t.date}
              className="grid gap-2 border-t border-border py-8 sm:grid-cols-[8rem_1fr] sm:gap-10"
            >
              <p className="font-mono text-sm text-subtle">{t.date}</p>
              <div>
                <h3 className="font-display text-xl font-medium">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
              </div>
              <span className="sr-only">Step {i + 1}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl font-medium">Latest news</h2>
          <Link to="/news" className="text-[13px] text-muted hover:text-fg">
            All posts →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {news.slice(0, 4).map((p) => (
            <Link key={p.slug} to="/news/$slug" params={{ slug: p.slug }}>
              <p className="text-[12px] text-subtle">{p.date}</p>
              <p className="mt-2 font-medium">{p.title}</p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
