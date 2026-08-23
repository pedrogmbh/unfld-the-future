import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { formatLegalContact, SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/legal/privacy-policy")({
  head: () =>
    buildPageHead({
      title: "Privacy Policy",
      description:
        "How UNFOLDING THE FUTURE LTDA processes personal data for the UNFLD website and applicable products.",
      path: "/legal/privacy-policy",
    }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc title="Privacy Policy" updated="August 22, 2026">
      <p>
        This notice describes processing by {SITE.legal} (“UNFLD”) for the UNFLD corporate website and any product that expressly incorporates this notice. Product-specific notices apply where stated.
      </p>
      <H>Information we collect</H>
      <p>
        We collect contact information (name, business email, company), communication records, technical logs (IP address, browser type, device metadata), and any data you submit when contacting us or using our web surfaces. Payment processing for paid services is handled by accredited payment partners.
      </p>
      <H>How we use information</H>
      <p>
        To provide, maintain, and secure our websites and services; to respond to inquiries; to fulfill contractual obligations; and to comply with legal requirements under Brazilian law (including the Lei Geral de Proteção de Dados - LGPD).
      </p>
      <H>Legal bases for processing</H>
      <p>
        Under LGPD and applicable privacy laws, we process personal data based on contract execution, legitimate interests, compliance with statutory obligations, and consent where requested. You may withdraw consent at any time.
      </p>
      <H>Sharing and subprocessors</H>
      <p>
        We share data with vetted service providers who assist in hosting, communication, email delivery, and infrastructure operations under confidentiality and data protection agreements. We do not sell personal data.
      </p>
      <H>International data transfers</H>
      <p>
        Personal data may be processed in Brazil and in countries where approved service providers operate, subject to the safeguards required by applicable law, including contractual data protection clauses.
      </p>
      <H>Retention</H>
      <p>
        We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, satisfy legal or audit obligations, and resolve disputes.
      </p>
      <H>Your data rights</H>
      <p>
        You have the right to confirm the existence of processing, access your data, request correction of incomplete or inaccurate data, request anonymization or deletion where legally applicable, and revoke consent. Contact {SITE.privacy} or our Data Protection Officer at {SITE.dpo}.
      </p>
      <H>Contact & DPO</H>
      <p>
        {formatLegalContact()} Privacy inquiries: {SITE.privacy}. Data Protection Officer: {SITE.dpo}.
      </p>
    </LegalDoc>
  );
}
