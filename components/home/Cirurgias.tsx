import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { surgeries } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function Cirurgias() {
  const t = useTranslations("home.surgeries");

  return (
    <section
      id="cirurgias"
      aria-labelledby="cirurgias-title"
      className="relative isolate overflow-hidden bg-[#f4f8fa] py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 -z-10 size-[520px] rounded-full bg-brand/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-1/2 opacity-60 [background-image:linear-gradient(135deg,transparent_0%,transparent_49.6%,rgba(148,163,184,0.12)_50%,transparent_50.4%,transparent_100%)] [background-size:150px_150px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-7 md:grid-cols-[1fr_0.85fr] md:items-end lg:gap-12">
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.48em] text-brand-deep">
              {t("eyebrow")}
            </p>
            <h2
              id="cirurgias-title"
              className="mt-3 font-display text-6xl font-medium leading-[0.84] tracking-[-0.055em] text-ink sm:text-7xl lg:text-[6.5rem]"
            >
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-lg md:justify-self-end">
            <p className="text-sm leading-7 text-ink-soft/72 sm:text-base">
              {t("description")}
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 lg:auto-rows-[250px] lg:grid-cols-12 lg:gap-5">
          {surgeries.map((surgery, index) => {
            const external = surgery.href.startsWith("http");
            const layout =
              index === 0
                ? "lg:col-span-7 lg:row-span-2"
                : index < 3
                  ? "lg:col-span-5"
                  : "lg:col-span-4";
            const imageSizes =
              index === 0
                ? "(min-width: 1024px) 58vw, 100vw"
                : "(min-width: 1024px) 42vw, 100vw";

            return (
              <li key={`${surgery.href}-${index}`} className={`h-full ${layout}`}>
                <Reveal delay={(index % 3) * 0.06} className="h-full">
                  <Link
                    href={surgery.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group relative block h-full min-h-80 overflow-hidden rounded-[28px] bg-navy-deep shadow-[0_18px_48px_rgba(8,31,48,0.12)] outline-none transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(8,31,48,0.2)] focus-visible:ring-4 focus-visible:ring-brand/30 lg:min-h-0"
                  >
                    <Image
                      src={surgery.image}
                      alt={`${t("alt")} ${t(`items.${index}`).toLowerCase()}`}
                      fill
                      sizes={imageSizes}
                      className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/35 to-navy-deep/5" />

                    <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-4 sm:inset-x-7 sm:top-7">
                      <span className="rounded-full border border-white/25 bg-navy-deep/25 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                        {t(`categories.${index}`)}
                      </span>
                      <span className="font-display text-2xl leading-none text-white/65">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                      <div className="mt-4 flex items-end justify-between gap-4">
                        <h3 className="max-w-[85%] text-2xl font-extrabold uppercase leading-[0.94] tracking-[-0.035em] text-white sm:text-3xl">
                          {t(`items.${index}`)}
                        </h3>
                        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-white transition duration-300 group-hover:bg-white group-hover:text-navy-deep">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                    </div>
                    <span className="absolute bottom-0 left-0 h-1 w-20 bg-brand transition-all duration-500 group-hover:w-40" />
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
