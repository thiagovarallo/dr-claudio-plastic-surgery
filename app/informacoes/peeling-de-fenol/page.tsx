import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, ShieldAlert } from "lucide-react";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { getLocale } from "next-intl/server";

const BASE_URL = "https://www.drclaudioeduardo.com.br";
const ANVISA_URL = "https://www.gov.br/anvisa/pt-br/comunicacao/campanhas/estetica/fenol";

const copy = {
  pt: {
    eyebrow: "Conteúdo informativo",
    title: "Peeling de Fenol",
    intro: "O peeling de fenol é um procedimento dermatológico profundo e agressivo que utiliza o ácido carbólico (fenol), geralmente associado ao óleo de cróton, para promover uma renovação intensa da pele e estimular fortemente a produção de colágeno.",
    indicationsLead: "O procedimento atinge camadas profundas da derme e costuma ser indicado apenas para casos severos em que peelings mais leves ou lasers não entregam resultado suficiente:",
    indications: "Envelhecimento acentuado. Rugas profundas, sulcos marcados e pele com aspecto apergaminhado causado pelo sol (elastose solar). Cicatrizes profundas. Sequelas de acne.",
    additionalIndication: "Manchas e lesões.",
    risks: "Como o fenol é absorvido pela pele e cai na corrente sanguínea antes de ser metabolizado pelo fígado e excretado pelos rins, ele apresenta toxicidade sistêmica relevante. Não é recomendável para pessoas com problemas cardíacos, renais ou hepáticos, gestantes, lactantes e indivíduos com peles morenas ou negras (fototipos altos), devido ao alto risco de despigmentação permanente e manchas de contraste.",
    recoveryLead: "A recuperação de um peeling de fenol profundo é longa e exige repouso rigoroso.",
    earlyRecoveryLabel: "Primeiras semanas.",
    earlyRecovery: "O rosto apresenta inchaço intenso, dor, ardência e formação de crostas durante os primeiros 10 a 15 dias.",
    lateRecoveryLabel: "Pós-operatório tardio.",
    lateRecovery: "Após a descamação, a pele nova nasce sensível e permanece avermelhada (eritema) por um período de 2 a 3 meses, exigindo proteção solar absoluta.",
    imageAlt: "Imagem ilustrativa de rosto dividido em antes e depois",
    warningLabel: "Situação regulatória no Brasil",
    warningTitle: "O peeling de fenol não é oferecido neste site.",
    warning: "A Anvisa informa que produtos à base de fenol continuam proibidos em procedimentos de saúde e estéticos e que não há produto regularizado para peeling. Esta página é exclusivamente educativa: não representa oferta, indicação ou agendamento do procedimento.",
    source: "Consultar orientação da Anvisa",
    indicationsTitle: "Indicações descritas",
    riskTitle: "Toxicidade sistêmica e contraindicações descritas",
    recoveryTitle: "Recuperação",
    noteTitle: "Informação importante",
    note: "O conteúdo desta página tem finalidade educativa e não substitui consulta médica. Para outras opções de cuidado, converse com um profissional habilitado.",
    schedule: "Agendar consulta médica",
    scheduleNote: "A consulta é para orientação médica e discussão de alternativas seguras e regulamentadas; não inclui a realização ou o agendamento do peeling de fenol.",
    back: "Voltar às cirurgias",
  },
  en: {
    eyebrow: "Informational content",
    title: "Phenol Peel",
    intro: "Phenol peeling is a deep and aggressive dermatological procedure that uses carbolic acid (phenol), usually associated with croton oil, to promote intense skin renewal and strongly stimulate collagen production.",
    indicationsLead: "The procedure reaches deep layers of the dermis and is usually described for severe cases in which lighter peels or lasers do not provide sufficient results:",
    indications: "Advanced aging. Deep wrinkles, pronounced folds, and sun-damaged skin with a parchment-like appearance (solar elastosis). Deep scars. Acne scars.",
    additionalIndication: "Spots and lesions.",
    risks: "Because phenol is absorbed through the skin into the bloodstream before being metabolized by the liver and excreted by the kidneys, it has significant systemic toxicity. It is not recommended for people with heart, kidney, or liver problems, pregnant or breastfeeding people, or people with darker skin (higher phototypes), due to the high risk of permanent depigmentation and contrasting marks.",
    recoveryLead: "Recovery from a deep phenol peel is long and requires strict rest.",
    earlyRecoveryLabel: "First weeks.",
    earlyRecovery: "The face has intense swelling, pain, burning, and crusting during the first 10 to 15 days.",
    lateRecoveryLabel: "Later recovery.",
    lateRecovery: "After peeling, the new skin is sensitive and remains red (erythema) for 2 to 3 months, requiring absolute sun protection.",
    imageAlt: "Illustrative image of a face split into before and after",
    warningLabel: "Regulatory status in Brazil",
    warningTitle: "Phenol peel is not offered on this website.",
    warning: "Anvisa states that phenol-based products remain prohibited in health and aesthetic procedures and that no product is registered for peeling. This page is educational only; it is not an offer, recommendation, or booking for the procedure.",
    source: "Read Anvisa guidance",
    indicationsTitle: "Described indications",
    riskTitle: "Systemic toxicity and described contraindications",
    recoveryTitle: "Recovery",
    noteTitle: "Important information",
    note: "This page is for educational purposes and does not replace a medical consultation. For other care options, speak with a qualified professional.",
    schedule: "Book a medical consultation",
    scheduleNote: "The consultation is for medical guidance and discussion of safe, regulated alternatives; it does not include performing or booking a phenol peel.",
    back: "Back to surgeries",
  },
  es: {
    eyebrow: "Contenido informativo",
    title: "Peeling de Fenol",
    intro: "El peeling de fenol es un procedimiento dermatológico profundo y agresivo que utiliza ácido carbólico (fenol), generalmente asociado con aceite de crotón, para promover una renovación intensa de la piel y estimular fuertemente la producción de colágeno.",
    indicationsLead: "El procedimiento alcanza capas profundas de la dermis y suele describirse para casos graves en los que los peelings más suaves o los láseres no ofrecen resultados suficientes:",
    indications: "Envejecimiento avanzado. Arrugas profundas, surcos marcados y piel con aspecto apergaminado causado por el sol (elastosis solar). Cicatrices profundas. Secuelas de acné.",
    additionalIndication: "Manchas y lesiones.",
    risks: "Como el fenol se absorbe a través de la piel y pasa al torrente sanguíneo antes de ser metabolizado por el hígado y eliminado por los riñones, presenta una toxicidad sistémica importante. No se recomienda para personas con problemas cardíacos, renales o hepáticos, embarazadas, en período de lactancia ni personas con pieles morenas o negras (fototipos altos), debido al alto riesgo de despigmentación permanente y manchas de contraste.",
    recoveryLead: "La recuperación de un peeling profundo de fenol es larga y exige reposo riguroso.",
    earlyRecoveryLabel: "Primeras semanas.",
    earlyRecovery: "El rostro presenta hinchazón intensa, dolor, ardor y formación de costras durante los primeros 10 a 15 días.",
    lateRecoveryLabel: "Posoperatorio tardío.",
    lateRecovery: "Después de la descamación, la piel nueva nace sensible y permanece enrojecida (eritema) durante un período de 2 a 3 meses, lo que exige protección solar absoluta.",
    imageAlt: "Imagen ilustrativa de un rostro dividido en antes y después",
    warningLabel: "Situación regulatoria en Brasil",
    warningTitle: "Este sitio no ofrece el peeling de fenol.",
    warning: "Anvisa informa que los productos a base de fenol continúan prohibidos en procedimientos de salud y estéticos y que no hay productos registrados para peeling. Esta página es exclusivamente educativa: no representa oferta, indicación ni reserva del procedimiento.",
    source: "Consultar la orientación de Anvisa",
    indicationsTitle: "Indicaciones descritas",
    riskTitle: "Toxicidad sistémica y contraindicaciones descritas",
    recoveryTitle: "Recuperación",
    noteTitle: "Información importante",
    note: "Esta página tiene fines educativos y no sustituye una consulta médica. Para otras opciones de cuidado, consulte con un profesional habilitado.",
    schedule: "Agendar una consulta médica",
    scheduleNote: "La consulta es para orientación médica y para hablar sobre alternativas seguras y reguladas; no incluye realizar ni reservar el peeling de fenol.",
    back: "Volver a cirugías",
  },
} as const;

