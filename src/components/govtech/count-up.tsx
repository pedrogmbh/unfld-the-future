import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/** Server HTML carries the final value; the count only replays once in view. */
export function CountUp({ value, locale }: { value: number; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(value);
  const format = new Intl.NumberFormat(locale);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: Math.min(1.6, 0.6 + value / 4000),
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {format.format(shown)}
    </span>
  );
}
