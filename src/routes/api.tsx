import { createFileRoute } from "@tanstack/react-router";
import { BuildWithUsPage } from "@/routes/build-with-us";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/api")({
  head: () => ({
    meta: [
      { title: pageTitle("Build with UNFLD — Custom software") },
      {
        name: "description",
        content:
          "We design and ship custom systems beside teams whose operation cannot be reduced to a template.",
      },
    ],
  }),
  component: BuildWithUsPage,
});
