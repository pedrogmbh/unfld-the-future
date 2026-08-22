import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/legal/acceptable-use-policy")({
  head: () => ({ meta: [{ title: pageTitle("Acceptable Use Policy") }] }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc title="Acceptable Use Policy" updated="August 1, 2026">
      <p>
        This Acceptable Use Policy (“AUP”) is part of the Terms of Service. It
        applies to all UNFLD products.
      </p>
      <H>You may not</H>
      <p>
        Use the Services to violate law; exploit, harm, or attempt to harm
        minors; generate or distribute malware; probe or overload our systems
        without authorization; impersonate UNFLD or others; infringe IP;
        scrape the Services in a way that impairs them; or use outputs to train
        competing models in violation of your plan.
      </p>
      <H>Sensitive uses</H>
      <p>
        If you use Pulse or Relay in healthcare, finance, or government, you
        are responsible for domain-specific compliance. UNFLD does not provide
        legal, medical, or financial advice.
      </p>
      <H>Enforcement</H>
      <p>
        We may investigate, suspend, or terminate for AUP violations. We may
        report illegal activity to authorities. Questions: aup@unfld.com.
      </p>
    </LegalDoc>
  );
}
