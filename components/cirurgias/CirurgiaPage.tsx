import type { CirurgiaContent } from "@/content/cirurgias/types";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { CirurgiaContactForm } from "./CirurgiaContactForm";
import { CirurgiaContent as CirurgiaContentBlocks } from "./CirurgiaContent";
import { CirurgiaFAQ } from "./CirurgiaFAQ";
import { CirurgiaHero } from "./CirurgiaHero";

type Props = {
  cirurgia: CirurgiaContent;
};

export function CirurgiaPage({ cirurgia }: Props) {
  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />
      <main>
        <article>
          <CirurgiaHero
            category={cirurgia.category}
            title={cirurgia.title}
            subtitle={cirurgia.subtitle}
          />
          <CirurgiaContentBlocks overview={cirurgia.overview} sections={cirurgia.sections} />
          <CirurgiaFAQ items={cirurgia.faq} />
          <CirurgiaContactForm surgeryTitle={cirurgia.title} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
