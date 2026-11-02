import { CodeBlock } from "@/components/site/code-block";
import { BtnLink } from "@/components/site/buttons";
import { Mark } from "@/components/site/logo";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SentinelaHero } from "./hero";

const SCAN = `# Sentinela · varredura somente leitura
# organização GitHub da UNFLD
# query: "konflux"

package.json
package-lock.json
requirements.txt
Dockerfile
.github/workflows
wrangler.toml

# Cloudflare da UNFLD
# Workers, Pages, compatibility dates, bindings, builds

matches = 0
`;

const STEPS = [
  {
    n: "01",
    title: "Buscar",
    body: "Lê os posts do @CVEnew desde o último identificador que já processou. Pagina. Não pula. O limite diário é de 1.000 leituras no X.",
  },
  {
    n: "02",
    title: "Abrir o registro",
    body: "NVD, cve.org e o advisory do fabricante. Componente, versões afetadas, vetor, CVSS, exploração e correção. Só o que está escrito.",
  },
  {
    n: "03",
    title: "Triar",
    body: "Sem relação com o que a UNFLD usa: não exposto, com um motivo de uma linha. Pode haver relação: avaliação completa. Sem acesso: incerto.",
  },
  {
    n: "04",
    title: "Varrer",
    body: "GitHub e Cloudflare, somente leitura. package.json, lockfiles, requirements, Dockerfiles, workflows, wrangler.toml. Workers, Pages, datas, bindings, builds.",
  },
  {
    n: "05",
    title: "Reportar",
    body: "Avaliação profunda: um alerta. Descarte: uma linha no resumo da rodada. Nada novo: silêncio. O CEO entra no chat só com exposição, urgência crítica ou alta, ou falha.",
  },
] as const;

const FIGURES = [
  {
    value: "14",
    label: "CVEs novas numa rodada",
    note: "Ninja Forms, GNOME Epiphany, json-glib, WebDyne e outras. Nenhuma afetava a UNFLD.",
  },
  {
    value: "8",
    label: "na rodada seguinte",
    note: "Quatro em konflux-ci, HIGH, de 8.0 a 8.8. Quatro plugins WordPress.",
  },
  {
    value: "29",
    label: "plugins WordPress",
    note: "De 4.3 MEDIUM a 9.8 CRITICAL. Uncanny Toolkit for LearnDash a 9.8. Todas não expostas.",
  },
  {
    value: "1.000",
    label: "leituras no X por dia",
    note: "O teto que o agente respeita. A memória do último post impede que a próxima rodada releia o que já passou.",
  },
  {
    value: "30 min",
    label: "cadência em que começou",
    note: "O dia inteiro. Ajustamos porque cada rodada já alcança tudo o que ficou para trás.",
  },
  {
    value: "2×",
    label: "por dia útil, agora",
    note: "9h e 17h, horário de Brasília. Segunda às 9h cobre o fim de semana.",
  },
] as const;

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">{children}</p>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-5 max-w-4xl font-display text-[clamp(1.8rem,4vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em]"
    >
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 max-w-2xl space-y-5 text-[16px] leading-[1.7] text-muted">{children}</div>
  );
}

function Ctas() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      <BtnLink to="/contact" size="lg">
        Fale com a UNFLD
      </BtnLink>
      <BtnLink to="/enterprise" variant="secondary" size="lg">
        Empresarial
      </BtnLink>
    </div>
  );
}

