import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { pageTitle } from "@/lib/site";

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
      lede="Forge is the family of apps UNFLD ships under its own name. Designed, built, and run by the same team — not handed off after launch."
      primary="Open Forge"
      primaryTo="/download"
      secondary="Talk to sales"
      secondaryTo="/contact"
      image="/images/forge.jpg"
      imageAlt="Forge apps on glass devices in a dark void"
      features={[
        {
          title: "Native on every surface",
          body: "Web, iOS, and Android from one product system. Same accounts. Same Relay backend. Native clients that feel considered.",
        },
        {
          title: "Operated, not delivered",
          body: "We used to ship and walk away. Forge products stay in our hands — release trains, support, and the boring reliability work.",
        },
        {
          title: "Built on Relay",
          body: "Every Forge app speaks the same API. Events, identity, and Pulse queries are shared infrastructure, not a rewrite.",
        },
        {
          title: "Design from Studio",
          body: "Identity, motion, and interface come from the same creative system we use on unfld.com. No leftover agency skins.",
        },
        {
          title: "Enterprise ready",
          body: "SSO, seat management, and data controls when a Forge app outgrows a personal account.",
        },
        {
          title: "A long horizon",
          body: "We ship products we intend to run for a decade. The software-house years were practice. This is the work.",
        },
      ]}
      quote={{
        kicker: "The shift",
        title: "A software house makes other people’s products. Forge is ours.",
        body: "The craft did not change. The ownership did. Forge is how UNFLD shows up in someone’s pocket, every day.",
      }}
    />
  );
}
