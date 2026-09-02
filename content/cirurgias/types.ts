export type CirurgiaGalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CirurgiaSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: CirurgiaGalleryItem;
};

export type CirurgiaFAQItem = {
  question: string;
  answer: string;
};

export type CirurgiaContent = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  heroImage?: CirurgiaGalleryItem;
  benefits: string[];
  overview: {
    heading: string;
    paragraphs: string[];
    image?: CirurgiaGalleryItem;
  };
  gallery: CirurgiaGalleryItem[];
  sections: CirurgiaSection[];
  faq: CirurgiaFAQItem[];
  seo: {
    title: string;
    description: string;
  };
};
