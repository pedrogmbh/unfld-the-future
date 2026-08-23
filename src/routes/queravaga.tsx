import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/queravaga")({
  head: () => ({
    meta: [
      {
        title: pageTitle("Queravaga by UNFLD — A shorter path to work"),
      },
      {
        name: "description",
        content:
          "Unfolding the future of hiring. A shorter path from profile to interview for candidates and hiring teams with Queravaga by UNFLD.",
      },
    ],
  }),
  component: () => <OwnedProductPage slug="queravaga" />,
});
