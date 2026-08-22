import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/relay")({
  head: () => ({ meta: [{ title: pageTitle("Relay") }] }),
  component: Relay,
});

function Relay() {
  return (
    <ProductPage
      kicker="Relay"
      title="One API."
      titleSecond="Every product."
      lede="Services, events, and data planes that connect Forge, Pulse, and the systems around them. Usage-based. Playground in every account."
      primary="Get an API key"
      primaryTo="/console"
      secondary="API reference"
      secondaryTo="/api"
      image="/images/relay.jpg"
      imageAlt="A network of light filaments in a black void"
      features={[
        {
          title: "One base URL",
          body: "api.unfld.com/v1. One key. SDKs in Python and TypeScript, plus a drop-in OpenAI-compatible surface.",
        },
        {
          title: "Events that agree",
          body: "Forge, Pulse, and Studio emit the same envelope. Subscribe once. Fan out as you like.",
        },
        {
          title: "Metered, not mysterious",
          body: "Usage-based pricing, prepaid credits, and invoices for Enterprise. Limits you can see in the Console.",
        },
        {
          title: "Files, webhooks, search",
          body: "Collections, outbound webhooks with signed secrets, and live queries over your own corpora.",
        },
        {
          title: "Works with your SDK",
          body: "If you already speak OpenAI, change the base URL. If you want ours, install @unfld/sdk.",
        },
        {
          title: "Status, public",
          body: "Regional endpoints and a status page that tells the truth. We do not hide incidents behind a marketing page.",
        },
      ]}
      quote={{
        kicker: "Generally available",
        title: "Zero to first token in three steps.",
        body: "Sign up at the Console, create a key, call pulse-2. The rest is in the docs.",
      }}
    />
  );
}
