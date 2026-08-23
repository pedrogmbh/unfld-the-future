import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { ownedProductPageHead } from "@/lib/meta";

export const Route = createFileRoute("/unifikar")({
  head: ({ match }) =>
    ownedProductPageHead("unifikar", "/unifikar", match.context.locale),
  component: () => <OwnedProductPage slug="unifikar" />,
});
