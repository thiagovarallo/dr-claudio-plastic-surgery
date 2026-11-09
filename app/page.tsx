import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Cirurgias } from "@/components/home/Cirurgias";
import { Diferenciais } from "@/components/home/Diferenciais";
import { DrNaMidia } from "@/components/home/DrNaMidia";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Historia } from "@/components/home/Historia";
import { Hospitais } from "@/components/home/Hospitais";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { Unidades } from "@/components/home/Unidades";
import { CtaSection } from "@/components/ui/CtaSection";

const BASE_URL = "https://www.drclaudioeduardo.com.br";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    title: {
      absolute: t("siteTitle"),
    },
    description: t("siteDescription"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: t("siteTitle"),
      description: t("siteDescription"),
      url: BASE_URL,
      siteName: "Dr. Claudio Eduardo — Cirurgião Plástico",
      type: "website",
      images: [
        {
          url: "/brand/hero-contato-jaleco.png",
          width: 1200,
          height: 630,
          alt: "Dr. Claudio Eduardo — Cirurgião Plástico em Blumenau/SC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("siteTitle"),
      description: t("siteDescription"),
      images: ["/brand/hero-contato-jaleco.png"],
    },
  };
}

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Dr. Claudio Eduardo — Cirurgião Plástico",
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${BASE_URL}/#clinic`,
      },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${BASE_URL}/#clinic`,
      name: "Clínica Dr. Claudio Eduardo",
      url: BASE_URL,
      image: `${BASE_URL}/brand/hero-contato-jaleco.png`,
      telephone: "+55-47-99611-7198",
      email: "contato@drclaudioeduardo.com.br",
      medicalSpecialty: "PlasticSurgery",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Floriano Peixoto, 222, 8º andar, Sala 801 — Edifício Stein Tower",
        addressLocality: "Blumenau",
        addressRegion: "SC",
        postalCode: "89010-022",
        addressCountry: "BR",
      },
      sameAs: [
        "https://www.instagram.com/drclaudioeduardo",
        "https://www.facebook.com/claudioeduardo.souza",
        "https://www.youtube.com/@faloplastia2288",
      ],
      areaServed: {
        "@type": "City",
        name: "Blumenau",
      },
    },
    {
      "@type": "Physician",
      "@id": `${BASE_URL}/#physician`,
      name: "Dr. Claudio Eduardo",
      url: `${BASE_URL}/claudio-eduardo-cirurgiao-plastico`,
      image: `${BASE_URL}/brand/hero-contato-jaleco.png`,
      medicalSpecialty: "PlasticSurgery",
      sameAs: [
        "https://www.instagram.com/drclaudioeduardo",
        "https://www.facebook.com/claudioeduardo.souza",
        "https://www.youtube.com/@faloplastia2288",
      ],
      identifier: [
        { "@type": "PropertyValue", name: "CRM", value: "14.706-SC" },
        { "@type": "PropertyValue", name: "RQE", value: "23.737" },
      ],
      memberOf: {
        "@type": "MedicalOrganization",
        name: "Sociedade Brasileira de Cirurgia Plástica (SBCP)",
      },
      worksFor: {
        "@id": `${BASE_URL}/#clinic`,
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Historia />
        <Cirurgias />
        <Unidades />
        <Hospitais />
        <DrNaMidia />
        <InstagramFeed />
        <CtaSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
    </div>
  );
}
