import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CirurgiasIndexPage } from "@/components/cirurgias/CirurgiasIndexPage";
import { getAllCirurgias } from "@/content/cirurgias";

const BASE_URL = "https://www.drclaudioeduardo.com.br";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    title: t("surgeriesTitle"),
    description: t("surgeriesDescription"),
    alternates: {
      canonical: "/cirurgias",
    },
    openGraph: {
      title: `${t("surgeriesTitle")} | Dr. Claudio Eduardo`,
      description: t("surgeriesDescription"),
      url: `${BASE_URL}/cirurgias`,
      type: "website",
    },
  };
}

const surgeriesListSchema = {
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
          name: "Cirurgias",
          item: `${BASE_URL}/cirurgias`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Procedimentos e Cirurgias Plásticas — Dr. Claudio Eduardo",
      itemListElement: getAllCirurgias().map((cirurgia, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: cirurgia.title,
        url: `${BASE_URL}/cirurgias/${cirurgia.slug}`,
      })),
    },
  ],
};

export default function CirurgiasPage() {
  return (
    <>
      <CirurgiasIndexPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(surgeriesListSchema) }}
      />
    </>
  );
}
