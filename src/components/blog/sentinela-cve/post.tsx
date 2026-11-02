import { CodeBlock } from "@/components/site/code-block";
import { BtnLink } from "@/components/site/buttons";
import { Mark } from "@/components/site/logo";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { SentinelaHero } from "./hero";

const INVENTORY = `# Sentinela · inventário somente leitura
# foco: o que está em produção e em uso

lockfiles            # com dependências transitivas
imagens Docker
Cloudflare Workers   # configurações
Vercel               # configurações

# ecossistemas
npm
PyPI
GitHub Actions

# correspondência: pacote + versão, exata
# faltou dado: Incerto
`;

const STEPS = [
  {
    n: "01",
    title: "Ouvir",
    body: "O @CVEnew avisa rápido. As fontes oficiais confirmam: OSV, GitHub Advisory, NVD, CISA KEV e EPSS.",
  },
  {
    n: "02",
    title: "Cruzar",
    body: "Pacote e versão exatos contra o inventário: lockfiles, imagens Docker, Cloudflare Workers e Vercel.",
  },
  {
    n: "03",
    title: "Priorizar",
    body: "CVSS, EPSS, KEV e exploração conhecida. Ação imediata, ação, monitorar ou não exposto. Faltou dado: incerto.",
  },
  {
    n: "04",
    title: "Avisar",
    body: "E-mail HTML com a identidade da UNFLD, compatível com o modo escuro, com a evidência de cada item.",
  },
  {
    n: "05",
    title: "Corrigir",
    body: "Exposição confirmada: um agente de código prepara a correção, valida o build e entrega em PR para revisão humana.",
  },
] as const;

const BANDS = [
  {
    kicker: "Ação imediata",
    title: "Agir já",
    body: "O sinal mais forte da combinação. Vai para o topo da fila.",
  },
  {
    kicker: "Ação",
    title: "Agir",
    body: "Pede correção, sem a pressa da faixa de cima.",
  },
  {
    kicker: "Monitorar",
    title: "Acompanhar",
    body: "Ainda não pede correção. Fica sob observação.",
  },
  {
    kicker: "Não exposto",
    title: "Fora da nossa stack",
    body: "Pacote ou versão que não rodamos. Uma linha, com o motivo.",
  },
] as const;

const EVOLUTION = [
  {
    label: "Fonte",
    before: "O @CVEnew, no X.",
    now: "OSV, GitHub Advisory, NVD, CISA KEV e EPSS. O X só avisa rápido.",
  },
  {
    label: "Ritmo",
    before: "A cada 30 minutos. Depois, 9h e 17h em dia útil.",
    now: "9h e 17h em dia útil, mais uma checagem por hora, 24/7, para KEV e CVSS 9.0 ou mais.",
  },
  {
    label: "O que ele olha",
    before:
      "package.json, lockfiles, Dockerfiles, workflows e wrangler.toml no GitHub. Workers e Pages na Cloudflare.",
    now: "Lockfiles com dependências transitivas, imagens Docker, Cloudflare Workers e Vercel. npm, PyPI e GitHub Actions.",
  },
  {
    label: "Prioridade",
    before: "CVSS e uma urgência por alerta: crítica, alta, média ou baixa.",
    now: "CVSS, EPSS, KEV e exploração conhecida, em quatro faixas: ação imediata, ação, monitorar, não exposto.",
  },
  {
    label: "Com exposição",
    before: "Uma correção sugerida e um prompt em inglês para colar.",
    now: "Um agente de código do Cursor prepara a correção, valida o build e entrega em PR para revisão humana.",
  },
] as const;

