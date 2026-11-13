import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/reveal";
import {
  DOCS_SNAPSHOT,
  HAB_DOCS,
  daysUntil,
  docsUrl,
  fetchRenewals,
  formatIsoDate,
  type DocCategory,
  type HabDoc,
} from "@/lib/govtech";
import { interpolate, useLocale, useMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const CATEGORIES: DocCategory[] = ["legal", "fiscal", "economic", "integrity"];

export function HabilitacaoLedger() {
  const locale = useLocale();
  const t = useMessages().govtech.docs;
  const [docs, setDocs] = useState<readonly HabDoc[]>(HAB_DOCS);
  const [live, setLive] = useState(false);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const controller = new AbortController();
    fetchRenewals(controller.signal)
      .then((renewals) => {
        setDocs((current) =>
          current.map((doc) => {
            const r = renewals[doc.id];
            if (!r) return doc;
            return {
              ...doc,
              issued: r.issued ?? doc.issued,
              expires: r.expires ?? null,
              number: r.number || doc.number,
              path: r.file ?? doc.path,
              calculated: false,
            };
          }),
        );
        setLive(true);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <div>
      <p className="inline-flex items-center gap-2 font-mono text-[12px] text-shale">
        <span aria-hidden className={cn("size-1.5 rounded-full", live ? "bg-status" : "bg-shale/50")} />
        {live ? t.live : interpolate(t.snapshot, { date: formatIsoDate(DOCS_SNAPSHOT, locale) })}
      </p>
      <div className="mt-8 grid gap-10">
        {CATEGORIES.map((category) => (
          <section key={category} aria-labelledby={`ledger-${category}`}>
            <h3
              id={`ledger-${category}`}
              className="border-b border-bg/80 pb-3 text-[12px] font-semibold tracking-[0.18em] text-bg uppercase"
            >
              {t.categories[category]}
            </h3>
            <Stagger className="divide-y divide-bg/12" delay={0.05}>
              {docs
                .filter((doc) => doc.category === category)
                .map((doc) => (
                  <StaggerItem key={doc.id}>
                    <LedgerRow doc={doc} now={now} />
                  </StaggerItem>
                ))}
            </Stagger>
          </section>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-[13px] leading-relaxed text-shale">{t.verify}</p>
    </div>
  );
}

function LedgerRow({ doc, now }: { doc: HabDoc; now: number | null }) {
  const locale = useLocale();
  const t = useMessages().govtech.docs;
  const title = t.items[doc.id as keyof typeof t.items];
  const days = doc.expires && now != null ? daysUntil(doc.expires, now) : null;
  const status =
    days == null ? null : days < 0 ? "due" : days <= 15 ? "soon" : "valid";

  return (
    <div className="grid min-w-0 gap-x-6 gap-y-2 py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)_12rem_auto] sm:items-center">
      <p className="font-mono text-[12px] text-shale">{doc.id}</p>
      <div className="min-w-0">
        <p className="font-semibold text-bg">{title}</p>
        <p className="mt-0.5 text-[13px] leading-snug text-shale">
          {doc.official} · {doc.issuer}
        </p>
        {doc.number ? (
          <p className="mt-1 truncate font-mono text-[11px] text-shale/90">{doc.number}</p>
        ) : null}
      </div>
      <div className="text-[13px] leading-snug">
        {doc.expires ? (
          <>
            <p className="text-shale">{t.validUntil}</p>
            <p className="font-semibold text-bg">
              {formatIsoDate(doc.expires, locale)}
              {doc.calculated ? <span className="font-normal text-shale"> · {t.calculated}</span> : null}
            </p>
          </>
        ) : (
          <>
            <p className="text-shale">{doc.issued ? t.issued : t.noExpiry}</p>
            <p className="font-semibold text-bg">{doc.issued ? formatIsoDate(doc.issued, locale) : "—"}</p>
          </>
        )}
        {status ? (
          <p className="mt-1 inline-flex items-center gap-1.5 text-[12px] text-shale">
            <span
              aria-hidden
              className={cn(
                "size-1.5 rounded-full",
                status === "valid" ? "bg-status" : status === "soon" ? "bg-gold" : "bg-ochre",
              )}
            />
            {status === "valid" ? t.statusValid : status === "soon" ? t.statusSoon : t.statusDue}
          </p>
        ) : null}
      </div>
      <a
        href={docsUrl(doc.path)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={interpolate(t.openAria, { name: title })}
        className="group inline-flex items-center gap-1.5 justify-self-start rounded-xs text-[13px] font-semibold text-ochre transition-colors hover:text-bg sm:justify-self-end"
      >
        {t.open}
        <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
