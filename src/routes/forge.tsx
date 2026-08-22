import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { TextArrow } from "@/components/site/buttons";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { ownedProducts, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/forge")({
  head: () => ({ meta: [{ title: pageTitle("Forge") }] }),
  component: Forge,
});

function Forge() {
  return (
    <ProductPage
      kicker="Forge"
      title="Products we own"
      titleSecond="and operate."
      lede="Forge is the family of apps UNFLD ships under its own name. FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus Psicossocial — designed, built, and run by the same team."
      primary="Talk to sales"
      primaryTo="/contact"
      secondary="The company"
      secondaryTo="/company"
      image="/images/forge.jpg"
      imageAlt="Forge apps on glass devices in a dark void"
      features={[
        {
          title: "Five products in market",
          body: "FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus Psicossocial. Distinct from the software-house work. These we operate.",
        },
        {
          title: "Operated, not delivered",
          body: "We still ship for others. Forge products stay in our hands — release trains, support, and the boring reliability work.",
        },
        {
          title: "Native on every surface",
          body: "Web first, then the surfaces the product needs. Same accounts. Same craft. Clients that feel considered.",
        },
        {
          title: "Design from Studio",
          body: "Identity, motion, and interface come from the same creative system we use on unfld.com. No leftover agency skins.",
        },
        {
          title: "The house behind them",
          body: "Years of building for SporTV, Netflix, Timac Agro, Embraer, and the rest of the roster. That is the muscle. These are the products.",
        },
        {
          title: "A long horizon",
          body: "We ship products we intend to run for a decade. The software-house years were practice. This is the owned work.",
        },
      ]}
      quote={{
        kicker: "The shift",
        title: "A software house makes other people’s products. Forge is ours.",
        body: "The craft did not change. On FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus, the ownership did.",
      }}
    >
      <Section className="pb-20 sm:pb-28">
        <Kicker>In market</Kicker>
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium tracking-tight">
          The products under Forge.
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
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.line}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </ProductPage>
  );
}
