import { createFileRoute } from "@tanstack/react-router";
import { ApiDocs } from "@/components/site/api-docs";
import { developerResourcesJsonLd } from "@/lib/jsonld";
import { buildPageHead } from "@/lib/meta";
import { localizeDeveloperSurface } from "@/lib/i18n/localize";

export const Route = createFileRoute("/api/")({
  head: ({ match }) => {
    const surface = localizeDeveloperSurface(match.context.locale);
    return buildPageHead({
      title: surface.apiTitle,
      description: surface.apiDescription,
      path: "/api",
      jsonLd: developerResourcesJsonLd("/api", match.context.locale),
      locale: match.context.locale,
    });
  },
  component: ApiPage,
});

function ApiPage() {
  return <ApiDocs />;
}
