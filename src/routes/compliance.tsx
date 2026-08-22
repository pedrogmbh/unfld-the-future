import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, ChevronDown, CheckCircle2 } from "lucide-react";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import {
  COMPLIANCE_HIGHLIGHTS,
  COMPLIANCE_ITEMS,
  getComplianceCategories,
} from "@/lib/compliance";
import { pageTitle, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      {
        title: pageTitle("Compliance & Security Controls"),
      },
      {
        name: "description",
        content:
          "Institutional compliance disclosures, ISO 27001/27002 alignment, GDPR/LGPD data residency, PSSI security controls, and infrastructure safeguards.",
      },
    ],
  }),
  component: CompliancePage,
});

const categories = getComplianceCategories();

function CompliancePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    return COMPLIANCE_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [search, selectedCategory]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const next: Record<string, boolean> = {};
    for (const item of filteredItems) {
      next[item.id] = true;
    }
    setOpenItems(next);
  };

  const collapseAll = () => {
    setOpenItems({});
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

      <Section className="pb-16 sm:pb-20">
        <Reveal>
          <Kicker>Key Standards & Posture</Kicker>
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
            Security architecture benchmarks
          </h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {COMPLIANCE_HIGHLIGHTS.map((h) => (
            <StaggerItem key={h.title} className="bg-bg p-7 sm:p-8">
              <div className="flex items-center gap-2.5 text-fg">
                <CheckCircle2 className="size-4 shrink-0 text-fg" />
                <h3 className="font-medium text-fg">{h.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{h.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="pb-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Kicker>Controls & Questions Database</Kicker>
              <h2 className="font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
                Compliance disclosure repository
              </h2>
              <p className="mt-2 text-sm text-muted">
                Explore {COMPLIANCE_ITEMS.length} verified disclosures across {categories.length} security categories.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-subtle" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search controls, ISO, backups, GDPR..."
                  className="h-10 w-full rounded-full border border-border-strong bg-bg-elevated pl-10 pr-4 text-[13px] text-fg placeholder:text-subtle focus:border-fg/40 focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={expandAll}
                  className="h-9 cursor-pointer rounded-full border border-border px-3 text-[12px] font-medium text-muted transition-colors hover:border-fg/30 hover:text-fg"
                >
                  Expand all
                </button>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="h-9 cursor-pointer rounded-full border border-border px-3 text-[12px] font-medium text-muted transition-colors hover:border-fg/30 hover:text-fg"
                >
                  Collapse all
                </button>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "cursor-pointer rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors",
                selectedCategory === "all"
                  ? "bg-accent text-accent-fg"
                  : "border border-border bg-bg-subtle text-muted hover:border-fg/30 hover:text-fg",
              )}
            >
              All Categories ({COMPLIANCE_ITEMS.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => setSelectedCategory(c.name)}
                className={cn(
                  "cursor-pointer rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors",
                  selectedCategory === c.name
                    ? "bg-accent text-accent-fg"
                    : "border border-border bg-bg-subtle text-muted hover:border-fg/30 hover:text-fg",
                )}
              >
                {c.name} ({c.items.length})
              </button>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="pb-20">
        {filteredItems.length === 0 ? (
          <div className="rounded-xl border border-border bg-bg-elevated p-12 text-center">
            <p className="text-base text-fg">No compliance disclosures matched your search.</p>
            <p className="mt-2 text-sm text-muted">
              Try adjusting your query or resetting category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
              className="mt-5 inline-flex h-9 cursor-pointer items-center rounded-full border border-border-strong px-4 text-[13px] text-fg hover:bg-fg/5"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item, idx) => {
              const isOpen = openItems[item.id] ?? false;
              return (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-xl border border-border bg-bg-elevated transition-colors hover:border-border-strong"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-start justify-between gap-4 p-6 text-left"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md border border-border bg-bg-subtle px-2 py-0.5 font-mono text-[11px] text-subtle">
                          {item.category}
                        </span>
                        <span className="font-mono text-[11px] text-subtle">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-2.5 font-display text-[17px] font-medium leading-snug tracking-tight text-fg">
                        {item.question}
                      </h3>
                    </div>
                    <div className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-bg-subtle text-muted transition-transform">
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          isOpen && "rotate-180 text-fg",
                        )}
                      />
                    </div>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <div className="whitespace-pre-line text-[14.5px] leading-relaxed text-muted">
                        {item.answer}
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        )}
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <div className="rounded-xl border border-border bg-bg-elevated p-8 sm:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <Kicker>Security Reviews & Enterprise Audits</Kicker>
                <h2 className="font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
                  Need a vendor risk assessment or custom security annex?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Our legal and security engineering team in São Paulo provides custom vendor questionnaires, SOC 2 alignment mappings, Data Processing Addenda (DPA), and architectural reviews for enterprise partners.
                </p>
                <div className="mt-4 font-mono text-[12px] text-subtle">
                  Contact: {SITE.security} · {SITE.sales}
                </div>
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
    </main>
  );
}