const LOOP = [
  ["Exposição confirmada", "Pacote e versão batem, com evidência."],
  ["Correção preparada", "Um agente de código do Cursor escreve a mudança."],
  ["Build validado", "A correção só segue com o build passando."],
  ["Revisão humana", "Entregue em PR. Merge, só por uma pessoa do time."],
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
    value: "5",
    label: "fontes oficiais",
    note: "OSV, GitHub Advisory, NVD, CISA KEV e EPSS. O X virou só um sinal de velocidade.",
  },
  {
    value: "1 h",
    label: "checagem extra, 24/7",
    note: "Vigia o KEV da CISA e CVEs novas com CVSS 9.0 ou mais. A rodada completa segue às 9h e às 17h, de segunda a sexta.",
  },
  {
    value: "6",
    label: "projetos com correção pronta",
    note: "Na primeira execução, com o build passando. Cada uma espera revisão humana.",
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
                  mudamos a pergunta. Não quem tem tempo. O que pode fazer isso por nós, todo dia,
                  sem esquecer nada.
                </p>
                <p>
                  A resposta foi um agente no Grok Bot, com uma rotina e um trabalho só: ler cada
                  vulnerabilidade nova, confirmar em fonte oficial e dizer, com evidência, se ela
                  toca o que operamos. Demos a ele o nome de Sentinela CVE. Ele começou simples. E
                  cresceu.
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
            <H2 id="fonte-title">A pressa vem do X. A verdade vem das fontes oficiais.</H2>
            <Prose>
              <p>
                A primeira versão lia o @CVEnew, no X. Funcionava. Mas um post é um aviso, não um
                registro.
              </p>
              <p>
                Hoje, quem decide são as fontes oficiais: OSV, GitHub Advisory, NVD, o catálogo KEV
                da CISA e o EPSS, da FIRST. Cada item passa por elas antes de virar qualquer
                resposta.
              </p>
              <p>
                O @CVEnew continua no radar, como sinal de velocidade. Ele faz o Sentinela olhar
                antes. Não prova nada sozinho.
              </p>
              <Lead>
                Ao lado, três rodadas reais da primeira versão, quando o @CVEnew ainda era a porta
                de entrada. Leia os nomes. Agora imagine alguém do time fazendo isso, um por um.
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
                Para cada item, o Sentinela busca o registro em OSV, GitHub Advisory e NVD. Confere
                se ele está no KEV da CISA, o catálogo de vulnerabilidades com exploração conhecida.
                E lê o EPSS, a estimativa da FIRST para a chance de exploração.
              </p>
              <p>
                Se um dado não está escrito, ele não preenche. Nem CVSS, nem versão, nem evidência.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <p className="mt-16 max-w-4xl border-t border-border pt-12 font-display text-[clamp(1.7rem,3.4vw,2.8rem)] font-medium leading-[1.15] tracking-[-0.035em]">
              Fonte oficial. Versão exata. Nada alterado.
            </p>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-fg">
              Com o registro na mão, sobram duas perguntas. Isto é com a gente? E quanto pesa?
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="triagem-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>3 · A triagem</Kicker>
            <H2 id="triagem-title">Quatro faixas. Nenhuma por educação.</H2>
            <Prose>
              <p>
                Primeiro, se a gente usa. A correspondência é exata, por pacote e por versão. Sem
                palpite.
              </p>
              <p>
                Depois, o peso. Nota alta sozinha não decide mais nada. O Sentinela junta quatro
                sinais: o CVSS, o EPSS, a presença no KEV e a exploração conhecida. E põe cada item
                numa de quatro faixas.
              </p>
              <p>
                Se falta dado para fechar a conta, a resposta é incerto. Nunca não. Prefiro uma
                dúvida honesta a um alívio falso.
              </p>
              <Lead>Quatro faixas. E uma resposta para quando falta dado.</Lead>
            </Prose>
          </Reveal>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {BANDS.map((band) => (
              <StaggerItem key={band.kicker}>
                <Verdict kicker={band.kicker} title={band.title} body={band.body} />
              </StaggerItem>
            ))}
            <StaggerItem className="sm:col-span-2 lg:col-span-4">
              <div className="flex h-full min-w-0 flex-col gap-3 bg-bg p-6 sm:flex-row sm:items-baseline sm:gap-8 sm:p-8">
                <p className="font-display text-[clamp(2rem,3.4vw,2.8rem)] font-medium leading-none tracking-[-0.04em]">
                  Incerto
                </p>
                <p className="max-w-2xl text-[14px] leading-relaxed text-muted">
                  Faltou dado, ou um conector está sem acesso. A dúvida aparece no alerta. Nunca
                  vira não exposto.
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 lg:px-12" aria-labelledby="busca-title">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-28">
            <Reveal>
              <Kicker>4 · A busca</Kicker>
              <H2 id="busca-title">Ele sabe o que roda. Até a dependência da dependência.</H2>
              <Prose>
                <p>
                  Para responder se é com a gente, o Sentinela precisa de um inventário. Hoje ele lê
                  os lockfiles, com as dependências transitivas. As imagens Docker. As configurações
                  de Cloudflare Workers e da Vercel. Em npm, PyPI e GitHub Actions.
                </p>
                <p>
                  O foco é o que está em produção e em uso. Repositório arquivado ou parado fica de
                  fora, por escolha. A cobertura não é total, e eu prefiro dizer isso aqui.
                </p>
                <p>
                  Tudo somente leitura. Ele olha e não toca. A janela ao lado mostra o formato do
                  inventário. Não é um log copiado.
                </p>
                <Lead>Achar é metade do trabalho. A outra metade é contar ao time.</Lead>
              </Prose>
            </Reveal>
          </div>
          <div className="min-w-0">
            <CodeBlock code={INVENTORY} filename="inventário · somente leitura" />
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
            <H2 id="aviso-title">Um e-mail que diz o que fazer.</H2>
            <Prose>
              <p>
                O aviso continua chegando por e-mail HTML, com a identidade da UNFLD e compatível
                com o modo escuro. Cada alerta traz a evidência: o pacote, a versão e onde ele
                aparece. Quando falta dado, o alerta diz incerto.
              </p>
              <p>
                Os dois e-mails abaixo são da primeira versão, com o que as rodadas reais acharam. O
                formato evoluiu. O princípio é o mesmo: evidência, ou a dúvida dita com todas as
                letras.
              </p>
              <Lead>E quando a exposição se confirma, o e-mail não é mais o fim da história.</Lead>
            </Prose>
          </Reveal>

          <div className="mt-14 grid min-w-0 gap-6 lg:grid-cols-2">
            <EmailFrame
              eyebrow="Alerta · primeira versão"
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
                v="Só entravam quando havia exposição. Aqui, não houve."
              />
            </EmailFrame>
            <EmailFrame
              eyebrow="Resumo da rodada · primeira versão"
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

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="ciclo-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>6 · O ciclo fechado</Kicker>
            <H2 id="ciclo-title">Da exposição à correção pronta para revisão.</H2>
            <Prose>
              <p>
                Avisar já não basta. Quando a exposição se confirma, um agente de código do Cursor
                prepara a correção, valida o build e entrega tudo em um pull request para revisão
                humana.
              </p>
              <p>
                Ele nunca faz merge sozinho. Não abre issue. Quem decide continua sendo uma pessoa
                do time.
              </p>
              <p>
                Na primeira execução, as correções de 6 projetos ficaram prontas, com o build
                passando. Para o pull request abrir sozinho, falta uma permissão no GitHub. Até lá,
                a correção fica pronta e espera revisão.
              </p>
              <Lead>Quatro passos, da evidência à mão de quem revisa.</Lead>
            </Prose>
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {LOOP.map(([title, body], index) => (
              <StaggerItem key={title}>
                <div className="flex h-full min-w-0 flex-col bg-bg p-6">
                  <p className="font-mono text-[12px] text-subtle">0{index + 1}</p>
                  <h3 className="mt-4 font-display text-xl font-medium tracking-tight">{title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12" aria-labelledby="rodada-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>A rodada inteira</Kicker>
            <H2 id="rodada-title">Cinco passos. Sempre na mesma ordem.</H2>
            <Prose>
              <p>
                Ouvir, cruzar, priorizar, avisar, corrigir. A rodada completa roda de segunda a
                sexta, às 9h e às 17h, horário de Brasília.
              </p>
              <Lead>
                Bonito no papel. Agora, o que já aconteceu de verdade, ainda na primeira versão.
              </Lead>
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
            <H2 id="mudou-title">Uma rodada completa. E um olho aberto a toda hora.</H2>
            <Prose>
              <p>
                No começo, o Sentinela rodava a cada 30 minutos, dia e noite. Como cada rodada
                partia do último post lido, rodar mais vezes não trazia nenhuma CVE a mais. Só
                repetia a leitura. Passamos para duas rodadas completas por dia útil.
              </p>
              <p>
                Hoje são dois ritmos. A rodada completa continua de segunda a sexta, às 9h e às 17h,
                horário de Brasília. E uma checagem extra roda a cada hora, 24 horas por dia, sete
                dias por semana. Ela vigia o KEV da CISA e as CVEs novas com CVSS 9.0 ou mais.
              </p>
              <p>O que pode esperar, espera a rodada. O que não pode, não espera.</p>
              <Lead>O mesmo dia, na primeira versão e agora.</Lead>
            </Prose>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2">
            <div className="bg-bg p-6 sm:p-8">
              <p className="font-mono text-[12px] text-subtle">Primeira versão · todos os dias</p>
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
              <p className="font-mono text-[12px] text-subtle">Agora · horário de Brasília</p>
              <p className="mt-4 font-display text-3xl font-medium tracking-tight">
                9h e 17h. E a cada hora.
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                Rodada completa de segunda a sexta, às 9h e às 17h. A cada hora, todos os dias, uma
                checagem extra vigia o KEV da CISA e CVEs novas com CVSS 9.0 ou mais.
              </p>
              <HourTicks mode="hybrid" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="evolucao-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>A evolução</Kicker>
            <H2 id="evolucao-title">A primeira versão avisava. A de hoje prepara a correção.</H2>
            <Prose>
              <p>
                O Sentinela não nasceu pronto. Cada rodada mostrou onde ele podia ver mais longe. E
                a gente foi ajustando.
              </p>
              <Lead>Linha por linha, o que mudou.</Lead>
            </Prose>
          </Reveal>
          <Stagger className="mt-12 overflow-hidden rounded-xl border border-border">
            <div
              className="hidden grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)] gap-px bg-border lg:grid"
              aria-hidden="true"
            >
              <p className="bg-bg px-6 py-4 font-mono text-[11px] text-subtle" />
              <p className="bg-bg px-6 py-4 font-mono text-[11px] text-subtle">Primeira versão</p>
              <p className="bg-bg px-6 py-4 font-mono text-[11px] text-subtle">Hoje</p>
            </div>
            <dl className="grid gap-px bg-border">
              {EVOLUTION.map((row) => (
                <StaggerItem
                  key={row.label}
                  className="grid gap-px bg-border lg:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)]"
                >
                  <dt className="bg-bg px-6 pt-6 font-display text-lg font-medium tracking-tight lg:py-6">
                    {row.label}
                  </dt>
                  <dd className="bg-bg px-6 py-4 text-[14px] leading-relaxed text-muted lg:py-6">
                    <span className="mb-1 block font-mono text-[11px] text-subtle lg:hidden">
                      Primeira versão
                    </span>
                    {row.before}
                  </dd>
                  <dd className="bg-bg px-6 pb-6 pt-4 text-[14px] leading-relaxed text-fg lg:py-6">
                    <span className="mb-1 block font-mono text-[11px] text-subtle lg:hidden">
                      Hoje
                    </span>
                    {row.now}
                  </dd>
                </StaggerItem>
              ))}
            </dl>
          </Stagger>
          <Reveal>
            <p className="mt-10 max-w-2xl text-[16px] leading-[1.7] text-muted">
              O que não mudou: só leitura, evidência em cada alerta, e incerto quando falta dado.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12" aria-labelledby="numeros-title">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <Reveal>
            <Kicker>Em números</Kicker>
            <H2 id="numeros-title">Seis números. Todos reais.</H2>
            <Prose>
              <Lead>
                Nenhum arredondado. Nenhum somado. Só o que as rodadas e a rotina mostram.
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
                O Sentinela é como a UNFLD protege o que opera. Fontes oficiais. Versão exata.
                Leitura sem tocar em nada. Prioridade com quatro sinais. Correção pronta para
                revisão humana.
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
      <p className="font-display text-[clamp(2rem,3.4vw,2.8rem)] font-medium leading-none tracking-[-0.04em]">
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

function HourTicks({ mode }: { mode: "dense" | "hybrid" }) {
  const hours = Array.from({ length: 24 }, (_, hour) => hour);
  return (
    <div className="mt-8 flex items-end gap-1" aria-hidden="true">
      {hours.map((hour) => {
        const full = mode === "hybrid" && (hour === 9 || hour === 17);
        return (
          <span key={hour} className="flex min-w-0 flex-1 flex-col items-center">
            <span
              className={
                full
                  ? "h-8 w-px bg-fg"
                  : mode === "dense"
                    ? "h-5 w-px bg-fg/35"
                    : "h-3 w-px bg-fg/35"
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
