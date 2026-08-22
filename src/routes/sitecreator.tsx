import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/sitecreator")({
  head: () => ({ meta: [{ title: pageTitle("SiteCreator") }] }),
  component: () => <OwnedProductPage slug="sitecreator" />,
});
