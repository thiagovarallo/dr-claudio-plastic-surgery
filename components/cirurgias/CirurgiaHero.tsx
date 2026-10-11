import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import type { CirurgiaContent } from "@/content/cirurgias/types";

type Props = Pick<CirurgiaContent, "category" | "title" | "subtitle">;

export function CirurgiaHero({ category, title, subtitle }: Props) {
  const t = useTranslations("surgeryDetail");

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,var(--blue-dark)_0%,var(--blue)_100%)] text-white" aria-labelledby="cirurgia-hero-title">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(70%_90%_at_12%_42%,color-mix(in_srgb,var(--green)_20%,transparent),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="hero-grain pointer-events-none absolute inset-0 -z-10 mix-blend-overlay" />
      <div className="pointer-events-none absolute -right-48 -top-52 -z-10 size-[650px] rounded-full border border-brand/15" />
      <div className="pointer-events-none absolute -right-28 -top-32 -z-10 size-[420px] rounded-full border border-brand/10" />

      <div className="mx-auto flex min-h-[680px] max-w-6xl items-center px-5 pb-20 pt-32 sm:px-8 sm:pb-24">
        <div className="animate-fade-up max-w-4xl">
          <Link
            href="/cirurgias"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.26em] text-white/75 transition hover:border-white/35 hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            {t("back")}
          </Link>

          <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.4em] text-brand">{category}</p>
          <h1
            id="cirurgia-hero-title"
            className="mt-5 max-w-3xl font-display text-[58px] font-medium leading-[0.88] tracking-[-0.035em] text-white sm:text-7xl lg:text-[94px]"
          >
            {title}
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-7 text-white/68 sm:text-base">{subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#formulario"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
            >
              {t("request")}
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="#sobre-a-cirurgia"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/8"
            >
              {t("understand")}
              <ArrowDown className="size-4" />
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3 border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
            <ShieldCheck className="size-5 text-brand" />
            <span>{t("confidential")}</span>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">{t("credentials")}</span>
          <span className="text-xs font-semibold text-white/60">CRM 14.706-SC</span>
          <span className="text-xs font-semibold text-white/60">RQE 23.737</span>
          <span className="text-xs font-semibold text-white/60">SBCP</span>
        </div>
      </div>
    </section>
  );
}
