import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { ownedProductPageHead } from "@/lib/meta";

export const Route = createFileRoute("/fcr")({
  head: ({ match }) => ownedProductPageHead("fcr", "/fcr", match.context.locale),
  component: () => <OwnedProductPage slug="fcr" />,
});
