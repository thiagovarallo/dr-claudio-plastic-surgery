"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Clock3, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { contactLocations, contactMap, contactPage } from "@/content/contato";
import { WHATSAPP_HREF } from "@/content/site";
import { ContactFormIntro, ContatoForm } from "@/components/contato/ContatoForm";
import { Reveal } from "@/components/ui/Reveal";

export function ContatoPage() {
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
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(8,31,48,0.98)_0%,rgba(8,31,48,0.88)_44%,rgba(8,31,48,0.34)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,31,48,0.94)_0%,transparent_52%)]" />
        <div className="hero-grain absolute inset-0 -z-10 mix-blend-overlay" />
        <motion.div
          className="hero-aurora absolute -left-32 top-1/3 -z-10 size-96 rounded-full bg-brand/20 blur-3xl"
          animate={reduced ? undefined : { x: [0, 34, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-6 pt-32 sm:px-8 sm:pb-8 lg:pt-36">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand sm:text-xs">
              {contactPage.hero.eyebrow}
            </p>
            <h1
              id="contato-hero-title"
              className="mt-6 max-w-2xl font-display text-[54px] font-medium leading-[0.9] tracking-[-0.035em] text-white sm:text-7xl lg:text-[86px]"
            >
              {contactPage.hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              {contactPage.hero.text}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#formulario"
                className="inline-flex h-12 items-center gap-3 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Enviar uma mensagem
                <Navigation className="size-4" />
              </Link>
              <a
                href={primaryLocation.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Falar pelo WhatsApp
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
              <p className="mt-3 text-xs font-bold text-white">E-mail</p>
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
              <p className="mt-3 text-xs font-bold text-white">Consultório</p>
              <p className="mt-1 text-xs text-white/62">Centro · Blumenau/SC</p>
            </a>
          </div>
        </div>
      </section>

      <section id="formulario" aria-labelledby="formulario-title" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-7 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">Fale com a clínica</p>
            <h2 id="formulario-title" className="mt-4 font-display text-5xl font-medium leading-none sm:text-6xl">
              Encontre um caminho com clareza.
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

      <section id="consultorios" aria-labelledby="consultorios-title" className="relative overflow-hidden bg-[#f4f8fa] px-5 py-16 sm:px-8 sm:py-20">
        <motion.div
          className="pointer-events-none absolute -right-40 top-0 size-[480px] rounded-full bg-brand/8 blur-3xl"
          animate={reduced ? undefined : { x: [0, -24, 0], y: [0, 18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">Onde encontrar</p>
            <h2 id="consultorios-title" className="mt-4 font-display text-5xl font-medium leading-none sm:text-6xl">
              Nossos consultórios
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {contactLocations.map((location, index) => (
              <Reveal key={location.id} delay={index * 0.08}>
                <article className="h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(32,40,50,0.06)] transition duration-500 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_24px_72px_rgba(32,40,50,0.1)] sm:p-9">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-deep">{location.eyebrow}</p>
                      <h3 className="mt-4 max-w-sm font-display text-4xl font-medium leading-[0.92] text-ink sm:text-5xl">
                        {location.name}
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
                    Ver no mapa
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
          <Reveal className="relative min-h-[390px] overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-[0_24px_80px_rgba(32,40,50,0.1)] sm:min-h-[500px]">
            <iframe
              title="Mapa da localização da Clínica Dr. Claudio Eduardo em Blumenau"
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
              Abrir no Google Maps
              <ExternalLink className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">Localização</p>
            <h2 id="mapa-title" className="mt-4 font-display text-5xl font-medium leading-[0.92] sm:text-6xl">
              Fácil de encontrar. Feito para receber você.
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              O atendimento acontece no Edifício Stein Tower, no Centro de Blumenau. Consulte a melhor rota antes da sua visita.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-[#edf7f7] p-5 text-sm font-semibold leading-6 text-ink-soft">
              <Clock3 className="mt-0.5 size-5 shrink-0 text-brand-deep" />
              <span>Atendimento de segunda a sexta, das 08h00 às 18h00.</span>
            </div>
            <Link
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Falar com a clínica
              <Phone className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="pagamentos-title" className="bg-[#edf7f7] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.48em] text-brand-deep">Transparência</p>
            <h2 id="pagamentos-title" className="mt-4 font-display text-5xl font-medium leading-none sm:text-6xl">
              Preços e pagamentos
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-3xl text-sm leading-7 text-slate-600">
            <p>{contactPage.legalNotice}</p>
            <p className="mt-5 text-xs font-semibold text-slate-500">CRM 14.706-SC · RQE 23.737</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
