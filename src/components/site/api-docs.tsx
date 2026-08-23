import { BtnLink } from "@/components/site/buttons";
import { CodeTabs, type CodeSample } from "@/components/site/code-tabs";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { SITE, developerSurface } from "@/lib/site";

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
# GET /agents.md
# GET /developers`,
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

export function ApiDocs({
  title = developerSurface.heroTitle,
  titleSecond = developerSurface.heroTitleSecond,
  lede = developerSurface.heroLede,
}: {
  title?: string;
  titleSecond?: string;
  lede?: string;
}) {
  return (
    <main>
      <PageHero
        title={title}
        titleSecond={titleSecond}
        lede={lede}
        actions={
          <>
            <BtnLink href="/openapi.json">OpenAPI spec</BtnLink>
            <BtnLink href="/api/v1" variant="secondary">
              Catalog index
            </BtnLink>
            <BtnLink to="/api/versioning" variant="secondary">
              Versioning
            </BtnLink>
          </>
        }
      />

      <Section className="pb-8">
        <p className="mb-4 text-[13px] font-medium text-gold">For developers</p>
        <h2 className="max-w-2xl font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight">
          {developerSurface.howTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          {developerSurface.howLede}
        </p>
        <div className="mt-10 min-w-0">
          <CodeTabs samples={samples} />
        </div>
      </Section>

      <Section className="py-16">
        <p className="mb-4 text-[13px] font-medium tracking-[0.18em] text-gold uppercase">
          Endpoints
        </p>
        <Stagger className="mt-2 divide-y divide-border border-y border-border">
          {developerSurface.endpoints.map((item) => (
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
          {developerSurface.rules.map((rule) => (
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
