"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
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
const SCROLL_STEP_VH = 92;

const POINTS: { left: string; top: string }[] = [
  { left: "40%", top: "81%" },
  { left: "50%", top: "58%" },
  { left: "63%", top: "39%" },
  { left: "76%", top: "23%" },
  { left: "89%", top: "26%" },
];

const CARD_SIDES = ["above", "below", "above", "below", "below"] as const;
const HISTORY_PATH =
  "M 576 688 C 640 660 660 535 720 493 C 785 405 850 337 907 332 C 1000 300 1028 170 1094 196 C 1170 215 1220 195 1282 221";

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

function TimelinePoint({
  node,
  index,
  progress,
  activeIndex,
  reduced,
}: {
  node: Node;
  index: number;
  progress: MotionValue<number>;
  activeIndex: number;
  reduced: boolean | null;
}) {
  const point = POINTS[index] ?? POINTS[POINTS.length - 1];
  const reveal = index === 0 ? 0 : index / NODES.length + 0.025;
  const opacity = useTransform(progress, [reveal - 0.07, reveal + 0.025], [0, 1]);
  const x = useTransform(progress, [reveal - 0.07, reveal + 0.035], [260, 0]);
  const scale = useTransform(progress, [reveal - 0.06, reveal + 0.03], [0.9, 1]);
  const isActive = index === activeIndex;
  const isBrand = node.tone === "brand";

  return (
    <motion.div
      className="absolute z-20 -translate-x-1/2"
      style={{
        left: point.left,
        top: point.top,
        ...(reduced || index === 0 ? {} : { opacity, x, scale }),
      }}
    >
      <div className="relative text-center">
        <span
          className={`relative mx-auto grid size-14 place-items-center transition-transform duration-500 xl:size-16 ${
            isActive ? "scale-110" : ""
          }`}
        >
          <span
            className={`absolute inset-[7px] rotate-45 rounded-[13px] border-2 bg-white shadow-[0_8px_22px_rgba(27,85,121,0.12)] transition-[box-shadow,border-color,background-color] duration-500 ${
            isActive
              ? isBrand
                ? "border-brand shadow-[0_0_0_8px_rgba(8,191,196,0.16)]"
                : "border-blue shadow-[0_0_0_8px_rgba(0,121,181,0.14)]"
              : isBrand
                ? "border-brand"
                : "border-border"
            }`}
          />
          <span
            className={`relative z-10 size-5 rounded-full border-[3px] border-white shadow-[0_2px_8px_rgba(27,85,121,0.18)] transition-[background-color,transform] duration-500 xl:size-6 ${
              isBrand ? "bg-brand" : "bg-blue-dark"
            }`}
          />
        </span>
        <strong
          className={`mt-1 inline-flex rounded-full border bg-white px-3 py-1 text-[17px] font-extrabold leading-none tracking-[-0.05em] shadow-[0_5px_14px_rgba(27,85,121,0.10)] transition-[border-color,color] duration-500 xl:text-[20px] ${
            isBrand ? "text-brand" : "text-blue-dark"
          } ${isActive ? (isBrand ? "border-brand/45" : "border-blue/40") : "border-border"}`}
        >
          {node.year}
        </strong>
      </div>
    </motion.div>
  );
}

