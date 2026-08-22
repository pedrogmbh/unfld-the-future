import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/queravaga")({
  head: () => ({ meta: [{ title: pageTitle("Queravaga") }] }),
  component: () => <OwnedProductPage slug="queravaga" />,
});
