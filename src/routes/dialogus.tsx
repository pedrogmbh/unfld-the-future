import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/dialogus")({
  head: () => ({
    meta: [
      {
        title: pageTitle("Dialogus by UNFLD — Psychosocial risk for NR-1"),
      },
      {
        name: "description",
        content:
          "Unfolding the future of workplace health. Psychosocial risk management built for NR-1 with Dialogus by UNFLD.",
      },
    ],
  }),
  component: () => <OwnedProductPage slug="dialogus" />,
});
