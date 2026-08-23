import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { CodeTabs, type CodeSample } from "@/components/site/code-tabs";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/api")({
  head: () =>
    buildPageHead({
      title: "UNFLD API — Developer catalog",
      description:
        "Public read-only UNFLD catalog API: products, news, selected work, and company facts. OpenAPI at /openapi.json. No authentication.",
      path: "/api",
    }),
  component: ApiPage,
});

const samples: CodeSample[] = [
  {
    id: "curl",
    label: "cURL",
    code: `curl https://www.unfld.com.br/api/v1/products \\
  -H "Accept: application/json" \\
  -H "User-Agent: example-agent/1.0"

# Machine documents
# GET /openapi.json
# GET /llms.txt
# GET /agents.md`,
  },
  {
    id: "ts",
    label: "TypeScript",
    code: `type Product = {
  slug: string;
  name: string;
  status: string;
  href: string;
};

const res = await fetch("https://www.unfld.com.br/api/v1/products", {
  headers: { Accept: "application/json" },
});
const { items } = (await res.json()) as { items: Product[] };
console.log(items.map((p) => p.slug));`,
  },
  {
    id: "python",
    label: "Python",
    code: `import urllib.request
import json

req = urllib.request.Request(
    "https://www.unfld.com.br/api/v1/organization",
    headers={"Accept": "application/json"},
)
with urllib.request.urlopen(req) as res:
    org = json.load(res)
print(org["legalName"], org["taxId"])`,
  },
];

const endpoints = [
  {
    method: "GET",
    path: "/api/v1",
    body: "Catalog index, documentation links, and collection URLs.",
  },
  {
    method: "GET",
    path: "/api/v1/organization",
    body: "Legal name, CNPJ, São Paulo address, phones, and emails.",
  },
  {
    method: "GET",
    path: "/api/v1/products",
    body: "FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus.",
  },
  {
    method: "GET",
    path: "/api/v1/products/{slug}",
    body: "One product. Slugs: fcr, sitecreator, doutor-fiscal, queravaga, dialogus.",
  },
  {
    method: "GET",
    path: "/api/v1/news",
    body: "Public news posts.",
  },
  {
    method: "GET",
    path: "/api/v1/work",
    body: "Selected work the team can discuss in public.",
  },
  {
    method: "GET",
    path: "/api/v1/pages",
    body: "Canonical HTML pages from the sitemap.",
  },
  {
    method: "GET",
    path: "/api/v1/contact",
    body: "Public inboxes. There is no ticket-create endpoint.",
  },
] as const;

const rules = [
  {
    title: "No authentication",
    body: "The catalog is public and read-only. Do not send API keys, cookies, or personal data.",
  },
  {
    title: "JSON errors",
    body: "Failures return application/json with error.code, error.message, and error.hint. Agents should follow the hint instead of retrying blindly.",
  },
  {
    title: "Markdown pages",
    body: "HTML pages also speak text/markdown via Accept. Machine files live at /openapi.json, /llms.txt, and /agents.md.",
  },
  {
    title: "When to call",
    body: "Use this API to identify a product, quote company facts, or route a human to sales. Product runtime APIs live on each product domain.",
  },
] as const;

function ApiPage() {
  return (
    <main>
      <PageHero
        title="UNFLD API."
        titleSecond="A public catalog."
        lede="Read-only JSON for products, news, selected work, and company facts. No account. No write surface. OpenAPI is published at /openapi.json."
        actions={
          <>
            <BtnLink href="/openapi.json">OpenAPI spec</BtnLink>
            <BtnLink href="/api/v1" variant="secondary">
              Catalog index
            </BtnLink>
          </>
        }
      />

      <Section className="pb-8">
        <p className="mb-4 text-[13px] font-medium text-muted">For developers</p>
        <h2 className="max-w-2xl font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight">
          How an agent should call UNFLD.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          Fetch the OpenAPI document, bind tools to each operationId, then GET
          the collection you need. On error, read the hint. For prose, request
          the same page with Accept: text/markdown.
        </p>
        <div className="mt-10">
          <CodeTabs samples={samples} />
        </div>
      </Section>

      <Section className="py-16">
        <p className="mb-4 text-[13px] font-medium tracking-[0.18em] text-muted uppercase">
          Endpoints
        </p>
        <Stagger className="mt-2 divide-y divide-border border-y border-border">
          {endpoints.map((item) => (
            <StaggerItem key={item.path}>
              <div className="grid gap-3 py-6 sm:grid-cols-[4.5rem_minmax(0,18rem)_1fr] sm:items-baseline">
                <p className="font-mono text-[12px] text-subtle">{item.method}</p>
                <p className="min-w-0 font-mono text-[13px] text-fg">{item.path}</p>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Stagger
          className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2"
          delay={0.06}
        >
          {rules.map((rule) => (
            <StaggerItem key={rule.title}>
              <div className="h-full bg-bg p-7 sm:p-8">
                <h3 className="font-display text-lg font-medium tracking-tight">
                  {rule.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {rule.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <p className="mt-10 text-sm text-muted">
            Sales and scoping: {SITE.sales}. Security: {SITE.security}.
          </p>
        </Reveal>
      </Section>
    </main>
  );
}
