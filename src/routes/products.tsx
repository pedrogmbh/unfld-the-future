import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { TextArrow } from "@/components/site/buttons";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { ownedProducts, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: pageTitle("Products") }] }),
  component: Products,
});

function Products() {
  return (
    <ProductPage
      kicker="Products"
      title="Products we own"
      titleSecond="and operate."
      lede="FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus Psicossocial — designed, built, and run by the same team. Distinct from the software-house work."
      primary="Talk to sales"
      primaryTo="/contact"
      secondary="The company"
      secondaryTo="/company"
      image="/images/forge.jpg"
      imageAlt="UNFLD products on glass devices in a dark void"
      features={[
        {
          title: "Five products in market",
          body: "FCR (Ferramenta de Coleta, with Timac Agro), SiteCreator, Doutor Fiscal, Queravaga, and Dialogus Psicossocial. These we operate.",
        },
        {
          title: "Operated, not delivered",
          body: "We still ship for others. Owned products stay in our hands — release trains, support, and the boring reliability work.",
        },
        {
          title: "Each has its own site",
          body: "Open the product. SiteCreator, Doutor Fiscal, Dialogus, and Queravaga live on their own domains. FCR is on the App Store.",
        },
        {
          title: "WhatsApp where it belongs",
          body: "SiteCreator and Doutor Fiscal meet the company where it already is: the thread, not a new login.",
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
        title: "A software house makes other people’s products. These are ours.",
        body: "The craft did not change. On FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus, the ownership did.",
      }}
    >
      <Section className="pb-20 sm:pb-28">
        <Kicker>In market</Kicker>
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium tracking-tight">
          The products.
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
