import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { formatAddress, offices, SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/sao-paulo")({
  head: () =>
    buildPageHead({
      title: "São Paulo",
      description:
        "UNFLD in São Paulo. Registered headquarters and meeting point of UNFOLDING THE FUTURE LTDA, in Bela Vista.",
      path: "/sao-paulo",
    }),
  component: SaoPaulo,
});

function SaoPaulo() {
  const hq = offices[0];

  return (
    <main>
      <PageHero
        kicker="Headquarters"
        title="UNFLD in"
        titleSecond="São Paulo."
        lede="The registered headquarters and meeting point of UNFOLDING THE FUTURE LTDA, in Bela Vista, minutes from Avenida Paulista."
        actions={
          <>
            <BtnLink to="/contact">Talk to UNFLD</BtnLink>
            <BtnLink to="/careers" variant="secondary">
              Careers
            </BtnLink>
          </>
        }
      />
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl">
          <img
            src="/images/hq.jpg"
            alt="UNFLD São Paulo location"
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </section>
      <Section className="py-20 sm:py-28">
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Registered office and meeting point
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Our base for product decisions, client sessions, and company operations in São Paulo.
        </p>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <dt className="text-[12px] tracking-[0.16em] text-subtle uppercase">
              Address
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">
              {formatAddress()}
            </dd>
          </div>
          <div>
            <dt className="text-[12px] tracking-[0.16em] text-subtle uppercase">
              Coordinates
            </dt>
            <dd className="mt-2 font-mono text-sm">{hq.coords}</dd>
          </div>
          <div>
            <dt className="text-[12px] tracking-[0.16em] text-subtle uppercase">
              Legal entity
            </dt>
            <dd className="mt-2 text-sm text-muted">
              {SITE.legal} · CNPJ {SITE.cnpj}
              <br />
              {SITE.status} · {SITE.establishment} · opened {SITE.founded}
            </dd>
          </div>
          <div>
            <dt className="text-[12px] tracking-[0.16em] text-subtle uppercase">
              Contact
            </dt>
            <dd className="mt-2 text-sm text-muted">
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-fg">
                {SITE.phone}
              </a>
              <br />
              <a
                href={`mailto:${SITE.registeredEmail}`}
                className="hover:text-fg"
              >
                {SITE.registeredEmail}
              </a>
            </dd>
          </div>
        </dl>
      </Section>
    </main>
  );
}
