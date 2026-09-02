import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Reveal } from "@/components/ui/Reveal";
import { surgeries } from "@/content/home";
import { WHATSAPP_HREF } from "@/content/site";

const categories = ["Estética", "Íntima", "Afirmação de gênero"] as const;

const surgeryMeta: Record<string, { category: (typeof categories)[number]; number: string }> = {
  "Aumento peniano": { category: "Íntima", number: "01" },
  "Cirurgia íntima feminina": { category: "Íntima", number: "02" },
  "Redesignação sexual": { category: "Afirmação de gênero", number: "03" },
  "Mastectomia masculinizadora": { category: "Afirmação de gênero", number: "04" },
  "Prótese de mama": { category: "Estética", number: "05" },
  Gluteoplastia: { category: "Estética", number: "06" },
};

const careSteps = [
  "Consulta e escuta individual",
  "Indicação médica responsável",
  "Planejamento pré-operatório",
  "Acompanhamento na recuperação",
] as const;

export function CirurgiasIndexPage() {
  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />

      <main>
        <section className="relative isolate min-h-[780px] overflow-hidden bg-navy-deep text-white">
          <Image
            src="/brand/hero-clinic.jpg"
            alt="Dr. Claudio Eduardo em seu consultório"
            fill
            priority
            sizes="100vw"
            className="-z-30 object-cover object-[68%_center]"
          />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(8,31,48,0.98)_0%,rgba(8,31,48,0.91)_42%,rgba(8,31,48,0.38)_78%,rgba(8,31,48,0.24)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-20 h-80 bg-[linear-gradient(0deg,#081f30_0%,rgba(8,31,48,0)_100%)]" />
          <div className="hero-aurora absolute -left-48 top-1/4 -z-10 size-[520px] rounded-full bg-brand/16 blur-3xl" />
          <div className="hero-grain absolute inset-0 -z-10 mix-blend-overlay" />

          <div className="mx-auto flex min-h-[780px] max-w-6xl flex-col justify-center px-5 pb-28 pt-32 sm:px-8 lg:pb-32">
            <div className="animate-fade-up max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/75 backdrop-blur-md">
                <Sparkles className="size-3.5 text-brand" />
                Cuidado em cada etapa
              </div>
              <h1 className="mt-7 font-display text-[58px] font-medium leading-[0.9] tracking-[-0.03em] sm:text-7xl lg:text-[96px]">
                Cirurgias com
                <span className="block text-brand">precisão e cuidado.</span>
              </h1>
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Procedimentos estéticos, íntimos e de afirmação de gênero planejados a partir da
                sua anatomia, do seu momento e dos seus objetivos.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#procedimentos"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
                >
                  Explorar cirurgias
                  <ArrowDown className="size-4" />
                </Link>
                <Link
                  href={WHATSAPP_HREF}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/8"
                >
                  Agendar avaliação
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy-deep/35 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                Especialidades
              </span>
              {categories.map((category) => (
                <span key={category} className="text-xs font-semibold text-white/68">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="procedimentos" className="scroll-mt-16 bg-[#f4f8fa] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.38em] text-brand-deep">
                  Procedimentos
                </p>
                <h2 className="mt-3 max-w-md font-display text-5xl font-medium leading-[0.95] sm:text-6xl">
                  Possibilidades para cada jornada
                </h2>
              </Reveal>
              <Reveal delay={0.08} className="lg:justify-self-end">
                <p className="max-w-lg text-sm leading-7 text-ink-soft/70">
                  Cada cirurgia começa com uma conversa. A avaliação médica considera histórico de
                  saúde, anatomia, expectativas e segurança para construir uma indicação realmente
                  individual.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
              {surgeries.map((surgery, index) => {
                const meta = surgeryMeta[surgery.title];
                const external = surgery.href.startsWith("http");
                const featured = index === 0 || index === 1;

                return (
                  <Reveal
                    key={surgery.title}
                    delay={(index % 3) * 0.06}
                    className="lg:col-span-6"
                  >
                    <article
                      className={`group relative isolate h-full min-h-[430px] overflow-hidden rounded-[32px] bg-navy-deep shadow-[0_20px_60px_rgba(8,31,48,0.12)] ${
                        featured ? "sm:min-h-[520px]" : "sm:min-h-[460px]"
                      }`}
                    >
                      <Image
                        src={surgery.image}
                        alt={`Imagem representativa de ${surgery.title.toLowerCase()}`}
                        fill
                        sizes={featured ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 370px, 100vw"}
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 -z-0 bg-[linear-gradient(180deg,rgba(8,31,48,0.06)_10%,rgba(8,31,48,0.18)_42%,rgba(8,31,48,0.96)_100%)]" />

                      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between p-6 sm:p-8">
                        <div className="flex items-center justify-between gap-4">
                          <span className="rounded-full border border-white/20 bg-navy-deep/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/85 backdrop-blur-lg">
                            {meta.category}
                          </span>
                          <span className="font-display text-xl text-white/65">{meta.number}</span>
                        </div>

                        <div>
                          <h3 className={`max-w-sm font-display font-medium leading-none text-white ${featured ? "text-4xl sm:text-5xl" : "text-4xl"}`}>
                            {surgery.title}
                          </h3>
                          <p className="mt-4 max-w-md text-xs leading-6 text-white/68 sm:text-sm">
                            {surgery.text}
                          </p>
                          <Link
                            href={surgery.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white"
                          >
                            {external ? "Conversar com a equipe" : "Conhecer a cirurgia"}
                            <span className="grid size-9 place-items-center rounded-full bg-brand text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy-deep">
                              <ArrowUpRight className="size-4" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-20 sm:py-28">
          <div className="pointer-events-none absolute right-[-140px] top-[-180px] size-[440px] rounded-full bg-brand/10 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[36px] bg-navy-deep p-8 text-white sm:p-12">
                <div className="absolute -right-16 -top-16 size-52 rounded-full border border-brand/25" />
                <div className="absolute -right-6 -top-6 size-28 rounded-full bg-brand/16 blur-2xl" />
                <p className="relative text-[11px] font-bold uppercase tracking-[0.36em] text-brand">
                  Segurança e clareza
                </p>
                <h2 className="relative mt-4 max-w-lg font-display text-5xl font-medium leading-[0.96] sm:text-6xl">
                  A cirurgia certa começa pela indicação certa.
                </h2>
                <p className="relative mt-6 max-w-lg text-sm leading-7 text-white/65">
                  A decisão é construída em consulta, com informação clara sobre possibilidades,
                  limites, preparo e recuperação.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-brand-deep">
                Como cuidamos de você
              </p>
              <ul className="mt-6 border-t border-ink/10">
                {careSteps.map((step, index) => (
                  <li key={step} className="flex items-center gap-4 border-b border-ink/10 py-5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand/12 text-brand-deep">
                      <Check className="size-4" strokeWidth={2.5} />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-ink">{step}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-ink/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={WHATSAPP_HREF}
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
              >
                Agendar uma avaliação
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
