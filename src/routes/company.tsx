import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { news, offices, pageTitle, timeline, values } from "@/lib/site";

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
        lede="We used to be a software house. Now we build our own digital products for the future — apps, services, APIs, intelligence, and counsel."
        actions={
          <>
            <BtnLink to="/careers">Careers</BtnLink>
            <BtnLink to="/news" variant="secondary">
              News
            </BtnLink>
          </>
        }
      />

      <section className="px-5 sm:px-8 lg:px-12">
        <Stagger className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2" delay={0.08}>
          {[
            { href: "/pulse", img: "/images/pulse.jpg", t: "Pulse 2", d: "Our intelligence platform." },
            { href: "/infrastructure", img: "/images/infra.jpg", t: "Infrastructure", d: "Compute we run ourselves." },
            { href: "/relay", img: "/images/relay.jpg", t: "Relay API", d: "One API. Every product." },
            { href: "/careers", img: "/images/office.jpg", t: "Careers", d: "Join the team." },
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

      <Section className="py-20 sm:py-28">
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
        <Kicker>Offices</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Collaboration across borders
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          We hire across São Paulo, Porto Alegre, Lisbon, and Austin. We
          prioritize in-person work to support fast, collaborative projects.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <Link
              key={o.city}
              to={o.href as never}
              className="bg-bg p-6 transition-colors hover:bg-bg-elevated"
            >
              <p className="font-display text-xl font-medium">{o.city}</p>
              <p className="mt-1 text-sm text-muted">{o.role}</p>
              <p className="mt-4 font-mono text-[11px] text-subtle">{o.coords}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <Kicker>Our path of progress</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          From a house to a product company.
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
