import type { CirurgiaContent } from "@/content/cirurgias/types";
import { CirurgiaContent as CirurgiaContentBlocks } from "./CirurgiaContent";
import { CirurgiaFAQ } from "./CirurgiaFAQ";
import { CirurgiaGallery } from "./CirurgiaGallery";
import { CirurgiaHero } from "./CirurgiaHero";

type Props = {
  cirurgia: CirurgiaContent;
};

export function CirurgiaPage({ cirurgia }: Props) {
  return (
    <article>
      <CirurgiaHero
        category={cirurgia.category}
        title={cirurgia.title}
        subtitle={cirurgia.subtitle}
        benefits={cirurgia.benefits}
      />
      <CirurgiaContentBlocks
        overview={cirurgia.overview}
        sections={cirurgia.sections}
      />
      <CirurgiaGallery items={cirurgia.gallery} />
      <CirurgiaFAQ items={cirurgia.faq} />
    </article>
  );
}
