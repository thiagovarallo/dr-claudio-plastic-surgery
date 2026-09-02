import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import type { CirurgiaContent } from "@/content/cirurgias/types";

type Props = Pick<CirurgiaContent, "category" | "title" | "subtitle" | "benefits" | "heroImage">;

export function CirurgiaHero({ category, title, subtitle, benefits, heroImage }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white" aria-labelledby="cirurgia-hero-title">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(70%_80%_at_18%_42%,rgba(8,191,196,0.2),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="hero-grain pointer-events-none absolute inset-0 -z-10 mix-blend-overlay" />

      <div className="mx-auto grid min-h-[790px] max-w-6xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="animate-fade-up max-w-3xl">
          <Link
            href="/cirurgias"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/75 backdrop-blur-md transition hover:border-white/35 hover:text-white"
          >
            <ArrowLeft className="size-3.5 text-brand" />
            Cirurgias
          </Link>

          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.38em] text-brand">{category}</p>
          <h1
            id="cirurgia-hero-title"
            className="mt-4 max-w-3xl font-display text-[58px] font-medium leading-[0.88] tracking-[-0.03em] text-white sm:text-7xl lg:text-[88px]"
          >
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/68 sm:text-base">{subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#formulario"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
            >
              Solicitar avaliação
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="#sobre-a-cirurgia"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/8"
            >
              Entender a cirurgia
              <ArrowDown className="size-4" />
            </Link>
          </div>

          <div className="mt-9 flex items-center gap-3 text-[11px] leading-5 text-white/52">
            <ShieldCheck className="size-5 shrink-0 text-brand" />
            <span>Atendimento confidencial · CRM 14.706-SC · RQE 23.737</span>
          </div>
        </div>

        <div className="animate-fade-up animate-delay-2 relative mx-auto w-full max-w-[480px] lg:justify-self-end">
          <div className="absolute -left-8 top-16 size-24 rounded-full border border-brand/30" />
          <div className="absolute -right-8 bottom-14 size-40 rounded-full bg-brand/12 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-white/12 bg-[#282a2b] shadow-[0_35px_100px_rgba(0,0,0,0.3)]">
            {heroImage ? (
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover object-center"
              />
            ) : null}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(8,31,48,0.78)_100%)]" />
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-navy-deep/65 px-5 py-4 backdrop-blur-xl">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-brand">Visão clínica</p>
                <p className="mt-1 text-xs font-semibold text-white/82">Anatomia e planejamento individual</p>
              </div>
              <span className="font-display text-2xl text-white/55">01</span>
            </div>
          </div>
          <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl sm:block">
            <div className="grid size-10 place-items-center rounded-xl bg-brand text-navy-deep">
              <ShieldCheck className="size-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={benefit} className={`flex items-start gap-3 px-5 py-5 sm:px-6 ${index ? "sm:border-l sm:border-white/10" : ""}`}>
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                <Check className="size-3.5" strokeWidth={2.5} />
              </span>
              <p className="text-[11px] font-semibold leading-5 text-white/68 sm:text-xs">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
