import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { highlightLines } from "@/lib/highlight";
import { cn } from "@/lib/utils";

export function CodeBlock({
  code,
  filename,
  className,
}: {
  code: string;
  filename?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const lines = highlightLines(code);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-xl border border-fg/10 bg-window",
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="size-[10px] rounded-full bg-traffic-red" />
            <span className="size-[10px] rounded-full bg-traffic-amber" />
            <span className="size-[10px] rounded-full bg-traffic-green" />
          </div>
          {filename ? (
            <p className="font-mono text-[11px] text-subtle">{filename}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-muted transition-colors hover:text-fg"
          aria-label="Copy code"
        >
          <span className="relative size-3.5">
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                copied
                  ? "scale-100 opacity-100 blur-none"
                  : "scale-[0.25] opacity-0 blur-[4px]",
              )}
            >
              <Check className="size-3.5" strokeWidth={2} />
            </span>
            <span
              className={cn(
                "flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                copied
                  ? "scale-[0.25] opacity-0 blur-[4px]"
                  : "scale-100 opacity-100 blur-none",
              )}
            >
              <Copy className="size-3.5" strokeWidth={2} />
            </span>
          </span>
          Copy
        </button>
      </div>
      <pre className="code-scroll m-0 overflow-x-auto px-5 pb-5 font-mono text-[12.5px] leading-[1.7]">
        <code>
          {lines.map((nodes, i) => (
            <span key={i} className="block min-h-[1.7em]">
              {nodes.length ? nodes : "\u00a0"}
            </span>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}
