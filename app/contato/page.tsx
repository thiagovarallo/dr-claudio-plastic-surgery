import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { ContatoPage } from "@/components/contato/ContatoPage";
import { contactLocations } from "@/content/contato";

const BASE_URL = "https://www.drclaudioeduardo.com.br";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: {
      canonical: "/contato",
    },
    keywords: [
      "contato cirurgião plástico Blumenau",
      "Clínica Dr. Claudio Eduardo",
      "cirurgião plástico Blumenau telefone",
      "consulta cirurgia plástica Blumenau",
    ],
    openGraph: {
      title: t("contactOgTitle"),
      description: t("contactOgDescription"),
      url: `${BASE_URL}/contato`,
      siteName: "Dr. Claudio Eduardo — Cirurgião Plástico",
      type: "website",
      images: [
        {
          url: "/brand/stein-tower.jpg",
          alt: "Clínica Dr. Claudio Eduardo — Edifício Stein Tower em Blumenau/SC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("contactOgTitle"),
      description: t("contactOgDescription"),
      images: ["/brand/stein-tower.jpg"],
    },
  };
}

const primaryLocation = contactLocations[0];

const contactSchema = {
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
          name: "Contato",
          item: `${BASE_URL}/contato`,
        },
      ],
    },
    {
      "@type": "Physician",
      "@id": `${BASE_URL}/#physician`,
      name: "Dr. Claudio Eduardo",
      medicalSpecialty: "PlasticSurgery",
      telephone: primaryLocation.phones[0].value,
      email: primaryLocation.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Floriano Peixoto, 222, 8º andar, Sala 801",
        addressLocality: "Blumenau",
        addressRegion: "SC",
        postalCode: "89010-022",
        addressCountry: "BR",
      },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${BASE_URL}/contato#clinic`,
      name: "Clínica Dr. Claudio Eduardo",
      url: `${BASE_URL}/contato`,
      image: `${BASE_URL}/brand/stein-tower.jpg`,
      telephone: primaryLocation.phones[0].value,
      email: primaryLocation.email,
      medicalSpecialty: "PlasticSurgery",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Floriano Peixoto, 222, 8º andar, Sala 801",
        addressLocality: "Blumenau",
        addressRegion: "SC",
        postalCode: "89010-022",
        addressCountry: "BR",
      },
    },
  ],
};

export default function ContatoRoute() {
  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />
      <ContatoPage />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
    </div>
  );
}
