import { createFileRoute } from "@tanstack/react-router";
import { ApiDocs } from "@/components/site/api-docs";
import { developerResourcesJsonLd } from "@/lib/jsonld";
import { buildPageHead } from "@/lib/meta";
import { developerSurface } from "@/lib/site";

export const Route = createFileRoute("/api/")({
  head: () =>
    buildPageHead({
      title: developerSurface.apiTitle,
      description: developerSurface.apiDescription,
      path: "/api",
      jsonLd: developerResourcesJsonLd("/api"),
    }),
  component: ApiPage,
});

function ApiPage() {
  return <ApiDocs />;
}
