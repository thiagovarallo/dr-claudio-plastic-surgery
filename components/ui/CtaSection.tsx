import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
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
  eyebrow,
  title,
  description,
  ctaLabel,
  href = WHATSAPP_HREF,
  className = "",
}: CtaSectionProps) {
  const t = useTranslations("home.cta");

  return (
    <section className={`px-4 pb-4 sm:px-6 sm:pb-6 ${className}`.trim()}>
      <div className="relative isolate mx-auto min-h-[520px] max-w-[1440px] overflow-hidden rounded-[30px] bg-[#173b53] text-white sm:rounded-[38px]">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(112deg,#173b53_0%,#204f68_58%,#527c91_100%)]" />
        <Image
          src="/brand/dr-claudio-cta.png"
          alt={t("imageAlt")}
          width={1310}
          height={1200}
          sizes="(max-width: 639px) 76vw, (max-width: 1023px) 58vw, 48vw"
          priority
          className="pointer-events-none absolute -bottom-[80px] right-[-19%] -z-10 h-[112%] w-auto max-w-none object-contain object-bottom sm:-bottom-[96px] sm:right-[-9%] sm:h-[118%] lg:-bottom-[112px] lg:right-[-3%] lg:h-[124%]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#173b53_0%,color-mix(in_srgb,#173b53_96%,transparent)_42%,color-mix(in_srgb,#173b53_68%,transparent)_61%,transparent_86%)] max-sm:bg-[linear-gradient(90deg,color-mix(in_srgb,#173b53_96%,transparent)_0%,color-mix(in_srgb,#173b53_84%,transparent)_48%,color-mix(in_srgb,#173b53_24%,transparent)_100%)]" />
        <div className="mx-auto flex min-h-[520px] max-w-6xl items-center px-6 py-16 sm:px-10 sm:py-20">
          <Reveal className="max-w-xl sm:max-w-[52%]">
            <div className="flex items-center gap-3 text-brand">
              <MapPin className="size-4" />
              <p className="text-[10px] font-bold uppercase tracking-[0.42em]">{eyebrow ?? t("eyebrow")}</p>
            </div>
            <h2 className="mt-6 font-display text-[46px] font-medium leading-[0.98] sm:text-[64px]">
              {title ?? t("title")}
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/72">{description ?? t("description")}</p>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex h-12 items-center gap-3 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
            >
              {ctaLabel ?? t("ctaLabel")}
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

