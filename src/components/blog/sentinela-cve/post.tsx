import { CodeBlock } from "@/components/site/code-block";
import { BtnLink } from "@/components/site/buttons";
import { Mark } from "@/components/site/logo";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SentinelaHero } from "./hero";

const SCAN = `# Sentinela · busca somente leitura
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
    title: "Ler",
    body: "Começa no último post lido do @CVEnew e pagina até o fim. Nada fica para trás. No máximo 1.000 leituras no X por dia.",
  },
  {
    n: "02",
    title: "Conferir",
    body: "NVD, cve.org e o advisory do fabricante. Componente, versões, vetor, CVSS, exploração e correção. Só o que está escrito.",
  },
  {
    n: "03",
    title: "Triar",
    body: "Fora da stack: não, com um motivo. Pode ser nosso: avaliação completa. Sem acesso: incerto.",
  },
  {
    n: "04",
    title: "Procurar",
    body: "GitHub e Cloudflare, só leitura. Arquivos de dependência, workflows, wrangler.toml. Workers, Pages, bindings, builds.",
  },
  {
    n: "05",
    title: "Avisar",
    body: "Um alerta por CVE avaliada a fundo. Um resumo para o resto. Nada novo, nada enviado. Eu só entro quando é sério.",
  },
] as const;

const FIGURES = [
  {
    value: "14",
    label: "CVEs novas numa rodada",
    note: "Ninja Forms, GNOME Epiphany, json-glib, WebDyne e outras. Nenhuma tocava a UNFLD.",
  },
  {
    value: "8",
    label: "CVEs em outra rodada",
    note: "Quatro do konflux-ci, HIGH, de 8.0 a 8.8. Busca no GitHub: nenhum arquivo.",
  },
  {
    value: "29",
    label: "CVEs de plugins WordPress",
    note: "De 4.3 MEDIUM a 9.8 CRITICAL. O 9.8 é do Uncanny Toolkit for LearnDash. Nenhuma exposta.",
  },
  {
    value: "1.000",
    label: "leituras no X por dia",
    note: "O teto que ele respeita. A memória do último post evita reler o que já passou.",
  },
  {
    value: "30 min",
    label: "a cadência do começo",
    note: "Dia e noite. Ajustamos quando ficou claro que cada rodada já alcançava a anterior.",
  },
  {
    value: "2×",
    label: "por dia útil, hoje",
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

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="text-fg">{children}</p>;
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

      <section className="px-5 py-8 sm:px-8 lg:px-12" aria-labelledby="problema-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl border-t border-border pt-20 sm:pt-28">
          <Reveal>
            <Kicker>O problema</Kicker>
            <H2 id="problema-title">As vulnerabilidades não esperam ninguém ter tempo.</H2>
            <Prose>
              <p>
                A toda hora, alguém publica uma CVE nova. Numa biblioteca, num plugin, num sistema
                operacional, numa ferramenta de build. Elas não param de chegar. E chegam mais
                rápido do que qualquer time consegue ler.
              </p>
              <p>
                Cada uma pede o mesmo trabalho. Abrir o registro oficial, entender qual é o
                componente, descobrir se você usa, em que versão, em qual repositório. Só então
                decidir se é urgente.
              </p>
              <p>
                Poucos times têm alguém livre para isso. A leitura fica para depois. E o risco fica
                ali, quieto, sem ninguém olhar.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <div className="mt-20 border-t border-border pt-16 sm:mt-24">
              <Kicker>A nossa resposta</Kicker>
              <H2 id="resposta-title">Colocamos tecnologia para ler por nós.</H2>
              <Prose>
                <p>
                  Na UNFLD, também não tínhamos esse tempo. O time estava construindo produto. Então
                  mudamos a pergunta. Não quem tem tempo. O que pode fazer isso por nós, todo dia
                  útil, sem esquecer nada.
                </p>
                <p>
                  A resposta foi um agente no Grok Bot, com uma rotina e um trabalho só: ler cada
                  CVE nova e dizer, com evidência, se ela toca o que operamos. Demos a ele o nome de
                  Sentinela CVE.
                </p>
                <Lead>O primeiro trabalho dele é saber onde olhar.</Lead>
              </Prose>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="fonte-title">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <Kicker>1 · A fonte</Kicker>
            <H2 id="fonte-title">Ele começa onde a CVE aparece.</H2>
            <Prose>
              <p>
                O Sentinela segue a conta @CVEnew no X. É ali que cada CVE nova surge, no momento em
                que é publicada. Sem boletim semanal. Sem intermediário.
              </p>
              <p>
                Ele guarda na memória o último post que leu. Na rodada seguinte, começa dali e
                pagina até o fim. Nada fica para trás. Segunda às 9h, ele lê o fim de semana
                inteiro.
              </p>
              <p>O X permite 1.000 leituras por dia. Ele respeita o limite.</p>
              <Lead>
                Ao lado, três rodadas reais. Leia os nomes. Agora imagine alguém do time fazendo
                isso, um por um, toda semana.
              </Lead>
            </Prose>
          </Reveal>
          <Stagger className="grid min-w-0 gap-3">
            <StaggerItem>
              <Feed
                meta="@CVEnew · rodada com 14 CVEs"
                lines={[
                  ["Ninja Forms", "plugin WordPress"],
                  ["GNOME Epiphany", "GNOME"],
                  ["json-glib", "RHEL / OpenShift"],
                  ["WebDyne", "Perl"],
                ]}
                foot="Nenhuma tocava a UNFLD."
              />
            </StaggerItem>
            <StaggerItem>
              <Feed
                meta="@CVEnew · rodada com 8 CVEs"
                lines={[
                  ["konflux-ci", "quatro CVEs · HIGH 8.0 a 8.8"],
                  ["plugins WordPress", "quatro CVEs"],
                ]}
                foot={'Busca por "konflux" na nossa organização. Nenhum arquivo.'}
              />
            </StaggerItem>
            <StaggerItem>
              <Feed
                meta="@CVEnew · rodada com 29 CVEs"
                lines={[
                  ["weDevs Project Manager", "plugin WordPress"],
                  ["SimpleForm", "plugin WordPress"],
                  ["Uncanny Toolkit for LearnDash", "9.8 CRITICAL"],
                ]}
                foot="De 4.3 MEDIUM a 9.8 CRITICAL. Nenhuma exposta."
              />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12" aria-labelledby="registro-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>2 · O registro</Kicker>
            <H2 id="registro-title">Um post não é prova.</H2>
            <Prose>
              <p>
                O post do @CVEnew é só o aviso. Para cada CVE, o Sentinela abre o registro oficial:
                NVD, cve.org, o advisory do fabricante. Dali ele tira o componente, as versões
                afetadas, o vetor de ataque, o CVSS, se já existe exploração e se já existe
                correção.
              </p>
              <p>
                Se um dado não está escrito, ele não preenche. Nem CVSS, nem versão, nem evidência.
                E o texto do post e da página entra como dado, nunca como ordem. Um agente que
                obedece a quem escreve a CVE não protege ninguém.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <p className="mt-16 max-w-4xl border-t border-border pt-12 font-display text-[clamp(1.7rem,3.4vw,2.8rem)] font-medium leading-[1.15] tracking-[-0.035em]">
              Nada pulado. Nada inventado. Nada alterado.
            </p>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-fg">
              Com o registro na mão, sobra uma pergunta. Isto é com a gente?
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="triagem-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>3 · A triagem</Kicker>
            <H2 id="triagem-title">Três respostas possíveis. Nenhuma por educação.</H2>
            <Prose>
              <p>
                Se o componente não tem nada a ver com o que rodamos, a resposta é não. Com um
                motivo, em uma linha.
              </p>
              <p>
                Se pode ter a ver, ele vai olhar. Varre a nossa organização no GitHub e a nossa
                conta Cloudflare. Só lê. Não abre pull request, não mexe em workflow, não toca em
                Worker.
              </p>
              <p>
                Se algum conector está sem acesso, a resposta é incerto. Nunca não. Prefiro uma
                dúvida honesta a um alívio falso.
              </p>
              <Lead>São três saídas. Cada uma leva a um lugar diferente.</Lead>
            </Prose>
          </Reveal>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-3">
            <StaggerItem>
              <Verdict
                kicker="Não"
                title="Fora da nossa stack"
                body="Um motivo, em uma linha. Vai para o resumo da rodada. Não vira alerta."
              />
            </StaggerItem>
            <StaggerItem>
              <Verdict
                kicker="Incerto"
                title="Sem acesso"
                body="Conector sem permissão não vira não. O time vê a dúvida, não um alívio falso."
              />
            </StaggerItem>
            <StaggerItem>
              <Verdict
                kicker="Sim"
                title="Com evidência"
                body="Repositório, arquivo, versão ou recurso Cloudflare. Com correção sugerida, urgência e um prompt pronto."
              />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 lg:px-12" aria-labelledby="busca-title">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-28">
            <Reveal>
              <Kicker>4 · A busca</Kicker>
              <H2 id="busca-title">konflux. Zero arquivos.</H2>
              <Prose>
                <p>
                  Numa rodada de oito CVEs, quatro eram do konflux-ci. Todas HIGH, de 8.0 a 8.8.
                  Nota alta o bastante para alguém largar o que estava fazendo.
                </p>
                <p>
                  O Sentinela não largou nada. Procurou konflux na organização GitHub da UNFLD. Não
                  encontrou nenhum arquivo. Nenhum arquivo, nenhuma exposição.
                </p>
                <p>
                  A janela ao lado mostra o formato dessa busca e os lugares que uma avaliação
                  completa abre. Não é um log copiado. O zero é o resultado real.
                </p>
                <Lead>Só faltava contar isso ao time. Do jeito certo.</Lead>
              </Prose>
            </Reveal>
          </div>
          <div className="min-w-0">
            <CodeBlock code={SCAN} filename="busca na organização · konflux" />
          </div>
        </div>
      </section>

      <section
        className="mt-20 bg-bg-elevated px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        aria-labelledby="aviso-title"
      >
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>5 · O aviso</Kicker>
            <H2 id="aviso-title">Um e-mail. Ou uma linha. Ou nada.</H2>
            <Prose>
              <p>
                O aviso chega por e-mail, com a marca da UNFLD, enviado pelo Resend para o time
                técnico. Cada CVE avaliada a fundo vira um alerta próprio. O assunto diz tudo antes
                de abrir:
              </p>
            </Prose>
            <p className="mt-6 max-w-3xl font-mono text-[13px] leading-relaxed break-words text-fg sm:text-[14px]">
              [CVE] CVE-XXXX-YYYY · Exposto: Sim/Não/Incerto · DD/MM/YYYY
            </p>
            <Prose>
              <p>
                Dentro: resumo, CVSS, link, exposição e a evidência (repositório, arquivo, versão,
                recurso Cloudflare). Se houver exposição, vêm também a correção sugerida, a urgência
                (crítica, alta, média ou baixa, com o porquê) e um prompt em inglês, pronto para
                colar num agente de código.
              </p>
              <p>
                O que foi descartado vai junto, num único resumo da rodada. Uma linha por CVE. Se
                não há nada novo, não chega nada.
              </p>
              <Lead>
                Abaixo, o formato desses dois e-mails, com o que as rodadas reais acharam.
              </Lead>
            </Prose>
          </Reveal>

          <div className="mt-14 grid min-w-0 gap-6 lg:grid-cols-2">
            <EmailFrame
              eyebrow="Alerta · avaliação profunda"
              subject="konflux-ci · Exposto: Não"
              note="Quatro CVEs HIGH, de 8.0 a 8.8. No e-mail de verdade, o assunto leva o identificador CVE. Aqui ele fica de fora, para não inventar um."
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
                v="Só entram quando há exposição. Aqui, não houve."
              />
            </EmailFrame>
            <EmailFrame
              eyebrow="Resumo da rodada"
              subject="14 CVEs · nenhuma exposta"
              note="Uma linha por CVE descartada. Aqui aparecem os nomes que eu posso citar. O e-mail lista a rodada inteira."
            >
              <Field k="Ninja Forms" v="plugin WordPress · não exposto" />
              <Field k="GNOME Epiphany" v="não exposto" />
              <Field k="json-glib" v="RHEL / OpenShift · não exposto" />
              <Field k="WebDyne" v="Perl · não exposto" />
              <Field k="As outras da rodada" v="uma linha cada · o mesmo veredito" />
            </EmailFrame>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="rodada-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>A rodada inteira</Kicker>
            <H2 id="rodada-title">Cinco passos. Sempre na mesma ordem.</H2>
            <Prose>
              <p>
                Ler, conferir, triar, procurar, avisar. Uma rodada é isso, do começo ao fim. Sem
                atalho e sem pressa.
              </p>
              <Lead>Bonito no papel. Agora, o que aconteceu de verdade.</Lead>
            </Prose>
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

      <section className="px-5 pb-8 sm:px-8 lg:px-12" aria-labelledby="prova-title">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Kicker>A prova</Kicker>
              <H2 id="prova-title">Três rodadas. Três respostas com motivo.</H2>
              <Prose>
                <p>
                  Fim de outubro, começo de novembro de 2026. Três rodadas trouxeram CVE nova, nesta
                  ordem. As outras não encontraram nada e ficaram em silêncio.
                </p>
              </Prose>
            </Reveal>
          </div>
          <div className="min-w-0 space-y-16">
            <Round
              n="14"
              title="Catorze CVEs. Nenhuma nossa."
              body="Plugins de WordPress e WooCommerce, entre eles o Ninja Forms. GNOME Epiphany. json-glib no RHEL e no OpenShift. WebDyne, para Perl. Nenhuma tocava a UNFLD. Uma linha cada, no resumo da rodada."
            />
            <Round
              n="8"
              title="Oito CVEs. Quatro com nota alta."
              body="Quatro eram do konflux-ci, HIGH, de 8.0 a 8.8. O Sentinela procurou konflux na nossa organização no GitHub. Nada. As outras quatro eram plugins de WordPress. Também fora."
            />
            <Round
              n="29"
              title="Vinte e nove CVEs. Uma de 9.8."
              body="Plugins de WordPress, de 4.3 MEDIUM a 9.8 CRITICAL. Entre eles, weDevs Project Manager e SimpleForm. O 9.8 era do Uncanny Toolkit for LearnDash. Nenhuma das 29 estava exposta."
            />
            <Reveal>
              <div className="border-t border-border pt-8">
                <p className="max-w-xl text-[16px] leading-[1.7] text-fg">
                  Se o seu time também não tem tempo de ler CVE, este é o trabalho que a UNFLD faz.
                </p>
                <Ctas />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="virada-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl border-t border-border pt-20 sm:pt-28">
          <Reveal>
            <Kicker>A virada · 1º de novembro de 2026</Kicker>
            <H2 id="virada-title">E então o problema veio de outro lugar.</H2>
            <Prose>
              <p>
                No dia 1º de novembro, a Vercel parou de aceitar builds novos deste site. O motivo:
                uma CVE de XSS conhecida, CVE-2026-102989, no @tanstack/react-start 1.168.48. Uma
                dependência nossa.
              </p>
              <p>
                Quem percebeu não foi o Sentinela. Foi outro agente, o que cuida deste site. Ele
                achou o bloqueio. O pull request corrigido do Dependabot entrou com a minha
                aprovação, e a produção voltou assim que ele entrou. Os outros pull requests de
                dependência foram rebaseados e entraram depois que as previews passaram. Tudo no
                mesmo dia.
              </p>
              <p>Não foi sorte. É o desenho. Um agente por trabalho, cada um no seu pedaço.</p>
              <Lead>O dia, em quatro tempos.</Lead>
            </Prose>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["O bloqueio", "A Vercel recusou builds novos deste site."],
              ["CVE-2026-102989", "XSS no @tanstack/react-start 1.168.48."],
              [
                "O bot do site",
                "Achou o bloqueio. O patch do Dependabot entrou com a minha aprovação.",
              ],
              [
                "O mesmo dia",
                "A produção voltou assim que o patch entrou. O resto entrou com as previews no verde.",
              ],
            ].map(([title, body]) => (
              <li key={title} className="min-w-0 bg-bg p-6">
                <h3 className="font-display text-xl font-medium tracking-tight">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-12" aria-labelledby="mudou-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>O que mudou</Kicker>
            <H2 id="mudou-title">Menos rodadas. Menos ruído. A mesma cobertura.</H2>
            <Prose>
              <p>
                O Sentinela começou rodando a cada 30 minutos, dia e noite. Como cada rodada parte
                do último post lido, rodar mais vezes não trazia nenhuma CVE a mais. Só repetia a
                leitura.
              </p>
              <p>
                Hoje ele roda duas vezes por dia útil, às 9h e às 17h, horário de Brasília. O time
                técnico recebe os e-mails. Eu só sou chamado no chat em três casos: exposição real,
                urgência crítica ou alta, ou falha do próprio agente.
              </p>
              <p>Nos outros dias, silêncio. E silêncio, aqui, quer dizer que alguém leu.</p>
              <Lead>O mesmo dia, antes e depois.</Lead>
            </Prose>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2">
            <div className="bg-bg p-6 sm:p-8">
              <p className="font-mono text-[12px] text-subtle">Antes · todos os dias</p>
              <p className="mt-4 font-display text-3xl font-medium tracking-tight">
                A cada 30 minutos
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                Dia e noite, fim de semana incluído. Cada rodada já pegava o que tinha ficado para
                trás. O intervalo curto só repetia a leitura.
              </p>
              <HourTicks mode="dense" />
            </div>
            <div className="bg-bg p-6 sm:p-8">
              <p className="font-mono text-[12px] text-subtle">Agora · seg a sex · Brasília</p>
              <p className="mt-4 font-display text-3xl font-medium tracking-tight">9h e 17h</p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                Segunda às 9h lê o fim de semana. Na maioria dos dias, não há nada novo. E o
                Sentinela fica quieto.
              </p>
              <HourTicks mode="sparse" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="numeros-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>Em números</Kicker>
            <H2 id="numeros-title">Seis números. Todos aconteceram.</H2>
            <Prose>
              <Lead>
                Nenhum arredondado. Nenhum somado. Só o que as rodadas e a rotina mostraram.
              </Lead>
            </Prose>
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

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12" aria-labelledby="contato-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl border-t border-border pt-20 sm:pt-28">
          <Reveal>
            <Kicker>A sua empresa</Kicker>
            <H2 id="contato-title">A UNFLD constrói este agente para a sua empresa.</H2>
            <Prose>
              <p>
                O Sentinela é como a UNFLD protege o que opera. Fonte oficial. Memória do último
                item lido. Busca que só lê. Veredito com evidência. Silêncio quando não há nada.
              </p>
              <p>
                Podemos construir e operar um agente assim para você. Nos seus repositórios, na sua
                infraestrutura, com o seu time e os seus critérios de urgência. Um agente que vigia
                a stack para que o seu time não precise.
              </p>
              <Lead>Conte para a gente o que ninguém aí tem tempo de olhar.</Lead>
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
