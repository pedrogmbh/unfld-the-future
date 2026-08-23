import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { TextArrow } from "@/components/site/buttons";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { ownedProducts } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/products")({
  head: () =>
    buildPageHead({
      title: "Products by UNFLD",
      description:
        "Explore FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus—five products by UNFLD across agronomy, small business, hiring, and workplace health.",
      path: "/products",
    }),
  component: Products,
});

function Products() {
  return (
    <ProductPage
      kicker="Portfolio"
      title="Products by"
      titleSecond="UNFLD."
      lede="Five products, built around five kinds of work that should be simpler: agronomy, digital presence, fiscal operations, hiring, and workplace health."
      primary="Talk to UNFLD"
      primaryTo="/contact"
      secondary="How we build"
      secondaryTo="/how-we-work"
      image="/images/forge.jpg"
      imageAlt="UNFLD products on glass devices in a dark void"
      features={[
        {
          title: "Five products, each at a different stage",
          body: "FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus advance across clearly defined stages—from private deployments to live general access.",
        },
        {
          title: "Operated with accountability",
          body: "We stay close to the systems we run—maintaining release trains, monitoring reliability, and evolving with customer reality.",
        },
        {
          title: "Distinct entry points",
          body: "Each product offers a dedicated, secure entry point tailored to how users work—whether on mobile in the field, on WhatsApp, or in the browser.",
        },
        {
          title: "WhatsApp where it creates speed",
          body: "SiteCreator and Doutor Fiscal meet small businesses in the channel they already use daily, reducing friction and onboarding steps.",
        },
        {
          title: "Field and enterprise depth",
          body: "FCR and Dialogus deliver deep domain logic for agronomy teams and organizational risk managers, backing operational routines with verifiable data.",
        },
        {
          title: "Long-term commitment",
          body: "We build systems intended to endure. The standard is consistent: understand the work, ship what matters, and remain accountable.",
        },
      ]}
      quote={{
        kicker: "Operating principle",
        title: "We build for ourselves and beside our clients.",
        body: "The standard is the same: understand the work, ship what matters, and stay accountable after release.",
      }}
    >
      <Section className="pb-20 sm:pb-28">
        <Kicker>The portfolio</Kicker>
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium tracking-tight">
          Systems in operation.
        </h2>
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
                Custom software systems designed and shipped beside organizations with consequential operations.
              </p>
            </Link>
          </StaggerItem>
        </Stagger>
      </Section>
    </ProductPage>
  );
}
