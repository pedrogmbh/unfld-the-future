import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/doutor-fiscal")({
  head: () => ({ meta: [{ title: pageTitle("Doutor Fiscal") }] }),
  component: () => <OwnedProductPage slug="doutor-fiscal" />,
});
