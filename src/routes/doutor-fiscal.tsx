import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/doutor-fiscal")({
  head: () =>
    buildPageHead({
      title: "Doutor Fiscal by UNFLD — Fiscal routines on WhatsApp",
      description:
        "Unfolding the future of fiscal operations. WhatsApp-first fiscal routines for small businesses with Doutor Fiscal by UNFLD.",
      path: "/doutor-fiscal",
    }),
  component: () => <OwnedProductPage slug="doutor-fiscal" />,
});
