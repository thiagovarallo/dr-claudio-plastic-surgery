import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CirurgiaPage } from "@/components/cirurgias/CirurgiaPage";
import { getCirurgiaBySlug, getCirurgiaSlugs } from "@/content/cirurgias";

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
  return {
    title: cirurgia.seo.title,
    description: cirurgia.seo.description,
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
