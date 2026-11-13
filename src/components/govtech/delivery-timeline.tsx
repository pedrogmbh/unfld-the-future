import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

type Step = { title: string; body: string };

/** Vertical timeline whose Honey rail fills as the reader scrolls through it. */
export function DeliveryTimeline({ steps }: { steps: readonly Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const scaleY = useTransform(progress, [0, 1], [0, 1]);
  // Motion values, not plain style objects: hydration keeps the server style otherwise.
  const full = useMotionValue(1);

  return (
    <ol ref={ref} className="relative">
      <span aria-hidden className="absolute top-2 bottom-2 left-[11px] w-px bg-border" />
      <motion.span
        aria-hidden
        style={{ scaleY: reduce ? full : scaleY }}
        className="absolute top-2 bottom-2 left-[11px] w-px origin-top bg-gold"
      />
      {steps.map((step, i) => (
        <TimelineStep key={step.title} step={step} index={i} total={steps.length} progress={progress} full={reduce ? full : null} />
      ))}
    </ol>
  );
}

function TimelineStep({
  step,
  index,
  total,
  progress,
  full,
}: {
  step: Step;
  index: number;
  total: number;
  progress: ReturnType<typeof useSpring>;
  full: ReturnType<typeof useMotionValue<number>> | null;
}) {
  const at = total > 1 ? index / (total - 1) : 0;
  const lit = useTransform(progress, [Math.max(0, at - 0.04), at], [0, 1]);
  return (
    <li className="relative grid gap-3 pb-12 pl-12 last:pb-0 sm:grid-cols-[14rem_1fr] sm:gap-10">
      <span aria-hidden className="absolute top-1 left-0 grid size-[23px] place-items-center">
        <span className="clip-hex absolute inset-0 bg-border-strong" />
        <span className="clip-hex absolute inset-[1.5px] bg-bg" />
        <motion.span style={{ opacity: full ?? lit }} className="clip-hex absolute inset-0 bg-gold" />
      </span>
      <div>
        <p className="font-mono text-[12px] text-subtle">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-1 font-display text-2xl font-medium tracking-tight">{step.title}</h3>
      </div>
      <p className="max-w-xl text-[15px] leading-relaxed text-muted sm:pt-5">{step.body}</p>
    </li>
  );
}
