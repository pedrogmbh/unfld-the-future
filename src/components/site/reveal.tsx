import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  delay?: number;
  className?: string;
  children?: React.ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ delay = 0, className, children }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15, margin: "-8%" }}
      transition={{ duration: 0.8, delay, ease }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "-8%" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.7, ease }}
      className={cn("h-full", className)}
    >
      {children}
    </motion.div>
  );
}

export function WordStagger({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07 } },
      }}
      className={cn("inline-block", className)}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.75, ease }}
        >
          {i < words.length - 1 ? `${w}\u00a0` : w}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function ParallaxImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-42, 42]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.14, 1.02]);

  return (
    <div ref={ref} className={cn("overflow-hidden rounded-xl", className)}>
      <motion.img
        src={src}
        alt={alt}
        style={reduce ? undefined : { y, scale }}
        className="aspect-[16/8] w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
      />
    </div>
  );
}
