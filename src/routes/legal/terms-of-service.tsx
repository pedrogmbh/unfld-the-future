import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/legal/terms-of-service")({
  head: () => ({ meta: [{ title: pageTitle("Terms of Service") }] }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc title="Terms of Service" updated="August 1, 2026">
      <p>
        These Terms of Service (“Terms”) govern access to and use of UNFLD
        products, including Forge, Build, Studio, Pulse, Relay, websites, and
        related services (the “Services”). By using the Services you agree to
        these Terms.
      </p>
      <H>Who we are</H>
      <p>
        The Services are provided by UNFLD Ltda. (“UNFLD”, “we”, “us”). If you
        are entering into these Terms on behalf of an organization, you
        represent that you have authority to bind that organization.
      </p>
      <H>Accounts</H>
      <p>
        You are responsible for the credentials issued to you and for activity
        under your account. Notify us if you believe an account has been
        compromised. We may suspend accounts that violate these Terms or the
        Acceptable Use Policy.
      </p>
      <H>The Services</H>
      <p>
        We grant you a limited, non-exclusive, non-transferable right to use the
        Services in accordance with these Terms and your plan. Features, limits,
        and availability may change. Preview and beta features are provided as
        is and may be withdrawn.
      </p>
      <H>Your content</H>
      <p>
        You retain rights to content you submit. You grant UNFLD a license to
        host, process, and display that content solely to provide the Services.
        Company and Enterprise plans do not use your content to train models
        unless you opt in.
      </p>
      <H>Acceptable use</H>
      <p>
        You must follow the Acceptable Use Policy. You may not probe, reverse
        engineer, or overload the Services except as allowed in a written
        security assessment.
      </p>
      <H>Fees</H>
      <p>
        Paid plans are billed in advance or on usage, as stated at checkout or
        in an order form. Fees are non-refundable except where required by law.
        We may change prices with notice for the next term.
      </p>
      <H>Disclaimer</H>
      <p>
        The Services are provided “as is.” We disclaim warranties of
        merchantability, fitness for a particular purpose, and non-infringement
        to the maximum extent permitted by law.
      </p>
      <H>Limitation of liability</H>
      <p>
        To the maximum extent permitted by law, UNFLD’s aggregate liability under
        these Terms is limited to the amounts you paid us in the twelve months
        before the claim. We are not liable for indirect, incidental, or
        consequential damages.
      </p>
      <H>Termination</H>
      <p>
        You may stop using the Services at any time. We may suspend or terminate
        for material breach. Upon termination, your right to use the Services
        ends. Provisions that should survive, survive.
      </p>
      <H>Governing law</H>
      <p>
        These Terms are governed by the laws of Brazil, without regard to
        conflict-of-law rules. Courts in São Paulo, SP have exclusive
        jurisdiction, except where consumer law requires otherwise.
      </p>
      <H>Contact</H>
      <p>Questions: legal@unfld.com. UNFLD Ltda., São Paulo, Brazil.</p>
    </LegalDoc>
  );
}
