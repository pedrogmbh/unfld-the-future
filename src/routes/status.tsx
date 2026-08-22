import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: pageTitle("Status") },
      {
        name: "description",
        content:
          "No active incident is currently posted across UNFLD corporate properties and product services.",
      },
    ],
  }),
  component: Status,
});

const services = [
  { domain: "unfld.com.br", role: "Corporate website", status: "Operational" },
  { domain: "sitecreator.com.br", role: "SiteCreator", status: "Operational" },
  { domain: "doutorfiscal.com", role: "Doutor Fiscal", status: "Operational" },
  { domain: "dialoguspsicossocial.com.br", role: "Dialogus", status: "Operational" },
  { domain: "queravaga.com", role: "Queravaga", status: "Operational" },
  { domain: "App Store (FCR)", role: "FCR mobile distribution", status: "Operational" },
];

function Status() {
  return (
    <main>
      <PageHero
        kicker="Service status"
        title="No active incident"
        titleSecond="is currently posted."
        lede="Current operational status for UNFLD corporate properties, product endpoints, and distribution channels."
      />
      <Section className="pb-24 sm:pb-32">
        <div className="rounded-xl border border-border">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <p className="text-sm font-medium">Service overview</p>
            <p className="text-[12px] text-subtle">Status active</p>
          </div>
          <ul>
            {services.map((s) => (
              <li
                key={s.domain}
                className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 last:border-0"
              >
                <div>
                  <p className="font-mono text-[13px]">{s.domain}</p>
                  <p className="text-[12px] text-subtle">{s.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <p className="text-sm text-fg">{s.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-sm text-muted">
          For incident reporting or urgent operational inquiries, contact{" "}
          <a
            href="mailto:security@unfld.com.br"
            className="text-fg underline-offset-4 hover:underline"
          >
            security@unfld.com.br
          </a>
          .
        </p>
      </Section>
    </main>
  );
}
