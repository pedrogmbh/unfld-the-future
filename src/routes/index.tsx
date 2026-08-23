import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink, TextArrow } from "@/components/site/buttons";
import { CodeTabs, type CodeSample } from "@/components/site/code-tabs";
import { WorkTile } from "@/components/site/work-page";
import {
  ParallaxImage,
  Reveal,
  Stagger,
  StaggerItem,
  WordStagger,
} from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import {
  customers,
  featuredWork,
  homePrompts,
  news,
  ownedProducts,
} from "@/lib/site";
import { homeJsonLd } from "@/lib/jsonld";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      path: "/",
      description:
        "Across agronomy, hiring, small business, and workplace health, UNFLD turns complex work into technology people can actually use. We also build beside organizations whose most important problems do not fit an off-the-shelf product.",
      jsonLd: homeJsonLd(),
    }),
  component: Home,
});

const apiSamples: CodeSample[] = [
  {
    id: "curl",
    label: "cURL",
    code: `curl https://www.unfld.com.br/api/v1/products \\
  -H "Accept: application/json"

# Spec:  GET /openapi.json
# Docs:  GET /api
# Agent: GET /llms.txt`,
  },
  {
    id: "ts",
    label: "TypeScript",
    code: `const res = await fetch("https://www.unfld.com.br/api/v1", {
  headers: { Accept: "application/json" },
});
const catalog = await res.json();
console.log(catalog.links.products);`,
  },
  {
    id: "python",
    label: "Python",
    code: `import urllib.request, json

req = urllib.request.Request(
    "https://www.unfld.com.br/openapi.json",
    headers={"Accept": "application/json"},
)
spec = json.load(urllib.request.urlopen(req))
print(spec["info"]["title"], spec["info"]["version"])`,
  },
];

const proofItems = [
  {
    title: "Offline in the field.",
    detail:
      "Capture evidence, conduct evaluations, and record technical facts where work happens—without breaking when connectivity disappears.",
  },
  {
    title: "Traceable in the office.",
    detail:
      "Structured data, audit-ready records, and operational visibility that connect field reality to management decisions.",
  },
  {
    title: "Ready for the next decision.",
    detail:
      "Clear guidance, producer-ready recommendations, and actionable insights delivered to the people responsible for outcomes.",
  },
] as const;

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
              Queravaga · A shorter path from profile to interview
              <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <h1 className="mt-8 font-display text-[clamp(2.8rem,9vw,6.8rem)] font-medium leading-[0.95] tracking-[-0.045em]">
            <WordStagger text="Unfolding the future." />
            <br />
            <span className="text-muted">
              <WordStagger text="One real system at a time." />
            </span>
          </h1>

          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-muted sm:text-lg">
              Across agronomy, hiring, small business, and workplace health, we
              turn complex work into technology people can actually use. When
              the right product does not exist, we build it beside the
              organization that needs it.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-3">
              <BtnLink to="/products">Our products</BtnLink>
              <BtnLink to="/contact" variant="secondary">
                Talk to UNFLD
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
          <Kicker>Products by UNFLD</Kicker>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight tracking-tight">
            Different markets. The same conviction.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            Understand the work, build what should exist next, and stay
            responsible for what happens after release.
          </p>
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
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                    {p.kicker}
                  </p>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-mono text-subtle">
                    {p.status}
                  </span>
                </div>
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
              to="/build-with-us"
              className="group block h-full bg-bg p-6 transition-colors duration-200 hover:bg-bg-elevated sm:p-8"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                  Custom systems
                </p>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-mono text-subtle">
                  Scoped
                </span>
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  Built with UNFLD
                </h3>
                <TextArrow className="text-[13px] text-muted group-hover:text-fg">
                  Explore
                </TextArrow>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                When the product is ours, we operate it. When the mission is
                yours, we build beside you.
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
                The future becomes practical when a hard problem becomes a usable system.
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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Kicker>Selected work</Kicker>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight tracking-tight">
                Work people actually used.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                Media, aviation, energy, education, sport, and the systems
                behind them. From the history we carry — named where the
                relationship and permission are clear.
              </p>
            </div>
            <Link
              to="/work"
              className="text-[13px] font-medium text-muted transition-colors hover:text-fg"
            >
              All work →
            </Link>
          </div>
        </Reveal>
        <Stagger
          className="mt-12 grid gap-8 sm:grid-cols-2"
          delay={0.08}
        >
          {featuredWork().map((w) => (
            <StaggerItem key={w.slug}>
              <WorkTile work={w} variant="half" />
            </StaggerItem>
          ))}
        </Stagger>
        <Stagger
          className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
          delay={0.03}
        >
          {customers.map((c) => (
            <StaggerItem key={c.name}>
              {c.workSlug ? (
                <Link
                  to="/work/$slug"
                  params={{ slug: c.workSlug }}
                  className="block bg-bg px-6 py-5 transition-colors hover:bg-bg-elevated sm:px-8 sm:py-6"
                >
                  <p className="font-display text-lg font-medium tracking-tight">
                    {c.name}
                  </p>
                  <p className="mt-1 text-[13px] text-muted">{c.note}</p>
                </Link>
              ) : (
                <div className="bg-bg px-6 py-5 sm:px-8 sm:py-6">
                  <p className="font-display text-lg font-medium tracking-tight">
                    {c.name}
                  </p>
                  <p className="mt-1 text-[13px] text-muted">{c.note}</p>
                </div>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
          <div className="min-w-0">
            <Reveal>
              <p className="mb-5 text-[13px] font-medium text-muted">
                Built with UNFLD
              </p>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em]">
                Built beside
                <br />
                <span className="text-muted">your operation.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                We design and ship custom systems beside teams whose operation
                cannot be reduced to a template. We understand the domain, prove
                the outcome in use, and operate with you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BtnLink to="/build-with-us">How we build</BtnLink>
                <BtnLink to="/contact" variant="secondary">
                  Talk to UNFLD
                </BtnLink>
              </div>
            </Reveal>
            <Stagger className="mt-10 grid max-w-md grid-cols-3 gap-4" delay={0.1}>
              {(
                [
                  ["5", "Products by UNFLD"],
                  ["2019", "Rooted in"],
                  ["SP", "São Paulo HQ"],
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
            <div className="space-y-4">
              {proofItems.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.08}>
                  <div className="rounded-xl border border-border bg-bg-elevated p-6 sm:p-7">
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-[13px] font-medium text-gold">
              For developers
            </p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight tracking-tight">
              UNFLD developer resources.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              API docs, OpenAPI, versioning, and a public catalog of products,
              news, work, and company facts. No authentication.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnLink to="/developers">UNFLD developer resources</BtnLink>
              <BtnLink href="/openapi.json" variant="secondary">
                OpenAPI spec
              </BtnLink>
            </div>
          </Reveal>
          <div className="min-w-0">
            <CodeTabs samples={apiSamples} />
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
