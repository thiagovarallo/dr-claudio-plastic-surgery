import type { CirurgiaContent } from "@/content/cirurgias/types";
import { getLocale } from "next-intl/server";
import { localizeContent } from "@/i18n/content";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { CirurgiaContactForm } from "./CirurgiaContactForm";
import { CirurgiaContent as CirurgiaContentBlocks } from "./CirurgiaContent";
import { CirurgiaFAQ } from "./CirurgiaFAQ";
import { CirurgiaHero } from "./CirurgiaHero";

type Props = {
  cirurgia: CirurgiaContent;
};

export async function CirurgiaPage({ cirurgia }: Props) {
  const locale = await getLocale();
  const localized = localizeContent(locale, cirurgia);

  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />
      <main>
        <article>
          <CirurgiaHero
            category={localized.category}
            title={localized.title}
            subtitle={localized.subtitle}
          />
          <CirurgiaContentBlocks overview={localized.overview} sections={localized.sections} />
          <CirurgiaFAQ items={localized.faq} />
          <CirurgiaContactForm surgeryTitle={localized.title} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
