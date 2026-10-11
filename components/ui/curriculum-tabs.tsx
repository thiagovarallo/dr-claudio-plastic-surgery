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
            className="flex snap-x gap-1.5 overflow-x-auto rounded-[22px] border border-blue/15 bg-white p-2.5 shadow-[0_20px_50px_-10px_rgba(27,85,121,0.16),0_8px_20px_-6px_rgba(0,121,181,0.08)] ring-1 ring-blue-dark/5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:sticky lg:top-24 lg:flex-col lg:rounded-[28px] lg:p-3.5"
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
                    isActive ? "text-white" : "text-ink hover:bg-surface-soft hover:text-blue-dark"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="curriculum-active-tab"
                      className="absolute inset-0 rounded-[16px] bg-linear-to-r from-blue-dark to-blue shadow-[0_12px_28px_rgba(27,85,121,0.28)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span
                    className={`relative z-10 grid size-8 shrink-0 place-items-center rounded-xl transition ${
                      isActive
                        ? "bg-brand text-white shadow-sm"
                        : "bg-surface-tint text-blue group-hover:bg-brand/15 group-hover:text-blue-dark"
                    }`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="relative z-10 whitespace-nowrap">{section.label}</span>
                  <span
                    className={`relative z-10 ml-auto hidden rounded-full px-2 py-0.5 text-[10px] font-extrabold lg:block ${
                      isActive ? "bg-white/15 text-white" : "bg-surface-soft text-blue/70"
                    }`}
                  >
                    {String(section.items.length).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="min-h-[720px] overflow-hidden rounded-[28px] border border-blue/15 bg-white shadow-[0_28px_80px_-12px_rgba(27,85,121,0.20),0_12px_32px_-8px_rgba(0,121,181,0.12)] ring-1 ring-blue-dark/5 sm:rounded-[32px]">
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
                <div className="relative overflow-hidden border-b border-blue/12 bg-linear-to-br from-surface-soft/90 via-white to-surface-tint/60 p-7 sm:p-10 lg:p-12">
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand via-blue-light to-blue-dark" />
                  <div className="pointer-events-none absolute -right-24 -top-28 size-72 rounded-full bg-blue-light/12 blur-3xl" />
                  <div className="relative flex items-start justify-between gap-6">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-blue-dark to-blue text-white shadow-[0_10px_24px_rgba(0,121,181,0.25)] sm:size-14">
                      <ActiveIcon className="size-5 sm:size-6" />
                    </span>
                    <span className="font-display text-4xl font-semibold leading-none text-blue/20 sm:text-5xl">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative mt-9 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-blue">
                        {activeSection.eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-xl font-display text-[36px] font-semibold leading-[0.98] text-blue-dark sm:text-[46px]">
                        {activeSection.title}
                      </h3>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-ink-soft lg:justify-self-end">
                      {activeSection.description}
                    </p>
                  </div>

                  {"credentials" in activeSection ? (
                    <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
                      {activeSection.credentials.map((credential) => (
                        <div
                          key={credential.value}
                          className="flex items-center gap-4 rounded-2xl border border-blue/15 bg-white p-4 shadow-[0_8px_24px_rgba(27,85,121,0.08)]"
                        >
                          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand-deep">
                            <BadgeCheck className="size-5" />
                          </span>
                          <div>
                            <strong className="block text-sm font-extrabold text-blue-dark">
                              {credential.value}
                            </strong>
                            <span className="mt-1 block text-[11px] font-medium leading-4 text-ink-soft/80">
                              {credential.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative mt-8 inline-flex items-center gap-3 rounded-full border border-blue/15 bg-white px-4 py-2.5 shadow-xs">
                      <Building2 className="size-4 text-brand" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-dark">
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
                      className="group grid gap-4 border-b border-slate-200/90 py-7 last:border-b-0 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-5"
                    >
                      <span className="grid size-9 place-items-center rounded-full border border-blue/20 bg-surface-tint text-[11px] font-extrabold text-blue-dark shadow-2xs transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <h4 className="max-w-md text-base font-extrabold leading-6 text-blue-dark">
                            {item.title}
                          </h4>
                          <span className="w-fit shrink-0 rounded-full border border-blue/12 bg-surface-soft px-3 py-1 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-blue">
                            {item.meta}
                          </span>
                        </div>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-ink-soft">{item.text}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-blue/10 bg-surface-soft/80 px-7 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft/75 sm:px-10 lg:px-12">
                  <span>{activeSection.label}</span>
                  <span className="text-blue-dark">
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
