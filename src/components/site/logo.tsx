import { Link } from "@tanstack/react-router";
import { useMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  LOCKUP_VIEWBOX,
  LOCKUP_WORD_TRANSFORM,
  MARK_INNER_PATH,
  MARK_OUTER_PATH,
  MARK_VIEWBOX,
  WORDMARK_LETTERS,
} from "@/components/site/brand-mark";

type BrandProps = {
  className?: string;
  /** False uses one ink. Retains compatibility with existing light-surface callers. */
  bevel?: boolean;
};

export function Mark({ className, bevel = true }: BrandProps) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={cn("h-6 w-auto shrink-0", className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <g className={bevel ? "text-gold" : undefined}>
        <path d={MARK_OUTER_PATH} />
        <path d={MARK_INNER_PATH} />
      </g>
    </svg>
  );
}

export function Lockup({ className, bevel = true }: BrandProps) {
  return (
    <svg
      viewBox={LOCKUP_VIEWBOX}
      className={cn("h-8 w-auto shrink-0", className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <g className={bevel ? "text-gold" : undefined}>
        <path d={MARK_OUTER_PATH} />
        <path d={MARK_INNER_PATH} />
      </g>
      <g transform={LOCKUP_WORD_TRANSFORM}>
        {WORDMARK_LETTERS.map((letter) => (
          <path
            key={letter.name}
            transform={`translate(${letter.x} 0)`}
            d={letter.path}
            fillRule="evenodd"
          />
        ))}
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  const { chrome } = useMessages();
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex shrink-0 items-center text-fg transition-opacity duration-150 hover:opacity-80",
        className,
      )}
      aria-label={chrome.homeAria}
    >
      <Lockup />
    </Link>
  );
}
