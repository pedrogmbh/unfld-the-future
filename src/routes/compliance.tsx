import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { BtnLink } from "@/components/site/buttons";
import { CodeBlock } from "@/components/site/code-block";
import { ComplianceGlyph, Disclosure, GlyphTile } from "@/components/site/compliance";
import { PageHero } from "@/components/site/page-hero";
import { ParallaxImage, Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import {
  COMPLIANCE_HIGHLIGHTS,
  COMPLIANCE_ITEMS,
  COMPLIANCE_LIFECYCLE,
  COMPLIANCE_POSTURE,
  COMPLIANCE_POSTURE_MANIFEST,
  COMPLIANCE_REGIONS,
  COMPLIANCE_RESPONSE,
  COMPLIANCE_STANDARDS,
  getComplianceCategories,
  getComplianceChapters,
  getDisclosureOrder,
  type ComplianceCategory,
  type ResolvedChapter,
} from "@/lib/compliance";
import { pageTitle, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: pageTitle("Compliance & Security Controls") },
      {
        name: "description",
        content:
          "Institutional compliance disclosures, ISO 27001/27002 alignment, GDPR/LGPD data residency, PSSI security controls, and infrastructure safeguards.",
      },
    ],
  }),
  component: CompliancePage,
});

const chapters = getComplianceChapters();
const categories = getComplianceCategories();
const order = getDisclosureOrder();
const TOTAL = COMPLIANCE_ITEMS.length;

type OpenMap = Record<string, boolean>;

function CompliancePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState<OpenMap>({});

  const query = search.trim().toLowerCase();
  const filtering = query.length > 0 || category !== "all";

  const results = useMemo(() => {
    if (!filtering) return [];
    return COMPLIANCE_ITEMS.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (!query) return true;
      return (
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });
  }, [filtering, query, category]);

  const toggle = (id: string) =>
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  const reset = () => {
    setSearch("");
    setCategory("all");
  };

  return (
    <main>
      <PageHero
        kicker="Security & Compliance"
        title="Compliance & Trust"
        titleSecond="Institutional controls."
        lede="Comprehensive compliance disclosures, Information Security Policy (PSSI), ISO 27001/27002 controls, GDPR/LGPD alignment, and infrastructure architecture across UNFLD products and engineering operations."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <BtnLink to="/contact">Contact security & audit team</BtnLink>
            <BtnLink to="/security" variant="secondary">
              Security overview
            </BtnLink>
          </div>
        }
      />

      <PostureBand />

      <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <ParallaxImage
            src="/images/infra.jpg"
            alt="A hall of compute racks receding into the dark"
          />
        </div>
      </section>

      <Highlights />
      <Index onJump={reset} />

      <SearchTool
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        filtering={filtering}
        count={results.length}
        onReset={reset}
      />

      {filtering ? (
        <Results items={results} open={open} onToggle={toggle} onReset={reset} />
      ) : (
        <Narrative open={open} onToggle={toggle} />
      )}

      <Closing />
    </main>
  );
}

/* ---------------------------------------------------------------- posture */

