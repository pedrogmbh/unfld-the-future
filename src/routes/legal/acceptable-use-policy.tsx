import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { formatLegalContact, SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/legal/acceptable-use-policy")({
  head: () =>
    buildPageHead({
      title: "Acceptable Use Policy",
      description:
        "What is permitted on UNFLD services and website surfaces.",
      path: "/legal/acceptable-use-policy",
    }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc title="Acceptable Use Policy" updated="August 22, 2026">
      <p>
        This Acceptable Use Policy (“AUP”) applies to each service that expressly incorporates this policy, together with any product-specific restrictions.
      </p>
      <H>Prohibited activities</H>
      <p>
        You may not use our services to: violate applicable local, national, or international laws; generate, distribute, or facilitate malware or security exploits; conduct unauthorized vulnerability scanning, penetration testing, or denial-of-service attempts; impersonate any person or entity; infringe intellectual property or proprietary rights; or use a service to extract, reproduce, or exploit protected product content or functionality beyond the rights granted by the applicable agreement.
      </p>
      <H>Regulated workflows & domain compliance</H>
      <p>
        If you deploy our products or custom systems in regulated domains—such as workplace health (NR-1), fiscal documentation, agriculture, or public sector workflows—you remain responsible for operational compliance with relevant regulatory standards. UNFLD software provides tools and workflows, but does not substitute for licensed legal, medical, or formal accounting counsel.
      </p>
      <H>Investigation and enforcement</H>
      <p>
        We reserve the right to investigate suspected violations of this policy, suspend or terminate access for non-compliance, and cooperate with law enforcement authorities where appropriate.
      </p>
      <H>Contact</H>
      <p>
        Report suspected violations or inquiries: {SITE.aup}. {formatLegalContact()}
      </p>
    </LegalDoc>
  );
}
