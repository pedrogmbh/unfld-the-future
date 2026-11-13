import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

export function Faq({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const id = useId();

  return (
    <ul className="border-t border-border">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <li key={item.q} className="border-b border-border">
            <h3>
              <button
                type="button"
                id={`${id}-q-${i}`}
                aria-expanded={expanded}
                aria-controls={`${id}-a-${i}`}
                onClick={() => setOpen(expanded ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl font-medium tracking-tight sm:text-2xl">{item.q}</span>
                <Plus
                  aria-hidden
                  className={cn(
                    "mt-1.5 size-5 shrink-0 text-gold transition-transform duration-300",
                    expanded && "rotate-45",
                  )}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  id={`${id}-a-${i}`}
                  role="region"
                  aria-labelledby={`${id}-q-${i}`}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 text-[16px] leading-relaxed text-muted">{item.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
