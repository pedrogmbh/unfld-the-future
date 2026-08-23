import { Link } from "@tanstack/react-router";
import { useMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-5", className)}
      aria-hidden="true"
    >
      <path fill="currentColor" d="M6 24 L16 6 L18.4 6 L8.4 24 Z" />
      <path fill="currentColor" opacity="0.55" d="M16 6 L26 24 L23.2 24 L16 10.2 Z" />
      <path fill="currentColor" opacity="0.28" d="M11.2 24 H20.8 L16 14.8 Z" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  const { chrome } = useMessages();
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-fg transition-opacity duration-150 hover:opacity-70",
        className,
      )}
      aria-label={chrome.homeAria}
    >
      <Mark />
      <span className="font-display text-[13px] font-semibold tracking-[0.28em]">
        UNFLD
      </span>
    </Link>
  );
}
