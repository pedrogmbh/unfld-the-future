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
  COMPLIANCE_ITEMS,
  COMPLIANCE_POSTURE_MANIFEST,
  getDisclosureOrder,
  type ComplianceCategory,
  type ResolvedChapter,
} from "@/lib/compliance";
import { SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { cn } from "@/lib/utils";
import { interpolate } from "@/lib/i18n/interpolate";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import {
  localizeComplianceCategories,
  localizeComplianceChapters,
  localizeComplianceHighlights,
  localizeComplianceItems,
  localizeComplianceLifecycle,
  localizeCompliancePosture,
  localizeComplianceRegions,
  localizeComplianceResponse,
  localizeComplianceStandards,
} from "@/lib/i18n/localize";

export const Route = createFileRoute("/compliance")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.compliance;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/compliance",
      locale: match.context.locale,
    });
  },
  component: CompliancePage,
});

const order = getDisclosureOrder();
const TOTAL = COMPLIANCE_ITEMS.length;

type OpenMap = Record<string, boolean>;

function useLocalizedCompliance() {
  const locale = useLocale();
  return useMemo(
    () => ({
      chapters: localizeComplianceChapters(locale),
      categories: localizeComplianceCategories(locale),
      items: localizeComplianceItems(locale),
      posture: localizeCompliancePosture(locale),
      highlights: localizeComplianceHighlights(locale),
      standards: localizeComplianceStandards(locale),
      regions: localizeComplianceRegions(locale),
      lifecycle: localizeComplianceLifecycle(locale),
      response: localizeComplianceResponse(locale),
    }),
    [locale],
  );
}

