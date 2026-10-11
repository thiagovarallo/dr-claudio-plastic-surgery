"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useState } from "react";
import { ChevronDown, Languages, Menu, X } from "lucide-react";
import { locales, navigation, type LocaleCode } from "@/content/home";
import { WHATSAPP_HREF } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [homeActive, setHomeActive] = useState<(typeof navigation)[number]["href"]>(navigation[0].href);
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale() as LocaleCode;
  const t = useTranslations("header");
  const translatedNavigation = navigation.map((item, index) => ({
    ...item,
    label: t(`navigation.${index}`),
  }));

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 28);
  });

  const currentLocale = locales.find((item) => item.code === locale) ?? locales[0];
  const active = pathname.startsWith("/cirurgias")
    ? "/cirurgias"
      : pathname === "/claudio-eduardo-cirurgiao-plastico"
        ? "/claudio-eduardo-cirurgiao-plastico"
        : pathname === "/contato"
          ? "/contato"
      : homeActive;

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-500 ${
        scrolled
          ? "border-b border-ink/8 bg-white/78 shadow-[0_10px_40px_color-mix(in_srgb,var(--blue-dark)_10%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-6xl items-center gap-6 px-5 sm:px-8">
        <Link href="/#inicio" aria-label={t("homeAria")} className="relative h-8 w-[148px] shrink-0">
          <Image
            src="/brand/logo.png"
            alt="Dr. Claudio Eduardo"
            fill
            sizes="148px"
            priority
            className="object-contain transition-[filter] duration-500"
            style={{
              filter: scrolled
                ? "none"
                : "brightness(0) invert(1)",
            }}
          />
        </Link>

        <nav aria-label={t("primaryNav")} className="relative hidden items-center gap-1 lg:flex">
          {translatedNavigation.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setHomeActive(item.href)}
                className={`relative px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors ${
                  scrolled
                    ? isActive
                      ? "text-ink"
                      : "text-ink-soft/70 hover:text-ink"
                    : isActive
                      ? "text-white"
                      : "text-white/72 hover:text-white"
                }`}
              >
                {isActive && !reduced ? (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full ${
                      scrolled ? "bg-brand/12" : "bg-white/12"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : isActive ? (
                  <span className={`absolute inset-0 rounded-full ${scrolled ? "bg-brand/12" : "bg-white/12"}`} />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((open) => !open)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[11px] font-bold tracking-[0.18em] transition ${
                scrolled
                  ? "border-ink/12 text-ink hover:border-brand/40"
                  : "border-white/25 text-white hover:border-white/50"
              }`}
            >
              <Languages className="size-3.5" />
              {currentLocale.label}
              <ChevronDown className={`size-3.5 transition ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen ? (
                <motion.ul
                  role="listbox"
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-12 w-40 overflow-hidden rounded-2xl border border-ink/8 bg-white/95 p-1.5 shadow-xl backdrop-blur-xl"
                >
                  {locales.map((item) => (
                    <li key={item.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={locale === item.code}
                        onClick={() => {
                          document.cookie = `NEXT_LOCALE=${item.code}; path=/; max-age=31536000; samesite=lax`;
                          setLangOpen(false);
                          window.location.reload();
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold ${
                          locale === item.code
                            ? "bg-brand/12 text-brand-deep"
                            : "text-ink-soft hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className="text-[11px] tracking-wider">{item.label}</span>
                      </button>
                    </li>
                  ))}
                </motion.ul>
              ) : null}
            </AnimatePresence>
          </div>

          <Link
            href={WHATSAPP_HREF}
            className="hidden h-10 items-center rounded-full bg-brand px-5 text-xs font-bold text-white transition hover:bg-brand-deep sm:inline-flex"
          >
            {t("schedule")}
          </Link>

          <button
            type="button"
            className={`grid size-10 place-items-center rounded-full border lg:hidden ${
              scrolled ? "border-ink/12 text-ink" : "border-white/30 text-white"
            }`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[76px] z-40 bg-navy-deep/96 px-6 py-10 text-white backdrop-blur-xl lg:hidden"
          >
            <nav aria-label={t("mobileNav")} className="flex flex-col gap-2">
              {translatedNavigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setHomeActive(item.href);
                      setMenuOpen(false);
                    }}
                    className="block border-b border-white/10 py-4 text-2xl font-semibold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              href={WHATSAPP_HREF}
              className="mt-8 inline-flex h-12 items-center rounded-full bg-brand px-6 text-sm font-bold"
            >
              {t("schedule")}
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
