import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowDown,
  ArrowUpRight,
  Cable,
  CheckCheck,
  FileSearch,
  HeartHandshake,
  KeyRound,
  LayoutDashboard,
  MapPin,
  MessagesSquare,
  ScrollText,
  Stethoscope,
  Unlock,
  UsersRound,
  Workflow,
} from "lucide-react";
import { BrazilMap, MapLegend } from "@/components/govtech/brazil-map";
import { CompanyRecord } from "@/components/govtech/company-record";
import { ContractPaths } from "@/components/govtech/contract-paths";
import { CountUp } from "@/components/govtech/count-up";
import { DeliveryTimeline } from "@/components/govtech/delivery-timeline";
import { Faq } from "@/components/govtech/faq";
import { HabilitacaoLedger } from "@/components/govtech/habilitacao-ledger";
import { PortalFinder, RegistrationGrid } from "@/components/govtech/registrations";
import { BtnLink, TextArrow } from "@/components/site/buttons";
import { Reveal, Stagger, StaggerItem, WordStagger } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { DOCS_HUB, HUB_DOCUMENT_COUNT, REGISTRATIONS, UFS } from "@/lib/govtech";
import { organizationId } from "@/lib/jsonld";
import { siteUrl } from "@/lib/machine";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { interpolate, useLocale, useMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/govtech")({
  head: ({ match }) => {
    const t = getMessages(match.context.locale).govtech;
    return buildPageHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/govtech",
      locale: match.context.locale,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `UNFLD ${t.metaTitle}`,
          serviceType: t.hero.kicker,
          description: t.metaDescription,
          url: siteUrl("/govtech"),
          provider: { "@id": organizationId() },
          areaServed: { "@type": "Country", name: "Brazil" },
          audience: { "@type": "Audience", audienceType: "Government" },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: t.faq.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        },
      ],
    });
  },
  component: GovTech,
});

const CAPABILITY_ICONS = [
  UsersRound,
  MessagesSquare,
  Workflow,
  FileSearch,
  LayoutDashboard,
  Stethoscope,
  HeartHandshake,
  Cable,
];

const PRINCIPLE_ICONS = [KeyRound, MapPin, Accessibility, ScrollText, Unlock, CheckCheck];

