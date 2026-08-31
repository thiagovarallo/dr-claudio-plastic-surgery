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
import { history } from "@/content/home";
import { WHATSAPP_HREF } from "@/content/site";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Node = (typeof history.nodes)[number];

const NODES = history.nodes;
const SCROLL_STEP_VH = 92;

const POINTS: { left: string; top: string }[] = [
  { left: "42%", top: "75%" },
  { left: "52%", top: "58%" },
  { left: "64%", top: "39%" },
  { left: "77%", top: "23%" },
  { left: "91%", top: "26%" },
];

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
          className={`mx-auto grid size-12 place-items-center rounded-full border-2 bg-white shadow-[0_8px_22px_rgba(32,40,50,0.10)] transition-[transform,box-shadow,border-color] duration-500 xl:size-14 ${
            isActive
              ? isBrand
                ? "scale-110 border-brand shadow-[0_0_0_9px_rgba(8,191,196,0.15)]"
                : "scale-110 border-ink shadow-[0_0_0_9px_rgba(32,40,50,0.10)]"
              : isBrand
                ? "border-brand"
                : "border-slate-300"
          }`}
        >
          <span className={`size-6 rounded-full xl:size-7 ${isBrand ? "bg-brand" : "bg-ink"}`} />
        </span>
        <strong
          className={`mt-2 block text-[25px] font-extrabold leading-none tracking-[-0.05em] xl:text-[30px] ${
            isBrand ? "text-brand" : "text-ink"
          }`}
        >
          {node.year}
        </strong>
      </div>
    </motion.div>
  );
}

function ActiveStory({ node, index }: { node: Node; index: number }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.article
        key={node.year}
        initial={{ opacity: 0, x: 110 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -24 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[5%] left-[56%] z-20 w-64 overflow-hidden rounded-[10px] bg-brand p-2.5 text-white shadow-[0_22px_55px_rgba(8,191,196,0.24)] xl:w-70"
      >
        <div className="relative min-h-62 rounded-[7px] border border-white/60 px-6 py-6 xl:min-h-66 xl:px-7">
          <div className="absolute -bottom-10 -right-8 size-36 rounded-full bg-white/8" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-white/70">
                Marco {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[32px] font-extrabold leading-none tracking-[-0.05em]">
                {node.year}
              </p>
            </div>
            <MedicalIcon className="size-10 text-white/90" />
          </div>
          <h3 className="relative mt-4 text-[13px] font-extrabold uppercase leading-4 tracking-tight">
            {node.label}
          </h3>
          <p className="relative mt-2 text-[10px] font-semibold leading-4 text-white/75">{node.place}</p>
          <p className="relative mt-3 text-[11px] leading-[1.55] text-white/90">{node.text}</p>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}

function MobileHistory() {
  return (
    <div className="relative overflow-hidden px-5 pb-20 pt-24 sm:px-8">
      <div className="pointer-events-none absolute -right-28 top-24 size-72 rounded-full bg-brand/8 blur-3xl" />
      <div className="mx-auto max-w-xl">
        <SectionTitle eyebrow="Conheça" title="Nossa história" size="lg" />
        <p className="mt-4 max-w-lg text-[15px] font-bold leading-6 text-ink">{history.lead}</p>
        <p className="mt-3 max-w-lg text-[13px] leading-6 text-slate-600">{history.text}</p>

        <div className="relative mt-12 ml-3 border-l border-dashed border-slate-300 pl-8">
          {NODES.map((node) => {
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
          href={WHATSAPP_HREF}
          className="mt-10 inline-flex h-11 items-center gap-3 rounded-full bg-brand px-6 text-xs font-bold text-white transition hover:bg-brand-deep"
        >
          Conhecer o trabalho
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

export function Historia() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollProgress = useMotionValue(0);
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
  const activeNode = NODES[activeIndex];

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
                <SectionTitle id="historia-title" eyebrow="Conheça" title="Nossa história" />
                <p className="mt-3 text-[13px] font-bold leading-5 text-ink xl:text-[14px] xl:leading-6">{history.lead}</p>
                <p className="mt-2 text-[11px] leading-5 text-slate-600 xl:text-xs">{history.text}</p>
                <Link
                  href={WHATSAPP_HREF}
                  className="mt-5 inline-flex h-10 items-center gap-3 rounded-full bg-brand px-6 text-[11px] font-bold text-white transition hover:bg-brand-deep"
                >
                  Conhecer o trabalho
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <motion.div aria-hidden style={reduced ? undefined : { clipPath: lineClip }} className="absolute inset-0">
                <svg viewBox="0 0 1440 850" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
                  <path
                    d="M470 720C570 720 640 660 700 560C780 430 850 360 920 320C1050 240 1110 180 1220 190C1320 196 1380 240 1460 245"
                    stroke="#65717c"
                    strokeWidth="2.2"
                    strokeDasharray="2 9"
                    strokeLinecap="round"
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

              <ActiveStory node={activeNode} index={activeIndex} />

              <p className="absolute bottom-[3.5%] right-[4%] z-20 text-[8px] font-bold uppercase tracking-[0.32em] text-slate-400">
                Role para percorrer a trajetória
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <MobileHistory />
      </div>
    </section>
  );
}
