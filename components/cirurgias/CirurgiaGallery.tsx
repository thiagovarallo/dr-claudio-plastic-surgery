"use client";

import Image from "next/image";
import type { CirurgiaGalleryItem } from "@/content/cirurgias/types";

type Props = {
  items: CirurgiaGalleryItem[];
};

export function CirurgiaGallery({ items }: Props) {
  const loopItems = [...items, ...items];

  return (
    <section className="overflow-hidden bg-navy text-white" aria-labelledby="gallery-heading">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 pt-14 md:grid-cols-[0.82fr_1.18fr] md:px-10 md:pt-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua">Ambiente de cuidado</p>
          <h2 id="gallery-heading" className="mt-3 max-w-xl font-display text-4xl font-medium leading-tight md:text-5xl">
            Consulta, orientação e detalhes clínicos
          </h2>
        </div>
        <p className="max-w-xl self-end leading-relaxed text-white/70">
          Imagens editoriais para contextualizar o atendimento, sem exposição anatômica e sem aparência de galeria de
          resultado.
        </p>
      </div>

      <div className="marquee mt-9 pb-14 md:pb-20" aria-label="Imagens do ambiente de cuidado">
        <div className="marquee-track flex w-max gap-5 px-6 md:gap-7 md:px-10">
          {loopItems.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              aria-hidden={index >= items.length}
              className="relative aspect-square w-[min(68vw,320px)] shrink-0 overflow-hidden rounded-2xl bg-accent-soft"
            >
              <Image
                src={item.src}
                alt={index < items.length ? item.alt : ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 68vw, 320px"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