type Locale = keyof typeof copy;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const title = copy[locale]?.title ?? copy.pt.title;
  const description = copy[locale]?.intro ?? copy.pt.intro;
  return {
    title: `${title} — informação e segurança | Dr. Claudio Eduardo`,
    description,
    alternates: { canonical: "/informacoes/peeling-de-fenol" },
    openGraph: {
      title: `${title} — informação e segurança | Dr. Claudio Eduardo`,
      description,
      url: `${BASE_URL}/informacoes/peeling-de-fenol`,
      siteName: "Dr. Claudio Eduardo — Cirurgião Plástico",
      type: "article",
      images: ["/brand/peeling-fenol.webp"],
    },
  };
}

export default async function PhenolPeelInformationPage() {
  const locale = (await getLocale()) as Locale;
  const t = copy[locale] ?? copy.pt;

  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />
      <main>
        <section className="bg-surface-soft px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-5xl">
            <Link href="/cirurgias" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition hover:text-brand-deep">
              <ArrowLeft className="size-4" /> {t.back}
            </Link>
            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_440px]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-brand-deep">{t.eyebrow}</p>
                <h1 className="mt-4 font-display text-5xl font-medium leading-[0.95] sm:text-7xl">{t.title}</h1>
              </div>
              <Image src="/brand/peeling-fenol.webp" alt={t.imageAlt} width={1200} height={800} className="mx-auto w-full max-w-[420px] rounded-3xl shadow-xl" priority />
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <aside className="rounded-[24px] border border-ink/10 bg-surface-soft p-6 sm:p-8" aria-labelledby="regulatory-alert">
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-brand-deep"><ShieldAlert className="size-5" /></span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-deep">{t.warningLabel}</p>
                  <h2 id="regulatory-alert" className="mt-2 font-display text-3xl font-medium leading-tight text-ink">{t.warningTitle}</h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-soft/80">{t.warning}</p>
                  <a href={ANVISA_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-deep underline underline-offset-4">
                    {t.source}<ExternalLink className="size-4" />
                  </a>
                </div>
              </div>
            </aside>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <article className="border-t border-ink/10 pt-5 md:col-span-2">
                <p className="text-base leading-8 text-ink-soft/85">{t.intro}</p>
              </article>
              <article className="border-t border-ink/10 pt-5">
                <h2 className="font-display text-3xl font-medium text-ink">{t.indicationsTitle}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-soft/80">{t.indicationsLead}</p>
                <p className="mt-3 text-sm leading-7 text-ink-soft/80">{t.indications}</p>
                <p className="mt-3 text-sm leading-7 text-ink-soft/80">{t.additionalIndication}</p>
              </article>
              <article className="border-t border-ink/10 pt-5">
                <h2 className="font-display text-3xl font-medium text-ink">{t.riskTitle}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-soft/80">{t.risks}</p>
              </article>
              <article className="border-t border-ink/10 pt-5">
                <h2 className="font-display text-3xl font-medium text-ink">{t.recoveryTitle}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-soft/80">{t.recoveryLead}</p>
                <p className="mt-4 text-sm leading-7 text-ink-soft/80"><strong>{t.earlyRecoveryLabel}</strong> {t.earlyRecovery}</p>
                <p className="mt-4 text-sm leading-7 text-ink-soft/80"><strong>{t.lateRecoveryLabel}</strong> {t.lateRecovery}</p>
              </article>
              <article className="border-t border-ink/10 pt-5">
                <h2 className="font-display text-3xl font-medium text-ink">{t.noteTitle}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-soft/80">{t.note}</p>
              </article>
            </div>

            <div className="mt-14 rounded-[28px] bg-surface-soft p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
              <p className="max-w-2xl text-sm leading-7 text-ink-soft/80">{t.scheduleNote}</p>
              <Link href="/contato" className="mt-5 inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep sm:mt-0">
                {t.schedule}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
