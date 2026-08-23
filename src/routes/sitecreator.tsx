import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/sitecreator")({
  head: () =>
    buildPageHead({
      title: "SiteCreator by UNFLD — Digital presence in minutes",
      description:
        "Unfolding the future of small business online. Create a real business website in minutes through WhatsApp with SiteCreator by UNFLD.",
      path: "/sitecreator",
    }),
  component: () => <OwnedProductPage slug="sitecreator" />,
});
