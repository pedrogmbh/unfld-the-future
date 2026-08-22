import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Btn } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { pageTitle, SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: pageTitle("Contact sales") }] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Talk to UNFLD."
        lede="Sales, partnerships, press, and security. We read everything. We reply to the things that matter."
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_18rem]">
          {sent ? (
            <div className="rounded-xl border border-border p-8">
              <h2 className="font-display text-2xl font-medium">Received.</h2>
              <p className="mt-3 text-muted">
                Thank you. A human on the UNFLD team will follow up. If this is
                a vulnerability, use {SITE.security} with the subject
                “Responsible Disclosure.”
              </p>
            </div>
          ) : (
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Full name" name="name" className="sm:col-span-1" />
              <Field
                label="Work email"
                name="email"
                type="email"
                className="sm:col-span-1"
              />
              <Field label="Company" name="company" />
              <label className="block">
                <span className="mb-1.5 block text-[12px] text-muted">
                  Company size
                </span>
                <select
                  name="size"
                  className="h-11 w-full rounded-lg border border-border-strong bg-bg-elevated px-3 text-sm"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option>1–20</option>
                  <option>21–200</option>
                  <option>201–2,000</option>
                  <option>2,000+</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[12px] text-muted">
                  What do you want to talk about?
                </span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="w-full rounded-lg border border-border-strong bg-bg-elevated px-3 py-2.5 text-sm outline-none focus:border-fg/40"
                />
              </label>
              <div className="sm:col-span-2">
                <Btn type="submit">Send</Btn>
              </div>
            </form>
          )}
          <aside className="space-y-6 text-sm">
            <div>
              <p className="text-[12px] tracking-[0.16em] text-subtle uppercase">
                Sales
              </p>
              <a href={`mailto:${SITE.sales}`} className="mt-1 block hover:opacity-70">
                {SITE.sales}
              </a>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.16em] text-subtle uppercase">
                Press
              </p>
              <a href={`mailto:${SITE.press}`} className="mt-1 block hover:opacity-70">
                {SITE.press}
              </a>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.16em] text-subtle uppercase">
                Registered
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
                Headquarters
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
                {SITE.status} · {SITE.establishment} · {SITE.porte}
              </p>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.16em] text-subtle uppercase">
                Security
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
