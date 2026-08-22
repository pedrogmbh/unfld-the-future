import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { formatLegalContact, pageTitle, SITE } from "@/lib/site";

export const Route = createFileRoute("/legal/privacy-policy")({
  head: () => ({ meta: [{ title: pageTitle("Privacy Policy") }] }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc title="Privacy Policy" updated="August 1, 2026">
      <p>
        This Privacy Policy explains how {SITE.legal} (“UNFLD”) collects, uses,
        and shares personal information when you use our websites and products.
      </p>
      <H>Information we collect</H>
      <p>
        Account data (name, email, company), usage data (logs, device, approx.
        location), content you submit to the Services, and payment data handled
        by our processor. We do not store full card numbers.
      </p>
      <H>How we use it</H>
      <p>
        To provide, secure, and improve the Services; to communicate with you;
        to prevent abuse; and to comply with law. Company and Enterprise content
        is not used to train models unless you opt in.
      </p>
      <H>Legal bases</H>
      <p>
        Where GDPR or LGPD applies, we rely on contract, legitimate interests,
        consent, and legal obligation as appropriate. You may withdraw consent
        without affecting prior processing.
      </p>
      <H>Sharing</H>
      <p>
        We share data with subprocessors who help us run the Services (cloud,
        payments, email), with affiliates, and when required by law. We do not
        sell personal information.
      </p>
      <H>Retention</H>
      <p>
        We keep account data for the life of the account and a limited period
        after, logs for security, and content according to your plan and
        deletion requests.
      </p>
      <H>Your rights</H>
      <p>
        Depending on where you live, you may access, correct, delete, port, or
        object to processing of your information. Contact privacy@unfld.com or
        use Privacy choices in the footer. California residents may use the
        same channel; we will not discriminate for exercising rights.
      </p>
      <H>International transfers</H>
      <p>
        We operate in Brazil, the EU, and the United States. Transfers use
        appropriate safeguards, including standard contractual clauses where
        required.
      </p>
      <H>Contact</H>
      <p>
        {formatLegalContact()} privacy@unfld.com. Data protection officer:
        dpo@unfld.com.
      </p>
    </LegalDoc>
  );
}
