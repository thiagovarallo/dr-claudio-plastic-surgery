"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone, Video } from "lucide-react";
import { clinicGallery, units } from "@/content/home";
import { WHATSAPP_HREF } from "@/content/site";

function ClinicPhoto({
  src,
  alt,
  className,
  depth,
  sizes,
}: {
  src: string;
  alt: string;
  className: string;
  depth: number;
  sizes: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : [`${depth}%`, `${-depth}%`],
  );

  return (
    <div ref={ref} className={`group relative overflow-hidden bg-slate-100 ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={src}
          initial={reduced ? false : { opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 130, damping: 24 }}
          className="absolute inset-0"
        >
          <motion.div style={{ y }} className="absolute -inset-y-12 inset-x-0">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Unidades() {
  const t = useTranslations("home.units");
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [start, setStart] = useState(0);
  const [unitIndex, setUnitIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleX = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["4%", "-6%"]);

  const first = clinicGallery[start % clinicGallery.length];
  const second = clinicGallery[(start + 1) % clinicGallery.length];
  const activeUnit = units[unitIndex];

  function go(step: number) {
    setStart((value) => (value + step + clinicGallery.length) % clinicGallery.length);
  }

  return (
    <section
      id="consultorio"
      ref={sectionRef}
      aria-labelledby="unidades-title"
      className="relative overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-16 lg:h-152.5 lg:py-0"
    >
      <motion.h2
        id="unidades-title"
        style={{ x: titleX }}
        className="pointer-events-none absolute left-[31%] top-0 whitespace-nowrap text-[clamp(4.4rem,8vw,8.8rem)] font-extrabold uppercase leading-none tracking-[-0.055em] text-slate-100"
      >
        {t("title")}
      </motion.h2>

      <div className="relative mx-auto grid max-w-[1905px] gap-4 px-5 pt-20 sm:px-8 sm:pt-24 lg:h-full lg:grid-cols-[29%_41%_30%] lg:gap-0 lg:px-0 lg:pt-18.5 z-50">
        <ClinicPhoto
          src={first.src}
          alt={first.alt}
          depth={6}
          sizes="(max-width: 1023px) 100vw, 29vw"
          className="h-65 rounded-[26px] sm:h-90 lg:h-125 lg:rounded-l-none lg:rounded-r-[30px] xl:h-132.5"
        />

        <ClinicPhoto
          src={second.src}
          alt={second.alt}
          depth={10}
          sizes="(max-width: 1023px) 100vw, 41vw"
          className="h-77.5 rounded-[26px] sm:h-105 lg:mx-5 lg:h-125 lg:rounded-[30px] xl:h-132.5"
        />

        <div className="self-center px-1 pt-7 sm:col-span-2 lg:col-span-1 lg:px-8 lg:pt-0 xl:px-12">
          <div
            role="tablist"
            aria-label={t("choose")}
            className="mb-7 grid max-w-sm grid-cols-2 rounded-full bg-slate-100 p-1"
          >
            {units.map((item, index) => (
              <button
                key={item.id}
                id={`unit-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={unitIndex === index}
                aria-controls="unit-panel"
                onClick={() => setUnitIndex(index)}
                className={`rounded-full px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.08em] transition ${
                  unitIndex === index
                    ? "bg-white text-brand-deep shadow-sm"
                    : "text-slate-500 hover:text-ink"
                }`}
              >
                {t(`items.${index}.city`)}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              id="unit-panel"
              key={activeUnit.id}
              role="tabpanel"
              aria-labelledby={`unit-tab-${activeUnit.id}`}
              initial={reduced ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.48em] text-slate-500">
                {t(`items.${unitIndex}.eyebrow`)}
              </p>
              <h3 className="mt-2 text-[clamp(2.7rem,4vw,4.7rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.065em] text-ink">
                {t(`items.${unitIndex}.city`)}
              </h3>

              <address className="mt-8 space-y-2.5 not-italic text-sm font-semibold leading-5 text-slate-600">
                <p className="flex gap-3">
                  {activeUnit.mode === "online" ? (
                    <Video className="mt-0.5 size-5 shrink-0 text-brand" />
                  ) : (
                    <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                  )}
                  <span>
                    {t(`items.${unitIndex}.address`)}
                    <br />
                    {t(`items.${unitIndex}.complement`)}
                  </span>
                </p>
                <a href={activeUnit.emailHref} className="flex gap-3 transition hover:text-ink">
                  <Mail className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="break-all">{activeUnit.email}</span>
                </a>
                <a href={activeUnit.phoneHref} className="flex gap-3 transition hover:text-ink">
                  <Phone className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>{activeUnit.phone}</span>
                </a>
              </address>

              <Link
                href={WHATSAPP_HREF}
                className="mt-8 inline-flex h-12 items-center gap-4 rounded-full bg-brand px-8 text-sm font-bold text-white shadow-[0_10px_24px_rgba(8,191,196,0.26)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                {t(`items.${unitIndex}.contact`)}
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute left-1/2 top-78 z-10 flex -translate-x-1/2 gap-2 lg:left-[29%] lg:top-57.5 lg:flex-col lg:gap-3">
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={t("next")}
            className="grid size-14 place-items-center rounded-full bg-brand text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-deep lg:size-16"
          >
            <ArrowRight className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={t("previous")}
            className="grid size-14 place-items-center rounded-full bg-blue-dark text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue lg:size-16"
          >
            <ArrowLeft className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
