"use client";

import { useId, useState } from "react";
import type { CirurgiaFAQItem } from "@/content/cirurgias/types";
import { ScrollReveal } from "./ScrollReveal";

export function CirurgiaFAQ({ items }: { items: CirurgiaFAQItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 md:grid md:grid-cols-[minmax(240px,0.76fr)_minmax(0,1.24fr)] md:gap-14 lg:gap-20">
        <ScrollReveal className="md:sticky md:top-28 md:self-start">
          <p className="text-[11px] font-bold uppercase tracking-[0.36em] text-brand-deep">Dúvidas</p>
          <h2 id="faq-heading" className="mt-4 font-display text-5xl font-medium leading-[0.95] text-navy sm:text-6xl">
            Perguntas frequentes
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-ink-soft/62">
            Respostas objetivas para orientar a decisão com mais tranquilidade antes da consulta.
          </p>
        </ScrollReveal>

        <div className="mt-10 space-y-3 md:mt-0">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-faq-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            const number = String(index + 1).padStart(2, "0");

            return (
              <ScrollReveal key={item.question} delay={index * 60}>
                <div className={`overflow-hidden rounded-2xl border transition-colors ${isOpen ? "border-brand/25 bg-[#f4f8fa]" : "border-ink/8 bg-white hover:border-brand/20"}`}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group flex w-full items-start gap-4 px-5 py-5 text-left transition-colors sm:px-6 sm:py-6 md:gap-5"
                    >
                      <span
                        className={`mt-1 font-display text-sm font-medium tracking-wide transition-colors ${isOpen ? "text-brand-deep" : "text-ink/25 group-hover:text-brand-deep/70"}`}
                        aria-hidden
                      >
                        {number}
                      </span>
                      <span
                        className="flex-1 font-display text-xl font-medium leading-snug text-navy transition-colors sm:text-2xl"
                      >
                        {item.question}
                      </span>
                      <span
                        className={`mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition-all duration-300 ${isOpen ? "border-brand bg-brand text-white" : "border-ink/10 text-brand-deep group-hover:border-brand/40"}`}
                        aria-hidden
                      >
                        <span className={`block transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                          +
                        </span>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl px-5 pb-6 pl-12 text-sm leading-7 text-ink-soft/68 sm:px-6 sm:pl-14 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
