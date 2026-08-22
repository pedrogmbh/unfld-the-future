import { createFileRoute } from "@tanstack/react-router";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/legal/cookie-policy")({
  head: () => ({ meta: [{ title: pageTitle("Cookie Policy") }] }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc title="Cookie Policy" updated="August 1, 2026">
      <p>
        UNFLD uses cookies and similar technologies on unfld.com and related
        properties. This policy explains what they do and how you can choose.
      </p>
      <H>Essential</H>
      <p>
        Required for authentication, security, load balancing, and remembering
        your privacy choices. The site will not work correctly without them.
      </p>
      <H>Analytics</H>
      <p>
        Optional. Help us understand which pages are used. Aggregated. Off if
        you decline in Privacy choices.
      </p>
      <H>Advertising</H>
      <p>
        Off by default. We rarely use advertising cookies. If we ever do, they
        will appear in Privacy choices before they run.
      </p>
      <H>How to choose</H>
      <p>
        Open Privacy choices in the footer of any UNFLD page. You can also
        control cookies in your browser. Blocking essential cookies will break
        sign-in.
      </p>
      <H>List of cookies</H>
      <p>
        unfld_session (essential, session), unfld_csrf (essential, session),
        unfld-privacy (essential, 1 year), unfld_an (analytics, 6 months, only
        if accepted).
      </p>
    </LegalDoc>
  );
}
