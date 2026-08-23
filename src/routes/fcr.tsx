import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/fcr")({
  head: () => ({
    meta: [
      {
        title: pageTitle("FCR by UNFLD — Field intelligence for agronomy"),
      },
      {
        name: "description",
        content:
          "FCR by UNFLD is field intelligence for agronomy teams: offline collection, synchronized operations, and producer-ready recommendations.",
      },
    ],
  }),
  component: () => <OwnedProductPage slug="fcr" />,
});
