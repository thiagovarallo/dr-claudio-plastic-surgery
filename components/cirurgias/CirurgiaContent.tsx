import { Check } from "lucide-react";
import type { CirurgiaSection } from "@/content/cirurgias/types";
import { ScrollReveal } from "./ScrollReveal";

type Props = {
  overview: {
    heading: string;
    paragraphs: string[];
  };
  sections: CirurgiaSection[];
};

export function CirurgiaContent({ overview, sections }: Props) {
  const [lead, ...rest] = overview.paragraphs;

  return (
    <div className="overflow-hidden bg-surface-soft">
      <section
        id="sobre-a-cirurgia"
        aria-labelledby="overview-heading"
        className="relative scroll-mt-20 py-20 sm:py-28"
      >
        <div className="pointer-events-none absolute -left-32 top-1/3 size-80 rounded-full bg-blue-light/8 blur-3xl" />
        <div className="pointer-events-none absolute right-[-90px] top-16 size-64 rounded-full border border-brand/15" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal className="lg:pt-3">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-brand" />
              <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-brand-deep">
                Sobre a cirurgia
              </p>
            </div>
            <div className="mt-8 hidden lg:block">
              <span className="block h-24 w-px bg-gradient-to-b from-brand to-transparent" />
              <p className="mt-5 max-w-[170px] text-xs leading-5 text-ink-soft/50">
                Informação clara para decisões tomadas com segurança.
              </p>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2
                id="overview-heading"
                className="max-w-3xl font-display text-5xl font-medium leading-[0.94] text-blue-dark sm:text-6xl"
              >
                {overview.heading}
              </h2>
            </ScrollReveal>

            {lead ? (
              <ScrollReveal delay={80}>
                <p className="mt-8 max-w-3xl font-display text-2xl font-medium leading-snug text-blue-dark/82 sm:text-3xl">
                  {lead}
                </p>
              </ScrollReveal>
            ) : null}

            <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-ink-soft/68 sm:text-base">
              {rest.map((paragraph, index) => (
                <ScrollReveal key={paragraph.slice(0, 40)} delay={120 + index * 70}>
                  <p>{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={220}>
              <div className="mt-10 flex flex-wrap gap-3 border-t border-navy/10 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/65">CRM 14.706-SC</span>
                <span className="h-4 w-px bg-navy/15" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/65">RQE 23.737</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 sm:py-28" aria-label="Etapas e orientações da cirurgia">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-navy/8" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-brand" />
              <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-brand-deep">
                Etapas e orientações
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 border-t border-navy/10">
            {sections.map((section, index) => {
              const [sectionLead, ...sectionRest] = section.paragraphs ?? [];
              const number = String(index + 1).padStart(2, "0");

              return (
                <ScrollReveal key={section.id}>
                  <article
                    id={section.id}
                    aria-labelledby={`${section.id}-heading`}
                    className="group relative grid gap-6 border-b border-navy/10 py-9 transition-colors duration-500 hover:bg-surface-soft sm:py-11 lg:grid-cols-[148px_minmax(0,1fr)] lg:gap-12 lg:px-8"
                  >
                    <span className="absolute bottom-0 left-0 top-0 w-0.5 origin-top scale-y-0 bg-brand transition-transform duration-500 group-hover:scale-y-100" />

                    <div className="flex items-center gap-4 lg:block">
                      <span className="font-display text-3xl leading-none text-brand-deep/70">{number}</span>
                      <span className="h-px flex-1 bg-navy/10 lg:mt-5 lg:block lg:w-12" />
                    </div>

                    <div className="max-w-3xl">
                      <h2
                        id={`${section.id}-heading`}
                        className="font-display text-4xl font-medium leading-[0.98] text-blue-dark transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl"
                      >
                        {section.heading}
                      </h2>
                      {sectionLead ? (
                        <p className="mt-6 text-sm leading-7 text-ink-soft/74 sm:text-base">{sectionLead}</p>
                      ) : null}
                      {sectionRest.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)} className="mt-4 text-sm leading-7 text-ink-soft/62">
                          {paragraph}
                        </p>
                      ))}

                      {section.bullets?.length ? (
                        <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3 text-xs leading-6 text-ink sm:text-sm">
                              <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-brand/12 text-brand-deep">
                                <Check className="size-3" strokeWidth={2.5} />
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
