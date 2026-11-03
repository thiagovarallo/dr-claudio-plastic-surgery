import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_blefaroplastia.jpg",
  alt: "Imagem ilustrativa para cirurgia de blefaroplastia",
  width: 900,
  height: 600,
};

export const blefaroplastia: CirurgiaContent = {
  slug: "blefaroplastia",
  category: "Cirurgia estética e funcional",
  title: "Blefaroplastia",
  subtitle:
    "A blefaroplastia é uma cirurgia que remove o excesso de pele, músculo ou gordura das pálpebras, indicada para tratar pálpebras caídas, bolsas sob os olhos e, em alguns casos, melhorar o campo visual.",
  heroImage: procedureImage,
  benefits: [
    "Rejuvenescimento do olhar e redução do aspecto cansado",
    "Correção de flacidez, excesso de pele e bolsas de gordura",
    "Melhora do campo visual quando há prejuízo da visão periférica",
  ],
  overview: {
    heading: "Rejuvenescimento do olhar e função visual",
    paragraphs: [
      "A blefaroplastia é uma cirurgia que remove o excesso de pele, músculo ou gordura das pálpebras, indicada para tratar pálpebras caídas, bolsas sob os olhos e, em alguns casos, melhorar o campo visual.",
      "Corrige flacidez, excesso de pele e bolsas de gordura, rejuvenescendo o olhar e reduzindo o aspecto cansado. Também pode ter função visual, quando o excesso de pele atrapalha a visão periférica.",
      "A cirurgia é realizada por médico cirurgião plástico, com duração média de 40 minutos a 2 horas e anestesia geralmente local com sedação.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "tipos",
      heading: "Tipos de blefaroplastia",
      paragraphs: [
        "Conforme a avaliação anatômica das pálpebras e a presença de excesso de pele ou bolsas de gordura, a blefaroplastia poderá ser realizada em diferentes abordagens.",
        "Cada técnica é planejada para preservar a naturalidade do olhar e posicionar cicatrizes da maneira mais discreta possível.",
      ],
      bullets: [
        "Superior – remove pele e gordura da pálpebra superior",
        "Inferior – corrige bolsas e flacidez da região inferior, com ressecção de pele",
        "Transconjuntival – feita por dentro da pálpebra, sem cicatriz visível; indicada quando não há excesso de pele",
      ],
      image: procedureImage,
    },
    {
      id: "procedimento",
      heading: "Como é realizada a cirurgia",
      paragraphs: [
        "A cirurgia é realizada por médico cirurgião plástico após avaliação detalhada da região periorbital e da qualidade da pele.",
        "A duração média do procedimento é de 40 minutos a 2 horas, utilizando anestesia geralmente local com sedação.",
      ],
      bullets: [
        "Realizada por médico cirurgião plástico",
        "Duração média de 40 minutos a 2 horas",
        "Anestesia geralmente local com sedação",
      ],
      image: { src: "/brand/clinic/treatment-room.jpg", alt: "Ambiente clínico para planejamento cirúrgico", width: 1200, height: 800 },
    },
    {
      id: "recuperacao",
      heading: "Recuperação e pós-operatório",
      paragraphs: [
        "Inchaço, hematomas e sensibilidade são comuns nos primeiros dias, e compressas frias ajudam a reduzir o edema. É recomendado evitar sol, maquiagem, exercícios e lentes de contato por cerca de 2 semanas.",
        "Os pontos são retirados entre 5 a 7 dias. O resultado inicial aparece em 15 dias e o resultado definitivo ao redor de 4 a 6 meses.",
      ],
      bullets: [
        "Compressas frias nos primeiros dias para ajudar a reduzir o edema",
        "Evitar sol, maquiagem, exercícios e lentes de contato por cerca de 2 semanas",
        "Retirada dos pontos entre 5 a 7 dias",
        "Resultado inicial em 15 dias e resultado definitivo ao redor de 4 a 6 meses",
      ],
      image: { src: "/brand/clinic/reception.jpg", alt: "Ambiente para retornos pós-operatórios", width: 1200, height: 800 },
    },
  ],
  faq: [
    {
      question: "Para que serve a blefaroplastia?",
      answer:
        "A blefaroplastia remove o excesso de pele, músculo ou gordura das pálpebras, corrigindo flacidez e bolsas sob os olhos para rejuvenescer o olhar, além de melhorar o campo visual quando o excesso de pele atrapalha a visão periférica.",
    },
    {
      question: "Quais são os tipos de blefaroplastia?",
      answer:
        "Poderá ser Superior (remove pele e gordura da pálpebra superior), Inferior (corrige bolsas e flacidez da região inferior com ressecção de pele) ou Transconjuntival (feita por dentro da pálpebra, sem cicatriz visível, indicada quando não há excesso de pele).",
    },
    {
      question: "Qual é a duração da cirurgia e o tipo de anestesia?",
      answer:
        "A cirurgia é realizada por médico cirurgião plástico, com duração média de 40 minutos a 2 horas e anestesia geralmente local com sedação.",
    },
    {
      question: "Como é a recuperação e quando aparece o resultado?",
      answer:
        "Inchaço, hematomas e sensibilidade são comuns nos primeiros dias, aliviados com compressas frias. Deve-se evitar sol, maquiagem, exercícios e lentes de contato por cerca de 2 semanas. Os pontos são retirados entre 5 a 7 dias, o resultado inicial surge em 15 dias e o definitivo ao redor de 4 a 6 meses.",
    },
  ],
  seo: {
    title: "Blefaroplastia em Blumenau/SC | Dr. Claudio Eduardo",
    description:
      "Blefaroplastia em Blumenau/SC: cirurgia das pálpebras superior, inferior e transconjuntival para rejuvenescimento do olhar e melhora visual com o Dr. Claudio Eduardo.",
  },
};

