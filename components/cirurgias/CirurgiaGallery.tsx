import Image from "next/image";
import { useLocale } from "next-intl";
import type { CirurgiaGalleryItem } from "@/content/cirurgias/types";
import { translateContent } from "@/i18n/content";
import { ScrollReveal } from "./ScrollReveal";

type Props = { items: CirurgiaGalleryItem[] };

export function CirurgiaGallery({ items }: Props) {
  const locale = useLocale();
  const tr = (text: string) => translateContent(locale, text);
  return (
    <section className="overflow-hidden bg-navy-deep py-20 text-white sm:py-28" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <ScrollReveal>
            <h2 id="gallery-heading" className="max-w-xl font-display text-5xl font-medium leading-[0.95] sm:text-6xl">
              {tr("Informação, acolhimento e discrição")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80} className="lg:justify-self-end">
            <p className="max-w-lg text-sm leading-7 text-white/62">
              {tr("A consulta é um espaço reservado para esclarecer dúvidas, alinhar expectativas e compreender cada etapa com tranquilidade.")}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {items.map((item, index) => (
            <ScrollReveal
              key={item.src}
              delay={index * 70}
              className={index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}
            >
              <figure
                className={`group relative overflow-hidden rounded-[28px] bg-navy ${index === 0 ? "aspect-[4/5] h-full min-h-[520px]" : "aspect-[16/10] min-h-[250px]"}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 650px, 100vw" : "(min-width: 1024px) 450px, 100vw"}
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(8,31,48,0.72)_100%)]" />
                <figcaption className="absolute bottom-5 left-5 right-5 text-xs leading-5 text-white/78">
                  {item.alt}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
