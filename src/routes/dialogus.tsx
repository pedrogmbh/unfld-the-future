import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { ownedProductPageHead } from "@/lib/meta";

export const Route = createFileRoute("/dialogus")({
  head: ({ match }) =>
    ownedProductPageHead("dialogus", "/dialogus", match.context.locale),
  component: () => <OwnedProductPage slug="dialogus" />,
});
