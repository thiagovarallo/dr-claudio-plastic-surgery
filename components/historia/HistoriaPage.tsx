import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  ArrowDown,
  Award,
  Building2,
  Check,
  Cross,
  GraduationCap,
  HeartHandshake,
  Microscope,
  Stethoscope,
} from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { CtaSection } from "@/components/ui/CtaSection";
import { CurriculumTabs } from "@/components/ui/curriculum-tabs";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/ui/timeline";
import { historiaPage } from "@/content/historia";
import { localizeContent, translateContent } from "@/i18n/content";

const formationIcons = [GraduationCap, Cross, Stethoscope, Microscope] as const;
const practiceIcons = [HeartHandshake, Stethoscope, Building2] as const;

export function HistoriaPage() {
  const locale = useLocale();
  const page = localizeContent(locale, historiaPage);
  const tr = (text: string) => translateContent(locale, text);

  return (
    <main className="overflow-x-clip bg-white text-ink">
      <section
        id="inicio"
        aria-labelledby="historia-hero-title"
        className="relative isolate flex min-h-[760px] overflow-hidden bg-navy-deep text-white lg:min-h-[820px]"
      >
        <Image
          src="/brand/hero-contato-jaleco.png"
          alt={tr("Dr. Claudio Eduardo em seu consultório")}
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-[68%_top] sm:object-top"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,var(--blue-dark)_0%,color-mix(in_srgb,var(--blue-dark)_90%,transparent)_28%,color-mix(in_srgb,var(--blue-dark)_42%,transparent)_42%,transparent_54%)] max-sm:bg-[linear-gradient(90deg,color-mix(in_srgb,var(--blue-dark)_92%,transparent)_0%,color-mix(in_srgb,var(--blue-dark)_70%,transparent)_65%,color-mix(in_srgb,var(--blue-dark)_25%,transparent)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,color-mix(in_srgb,var(--blue-dark)_65%,transparent)_0%,transparent_18%)]" />
        <div className="hero-aurora absolute -left-32 top-1/3 -z-10 size-96 rounded-full bg-brand/15 blur-3xl" />

        <div className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-8 pt-36 sm:px-8 lg:pt-40">
          <div className="max-w-[720px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand sm:text-xs">
              {page.hero.eyebrow}
            </p>
            <AnimatedText
              as="h1"
              id="historia-hero-title"
              delay={0.08}
              text={page.hero.title}
              className="mt-6 font-display text-[50px] font-medium leading-[0.92] tracking-[-0.035em] text-white sm:text-7xl lg:text-[88px]"
            />
            <div className="animate-fade-up [animation-delay:560ms]">
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                {page.hero.text}
              </p>
            </div>
            <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-5 sm:gap-6 [animation-delay:680ms]">
              <Link
                href="#trajetoria"
                className="inline-flex h-12 items-center gap-3 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
              >
                {tr("Percorrer a trajetória")}
                <ArrowDown className="size-4" />
              </Link>
              <span className="text-xs font-semibold tracking-wide text-white/60">
                CRM 14.706-SC · RQE 23.737
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-[24px] border border-white/12 bg-white/12 backdrop-blur-xl sm:grid-cols-3">
            {page.metrics.map((metric) => (
              <div key={metric.value} className="bg-navy-deep/45 px-6 py-5 sm:px-7 sm:py-6">
                <strong className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {metric.value}
                </strong>
                <p className="mt-1 text-[11px] leading-4 text-white/55">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-44 top-12 size-[420px] rounded-full bg-brand/7 blur-3xl" />
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">{tr("O começo de tudo")}</p>
            <p className="mt-5 font-display text-[66px] font-medium leading-none text-ink/10 sm:text-[92px]">
              1996
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="font-display text-[42px] font-medium leading-[1.02] tracking-[-0.025em] text-ink sm:text-[58px]">{tr("A medicina abriu o caminho. A busca por excelência definiu a direção.")}</h2>
            <div className="mt-8 grid gap-5 text-sm leading-7 text-slate-600 sm:grid-cols-2">
              <p>{tr("Dr. Cláudio Eduardo Pereira de Souza formou-se em Medicina pela Universidade Severino Sombra, em Vassouras, no Rio de Janeiro. Logo depois, mudou-se para São Paulo para aprofundar sua formação cirúrgica.")}</p>
              <p>{tr("Foram dez anos na capital paulista e, somando graduação e pós-graduações, doze anos de estudo superior. Uma base que hoje orienta decisões cuidadosas, técnicas e individualizadas.")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="formacao" className="relative scroll-mt-20 overflow-hidden bg-[linear-gradient(135deg,var(--blue-dark)_0%,var(--blue)_100%)] py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 size-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand">{tr("Formação acadêmica")}</p>
            <h2 className="mt-5 font-display text-[44px] font-medium leading-none sm:text-[64px]">{tr("Conhecimento construído em camadas.")}</h2>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {page.formation.map((item, index) => {
              const Icon = formationIcons[index];
              return (
                <Reveal key={item.number} delay={index * 0.07}>
                  <article className="group relative min-h-[310px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-7 transition duration-500 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.1] sm:p-9">
                    <div className="flex items-start justify-between gap-5">
                      <span className="text-xs font-bold tracking-[0.28em] text-white/35">
                        {item.number}
                      </span>
                      <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/8 text-brand transition group-hover:rotate-3 group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-5" />
                      </span>
                    </div>
                    <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                      {item.period}
                    </p>
                    <h3 className="mt-3 font-display text-4xl font-medium leading-none text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-xs font-semibold leading-5 text-white/68">{item.place}</p>
                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/52">{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="trajetoria" className="scroll-mt-20">
        <Timeline
          eyebrow={tr("Linha do tempo")}
          heading={tr("Uma vida dedicada à cirurgia.")}
          description={tr("Da sala de aula ao centro cirúrgico, cada experiência contribuiu para uma prática médica mais completa, responsável e humana.")}
          data={page.timeline.map((item, index) => ({
            title: item.year,
            content: (
              <article className="group relative max-w-2xl overflow-hidden rounded-[26px] border border-blue/15 bg-white p-6 shadow-[0_20px_50px_-10px_rgba(27,85,121,0.16),0_8px_20px_-6px_rgba(0,121,181,0.08)] transition duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_26px_65px_-10px_rgba(27,85,121,0.22)] sm:p-8">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand to-blue-light opacity-0 transition group-hover:opacity-100" />
                <p className="text-[9px] font-bold uppercase tracking-[0.38em] text-brand-deep">
                  {tr("Marco")} {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-base font-extrabold leading-6 text-blue-dark sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{item.text}</p>
              </article>
            ),
          }))}
        />
      </section>

      <section id="experiencia" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">{tr("Experiência em prática")}</p>
            <h2 className="mt-5 font-display text-[44px] font-medium leading-none text-ink sm:text-[62px]">{tr("Técnica ampla. Cuidado individual.")}</h2>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {page.practice.map((item, index) => {
              const Icon = practiceIcons[index];
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="h-full rounded-[26px] border border-blue/15 bg-white p-7 shadow-[0_20px_50px_-10px_rgba(27,85,121,0.15),0_8px_20px_-6px_rgba(0,121,181,0.08)] transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_26px_65px_-10px_rgba(27,85,121,0.22)] sm:p-8">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand/12 text-brand-deep">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-10 font-display text-[30px] font-semibold leading-none text-blue-dark">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-ink-soft">{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[30px] border border-blue/15 bg-surface-tint shadow-[0_24px_60px_-12px_rgba(27,85,121,0.16)] lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="p-7 sm:p-10 lg:p-14">
              <Award className="size-8 text-brand-deep" />
              <h3 className="mt-8 font-display text-4xl font-medium leading-none text-blue-dark sm:text-5xl">{tr("Credenciais que sustentam a prática.")}</h3>
              <p className="mt-5 text-sm leading-7 text-ink-soft">{tr("Formação reconhecida, participação em sociedades médicas e atuação contínua em instituições de saúde.")}</p>
            </Reveal>
            <div className="border-t border-blue/12 bg-white/80 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <ul className="space-y-5">
                {page.credentials.map((credential, index) => (
                  <Reveal key={credential} delay={index * 0.04}>
                    <li className="flex gap-4 text-sm font-semibold leading-6 text-ink-soft">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      {credential}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CurriculumTabs />

      <CtaSection />
    </main>
  );
}
