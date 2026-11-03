"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardList, HeartPulse } from "lucide-react";
import { useTranslations } from "next-intl";
import { diferenciais } from "@/content/home";
import { WHATSAPP_HREF } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

const icons = [HeartPulse, ClipboardList];

export function Diferenciais() {
  const t = useTranslations("home.differentials");

  return (
    <section className="relative isolate overflow-hidden bg-blue py-7 text-white sm:py-9 lg:py-11">
      <Image
        src="/cirurgias/cirurgia-intima-feminina/mockups/consulta-editorial.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-15 mix-blend-multiply"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,var(--blue-dark)_0%,var(--blue)_55%,var(--blue-light)_100%)] opacity-95" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_90%_at_15%_50%,color-mix(in_srgb,var(--green)_18%,transparent),transparent_65%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid divide-y divide-white/15 md:grid-cols-2 md:divide-y-0 md:divide-x">
          {diferenciais.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.08} className="h-full">
                <article
                  className={`flex h-full flex-col justify-between py-4 sm:py-5 ${
                    index === 0 ? "md:pr-10 lg:pr-14" : "md:pl-10 lg:pl-14"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3.5">
                      <span className="flex size-12 sm:size-13 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/12 text-brand shadow-[0_6px_20px_rgba(8,191,196,0.25)] backdrop-blur-md">
                        <Icon className="size-6 sm:size-6.5" strokeWidth={1.75} />
                      </span>
                      <p className="text-xs font-bold uppercase tracking-[0.38em] text-brand sm:text-[13px]">
                        {t(`items.${index}.eyebrow`)}
                      </p>
                    </div>

                    <h2 className="mt-3.5 font-display text-2xl sm:text-3xl lg:text-[36px] font-medium leading-[0.96] tracking-[-0.035em] text-white">
                      {t(`items.${index}.title`)}
                    </h2>

                    <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
                      {t(`items.${index}.text`)}
                    </p>
                  </div>

                  <div className="mt-5">
                    <Link
                      href={WHATSAPP_HREF}
                      className="inline-flex h-9.5 items-center gap-2 rounded-full bg-brand px-5 text-xs sm:text-[13px] font-bold text-white shadow-[0_8px_20px_rgba(8,191,196,0.25)] transition hover:-translate-y-0.5 hover:bg-white hover:text-blue-dark"
                    >
                      <span>{t("more")}</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
