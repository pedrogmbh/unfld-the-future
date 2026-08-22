import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeTabs } from "@/components/site/code-tabs";
import { BtnLink, TextArrow } from "@/components/site/buttons";
import {
  ParallaxImage,
  Reveal,
  Stagger,
  StaggerItem,
  WordStagger,
} from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { customers, homePrompts, news, ownedProducts, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle() },
      {
        name: "description",
        content:
          "UNFLD is the trading name of UNFOLDING THE FUTURE. A São Paulo software house that also ships its own digital products.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <section className="relative w-full px-5 pt-28 pb-8 sm:px-8 sm:pt-32 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Link
              to="/news/$slug"
              params={{ slug: "queravaga" }}
              className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-fg"
            >
              <span className="rounded-full border border-border-strong px-2 py-0.5 text-[10px] font-medium tracking-[0.14em] text-fg uppercase">
                New
              </span>
              Queravaga · Into the job market in minutes
              <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <h1 className="mt-8 font-display text-[clamp(3.2rem,11vw,8.4rem)] font-medium leading-[0.9] tracking-[-0.05em]">
            <WordStagger text="Unfold" />
            <br />
            <WordStagger text="the future." />
          </h1>

          <Reveal delay={0.18}>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">
              UNFLD is the trading name of UNFOLDING THE FUTURE. We build for
              other companies, and we ship products we own — from São Paulo,
              for the decade ahead.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-3">
              <BtnLink to="/products">Our products</BtnLink>
              <BtnLink to="/contact" variant="secondary">
                Contact Sales
              </BtnLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full px-5 pb-6 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <ParallaxImage
            src="/images/hero-fold.jpg"
            alt="A geometric plane unfolding in a black void"
          />
        </div>
      </section>

      <Section id="products" className="py-20 sm:py-28">
        <Reveal>
          <Kicker>Products we own</Kicker>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight tracking-tight">
            What we ship now.
          </h2>
        </Reveal>
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
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {p.name}
                  </h3>
                  <TextArrow className="text-[13px] text-muted group-hover:text-fg">
                    {p.explore}
                  </TextArrow>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.line}
                </p>
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem>
            <Link
              to="/company"
              className="group block h-full bg-bg p-6 transition-colors duration-200 hover:bg-bg-elevated sm:p-8"
            >
              <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                Software house
              </p>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  Built for others
                </h3>
                <TextArrow className="text-[13px] text-muted group-hover:text-fg">
                  Explore
                </TextArrow>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                SporTV, Netflix, Timac Agro, Embraer, and the rest of the roster.
              </p>
            </Link>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section className="py-8 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Reveal>
              <Kicker>In practice</Kicker>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight">
                Questions we built products to answer.
              </h2>
            </Reveal>
          </div>
          <div className="space-y-8">
            {homePrompts.map((p, i) => (
              <Reveal key={p.q} delay={i * 0.08}>
                <div className="border-t border-border pt-6">
                  <p className="text-[15px] font-medium">{p.q}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {p.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="clients" className="py-16 sm:py-24">
        <Reveal>
          <Kicker>Clients</Kicker>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight tracking-tight">
            When we develop as a house.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Selected companies we have shipped for. Timac Agro is one of the
            principal partnerships. The list is not complete.
          </p>
        </Reveal>
        <Stagger
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
          delay={0.04}
        >
          {customers.map((c) => (
            <StaggerItem key={c.name}>
              <div className="bg-bg px-6 py-5 sm:px-8 sm:py-6">
                <p className="font-display text-lg font-medium tracking-tight">
                  {c.name}
                </p>
                {"note" in c && c.note ? (
                  <p className="mt-1 text-[13px] text-muted">{c.note}</p>
                ) : null}
              </div>
            </StaggerItem>
          ))}
          <StaggerItem>
            <div className="flex h-full items-center bg-bg px-6 py-5 sm:px-8 sm:py-6">
              <p className="font-display text-lg font-medium tracking-tight text-muted">
                And others.
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
          <div className="min-w-0">
            <Reveal>
              <p className="mb-5 text-[13px] font-medium text-muted">
                For developers
              </p>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em]">
                Field software.
                <br />
                <span className="text-muted">Still a house.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                FCR collects agronomy results offline, then syncs. We still
                sit with operations — Timac Agro, and the rest of the roster
                — and ship what they actually run.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BtnLink to="/fcr">Open FCR</BtnLink>
                <BtnLink to="/contact" variant="secondary">
                  Contact Sales
                </BtnLink>
              </div>
            </Reveal>
            <Stagger className="mt-10 grid max-w-md grid-cols-3 gap-4" delay={0.1}>
              {(
                [
                  ["5", "Products we own"],
                  ["15+", "Companies shipped for"],
                  ["2019", "Building since"],
                ] as const
              ).map(([v, l]) => (
                <StaggerItem key={l}>
                  <p className="font-display text-xl font-medium tracking-tight tabular-nums sm:text-2xl">
                    {v}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-subtle">{l}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="min-w-0">
            <CodeTabs />
          </div>
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <Kicker>Latest news</Kicker>
            <h2 className="font-display text-3xl font-medium tracking-tight">
              From UNFLD.
            </h2>
          </div>
          <Link
            to="/news"
            className="text-[13px] font-medium text-muted transition-colors hover:text-fg"
          >
            All posts →
          </Link>
        </div>
        <Stagger
          className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2"
          delay={0.07}
        >
          {news.slice(0, 4).map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                to="/news/$slug"
                params={{ slug: post.slug }}
                className="group block h-full bg-bg p-6 transition-colors hover:bg-bg-elevated sm:p-8"
              >
                <p className="text-[12px] text-subtle">{post.date}</p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight group-hover:opacity-80">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {post.standfirst}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </main>
  );
}
