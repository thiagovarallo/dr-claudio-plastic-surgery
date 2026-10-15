import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CirurgiasIndexPage } from "@/components/cirurgias/CirurgiasIndexPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return { title: t("surgeriesTitle"), description: t("surgeriesDescription") };
}

export default function CirurgiasPage() {
  return <CirurgiasIndexPage />;
}
