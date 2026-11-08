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
      {/* Imagem full-bleed contínua com máscara alpha suave no mobile para fusão perfeita com o BG */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-x-0 top-0 -z-20 h-[68svh] max-sm:[mask-image:linear-gradient(to_bottom,black_0%,black_44%,rgba(0,0,0,0.55)_72%,transparent_100%)] sm:inset-0 sm:h-full"
      >
        <Image
          src="/brand/hero-contato-jaleco.png"
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_12%] sm:object-top"
        />
      </motion.div>

      {/* Gradiente cinematográfico multi-stop: mescla imagem e BG sem qualquer linha divisória */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--blue-dark)_40%,transparent)_0%,transparent_22%,color-mix(in_srgb,var(--blue-dark)_30%,transparent)_42%,color-mix(in_srgb,var(--blue-dark)_72%,transparent)_56%,color-mix(in_srgb,var(--blue-dark)_94%,transparent)_68%,var(--blue-dark)_80%)] sm:bg-[linear-gradient(90deg,color-mix(in_srgb,var(--blue-dark)_86%,transparent)_0%,color-mix(in_srgb,var(--blue-dark)_68%,transparent)_34%,color-mix(in_srgb,var(--blue-dark)_16%,transparent)_54%,transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-linear-to-t from-blue-dark/45 to-transparent" />
      <div className="hero-aurora absolute -left-32 top-1/4 -z-10 h-105 w-105 rounded-full bg-brand/15 blur-3xl" />

      <motion.div
        style={{ y: contentY }}
        className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pb-10 pt-[36svh] sm:justify-center sm:px-8 sm:pb-16 sm:pt-32"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.46em] text-brand">{t("eyebrow")}</p>
        <AnimatedText
          as="h1"
          delay={0.08}
          className="mt-3 max-w-2xl font-display text-[38px] font-medium leading-[0.94] text-white sm:mt-5 sm:max-w-xl sm:text-6xl lg:max-w-2xl lg:text-[82px]"
          text={t("title")}
        />
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-4 max-w-md text-sm leading-6 text-white/80 sm:mt-7 sm:max-w-lg sm:text-base sm:leading-7"
        >
          {t("description")}
        </motion.p>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9"
        >
          <Link
            href="/contato"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(8,191,196,0.28)] transition hover:bg-brand-deep"
          >
            {t("schedule")}
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/cirurgias"
            className="inline-flex h-12 items-center rounded-full border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white/92 backdrop-blur-xs transition hover:border-white/60 hover:bg-white/10"
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
        className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/65 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:flex"
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
