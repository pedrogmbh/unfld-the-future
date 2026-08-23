import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { interview, offices, roles, SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/careers/")({
  head: () =>
    buildPageHead({
      title: "Careers",
      description:
        "Do work you can point to. Join UNFLD when you want responsibility to be concrete—not ceremonial.",
      path: "/careers",
    }),
  component: Careers,
});

function Careers() {
  return (
    <main>
      <PageHero
        kicker="Careers"
        title="Do work you can"
        titleSecond="point to."
        lede="At UNFLD, a small team moves between field operations, product decisions, code, and customer reality. Join when you want responsibility to be concrete—not ceremonial."
        actions={
          <BtnLink to="/careers/open-roles">View open roles</BtnLink>
        }
      />

      <Section className="pb-16">
        <Kicker>Working at UNFLD</Kicker>
        <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight">
          Responsibility is concrete, not ceremonial
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Product work stays close to the people who use it. Engineers, designers, and operators share responsibility for what ships and what happens next.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            [
              "Shared ownership",
              "The people who build our products and custom systems also run them, measure their impact, and improve them in use.",
            ],
            [
              "Sustainable pace",
              "Urgency matters. So do sustainable pace, clear priorities, and the ability to stop work that no longer creates value.",
            ],
            [
              "Transparent terms",
              "Compensation, benefits, work location, and any relocation support are stated transparently on each open role.",
            ],
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
              Open roles
            </h2>
          </div>
          <Link
            to="/careers/open-roles"
            className="text-[13px] text-muted hover:text-fg"
          >
            All roles →
          </Link>
        </div>
        {roles.length > 0 ? (
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
        ) : (
          <div className="rounded-xl border border-border p-8 text-center sm:p-12">
            <p className="font-display text-xl font-medium">
              No open roles right now.
            </p>
            <p className="mt-3 text-sm text-muted">
              You can still introduce yourself and share your work at{" "}
              <a
                href={`mailto:${SITE.careers}`}
                className="text-fg underline-offset-4 hover:underline"
              >
                {SITE.careers}
              </a>
              .
            </p>
          </div>
        )}
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
        <Kicker>Office</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          UNFLD in São Paulo
        </h2>
        <div className="mt-10 overflow-hidden rounded-xl">
          <img
            src="/images/office.jpg"
            alt="UNFLD office in São Paulo"
            className="aspect-[16/7] w-full object-cover"
          />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.city}>
              <p className="font-medium">{o.city}</p>
              <p className="text-sm text-muted">{o.role}</p>
              <p className="font-mono text-[11px] text-subtle">{o.coords}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
