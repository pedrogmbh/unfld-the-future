import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/pulse")({
  head: () => ({ meta: [{ title: pageTitle("Pulse") }] }),
  component: Pulse,
});

function Pulse() {
  return (
    <ProductPage
      kicker="Pulse"
      title="See the business"
      titleSecond="as it happens."
      lede="Business intelligence that reads live operations — not last quarter’s export. Dashboards, models, and decisions on top of Relay."
      primary="Open Pulse 2"
      primaryTo="/console"
      secondary="Read the launch"
      secondaryTo="/news/pulse-2"
      image="/images/pulse.jpg"
      imageAlt="Abstract live charts in a black void"
      features={[
        {
          title: "Live, not lagged",
          body: "Pulse 2 connects to ERPs, warehouses, ledgers, and CRMs and keeps a picture that moves with the day.",
        },
        {
          title: "Ask in English",
          body: "Forecast, anomaly, and drill-down without a semantic layer project. Models sit on your schema, not a cube from 2019.",
        },
        {
          title: "Built on Relay events",
          body: "Every UNFLD product emits a consistent stream. Pulse is the first surface that can read all of them at once.",
        },
        {
          title: "In your tools",
          body: "Web app, Relay API, and add-ins for the suites operators already live in. No new login if SSO is on.",
        },
        {
          title: "No training by default",
          body: "Company and Enterprise plans do not train on your data. Residencies available when the review requires it.",
        },
        {
          title: "The reason we unfolded",
          body: "Clients used to ask us for dashboards. Pulse is the product we would have wanted to sell them — so we built it for ourselves, then opened it.",
        },
      ]}
      quote={{
        kicker: "Pulse 2",
        title: "Models that read the quarter while it is still the quarter.",
        body: "If your intelligence product needs a CSV drop to work, it is a report. Pulse is a live system.",
      }}
    />
  );
}
