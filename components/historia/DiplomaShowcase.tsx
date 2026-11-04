"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Award, BadgeCheck, Calendar, Expand, ShieldCheck, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useLocale } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { translateContent } from "@/i18n/content";

export function DiplomaShowcase() {
  const locale = useLocale();
  const tr = (text: string) => translateContent(locale, text);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const diplomaAlt = tr(
    "Diploma de Título de Especialista em Cirurgia Plástica conferido ao Dr. Claudio Eduardo Pereira de Souza pela AMB e SBCP",
  );

  return (
    <>
      <div className="mt-8 overflow-hidden rounded-[30px] border border-blue/15 bg-[linear-gradient(135deg,var(--blue-dark)_0%,var(--blue)_100%)] text-white shadow-[0_26px_65px_-12px_rgba(27,85,121,0.28)]">
        <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:p-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.34em] text-brand backdrop-blur-md">
              <Award className="size-3.5" />
              <span>{tr("Diploma oficial")}</span>
            </div>

            <h3 className="mt-5 font-display text-3xl font-medium leading-[0.98] text-white sm:text-4xl lg:text-[44px]">
              {tr("Título de Especialista em Cirurgia Plástica")}
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/78">
              {tr(
                "Conferido pela Associação Médica Brasileira (AMB) e pela Sociedade Brasileira de Cirurgia Plástica (SBCP) após aprovação em concurso oficial realizado em São Paulo, em 15 de novembro de 2001.",
              )}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-xs font-semibold text-white/90">
                <ShieldCheck className="size-4 text-brand" />
                {tr("Associação Médica Brasileira · AMB")}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-xs font-semibold text-white/90">
                <BadgeCheck className="size-4 text-brand" />
                {tr("Sociedade Brasileira de Cirurgia Plástica · SBCP")}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-xs font-semibold text-white/90">
                <Calendar className="size-4 text-brand" />
                {tr("São Paulo · 15 de novembro de 2001")}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-7 inline-flex h-11 cursor-pointer items-center gap-2.5 rounded-full bg-brand px-5 text-xs font-bold text-white shadow-[0_10px_24px_rgba(8,191,196,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              <Expand className="size-3.5" />
              <span>{tr("Ampliar diploma")}</span>
            </button>
          </Reveal>

          <Reveal delay={0.1}>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={tr("Ampliar diploma")}
              className="group relative block w-full cursor-pointer overflow-hidden rounded-[22px] border border-white/25 bg-[#f8f6f0] p-2.5 shadow-[0_24px_60px_rgba(8,22,38,0.45)] transition duration-500 hover:-translate-y-1 hover:border-brand sm:p-3.5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-white">
                <Image
                  src="/brand/diploma-especialista-sbcp.jpg"
                  alt={diplomaAlt}
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-contain transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-navy-deep/0 transition duration-300 group-hover:bg-navy-deep/20" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-navy-deep/85 px-3.5 py-1.5 text-[11px] font-bold text-white shadow-md backdrop-blur-md transition group-hover:bg-brand">
                  <Expand className="size-3.5" />
                  <span>{tr("Ampliar diploma")}</span>
                </span>
              </div>
            </button>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={tr("Título de Especialista em Cirurgia Plástica")}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-navy-deep/88 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[26px] border border-white/20 bg-[#f8f6f0] p-3 shadow-2xl sm:p-5"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={tr("Fechar visualização")}
                className="absolute right-5 top-5 z-10 inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-navy-deep/85 text-white shadow-lg backdrop-blur-md transition hover:bg-brand"
              >
                <X className="size-5" />
              </button>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-white">
                <Image
                  src="/brand/diploma-especialista-sbcp.jpg"
                  alt={diplomaAlt}
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

