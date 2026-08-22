import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/sitecreator")({
  head: () => ({
    meta: [
      {
        title: pageTitle("SiteCreator by UNFLD — Digital presence in minutes"),
      },
      {
        name: "description",
        content:
          "Unfolding the future of small business online. Create a real business website in minutes through WhatsApp with SiteCreator by UNFLD.",
      },
    ],
  }),
  component: () => <OwnedProductPage slug="sitecreator" />,
});
