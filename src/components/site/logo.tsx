import { Link } from "@tanstack/react-router";
import { useMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  BEVEL_PATH,
  LOCKUP_SYMBOL_TRANSFORM,
  LOCKUP_VIEWBOX,
  LOCKUP_WORD_PATH,
  LOCKUP_WORD_TRANSFORM,
  MARK_PATH,
  MARK_VIEWBOX,
} from "@/components/site/brand-mark";

export function Mark({
  className,
  bevel = true,
}: {
  className?: string;
  bevel?: boolean;
}) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={cn("aspect-[381.5/477.36] h-5 w-auto", className)}
      aria-hidden="true"
    >
      <path fill="currentColor" d={MARK_PATH} />
      {bevel ? <path className="fill-logo-bevel" d={BEVEL_PATH} /> : null}
    </svg>
  );
}

export function Lockup({
  className,
  bevel = true,
}: {
  className?: string;
  bevel?: boolean;
}) {
  return (
    <svg
      viewBox={LOCKUP_VIEWBOX}
      className={cn("h-9 w-auto", className)}
      aria-hidden="true"
    >
      <g transform={LOCKUP_SYMBOL_TRANSFORM}>
        <path fill="currentColor" d={MARK_PATH} />
        {bevel ? <path className="fill-logo-bevel" d={BEVEL_PATH} /> : null}
      </g>
      <g transform={LOCKUP_WORD_TRANSFORM}>
        <path fill="currentColor" d={LOCKUP_WORD_PATH} />
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
        "inline-flex items-center text-fg transition-opacity duration-150 hover:opacity-70",
        className,
      )}
      aria-label={chrome.homeAria}
    >
      <Lockup />
    </Link>
  );
}
