"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { hospitals } from "@/content/home";

function HospitalPhoto({
  hospital,
  displayName,
  imageAlt,
  className,
  depth,
  sizes,
}: {
  hospital: (typeof hospitals)[number];
  displayName: string;
  imageAlt: string;
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
    <div ref={ref} className={`group relative overflow-hidden bg-slate-200 ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={hospital.id}
          initial={reduced ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 130, damping: 24 }}
          className="absolute inset-0"
        >
          <motion.div style={{ y }} className="absolute -inset-y-12 inset-x-0">
            <Image
              src={hospital.image}
              alt={`${imageAlt} ${displayName}`}
              fill
              sizes={sizes}
              className="object-cover transition duration-700 group-hover:scale-105"
              style={{ objectPosition: hospital.id === "santo-antonio" ? "38% center" : "center" }}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-navy-deep/75 to-transparent" />
            <p className="absolute inset-x-6 bottom-6 text-xs font-bold uppercase tracking-[0.16em] text-white">
              {displayName} · {hospital.city}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Hospitais() {
  const t = useTranslations("home.hospitals");
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [hospitalIndex, setHospitalIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleX = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-4%", "6%"]);
  const activeHospital = hospitals[hospitalIndex];
  const secondaryHospital = hospitals[(hospitalIndex + 1) % hospitals.length];

  return (
    <section
      id="hospitais"
      ref={sectionRef}
      aria-labelledby="hospitais-title"
      className="relative overflow-hidden bg-surface-soft pb-16 pt-12 sm:pb-20 sm:pt-16 lg:h-152.5 lg:py-0"
    >
      <motion.h2
        id="hospitais-title"
        style={{ x: titleX }}
        className="pointer-events-none absolute right-[26%] top-0 whitespace-nowrap text-[clamp(4rem,8vw,8.8rem)] font-extrabold uppercase leading-none tracking-[-0.055em] text-white"
      >
        {t("title")}
      </motion.h2>

      <div className="relative z-10 mx-auto grid max-w-[1905px] gap-4 px-5 pt-20 sm:px-8 sm:pt-24 lg:h-full lg:grid-cols-[30%_41%_29%] lg:gap-0 lg:px-0 lg:pt-18.5">
        <div className="self-center pb-7 sm:pb-9 lg:px-10 lg:pb-0 xl:px-12">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.42em] text-brand-deep">
            <Building2 className="size-4" />
            {t("eyebrow")}
          </div>

          <div
            role="tablist"
            aria-label={t("choose")}
            className="mt-5 grid max-w-md grid-cols-2 gap-2"
          >
            {hospitals.map((hospital, index) => (
              <button
                key={hospital.id}
                id={`hospital-tab-${hospital.id}`}
                type="button"
                role="tab"
                aria-selected={hospitalIndex === index}
                aria-controls="hospital-panel"
                onClick={() => setHospitalIndex(index)}
                className={`rounded-2xl border px-3 py-3 text-left transition ${
                  hospitalIndex === index
                    ? "border-brand/30 bg-white text-ink shadow-sm"
                    : "border-slate-200 bg-transparent text-slate-500 hover:border-brand/25 hover:text-ink"
                }`}
              >
                <span className="block text-[9px] font-bold tracking-[0.2em] text-brand">
                  0{index + 1}
                </span>
                <span className="mt-1 block text-[11px] font-extrabold leading-4">
                  {t(`items.${index}`).replace("Hospital ", "")}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              id="hospital-panel"
              key={activeHospital.id}
              role="tabpanel"
              aria-labelledby={`hospital-tab-${activeHospital.id}`}
              initial={reduced ? false : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: 12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="mt-6 text-[clamp(2.35rem,3.4vw,3.9rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.06em] text-ink">
                {t(`items.${hospitalIndex}`)}
              </h3>

              <address className="mt-6 space-y-2.5 not-italic text-sm font-semibold leading-5 text-slate-600">
                <p className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>
                    {activeHospital.address}
                    <br />
                    {activeHospital.complement}
                  </span>
                </p>
                <a href={activeHospital.emailHref} className="flex gap-3 transition hover:text-ink">
                  <Mail className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="break-all">{activeHospital.email}</span>
                </a>
                <a href={activeHospital.phoneHref} className="flex gap-3 transition hover:text-ink">
                  <Phone className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>{activeHospital.phone}</span>
                </a>
              </address>
            </motion.div>
          </AnimatePresence>
        </div>

        <HospitalPhoto
          hospital={activeHospital}
          displayName={t(`items.${hospitalIndex}`)}
          imageAlt={t("imageAlt")}
          depth={10}
          sizes="(max-width: 1023px) 100vw, 41vw"
          className="h-77.5 rounded-[26px] sm:h-105 lg:mx-5 lg:h-125 lg:rounded-[30px] xl:h-132.5"
        />

        <button
          type="button"
          onClick={() => setHospitalIndex((hospitalIndex + 1) % hospitals.length)}
          aria-label={`${t("next")} ${t(`items.${(hospitalIndex + 1) % hospitals.length}`)}`}
          className="text-left"
        >
          <HospitalPhoto
            hospital={secondaryHospital}
            displayName={t(`items.${(hospitalIndex + 1) % hospitals.length}`)}
            imageAlt={t("imageAlt")}
            depth={6}
            sizes="(max-width: 1023px) 100vw, 29vw"
            className="h-65 rounded-[26px] sm:h-90 lg:h-125 lg:rounded-l-[30px] lg:rounded-r-none xl:h-132.5"
          />
        </button>
      </div>
    </section>
  );
}
