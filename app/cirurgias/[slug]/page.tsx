import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { CirurgiaPage } from "@/components/cirurgias/CirurgiaPage";
import { getCirurgiaBySlug, getCirurgiaSlugs } from "@/content/cirurgias";
import { localizeContent } from "@/i18n/content";

type CirurgiaRouteProps = PageProps<"/cirurgias/[slug]">;

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
  return {
    title: seo.title.replace(/\s*\|\s*Dr\. Claudio Eduardo$/, ""),
    description: seo.description,
  };
}

export default async function CirurgiaRoutePage({ params }: CirurgiaRouteProps) {
  const { slug } = await params;
  const cirurgia = getCirurgiaBySlug(slug);

  if (!cirurgia) {
    notFound();
  }

  return <CirurgiaPage cirurgia={cirurgia} />;
}
