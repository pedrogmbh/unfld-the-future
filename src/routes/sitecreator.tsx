import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { ownedProductPageHead } from "@/lib/meta";

export const Route = createFileRoute("/sitecreator")({
  head: ({ match }) =>
    ownedProductPageHead("sitecreator", "/sitecreator", match.context.locale),
  component: () => <OwnedProductPage slug="sitecreator" />,
});
