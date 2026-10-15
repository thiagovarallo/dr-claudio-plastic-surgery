"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { translateContent } from "@/i18n/content";
import { history } from "@/content/home";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Node = {
  year: string;
  label: string;
  place: string;
  text: string;
  tone: (typeof history.nodes)[number]["tone"];
};

const NODES = history.nodes;

// Alternating sides for the story cards along the horizontal timeline
const CARD_SIDES = ["above", "below", "above", "below", "above"] as const;

function MedicalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 52 52" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 7h14v6H19zM21 13v5l-5 6v18h20V24l-5-6v-5" />
        <path d="M21 29h10M26 24v10M38 31l7 7M42 27l4 4-8 8-4-4z" />
      </g>
    </svg>
  );
}

function MobileHistory({
  nodes,
  eyebrow,
  title,
  lead,
  text,
  cta,
}: {
  nodes: Node[];
  eyebrow: string;
  title: string;
  lead: string;
  text: string;
  cta: string;
}) {
  const locale = useLocale();
  const tr = (text: string) => translateContent(locale, text);
  return (
    <div className="relative overflow-hidden bg-white px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
      <div className="pointer-events-none absolute -right-28 top-24 size-72 rounded-full bg-brand/8 blur-3xl" />

      <div className="mx-auto max-w-xl">
        {/* Luxury Editorial Arch Frame for Mobile */}
        <div className="relative mb-8 overflow-hidden rounded-[32px] border border-blue/15 bg-linear-to-b from-white via-surface-soft to-surface-tint/50 p-6 shadow-[0_20px_50px_rgba(27,85,121,0.12)]">
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 size-60 rounded-full bg-brand/10 blur-2xl" />

          <div className="relative mx-auto aspect-[1/1.42] w-full max-w-[340px]">
            <Image
              src="/brand/dr-claudio-seated.png"
              alt="Dr. Claudio Eduardo"
              fill
              sizes="(max-width: 640px) 90vw, 340px"
              className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(27,85,121,0.22)]"
            />
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-blue/10 pt-4">
            <div>
              <p className="text-xs font-bold text-ink">Dr. Claudio Eduardo</p>
              <p className="text-[10px] font-semibold text-slate-500">{tr("Cirurgião Plástico")}</p>
            </div>
            <span className="rounded-full bg-brand/10 px-3 py-1 text-[10px] font-bold text-brand-deep">
              CRM 14.706-SC · SBCP
            </span>
          </div>
        </div>

        <SectionTitle eyebrow={eyebrow} title={title} size="lg" />
        <p className="mt-4 max-w-lg text-[15px] font-bold leading-6 text-ink">{lead}</p>
        <p className="mt-3 max-w-lg text-[13px] leading-6 text-slate-600">{text}</p>

        <div className="relative ml-3 mt-12 border-l border-dashed border-blue/30 pl-8">
          {nodes.map((node, index) => {
            const isBrand = node.tone === "brand";
            return (
              <motion.article
                key={node.year}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative mb-7 rounded-2xl border border-blue/15 bg-linear-to-br from-blue-light via-blue to-blue-dark p-5 text-white shadow-[0_16px_40px_rgba(0,121,181,0.22)] last:mb-0"
              >
                <span
                  className={`absolute -left-[43px] top-6 size-5 rounded-full border-4 border-white ring-2 ${
                    isBrand ? "bg-brand ring-brand" : "bg-blue-dark ring-blue"
                  }`}
                />
                <div className="flex items-center justify-between">
                  <p className="font-display text-3xl font-extrabold leading-none tracking-tight">
                    {node.year}
                  </p>
                  <MedicalIcon className="size-7 text-white/80" />
                </div>
                <h3 className="mt-2.5 text-xs font-extrabold uppercase leading-snug tracking-wide text-white">
                  {node.label}
                </h3>
                <p className="mt-1 text-[11px] font-semibold text-white/80">{node.place}</p>
                <p className="mt-2.5 text-xs leading-relaxed text-white/95">{node.text}</p>
              </motion.article>
            );
          })}
        </div>

        <Link
          href="/claudio-eduardo-cirurgiao-plastico"
          className="mt-10 inline-flex h-11 items-center gap-3 rounded-full bg-brand px-6 text-xs font-bold text-white shadow-[0_8px_20px_rgba(8,191,196,0.25)] transition hover:bg-brand-deep"
        >
          {cta}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

export function Historia() {
  const locale = useLocale();
  const tr = (text: string) => translateContent(locale, text);
  const t = useTranslations("home.history");
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [maxScroll, setMaxScroll] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const localizedNodes = NODES.map((node, index) => ({
    ...node,
    year: t(`nodes.${index}.year`),
    label: t(`nodes.${index}.label`),
    place: t(`nodes.${index}.place`),
    text: t(`nodes.${index}.text`),
  }));

  // Calculates exact horizontal scroll distance needed based on actual track width
  useEffect(() => {
    if (reduced) return;

    const measure = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setMaxScroll(Math.max(0, trackWidth - viewportWidth + 60));
    };

    measure();
    const timer = setTimeout(measure, 350);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, [reduced]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.22,
  });

  // Track translates from right to left, sliding BEHIND Dr. Claudio
  const trackX = useTransform(smoothProgress, [0, 1], [0, -maxScroll]);

  // Subtle breathing parallax for Dr. Claudio anchored in foreground
  const portraitParallaxY = useTransform(smoothProgress, [0, 1], ["0%", "-2.5%"]);

  // Calculate active index as timeline moves
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const rawIndex = Math.floor(latest * localizedNodes.length);
    const clamped = Math.min(localizedNodes.length - 1, Math.max(0, rawIndex));
    setActiveIndex(clamped);
  });

  return (
    <section id="sobre" aria-labelledby="historia-title" className="relative scroll-mt-19 bg-white">
      {/* Desktop Horizontal Scroll Layout */}
      <div className="hidden lg:block">
        <div
          ref={containerRef}
          className="relative"
          style={{ height: reduced ? "auto" : "340vh" }}
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
            {/* Background Atmosphere: Subtle Grid + Brand Auroras */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,transparent_49.6%,rgba(148,163,184,0.08)_50%,transparent_50.4%,transparent_100%)] [background-size:120px_120px]" />
            <div className="pointer-events-none absolute -right-32 top-1/4 -z-10 size-[520px] rounded-full bg-brand/5 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 bottom-1/4 -z-10 size-[480px] rounded-full bg-blue-light/6 blur-3xl" />

            {/* Giant watermark in background for architectural depth */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/3 top-1/2 -z-10 -translate-y-1/2 select-none font-display text-[clamp(6rem,13vw,14rem)] font-extrabold uppercase tracking-[-0.05em] text-slate-100/90 whitespace-nowrap"
            >
              {tr("TRAJETÓRIA")}
            </span>

            {/* Top Status HUD */}
            <div className="absolute inset-x-0 top-6 z-30 px-8 xl:px-14">
              <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex items-center gap-2.5 rounded-full border border-blue-dark/10 bg-white/85 px-4 py-2 text-xs font-bold text-blue-dark shadow-xs backdrop-blur-md">
                  <Sparkles className="size-3.5 text-brand" />
                  <span className="tracking-wide">
                    {t("marco")} {String(activeIndex + 1).padStart(2, "0")} · {localizedNodes[activeIndex].year}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
                    {t("scrollHint")}
                  </span>
                  <div className="h-1.5 w-32 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      className="h-full bg-linear-to-r from-blue via-blue-light to-brand"
                      style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* HORIZONTAL MOVING TRACK (Layer z-10: Emerges & Slides BEHIND Dr. Claudio's stage) */}
            <motion.div
              ref={trackRef}
              style={{ x: trackX }}
              className="absolute inset-y-0 left-0 z-10 flex items-center min-w-max pl-[42vw] pr-[24vw] xl:pl-[40vw] 2xl:pl-[38vw]"
            >
              {/* Continuous Timeline Base Line running behind cards and nodes */}
              <div className="pointer-events-none absolute left-0 right-0 top-[50%] h-[3px] -translate-y-1/2 bg-slate-200">
                <motion.div
                  className="h-full bg-linear-to-r from-blue-dark via-blue-light to-brand shadow-[0_0_12px_rgba(8,191,196,0.5)]"
                  style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
                />
              </div>

              {/* SECTION INTRO CARD (Slides first as the journey starts) */}
              <div className="relative mr-16 w-[380px] shrink-0 xl:mr-20 xl:w-[420px]">
                <div className="rounded-[28px] border border-blue/15 bg-white/95 p-8 shadow-[0_20px_50px_rgba(27,85,121,0.12)] backdrop-blur-xl">
                  <p className="text-[11px] font-bold uppercase tracking-[0.38em] text-brand-deep">
                    {tr("Trajetória cirúrgica")}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-medium leading-[0.94] text-ink sm:text-4xl">
                    {tr("Dedicação e excelência")}
                  </h3>
                  <p className="mt-4 text-sm font-bold leading-6 text-ink xl:text-[15px]">
                    {t("lead")}
                  </p>
                  <p className="mt-2.5 text-xs leading-5 text-slate-600 xl:text-[13px]">
                    {t("text")}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <Link
                      href="/claudio-eduardo-cirurgiao-plastico"
                      className="inline-flex h-11 items-center gap-2.5 rounded-full bg-brand px-6 text-xs font-bold text-white shadow-[0_8px_20px_rgba(8,191,196,0.3)] transition hover:bg-brand-deep"
                    >
                      <span>{t("cta")}</span>
                      <ArrowRight className="size-4" />
                    </Link>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-dark/70">
                      <span>{tr("Rolar")}</span>
                      <ChevronRight className="size-3.5 animate-pulse text-brand" />
                    </span>
                  </div>
                </div>
              </div>

              {/* TIMELINE MILESTONES (Nodes + Floating Story Cards) */}
              {localizedNodes.map((node, index) => {
                const side = CARD_SIDES[index] ?? "above";
                const isAbove = side === "above";
                const isActive = index === activeIndex;
                const isBrand = node.tone === "brand";

                return (
                  <div
                    key={node.year}
                    className="relative mr-20 flex w-[360px] shrink-0 flex-col items-center xl:mr-24 xl:w-[400px]"
                  >
                    {/* Story Card Placed Above Line */}
                    {isAbove && (
                      <div className="mb-6 flex flex-col items-center">
                        <article
                          className={`relative w-[340px] overflow-hidden rounded-[18px] bg-linear-to-br from-blue-light via-blue to-blue-dark p-2.5 text-white shadow-[0_24px_60px_rgba(0,121,181,0.28)] transition-all duration-500 xl:w-[380px] ${
                            isActive
                              ? "scale-105 ring-2 ring-brand/50 shadow-[0_30px_70px_rgba(0,121,181,0.38)]"
                              : "opacity-90 hover:opacity-100"
                          }`}
                        >
                          <div className="relative rounded-[14px] border border-white/50 bg-white/[0.04] p-5 backdrop-blur-md">
                            <div className="pointer-events-none absolute -bottom-10 -right-8 size-36 rounded-full bg-white/10 blur-xl" />
                            <div className="relative flex items-start justify-between gap-3">
                              <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-white/75">
                                  {t("marco")} {String(index + 1).padStart(2, "0")}
                                </p>
                                <p className="mt-1 font-display text-3xl font-extrabold leading-none tracking-tight text-white xl:text-4xl">
                                  {node.year}
                                </p>
                              </div>
                              <MedicalIcon className="size-9 text-white/90" />
                            </div>
                            <h3 className="relative mt-3.5 text-[13px] font-extrabold uppercase leading-snug tracking-tight text-white">
                              {node.label}
                            </h3>
                            <p className="relative mt-1.5 text-[11px] font-semibold text-white/80">
                              {node.place}
                            </p>
                            <p className="relative mt-2.5 text-xs leading-relaxed text-white/95">
                              {node.text}
                            </p>
                          </div>
                        </article>

                        {/* Connecting Stem to Timeline Node */}
                        <span
                          aria-hidden
                          className="h-8 w-[2px] bg-linear-to-b from-blue-light via-brand to-blue"
                        />
                      </div>
                    )}

                    {/* Central Timeline Milestone Node */}
                    <div className="relative z-10 flex flex-col items-center py-2">
                      <span
                        className={`relative grid size-13 place-items-center transition-all duration-500 xl:size-14 ${
                          isActive ? "scale-115" : ""
                        }`}
                      >
                        <span
                          className={`absolute inset-[6px] rotate-45 rounded-[12px] border-2 bg-white transition-[box-shadow,border-color] duration-500 ${
                            isActive
                              ? isBrand
                                ? "border-brand shadow-[0_0_0_8px_rgba(8,191,196,0.22)]"
                                : "border-blue shadow-[0_0_0_8px_rgba(0,121,181,0.20)]"
                              : "border-slate-300 shadow-[0_8px_20px_rgba(27,85,121,0.12)]"
                          }`}
                        />
                        <span
                          className={`relative z-10 size-4.5 rounded-full border-[3px] border-white transition-colors duration-500 xl:size-5 ${
                            isBrand ? "bg-brand" : "bg-blue-dark"
                          }`}
                        />
                      </span>

                      <strong
                        className={`mt-2 inline-flex rounded-full border bg-white px-3.5 py-1 text-sm font-extrabold leading-none tracking-tight shadow-xs transition-colors duration-500 ${
                          isActive
                            ? isBrand
                              ? "border-brand text-brand"
                              : "border-blue text-blue-dark"
                            : "border-slate-200 text-slate-600"
                        }`}
                      >
                        {node.year}
                      </strong>
                    </div>

                    {/* Story Card Placed Below Line */}
                    {!isAbove && (
                      <div className="mt-6 flex flex-col items-center">
                        {/* Connecting Stem from Timeline Node */}
                        <span
                          aria-hidden
                          className="h-8 w-[2px] bg-linear-to-b from-blue via-brand to-blue-light"
                        />

                        <article
                          className={`relative w-[340px] overflow-hidden rounded-[18px] bg-linear-to-br from-blue-light via-blue to-blue-dark p-2.5 text-white shadow-[0_24px_60px_rgba(0,121,181,0.28)] transition-all duration-500 xl:w-[380px] ${
                            isActive
                              ? "scale-105 ring-2 ring-brand/50 shadow-[0_30px_70px_rgba(0,121,181,0.38)]"
                              : "opacity-90 hover:opacity-100"
                          }`}
                        >
                          <div className="relative rounded-[14px] border border-white/50 bg-white/[0.04] p-5 backdrop-blur-md">
                            <div className="pointer-events-none absolute -bottom-10 -right-8 size-36 rounded-full bg-white/10 blur-xl" />
                            <div className="relative flex items-start justify-between gap-3">
                              <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-white/75">
                                  {t("marco")} {String(index + 1).padStart(2, "0")}
                                </p>
                                <p className="mt-1 font-display text-3xl font-extrabold leading-none tracking-tight text-white xl:text-4xl">
                                  {node.year}
                                </p>
                              </div>
                              <MedicalIcon className="size-9 text-white/90" />
                            </div>
                            <h3 className="relative mt-3.5 text-[13px] font-extrabold uppercase leading-snug tracking-tight text-white">
                              {node.label}
                            </h3>
                            <p className="relative mt-1.5 text-[11px] font-semibold text-white/80">
                              {node.place}
                            </p>
                            <p className="relative mt-2.5 text-xs leading-relaxed text-white/95">
                              {node.text}
                            </p>
                          </div>
                        </article>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* GRAND FOREGROUND ARCH & LARGE DR. CLAUDIO (Layer z-20: Content slides BEHIND him!) */}
            <div className="pointer-events-none absolute bottom-0 left-4 z-20 flex h-[94vh] max-h-[960px] min-h-[620px] w-[38vw] max-w-[560px] flex-col items-center justify-end xl:left-8 2xl:left-12">
              {/* Luxury Architectural Arch Backdrop */}
              <div className="absolute inset-x-0 bottom-0 top-6 overflow-hidden rounded-t-[160px] rounded-b-[36px] border border-blue/15 bg-linear-to-b from-white/95 via-surface-soft/90 to-surface-tint/80 shadow-[0_32px_80px_-16px_rgba(27,85,121,0.22),0_12px_32px_-8px_rgba(0,121,181,0.10)] backdrop-blur-2xl">
                {/* Top Ambient Light Halo */}
                <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 size-80 rounded-full bg-brand/15 blur-3xl" />
                <div className="pointer-events-none absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-brand via-blue-light to-blue-dark" />

                {/* Concentric Architectural Halo Rings */}
                <div className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 size-72 rounded-full border border-brand/20 opacity-60" />
                <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 size-88 rounded-full border border-blue/10 opacity-40" />

                {/* Header in Arch */}
                <div className="relative z-10 pt-8 px-6 text-center flex flex-col items-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/8 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.38em] text-brand-deep">
                    <span className="size-1.5 rounded-full bg-brand" />
                    <span>{t("eyebrow")}</span>
                  </span>

                  <h2
                    id="historia-title"
                    className="mt-2.5 font-display text-3xl font-medium leading-none tracking-[-0.035em] text-ink sm:text-4xl"
                  >
                    {t("title")}
                  </h2>

                  <p className="mt-2 max-w-xs text-xs font-semibold text-slate-500">
                    {tr("Formação e especialização cirúrgica no HC-FMUSP")}
                  </p>
                </div>
              </div>

              {/* Large, Imposing Dr. Claudio Figure */}
              <div className="relative z-20 h-[76vh] max-h-[780px] min-h-[520px] w-full flex items-end justify-center">
                {/* Ground Shadow on Plinth */}
                <div className="pointer-events-none absolute bottom-2 inset-x-12 h-8 rounded-full bg-blue-dark/30 blur-xl" />

                <div className="relative h-full w-full">
                  <Image
                    src="/brand/dr-claudio-seated.png"
                    alt="Dr. Claudio Eduardo"
                    fill
                    priority
                    sizes="(min-width: 1280px) 560px, 38vw"
                    className="object-contain object-bottom drop-shadow-[0_28px_56px_rgba(27,85,121,0.30)]"
                  />
                </div>

                {/* Soft ground lip fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white/90 to-transparent" />

                {/* Luxury Credentials Pill */}
                <div className="pointer-events-auto absolute bottom-5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2.5 rounded-full border border-blue/15 bg-white/95 px-4 py-2 text-[11px] font-bold text-blue-dark shadow-md backdrop-blur-md whitespace-nowrap">
                  <span className="size-2 rounded-full bg-brand animate-pulse" />
                  <span>Dr. Claudio Eduardo · CRM 14.706-SC · SBCP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Layout */}
      <div className="lg:hidden">
        <MobileHistory
          nodes={localizedNodes}
          eyebrow={t("eyebrow")}
          title={t("title")}
          lead={t("lead")}
          text={t("text")}
          cta={t("cta")}
        />
      </div>
    </section>
  );
}
