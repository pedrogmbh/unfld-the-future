import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { buildPageHead } from "@/lib/meta";
import { developerSurface } from "@/lib/site";

export const Route = createFileRoute("/api/versioning")({
  head: () =>
    buildPageHead({
      title: developerSurface.versioningTitle,
      description: developerSurface.versioningDescription,
      path: "/api/versioning",
    }),
  component: VersioningPage,
});

function VersioningPage() {
  return (
    <LegalDoc
      kicker="API"
      title="Versioning and deprecation."
      updated={developerSurface.versioningUpdated}
    >
      {developerSurface.versioningSections.map((section) => (
        <div key={section.heading} className="space-y-3">
          <H>{section.heading}</H>
          <p>{section.body}</p>
        </div>
      ))}
    </LegalDoc>
  );
}