function ActiveStory({ node, index, marco }: { node: Node; index: number; marco: string }) {
  const point = POINTS[index] ?? POINTS[POINTS.length - 1];
  const side = CARD_SIDES[index] ?? "below";
  const isAbove = side === "above";

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={node.year}
        initial={{ opacity: 0, x: isAbove ? -36 : 36, y: isAbove ? 12 : -12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: isAbove ? 18 : -18 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-30"
        style={{ left: point.left, top: point.top }}
      >
        <div className="relative w-[clamp(13.5rem,17vw,16rem)] -translate-x-1/2">
          <span
            aria-hidden
            className={`absolute left-1/2 z-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-light/25 via-brand to-blue/25 ${
              isAbove ? "top-[-4.5rem] h-[4.5rem]" : "top-0 h-24"
            }`}
          />
          <article
            className={`absolute left-0 z-10 w-full overflow-hidden rounded-[10px] bg-linear-to-br from-blue-light to-blue p-2.5 text-white shadow-[0_22px_55px_rgba(0,121,181,0.28)] ${
              isAbove ? "bottom-[4.5rem]" : "top-24"
            }`}
          >
            <div className="relative min-h-52 rounded-[7px] border border-white/60 px-5 py-5 xl:min-h-56 xl:px-6">
              <div className="absolute -bottom-10 -right-8 size-36 rounded-full bg-white/8" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-white/70">
                    {marco} {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[30px] font-extrabold leading-none tracking-[-0.05em]">
                    {node.year}
                  </p>
                </div>
                <MedicalIcon className="size-9 text-white/90" />
              </div>
              <h3 className="relative mt-3 text-[12px] font-extrabold uppercase leading-4 tracking-tight">
                {node.label}
              </h3>
              <p className="relative mt-2 text-[10px] font-semibold leading-4 text-white/75">{node.place}</p>
              <p className="relative mt-3 text-[10px] leading-[1.5] text-white/90">{node.text}</p>
            </div>
          </article>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function MobileHistory({ nodes, eyebrow, title, lead, text, cta }: { nodes: Node[]; eyebrow: string; title: string; lead: string; text: string; cta: string }) {
  return (
    <div className="relative overflow-hidden px-5 pb-20 pt-24 sm:px-8">
      <div className="pointer-events-none absolute -right-28 top-24 size-72 rounded-full bg-brand/8 blur-3xl" />
      <div className="mx-auto max-w-xl">
        <SectionTitle eyebrow={eyebrow} title={title} size="lg" />
        <p className="mt-4 max-w-lg text-[15px] font-bold leading-6 text-ink">{lead}</p>
        <p className="mt-3 max-w-lg text-[13px] leading-6 text-slate-600">{text}</p>

        <div className="relative mt-12 ml-3 border-l border-dashed border-slate-300 pl-8">
          {nodes.map((node) => {
            const isBrand = node.tone === "brand";
            return (
              <motion.article
                key={node.year}
                initial={{ opacity: 0, x: 56 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.6, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="relative mb-7 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_16px_46px_rgba(32,40,50,0.08)] last:mb-0"
              >
                <span
                  className={`absolute -left-[43px] top-6 size-5 rounded-full border-4 border-white ring-2 ${
                    isBrand ? "bg-brand ring-brand" : "bg-ink ring-slate-300"
                  }`}
                />
                <p className={`text-[30px] font-extrabold leading-none tracking-[-0.06em] ${isBrand ? "text-brand" : "text-ink"}`}>
                  {node.year}
                </p>
                <h3 className="mt-2 text-[13px] font-extrabold uppercase leading-5 text-ink">{node.label}</h3>
                <p className="mt-1 text-[11px] font-semibold leading-4 text-slate-500">{node.place}</p>
                <p className="mt-3 text-xs leading-5 text-slate-600">{node.text}</p>
              </motion.article>
            );
          })}
        </div>

        <Link
          href="/claudio-eduardo-cirurgiao-plastico"
          className="mt-10 inline-flex h-11 items-center gap-3 rounded-full bg-brand px-6 text-xs font-bold text-white transition hover:bg-brand-deep"
        >
          {cta}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

export function Historia() {
  const t = useTranslations("home.history");
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollProgress = useMotionValue(0);
  const localizedNodes = NODES.map((node, index) => ({
    ...node,
    year: t(`nodes.${index}.year`),
    label: t(`nodes.${index}.label`),
    place: t(`nodes.${index}.place`),
    text: t(`nodes.${index}.text`),
  }));
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 115,
    damping: 30,
    mass: 0.28,
  });

  const portraitY = useTransform(smoothProgress, [0, 1], reduced ? ["0%", "0%"] : ["2%", "-3%"]);
  const lineClip = useTransform(smoothProgress, [0, 0.85], ["inset(0 56% 0 0)", "inset(0 0% 0 0)"]);

  useEffect(() => {
    if (reduced) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const element = scrollRef.current;
      if (!element || element.offsetHeight === 0) return;

      const start = element.getBoundingClientRect().top + window.scrollY;
      const distance = Math.max(1, element.offsetHeight - window.innerHeight);
      const latest = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      scrollProgress.set(latest);

      const next = Math.min(NODES.length - 1, Math.floor(latest * NODES.length));
      setActiveIndex((previous) => (previous === next ? previous : next));
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced, scrollProgress]);

  const scrollHeight = `${100 + NODES.length * SCROLL_STEP_VH}vh`;
  const activeNode = localizedNodes[activeIndex];

  return (
    <section id="sobre" aria-labelledby="historia-title" className="relative scroll-mt-19 bg-white">
      <div className="hidden lg:block">
        <div ref={scrollRef} className="relative" style={{ height: reduced ? undefined : scrollHeight }}>
          <div className={`relative overflow-hidden bg-white ${reduced ? "min-h-190" : "sticky top-19 h-[calc(100svh-4.75rem)] min-h-170 max-h-215"}`}>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-2/3 opacity-45 [background-image:linear-gradient(135deg,transparent_0%,transparent_49.7%,rgba(148,163,184,0.13)_50%,transparent_50.3%,transparent_100%)] [background-size:150px_150px]" />
            <div className="pointer-events-none absolute -right-40 top-1/3 size-110 rounded-full bg-brand/5 blur-[90px]" />

            <div className="relative mx-auto h-full max-w-360 px-8 xl:px-12">
              <motion.div
                style={{ y: portraitY }}
                className="absolute -bottom-[15%] -left-[11%] z-10 h-[116%] w-[45%] max-w-164"
              >
                <Image
                  src="/brand/generated/dr-claudio-cutout-trimmed.png"
                  alt="Dr. Claudio Eduardo"
                  fill
                  sizes="(max-width: 1280px) 46vw, 620px"
                  className="object-contain object-bottom drop-shadow-[0_24px_38px_rgba(35,47,60,0.15)]"
                />
              </motion.div>

              <div className="absolute left-[23%] top-[10%] z-30 w-[27%] max-w-100">
                <SectionTitle id="historia-title" eyebrow={t("eyebrow")} title={t("title")} />
                <p className="mt-3 text-[13px] font-bold leading-5 text-ink xl:text-[14px] xl:leading-6">{t("lead")}</p>
                <p className="mt-2 text-[11px] leading-5 text-slate-600 xl:text-xs">{t("text")}</p>
                <Link
                  href="/claudio-eduardo-cirurgiao-plastico"
                  className="mt-5 inline-flex h-10 items-center gap-3 rounded-full bg-brand px-6 text-[11px] font-bold text-white transition hover:bg-brand-deep"
                >
                  {t("cta")}
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <svg
                aria-hidden
                viewBox="0 0 1440 850"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
                fill="none"
              >
                <path
                  d={HISTORY_PATH}
                  stroke="var(--border)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d={HISTORY_PATH}
                  stroke="var(--surface)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <motion.div
                aria-hidden
                style={reduced ? undefined : { clipPath: lineClip }}
                className="pointer-events-none absolute inset-0"
              >
                <svg viewBox="0 0 1440 850" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
                  <defs>
                    <linearGradient id="history-line-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="var(--blue-dark)" />
                      <stop offset="0.55" stopColor="var(--blue-light)" />
                      <stop offset="1" stopColor="var(--green)" />
                    </linearGradient>
                  </defs>
                  <path
                    d={HISTORY_PATH}
                    stroke="color-mix(in srgb, var(--blue-light) 16%, transparent)"
                    strokeWidth="13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d={HISTORY_PATH}
                    stroke="url(#history-line-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {NODES.map((node, index) => (
                <TimelinePoint
                  key={node.year}
                  node={node}
                  index={index}
                  progress={smoothProgress}
                  activeIndex={reduced ? -1 : activeIndex}
                  reduced={reduced}
                />
              ))}

              <ActiveStory node={activeNode} index={activeIndex} marco={t("marco")} />

              <p className="absolute bottom-[3.5%] right-[4%] z-20 text-[8px] font-bold uppercase tracking-[0.32em] text-slate-400">
                {t("scrollHint")}
              </p>
            </div>
          </div>
        </div>
      </div>

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
