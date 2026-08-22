import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { footer, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/legal/")({
  head: () => ({
    meta: [
      { title: pageTitle("Legal") },
      {
        name: "description",
        content:
          "The policies that govern UNFLD’s corporate website and the services that expressly incorporate them. Product-specific terms may also apply.",
      },
    ],
  }),
  component: LegalIndex,
});

function LegalIndex() {
  return (
    <main>
      <PageHero
        kicker="Legal policies"
        title="Legal"
        lede="The policies that govern UNFLD’s corporate website and the services that expressly incorporate them. Product-specific terms may also apply."
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
              Terms of Service
            </h2>
            <ul className="mt-4 space-y-3">
              <Item to="/legal/terms-of-service" label="Terms of Service" />
              <Item
                to="/legal/terms-of-service-enterprise"
                label="Enterprise Terms"
              />
            </ul>
          </div>
          <div>
            <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
              Policies
            </h2>
            <ul className="mt-4 space-y-3">
              <Item to="/legal/acceptable-use-policy" label="Acceptable Use Policy" />
              <Item to="/legal/privacy-policy" label="Privacy Policy" />
              <Item to="/legal/cookie-policy" label="Cookie Policy" />
            </ul>
          </div>
          <div>
            <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
              Other
            </h2>
            <ul className="mt-4 space-y-3">
              <Item to="/legal/brand-guidelines" label="UNFLD Brand Guidelines" />
              <Item to="/security" label="Security" />
              <Item to="/contact" label="Legal request" />
            </ul>
          </div>
          <div>
            <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
              Quick links
            </h2>
            <ul className="mt-4 space-y-3">
              {footer.legal.map((l) => (
                <Item key={l.to} to={l.to} label={l.label} />
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}

function Item({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link to={to as never} className="text-[15px] hover:opacity-70">
        {label}
      </Link>
    </li>
  );
}