function GovTech() {
  const locale = useLocale();
  const { govtech: t, products } = useMessages();
  const [uf, setUf] = useState("SP");
  const selected = UFS.find((item) => item.code === uf) ?? UFS[0];
  const kindLabel = {
    hq: t.hero.legendHq,
    registered: t.hero.legendRegistered,
    progress: t.hero.legendProgress,
    remote: t.hero.legendRemote,
  } as const;

  const stats = [
    { value: HUB_DOCUMENT_COUNT, label: t.stats.documents },
    { value: REGISTRATIONS.length, label: t.stats.registrations },
    { value: UFS.length, label: t.stats.ufs },
    { value: 3, label: t.stats.spheres },
  ];

  const spheres = [
    { value: 1, unit: t.spheres.federalCount, name: t.spheres.federalName, body: t.spheres.federalBody },
    { value: 27, unit: t.spheres.stateCount, name: t.spheres.stateName, body: t.spheres.stateBody },
    { value: 5570, unit: t.spheres.municipalCount, name: t.spheres.municipalName, body: t.spheres.municipalBody },
  ];

  const productCards = [
    { to: "/dialogus", name: products.dialogus.shortName, context: t.products.dialogusContext, body: t.products.dialogusBody },
    { to: "/telemedicina", name: products.telemedicina.shortName, context: t.products.telemedicineContext, body: t.products.telemedicineBody },
    { to: "/oluart", name: products.oluart.shortName, context: t.products.oluartContext, body: t.products.oluartBody },
  ] as const;

  return (
    <main>
      {/* Hero */}
      <section className="w-full px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-24 lg:px-12">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-16">
          <div className="min-w-0">
            <Reveal>
              <p className="mb-6 text-[13px] font-medium tracking-[0.18em] text-gold uppercase">{t.hero.kicker}</p>
            </Reveal>
            <h1 className="font-display text-[clamp(3.2rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
              <WordStagger text={t.hero.title} />
              <br />
              <WordStagger text={t.hero.titleSecond} className="text-gold" />
            </h1>
            <Reveal delay={0.14}>
              <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">{t.hero.lede}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <BtnLink to="/contact">{t.hero.primary}</BtnLink>
                <BtnLink href="#documentation" variant="secondary">
                  {t.hero.secondary}
                  <ArrowDown className="size-4" />
                </BtnLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0">
            <figure className="rounded-xl border border-border bg-bg-elevated/40 p-5 sm:p-7">
              <div className="mx-auto max-w-[26rem]">
                <BrazilMap selected={uf} onSelect={setUf} label={t.hero.mapLabel} />
              </div>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-2xl font-medium tracking-tight">{selected.name}</p>
                  <p className="font-mono text-[12px] text-subtle">{selected.code}</p>
                </div>
                <p className={cn("mt-1 text-[13px]", selected.kind === "remote" ? "text-muted" : "text-gold")}>
                  {kindLabel[selected.kind]}
                  {selected.note ? <span className="font-mono text-muted"> · {selected.note}</span> : null}
                </p>
                {selected.kind === "remote" ? (
                  <p className="mt-2 text-[13px] leading-relaxed text-subtle">{t.hero.remoteDetail}</p>
                ) : null}
                <a href="#portals" className="mt-4 inline-block rounded-xs text-[13px]">
                  <TextArrow className="text-[13px]">{interpolate(t.hero.portalsLink, { uf: selected.code })}</TextArrow>
                </a>
                <div className="mt-5">
                  <MapLegend
                    items={[
                      { kind: "hq", label: t.hero.legendHq },
                      { kind: "registered", label: t.hero.legendRegistered },
                      { kind: "progress", label: t.hero.legendProgress },
                      { kind: "remote", label: t.hero.legendRemote },
                    ]}
                  />
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <Section className="pb-20 sm:pb-28">
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg">
              <div className="h-full p-6 sm:p-8">
                <p className="font-display text-[clamp(2.6rem,5vw,4rem)] font-semibold leading-none tracking-tight text-gold">
                  <CountUp value={stat.value} locale={locale} />
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* Spheres */}
      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <Kicker>{t.spheres.kicker}</Kicker>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
            {t.spheres.title}
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">{t.spheres.lede}</p>
        </Reveal>
        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {spheres.map((sphere, i) => (
            <StaggerItem key={sphere.name}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated p-7 sm:p-8">
                <SphereCells level={i} />
                <p className="relative text-[12px] font-medium tracking-[0.18em] text-gold uppercase">{sphere.name}</p>
                <p className="relative mt-10 font-display text-[clamp(3.4rem,6vw,4.6rem)] font-semibold leading-none tracking-tight">
                  <CountUp value={sphere.value} locale={locale} />
                </p>
                <p className="relative mt-2 text-sm text-subtle">{sphere.unit}</p>
                <p className="relative mt-8 border-t border-border pt-6 text-[15px] leading-relaxed text-muted">{sphere.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-subtle">{t.spheres.also}</p>
        </Reveal>
      </Section>

      {/* Capabilities */}
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Kicker>{t.capabilities.kicker}</Kicker>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.02] tracking-tight">
              {t.capabilities.title}
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">{t.capabilities.lede}</p>
          </Reveal>
          <Reveal className="grid min-w-0 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {t.capabilities.items.map((item, i) => {
              const Icon = CAPABILITY_ICONS[i] ?? Workflow;
              return (
                <div key={item.title} className="bg-bg">
                  <article className="group h-full p-6 transition-colors duration-200 hover:bg-bg-elevated sm:p-7">
                    <div className="flex items-center justify-between">
                      <Icon aria-hidden className="size-5 text-gold" strokeWidth={1.6} />
                      <span className="font-mono text-[12px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                  </article>
                </div>
              );
            })}
          </Reveal>
        </div>
      </Section>

      {/* Products */}
      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Kicker>{t.products.kicker}</Kicker>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.02] tracking-tight">
                {t.products.title}
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-muted">{t.products.lede}</p>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {productCards.map((product) => (
            <StaggerItem key={product.to}>
              <Link
                to={product.to}
                className="group flex h-full flex-col rounded-xl border border-border p-7 transition-[border-color,background-color] duration-200 hover:border-border-strong hover:bg-bg-elevated"
              >
                <p className="text-[12px] tracking-[0.12em] text-subtle uppercase">{product.context}</p>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{product.body}</p>
                <TextArrow className="mt-auto pt-8 text-[14px] group-hover:text-gold">{t.products.open}</TextArrow>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Principles */}
      <section className="w-full border-y border-border bg-bg-elevated/50 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Kicker>{t.principles.kicker}</Kicker>
            <h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
              {t.principles.title}
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {t.principles.items.map((item, i) => {
              const Icon = PRINCIPLE_ICONS[i] ?? CheckCheck;
              return (
                <StaggerItem key={item.title}>
                  <div className="border-t border-border-strong pt-6">
                    <Icon aria-hidden className="size-5 text-gold" strokeWidth={1.6} />
                    <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Contracting paths */}
      <Section className="py-24 sm:py-32">
        <Reveal>
          <Kicker>{t.paths.kicker}</Kicker>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
            {t.paths.title}
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">{t.paths.lede}</p>
        </Reveal>
        <Reveal className="mt-12">
          <ContractPaths items={t.paths.items} fitLabel={t.paths.fitLabel} />
        </Reveal>
      </Section>

      {/* Delivery */}
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Kicker>{t.delivery.kicker}</Kicker>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.02] tracking-tight">
              {t.delivery.title}
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">{t.delivery.lede}</p>
          </Reveal>
          <div className="min-w-0">
            <DeliveryTimeline steps={t.delivery.steps} />
          </div>
        </div>
      </Section>

      {/* Registrations and portals */}
      <Section id="registrations" className="scroll-mt-24 pb-24 sm:pb-32">
        <Reveal>
          <Kicker>{t.registrations.kicker}</Kicker>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
            {t.registrations.title}
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">{t.registrations.lede}</p>
        </Reveal>
        <div className="mt-12">
          <RegistrationGrid />
        </div>
        <div id="portals" className="mt-10 scroll-mt-28">
          <Reveal>
            <PortalFinder uf={uf} onUf={setUf} />
          </Reveal>
        </div>
      </Section>

      {/* Habilitação documents, on Paper */}
      <section id="documentation" className="w-full scroll-mt-20 bg-paper px-5 py-24 text-bg sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <Reveal>
              <p className="mb-4 text-[13px] font-semibold tracking-[0.18em] text-ochre uppercase">{t.docs.kicker}</p>
              <h2 className="max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1] tracking-tight">
                {t.docs.title}
              </h2>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-shale">{t.docs.lede}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={DOCS_HUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xs bg-bg px-6 text-[15px] font-semibold text-fg transition-[opacity,transform] duration-150 hover:opacity-85 active:scale-[0.96]"
              >
                {t.docs.hub}
                <ArrowUpRight className="size-4" />
              </a>
            </Reveal>
          </div>
          <div className="mt-14">
            <HabilitacaoLedger />
          </div>
        </div>
      </section>

      {/* Company record */}
      <Section className="py-24 sm:py-32">
        <Reveal>
          <Kicker>{t.record.kicker}</Kicker>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.02] tracking-tight">
            {t.record.title}
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">{t.record.lede}</p>
        </Reveal>
        <Reveal className="mt-12">
          <CompanyRecord />
        </Reveal>
      </Section>

      {/* Legal framework */}
      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <Kicker>{t.laws.kicker}</Kicker>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.02] tracking-tight">
            {t.laws.title}
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">{t.laws.lede}</p>
        </Reveal>
        <Reveal className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.laws.items.map((law) => (
            <div key={law.code} className="bg-bg">
              <article className="h-full p-6 sm:p-7">
                <p className="font-mono text-[13px] text-gold">{law.code}</p>
                <h3 className="mt-5 font-display text-xl font-medium tracking-tight">{law.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{law.body}</p>
              </article>
            </div>
          ))}
          <div className="bg-bg">
            <a
              href={DOCS_HUB}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between bg-gold p-6 text-accent-fg transition-opacity duration-150 hover:opacity-90 sm:p-7"
            >
              <p className="font-mono text-[13px]">docs.unfld.com.br</p>
              <p className="mt-10 font-display text-2xl font-semibold leading-tight tracking-tight">{t.docs.title}</p>
              <ArrowUpRight className="mt-6 size-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Kicker>{t.faq.kicker}</Kicker>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.02] tracking-tight">
              {t.faq.title}
            </h2>
          </Reveal>
          <Reveal className="min-w-0">
            <Faq items={t.faq.items} />
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-border bg-bg-elevated p-8 sm:p-14">
            <CtaCells />
            <div className="relative max-w-2xl">
              <Kicker>{t.cta.kicker}</Kicker>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1] tracking-tight">
                {t.cta.title}
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-muted">{t.cta.body}</p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <BtnLink to="/contact">{t.cta.primary}</BtnLink>
                <BtnLink href={DOCS_HUB} target="_blank" rel="noopener noreferrer" variant="secondary">
                  {t.cta.docs}
                  <ArrowUpRight className="size-4" />
                </BtnLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}

