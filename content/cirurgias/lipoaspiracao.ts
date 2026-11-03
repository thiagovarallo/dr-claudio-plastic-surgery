import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_lipoaspiracao.jpg",
  alt: "Imagem ilustrativa para cirurgia de lipoaspiração",
  width: 1024,
  height: 398,
};

export const lipoaspiracao: CirurgiaContent = {
  slug: "lipoaspiracao",
  category: "Cirurgia estética",
  title: "Lipoaspiração",
  subtitle:
    "Lipoaspiração é uma cirurgia para remover gordura localizada e melhorar o contorno corporal, não um método de emagrecimento.",
  heroImage: procedureImage,
  benefits: [
    "Remoção de gordura localizada e melhora do contorno corporal",
    "Remodelação de abdômen, flancos, costas, braços, coxas e papada",
    "Segurança rigorosa dentro dos limites do CFM e da SBCP",
  ],
  overview: {
    heading: "Contorno corporal com indicação precisa e segura",
    paragraphs: [
      "Lipoaspiração é uma cirurgia para remover gordura localizada e melhorar o contorno corporal, não um método de emagrecimento.",
      "A cirurgia remove depósitos de gordura localizada por meio de cânulas conectadas a um sistema de sucção, remodelando áreas como abdômen, flancos, costas, braços, coxas e papada.",
      "É indicada quando dieta e exercícios não eliminam totalmente essas gorduras. A SBCP reforça que a lipoaspiração é para contorno corporal, não para perda de peso.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "seguranca-e-procedimento",
      heading: "Limites de segurança e etapas do procedimento",
      paragraphs: [
        "A quantidade máxima de gordura lipoaspirada deve respeitar 5% do peso corporal segundo diretrizes do CFM/SBCP ou 7% do peso corporal, conforme outras referências clínicas. Volumes maiores aumentam risco de complicações como anemia, desequilíbrios hidroeletrolíticos e trombose.",
        "O procedimento envolve a marcação das áreas a se tratar, anestesia (local com sedação, peridural ou geral), pequenas incisões e infiltração da solução tumescente (soro + adrenalina + anestésico), aspiração da gordura com cânulas, além de curativos e cinta compressiva ao final.",
      ],
      bullets: [
        "Respeito ao limite de 5% a 7% do peso corporal para máxima segurança",
        "Anestesia local com sedação, peridural ou geral conforme avaliação",
        "Infiltração de solução tumescente e aspiração com cânulas",
        "Curativos e cinta compressiva ao final do procedimento",
      ],
      image: procedureImage,
    },
    {
      id: "tipos",
      heading: "Tipos de lipoaspiração",
      paragraphs: [
        "Existem diferentes modalidades técnicas de lipoaspiração, indicadas conforme a anatomia e o objetivo de definição corporal de cada paciente.",
        "Durante a consulta médica, o cirurgião avalia qual tecnologia ou associação proporciona o resultado mais harmônico e seguro.",
      ],
      bullets: [
        "Clássica / tumescente – técnica padrão",
        "Vibrolipo – cânulas vibratórias para remoção mais homogênea",
        "Lipo HD / LAD – definição avançada, com possibilidade de enxerto de gordura em plano muscular",
        "Laser / Ultrassom (VASER) – energia para liquefazer gordura antes da aspiração",
      ],
      image: { src: "/brand/clinic/treatment-room.jpg", alt: "Ambiente clínico para planejamento cirúrgico", width: 1200, height: 800 },
    },
    {
      id: "recuperacao",
      heading: "Recuperação e evolução dos resultados",
      paragraphs: [
        "Quanto à recuperação, inchaço, dor leve e hematomas são comuns. É indicado o uso de cinta compressiva por 2 meses, e a drenagem linfática pode ser indicada pelo cirurgião.",
        "O retorno ao trabalho ocorre ao redor de 10 dias, os exercícios geralmente após 45 dias e o resultado definitivo aparece ao redor de 6 meses.",
      ],
      bullets: [
        "Uso de cinta compressiva por 2 meses e drenagem linfática quando indicada",
        "Retorno ao trabalho ao redor de 10 dias",
        "Retomada de exercícios geralmente após 45 dias",
        "Resultado definitivo ao redor de 6 meses",
      ],
      image: { src: "/brand/clinic/reception.jpg", alt: "Ambiente para retornos pós-operatórios", width: 1200, height: 800 },
    },
  ],
  faq: [
    {
      question: "A lipoaspiração serve para emagrecer?",
      answer:
        "Não. A SBCP reforça que a lipoaspiração é uma cirurgia para remover gordura localizada e melhorar o contorno corporal, não para perda de peso. É indicada quando dieta e exercícios não eliminam totalmente essas gorduras.",
    },
    {
      question: "Qual é o limite seguro de gordura que pode ser aspirada?",
      answer:
        "A quantidade máxima de gordura lipoaspirada deve respeitar 5% do peso corporal segundo diretrizes do CFM/SBCP ou 7% do peso corporal, conforme outras referências clínicas, evitando riscos como anemia, desequilíbrios hidroeletrolíticos e trombose.",
    },
    {
      question: "Quais são os tipos de lipoaspiração disponíveis?",
      answer:
        "Clássica/tumescente (técnica padrão), Vibrolipo (cânulas vibratórias para remoção mais homogênea), Lipo HD/LAD (definição avançada, com possibilidade de enxerto de gordura em plano muscular) e Laser/Ultrassom VASER (energia para liquefazer gordura antes da aspiração).",
    },
    {
      question: "Como funciona a recuperação e quando vejo o resultado definitivo?",
      answer:
        "Inchaço, dor leve e hematomas são comuns. Utiliza-se cinta compressiva por 2 meses e drenagem linfática quando indicada. O retorno ao trabalho ocorre ao redor de 10 dias, exercícios após 45 dias e o resultado definitivo ao redor de 6 meses.",
    },
  ],
  seo: {
    title: "Lipoaspiração em Blumenau/SC | Dr. Claudio Eduardo",
    description:
      "Lipoaspiração em Blumenau/SC: remoção de gordura localizada, contorno corporal, técnicas (clássica, vibrolipo, Lipo HD, VASER) e recuperação com o Dr. Claudio Eduardo.",
  },
};

