"use client";

import Image from "next/image";
import Link from "next/link";
import { ClipboardList, HeartPulse } from "lucide-react";
import { useTranslations } from "next-intl";
import { diferenciais } from "@/content/home";
import { WHATSAPP_HREF } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

const icons = [HeartPulse, ClipboardList];

export function Diferenciais() {
  const t = useTranslations("home.differentials");

  return (
    <section className="relative isolate overflow-hidden bg-brand pb-28 text-white lg:pb-36">
      <Image
        src="/cirurgias/cirurgia-intima-feminina/mockups/consulta-editorial.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-15 mix-blend-multiply"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,196,201,0.92)_0%,rgba(6,196,201,0.86)_49.9%,rgba(4,152,171,0.9)_50.1%,rgba(4,152,171,0.94)_100%)]" />

      <div className="relative mx-auto grid max-w-6xl md:grid-cols-2">
        {diferenciais.map((item, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <article
                className={`flex min-h-56.25 flex-col justify-center px-7 py-9 sm:px-10 md:min-h-61.25 ${
                  index === 1 ? "border-t border-white/20 md:border-t-0 md:pl-14" : "md:pr-14"
                }`}
              >
                <Icon className="size-10" strokeWidth={1.4} />
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.5em] text-white/85">{t(`items.${index}.eyebrow`)}</p>
                <h2 className="mt-0.5 text-[28px] font-extrabold uppercase leading-none tracking-tight sm:text-[30px]">
                  {t(`items.${index}.title`)}
                </h2>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <p className="max-w-78.75 text-xs font-medium leading-5 text-white/90">
                    {t(`items.${index}.text`)}
                  </p>
                  <Link
                    href={WHATSAPP_HREF}
                    className="inline-flex h-8 shrink-0 items-center rounded-full border border-white/80 px-4 text-[11px] font-bold transition hover:bg-white hover:text-brand-deep"
                  >
                    {t("more")}
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
