import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { ContatoPage } from "@/components/contato/ContatoPage";
import { contactLocations } from "@/content/contato";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    keywords: [
      "contato cirurgião plástico Blumenau",
      "Clínica Dr. Claudio Eduardo",
      "cirurgião plástico Blumenau telefone",
      "consulta cirurgia plástica Blumenau",
    ],
    openGraph: {
      title: t("contactOgTitle"),
      description: t("contactOgDescription"),
      type: "website",
    },
  };
}

const primaryLocation = contactLocations[0];

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://www.drclaudioeduardo.com.br/#physician",
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
      "@id": "https://www.drclaudioeduardo.com.br/contato#clinic",
      name: "Clínica Dr. Claudio Eduardo",
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
