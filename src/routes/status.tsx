import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/status")({
  head: () => ({ meta: [{ title: pageTitle("Status") }] }),
  component: Status,
});

const endpoints = [
  ["unfld.com", "Institutional", "100%"],
  ["sitecreator.com.br", "SiteCreator", "100%"],
  ["doutorfiscal.com", "Doutor Fiscal", "100%"],
  ["dialoguspsicossocial.com.br", "Dialogus", "100%"],
  ["queravaga.com", "Queravaga", "100%"],
  ["apps.apple.com · FCR", "Ferramenta de Coleta", "100%"],
];

function Status() {
  return (
    <main>
      <PageHero
        kicker="Service status"
        title="All systems"
        titleSecond="operational."
        lede="No incidents declared. Product hosts we operate, and the App Store listing for FCR."
      />
      <Section className="pb-24 sm:pb-32">
        <div className="rounded-xl border border-border">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <p className="text-sm font-medium">Live service data</p>
            <p className="text-[12px] text-subtle">Time: BRT</p>
          </div>
          <ul>
            {endpoints.map(([ep, src, pct]) => (
              <li
                key={ep}
                className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 last:border-0"
              >
                <div>
                  <p className="font-mono text-[13px]">{ep}</p>
                  <p className="text-[12px] text-subtle">{src}</p>
                </div>
                <p className="text-sm tabular-nums text-fg">{pct}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-sm text-muted">
          We are not actively mitigating any known incidents at this time.
        </p>
      </Section>
    </main>
  );
}
