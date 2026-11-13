import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/logo";
import { localizeFooter } from "@/lib/i18n/localize";
import { useLocale, useMessages } from "@/lib/i18n";
import { SITE } from "@/lib/site";

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
  const locale = useLocale();
  const { chrome } = useMessages();
  const footer = localizeFooter(locale);

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <Col title={chrome.footer.products} links={footer.products} />
          <Col title={chrome.footer.developers} links={footer.developers} />
          <Col title={chrome.footer.buildWithUs} links={footer.buildWithUs} />
          <Col title={chrome.footer.company} links={footer.company} />
          <Col title={chrome.footer.legal} links={footer.legal} />
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_minmax(0,1fr)] lg:grid-cols-[auto_minmax(0,1fr)_auto]">
            <Logo />
            <div className="min-w-0 md:border-l md:border-border md:pl-8">
              <p className="text-sm font-semibold leading-relaxed text-fg">
                {SITE.legal}
              </p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-muted">
                CNPJ {SITE.cnpj}
              </p>
            </div>
            <nav
              aria-label={chrome.nav.contact}
              className="flex min-w-0 flex-col items-start md:col-span-2 lg:col-span-1 lg:items-end"
            >
              <a
                href={`mailto:${SITE.registeredEmail}`}
                className="inline-flex min-h-11 items-center text-sm text-fg underline-offset-4 transition-colors hover:text-gold hover:underline"
              >
                {SITE.registeredEmail}
              </a>
              <div className="flex flex-wrap gap-x-6">
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="inline-flex min-h-11 items-center text-sm text-muted underline-offset-4 transition-colors hover:text-gold hover:underline"
                >
                  {SITE.phone}
                </a>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm text-muted underline-offset-4 transition-colors hover:text-gold hover:underline"
                >
                  {chrome.whatsapp} {SITE.whatsapp}
                </a>
              </div>
            </nav>
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <p className="shrink-0 text-xs text-muted">
              © {SITE.year} {SITE.name}
            </p>
            <nav
              aria-label={chrome.footer.legal}
              className="flex flex-wrap gap-x-5 gap-y-1"
            >
              {footer.legal.slice(1).map((l) => (
                <Link
                  key={l.to}
                  to={l.to as never}
                  className="inline-flex min-h-11 items-center text-[13px] text-muted underline-offset-4 transition-colors hover:text-gold hover:underline"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
