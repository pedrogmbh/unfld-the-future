import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/studio")({
  head: () => ({ meta: [{ title: pageTitle("Studio") }] }),
  component: Studio,
});

function Studio() {
  return (
    <ProductPage
      kicker="Studio"
      title="Brand, design,"
      titleSecond="and generative media."
      lede="The creative stack behind every UNFLD surface — identity, motion, and image systems built for product, not campaigns."
      primary="See the system"
      primaryTo="/legal/brand-guidelines"
      secondary="Partner with Studio"
      secondaryTo="/contact"
      image="/images/studio.jpg"
      imageAlt="A geometric fold of light in a dark studio"
      features={[
        {
          title: "Identity that holds",
          body: "A black field, a fold mark, tight grotesk type. The system is small on purpose so products can be loud.",
        },
        {
          title: "Motion as grammar",
          body: "Staggered reveals, interruptible hovers, no carnival. The same recipes on the site, in Forge, and in Pulse.",
        },
        {
          title: "Generative, on-brand",
          body: "Image and video models constrained to the UNFLD world — void, fold, light — so output does not look like everyone else’s.",
        },
        {
          title: "Not an agency",
          body: "Studio exists to serve products we operate. A small number of partners get the same system, not a moodboard.",
        },
        {
          title: "Guidelines, public",
          body: "Logo, color, type, and don’ts live on the Brand page. Use them if you write about us. Do not redraw the mark.",
        },
        {
          title: "Craft from the house years",
          body: "We designed other people’s products for six years. Studio is that craft, pointed at our own.",
        },
      ]}
      quote={{
        kicker: "The field",
        title: "Black is not a mood. It is the surface everything else unfolds on.",
        body: "If it needs decoration to work, it is not finished. Studio’s job is to make the product readable in a void.",
      }}
    />
  );
}
