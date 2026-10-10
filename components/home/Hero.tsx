"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { credibility } from "@/content/home";
import { WHATSAPP_HREF } from "@/content/site";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function Hero() {
  const t = useTranslations("home.hero");
  const credibilityText = useTranslations("home.credibility");
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1.06, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -60]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-navy-deep text-white"
    >
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 -z-20">
        <picture className="block size-full">
          <source media="(max-width: 639px)" srcSet="/brand/hero-home-mobile.png" />
          <Image
            src="/brand/hero-home-desktop.png"
            alt="Dr. Claudio Eduardo em seu consultório"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center] sm:object-[68%_18%] lg:object-[68%_14%]"
          />
        </picture>
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,31,48,0.95)_0%,rgba(8,31,48,0.82)_38%,rgba(8,31,48,0.35)_72%,rgba(8,31,48,0.12)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-[linear-gradient(0deg,rgba(8,31,48,0.92),rgba(8,31,48,0))]" />
      <div className="hero-aurora absolute -left-32 top-1/4 -z-10 h-105 w-105 rounded-full bg-brand/22 blur-3xl" />
      <div className="hero-grain absolute inset-0 -z-10 mix-blend-overlay" />

      <motion.div
        style={{ y: contentY }}
        className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-16 pt-32 sm:px-8"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.46em] text-brand">{t("eyebrow")}</p>
        <AnimatedText
          as="h1"
          delay={0.08}
          className="mt-5 max-w-3xl font-display text-[54px] font-medium leading-[0.94] text-white sm:text-7xl lg:text-[86px]"
          text={t("title")}
        />
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-7 max-w-lg text-sm leading-7 text-white/76 sm:text-base"
        >
          {t("description")}
        </motion.p>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href={WHATSAPP_HREF}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
          >
            {t("schedule")}
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/cirurgias"
            className="inline-flex h-12 items-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white/88 transition hover:border-white/60"
          >
            {t("surgeries")}
          </Link>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre"
        aria-label={t("scroll")}
        animate={reduced ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[6.75rem] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/65 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:bottom-28"
      >
        <span>{t("scroll")}</span>
        <span className="grid size-8 place-items-center rounded-full border border-white/25 bg-navy-deep/25 backdrop-blur-sm">
          <ChevronDown className="size-4" />
        </span>
      </motion.a>

      <div className="relative border-t border-white/10 bg-navy-deep/35 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {credibility.map((item, index) => (
            <motion.div
              key={item.value}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.08, duration: 0.45 }}
              className={`px-5 py-5 sm:px-6 ${index > 0 ? "sm:border-l sm:border-white/10" : ""}`}
            >
              <p className="text-sm font-bold text-white">{credibilityText(`${index}.value`)}</p>
              <p className="mt-1 text-[11px] leading-4 text-white/55">{credibilityText(`${index}.hint`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
