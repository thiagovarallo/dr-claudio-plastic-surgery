import Image from "next/image";
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
    <div className="overflow-hidden">
      <section aria-labelledby="overview-heading" className="relative">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="brand-orb absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/10 blur-2xl md:h-[28rem] md:w-[28rem]" />
          <div className="brand-orb absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-aqua/25 blur-3xl md:h-96 md:w-96" />
          <div className="absolute right-[8%] top-16 hidden h-40 w-40 rounded-full border border-accent/20 md:block" />
          <div className="absolute right-[12%] top-28 hidden h-24 w-24 rounded-full border border-warm/30 md:block" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.85fr)] md:items-end md:gap-16 md:px-10 md:py-24">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4">
                <Image
                  src="/brand/logo.png"
                  alt="Claudio Eduardo Cirurgião Plástico"
                  width={200}
                  height={25}
                  className="h-auto w-44 opacity-90 md:w-52"
                />
                <span className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent sm:block" aria-hidden />
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Sobre a cirurgia</p>
              <h2
                id="overview-heading"
                className="mt-3 max-w-2xl font-display text-4xl font-medium leading-[1.05] text-navy md:text-6xl"
              >
                {overview.heading}
              </h2>
            </ScrollReveal>

            {lead ? (
              <ScrollReveal delay={80}>
                <p className="mt-8 max-w-2xl font-display text-2xl font-medium leading-snug text-navy/80 md:text-3xl">
                  {lead}
                </p>
              </ScrollReveal>
            ) : null}

            {rest.length ? (
              <div className="mt-7 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
                {rest.map((paragraph, index) => (
                  <ScrollReveal key={paragraph.slice(0, 40)} delay={120 + index * 80}>
                    <p>{paragraph}</p>
                  </ScrollReveal>
                ))}
              </div>
            ) : null}
          </div>

          <ScrollReveal delay={160} className="relative hidden justify-self-end md:block">
            <div className="relative aspect-square w-full max-w-[320px]">
              <div className="absolute inset-[8%] rounded-full border border-accent/25" />
              <div className="absolute inset-[22%] rounded-full border border-aqua/40" />
              <div className="absolute inset-[36%] rounded-full bg-gradient-to-br from-accent-soft via-white to-warm-soft" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/brand/logo.png"
                  alt=""
                  width={160}
                  height={20}
                  className="w-36 opacity-80"
                  aria-hidden
                />
              </div>
              <div className="absolute -left-3 top-1/4 h-3 w-3 rounded-full bg-warm" />
              <div className="absolute bottom-1/4 -right-2 h-2.5 w-2.5 rounded-full bg-accent" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {sections.map((section, index) => {
        const reversed = index % 2 === 1;
        const [sectionLead, ...sectionRest] = section.paragraphs ?? [];

        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-8"
            aria-labelledby={`${section.id}-heading`}
          >
            <div className={`relative overflow-hidden ${reversed ? "bg-navy text-white" : "section-paper"}`}>
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                {reversed ? (
                  <>
                    <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-aqua/15 blur-2xl" />
                    <div className="absolute right-[12%] top-[18%] h-28 w-28 rounded-full border border-white/12" />
                  </>
                ) : (
                  <>
                    <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent/8 blur-2xl" />
                    <div className="absolute right-0 top-1/3 h-40 w-40 rounded-full border border-accent/15" />
                  </>
                )}
              </div>

              <div
                className={`relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[minmax(260px,0.78fr)_minmax(0,1.22fr)] lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <ScrollReveal className="lg:sticky lg:top-10 lg:self-start">
                  <div className="relative inline-block">
                    <span
                      className={`absolute -left-4 -top-6 font-display text-8xl font-medium leading-none md:text-9xl ${reversed ? "text-white/10" : "text-accent/15"}`}
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p
                      className={`relative text-xs font-semibold uppercase tracking-[0.22em] ${reversed ? "text-aqua" : "text-accent"}`}
                    >
                      Etapa {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2
                      id={`${section.id}-heading`}
                      className={`relative mt-3 max-w-sm font-display text-4xl font-medium leading-tight md:text-5xl ${reversed ? "text-white" : "text-navy"}`}
                    >
                      {section.heading}
                    </h2>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <span className={`h-px w-10 ${reversed ? "bg-aqua/50" : "bg-accent/50"}`} aria-hidden />
                    <Image
                      src="/brand/logo-footer.png"
                      alt=""
                      width={140}
                      height={17}
                      className={`h-auto w-28 opacity-70 ${reversed ? "brightness-0 invert" : ""}`}
                      aria-hidden
                    />
                  </div>
                </ScrollReveal>

                <div>
                  {sectionLead ? (
                    <ScrollReveal>
                      <p
                        className={`font-display text-2xl font-medium leading-snug md:text-[1.7rem] ${reversed ? "text-white/92" : "text-navy/85"}`}
                      >
                        {sectionLead}
                      </p>
                    </ScrollReveal>
                  ) : null}

                  {sectionRest.length ? (
                    <div className={`mt-6 space-y-5 text-lg leading-relaxed ${reversed ? "text-white/70" : "text-muted"}`}>
                      {sectionRest.map((paragraph, paragraphIndex) => (
                        <ScrollReveal key={paragraph.slice(0, 40)} delay={paragraphIndex * 80}>
                          <p>{paragraph}</p>
                        </ScrollReveal>
                      ))}
                    </div>
                  ) : null}

                  {section.bullets?.length ? (
                    <ul className="mt-10 space-y-4">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <ScrollReveal key={bullet} delay={bulletIndex * 70}>
                          <li className="flex gap-4">
                            <span
                              className={`mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${reversed ? "border-aqua/40 text-aqua" : "border-accent/35 text-accent"}`}
                              aria-hidden
                            >
                              <span className={`h-2 w-2 rounded-full ${reversed ? "bg-aqua" : "bg-accent"}`} />
                            </span>
                            <span className={`text-base leading-relaxed md:text-lg ${reversed ? "text-white/82" : "text-foreground"}`}>
                              {bullet}
                            </span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
