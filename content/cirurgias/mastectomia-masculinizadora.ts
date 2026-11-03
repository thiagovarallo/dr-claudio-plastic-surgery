import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_mastectomia_masculinizadora.v3.jpg",
  alt: "Técnica bi-incisional com enxerto de aréolas para mastectomia masculinizadora",
  width: 600,
  height: 338,
};

export const mastectomiaMasculinizadora: CirurgiaContent = {
  slug: "mastectomia-masculinizadora",
  category: "Afirmação de gênero",
  title: "Mastectomia Masculinizadora",
  subtitle:
    "Esta cirurgia é indicada para os homens transgêneros, proporcionando plenitude para o controle da disforia de gênero com planejamento cirúrgico seguro e acompanhamento hospitalar.",
  heroImage: procedureImage,
  benefits: [
    "Indicada para homens transgêneros após os 21 anos",
    "Técnica bi-incisional com enxerto de aréolas",
    "Anestesia geral e 01 dia de internação hospitalar",
  ],
  overview: {
    heading: "Plenitude para o controle da disforia de gênero",
    paragraphs: [
      "Esta cirurgia é indicada para os Homens Transgêneros.",
      "As mamas são o símbolo da feminilidade da mulher. Para os Homens Trans, as mamas são as estruturas anatômicas que mais lhes trazem incômodo.",
      "Geralmente, com a realização da cirurgia, trazem plenitude para o controle da disforia de gênero. A técnica habitualmente utilizada é a bi-incisional, com enxerto de aréolas.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "planejamento",
      heading: "Técnica cirúrgica e requisitos",
      paragraphs: [
        "A técnica habitualmente utilizada é a bi-incisional, com enxerto de aréolas, proporcionando um contorno torácico masculino adequado à anatomia do paciente.",
        "O procedimento é permitido após os 21 anos e é necessário apresentar laudo psicológico e psiquiátrico!",
      ],
      bullets: [
        "Técnica habitualmente utilizada: bi-incisional com enxerto de aréolas",
        "Procedimento permitido após os 21 anos",
        "Necessário laudo psicológico e psiquiátrico",
      ],
      image: procedureImage,
    },
    {
      id: "procedimento",
      heading: "Cirurgia, anestesia e internação",
      paragraphs: [
        "A cirurgia é realizada sob anestesia geral, tendo ao redor de 4 horas de duração e 01 dia de internação em ambiente hospitalar.",
        "Durante o procedimento, há utilização de drenos e curativo oclusivo, a serem abertos entre o 5° e o 7° dia de pós-operatório.",
      ],
      bullets: [
        "Realizada sob anestesia geral",
        "Duração ao redor de 4 horas e 01 dia de internação hospitalar",
        "Utilização de drenos e curativo oclusivo (abertos entre o 5° e o 7° dia de pós-operatório)",
      ],
      image: { src: "/brand/clinic/treatment-room.jpg", alt: "Ambiente de clínica para orientação cirúrgica", width: 1200, height: 800 },
    },
    {
      id: "recuperacao",
      heading: "Retorno às atividades habituais",
      paragraphs: [
        "O retorno às atividades habituais geralmente segue prazos progressivos conforme a recuperação pós-operatória: estender braços para lavar cabelos (7 dias), dirigir (14 dias), retorno ao trabalho (15 dias; a depender da ocupação), atividades físicas (30 dias) e exposição solar (60 dias).",
        "Os drenos e o curativo oclusivo são acompanhados pela equipe médica e abertos entre o 5° e o 7° dia de pós-operatório.",
      ],
      bullets: [
        "Estender braços para lavar cabelos: 7 dias",
        "Dirigir: 14 dias",
        "Retorno ao trabalho: 15 dias (a depender da ocupação)",
        "Atividades físicas: 30 dias",
        "Exposição solar: 60 dias",
      ],
      image: { src: "/brand/clinic/reception.jpg", alt: "Clínica para acompanhamento pós-operatório", width: 1200, height: 800 },
    },
  ],
  faq: [
    {
      question: "Para quem a Mastectomia Masculinizadora é indicada?",
      answer:
        "Esta cirurgia é indicada para os Homens Transgêneros, para quem as mamas são as estruturas anatômicas que mais trazem incômodo, auxiliando com plenitude no controle da disforia de gênero.",
    },
    {
      question: "Qual é a técnica habitualmente utilizada?",
      answer:
        "A técnica habitualmente utilizada é a bi-incisional, com enxerto de aréolas.",
    },
    {
      question: "Como funciona a cirurgia, a internação e o uso de curativos?",
      answer:
        "A cirurgia é realizada sob anestesia geral, tendo ao redor de 4 horas de duração, 01 dia de internação em ambiente hospitalar, utilização de drenos e curativo oclusivo, a serem abertos entre o 5° e o 7° dia de pós-operatório.",
    },
    {
      question: "Qual a idade mínima e quais laudos são necessários?",
      answer:
        "O procedimento é permitido após os 21 anos e é necessário apresentar laudo psicológico e psiquiátrico.",
    },
    {
      question: "Como é o retorno às atividades habituais?",
      answer:
        "O retorno às atividades habituais geralmente é: estender braços para lavar cabelos (7 dias), dirigir (14 dias), retorno ao trabalho (15 dias; a depender da ocupação), atividades físicas (30 dias) e exposição solar (60 dias).",
    },
  ],
  seo: {
    title: "Mastectomia Masculinizadora em Blumenau/SC | Dr. Claudio Eduardo",
    description:
      "Mastectomia masculinizadora indicada para homens transgêneros: técnica bi-incisional com enxerto de aréolas, requisitos, internação e recuperação em Blumenau/SC.",
  },
};
