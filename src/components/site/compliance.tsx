import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Building2,
  ChevronDown,
  Cloud,
  Code2,
  Cog,
  Database,
  Fingerprint,
  GitBranch,
  GraduationCap,
  Handshake,
  HardDriveDownload,
  KeyRound,
  Layers,
  LifeBuoy,
  Network,
  Scale,
  ScrollText,
  Server,
  ShieldCheck,
  Siren,
} from "lucide-react";
import type { ComplianceIcon, ComplianceItem } from "@/lib/compliance";
import { getCategoryMeta } from "@/lib/compliance";
import { cn } from "@/lib/utils";

const ICONS: Record<ComplianceIcon, typeof ShieldCheck> = {
  shield: ShieldCheck,
  training: GraduationCap,
  key: KeyRound,
  trace: ScrollText,
  building: Building2,
  operations: Cog,
  network: Network,
  incident: Siren,
  vendor: Handshake,
  sdlc: GitBranch,
  backup: HardDriveDownload,
  continuity: LifeBuoy,
  data: Database,
  legal: Scale,
  hosting: Cloud,
  software: Code2,
  layers: Layers,
  hypervisor: Server,
  identity: Fingerprint,
};

export function ComplianceGlyph({
  icon,
  className,
}: {
  icon: ComplianceIcon;
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={cn("size-4", className)} strokeWidth={1.6} aria-hidden />;
}

/** Icon in a hairline tile — the visual anchor that separates one subject from another. */
export function GlyphTile({
  icon,
  size = "md",
  className,
}: {
  icon: ComplianceIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const box = {
    sm: "size-8 rounded-md",
    md: "size-10 rounded-lg",
    lg: "size-12 rounded-xl",
  }[size];
  const glyph = { sm: "size-3.5", md: "size-4", lg: "size-5" }[size];
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center border border-border bg-bg-subtle text-fg",
        box,
        className,
      )}
    >
      <ComplianceGlyph icon={icon} className={glyph} />
    </span>
  );
}

/**
 * Some answers arrive as bullet or numbered runs separated by newlines.
 * Rendering them as prose collapses the structure the author intended.
 */
export function AnswerBody({ answer }: { answer: string }) {
  const lines = answer
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const bullets = lines.every((line) => line.startsWith("•"));
  const numbered = lines.length > 1 && lines.every((line) => /^\d+\.\s/.test(line));

  if (lines.length > 1 && (bullets || numbered)) {
    const Tag = numbered ? "ol" : "ul";
    return (
      <Tag className="space-y-2.5">
        {lines.map((line, i) => {
          const text = line.replace(/^•\s*/, "").replace(/^\d+\.\s*/, "");
          const [lead, ...rest] = text.split(":");
          const hasLabel = rest.length > 0;
          return (
            <li key={line} className="flex gap-3 text-[14.5px] leading-relaxed text-muted">
              <span className="mt-px shrink-0 font-mono text-[11px] text-subtle tabular-nums">
                {numbered ? String(i + 1).padStart(2, "0") : "—"}
              </span>
              <span className="min-w-0">
                {hasLabel ? (
                  <>
                    <span className="text-fg">{lead}:</span>
                    {rest.join(":")}
                  </>
                ) : (
                  text
                )}
              </span>
            </li>
          );
        })}
      </Tag>
    );
  }

  return <p className="text-[14.5px] leading-relaxed text-muted">{answer}</p>;
}

export function DisclosureCard({
  item,
  index,
  open,
  onToggle,
  showCategory = true,
}: {
  item: ComplianceItem;
  index: number;
  open: boolean;
  onToggle: () => void;
  showCategory?: boolean;
}) {
  const reduce = useReducedMotion();
  const panelId = useId();
  const meta = getCategoryMeta(item.category);

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-xl border transition-colors duration-200",
        open
          ? "border-border-strong bg-bg-elevated"
          : "border-border bg-bg hover:border-border-strong hover:bg-bg-elevated",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-4 p-5 text-left sm:gap-5 sm:p-6"
      >
        {meta ? <GlyphTile icon={meta.icon} size="sm" className="mt-0.5" /> : null}
        <span className="min-w-0 flex-1">
          {showCategory && meta ? (
            <span className="flex items-center gap-2 font-mono text-[11px] text-subtle">
              <span className="tabular-nums">{String(index).padStart(2, "0")}</span>
              <span aria-hidden>·</span>
              <span className="truncate">{meta.short}</span>
            </span>
          ) : (
            <span className="font-mono text-[11px] text-subtle tabular-nums">
              {String(index).padStart(2, "0")}
            </span>
          )}
          <span className="mt-2 block font-display text-[16px] font-medium leading-snug tracking-tight text-fg sm:text-[17px]">
            {item.question}
          </span>
        </span>
        <span
          className={cn(
            "mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
            open
              ? "border-fg/30 bg-fg/5 text-fg"
              : "border-border bg-bg-subtle text-muted group-hover:text-fg",
          )}
        >
          <ChevronDown
            className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
            aria-hidden
          />
        </span>
      </button>
      {open ? (
        <motion.div
          id={panelId}
          initial={reduce ? false : { opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="border-t border-border px-5 pt-4 pb-5 sm:px-6 sm:pb-6 sm:pl-[4.75rem]">
            <AnswerBody answer={item.answer} />
          </div>
        </motion.div>
      ) : null}
    </article>
  );
}
