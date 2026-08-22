import { useRef, useState, type PointerEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { Check, Copy } from "lucide-react";
import { highlightLines } from "@/lib/highlight";
import { cn } from "@/lib/utils";

export type CodeSample = { id: string; label: string; code: string };

export const RELAY_SAMPLES: CodeSample[] = [
  {
    id: "python",
    label: "Python",
    code: `import os
from unfld import Client
from unfld.chat import user

client = Client(
    api_key=os.getenv("UNFLD_API_KEY")
)

chat = client.chat.create(model="pulse-2")
chat.append(user("Forecast Q4 cash from live operations"))
response = chat.sample()
print(response.content)`,
  },
  {
    id: "ts",
    label: "TypeScript",
    code: `import { Unfld } from "@unfld/sdk";
import { user } from "@unfld/sdk/chat";

const client = new Unfld({
  apiKey: process.env.UNFLD_API_KEY,
});

const chat = await client.chat.create({ model: "pulse-2" });
chat.append(user("Forecast Q4 cash from live operations"));
const response = await chat.sample();
console.log(response.content);`,
  },
  {
    id: "openai",
    label: "TypeScript (OpenAI SDK)",
    code: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.UNFLD_API_KEY,
  baseURL: "https://api.unfld.com/v1",
});

const res = await client.chat.completions.create({
  model: "pulse-2",
  messages: [{ role: "user", content: "Forecast Q4 cash" }],
});
console.log(res.choices[0].message.content);`,
  },
  {
    id: "curl",
    label: "cURL",
    code: `curl https://api.unfld.com/v1/chat/completions \\
  -H "Authorization: Bearer $UNFLD_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "pulse-2",
    "messages": [{"role":"user","content":"Forecast Q4 cash"}]
  }'`,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;
const spring = { stiffness: 55, damping: 18, mass: 0.55 };

export function CodeTabs({
  samples = RELAY_SAMPLES,
  className,
}: {
  samples?: CodeSample[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(samples[0]?.id ?? "");
  const [copied, setCopied] = useState(false);
  const current = samples.find((s) => s.id === active) ?? samples[0];
  const lines = highlightLines(current?.code ?? "");

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  const backX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const backY = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const midX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const midY = useTransform(sy, [-0.5, 0.5], [-7, 7]);
  const frontX = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const frontY = useTransform(sy, [-0.5, 0.5], [-3, 3]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-9, 9]);

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const el = root.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(current?.code ?? "");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 32, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease }}
      className={cn("relative w-full min-w-0", className)}
    >
      <div
        ref={root}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="code-stage relative overflow-hidden rounded-[1.6rem] border border-fg/8 bg-window-stage p-5 pb-4 sm:p-10 sm:pb-5"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-10 size-[28rem] rounded-full bg-fg/8 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />

        <motion.div
          className="relative mx-auto w-full max-w-xl pb-2 pr-3 pt-1 sm:pr-5 sm:pb-3 [transform-style:preserve-3d]"
          style={
            reduce
              ? undefined
              : { rotateX, rotateY, transformPerspective: 1100 }
          }
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-1 z-10 sm:-inset-2"
          >
            <span className="crop-mark left-0 top-0" />
            <span className="crop-mark right-0 top-0" />
            <span className="crop-mark bottom-0 left-0" />
            <span className="crop-mark right-0 bottom-0" />
          </div>
          <motion.div
            aria-hidden
            className="absolute -inset-3 translate-x-5 translate-y-6 rounded-2xl border border-fg/5 bg-window-back sm:-inset-4 sm:translate-x-6 sm:translate-y-7"
            style={reduce ? undefined : { x: backX, y: backY }}
          />
          <motion.div
            aria-hidden
            className="absolute -inset-1.5 translate-x-2.5 translate-y-3 rounded-2xl border border-fg/8 bg-window-mid sm:-inset-2 sm:translate-x-3 sm:translate-y-3.5"
            style={reduce ? undefined : { x: midX, y: midY }}
          />

          <motion.div
            className="relative overflow-hidden rounded-2xl border border-fg/10 bg-window shadow-[0_30px_80px_-28px_rgba(0,0,0,0.95)]"
            style={reduce ? undefined : { x: frontX, y: frontY }}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="size-[11px] rounded-full bg-traffic-red" />
                <span className="size-[11px] rounded-full bg-traffic-amber" />
                <span className="size-[11px] rounded-full bg-traffic-green" />
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

            <div className="code-scroll min-h-[17.5rem] overflow-x-auto px-5 pb-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.pre
                  key={current?.id}
                  initial={
                    reduce ? false : { opacity: 0, y: 10, filter: "blur(6px)" }
                  }
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.28, ease }}
                  className="m-0 font-mono text-[12.5px] leading-[1.7]"
                >
                  <code>
                    {lines.map((nodes, i) => (
                      <motion.span
                        key={`${current?.id}-${i}`}
                        className="block min-h-[1.7em]"
                        initial={
                          reduce
                            ? false
                            : { opacity: 0, x: 6, filter: "blur(4px)" }
                        }
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{
                          duration: 0.35,
                          delay: 0.04 + i * 0.032,
                          ease,
                        }}
                      >
                        {nodes.length ? nodes : "\u00a0"}
                      </motion.span>
                    ))}
                  </code>
                </motion.pre>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-1 sm:mt-10">
          {samples.map((s) => {
            const on = s.id === active;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                className={cn(
                  "relative h-8 rounded-full px-3 text-[12px] font-medium transition-colors duration-150",
                  on ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {on ? (
                  <motion.span
                    layoutId="code-lang-pill"
                    className="absolute inset-0 rounded-full bg-bg shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                    transition={{ type: "spring", duration: 0.35, bounce: 0 }}
                  />
                ) : null}
                <span className="relative z-10">{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
