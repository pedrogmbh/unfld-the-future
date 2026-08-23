import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { ownedProductPageHead } from "@/lib/meta";

export const Route = createFileRoute("/doutor-fiscal")({
  head: ({ match }) =>
    ownedProductPageHead("doutor-fiscal", "/doutor-fiscal", match.context.locale),
  component: () => <OwnedProductPage slug="doutor-fiscal" />,
});
