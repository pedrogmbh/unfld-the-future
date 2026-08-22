import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/sao-paulo")({
  head: () => ({ meta: [{ title: pageTitle("São Paulo") }] }),
  component: SaoPaulo,
});

function SaoPaulo() {
  return (
    <main>
      <PageHero
        kicker="UNFLD São Paulo"
        title="We’re hiring"
        titleSecond="in São Paulo."
        lede="Headquarters. Product, design, and the people who still remember when we were a software house. Jardins, minutes from Avenida Paulista."
        actions={<BtnLink to="/careers">View open roles</BtnLink>}
      />
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl">
          <img
            src="/images/hq.jpg"
            alt="UNFLD headquarters at night"
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </section>
      <Section className="py-20 sm:py-28">
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Who we’re looking for
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Small, focused teams building Forge, Pulse, Relay, and the
          infrastructure behind them. We prioritize in-person work.
        </p>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <dt className="text-[12px] tracking-[0.16em] text-subtle uppercase">
              Coordinates
            </dt>
            <dd className="mt-2 font-mono text-sm">23.5505°S, 46.6333°W</dd>
          </div>
          <div>
            <dt className="text-[12px] tracking-[0.16em] text-subtle uppercase">
              Working hours
            </dt>
            <dd className="mt-2 text-sm text-muted">
              In office, the hours the work needs. Not a theater of presence.
            </dd>
          </div>
        </dl>
      </Section>
    </main>
  );
}
