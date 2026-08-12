import Image from "next/image";
import type { CirurgiaContent } from "@/content/cirurgias/types";

type Props = Pick<
  CirurgiaContent,
  "category" | "title" | "subtitle" | "benefits"
>;

export function CirurgiaHero({
  category,
  title,
  subtitle,
  benefits,
}: Props) {
  return (
    <div className="px-4 pt-4 md:px-6 md:pt-6">
      <section
        className="relative isolate min-h-[620px] overflow-hidden rounded-[28px] bg-navy-deep text-white md:min-h-[680px] md:rounded-[36px]"
        aria-labelledby="cirurgia-hero-title"
      >
        <Image
          src="/brand/hero-clinic.jpg"
          alt=""
          fill
          priority
          className="absolute inset-0 -z-20 object-cover object-[62%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,31,48,0.92)_0%,rgba(8,31,48,0.72)_42%,rgba(8,31,48,0.16)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,rgba(8,31,48,0.82),rgba(8,31,48,0))]" />

        <div className="mx-auto flex min-h-[620px] max-w-6xl flex-col px-6 py-8 md:min-h-[680px] md:px-10">
          <Image
            src="/brand/logo-footer.png"
            alt="Claudio Eduardo Cirurgião Plástico"
            width={275}
            height={34}
            priority
            className="h-auto w-56 brightness-0 invert md:w-[275px]"
          />

          <div className="mt-auto max-w-3xl pb-16 pt-24 md:pb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-aqua">
              {category}
            </p>

            <h1
              id="cirurgia-hero-title"
              className="mt-5 font-display text-5xl font-medium leading-[0.98] text-white md:text-7xl"
            >
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-full border border-white/22 bg-white/10 px-4 py-2 text-sm leading-relaxed text-white/88 backdrop-blur"
                >
                  {benefit}
                </span>
              ))}
            </div>

            <p className="mt-9 text-sm text-white/64">CRM 14.706-SC · RQE 23.737</p>
          </div>
        </div>
      </section>
    </div>
  );
}
