import type { Metadata } from "next";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { ContatoPage } from "@/components/contato/ContatoPage";
import { contactLocations } from "@/content/contato";

export const metadata: Metadata = {
  title: "Contato | Cirurgião Plástico em Blumenau",
  description:
    "Entre em contato com o Dr. Claudio Eduardo. Consulte endereço, telefone, WhatsApp, e-mail e localização dos consultórios em Blumenau/SC.",
  keywords: [
    "contato cirurgião plástico Blumenau",
    "Clínica Dr. Claudio Eduardo",
    "cirurgião plástico Blumenau telefone",
    "consulta cirurgia plástica Blumenau",
  ],
  openGraph: {
    title: "Contato | Dr. Claudio Eduardo",
    description:
      "Fale com a clínica, consulte os endereços e encontre a localização dos consultórios em Blumenau/SC.",
    type: "website",
  },
};

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
