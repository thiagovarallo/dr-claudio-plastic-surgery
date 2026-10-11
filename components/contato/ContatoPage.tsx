"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Clock3, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { contactLocations, contactMap } from "@/content/contato";
import { WHATSAPP_HREF } from "@/content/site";
import { ContactFormIntro, ContatoForm } from "@/components/contato/ContatoForm";
import { Reveal } from "@/components/ui/Reveal";

export function ContatoPage() {
  const heroT = useTranslations("contact.hero");
  const formSectionT = useTranslations("contact.formSection");
  const officesT = useTranslations("contact.offices");
  const mapT = useTranslations("contact.map");
  const paymentsT = useTranslations("contact.payments");
  const locationsT = useTranslations("contact.locations");
  const primaryLocation = contactLocations[0];
  const reduced = useReducedMotion();

  return (
    <main className="overflow-x-clip bg-white text-ink">
      <section
        id="inicio"
        aria-labelledby="contato-hero-title"
        className="relative isolate flex min-h-[620px] overflow-hidden bg-navy-deep text-white lg:min-h-[660px]"
      >
        <Image
          src="/brand/hero-alt.jpg"
          alt="Ambiente de atendimento do Dr. Claudio Eduardo"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-[66%_center]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,var(--blue-dark)_0%,color-mix(in_srgb,var(--blue-dark)_90%,transparent)_28%,color-mix(in_srgb,var(--blue-dark)_42%,transparent)_42%,transparent_54%)] max-sm:bg-[linear-gradient(90deg,color-mix(in_srgb,var(--blue-dark)_92%,transparent)_0%,color-mix(in_srgb,var(--blue-dark)_70%,transparent)_65%,color-mix(in_srgb,var(--blue-dark)_25%,transparent)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,color-mix(in_srgb,var(--blue-dark)_65%,transparent)_0%,transparent_18%)]" />
        <motion.div
          className="hero-aurora absolute -left-32 top-1/3 -z-10 size-96 rounded-full bg-brand/20 blur-3xl"
          animate={reduced ? undefined : { x: [0, 34, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-6 pt-32 sm:px-8 sm:pb-8 lg:pt-36">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand sm:text-xs">
              {heroT("eyebrow")}
            </p>
            <h1
              id="contato-hero-title"
              className="mt-6 max-w-2xl font-display text-[54px] font-medium leading-[0.9] tracking-[-0.035em] text-white sm:text-7xl lg:text-[86px]"
            >
              {heroT("title")}
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              {heroT("text")}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#formulario"
                className="inline-flex h-12 items-center gap-3 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {heroT("send")}
                <Navigation className="size-4" />
              </Link>
              <a
                href={primaryLocation.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {heroT("whatsapp")}
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>

          <div className="mt-auto grid gap-px overflow-hidden rounded-[26px] border border-white/12 bg-white/12 backdrop-blur-xl sm:grid-cols-3">
            <a
              href={primaryLocation.emailHref}
              className="animate-fade-up bg-navy-deep/50 px-5 py-4 transition hover:bg-navy-deep/70 sm:px-7 sm:py-5 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand"
            >
              <Mail className="size-5 text-brand" />
              <p className="mt-3 text-xs font-bold text-white">{heroT("email")}</p>
              <p className="mt-1 break-all text-xs text-white/62">{primaryLocation.email}</p>
            </a>
            <a
              href={primaryLocation.phones[0].href}
              className="animate-fade-up animate-delay-1 bg-navy-deep/50 px-5 py-4 transition hover:bg-navy-deep/70 sm:px-7 sm:py-5 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand"
            >
              <Phone className="size-5 text-brand" />
              <p className="mt-3 text-xs font-bold text-white">WhatsApp</p>
              <p className="mt-1 text-xs text-white/62">{primaryLocation.phones[0].value}</p>
            </a>
            <a
              href={contactMap.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up animate-delay-2 bg-navy-deep/50 px-5 py-4 transition hover:bg-navy-deep/70 sm:px-7 sm:py-5 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand"
            >
              <MapPin className="size-5 text-brand" />
              <p className="mt-3 text-xs font-bold text-white">{heroT("office")}</p>
              <p className="mt-1 text-xs text-white/62">{heroT("center")}</p>
            </a>
          </div>
        </div>
      </section>

      <section id="formulario" aria-labelledby="formulario-title" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-7 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">{formSectionT("eyebrow")}</p>
            <h2 id="formulario-title" className="mt-4 font-display text-5xl font-medium leading-none sm:text-6xl">
              {formSectionT("title")}
            </h2>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
            <Reveal>
              <ContactFormIntro />
            </Reveal>
            <Reveal delay={0.1}>
              <ContatoForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="consultorios" aria-labelledby="consultorios-title" className="relative overflow-hidden bg-surface-soft px-5 py-16 sm:px-8 sm:py-20">
        <motion.div
          className="pointer-events-none absolute -right-40 top-0 size-[480px] rounded-full bg-blue-light/8 blur-3xl"
          animate={reduced ? undefined : { x: [0, -24, 0], y: [0, 18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">{officesT("eyebrow")}</p>
            <h2 id="consultorios-title" className="mt-4 font-display text-5xl font-medium leading-none sm:text-6xl">
              {officesT("title")}
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {contactLocations.map((location, index) => (
              <Reveal key={location.id} delay={index * 0.08}>
                <article className="h-full rounded-[28px] border border-blue/15 bg-white p-7 shadow-[0_20px_50px_-10px_rgba(27,85,121,0.15),0_8px_20px_-6px_rgba(0,121,181,0.08)] transition duration-500 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_26px_65px_-10px_rgba(27,85,121,0.22)] sm:p-9">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-deep">{locationsT(`${index}.eyebrow`)}</p>
                      <h3 className="mt-4 max-w-sm font-display text-4xl font-medium leading-[0.92] text-ink sm:text-5xl">
                        {locationsT(`${index}.name`)}
                      </h3>
                    </div>
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand-deep">
                      <MapPin className="size-5" />
                    </span>
                  </div>

                  <address className="mt-9 space-y-4 not-italic text-sm leading-6 text-slate-600">
                    <p>
                      <strong className="font-extrabold text-ink">{location.building}</strong>
                      <br />
                      {location.address}
                      <br />
                      {location.complement}
                      {location.postalCode ? (
                        <>
                          <br />
                          {location.postalCode}
                        </>
                      ) : null}
                    </p>
                    <a href={location.emailHref} className="flex items-start gap-3 transition hover:text-brand-deep">
                      <Mail className="mt-1 size-4 shrink-0 text-brand" />
                      <span className="break-all">{location.email}</span>
                    </a>
                    {location.phones.map((phone) => (
                      <a key={phone.href} href={phone.href} className="flex items-start gap-3 transition hover:text-brand-deep">
                        <Phone className="mt-1 size-4 shrink-0 text-brand" />
                        <span>{phone.value}{phone.label === "WhatsApp" ? " · WhatsApp" : ""}</span>
                      </a>
                    ))}
                  </address>

                  <a
                    href={contactMap.directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    {officesT("map")}
                    <ExternalLink className="size-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="mapa" aria-labelledby="mapa-title" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal className="relative min-h-[390px] overflow-hidden rounded-[32px] border border-blue/15 bg-slate-100 shadow-[0_24px_70px_-10px_rgba(27,85,121,0.18)] sm:min-h-[500px]">
            <iframe
              title="Clinic location map in Blumenau"
              src={contactMap.embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 grayscale-[0.15]"
            />
            <a
              href={contactMap.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-3 text-xs font-bold text-ink shadow-lg backdrop-blur transition hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:bottom-7 sm:left-7"
            >
              {mapT("open")}
              <ExternalLink className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">{mapT("eyebrow")}</p>
            <h2 id="mapa-title" className="mt-4 font-display text-5xl font-medium leading-[0.92] sm:text-6xl">
              {mapT("title")}
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              {mapT("text")}
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-surface-tint p-5 text-sm font-semibold leading-6 text-ink-soft">
              <Clock3 className="mt-0.5 size-5 shrink-0 text-brand-deep" />
              <span>{mapT("hours")}</span>
            </div>
            <Link
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {mapT("talk")}
              <Phone className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="pagamentos-title" className="bg-surface-tint px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">{paymentsT("eyebrow")}</p>
            <h2 id="pagamentos-title" className="mt-4 font-display text-5xl font-medium leading-none sm:text-6xl">
              {paymentsT("title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-3xl text-sm leading-7 text-slate-600">
            <p>{paymentsT("legal")}</p>
            <p className="mt-5 text-xs font-semibold text-slate-500">CRM 14.706-SC · RQE 23.737</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
