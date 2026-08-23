import { createFileRoute } from "@tanstack/react-router";
import { ApiDocs } from "@/components/site/api-docs";
import { developerResourcesJsonLd } from "@/lib/jsonld";
import { buildPageHead } from "@/lib/meta";
import { useLocale } from "@/lib/i18n";
import { localizeDeveloperSurface } from "@/lib/i18n/localize";

export const Route = createFileRoute("/developers")({
  head: ({ match }) => {
    const surface = localizeDeveloperSurface(match.context.locale);
    return buildPageHead({
      title: surface.developersTitle,
      description: surface.developersDescription,
      path: "/developers",
      jsonLd: developerResourcesJsonLd("/developers"),
      locale: match.context.locale,
    });
  },
  component: DevelopersPage,
});

function DevelopersPage() {
  const locale = useLocale();
  const surface = localizeDeveloperSurface(locale);
  return (
    <ApiDocs
      title={surface.developersHeroTitle}
      titleSecond={surface.developersHeroTitleSecond}
      lede={surface.developersHeroLede}
    />
  );
}
