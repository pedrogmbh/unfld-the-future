import { createFileRoute } from "@tanstack/react-router";
import { LegalFromMessages } from "@/components/site/legal-doc";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";

export const Route = createFileRoute("/legal/terms-of-service-enterprise")({
  head: ({ match }) => {
    const doc = getMessages(match.context.locale).legal.enterprise;
    return buildPageHead({
      title: doc.metaTitle,
      description: doc.metaDescription,
      path: "/legal/terms-of-service-enterprise",
      locale: match.context.locale,
    });
  },
  component: Page,
});

function Page() {
  const { legal } = useMessages();
  return <LegalFromMessages doc={legal.enterprise} />;
}