function CompliancePage() {
  const { pages } = useMessages();
  const p = pages.compliance;
  const { items, categories } = useLocalizedCompliance();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState<OpenMap>({});

  const query = search.trim().toLowerCase();
  const filtering = query.length > 0 || category !== "all";

  const results = useMemo(() => {
    if (!filtering) return [];
    return items.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (!query) return true;
      return (
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });
  }, [filtering, query, category, items]);

  const toggle = (id: string) =>
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  const reset = () => {
    setSearch("");
    setCategory("all");
  };

  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <BtnLink to="/contact">{p.contactTeam}</BtnLink>
            <BtnLink to="/security" variant="secondary">
              {p.securityOverview}
            </BtnLink>
          </div>
        }
      />

      <PostureBand />

      <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <ParallaxImage
            src="/images/infra.jpg"
            alt={p.imageAlt}
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
        categories={categories}
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
  const { posture } = useLocalizedCompliance();
  return (
    <Section className="pb-16 sm:pb-20">
      <Stagger
        className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4"
        delay={0.06}
      >
        {posture.map((stat) => (
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
  const { pages } = useMessages();
  const p = pages.compliance;
  const { highlights } = useLocalizedCompliance();
  return (
    <Section className="pb-20 sm:pb-28">
      <Reveal>
        <Kicker>{p.highlightsKicker}</Kicker>
        <h2 className="max-w-3xl font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight tracking-tight">
          {p.highlightsTitle}
        </h2>
      </Reveal>
      <Stagger
        className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        delay={0.05}
      >
        {highlights.map((h) => (
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
  const { pages } = useMessages();
  const p = pages.compliance;
  const { chapters } = useLocalizedCompliance();
  return (
    <Section className="pb-16 sm:pb-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <Kicker>{p.repoKicker}</Kicker>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight">
            {p.repoTitle}
            <br />
            <span className="text-muted">{interpolate(p.repoTitleSecond, { count: TOTAL })}</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
            {p.repoLede}
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
  categories,
}: {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  filtering: boolean;
  count: number;
  onReset: () => void;
  categories: ReturnType<typeof localizeComplianceCategories>;
}) {
  const { pages } = useMessages();
  const p = pages.compliance;
  return (
    <Section className="pb-12">
      <Reveal>
        <div className="rounded-xl border border-border bg-bg-elevated p-5 sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="font-display text-[17px] font-medium tracking-tight">
                {p.searchTitle}
              </p>
              <p className="mt-1 text-[13px] text-muted">
                {filtering
                  ? interpolate(p.searchMatch, { count, total: TOTAL })
                  : interpolate(p.searchIdle, { total: TOTAL, domains: categories.length })}
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
                  placeholder={p.searchPlaceholder}
                  aria-label={p.searchAria}
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
                  {p.clear}
                </button>
              ) : null}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
            <Pill
              active={category === "all"}
              onClick={() => setCategory("all")}
              label={p.allDomains}
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
  const { pages } = useMessages();
  const p = pages.compliance;
  if (items.length === 0) {
    return (
      <Section className="pb-24 sm:pb-32">
        <div className="rounded-xl border border-border bg-bg-elevated p-12 text-center">
          <p className="font-display text-lg font-medium tracking-tight">
            {p.emptyTitle}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {p.emptyBody}
          </p>
          <button
            type="button"
            onClick={onReset}
            className="mt-6 inline-flex h-9 items-center rounded-full border border-border-strong px-4 text-[13px] text-fg transition-colors hover:bg-fg/5"
          >
            {p.reset}
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
  const { chapters } = useLocalizedCompliance();
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
  const { pages } = useMessages();
  const { chapters } = useLocalizedCompliance();
  return (
    <div className="flex items-center gap-3">
      <GlyphTile icon={chapter.icon} />
      <span className="font-mono text-[12px] text-subtle tabular-nums">
        {interpolate(pages.compliance.chapter, {
          n: chapter.n,
          total: String(chapters.length).padStart(2, "0"),
        })}
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
  open,
  onToggle,
}: {
  category: ComplianceCategory;
  labelled: boolean;
  open: OpenMap;
  onToggle: (id: string) => void;
}) {
  return (
    <section className="space-y-3">
      {labelled ? (
        <div className="flex items-center gap-3 pt-2 pb-1">
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
  const labelled = chapter.categories.length > 1;
  const group = (category: ComplianceCategory) => (
    <CategoryGroup
      key={category.slug}
      category={category}
      labelled={labelled}
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

  // Banner chapters run their rows in two columns: it halves the tallest
  // chapters and reads as a different structure, not just a different skin.
  const half = Math.ceil(chapter.items.length / 2);
  const column = (items: typeof chapter.items) => (
    <div className="min-w-0">
      {items.map((item) => (
        <Disclosure
          key={item.id}
          item={item}
          index={order.get(item.id) ?? 0}
          open={open[item.id] ?? false}
          onToggle={() => onToggle(item.id)}
          variant="row"
          showCategory={labelled}
        />
      ))}
    </div>
  );

  return (
    <Section id={chapter.slug} className="scroll-mt-24 pb-20 sm:scroll-mt-28 sm:pb-28">
      <Reveal>
        <ChapterBanner chapter={chapter} />
      </Reveal>
      <div className="mt-2 grid gap-x-14 lg:grid-cols-2 lg:items-start">
        {column(chapter.items.slice(0, half))}
        {column(chapter.items.slice(half))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- interludes */

function StandardsLedger() {
  const { pages } = useMessages();
  const p = pages.compliance;
  const { standards } = useLocalizedCompliance();
  return (
    <Section className="pb-20 sm:pb-28">
      <Reveal>
        <div className="rounded-xl border border-border bg-bg-elevated p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div>
              <Kicker>{p.ledgerKicker}</Kicker>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight">
                {p.ledgerTitle}
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                {p.ledgerLede}
              </p>
            </div>
            <ul className="min-w-0 divide-y divide-border border-t border-border">
              {standards.map((s) => (
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
  const { pages } = useMessages();
  const p = pages.compliance;
  return (
    <Section className="pb-20 sm:pb-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Kicker>{p.fedKicker}</Kicker>
          <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-tight tracking-tight">
            {p.fedTitle}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            {p.fedLede}
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-6">
            {[
              ["SAML 2.0", p.assertion],
              ["OAuth 2.0", p.delegation],
              ["OIDC", p.identity],
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
            alt={p.federationAlt}
          />
        </Reveal>
      </div>
    </Section>
  );
}

function Residency() {
  const { pages } = useMessages();
  const p = pages.compliance;
  const { regions } = useLocalizedCompliance();
  return (
    <Section className="pb-20 sm:pb-28">
      <Reveal>
        <Kicker>{p.residencyKicker}</Kicker>
        <h2 className="max-w-2xl font-display text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-tight tracking-tight">
          {p.residencyTitle}
        </h2>
      </Reveal>
      <Stagger
        className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3"
        delay={0.08}
      >
        {regions.map((r) => (
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
          {p.residencyNote}
        </p>
      </Reveal>
    </Section>
  );
}

function ResponseQuote() {
  const { pages } = useMessages();
  const p = pages.compliance;
  const { response } = useLocalizedCompliance();
  return (
    <Section className="pb-20 sm:pb-28">
      <Reveal>
        <Kicker>{p.incidentKicker}</Kicker>
        <blockquote className="max-w-4xl font-display text-[clamp(1.7rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight">
          {p.incidentQuote}
        </blockquote>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted">
          {p.incidentLede}
        </p>
      </Reveal>
      <Stagger className="mt-12 grid grid-cols-3 gap-6 sm:max-w-2xl" delay={0.08}>
        {response.map((f) => (
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
  const { pages } = useMessages();
  const p = pages.compliance;
  return (
    <Section className="pb-20 sm:pb-28">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <div className="min-w-0">
          <Reveal>
            <Kicker>{p.postureKicker}</Kicker>
            <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-tight tracking-tight">
              {p.postureTitle}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {p.postureLede}
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
  const { pages } = useMessages();
  const p = pages.compliance;
  const { lifecycle } = useLocalizedCompliance();
  return (
    <Section className="pb-20 sm:pb-28">
      <Reveal>
        <Kicker>{p.lifeKicker}</Kicker>
        <h2 className="max-w-2xl font-display text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-tight tracking-tight">
          {p.lifeTitle}
        </h2>
      </Reveal>
      <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" delay={0.07}>
        {lifecycle.map((step) => (
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
  const { pages } = useMessages();
  const p = pages.compliance;
  return (
    <Section className="pb-24 sm:pb-32">
      <Reveal>
        <div className="rounded-xl border border-border bg-bg-elevated p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Kicker>{p.closeKicker}</Kicker>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight">
                {p.closeTitle}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {p.closeLede}
              </p>
              <p className="mt-5 font-mono text-[12px] text-subtle">
                {SITE.security} · {SITE.sales}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <BtnLink to="/contact">{p.requestPack}</BtnLink>
              <BtnLink to="/legal/privacy-policy" variant="secondary">
                {p.privacyPolicy}
              </BtnLink>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
