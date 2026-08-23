import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { formatLegalContact, SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/legal/cookie-policy")({
  head: () =>
    buildPageHead({
      title: "Cookie Policy",
      description:
        "Cookies and similar technologies used on unfld.com.br and applicable UNFLD product domains.",
      path: "/legal/cookie-policy",
    }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc title="Cookie Policy" updated="August 22, 2026">
      <p>
        UNFLD uses cookies and similar technologies on unfld.com.br and on product domains that expressly link to this policy. This policy explains what they do and how you can manage your preferences.
      </p>
      <H>Essential cookies</H>
      <p>
        Essential cookies are required for core website functionality, security, session management, and remembering your privacy choices. The site cannot function properly without these technical cookies.
      </p>
      <H>Analytics cookies</H>
      <p>
        Analytics cookies help us understand how visitors interact with our pages by collecting aggregated, non-personally identifiable telemetry. These cookies are optional and only set if accepted.
      </p>
      <H>Advertising and third-party trackers</H>
      <p>
        We do not deploy third-party advertising tracking cookies across the UNFLD corporate site.
      </p>
      <H>Managing cookies</H>
      <p>
        You can control and configure cookie preferences through your browser settings at any time. Disabling essential cookies may impair website navigation and functionality.
      </p>
      <H>Cookie inventory</H>
      <p>
        The current cookie inventory is generated from the production site and shown in Privacy choices, including purpose, provider, category, and retention period.
      </p>
      <H>Contact</H>
      <p>
        Questions regarding our cookie practices: {SITE.privacy}. {formatLegalContact()}
      </p>
    </LegalDoc>
  );
}
