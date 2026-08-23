import { createFileRoute } from "@tanstack/react-router";
import { LegalFromMessages } from "@/components/site/legal-doc";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";

export const Route = createFileRoute("/legal/terms-of-service")({
  head: ({ match }) => {
    const doc = getMessages(match.context.locale).legal.terms;
    return buildPageHead({
      title: doc.metaTitle,
      description: doc.metaDescription,
      path: "/legal/terms-of-service",
      locale: match.context.locale,
    });
  },
  component: Page,
});

function Page() {
  const { legal } = useMessages();
  return <LegalFromMessages doc={legal.terms} />;
}
