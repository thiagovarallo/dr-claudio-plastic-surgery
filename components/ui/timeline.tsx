"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export interface TimelineEntry {
  title: string;
  content: ReactNode;
}

type TimelineProps = {
  data: TimelineEntry[];
  eyebrow: string;
  heading: string;
  description: string;
};

export function Timeline({ data, eyebrow, heading, description }: TimelineProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const updateHeight = () => setHeight(element.getBoundingClientRect().height);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 18%", "end 62%"],
  });
  const rawHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const heightTransform = useSpring(rawHeight, {
    stiffness: 115,
    damping: 26,
    mass: 0.24,
  });
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div ref={containerRef} className="w-full bg-surface-soft">
      <div className="mx-auto grid max-w-6xl gap-7 px-5 pb-4 pt-24 sm:px-8 sm:pt-32 lg:grid-cols-[1fr_1.15fr] lg:items-end">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">
            {eyebrow}
          </p>
          <h2 className="mt-5 max-w-xl font-display text-[46px] font-medium leading-none text-ink sm:text-[64px]">
            {heading}
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-slate-600 lg:justify-self-end">
          {description}
        </p>
      </div>

      <div ref={contentRef} className="relative mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        {data.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="flex justify-start gap-6 pt-14 first:pt-16 sm:gap-10 md:pt-28 md:first:pt-24"
          >
            <div className="sticky top-28 z-20 flex h-fit w-4 shrink-0 self-start items-center md:top-32 md:w-[310px] lg:w-[350px]">
              <div className="absolute -left-[8px] grid size-10 place-items-center rounded-full bg-surface-soft md:-left-[8px]">
                <span className="size-3.5 rounded-full border border-brand/45 bg-white shadow-[0_0_0_5px_rgba(8,191,196,0.14)]" />
              </div>
              <h3 className="hidden pl-16 font-display text-[42px] font-semibold leading-none tracking-[-0.03em] text-blue-dark/55 md:block lg:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="min-w-0 flex-1 pb-4">
              <h3 className="mb-5 font-display text-[32px] font-semibold leading-none tracking-[-0.03em] text-blue-dark md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          aria-hidden
          style={{ height }}
          className="absolute left-[31px] top-0 w-px overflow-hidden bg-slate-300/75 sm:left-[43px]"
        >
          <motion.div
            style={
              reduced
                ? { height: "100%", opacity: 1 }
                : { height: heightTransform, opacity: opacityTransform }
            }
            className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-b from-brand via-blue-light to-blue-dark shadow-[0_0_12px_rgba(8,191,196,0.35)]"
          />
        </div>
      </div>
    </div>
  );
}
