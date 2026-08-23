import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/logo";
import { CookieChoices } from "@/components/site/cookie-choices";
import { footer, SITE } from "@/lib/site";

function isFileOrExternal(to: string, external?: boolean) {
  return Boolean(external) || to.startsWith("http") || /\.[a-z0-9]+$/i.test(to);
}

function Col({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; to: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="mb-4 text-[11px] font-medium tracking-[0.18em] text-subtle uppercase">
        {title}
      </p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.to + l.label}>
            {isFileOrExternal(l.to, l.external) ? (
              <a
                href={l.to}
                className="text-[13px] text-muted transition-colors duration-150 hover:text-fg"
              >
                {l.label}
              </a>
            ) : (
              <Link
                to={l.to as never}
                className="text-[13px] text-muted transition-colors duration-150 hover:text-fg"
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [privacy, setPrivacy] = useState(false);

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <Col title="Products" links={footer.products} />
          <Col title="Developers" links={footer.developers} />
          <Col title="Build with us" links={footer.buildWithUs} />
          <Col title="Company" links={footer.company} />
          <Col title="Legal" links={footer.legal} />
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Logo />
            <p className="text-[12px] leading-relaxed text-subtle">
              © {SITE.year} {SITE.legal}
              <span className="mt-1 block font-mono text-[11px]">
                CNPJ {SITE.cnpj}
              </span>
              <span className="mt-1 block font-mono text-[11px]">
                {SITE.phone} · {SITE.registeredEmail}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footer.legal.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to as never}
                className="text-[12px] text-subtle transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setPrivacy(true)}
              className="text-[12px] text-subtle transition-colors hover:text-fg"
            >
              Privacy choices / Escolhas de privacidade
            </button>
          </div>
        </div>
      </div>
      <CookieChoices open={privacy} onClose={() => setPrivacy(false)} />
    </footer>
  );
}
