import { createFileRoute } from "@tanstack/react-router";
import { ApiDocs } from "@/components/site/api-docs";
import { developerResourcesJsonLd } from "@/lib/jsonld";
import { buildPageHead } from "@/lib/meta";
import { developerSurface } from "@/lib/site";

export const Route = createFileRoute("/developers")({
  head: () =>
    buildPageHead({
      title: developerSurface.developersTitle,
      description: developerSurface.developersDescription,
      path: "/developers",
      jsonLd: developerResourcesJsonLd("/developers"),
    }),
  component: DevelopersPage,
});

function DevelopersPage() {
  return (
    <ApiDocs
      title={developerSurface.developersHeroTitle}
      titleSecond={developerSurface.developersHeroTitleSecond}
      lede={developerSurface.developersHeroLede}
    />
  );
}
