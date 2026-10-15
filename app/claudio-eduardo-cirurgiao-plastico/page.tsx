import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { HistoriaPage } from "@/components/historia/HistoriaPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return { title: t("historyTitle"), description: t("historyDescription") };
}

export default function ClaudioEduardoPage() {
  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />
      <HistoriaPage />
      <Footer />
    </div>
  );
}
