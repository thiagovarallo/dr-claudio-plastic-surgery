import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { navigation, surgeries, unit } from "@/content/home";

export function Footer() {
  const headerT = useTranslations("header");
  const t = useTranslations("home.footer");
  const unitsT = useTranslations("home.units");
  const surgeriesT = useTranslations("home.surgeries");

  return (
    <footer id="contato" className="scroll-mt-19">
      <div className="relative isolate overflow-hidden bg-[linear-gradient(120deg,var(--blue-dark)_0%,var(--blue)_52%,var(--blue-light)_100%)] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_80%_at_78%_5%,rgba(255,255,255,0.14),transparent_62%)]" />

        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 sm:gap-y-12 sm:px-8 lg:grid-cols-[1fr_1fr_1.15fr_1.45fr] lg:gap-12">
          <div>
            <h3 className="text-base font-extrabold">{t("siteMap")}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-5 text-white/80">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {headerT(`navigation.${index}`)}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-9 text-base font-extrabold">{t("certifications")}</h3>
            <p className="mt-4 text-sm leading-6 text-white/80">
              CRM 14.706-SC
              <br />
              RQE 23.737
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold">{t("surgeries")}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-5 text-white/80">
              {surgeries.map((surgery, index) => {
                const external = surgery.href.startsWith("http");
                return (
                  <li key={surgery.title}>
                    <Link
                      href={surgery.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="transition hover:text-white"
                    >
                      {surgeriesT(`items.${index}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-extrabold">{t("care")}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-5 text-white/80">
              {[0, 1, 2, 3].map((index) => (
                <li key={index}>{t(`careItems.${index}`)}</li>
              ))}
            </ul>

            <h3 className="mt-9 text-base font-extrabold">{t("about")}</h3>
            <p className="mt-4 text-sm leading-6 text-white/80">
              {t("aboutText")}
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold">{t("contact")}</h3>
            <div className="mt-4 space-y-4 text-sm leading-6 text-white/85">
              <p>
                <strong className="font-extrabold text-white">Clínica Dr. Claudio Eduardo</strong>
                <br />
                {unitsT("items.0.address")}
                <br />
                {unitsT("items.0.complement")}
              </p>
              <p>
                <a href={unit.phoneHref} className="transition hover:text-white">
                  {unit.phone}
                </a>
                <br />
                <a href={unit.emailHref} className="break-all transition hover:text-white">
                  {unit.email}
                </a>
                <br />
                <a
                  href="https://www.instagram.com/drclaudioeduardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  @drclaudioeduardo
                </a>
              </p>
              <p>
                {t("weekdays")}
                <br />
                <strong className="font-extrabold text-white">08h00 às 18h00</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-5 border-t border-white/20 px-5 pt-6 text-xs leading-5 text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>{t("copyright")}</span>
          <Link href="/#inicio" className="relative h-7 w-36 shrink-0" aria-label={headerT("homeAria")}>
            <Image
              src="/brand/logo-footer.png"
              alt="Dr. Claudio Eduardo"
              fill
              sizes="144px"
              className="object-contain object-left brightness-0 invert sm:object-right"
            />
          </Link>
        </div>

        <div className="mx-auto mt-6 max-w-6xl border-t border-white/12 px-5 pt-6 sm:px-8">
          <a
            href="https://www.extrategica.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Extratégica Digital — O que fazemos muda tudo"
            className="group mx-auto flex w-fit items-center justify-center gap-4 text-white/75 transition hover:text-white sm:gap-6"
          >
            <span className="text-xs font-semibold tracking-wide transition group-hover:text-white">
              {t("agencyLeft")}
            </span>
            <Image
              src="/brand/logo-extrategica.svg"
              alt="Extratégica Digital"
              width={92}
              height={59}
              className="h-9 w-auto object-contain opacity-95 transition duration-300 group-hover:scale-105 group-hover:opacity-100 sm:h-11"
            />
            <span className="text-xs font-semibold tracking-wide transition group-hover:text-white">
              {t("agencyRight")}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
