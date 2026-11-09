import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { HistoriaPage } from "@/components/historia/HistoriaPage";

const BASE_URL = "https://www.drclaudioeduardo.com.br";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    title: t("historyTitle"),
    description: t("historyDescription"),
    alternates: {
      canonical: "/claudio-eduardo-cirurgiao-plastico",
    },
    openGraph: {
      title: `${t("historyTitle")} | Dr. Claudio Eduardo`,
      description: t("historyDescription"),
      url: `${BASE_URL}/claudio-eduardo-cirurgiao-plastico`,
      siteName: "Dr. Claudio Eduardo — Cirurgião Plástico",
      type: "profile",
      images: [
        {
          url: "/brand/hero-sobre.png",
          alt: "Dr. Claudio Eduardo — Cirurgião Plástico em Blumenau/SC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("historyTitle")} | Dr. Claudio Eduardo`,
      description: t("historyDescription"),
      images: ["/brand/hero-sobre.png"],
    },
  };
}

const historySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Minha História",
          item: `${BASE_URL}/claudio-eduardo-cirurgiao-plastico`,
        },
      ],
    },
    {
      "@type": "Physician",
      "@id": `${BASE_URL}/#physician`,
      name: "Dr. Claudio Eduardo",
      url: `${BASE_URL}/claudio-eduardo-cirurgiao-plastico`,
      image: `${BASE_URL}/brand/hero-sobre.png`,
      medicalSpecialty: "PlasticSurgery",
      description:
        "Cirurgião plástico em Blumenau/SC (CRM 14.706-SC | RQE 23.737), com 12 anos de formação médica e especializações em Cirurgia Geral, Cirurgia Plástica e Cirurgia Crânio-Maxilo-Facial (HC-FMUSP).",
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade Severino Sombra (USS) — Vassouras/RJ",
        },
        {
          "@type": "Hospital",
          name: "Hospital do Estado de São Paulo Brigadeiro",
        },
        {
          "@type": "Hospital",
          name: "Hospital das Clínicas da Faculdade de Medicina da USP (HC-FMUSP)",
        },
      ],
      memberOf: {
        "@type": "MedicalOrganization",
        name: "Sociedade Brasileira de Cirurgia Plástica (SBCP)",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Floriano Peixoto, 222, 8º andar, Sala 801 — Edifício Stein Tower",
        addressLocality: "Blumenau",
        addressRegion: "SC",
        postalCode: "89010-022",
        addressCountry: "BR",
      },
    },
  ],
};

export default function ClaudioEduardoPage() {
  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />
      <HistoriaPage />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(historySchema) }}
      />
    </div>
  );
}
