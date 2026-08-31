"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useState, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { surgeries } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function Cirurgias() {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const previewX = useSpring(pointerX, { stiffness: 260, damping: 30 });
  const previewY = useSpring(pointerY, { stiffness: 260, damping: 30 });

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  }

  return (
    <section id="cirurgias" className="relative overflow-hidden bg-navy-deep py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-105 w-105 rounded-full bg-brand/12 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brand">Nossas</p>
            <h2 className="mt-2 font-display text-5xl font-medium leading-none sm:text-6xl lg:text-7xl">
              Cirurgias
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-sm">
            <p className="text-sm leading-7 text-white/64">
              Procedimentos estéticos, reparadores e de afirmação de gênero. Toda indicação parte de
              uma avaliação individual em consulta.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14" onMouseMove={onMove}>
          {reduced ? null : (
            <AnimatePresence>
              {hovered !== null ? (
                <motion.div
                  key="preview"
                  aria-hidden
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{ x: previewX, y: previewY }}
                  className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
                >
                  <div className="relative -ml-40 -mt-32 h-64 w-80 overflow-hidden rounded-3xl border border-white/12 shadow-2xl">
                    <Image
                      src={surgeries[hovered].image}
                      alt=""
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-navy-deep/20" />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          )}

          <ul className="border-t border-white/12">
            {surgeries.map((surgery, index) => {
              const external = surgery.href.startsWith("http");
              const dimmed = hovered !== null && hovered !== index;

              return (
                <Reveal key={surgery.title} delay={index * 0.04}>
                  <li className="border-b border-white/12">
                    <Link
                      href={surgery.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(index)}
                      onBlur={() => setHovered(null)}
                      className={`group flex items-center gap-5 py-6 transition-opacity duration-300 sm:gap-8 sm:py-8 ${
                        dimmed ? "lg:opacity-35" : "opacity-100"
                      }`}
                    >
                      <span className="w-8 shrink-0 text-xs font-bold tracking-[0.2em] text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl lg:hidden">
                        <Image
                          src={surgery.image}
                          alt=""
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-2xl font-medium leading-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                          {surgery.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-xs leading-6 text-white/58 sm:text-sm">
                          {surgery.text}
                        </p>
                      </div>

                      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/20 transition duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-navy-deep">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </Link>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
