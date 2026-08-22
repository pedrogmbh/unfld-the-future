import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/doutor-fiscal")({
  head: () => ({
    meta: [
      {
        title: pageTitle("Doutor Fiscal by UNFLD — Fiscal routines on WhatsApp"),
      },
      {
        name: "description",
        content:
          "Unfolding the future of fiscal operations. WhatsApp-first fiscal routines for small businesses with Doutor Fiscal by UNFLD.",
      },
    ],
  }),
  component: () => <OwnedProductPage slug="doutor-fiscal" />,
});
