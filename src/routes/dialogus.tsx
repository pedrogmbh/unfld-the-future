import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/dialogus")({
  head: () => ({ meta: [{ title: pageTitle("Dialogus Psicossocial") }] }),
  component: () => <OwnedProductPage slug="dialogus" />,
});
