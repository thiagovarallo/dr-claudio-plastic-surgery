"use client";

import { useId, useState } from "react";
import type { CirurgiaFAQItem } from "@/content/cirurgias/types";
import { ScrollReveal } from "./ScrollReveal";

export function CirurgiaFAQ({ items }: { items: CirurgiaFAQItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-paper" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-6 py-16 md:grid md:grid-cols-[minmax(240px,0.78fr)_minmax(0,1.22fr)] md:gap-16 md:px-10 md:py-24 lg:gap-20">
        <ScrollReveal className="md:sticky md:top-10 md:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Dúvidas</p>
          <h2 id="faq-heading" className="mt-3 font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted">
            Respostas objetivas para orientar a decisão com mais tranquilidade antes da consulta.
          </p>
        </ScrollReveal>

        <div className="mt-10 border-t border-border/80 md:mt-0">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-faq-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            const number = String(index + 1).padStart(2, "0");

            return (
              <ScrollReveal key={item.question} delay={index * 60}>
                <div className="border-b border-border/80">
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group flex w-full items-start gap-4 py-6 text-left transition-colors md:gap-6 md:py-7"
                    >
                      <span
                        className={`mt-1 font-display text-sm font-medium tracking-wide transition-colors ${isOpen ? "text-accent" : "text-accent/35 group-hover:text-accent/70"}`}
                        aria-hidden
                      >
                        {number}
                      </span>
                      <span
                        className={`flex-1 font-display text-xl font-medium leading-snug transition-colors md:text-2xl ${isOpen ? "text-navy" : "text-navy/85 group-hover:text-navy"}`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition-all duration-300 ${isOpen ? "border-accent bg-accent text-white" : "border-border text-accent group-hover:border-accent/50"}`}
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
                      <p className="max-w-2xl pb-7 pl-10 leading-relaxed text-muted md:pl-14 md:text-lg">
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
