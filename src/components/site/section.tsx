import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("w-full px-5 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto w-full min-w-0 max-w-6xl">{children}</div>
    </section>
  );
}

export function Hairline() {
  return <hr className="border-border" />;
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[13px] font-medium tracking-[0.18em] text-gold uppercase">
      {children}
    </p>
  );
}
