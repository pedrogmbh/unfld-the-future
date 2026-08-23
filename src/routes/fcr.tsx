import { createFileRoute } from "@tanstack/react-router";
import { OwnedProductPage } from "@/components/site/owned-product-page";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/fcr")({
  head: () =>
    buildPageHead({
      title: "FCR by UNFLD — Field intelligence for agronomy",
      description:
        "FCR by UNFLD is field intelligence for agronomy teams: offline collection, synchronized operations, and producer-ready recommendations.",
      path: "/fcr",
    }),
  component: () => <OwnedProductPage slug="fcr" />,
});
