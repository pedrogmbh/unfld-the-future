import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { formatLegalContact, SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/legal/terms-of-service-enterprise")({
  head: () =>
    buildPageHead({
      title: "Enterprise Terms",
      description:
        "Terms for services under an enterprise order form issued by UNFOLDING THE FUTURE LTDA.",
      path: "/legal/terms-of-service-enterprise",
    }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc title="Enterprise Terms" updated="August 22, 2026">
      <p>
        These Enterprise Terms apply when you purchase services under an enterprise order form issued by UNFOLDING THE FUTURE LTDA. They supplement the Terms of Service. If they conflict, the order form wins, then these Enterprise Terms, then the Terms of Service.
      </p>
      <H>Order forms</H>
      <p>
        Each order form states products, scope, term, fees, residency, and any
        dedicated capacity or service level commitments. Services start on the effective date of the order
        form unless otherwise specified.
      </p>
      <H>Data processing</H>
      <p>
        UNFLD processes customer data as a data processor to provide the agreed Services.
        A Data Processing Addendum (DPA) aligned with LGPD is available and incorporated
        when executed. Regional hosting constraints apply as defined in the order form.
      </p>
      <H>Security</H>
      <p>
        We maintain administrative, technical, and physical safeguards appropriate to the service scope, including encryption in transit and at rest, access control, and structured audit logging. Current security documentation and any applicable independent attestations are identified during review and may be provided under NDA.
      </p>
      <H>Customer content & privacy</H>
      <p>
        Customer data is processed solely to fulfill the services specified in the agreement. We do not use customer data to train external or general models without an explicit contractual basis.
      </p>
      <H>Support & SLA</H>
      <p>
        Enterprise contracts may include designated technical contacts, structured onboarding, and defined severity-level response windows during Brazilian business hours, as specified in the applicable order form.
      </p>
      <H>Indemnity</H>
      <p>
        We will defend you against third-party claims that the Services, as
        provided by us, infringe intellectual property rights, and pay damages finally awarded,
        provided you notify us promptly and grant us control of the defense.
      </p>
      <H>Publicity</H>
      <p>
        We will not use your name or trademarks in customer lists or marketing materials without prior written permission, except as required by law.
      </p>
      <H>Contact</H>
      <p>
        Enterprise inquiries: {SITE.legalEmail}. {formatLegalContact()}
      </p>
    </LegalDoc>
  );
}
