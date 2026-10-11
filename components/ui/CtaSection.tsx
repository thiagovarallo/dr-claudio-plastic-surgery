import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_HREF } from "@/content/site";

type CtaSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  href?: string;
  className?: string;
};

export function CtaSection({
  eyebrow = "Blumenau · SC",
  title = "A próxima etapa da história pode começar com uma conversa.",
  description = "Agende uma avaliação para conversar sobre suas expectativas e entender, com clareza, quais possibilidades fazem sentido para você.",
  ctaLabel = "Agendar avaliação",
  href = WHATSAPP_HREF,
  className = "",
}: CtaSectionProps) {
  return (
    <section className={`px-4 pb-4 sm:px-6 sm:pb-6 ${className}`.trim()}>
      <div className="relative isolate mx-auto min-h-[520px] max-w-[1440px] overflow-hidden rounded-[30px] bg-navy-deep text-white sm:rounded-[38px]">
        <Image
          src="/brand/hero-clinic.jpg"
          alt="Consultório Dr. Claudio Eduardo em Blumenau"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[76%_center] sm:object-right"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--blue-dark)_0%,color-mix(in_srgb,var(--blue-dark)_92%,transparent)_30%,color-mix(in_srgb,var(--blue-dark)_38%,transparent)_44%,transparent_54%)] max-sm:bg-[linear-gradient(90deg,color-mix(in_srgb,var(--blue-dark)_92%,transparent)_0%,color-mix(in_srgb,var(--blue-dark)_72%,transparent)_60%,color-mix(in_srgb,var(--blue-dark)_25%,transparent)_100%)]" />
        <div className="mx-auto flex min-h-[520px] max-w-6xl items-center px-6 py-20 sm:px-10">
          <Reveal className="max-w-xl">
            <div className="flex items-center gap-3 text-brand">
              <MapPin className="size-4" />
              <p className="text-[10px] font-bold uppercase tracking-[0.42em]">{eyebrow}</p>
            </div>
            <h2 className="mt-6 font-display text-[46px] font-medium leading-[0.98] sm:text-[64px]">
              {title}
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/68">{description}</p>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex h-12 items-center gap-3 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
            >
              {ctaLabel}
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

