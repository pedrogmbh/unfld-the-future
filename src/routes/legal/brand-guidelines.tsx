import { createFileRoute } from "@tanstack/react-router";
import { Mark } from "@/components/site/logo";
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
            <span className="inline-flex items-center gap-3 text-fg">
              <Mark className="size-8" />
              <span className="font-display text-2xl font-semibold tracking-[0.28em]">
                UNFLD
              </span>
            </span>
          </div>
          <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-fg">
            <span className="inline-flex items-center gap-3 text-bg">
              <Mark className="size-8" />
              <span className="font-display text-2xl font-semibold tracking-[0.28em]">
                UNFLD
              </span>
            </span>
          </div>
        </div>
      }
    />
  );
}
