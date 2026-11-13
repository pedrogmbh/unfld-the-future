import { Link } from "@tanstack/react-router";
import { useInView } from "motion/react";
import { RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { getPost } from "@/lib/blog/posts";
import { MARK_INNER_PATH, MARK_OUTER_PATH } from "@/components/site/brand-mark";
import { Section } from "@/components/site/section";
import "./story.css";

const post = getPost("hive-mind");

function FoldStudy() {
  const stage = useRef<HTMLDivElement>(null);
  const visible = useInView(stage, { once: true, amount: 0.45 });
  const [replay, setReplay] = useState(0);
  return (
    <figure className="my-14">
      <div
        ref={stage}
        className="hive-stage relative grid min-h-72 place-items-center overflow-hidden bg-accent py-8 text-bg sm:min-h-96"
      >
        <svg
          key={replay}
          viewBox="-32 -30 160 156"
          role="img"
          aria-label="Duas dobras paralelas, inclinadas a 30 graus. O vão entre elas forma a letra U."
          className={`h-64 w-full sm:h-80 ${visible ? "hive-assemble" : ""}`}
          fill="currentColor"
        >
          <path className="hive-outer" d={MARK_OUTER_PATH} />
          <path className="hive-inner" d={MARK_INNER_PATH} />
        </svg>
        <button
          type="button"
          className="absolute right-4 bottom-3 inline-flex min-h-11 items-center gap-2 px-3 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-current motion-reduce:hidden"
          onClick={() => setReplay((value) => value + 1)}
        >
          <RotateCcw size={15} aria-hidden="true" /> Rever o movimento
        </button>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        Célula aberta. As duas dobras seguem o mesmo ângulo de 30°.
      </figcaption>
    </figure>
  );
}

export function HiveMindStory() {
  return (
    <>
      <Section className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <div className="grid items-center gap-9 border-t border-border pt-10 lg:grid-cols-[1.03fr_1fr] lg:gap-14 lg:pt-12">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">Hive Mind</p>
            <h1 className="mt-5 max-w-[14ch] font-display text-[clamp(3.4rem,7.2vw,6.9rem)] leading-[0.94] tracking-[-0.025em]">
              {post.title}
            </h1>
            <p className="mt-7 max-w-md text-xl leading-relaxed text-muted">
              Tem uma pessoa de quem eu me lembro toda vez que olho para o nosso símbolo.
            </p>
          </div>
          <picture>
            <source
              type="image/avif"
              srcSet="/images/hive-fold-800.avif 800w, /images/hive-fold-1600.avif 1600w"
              sizes="(min-width: 1024px) 550px, 100vw"
            />
            <img
              src="/images/hive-fold-800.webp"
              srcSet="/images/hive-fold-800.webp 800w, /images/hive-fold-1600.webp 1600w"
              sizes="(min-width: 1024px) 550px, 100vw"
              width={1600}
              height={1067}
              fetchPriority="high"
              alt="Duas dobras cor de mel avançam em paralelo sobre um fundo escuro."
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
            />
          </picture>
        </div>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <div className="hive-reading">
          <p>
            Meu antigo CTO foi também meu mentor e meu grande parceiro de trabalho. Às vezes, cada
            um pensava por conta própria sobre o que a gente devia fazer a seguir. Quando finalmente
            conversávamos, descobríamos que os dois já tinham chegado à mesma conclusão.
          </p>
          <p>
            Ele tinha uma expressão para isso. Chamava de <em lang="en">hive mind</em>.
          </p>
          <p>
            O detalhe de que mais gosto nessa lembrança é que, até a conversa acontecer, eu só
            conhecia a minha metade da história. Ele tinha feito um percurso inteiro por conta
            própria. Descobrir por onde ele tinha ido era tão interessante quanto descobrir que
            tínhamos chegado ao mesmo lugar.
          </p>
          <p>
            Quando comecei a pensar numa nova identidade para a UNFLD, foi essa relação que eu quis
            colocar no desenho. Se o símbolo fosse aparecer sozinho na tela de um celular, sem as
            cinco letras ao lado, eu queria poder apontar para ele e contar de onde veio.
          </p>
        </div>
      </Section>

      <section className="bg-paper px-5 py-14 text-bg sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <figure>
            <img
              src="/blog/hive-mind/dobras.webp"
              width={1440}
              height={960}
              loading="lazy"
              decoding="async"
              alt="Estudo de duas tiras de papel cor de mel, dobradas lado a lado sobre uma superfície clara."
              className="aspect-[3/2] w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-shale">
              Estudo visual das dobras em Mel e Papel.
            </figcaption>
          </figure>
          <div>
            <h2 className="max-w-sm font-display text-[clamp(2.8rem,5.3vw,4.8rem)] leading-[0.99]">
              O que cabe num intervalo
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              A colmeia me interessava pelo jeito como uma célula encontra a outra. Uma parede pode
              pertencer a duas células. Pensei na nossa parceria e no quanto a forma de trabalhar de
              um acabava dando contorno ao trabalho do outro.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Havia uma segunda pista no próprio nome da empresa.{" "}
              <em lang="en">Unfolding the Future</em> carrega o gesto de desdobrar. Uma dobra de
              papel podia reunir essas duas ideias num desenho que coubesse na palma da mão.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-16 sm:py-24">
        <div className="hive-reading">
          <h2>A letra está no vão</h2>
          <p>
            Olhe primeiro para as duas faixas. A de dentro faz a curva antes da de fora. As duas
            saem da curva na mesma direção. Agora acompanhe com o olhar a faixa vazia entre elas. É
            ali que aparece o U de UNFLD.
          </p>
        </div>
        <FoldStudy />
        <div className="hive-reading">
          <p>
            Chamamos o símbolo de <strong>Célula aberta</strong>. Gosto de conseguir ver cada dobra
            separadamente e ainda assim reconhecer o que as duas formam juntas. É a parte do desenho
            em que reconheço meu mentor.
          </p>
          <p>
            Também havia algo da marca anterior que valia levar adiante. O hexágono já estava lá. Na
            nova assinatura, aquele contorno se abre e o mel entra no campo escuro que já era nosso.
            Quem conhece a UNFLD encontra um parentesco entre as duas.
          </p>
        </div>
        <figure className="mx-auto mt-12 grid max-w-4xl gap-px border border-border bg-border sm:grid-cols-2">
          <div className="grid h-48 content-between bg-bg-subtle p-6 sm:h-56 sm:p-8">
            <span className="text-sm text-muted">Assinatura anterior</span>
            <img
              src="/blog/hive-mind/anterior.webp"
              width={600}
              height={230}
              alt="Assinatura anterior da UNFLD com o símbolo hexagonal em branco."
              className="h-16 w-auto max-w-full object-contain object-left"
              loading="lazy"
            />
          </div>
          <div className="grid h-48 content-between bg-bg p-6 sm:h-56 sm:p-8">
            <span className="text-sm text-muted">Célula aberta</span>
            <img
              src="/brand/lockup.svg"
              width={427}
              height={96}
              alt="Nova assinatura da UNFLD, com a célula aberta em mel e o lettering em papel."
              className="h-16 w-auto max-w-full object-contain object-left"
              loading="lazy"
            />
          </div>
        </figure>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <div className="hive-reading border-t border-border pt-12">
          <h2>Daqui para a frente</h2>
          <p>
            Hoje, penso nessa história quando pessoas diferentes precisam construir um sistema
            juntas. Quem desenha uma tela precisa entender o que acontece com a pessoa que vai
            usá-la. Quem programa uma regra precisa saber por que aquela regra existe. Quando esse
            entendimento circula, cada um consegue tomar decisões que ajudam o trabalho do outro,
            inclusive quando os dois estão longe.
          </p>
          <p>
            É o tipo de empresa que quero construir. E é por isso que um dia, se alguém me perguntar
            o que significam aquelas duas dobras no canto da tela, vou começar a resposta falando de
            uma pessoa.
          </p>
          <p className="hive-signature">Pedro Viana</p>
          <Link
            to="/legal/brand-guidelines"
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-gold underline underline-offset-4"
          >
            Consultar o manual da marca <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>
    </>
  );
}
