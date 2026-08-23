import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { buildPageHead } from "@/lib/meta";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizeDeveloperSurface } from "@/lib/i18n/localize";

export const Route = createFileRoute("/api/versioning")({
  head: ({ match }) => {
    const surface = localizeDeveloperSurface(match.context.locale);
    return buildPageHead({
      title: surface.versioningTitle,
      description: surface.versioningDescription,
      path: "/api/versioning",
      locale: match.context.locale,
    });
  },
  component: VersioningPage,
});

function VersioningPage() {
  const locale = useLocale();
  const { pages } = useMessages();
  const surface = localizeDeveloperSurface(locale);
  return (
    <LegalDoc
      kicker="API"
      title={pages.developers.versioningTitle}
      updated={surface.versioningUpdated}
    >
      {surface.versioningSections.map((section) => (
        <div key={section.heading} className="space-y-3">
          <H>{section.heading}</H>
          <p>{section.body}</p>
        </div>
      ))}
    </LegalDoc>
  );
}
