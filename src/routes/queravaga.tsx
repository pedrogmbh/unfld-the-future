import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/queravaga")({
  head: () =>
    buildPageHead({
      title: "Queravaga by UNFLD — A shorter path to work",
      description:
        "Unfolding the future of hiring. A shorter path from profile to interview for candidates and hiring teams with Queravaga by UNFLD.",
      path: "/queravaga",
    }),
  component: () => <OwnedProductPage slug="queravaga" />,
});
