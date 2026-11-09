import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { CirurgiaPage } from "@/components/cirurgias/CirurgiaPage";
import { getCirurgiaBySlug, getCirurgiaSlugs } from "@/content/cirurgias";
import { localizeContent } from "@/i18n/content";

type CirurgiaRouteProps = PageProps<"/cirurgias/[slug]">;

const BASE_URL = "https://www.drclaudioeduardo.com.br";

export function generateStaticParams() {
  return getCirurgiaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CirurgiaRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const cirurgia = getCirurgiaBySlug(slug);
  if (!cirurgia) {
    return {};
  }
  const locale = await getLocale();
  const seo = localizeContent(locale, cirurgia.seo);
  const cleanTitle = seo.title.replace(/\s*\|\s*Dr\. Claudio Eduardo$/, "");
  const ogImage = cirurgia.heroImage?.src ?? cirurgia.overview.image?.src ?? "/brand/hero-contato-jaleco.png";

  return {
    title: cleanTitle,
    description: seo.description,
    alternates: {
      canonical: `/cirurgias/${slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${BASE_URL}/cirurgias/${slug}`,
      siteName: "Dr. Claudio Eduardo — Cirurgião Plástico",
      type: "article",
      images: [
        {
          url: ogImage,
          alt: cirurgia.heroImage?.alt ?? cirurgia.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
  };
}

export default async function CirurgiaRoutePage({ params }: CirurgiaRouteProps) {
  const { slug } = await params;
  const cirurgia = getCirurgiaBySlug(slug);

  if (!cirurgia) {
    notFound();
  }

  const locale = await getLocale();
  const localized = localizeContent(locale, cirurgia);
  const pageUrl = `${BASE_URL}/cirurgias/${slug}`;
  const ogImage = cirurgia.heroImage?.src
    ? `${BASE_URL}${cirurgia.heroImage.src}`
    : `${BASE_URL}/brand/hero-contato-jaleco.png`;

  const surgerySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "en" ? "Surgeries" : locale === "es" ? "Cirugías" : "Cirurgias",
            item: `${BASE_URL}/cirurgias`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: localized.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${pageUrl}#procedure`,
        name: localized.title,
        description: localized.seo.description,
        url: pageUrl,
        image: ogImage,
        procedureType: "https://schema.org/SurgicalProcedure",
      },
      ...(localized.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: localized.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <CirurgiaPage cirurgia={cirurgia} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(surgerySchema) }}
      />
    </>
  );
}
