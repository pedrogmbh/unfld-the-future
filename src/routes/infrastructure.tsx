import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({ meta: [{ title: pageTitle("Infrastructure") }] }),
  component: Infra,
});

function Infra() {
  return (
    <main>
      <PageHero
        kicker="Infrastructure"
        title="Compute we can"
        titleSecond="actually inspect."
        lede="São Paulo is headquarters. Products we own, and the software-house work, run on infrastructure we chose — not a future we cannot see."
      />
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl">
          <img
            src="/images/infra.jpg"
            alt="UNFLD compute hall"
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </section>
      <Section className="py-20">
        <Kicker>By the numbers</Kicker>
        <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            ["SP", "Headquarters"],
            ["5", "Products we own"],
            ["15+", "Companies shipped for"],
            ["2019", "Building since"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-4xl font-medium tracking-tight tabular-nums">
                {n}
              </p>
              <p className="mt-2 text-sm text-muted">{l}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pb-24 sm:pb-32">
        <h2 className="max-w-3xl font-display text-[clamp(1.7rem,3.5vw,2.8rem)] font-medium leading-tight tracking-tight">
          We go further, faster.
        </h2>
        <p className="mt-6 max-w-2xl text-muted">
          Progress in product is driven by systems we can actually inspect. São
          Paulo runs the company. The products we own — FCR, SiteCreator, Doutor
          Fiscal, Queravaga, Dialogus — and the work we still do for others sit
          on that same bar.
        </p>
      </Section>
    </main>
  );
}
