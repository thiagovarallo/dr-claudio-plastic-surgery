import Image from "next/image";
import { Check } from "lucide-react";
import type { CirurgiaSection } from "@/content/cirurgias/types";
import { ScrollReveal } from "./ScrollReveal";

type Props = {
  overview: {
    heading: string;
    paragraphs: string[];
    image?: { src: string; alt: string; width: number; height: number };
  };
  sections: CirurgiaSection[];
};

export function CirurgiaContent({ overview, sections }: Props) {
  const [lead, ...rest] = overview.paragraphs;

  return (
    <div className="overflow-hidden bg-[#f4f8fa]">
      <section
        id="sobre-a-cirurgia"
        aria-labelledby="overview-heading"
        className="scroll-mt-20 py-20 sm:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <ScrollReveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-navy-deep shadow-[0_24px_70px_rgba(8,31,48,0.14)]">
              {overview.image ? (
                <Image
                  src={overview.image.src}
                  alt={overview.image.alt}
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(8,31,48,0.7)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/15 bg-navy-deep/60 px-5 py-4 text-white backdrop-blur-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand">
                  Atendimento reservado
                </span>
                <span className="font-display text-lg text-white/70">01</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden size-32 rounded-full border border-brand/25 lg:block" />
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.36em] text-brand-deep">
                Sobre a cirurgia
              </p>
              <h2
                id="overview-heading"
                className="mt-4 max-w-xl font-display text-5xl font-medium leading-[0.94] text-navy sm:text-6xl"
              >
                {overview.heading}
              </h2>
            </ScrollReveal>

            {lead ? (
              <ScrollReveal delay={80}>
                <p className="mt-7 max-w-xl font-display text-2xl font-medium leading-snug text-navy/82 sm:text-3xl">
                  {lead}
                </p>
              </ScrollReveal>
            ) : null}

            <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-ink-soft/68 sm:text-base">
              {rest.map((paragraph, index) => (
                <ScrollReveal key={paragraph.slice(0, 40)} delay={120 + index * 70}>
                  <p>{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={220}>
              <div className="mt-9 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold text-navy shadow-sm ring-1 ring-ink/6">
                  CRM 14.706-SC
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold text-navy shadow-sm ring-1 ring-ink/6">
                  RQE 23.737
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-label="Etapas e orientações da cirurgia">
        <div className="mx-auto max-w-6xl space-y-6 px-5 sm:px-8">
          {sections.map((section, index) => {
            const reversed = index % 2 === 1;
            const [sectionLead, ...sectionRest] = section.paragraphs ?? [];
            const number = String(index + 2).padStart(2, "0");

            return (
              <ScrollReveal key={section.id}>
                <article
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="scroll-mt-24 overflow-hidden rounded-[32px] border border-ink/6 bg-white shadow-[0_18px_60px_rgba(8,31,48,0.06)]"
                >
                  <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <div className="flex min-h-[440px] flex-col justify-center p-7 sm:p-10 lg:p-14">
                      <div className="flex items-center gap-4">
                        <span className="font-display text-2xl text-brand-deep">{number}</span>
                        <span className="h-px w-10 bg-brand/35" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-ink/40">
                          Informação e cuidado
                        </span>
                      </div>
                      <h2
                        id={`${section.id}-heading`}
                        className="mt-6 max-w-md font-display text-4xl font-medium leading-[0.98] text-navy sm:text-5xl"
                      >
                        {section.heading}
                      </h2>
                      {sectionLead ? (
                        <p className="mt-6 max-w-xl text-sm leading-7 text-ink-soft/72 sm:text-base">{sectionLead}</p>
                      ) : null}
                      {sectionRest.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)} className="mt-4 max-w-xl text-sm leading-7 text-ink-soft/62">
                          {paragraph}
                        </p>
                      ))}

                      {section.bullets?.length ? (
                        <ul className="mt-7 grid gap-3">
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

                    <div className="relative min-h-[360px] bg-navy-deep lg:min-h-full">
                      {section.image ? (
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          fill
                          sizes="(min-width: 1024px) 560px, 100vw"
                          className="object-cover transition duration-700 hover:scale-[1.03]"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(8,31,48,0.5)_100%)]" />
                      <span className="absolute bottom-6 right-7 font-display text-6xl text-white/55">{number}</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
