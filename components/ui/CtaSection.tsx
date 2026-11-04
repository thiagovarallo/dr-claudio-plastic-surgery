import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppFloat";
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
  href = "/contato",
  className = "",
}: CtaSectionProps) {
  const t = useTranslations("home.cta");
  const isExternal = href.startsWith("http");

  return (
    <section className={`px-4 pb-4 sm:px-6 bg-[#f2f7fb] sm:pb-6 ${className}`.trim()}>
      <div className="relative isolate mx-auto min-h-[520px] max-w-[1440px] overflow-hidden rounded-[30px] bg-blue-dark text-white sm:rounded-[38px] mb-10 sm:mb-16 lg:mb-20">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(112deg,var(--blue-dark)_0%,#1d668a_58%,#2b8198_100%)]" />
        <Image
          src="/brand/dr-claudio-cta.png"
          alt={t("imageAlt")}
          width={1310}
          height={1200}
          sizes="(max-width: 1023px) 58vw, 48vw"
          priority
          className="pointer-events-none absolute -bottom-[96px] right-[-9%] z-0 hidden h-[118%] w-auto max-w-none object-contain object-bottom brightness-110 contrast-110 sm:block lg:-bottom-[112px] lg:right-[-3%] lg:h-[124%]"
        />
        <div className="pointer-events-none absolute inset-0 z-10 hidden bg-[linear-gradient(90deg,var(--blue-dark)_0%,color-mix(in_srgb,var(--blue-dark)_98%,transparent)_38%,color-mix(in_srgb,var(--blue-dark)_78%,transparent)_54%,color-mix(in_srgb,var(--blue-dark)_18%,transparent)_76%,transparent_90%)] sm:block" />
        <div className="relative z-20 mx-auto flex min-h-[520px] max-w-6xl flex-col justify-between px-6 pt-12 pb-0 sm:flex-row sm:items-center sm:px-10 sm:py-20">
          <Reveal className="max-w-xl sm:max-w-[52%]">
            <div className="flex items-center gap-3 text-brand">
              <MapPin className="size-4" />
              <p className="text-[10px] font-bold uppercase tracking-[0.42em]">{eyebrow ?? t("eyebrow")}</p>
            </div>
            <h2 className="mt-5 font-display text-[38px] font-medium leading-[0.98] sm:mt-6 sm:text-[64px]">
              {title ?? t("title")}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/78 sm:mt-6 sm:leading-7">{description ?? t("description")}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
              <Link
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex h-12 items-center gap-3 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
              >
                {ctaLabel ?? t("ctaLabel")}
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(37,211,102,0.28)] transition hover:bg-[#1ebe5d]"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>
          </Reveal>

          <div className="relative mt-6 flex justify-center sm:hidden">
            <Image
              src="/brand/dr-claudio-cta.png"
              alt={t("imageAlt")}
              width={655}
              height={600}
              sizes="85vw"
              className="pointer-events-none h-[290px] w-auto object-contain object-bottom brightness-110 contrast-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

