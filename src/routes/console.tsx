import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/console")({
  head: () => ({ meta: [{ title: pageTitle("Console") }] }),
  component: Console,
});

function Console() {
  return (
    <main className="flex min-h-[85dvh] items-center justify-center px-5 py-28">
      <div className="w-full max-w-md">
        <p className="text-[13px] tracking-[0.18em] text-muted uppercase">
          Console
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">
          There is no shared console.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Each product has its own site. Custom software starts with a
          conversation. We do not issue a single UNFLD API key.
        </p>
        <ul className="mt-8 space-y-3 text-sm">
          {[
            ["FCR", "/fcr"],
            ["SiteCreator", "https://www.sitecreator.com.br"],
            ["Doutor Fiscal", "https://www.doutorfiscal.com"],
            ["Dialogus", "https://www.dialoguspsicossocial.com.br"],
            ["Queravaga", "https://www.queravaga.com"],
          ].map(([label, href]) => (
            <li key={label}>
              {href.startsWith("http") ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg underline-offset-4 hover:underline"
                >
                  {label} →
                </a>
              ) : (
                <Link
                  to={href as never}
                  className="text-fg underline-offset-4 hover:underline"
                >
                  {label} →
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <BtnLink to="/contact">Contact Sales</BtnLink>
          <BtnLink to="/products" variant="secondary">
            Our products
          </BtnLink>
        </div>
      </div>
    </main>
  );
}
