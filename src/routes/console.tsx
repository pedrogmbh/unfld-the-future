import { createFileRoute } from "@tanstack/react-router";
import { AccessPage } from "@/routes/access";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/console")({
  head: () => ({
    meta: [
      { title: pageTitle("Access a product") },
      {
        name: "description",
        content:
          "Each UNFLD product has its own secure entry point. Choose the product you use.",
      },
    ],
  }),
  component: AccessPage,
});
