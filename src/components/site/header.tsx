import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { footer } from "@/lib/site";
import { cn } from "@/lib/utils";

function navMenus() {
  return [
    { label: "Products", items: footer.products },
    { label: "Solutions", items: footer.solutions },
    { label: "Developer", items: footer.developers },
    {
      label: "Company",
      items: [
        { label: "About", to: "/company" },
        { label: "Careers", to: "/careers" },
        { label: "Security", to: "/security" },
        { label: "Compliance", to: "/compliance" },
        { label: "São Paulo", to: "/sao-paulo" },
        { label: "Infrastructure", to: "/infrastructure" },
        { label: "Enterprise", to: "/enterprise" },
      ],
    },
  ] as const;
}

const links = [
  { label: "Pricing", to: "/pricing" },
  { label: "News", to: "/news" },
] as const;

const tryItems = [
  { label: "Our products", to: "/products" },
  { label: "Contact sales", to: "/contact" },
  { label: "Download FCR", to: "/download" },
  { label: "Custom software", to: "/api" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const menus = navMenus();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200",
          scrolled || open
            ? "border-b border-border bg-bg/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[3.6rem] max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-0.5 lg:flex">
            {menus.map((m) => (
              <HoverMenu key={m.label} label={m.label} items={m.items} />
            ))}
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-[13px] font-medium text-muted transition-colors duration-150 hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/contact"
              className="inline-flex h-9 items-center rounded-full border border-border-strong px-4 text-[13px] font-medium text-fg transition-colors duration-150 hover:border-fg/40 hover:bg-fg/5 active:scale-[0.96]"
            >
              Contact Sales
            </Link>
            <TrySplit />
          </div>
          <button
            type="button"
            className="relative size-11 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                "absolute left-3 h-px w-5 bg-fg transition-transform duration-200",
                open ? "top-1/2 rotate-45" : "top-[18px]",
              )}
            />
            <span
              className={cn(
                "absolute left-3 h-px w-5 bg-fg transition-transform duration-200",
                open ? "top-1/2 -rotate-45" : "top-[26px]",
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 overflow-y-auto bg-bg pt-16 transition-opacity duration-300 lg:hidden",
          open
            ? "opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col px-6 pb-16 pt-4">
          {menus.map((m) => (
            <div key={m.label} className="border-b border-border py-4">
              <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                {m.label}
              </p>
              <div className="mt-2 flex flex-col">
                {m.items.map((item) => (
                  <Link
                    key={item.to + item.label}
                    to={item.to as never}
                    className="py-2.5 text-xl font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="border-b border-border py-5 text-xl font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-border-strong text-sm font-medium"
          >
            Contact Sales
          </Link>
          <Link
            to="/sitecreator"
            className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-fg"
          >
            Try for free
          </Link>
        </nav>
      </div>
    </>
  );
}

function HoverMenu({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; to: string }[];
}) {
  const [open, setOpen] = useState(false);
  const t = useRef<number | null>(null);

  function show() {
    if (t.current) window.clearTimeout(t.current);
    setOpen(true);
  }
  function hide() {
    if (t.current) window.clearTimeout(t.current);
    t.current = window.setTimeout(() => setOpen(false), 90);
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        className="inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-muted transition-colors duration-150 hover:text-fg"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 4, scale: 0.99, filter: "blur(2px)" }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full z-50 min-w-[13.5rem] origin-top-left pt-2"
          >
            <div className="rounded-xl border border-border-strong bg-bg-elevated p-1.5 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.8)]">
              {items.map((item) => (
                <Link
                  key={item.to + item.label}
                  to={item.to as never}
                  className="block rounded-lg px-3 py-2 text-[13px] text-muted transition-colors duration-150 hover:bg-fg/5 hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function TrySplit() {
  const [open, setOpen] = useState(false);
  const t = useRef<number | null>(null);

  function show() {
    if (t.current) window.clearTimeout(t.current);
    setOpen(true);
  }
  function hide() {
    if (t.current) window.clearTimeout(t.current);
    t.current = window.setTimeout(() => setOpen(false), 90);
  }

  return (
    <div className="relative flex" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        to="/sitecreator"
        className="inline-flex h-9 items-center rounded-l-full bg-accent px-4 text-[13px] font-medium text-accent-fg transition-opacity duration-150 hover:opacity-90 active:scale-[0.96]"
      >
        Try for free
      </Link>
      <button
        type="button"
        aria-label="More ways to try"
        aria-expanded={open}
        className="inline-flex h-9 items-center rounded-r-full border-l border-accent-fg/15 bg-accent px-2 text-accent-fg transition-opacity duration-150 hover:opacity-90"
      >
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 4, scale: 0.99, filter: "blur(2px)" }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-full z-50 min-w-[13rem] origin-top-right pt-2"
          >
            <div className="rounded-xl border border-border-strong bg-bg-elevated p-1.5 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.8)]">
              {tryItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to as never}
                  className="block rounded-lg px-3 py-2 text-[13px] text-muted transition-colors duration-150 hover:bg-fg/5 hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
