import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { ownedProductPageHead } from "@/lib/meta";

export const Route = createFileRoute("/queravaga")({
  head: ({ match }) =>
    ownedProductPageHead("queravaga", "/queravaga", match.context.locale),
  component: () => <OwnedProductPage slug="queravaga" />,
});
