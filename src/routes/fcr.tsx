import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/fcr")({
  head: () => ({ meta: [{ title: pageTitle("FCR — Ferramenta de Coleta") }] }),
  component: () => <OwnedProductPage slug="fcr" />,
});
