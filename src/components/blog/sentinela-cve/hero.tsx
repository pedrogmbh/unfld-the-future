import { Mark } from "@/components/site/logo";
import { BtnLink } from "@/components/site/buttons";
import { WordStagger } from "@/components/site/reveal";
import "./sentinela.css";

const STREAM = [
  ["Ninja Forms", "WordPress"],
  ["GNOME Epiphany", "GNOME"],
  ["json-glib", "RHEL"],
  ["WebDyne", "Perl"],
  ["konflux-ci", "8.0–8.8"],
  ["Project Manager", "weDevs"],
  ["SimpleForm", "WordPress"],
  ["Uncanny Toolkit", "9.8"],
] as const;

export function SentinelaHero() {
  const rows = [...STREAM, ...STREAM];
  return (
    <section className="px-5 pt-8 pb-20 sm:px-8 sm:pt-12 sm:pb-28 lg:px-12">
      <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="min-w-0">
          <p className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">
            Sentinela CVE
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.6rem)] font-medium leading-[0.95] tracking-[-0.045em] text-fg">
            <WordStagger text="A CVE é publicada." />
            <br />
            <WordStagger className="text-muted" text="O Sentinela já a leu." />
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">
            Um agente que a UNFLD opera no Grok Bot. Ele segue o @CVEnew, abre o registro oficial e
            responde uma pergunta: isto toca o que nós rodamos? Duas vezes por dia útil. Sem CVSS
            inventado, sem versão inventada, sem prova inventada.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <BtnLink to="/contact" size="lg">
              Fale com a UNFLD
            </BtnLink>
            <BtnLink to="/enterprise" variant="secondary" size="lg">
              Empresarial
            </BtnLink>
          </div>
        </div>

        <figure className="min-w-0">
          <div className="relative overflow-hidden rounded-xl border border-border bg-window-stage">
            <div className="flex items-center gap-2 border-b border-fg px-5 py-3">
              <Mark className="size-4" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted">SENTINELA</span>
            </div>
            <div className="sentinela-mask relative h-[22rem] overflow-hidden sm:h-[28rem]">
              <div className="sentinela-stream motion-reduce:animate-none" aria-hidden="true">
                {rows.map(([name, note], index) => (
                  <div
                    key={`${name}-${index}`}
                    className="grid grid-cols-[3.2rem_minmax(0,1fr)_auto] items-baseline gap-3 border-b border-border px-5 py-3 font-mono text-[12px]"
                  >
                    <span className="text-subtle">CVE</span>
                    <span className="min-w-0 truncate text-fg">{name}</span>
                    <span className="text-subtle">{note}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="crop-mark top-0 left-0" />
            <span className="crop-mark top-0 right-0" />
            <span className="crop-mark bottom-0 left-0" />
            <span className="crop-mark right-0 bottom-0" />
          </div>
          <figcaption className="mt-4 max-w-md text-[13px] leading-relaxed text-subtle">
            Composição com componentes de rodadas reais, no fim de outubro e no início de novembro
            de 2026. Não é um feed ao vivo. Onde há identificador CVE, ele está no texto.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
