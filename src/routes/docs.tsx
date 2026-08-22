import { createFileRoute } from "@tanstack/react-router";
import { HowWeWorkPage } from "@/routes/how-we-work";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: pageTitle("How we build — UNFLD") },
      {
        name: "description",
        content:
          "A practical overview of discovery, delivery, ownership, security, and handover for custom systems built with UNFLD.",
      },
    ],
  }),
  component: HowWeWorkPage,
});
