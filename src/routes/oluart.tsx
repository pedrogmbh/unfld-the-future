import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { ownedProductPageHead } from "@/lib/meta";

export const Route = createFileRoute("/oluart")({
  head: ({ match }) =>
    ownedProductPageHead("oluart", "/oluart", match.context.locale),
  component: () => <OwnedProductPage slug="oluart" />,
});
