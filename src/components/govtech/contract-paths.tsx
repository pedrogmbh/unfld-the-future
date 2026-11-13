import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Path = { name: string; law: string; body: string; fit: string };

const ease = [0.22, 1, 0.36, 1] as const;

export function ContractPaths({ items, fitLabel }: { items: readonly Path[]; fitLabel: string }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const id = useId();
  const active = items[index];

  function onKey(event: React.KeyboardEvent<HTMLDivElement>) {
    const delta = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + items.length) % items.length;
    setIndex(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  }

  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-[minmax(0,20rem)_1fr]">
      <div role="tablist" aria-orientation="vertical" onKeyDown={onKey} className="flex min-w-0 flex-col bg-bg">
        {items.map((item, i) => {
          const selected = i === index;
          return (
            <button
              key={item.name}
              id={`${id}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              className={cn(
                "relative flex items-baseline gap-4 border-b border-border px-6 py-5 text-left transition-colors duration-150 last:border-b-0 focus-visible:-outline-offset-2",
                selected ? "text-fg" : "text-muted hover:bg-fg/[0.03] hover:text-fg",
              )}
            >
              {selected ? (
                <motion.span
                  layoutId={`${id}-indicator`}
                  transition={reduce ? { duration: 0 } : { duration: 0.35, ease }}
                  className="absolute inset-y-0 left-0 w-[3px] bg-gold"
                />
              ) : null}
              <span className="font-mono text-[12px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-xl font-medium tracking-tight">{item.name}</span>
            </button>
          );
        })}
      </div>
      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${index}`}
        className="relative min-h-[18rem] min-w-0 bg-bg-elevated p-7 sm:p-10"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.name}
            initial={reduce ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduce ? undefined : { opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease }}
          >
            <p className="font-mono text-[12px] tracking-wide text-gold">{active.law}</p>
            <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-none tracking-tight">
              {active.name}
            </h3>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">{active.body}</p>
            <div className="mt-8 max-w-xl border-t border-border pt-6">
              <p className="text-[12px] font-medium tracking-[0.18em] text-subtle uppercase">{fitLabel}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-fg">{active.fit}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
