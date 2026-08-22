import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/download")({
  head: () => ({ meta: [{ title: pageTitle("Download") }] }),
  component: Download,
});

function Download() {
  return (
    <main>
      <PageHero
        kicker="Download"
        title="FCR on the"
        titleSecond="App Store."
        lede="Ferramenta de Coleta is the agronomy app we ship with Timac Agro. The other products live on the web — open their sites."
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            id="ios"
            title="FCR · iOS"
            body="Ferramenta de Coleta, for agronomy engineers. Collect technical results in the field — offline, then sync."
            cta="App Store"
            href="https://apps.apple.com/br/app/fcr/id6461211731"
          />
          <Card
            id="web"
            title="Product sites"
            body="SiteCreator, Doutor Fiscal, Dialogus, and Queravaga run in the browser. No shared UNFLD install."
            cta="Our products"
            to="/products"
          />
          <Card
            id="sitecreator"
            title="SiteCreator"
            body="A site on the air in five minutes, over WhatsApp. For MEI and microempresa."
            cta="sitecreator.com.br"
            href="https://www.sitecreator.com.br"
          />
          <Card
            id="doutor-fiscal"
            title="Doutor Fiscal"
            body="Fiscal work on WhatsApp. Waitlist open for MEI, micro, and small companies."
            cta="doutorfiscal.com"
            href="https://www.doutorfiscal.com"
          />
        </div>
      </Section>
    </main>
  );
}

function Card({
  id,
  title,
  body,
  cta,
  to,
  href,
}: {
  id: string;
  title: string;
  body: string;
  cta: string;
  to?: string;
  href?: string;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-24 rounded-xl border border-border p-7 sm:p-8"
    >
      <h2 className="font-display text-2xl font-medium tracking-tight">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <BtnLink
          to={to}
          href={href}
          variant="secondary"
          size="sm"
          {...(href ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {cta}
        </BtnLink>
      </div>
    </article>
  );
}