export function SentinelaPost() {
  return (
    <>
      <SentinelaHero />

      <section className="px-5 py-8 sm:px-8 lg:px-12" aria-labelledby="pitch-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl border-t border-border pt-20 sm:pt-28">
          <Reveal>
            <Kicker>O trabalho</Kicker>
            <H2 id="pitch-title">A equipe não fica de plantão.</H2>
            <Prose>
              <p>
                A UNFLD constrói e opera agentes de IA. Persistentes, com rotina, no Grok Bot — a
                plataforma em que um bot fica de pé e repete um trabalho. O Sentinela CVE é o agente
                com que olhamos a nossa própria stack: produtos, repositórios, Workers, Pages.
              </p>
              <p>
                A CVE sai. O agente lê. O time recebe veredito e evidência. Se houver exposição,
                recebe também o que fazer. Se não houver nada novo, não recebe nada.
              </p>
              <p>É assim que protegemos o que operamos. O mesmo desenho serve para a sua stack.</p>
            </Prose>
            <Ctas />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="fonte-title">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <Kicker>A fonte</Kicker>
            <H2 id="fonte-title">O @CVEnew publica. O agente lê em seguida.</H2>
            <Prose>
              <p>
                O bot segue a conta @CVEnew no X. Cada CVE nova sai ali, quando é publicada. Não há
                boletim semanal no meio do caminho.
              </p>
              <p>
                Cada rodada lê todos os posts desde o último que já processou. Esse identificador
                fica na memória do agente. A leitura pagina, então nada fica para trás. Na segunda
                de manhã, a rodada cobre o fim de semana inteiro.
              </p>
              <p>Há um limite diário de 1.000 leituras no X. O agente o respeita.</p>
            </Prose>
          </Reveal>
          <Stagger className="grid min-w-0 gap-3">
            <StaggerItem>
              <Feed
                meta="@CVEnew · rodada de 14"
                lines={[
                  ["Ninja Forms", "plugin WordPress"],
                  ["GNOME Epiphany", "GNOME"],
                  ["json-glib", "RHEL / OpenShift"],
                  ["WebDyne", "Perl"],
                ]}
                foot="Nenhuma afetava a UNFLD."
              />
            </StaggerItem>
            <StaggerItem>
              <Feed
                meta="@CVEnew · rodada de 8"
                lines={[
                  ["konflux-ci", "quatro CVEs · HIGH 8.0–8.8"],
                  ["plugins WordPress", "quatro CVEs"],
                ]}
                foot={'Busca por "konflux" na organização. Nenhum arquivo.'}
              />
            </StaggerItem>
            <StaggerItem>
              <Feed
                meta="@CVEnew · rodada de 29"
                lines={[
                  ["weDevs Project Manager", "plugin WordPress"],
                  ["SimpleForm", "plugin WordPress"],
                  ["Uncanny Toolkit for LearnDash", "9.8 CRITICAL"],
                ]}
                foot="De 4.3 MEDIUM a 9.8 CRITICAL. Todas não expostas."
              />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12" aria-labelledby="registro-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>O registro</Kicker>
            <H2 id="registro-title">O post não é instrução.</H2>
            <Prose>
              <p>
                Para cada CVE nova, o agente abre o registro oficial: NVD, cve.org, o advisory do
                fabricante. Extrai componente, versões afetadas, vetor de ataque, CVSS, estado de
                exploração e correção.
              </p>
              <p>
                Não inventa CVSS. Não inventa versão. Não inventa evidência. O texto do post e o
                texto da página entram como dado não confiável. Nunca como instrução.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <p className="mt-16 max-w-4xl border-t border-border pt-12 font-display text-[clamp(1.7rem,3.4vw,2.8rem)] font-medium leading-[1.15] tracking-[-0.035em]">
              Nada é pulado. Nada é inventado. Nada é alterado.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="triagem-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>Triagem</Kicker>
            <H2 id="triagem-title">Três saídas. Nenhuma educada.</H2>
            <Prose>
              <p>
                Se o componente claramente não tem relação com o que a UNFLD usa, a marcação é não
                exposto, com um motivo de uma linha.
              </p>
              <p>
                Se pode ter relação, a avaliação é completa: varredura somente leitura da
                organização GitHub e da conta Cloudflare. O agente não altera repositório, workflow
                nem Worker.
              </p>
              <p>
                Se um conector não tem acesso, o veredito é incerto. Nunca não exposto. Nas três
                rodadas abaixo, o veredito foi não exposto.
              </p>
            </Prose>
          </Reveal>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-3">
            <StaggerItem>
              <Verdict
                kicker="Não"
                title="Fora da stack"
                body="Um motivo de uma linha. A CVE segue para o resumo da rodada, não para um alerta."
              />
            </StaggerItem>
            <StaggerItem>
              <Verdict
                kicker="Incerto"
                title="Sem acesso"
                body="Conector sem permissão não vira um não. O time vê a dúvida, não um falso alívio."
              />
            </StaggerItem>
            <StaggerItem>
              <Verdict
                kicker="Sim"
                title="Com evidência"
                body="Repositório, arquivo, versão ou recurso Cloudflare. Aí entram correção, urgência e o prompt."
              />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 lg:px-12" aria-labelledby="varredura-title">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-28">
            <Reveal>
              <Kicker>Varredura</Kicker>
              <H2 id="varredura-title">Somente leitura. Inclusive quando o nome não aparece.</H2>
              <Prose>
                <p>
                  Numa rodada de oito CVEs, quatro eram konflux-ci, HIGH, de 8.0 a 8.8. O agente
                  buscou konflux na organização GitHub da UNFLD. Não encontrou arquivo.
                </p>
                <p>
                  A janela ao lado é o formato dessa busca, não um log copiado. Os caminhos são os
                  que a avaliação completa abre. O zero é o resultado real daquela consulta.
                </p>
              </Prose>
            </Reveal>
          </div>
          <div className="min-w-0">
            <CodeBlock code={SCAN} filename="org search · konflux" />
          </div>
        </div>
      </section>

      <section
        className="mt-20 bg-bg-elevated px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        aria-labelledby="alerta-title"
      >
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>O alerta</Kicker>
            <H2 id="alerta-title">
              Um e-mail quando a avaliação é profunda. Uma linha quando não é.
            </H2>
            <Prose>
              <p>
                A saída é e-mail HTML, com a marca da UNFLD, para o time técnico. Uma CVE avaliada a
                fundo gera um alerta. O assunto segue este formato:
              </p>
            </Prose>
            <p className="mt-6 max-w-3xl font-mono text-[13px] leading-relaxed break-words text-fg sm:text-[14px]">
              [CVE] CVE-XXXX-YYYY · Exposto: Sim/Não/Incerto · DD/MM/YYYY
            </p>
            <Prose>
              <p>
                Dentro: resumo, CVSS, link, exposição e evidência — repositório, arquivo, versão,
                recurso Cloudflare. Se houver exposição, entram uma correção sugerida, a urgência
                (crítica, alta, média ou baixa, com justificativa) e um prompt em inglês, pronto
                para colar, para quem desenvolve ou para um agente de código.
              </p>
              <p>
                As CVEs descartadas entram num único e-mail de resumo da rodada. Uma linha cada. O
                CEO é chamado no chat em três casos: exposição real, urgência crítica ou alta, ou
                falha do agente.
              </p>
            </Prose>
          </Reveal>

          <div className="mt-14 grid min-w-0 gap-6 lg:grid-cols-2">
            <EmailFrame
              eyebrow="Alerta · avaliação profunda"
              subject="konflux-ci · Exposto: Não"
              note="Quatro CVEs, HIGH, 8.0 a 8.8. O assunto de produção leva o identificador CVE. Aqui ele não é inventado."
            >
              <Field k="Componente" v="konflux-ci" />
              <Field k="CVSS" v="HIGH · 8.0 a 8.8" />
              <Field k="Exposição" v="Não" />
              <Field
                k="Evidência"
                v='Organização GitHub da UNFLD · busca "konflux" · nenhum arquivo'
              />
              <Field
                k="Correção, urgência, prompt"
                v="Não entraram. Só entram quando há exposição."
              />
            </EmailFrame>
            <EmailFrame
              eyebrow="Resumo da rodada"
              subject="14 CVEs · nenhuma exposta"
              note="Uma linha por CVE descartada. Os nomes abaixo são os que esta página pode citar. O e-mail lista a rodada inteira."
            >
              <Field k="Ninja Forms" v="plugin WordPress · não exposto" />
              <Field k="GNOME Epiphany" v="não exposto" />
              <Field k="json-glib" v="RHEL / OpenShift · não exposto" />
              <Field k="WebDyne" v="Perl · não exposto" />
              <Field k="As outras desta rodada" v="uma linha cada · o mesmo veredito" />
            </EmailFrame>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="rodada-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>Uma rodada</Kicker>
            <H2 id="rodada-title">Cinco passos. O mesmo, toda vez.</H2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step) => (
              <li key={step.n} className="min-w-0 bg-bg p-6">
                <p className="font-mono text-[12px] text-subtle">{step.n}</p>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-12" aria-labelledby="cadencia-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>Cadência</Kicker>
            <H2 id="cadencia-title">De meia em meia hora para duas vezes ao dia.</H2>
            <Prose>
              <p>
                Começou a rodar a cada 30 minutos, o dia inteiro. Ajustamos para duas vezes por dia
                útil, 9h e 17h, horário de Brasília. Cada rodada já alcança o que ficou para trás. A
                cadência mais curta não trazia CVE que a seguinte não fosse ler.
              </p>
            </Prose>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2">
            <div className="bg-bg p-6 sm:p-8">
              <p className="font-mono text-[12px] text-subtle">Antes</p>
              <p className="mt-4 font-display text-3xl font-medium tracking-tight">
                A cada 30 minutos
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                O dia inteiro, inclusive fim de semana. Cada rodada já alcançava o que tinha ficado
                para trás, então o intervalo curto repetia a mesma leitura.
              </p>
              <HourTicks mode="dense" />
            </div>
            <div className="bg-bg p-6 sm:p-8">
              <p className="font-mono text-[12px] text-subtle">Agora · seg–sex · Brasília</p>
              <p className="mt-4 font-display text-3xl font-medium tracking-tight">9h e 17h</p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                Segunda às 9h lê o fim de semana, porque a rodada parte do último post processado. A
                maioria dos dias não encontra nada e fica em silêncio.
              </p>
              <HourTicks mode="sparse" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="numeros-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>Números</Kicker>
            <H2 id="numeros-title">Só o que as rodadas de fato fizeram.</H2>
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {FIGURES.map((figure) => (
              <StaggerItem key={figure.value + figure.label}>
                <div className="flex h-full min-w-0 flex-col bg-bg p-6 sm:p-8">
                  <p className="font-display text-[clamp(3rem,6vw,4.5rem)] font-medium leading-none tracking-[-0.045em]">
                    {figure.value}
                  </p>
                  <h3 className="mt-5 font-display text-xl font-medium tracking-tight">
                    {figure.label}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{figure.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-12" aria-labelledby="rodadas-title">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Kicker>Rodadas reais</Kicker>
              <H2 id="rodadas-title">O que saiu do silêncio.</H2>
              <Prose>
                <p>
                  Fim de outubro e início de novembro de 2026. Três rodadas com CVE nova. A maioria
                  das outras não encontrou nada e não escreveu.
                </p>
              </Prose>
            </Reveal>
          </div>
          <div className="min-w-0 space-y-16">
            <Round
              n="14"
              title="Nenhuma na casa."
              body="Plugins WordPress e WooCommerce, entre eles Ninja Forms. GNOME Epiphany. json-glib em RHEL e OpenShift. WebDyne para Perl. Nenhuma afetava a UNFLD."
            />
            <Round
              n="8"
              title="O nome que não estava lá."
              body="Quatro CVEs em konflux-ci, HIGH, de 8.0 a 8.8. A busca por konflux na organização GitHub não achou arquivo. Quatro plugins WordPress no restante da rodada."
            />
            <Round
              n="29"
              title="De 4.3 a 9.8. Fora."
              body="Vinte e nove CVEs de plugins WordPress, de 4.3 MEDIUM a 9.8 CRITICAL. Entre elas, weDevs Project Manager, SimpleForm e Uncanny Toolkit for LearnDash — esta a 9.8. Todas não expostas."
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="agentes-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl border-t border-border pt-20 sm:pt-28">
          <Reveal>
            <Kicker>1º de novembro de 2026</Kicker>
            <H2 id="agentes-title">Outro agente. Um trabalho só.</H2>
            <Prose>
              <p>
                Nesse dia, a Vercel bloqueou builds novos deste site. A dependência
                @tanstack/react-start 1.168.48 tinha uma CVE de XSS conhecida: CVE-2026-102989.
              </p>
              <p>
                Quem achou foi outro bot nosso — o que mantém o site. Não foi o Sentinela. O pull
                request corrigido do Dependabot entrou com a aprovação do CEO. Produção voltou em
                minutos. Os outros pull requests de dependência foram rebaseados e entraram depois
                que as previews passaram.
              </p>
              <p>Agentes em toda a empresa. Cada um com um trabalho.</p>
            </Prose>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Bloqueio", "A Vercel recusou builds novos deste site."],
              ["CVE-2026-102989", "XSS em @tanstack/react-start 1.168.48."],
              ["O bot do site", "Achou o bloqueio. O patch do Dependabot entrou com o CEO."],
              ["Minutos", "Produção voltou. O resto esperou a preview passar."],
            ].map(([title, body]) => (
              <li key={title} className="min-w-0 bg-bg p-6">
                <h3 className="font-display text-xl font-medium tracking-tight">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12" aria-labelledby="contato-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>A sua stack</Kicker>
            <H2 id="contato-title">O Sentinela é como a UNFLD se protege.</H2>
            <Prose>
              <p>
                Fonte oficial. Memória do último item. Varredura somente leitura. Veredito com
                evidência. Silêncio quando não há nada. É o que operamos aqui. É o que operamos para
                quem precisa de alguém olhando a stack sem montar um plantão.
              </p>
            </Prose>
            <Ctas />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Feed({
  meta,
  lines,
  foot,
}: {
  meta: string;
  lines: readonly (readonly [string, string])[];
  foot: string;
}) {
  return (
    <article className="min-w-0 rounded-xl border border-border bg-window p-5 sm:p-6">
      <p className="font-mono text-[11px] text-subtle">{meta}</p>
      <ul className="mt-4 space-y-3">
        {lines.map(([name, note]) => (
          <li key={name} className="flex items-baseline justify-between gap-4 text-[15px]">
            <span className="min-w-0">{name}</span>
            <span className="shrink-0 font-mono text-[11px] text-subtle">{note}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-border pt-4 text-[13px] leading-relaxed text-muted">
        {foot}
      </p>
    </article>
  );
}

function Verdict({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <div className="flex h-full min-w-0 flex-col bg-bg p-6 sm:p-8">
      <p className="font-display text-[clamp(2.4rem,4vw,3.4rem)] font-medium leading-none tracking-[-0.04em]">
        {kicker}
      </p>
      <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{title}</h3>
      <p className="mt-3 text-[14px] leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function EmailFrame({
  eyebrow,
  subject,
  note,
  children,
}: {
  eyebrow: string;
  subject: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <article className="min-w-0 overflow-hidden rounded-xl border border-border bg-bg">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4 sm:px-6">
        <Mark className="size-4" />
        <span className="font-display text-[13px] font-semibold tracking-[0.28em]">UNFLD</span>
        <span className="ml-auto font-mono text-[11px] text-subtle">{eyebrow}</span>
      </div>
      <div className="px-5 py-6 sm:px-6">
        <h3 className="font-display text-2xl font-medium tracking-tight">{subject}</h3>
        <p className="mt-3 text-[13px] leading-relaxed text-subtle">{note}</p>
        <dl className="mt-6 divide-y divide-border border-y border-border">{children}</dl>
      </div>
    </article>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid gap-1 py-3 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-4">
      <dt className="font-mono text-[11px] text-subtle">{k}</dt>
      <dd className="min-w-0 text-[14px] leading-relaxed text-fg">{v}</dd>
    </div>
  );
}

function HourTicks({ mode }: { mode: "dense" | "sparse" }) {
  const hours = Array.from({ length: 24 }, (_, hour) => hour);
  return (
    <div className="mt-8 flex items-end gap-1" aria-hidden="true">
      {hours.map((hour) => {
        const mark = mode === "sparse" && (hour === 9 || hour === 17);
        return (
          <span key={hour} className="flex min-w-0 flex-1 flex-col items-center">
            <span
              className={
                mark
                  ? "h-8 w-px bg-fg"
                  : mode === "dense"
                    ? "h-5 w-px bg-fg/35"
                    : "h-3 w-px bg-border-strong"
              }
            />
          </span>
        );
      })}
    </div>
  );
}

function Round({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <article className="border-t border-border pt-8">
      <p className="font-display text-[clamp(3rem,6vw,4.5rem)] font-medium leading-none tracking-[-0.045em]">
        {n}
      </p>
      <h3 className="mt-4 font-display text-2xl font-medium tracking-tight">{title}</h3>
      <p className="mt-3 max-w-xl text-[16px] leading-[1.7] text-muted">{body}</p>
    </article>
  );
}
