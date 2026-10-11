import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Reveal } from "@/components/ui/Reveal";
import { surgeries } from "@/content/home";
import { WHATSAPP_HREF } from "@/content/site";

type SurgeryCategory = "Estética" | "Íntima" | "Afirmação de gênero";

const surgeryMeta: Record<string, { category: SurgeryCategory; number: string }> = {
  "Aumento peniano": { category: "Íntima", number: "01" },
  "Cirurgia íntima feminina": { category: "Íntima", number: "02" },
  "Redesignação sexual": { category: "Afirmação de gênero", number: "03" },
  "Mastectomia masculinizadora": { category: "Afirmação de gênero", number: "04" },
  "Prótese de mama": { category: "Estética", number: "05" },
  Gluteoplastia: { category: "Estética", number: "06" },
};

export function CirurgiasIndexPage() {
  const t = useTranslations("surgeryIndex");
  const surgeryT = useTranslations("home.surgeries");

  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />

      <main>
        <section className="relative isolate min-h-[780px] overflow-hidden bg-[linear-gradient(135deg,var(--blue-dark)_0%,var(--blue)_100%)] text-white">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(70%_80%_at_18%_42%,color-mix(in_srgb,var(--green)_20%,transparent),transparent_62%)]" />
          <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="hero-aurora absolute -left-48 top-1/4 -z-10 size-[520px] rounded-full bg-brand/16 blur-3xl" />
          <div className="hero-grain absolute inset-0 -z-10 mix-blend-overlay" />

          <div className="mx-auto flex min-h-[780px] max-w-6xl flex-col justify-center px-5 pb-28 pt-32 sm:px-8 lg:pb-32">
            <div className="animate-fade-up max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/75 backdrop-blur-md">
                {t("badge")}
              </div>
              <h1 className="mt-7 font-display text-[58px] font-medium leading-[0.9] tracking-[-0.03em] sm:text-7xl lg:text-[96px]">
                {t("headlineA")}
                <span className="block text-brand">{t("headlineB")}</span>
              </h1>
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                {t("description")}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#procedimentos"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
                >
                  {t("explore")}
                  <ArrowDown className="size-4" />
                </Link>
                <Link
                  href={WHATSAPP_HREF}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/8"
                >
                  {t("schedule")}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy-deep/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">{t("specialties")}</span>
              {[4, 0, 2].map((categoryIndex) => (
                <span key={categoryIndex} className="text-xs font-semibold text-white/68">
                  {surgeryT(`categories.${categoryIndex}`)}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="procedimentos" className="scroll-mt-16 bg-surface-soft py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.38em] text-brand-deep">
                  {t("procedures")}
                </p>
                <h2 className="mt-3 max-w-md font-display text-5xl font-medium leading-[0.95] sm:text-6xl">
                  {t("possibilities")}
                </h2>
              </Reveal>
              <Reveal delay={0.08} className="lg:justify-self-end">
                <p className="max-w-lg text-sm leading-7 text-ink-soft/70">
                  {t("procedureText")}
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
              {surgeries.map((surgery, index) => {
                const meta = surgeryMeta[surgery.title];
                const external = surgery.href.startsWith("http");
                const featured = index === 0 || index === 1;
                const title = surgeryT(`items.${index}`);
                const description = t(`procedureDescriptions.${index}`);

                return (
                  <Reveal
                    key={`${surgery.title}-${index}`}
                    delay={(index % 3) * 0.06}
                    className="lg:col-span-6"
                  >
                    <article
                      className={`group relative isolate h-full min-h-[430px] overflow-hidden rounded-[32px] bg-navy-deep shadow-[0_20px_60px_rgba(27,85,121,0.18)] ${
                        featured ? "sm:min-h-[520px]" : "sm:min-h-[460px]"
                      }`}
                    >
                      <Image
                        src={surgery.image}
                        alt={`${surgeryT("alt")} ${title.toLowerCase()}`}
                        fill
                        sizes={featured ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 370px, 100vw"}
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 -z-0 bg-[linear-gradient(180deg,transparent_0%,transparent_42%,color-mix(in_srgb,var(--blue-dark)_94%,transparent)_100%)]" />

                      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between p-6 sm:p-8">
                        <div className="flex items-center justify-between gap-4">
                          <span className="rounded-full border border-white/20 bg-navy-deep/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/85 backdrop-blur-lg">
                            {surgeryT(`categories.${index}`)}
                          </span>
                          <span className="font-display text-xl text-white/65">{meta.number}</span>
                        </div>

                        <div>
                          <h3 className={`max-w-sm font-display font-medium leading-none text-white ${featured ? "text-4xl sm:text-5xl" : "text-4xl"}`}>
                            {title}
                          </h3>
                          <p className="mt-4 max-w-md text-xs leading-6 text-white/68 sm:text-sm">
                            {description}
                          </p>
                          <Link
                            href={surgery.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white"
                          >
                            {external ? t("talk") : t("learn")}
                            <span className="grid size-9 place-items-center rounded-full bg-brand text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy-deep">
                              <ArrowUpRight className="size-4" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-20 sm:py-28">
          <div className="pointer-events-none absolute right-[-140px] top-[-180px] size-[440px] rounded-full bg-blue-light/10 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,var(--blue-dark)_0%,var(--blue)_100%)] p-8 text-white sm:p-12">
                <div className="absolute -right-16 -top-16 size-52 rounded-full border border-brand/25" />
                <div className="absolute -right-6 -top-6 size-28 rounded-full bg-brand/16 blur-2xl" />
                <p className="relative text-[11px] font-bold uppercase tracking-[0.36em] text-brand">
                  {t("safetyEyebrow")}
                </p>
                <h2 className="relative mt-4 max-w-lg font-display text-5xl font-medium leading-[0.96] sm:text-6xl">
                  {t("safetyTitle")}
                </h2>
                <p className="relative mt-6 max-w-lg text-sm leading-7 text-white/65">
                  {t("safetyText")}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-brand-deep">
                {t("careEyebrow")}
              </p>
              <ul className="mt-6 border-t border-ink/10">
                {[0, 1, 2, 3].map((index) => (
                  <li key={index} className="flex items-center gap-4 border-b border-ink/10 py-5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand/12 text-brand-deep">
                      <Check className="size-4" strokeWidth={2.5} />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-ink">{t(`careSteps.${index}`)}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-ink/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={WHATSAPP_HREF}
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep"
              >
                {t("scheduleFull")}
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
