import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { ownedProducts, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/access")({
  head: () => ({
    meta: [
      { title: pageTitle("Access UNFLD products") },
      {
        name: "description",
        content:
          "Each UNFLD product has its own secure entry point. Choose the product you use.",
      },
    ],
  }),
  component: AccessPage,
});

export function AccessPage() {
  return (
    <main>
      <PageHero
        kicker="Product access"
        title="Access UNFLD"
        titleSecond="products."
        lede="Each UNFLD product has its own secure entry point. Choose the product you use below to sign in, open the web portal, or install the mobile application."
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ownedProducts.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col justify-between rounded-xl border border-border p-7 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                    {p.kicker}
                  </p>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-mono text-subtle">
                    {p.status}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-medium tracking-tight">
                  {p.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.line}
                </p>
              </div>
              <div className="mt-8">
                {p.url ? (
                  <BtnLink
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    className="w-full"
                  >
                    {p.primary}
                  </BtnLink>
                ) : (
                  <BtnLink to={p.href} variant="primary" className="w-full">
                    Learn more
                  </BtnLink>
                )}
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-between rounded-xl border border-border bg-bg-elevated p-7 sm:p-8">
            <div>
              <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                Custom software
              </p>
              <h2 className="mt-4 font-display text-2xl font-medium tracking-tight">
                Enterprise & custom
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Looking for a dedicated instance, enterprise single sign-on, or custom operational software?
              </p>
            </div>
            <div className="mt-8">
              <BtnLink to="/contact" variant="secondary" className="w-full">
                Talk to UNFLD
              </BtnLink>
            </div>
          </article>
        </div>
      </Section>
    </main>
  );
}
