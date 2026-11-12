import { createFileRoute } from "@tanstack/react-router";
import { Lockup } from "@/components/site/logo";
import { LegalFromMessages } from "@/components/site/legal-doc";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";

export const Route = createFileRoute("/legal/brand-guidelines")({
  head: ({ match }) => {
    const doc = getMessages(match.context.locale).legal.brand;
    return buildPageHead({
      title: doc.metaTitle,
      description: doc.metaDescription,
      path: "/legal/brand-guidelines",
      locale: match.context.locale,
    });
  },
  component: Page,
});

function Page() {
  const { legal } = useMessages();
  return (
    <LegalFromMessages
      doc={legal.brand}
      kicker={legal.brand.kicker}
      afterIntro={
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-bg-subtle">
            <span className="text-fg">
              <Lockup className="h-16 w-auto" />
            </span>
          </div>
          <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-fg">
            <span className="text-bg">
              <Lockup bevel={false} className="h-16 w-auto" />
            </span>
          </div>
        </div>
      }
    />
  );
}