function PostureBand() {
  return (
    <Section className="pb-16 sm:pb-20">
      <Stagger
        className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4"
        delay={0.06}
      >
        {COMPLIANCE_POSTURE.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="h-full bg-bg p-6 sm:p-7">
              <p className="font-display text-[clamp(1.6rem,3.5vw,2.25rem)] font-medium tracking-tight tabular-nums">
                {stat.value}
              </p>
              <p className="mt-2 text-[13px] text-fg">{stat.label}</p>
              <p className="mt-1 font-mono text-[11px] text-subtle">{stat.note}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Highlights() {
  return (
    <Section className="pb-20 sm:pb-28">
      <Reveal>
        <Kicker>What we hold ourselves to</Kicker>
        <h2 className="max-w-3xl font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight tracking-tight">
          Six commitments the rest of this page has to prove.
        </h2>
      </Reveal>
      <Stagger
        className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        delay={0.05}
      >
        {COMPLIANCE_HIGHLIGHTS.map((h) => (
          <StaggerItem key={h.title}>
            <article className="h-full bg-bg p-7 transition-colors duration-200 hover:bg-bg-elevated sm:p-8">
              <GlyphTile icon={h.icon} />
              <h3 className="mt-6 font-display text-lg font-medium tracking-tight">
                {h.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{h.desc}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ------------------------------------------------------------------ index */

function Index({ onJump }: { onJump: () => void }) {
  return (
    <Section className="pb-16 sm:pb-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <Kicker>The repository</Kicker>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight">
            Six chapters.
            <br />
            <span className="text-muted">{TOTAL} disclosures.</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
            Everything a vendor risk assessment asks for, grouped the way a
            reviewer reads it — from the policy at the top to the pipeline that
            ships the code. Search below to jump straight to an answer.
          </p>
        </Reveal>
        <div className="min-w-0">
          <Stagger className="divide-y divide-border border-y border-border" delay={0.05}>
            {chapters.map((chapter) => (
              <StaggerItem key={chapter.slug}>
                <a
                  href={`#${chapter.slug}`}
                  onClick={onJump}
                  className="group flex items-center gap-4 py-4 transition-colors sm:gap-5"
                >
                  <span className="font-mono text-[11px] text-subtle tabular-nums">
                    {chapter.n}
                  </span>
                  <GlyphTile
                    icon={chapter.icon}
                    size="sm"
                    className="transition-colors group-hover:border-border-strong"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[17px] font-medium tracking-tight transition-colors group-hover:text-fg">
                      {chapter.title}
                    </span>
                    <span className="mt-0.5 block truncate text-[13px] text-subtle">
                      {chapter.categories.map((c) => c.short).join(" · ")}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-[11px] text-subtle tabular-nums">
                    {String(chapter.items.length).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg"
                  >
                    →
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- search */

function SearchTool({
  search,
  setSearch,
  category,
  setCategory,
  filtering,
  count,
  onReset,
}: {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  filtering: boolean;
  count: number;
  onReset: () => void;
}) {
  return (
    <Section className="pb-12">
      <Reveal>
        <div className="rounded-xl border border-border bg-bg-elevated p-5 sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="font-display text-[17px] font-medium tracking-tight">
                Search every disclosure
              </p>
              <p className="mt-1 text-[13px] text-muted">
                {filtering
                  ? `${count} of ${TOTAL} disclosures match.`
                  : `Filter ${TOTAL} answers across ${categories.length} control domains.`}
              </p>
            </div>
            <div className="flex w-full items-center gap-2 lg:w-auto">
              <div className="relative w-full lg:w-96">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle"
                  aria-hidden
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ISO 27001, backups, GDPR, MFA…"
                  aria-label="Search compliance disclosures"
                  className="h-10 w-full rounded-full border border-border-strong bg-bg pr-4 pl-10 text-[13px] text-fg placeholder:text-subtle focus:border-fg/40 focus:outline-none"
                />
              </div>
              {filtering ? (
                <button
                  type="button"
                  onClick={onReset}
                  className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-border-strong px-4 text-[13px] text-muted transition-colors hover:text-fg"
                >
                  <X className="size-3.5" aria-hidden />
                  Clear
                </button>
              ) : null}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
            <Pill
              active={category === "all"}
              onClick={() => setCategory("all")}
              label="All domains"
              count={TOTAL}
            />
            {categories.map((c) => (
              <Pill
                key={c.slug}
                active={category === c.name}
                onClick={() => setCategory(category === c.name ? "all" : c.name)}
                label={c.short}
                count={c.items.length}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Pill({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] font-medium transition-colors",
        active
          ? "bg-accent text-accent-fg"
          : "border border-border bg-bg-subtle text-muted hover:border-fg/30 hover:text-fg",
      )}
    >
      {label}
      <span
        className={cn(
          "font-mono text-[10px] tabular-nums",
          active ? "text-accent-fg/60" : "text-subtle",
        )}
      >
        {count}
      </span>
    </button>
  );
}

/* ---------------------------------------------------------------- results */

function Results({
  items,
  open,
  onToggle,
  onReset,
}: {
  items: readonly { id: string; category: string; question: string; answer: string }[];
  open: OpenMap;
  onToggle: (id: string) => void;
  onReset: () => void;
}) {
  if (items.length === 0) {
    return (
      <Section className="pb-24 sm:pb-32">
        <div className="rounded-xl border border-border bg-bg-elevated p-12 text-center">
          <p className="font-display text-lg font-medium tracking-tight">
            No disclosure matched that query.
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Try a broader term, or reset the filters to browse the repository by
            chapter.
          </p>
          <button
            type="button"
            onClick={onReset}
            className="mt-6 inline-flex h-9 items-center rounded-full border border-border-strong px-4 text-[13px] text-fg transition-colors hover:bg-fg/5"
          >
            Reset filters
          </button>
        </div>
      </Section>
    );
  }

  return (
    <Section className="pb-24 sm:pb-32">
      <div className="space-y-3">
        {items.map((item) => (
          <Disclosure
            key={item.id}
            item={item}
            index={order.get(item.id) ?? 0}
            open={open[item.id] ?? false}
            onToggle={() => onToggle(item.id)}
            showCategory
          />
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- narrative */

function Narrative({
  open,
  onToggle,
}: {
  open: OpenMap;
  onToggle: (id: string) => void;
}) {
  const interludes: Record<string, React.ReactNode> = {
    governance: <StandardsLedger />,
    identity: <FederationBreak />,
    infrastructure: <Residency />,
    operations: <ResponseQuote />,
    data: <PostureManifest />,
    engineering: <Lifecycle />,
  };

  return (
    <>
      {chapters.map((chapter) => (
        <div key={chapter.slug}>
          <Chapter chapter={chapter} open={open} onToggle={onToggle} />
          {interludes[chapter.slug]}
        </div>
      ))}
    </>
  );
}

function ChapterMark({ chapter }: { chapter: ResolvedChapter }) {
  return (
    <div className="flex items-center gap-3">
      <GlyphTile icon={chapter.icon} />
      <span className="font-mono text-[12px] text-subtle tabular-nums">
        Chapter {chapter.n} / {String(chapters.length).padStart(2, "0")}
      </span>
    </div>
  );
}

function ChapterContents({ chapter }: { chapter: ResolvedChapter }) {
  return (
    <ul className="space-y-2">
      {chapter.categories.map((c) => (
        <li key={c.slug} className="flex items-center gap-2.5 text-[12.5px] text-subtle">
          <ComplianceGlyph icon={c.icon} className="size-3.5 shrink-0" />
          <span className="min-w-0 flex-1 truncate">{c.name}</span>
          <span className="font-mono text-[11px] tabular-nums">
            {String(c.items.length).padStart(2, "0")}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Vertical heading for `aside` chapters: sticks alongside the card column. */
function ChapterAside({ chapter }: { chapter: ResolvedChapter }) {
  return (
    <>
      <ChapterMark chapter={chapter} />
      <h2 className="mt-5 font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-medium leading-tight tracking-tight">
        {chapter.title}
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">{chapter.lede}</p>
      <div className="mt-6 border-t border-border pt-5">
        <ChapterContents chapter={chapter} />
      </div>
    </>
  );
}

/** Horizontal heading band for `banner` chapters, above the dense row list. */
function ChapterBanner({ chapter }: { chapter: ResolvedChapter }) {
  return (
    <div className="border-y border-border py-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] lg:items-end lg:gap-16">
        <div className="min-w-0">
          <ChapterMark chapter={chapter} />
          <h2 className="mt-5 font-display text-[clamp(1.7rem,3.6vw,2.6rem)] font-medium leading-tight tracking-tight">
            {chapter.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            {chapter.lede}
          </p>
        </div>
        <div className="min-w-0 lg:border-l lg:border-border lg:pl-10">
          <ChapterContents chapter={chapter} />
        </div>
      </div>
    </div>
  );
}

/**
 * A labelled run of disclosures. Chapters carry up to four domains, and the
 * rule between them is what stops a long chapter reading as one flat column.
 */
function CategoryGroup({
  category,
  labelled,
  variant,
  open,
  onToggle,
}: {
  category: ComplianceCategory;
  labelled: boolean;
  variant: "card" | "row";
  open: OpenMap;
  onToggle: (id: string) => void;
}) {
  return (
    <section className={variant === "card" ? "space-y-3" : undefined}>
      {labelled ? (
        <div
          className={cn(
            "flex items-center gap-3",
            variant === "card" ? "pt-2 pb-1" : "border-b border-border pt-8 pb-3",
          )}
        >
          <ComplianceGlyph icon={category.icon} className="size-3.5 shrink-0 text-muted" />
          <h3 className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
            {category.name}
          </h3>
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-[11px] text-subtle tabular-nums">
            {String(category.items.length).padStart(2, "0")}
          </span>
        </div>
      ) : null}
      {category.items.map((item) => (
        <Disclosure
          key={item.id}
          item={item}
          index={order.get(item.id) ?? 0}
          open={open[item.id] ?? false}
          onToggle={() => onToggle(item.id)}
          variant={variant}
        />
      ))}
    </section>
  );
}

function Chapter({
  chapter,
  open,
  onToggle,
}: {
  chapter: ResolvedChapter;
  open: OpenMap;
  onToggle: (id: string) => void;
}) {
  const variant = chapter.layout === "aside" ? "card" : "row";
  const labelled = chapter.categories.length > 1;
  const group = (category: ComplianceCategory) => (
    <CategoryGroup
      key={category.slug}
      category={category}
      labelled={labelled}
      variant={variant}
      open={open}
      onToggle={onToggle}
    />
  );

  if (chapter.layout === "aside") {
    return (
      <Section id={chapter.slug} className="scroll-mt-24 pb-20 sm:scroll-mt-28 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <ChapterAside chapter={chapter} />
          </Reveal>
          <div className="min-w-0 space-y-6">{chapter.categories.map(group)}</div>
        </div>
      </Section>
    );
  }

  return (
    <Section id={chapter.slug} className="scroll-mt-24 pb-20 sm:scroll-mt-28 sm:pb-28">
      <Reveal>
        <ChapterBanner chapter={chapter} />
      </Reveal>
      <div className="mt-2">{chapter.categories.map(group)}</div>
    </Section>
  );
}

/* -------------------------------------------------------------- interludes */

function StandardsLedger() {
  return (
    <Section className="pb-20 sm:pb-28">
      <Reveal>
        <div className="rounded-xl border border-border bg-bg-elevated p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div>
              <Kicker>The ledger</Kicker>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight">
                What we are measured against.
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                UNFLD runs lean. Rather than claim accreditations we do not
                hold, we state precisely where a certificate exists and where we
                calibrate our own practice to the criteria.
              </p>
            </div>
            <ul className="min-w-0 divide-y divide-border border-t border-border">
              {COMPLIANCE_STANDARDS.map((s) => (
                <li
                  key={s.name}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="w-40 shrink-0 font-display text-[15px] font-medium tracking-tight">
                    {s.name}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] text-subtle uppercase">
                      {s.scope}
                    </span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-muted">
                      {s.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function FederationBreak() {
  return (
    <Section className="pb-20 sm:pb-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Kicker>Federated by default</Kicker>
          <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-tight tracking-tight">
            Your directory stays the source of truth.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Enterprise tenants federate through SAML 2.0, OAuth 2.0, or OpenID
            Connect against Microsoft Entra ID, Okta, or Google Workspace. When
            someone leaves your organisation, they leave ours in the same
            moment — no parallel account list to reconcile.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-6">
            {[
              ["SAML 2.0", "Assertion"],
              ["OAuth 2.0", "Delegation"],
              ["OIDC", "Identity"],
            ].map(([term, role]) => (
              <div key={term}>
                <dt className="font-mono text-[13px] text-fg">{term}</dt>
                <dd className="mt-1 text-[12px] text-subtle">{role}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0">
          <ParallaxImage
            src="/images/relay.jpg"
            alt="A constellation of linked nodes on black"
          />
        </Reveal>
      </div>
    </Section>
  );
}

function Residency() {
  return (
    <Section className="pb-20 sm:pb-28">
      <Reveal>
        <Kicker>Data residency</Kicker>
        <h2 className="max-w-2xl font-display text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-tight tracking-tight">
          Where the data physically sits, by contract.
        </h2>
      </Reveal>
      <Stagger
        className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3"
        delay={0.08}
      >
        {COMPLIANCE_REGIONS.map((r) => (
          <StaggerItem key={r.region}>
            <div className="flex h-full flex-col bg-bg p-7 sm:p-8">
              <p className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
                {r.role}
              </p>
              <p className="mt-6 font-mono text-[clamp(1.1rem,2.4vw,1.5rem)] text-fg">
                {r.region}
              </p>
              <p className="mt-2 font-display text-lg font-medium tracking-tight">
                {r.city}
                <span className="text-muted"> · {r.country}</span>
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">{r.note}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.12}>
        <p className="mt-6 font-mono text-[11px] text-subtle">
          Edge delivery and DDoS mitigation through Cloudflare points of presence
          worldwide. Origin compute never leaves the contracted region.
        </p>
      </Reveal>
    </Section>
  );
}

function ResponseQuote() {
  return (
    <Section className="pb-20 sm:pb-28">
      <Reveal>
        <Kicker>When something goes wrong</Kicker>
        <blockquote className="max-w-4xl font-display text-[clamp(1.7rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight">
          An incident is not the moment to invent a process. Triage,
          containment, root cause, and notification are written down before we
          ever need them.
        </blockquote>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted">
          Breach notification follows GDPR, LGPD, and contractual SLA terms —
          investigated and communicated to affected parties and regulators
          without undue delay. Everything an investigation needs is already
          being retained.
        </p>
      </Reveal>
      <Stagger className="mt-12 grid grid-cols-3 gap-6 sm:max-w-2xl" delay={0.08}>
        {COMPLIANCE_RESPONSE.map((f) => (
          <StaggerItem key={f.label}>
            <p className="font-display text-[clamp(1.3rem,3vw,2rem)] font-medium tracking-tight tabular-nums">
              {f.value}
            </p>
            <p className="mt-1.5 text-[12px] leading-snug text-subtle">{f.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function PostureManifest() {
  return (
    <Section className="pb-20 sm:pb-28">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <div className="min-w-0">
          <Reveal>
            <Kicker>Enforced, not aspirational</Kicker>
            <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-tight tracking-tight">
              The posture, as configuration.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Encryption, credential handling, and retention are not a policy
              document somebody remembers to apply. They are the defaults every
              UNFLD environment is provisioned with, and drift from them fails
              the pipeline.
            </p>
          </Reveal>
        </div>
        <div className="min-w-0">
          <CodeBlock code={COMPLIANCE_POSTURE_MANIFEST} filename="posture.yml" />
        </div>
      </div>
    </Section>
  );
}

function Lifecycle() {
  return (
    <Section className="pb-20 sm:pb-28">
      <Reveal>
        <Kicker>Before anything ships</Kicker>
        <h2 className="max-w-2xl font-display text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-tight tracking-tight">
          Four gates between a commit and production.
        </h2>
      </Reveal>
      <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" delay={0.07}>
        {COMPLIANCE_LIFECYCLE.map((step) => (
          <StaggerItem key={step.n}>
            <div className="border-t border-border pt-5">
              <p className="font-mono text-[12px] text-subtle tabular-nums">{step.n}</p>
              <h3 className="mt-3 font-display text-[17px] font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{step.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ---------------------------------------------------------------- closing */

function Closing() {
  return (
    <Section className="pb-24 sm:pb-32">
      <Reveal>
        <div className="rounded-xl border border-border bg-bg-elevated p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Kicker>Security reviews & enterprise audits</Kicker>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight">
                Need a vendor risk assessment or a custom security annex?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Our legal and security engineering team in São Paulo provides
                custom vendor questionnaires, SOC 2 alignment mappings, Data
                Processing Addenda, and architectural reviews for enterprise
                partners.
              </p>
              <p className="mt-5 font-mono text-[12px] text-subtle">
                {SITE.security} · {SITE.sales}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <BtnLink to="/contact">Request security pack</BtnLink>
              <BtnLink to="/legal/privacy-policy" variant="secondary">
                Privacy policy
              </BtnLink>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
