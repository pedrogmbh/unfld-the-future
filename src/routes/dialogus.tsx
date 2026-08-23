import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/dialogus")({
  head: () =>
    buildPageHead({
      title: "Dialogus by UNFLD — Psychosocial risk for NR-1",
      description:
        "Unfolding the future of workplace health. Psychosocial risk management built for NR-1 with Dialogus by UNFLD.",
      path: "/dialogus",
    }),
  component: () => <OwnedProductPage slug="dialogus" />,
});
