import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { interview, offices, pageTitle, roles } from "@/lib/site";

export const Route = createFileRoute("/careers/")({
  head: () => ({ meta: [{ title: pageTitle("Careers") }] }),
  component: Careers,
});

function Careers() {
  return (
    <main>
      <PageHero
        kicker="Careers"
        title="Build products that"
        titleSecond="outlast the brief."
        lede="We are a team of engineers, designers, and operators on a mission to unfold the next decade of software. Join us if you want to own what you ship — and still sit with clients."
        actions={
          <BtnLink to="/careers/open-roles">View open roles</BtnLink>
        }
      />

      <Section className="pb-16">
        <Kicker>Why UNFLD</Kicker>
        <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight">
          Ambitious goals, fast execution
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          We are driven by curiosity, ownership, and a strong sense of urgency.
          Join us if you want to work on products that are ours — and ship them
          to people who use them every day.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Competitive compensation", "Cash and equity packages built to attract people who could work anywhere."],
            ["Health and wellness", "Medical, dental, vision, and disability coverage for you and your family."],
            ["Life and family", "Life insurance and family-forming support. We plan to be here a long time."],
            ["Flexible vacation", "We work hard and take time off when we need it. No burn-out theater."],
            ["Visa sponsorship", "We support international talent joining São Paulo."],
            ["Ownership", "The people who build FCR, Queravaga, and Dialogus also run them."],
          ].map(([t, d]) => (
            <article key={t} className="bg-bg p-7">
              <h3 className="font-medium">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <Kicker>Join us</Kicker>
            <h2 className="font-display text-3xl font-medium tracking-tight">
              Featured roles
            </h2>
          </div>
          <Link
            to="/careers/open-roles"
            className="text-[13px] text-muted hover:text-fg"
          >
            View all →
          </Link>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {roles.slice(0, 5).map((r) => (
            <li key={r.id}>
              <Link
                to="/careers/open-roles"
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <p className="font-medium">{r.title}</p>
                <p className="text-sm text-muted">
                  {r.locations.join(" · ")}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="py-16">
        <Kicker>What to expect</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Interview process
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {interview.map((s) => (
            <li key={s.n}>
              <p className="font-mono text-[12px] text-subtle">{s.n}</p>
              <h3 className="mt-3 font-display text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="py-16 pb-24 sm:pb-32">
        <Kicker>Offices</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Based in São Paulo
        </h2>
        <div className="mt-10 overflow-hidden rounded-xl">
          <img
            src="/images/office.jpg"
            alt="UNFLD office at night"
            className="aspect-[16/7] w-full object-cover"
          />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.city}>
              <p className="font-medium">{o.city}</p>
              <p className="font-mono text-[11px] text-subtle">{o.coords}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
