"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  BadgeCheck,
  BookOpenCheck,
  Building2,
  GraduationCap,
  Hospital,
  Stethoscope,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { curriculumSections } from "@/content/historia";

const sectionIcons: Record<(typeof curriculumSections)[number]["icon"], LucideIcon> = {
  graduation: GraduationCap,
  stethoscope: Stethoscope,
  users: Users,
  book: BookOpenCheck,
  trophy: Trophy,
  hospital: Hospital,
};

export function CurriculumTabs() {
  const [activeId, setActiveId] = useState<(typeof curriculumSections)[number]["id"]>(
    curriculumSections[0].id,
  );
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduced = useReducedMotion();
  const activeIndex = curriculumSections.findIndex((section) => section.id === activeId);
  const activeSection = curriculumSections[activeIndex] ?? curriculumSections[0];
  const ActiveIcon = sectionIcons[activeSection.icon];

  const selectTab = (index: number) => {
    const normalized = (index + curriculumSections.length) % curriculumSections.length;
    setActiveId(curriculumSections[normalized].id);
    tabRefs.current[normalized]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectTab(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectTab(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectTab(curriculumSections.length - 1);
    }
  };

  return (
    <section
      id="curriculo"
      aria-labelledby="curriculo-title"
      className="relative scroll-mt-20 overflow-hidden bg-surface-soft py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -right-48 top-0 size-[480px] rounded-full bg-blue-light/8 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">
              Currículo completo
            </p>
            <h2
              id="curriculo-title"
              className="mt-5 max-w-2xl font-display text-[46px] font-medium leading-[0.98] text-ink sm:text-[64px]"
            >
              Formação e experiência em detalhes.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-slate-600 lg:justify-self-end">
            Explore a formação acadêmica, a atuação médica e as atividades profissionais que
            compõem essa trajetória.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-5 lg:mt-20 lg:grid-cols-[290px_minmax(0,1fr)]">
          <div
            role="tablist"
            aria-label="Seções do currículo"
            className="flex snap-x gap-1.5 overflow-x-auto rounded-[22px] border border-slate-200/90 bg-white p-2 shadow-[0_18px_60px_color-mix(in_srgb,var(--blue-dark)_7%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:sticky lg:top-24 lg:flex-col lg:rounded-[28px] lg:p-3"
          >
            {curriculumSections.map((section, index) => {
              const Icon = sectionIcons[section.icon];
              const isActive = section.id === activeSection.id;
              return (
                <button
                  key={section.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  id={`curriculo-tab-${section.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`curriculo-panel-${section.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(section.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`group relative flex h-13 shrink-0 snap-start items-center gap-3 rounded-[16px] px-4 text-left text-xs font-bold outline-none transition focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:h-16 lg:w-full ${
                    isActive ? "text-white" : "text-ink-soft/64 hover:bg-slate-50 hover:text-ink"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="curriculum-active-tab"
                      className="absolute inset-0 rounded-[16px] bg-linear-to-r from-blue-dark to-blue shadow-[0_12px_28px_color-mix(in_srgb,var(--blue-dark)_20%,transparent)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span
                    className={`relative z-10 grid size-8 shrink-0 place-items-center rounded-xl transition ${
                      isActive ? "bg-brand text-white" : "bg-brand/9 text-brand-deep group-hover:bg-brand/14"
                    }`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="relative z-10 whitespace-nowrap">{section.label}</span>
                  <span
                    className={`relative z-10 ml-auto hidden text-[9px] font-extrabold lg:block ${
                      isActive ? "text-white/42" : "text-slate-300"
                    }`}
                  >
                    {String(section.items.length).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="min-h-[720px] overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-[0_22px_80px_color-mix(in_srgb,var(--blue-dark)_7%,transparent)] sm:rounded-[32px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSection.id}
                id={`curriculo-panel-${activeSection.id}`}
                role="tabpanel"
                aria-labelledby={`curriculo-tab-${activeSection.id}`}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative overflow-hidden border-b border-slate-200/80 p-7 sm:p-10 lg:p-12">
                  <div className="pointer-events-none absolute -right-24 -top-28 size-72 rounded-full bg-blue-light/8 blur-3xl" />
                  <div className="relative flex items-start justify-between gap-6">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand-deep sm:size-14">
                      <ActiveIcon className="size-5 sm:size-6" />
                    </span>
                    <span className="font-display text-4xl font-semibold leading-none text-ink/8 sm:text-5xl">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative mt-9 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.38em] text-brand-deep">
                        {activeSection.eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-xl font-display text-[36px] font-semibold leading-[0.98] text-ink sm:text-[46px]">
                        {activeSection.title}
                      </h3>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-slate-600 lg:justify-self-end">
                      {activeSection.description}
                    </p>
                  </div>

                  {"credentials" in activeSection ? (
                    <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
                      {activeSection.credentials.map((credential) => (
                        <div
                          key={credential.value}
                          className="flex items-center gap-4 rounded-2xl border border-brand/12 bg-surface-tint p-4"
                        >
                          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-brand-deep shadow-sm">
                            <BadgeCheck className="size-5" />
                          </span>
                          <div>
                            <strong className="block text-sm font-extrabold text-ink">
                              {credential.value}
                            </strong>
                            <span className="mt-1 block text-[10px] leading-4 text-slate-500">
                              {credential.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5">
                      <Building2 className="size-4 text-brand-deep" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-soft/60">
                        {activeSection.items.length} registros profissionais
                      </span>
                    </div>
                  )}
                </div>

                <div className="px-7 sm:px-10 lg:px-12">
                  {activeSection.items.map((item, index) => (
                    <motion.article
                      key={`${activeSection.id}-${item.title}`}
                      initial={reduced ? false : { opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: reduced ? 0 : 0.04 + index * 0.035, duration: 0.3 }}
                      className="group grid gap-4 border-b border-slate-200/80 py-7 last:border-b-0 sm:grid-cols-[36px_minmax(0,1fr)] sm:gap-5"
                    >
                      <span className="grid size-8 place-items-center rounded-full border border-brand/15 bg-brand/8 text-[10px] font-extrabold text-brand-deep transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <h4 className="max-w-md text-sm font-extrabold leading-6 text-ink">
                            {item.title}
                          </h4>
                          <span className="shrink-0 text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-brand-deep">
                            {item.meta}
                          </span>
                        </div>
                        <p className="mt-2 max-w-xl text-xs leading-6 text-slate-600">{item.text}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/80 bg-slate-50/70 px-7 py-5 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:px-10 lg:px-12">
                  <span>{activeSection.label}</span>
                  <span>
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(curriculumSections.length).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