/** Decorative hive cells: one, a handful, many — echoing each sphere's scale. */
function SphereCells({ level }: { level: number }) {
  const counts = [1, 7, 19];
  const cells = HEX_RINGS.slice(0, counts[level]);
  return (
    <svg
      aria-hidden
      viewBox="-60 -60 120 120"
      className="pointer-events-none absolute -top-6 -right-6 size-40 text-border-strong/60"
    >
      {cells.map(([x, y], i) => (
        <polygon
          key={`${x}-${y}`}
          points={hexPoints(x, y, 9)}
          fill={i === 0 ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
          className={i === 0 ? "text-gold/70" : undefined}
        />
      ))}
    </svg>
  );
}

function CtaCells() {
  return (
    <svg
      aria-hidden
      viewBox="-60 -60 120 120"
      className="pointer-events-none absolute -right-16 -bottom-20 hidden size-[26rem] text-border sm:block"
    >
      {HEX_RINGS.map(([x, y], i) => (
        <polygon
          key={`${x}-${y}`}
          points={hexPoints(x, y, 9)}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          className={i === 0 ? "text-gold" : undefined}
        />
      ))}
    </svg>
  );
}

// Centres of a hexagonal grid in rings around the origin (1 + 6 + 12 cells).
const HEX_RINGS: [number, number][] = (() => {
  const r = 9;
  const w = Math.sqrt(3) * r * 1.08;
  const axial: [number, number][] = [[0, 0]];
  const dirs: [number, number][] = [[1, 0], [1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1]];
  for (let ring = 1; ring <= 2; ring++) {
    let q = dirs[4][0] * ring;
    let s = dirs[4][1] * ring;
    for (let side = 0; side < 6; side++) {
      for (let step = 0; step < ring; step++) {
        axial.push([q, s]);
        q += dirs[side][0];
        s += dirs[side][1];
      }
    }
  }
  return axial.map(([q, s]) => [w * (q + s / 2), r * 1.5 * 1.08 * s] as [number, number]);
})();

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 90);
    return `${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`;
  }).join(" ");
}
