import { createFileRoute } from "@tanstack/react-router";
import { Lockup, Mark } from "@/components/site/logo";
import { BtnLink } from "@/components/site/buttons";
import { LegalFromMessages } from "@/components/site/legal-doc";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";

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
  const locale = useLocale();
  const updated = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date("2026-11-12T12:00:00Z"));
  return (
    <LegalFromMessages
      doc={legal.brand}
      kicker={legal.brand.kicker}
      updated={updated}
      afterIntro={
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex aspect-[16/9] items-center justify-center border border-border bg-bg-subtle p-6 text-fg">
              <Lockup className="h-auto w-full" />
            </div>
            <div className="flex aspect-[16/9] items-center justify-center bg-paper p-6 text-bg">
              <Lockup bevel={false} className="h-auto w-full" />
            </div>
            <div className="flex aspect-[16/9] items-center justify-center bg-accent text-accent-fg">
              <Mark bevel={false} className="h-24 w-auto" />
            </div>
            <div className="flex aspect-[16/9] items-center justify-center border border-border bg-bg-subtle">
              <Mark className="h-24 w-auto" />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <BtnLink href="/brand/UNFLD-Brand-Kit.zip" download>
              {legal.brand.downloadKit}
            </BtnLink>
            <BtnLink href="/brand/UNFLD-Manual-de-identidade.pdf" variant="secondary" download>
              {legal.brand.downloadGuide}
            </BtnLink>
          </div>
        </div>
      }
    />
  );
}
