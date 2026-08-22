import { createFileRoute } from "@tanstack/react-router";
import { AccessPage } from "@/routes/access";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: pageTitle("Access UNFLD products") },
      {
        name: "description",
        content:
          "FCR is available through its approved mobile distribution. SiteCreator, Doutor Fiscal, Queravaga, and Dialogus each have their own web entry point.",
      },
    ],
  }),
  component: AccessPage,
});
