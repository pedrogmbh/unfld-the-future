import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/legal/terms-of-service-enterprise")({
  head: () => ({ meta: [{ title: pageTitle("Enterprise Terms") }] }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc title="Enterprise Terms" updated="August 1, 2026">
      <p>
        These Enterprise Terms apply when you purchase UNFLD Company or
        Enterprise plans under an order form. They supplement the Terms of
        Service. If they conflict, the order form wins, then these Enterprise
        Terms, then the Terms of Service.
      </p>
      <H>Order forms</H>
      <p>
        Each order form states products, term, fees, residency, and any
        dedicated capacity. Services start on the effective date of the order
        form unless it says otherwise.
      </p>
      <H>Data processing</H>
      <p>
        UNFLD processes customer data as a processor to provide the Services.
        A data processing addendum is available on request and is incorporated
        when executed. Residencies, if purchased, constrain where data at rest
        lives.
      </p>
      <H>Security</H>
      <p>
        We maintain administrative, technical, and physical safeguards described
        on the Security page, including encryption in transit and at rest, access
        control, and logging. SOC 2 Type I & II reports are available under NDA.
      </p>
      <H>No training</H>
      <p>
        We do not use Enterprise customer content to train models. You may
        separately opt in to improvement programs in writing.
      </p>
      <H>Support</H>
      <p>
        Enterprise includes a named account team, onboarding, and priority
        support during business hours in São Paulo, Lisbon, and Austin, with
        severity-1 coverage as stated in the order form.
      </p>
      <H>Indemnity</H>
      <p>
        We will defend you against third-party claims that the Services, as
        provided by us, infringe IP rights, and pay damages finally awarded,
        provided you notify us promptly and let us control the defense.
      </p>
      <H>Publicity</H>
      <p>
        We will not use your name in a customer list without permission, except
        as required by law.
      </p>
    </LegalDoc>
  );
}
