import { Mark } from "@/components/site/logo";
import { BtnLink } from "@/components/site/buttons";
import { WordStagger } from "@/components/site/reveal";
import "./sentinela.css";

const STREAM = [
  ["Ninja Forms", "WordPress"],
  ["GNOME Epiphany", "GNOME"],
  ["json-glib", "RHEL"],
  ["WebDyne", "Perl"],
  ["konflux-ci", "8.0 a 8.8"],
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
          <h1 className="mt-6 font-display text-[clamp(2.5rem,5.2vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-fg">
            <WordStagger text="Quem lê a CVE" />
            <br />
            <WordStagger className="text-muted" text="quando ninguém tem tempo?" />
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">
            Vulnerabilidades novas são publicadas o tempo todo, mais rápido do que qualquer time
            consegue ler. Cada uma pede alguém para abrir o registro, procurar nos repositórios e
            decidir se é grave. Na UNFLD, demos esse trabalho a um agente. Esta é a história dele.
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
            Nomes de componentes das rodadas reais do fim de outubro e do começo de novembro de
            2026. Não é um feed ao vivo. Os identificadores CVE, quando existem, estão no texto.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
