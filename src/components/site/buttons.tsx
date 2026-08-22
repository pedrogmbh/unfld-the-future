import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-[13px] font-medium tracking-wide transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out active:scale-[0.96] disabled:opacity-50";

const sizes = {
  sm: "h-9 px-4",
  md: "h-11 px-5",
  lg: "h-12 px-6",
};

const variants = {
  primary: "bg-accent text-accent-fg hover:opacity-85",
  secondary:
    "border border-border-strong bg-transparent text-fg hover:border-fg/40 hover:bg-fg/5",
  ghost: "text-fg hover:opacity-70 px-0 h-auto rounded-none",
};

type Common = {
  className?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Btn({
  className,
  children,
  variant = "primary",
  size = "md",
  ...rest
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function BtnLink({
  className,
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  ...rest
}: Common & {
  to?: string;
  href?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (to) {
    return (
      <Link to={to as never} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}

export function TextArrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "group/a inline-flex items-center gap-2 text-[15px] font-medium text-fg",
        className,
      )}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-200 ease-out group-hover/a:translate-x-1"
      >
        →
      </span>
    </span>
  );
}
