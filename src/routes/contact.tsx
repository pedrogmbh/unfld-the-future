import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Btn, WhatsAppBtn } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { interpolate, useLocale, useMessages } from "@/lib/i18n";
import { localizeFacts } from "@/lib/i18n/localize";

export const Route = createFileRoute("/contact")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.contact;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/contact",
      locale: match.context.locale,
    });
  },
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const locale = useLocale();
  const { pages, chrome } = useMessages();
  const p = pages.contact;
  const facts = localizeFacts(locale);
  const [receivedBefore, receivedAfter] = p.receivedBody.split("{{email}}");

  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_18rem]">
          {sent ? (
            <div className="rounded-xl border border-border p-8">
              <h2 className="font-display text-2xl font-medium">{p.receivedTitle}</h2>
              <p className="mt-3 text-muted">
                {receivedBefore}
                {SITE.security}
                {receivedAfter}
              </p>
            </div>
          ) : (
            <form
              method="POST"
              action="/contact"
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label={p.fullName} name="name" className="sm:col-span-1" />
              <Field
                label={p.workEmail}
                name="email"
                type="email"
                className="sm:col-span-1"
              />
              <Field label={p.company} name="company" />
              <label className="block">
                <span className="mb-1.5 block text-[12px] text-muted">
                  {p.companySize}
                </span>
                <select
                  name="size"
                  className="h-11 w-full rounded-lg border border-border-strong bg-bg-elevated px-3 text-sm"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    {p.select}
                  </option>
                  <option>1–20</option>
                  <option>21–200</option>
                  <option>201–2,000</option>
                  <option>2,000+</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[12px] text-muted">
                  {p.messageLabel}
                </span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="w-full rounded-lg border border-border-strong bg-bg-elevated px-3 py-2.5 text-sm outline-none focus:border-fg/40"
                />
              </label>
              <div className="sm:col-span-2 space-y-3">
                <div className="flex flex-wrap gap-3">
                  <Btn type="submit">{p.send}</Btn>
                  <WhatsAppBtn
                    aria-label={interpolate(chrome.whatsappAria, {
                      number: SITE.whatsapp,
                    })}
                  >
                    {chrome.whatsapp} {SITE.whatsapp}
                  </WhatsAppBtn>
                </div>
                <p className="text-xs text-muted">
                  {p.privacyNote}{" "}
                  <Link
                    to="/legal/privacy-policy"
                    className="text-fg underline-offset-4 hover:underline"
                  >
                    {p.privacyPolicy}
                  </Link>
                  .
                </p>
              </div>
            </form>
          )}
          <aside className="space-y-6 text-sm">
            <div>
              <p className="text-[12px] tracking-[0.16em] text-subtle uppercase">
                {p.whatsapp}
              </p>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block hover:opacity-70"
              >
                {SITE.whatsapp}
              </a>
              <p className="mt-1 text-[12px] leading-relaxed text-muted">
                {p.whatsappHint}
              </p>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.16em] text-subtle uppercase">
                {p.sales}
              </p>
              <a href={`mailto:${SITE.sales}`} className="mt-1 block hover:opacity-70">
                {SITE.sales}
              </a>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.16em] text-subtle uppercase">
                {p.press}
              </p>
              <a href={`mailto:${SITE.press}`} className="mt-1 block hover:opacity-70">
                {SITE.press}
              </a>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.16em] text-subtle uppercase">
                {p.registered}
              </p>
              <a
                href={`mailto:${SITE.registeredEmail}`}
                className="mt-1 block hover:opacity-70"
              >
                {SITE.registeredEmail}
              </a>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="mt-1 block hover:opacity-70"
              >
                {SITE.phone}
              </a>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.16em] text-subtle uppercase">
                {p.headquarters}
              </p>
              <p className="mt-1 leading-relaxed text-muted">
                {SITE.legal}
                <br />
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
                <br />
                {SITE.address.district}, {SITE.address.city}/{SITE.address.region}
                <br />
                {SITE.address.postal}
                <br />
                CNPJ {SITE.cnpj}
                <br />
                {facts.statusValue} · {facts.establishment} · {facts.porte}
              </p>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.16em] text-subtle uppercase">
                {p.security}
              </p>
              <a
                href={`mailto:${SITE.security}`}
                className="mt-1 block hover:opacity-70"
              >
                {SITE.security}
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  className,
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={className ?? "block"}>
      <span className="mb-1.5 block text-[12px] text-muted">{label}</span>
      <input
        required
        name={name}
        type={type}
        className="h-11 w-full rounded-lg border border-border-strong bg-bg-elevated px-3 text-sm outline-none focus:border-fg/40"
      />
    </label>
  );
}
