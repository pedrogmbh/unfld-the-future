import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import {
  DOCS_HUB,
  REGISTRATIONS,
  UFS,
  docsUrl,
  fetchPortals,
  formatIsoDate,
  type Portal,
} from "@/lib/govtech";
import { interpolate, useLocale, useMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function RegistrationGrid() {
  const locale = useLocale();
  const t = useMessages().govtech.registrations;
  return (
    <Reveal className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {REGISTRATIONS.map((reg) => {
        const copy = t.items[reg.key];
        return (
          <div key={reg.key} className="bg-bg">
            <article className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[12px] text-subtle">{reg.scope}</span>
                <span className="inline-flex items-center gap-1.5 text-[12px] text-muted">
                  <span aria-hidden className={cn("size-1.5 rounded-full", reg.active ? "bg-status" : "bg-gold")} />
                  {reg.active ? t.active : t.inReview}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{copy.name}</h3>
              {reg.number ? <p className="mt-1 font-mono text-[13px] text-gold">nº {reg.number}</p> : null}
              <p className="mt-3 text-sm leading-relaxed text-muted">{copy.detail}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                <span className="text-[12px] text-subtle">
                  {reg.expires ? interpolate(t.validUntil, { date: formatIsoDate(reg.expires, locale) }) : ""}
                </span>
                <a
                  href={docsUrl(reg.path)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 rounded-xs text-[13px] font-semibold text-fg transition-colors hover:text-gold"
                >
                  {t.open}
                  <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          </div>
        );
      })}
    </Reveal>
  );
}

type PortalState = { status: "loading" } | { status: "error" } | { status: "ready"; portals: Portal[] };

export function PortalFinder({ uf, onUf }: { uf: string; onUf: (code: string) => void }) {
  const t = useMessages().govtech.registrations;
  const [state, setState] = useState<PortalState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    fetchPortals(controller.signal)
      .then((portals) => setState({ status: "ready", portals }))
      .catch((error: unknown) => {
        if (!controller.signal.aborted) setState({ status: "error" });
        void error;
      });
    return () => controller.abort();
  }, []);

  const local = state.status === "ready" ? state.portals.filter((p) => p.uf === uf) : [];
  const national =
    state.status === "ready"
      ? state.portals.filter((p) => p.uf === "Nacional" && p.priority === "Essencial")
      : [];
  const ufName = UFS.find((item) => item.code === uf)?.name ?? uf;

  return (
    <div className="rounded-xl border border-border bg-bg-elevated">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border p-6 sm:p-7">
        <div className="min-w-0">
          <h3 className="font-display text-2xl font-medium tracking-tight">{t.portalsTitle}</h3>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{t.portalsLede}</p>
        </div>
        <label className="grid gap-1.5 text-[12px] tracking-[0.12em] text-subtle uppercase">
          {t.selectLabel}
          <select
            value={uf}
            onChange={(event) => onUf(event.target.value)}
            className="h-10 min-w-[14rem] rounded-xs border border-border-strong bg-bg px-3 text-[15px] tracking-normal text-fg normal-case"
          >
            {[...UFS]
              .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
              .map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name} · {item.code}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div className="p-6 sm:p-7" aria-live="polite">
        {state.status === "loading" ? (
          <p className="text-sm text-subtle">{t.loading}</p>
        ) : state.status === "error" ? (
          <p className="text-sm text-muted">
            {t.error}{" "}
            <a href={`${DOCS_HUB}/#portais`} target="_blank" rel="noopener noreferrer" className="font-semibold text-fg underline decoration-border-strong underline-offset-4 hover:text-gold">
              {t.openCatalog}
            </a>
          </p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            <PortalList title={ufName} portals={local} visit={t.visit} />
            <PortalList title={t.national} portals={national} visit={t.visit} />
          </div>
        )}
        <p className="mt-6 text-[12px] leading-relaxed text-subtle">{t.sourceNote}</p>
      </div>
    </div>
  );
}

function PortalList({ title, portals, visit }: { title: string; portals: Portal[]; visit: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[12px] font-medium tracking-[0.18em] text-gold uppercase">{title}</p>
      <ul className="mt-3 divide-y divide-border">
        {portals.map((portal) => (
          <li key={portal.url + portal.name} className="flex min-w-0 items-start justify-between gap-4 py-4">
            <div className="min-w-0">
              <p className="font-semibold">{portal.name}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">{portal.description}</p>
              <p className="mt-1 font-mono text-[11px] text-subtle">{portal.kind}</p>
            </div>
            <a
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${visit}: ${portal.name}`}
              className="grid size-8 shrink-0 place-items-center rounded-xs border border-border text-subtle transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowUpRight className="size-3.5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
