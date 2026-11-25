import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_mamoplastia.jpg",
  alt: "Cirurgia de mamoplastia e mastopexia",
  width: 1000,
  height: 668,
};

export const mamoplastia: CirurgiaContent = {
  slug: "mamoplastia",
  category: "Cirurgia estética e reparadora",
  title: "Mamoplastia",
  subtitle:
    "Cirurgia das mamas que pode alterar volume, forma ou posição, conforme a anatomia e os objetivos de cada paciente.",
  heroImage: procedureImage,
  benefits: [
    "Redução do volume mamário e alívio de desconfortos relacionados ao peso excessivo",
    "Correção da flacidez e do caimento das mamas",
    "Possibilidade de associar próteses à mastopexia, conforme indicação",
  ],
  overview: {
    heading: "Redução, reposicionamento e contorno mamário",
    paragraphs: [
      "A mamoplastia é um procedimento cirúrgico realizado para alterar o tamanho, a forma ou a posição das mamas.",
      "A mamoplastia redutora remove excesso de gordura, tecido glandular e pele. Pode ser indicada para mamas muito grandes associadas a dor nas costas, irritações na pele ou desconforto.",
      "A mastopexia, também chamada de mamoplastia de levantamento, corrige a flacidez e o caimento das mamas e pode ou não incluir próteses. A indicação e a técnica são definidas após avaliação individual.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "tipos-de-mamoplastia",
      heading: "Tipos de mamoplastia",
      paragraphs: [
        "A escolha do procedimento considera o volume mamário, a flacidez, a anatomia e os objetivos de cada paciente.",
      ],
      bullets: [
        "Mamoplastia redutora — remove excesso de gordura, tecido glandular e pele. Pode ser indicada para mamas muito grandes que causam dor nas costas, irritações na pele ou desconforto.",
        "Mastopexia (mamoplastia de levantamento) — corrige a flacidez e o caimento das mamas, podendo ou não incluir próteses.",
      ],
    },
    {
      id: "cirurgia",
      heading: "Como é realizada a cirurgia",
      paragraphs: [
        "A cirurgia é realizada em ambiente hospitalar, com anestesia geral. A duração costuma ser de cerca de 4 horas, dependendo da técnica. A alta normalmente ocorre no dia seguinte.",
      ],
    },
    {
      id: "recuperacao",
      heading: "Recuperação e retorno às atividades",
      paragraphs: [
        "Os prazos são aproximados e variam conforme a técnica e a evolução individual. Siga as orientações da equipe médica em todas as etapas da recuperação.",
      ],
      bullets: [
        "Uso de sutiã cirúrgico por cerca de 60 dias, conforme orientação médica",
        "Evitar esforço físico por 3 a 4 semanas, com retomada gradual após liberação médica",
        "Retorno ao trabalho geralmente entre 7 e 14 dias, conforme o tipo de atividade e a recuperação",
        "O resultado definitivo pode levar cerca de 6 meses para aparecer",
      ],
    },
    {
      id: "riscos-e-seguranca",
      heading: "Riscos e segurança",
      paragraphs: [
        "Como toda cirurgia, a mamoplastia envolve riscos, que podem incluir hematomas, infecção, alterações de sensibilidade, cicatrização desfavorável e assimetrias. A avaliação individual, a escolha de um cirurgião plástico com RQE e a realização do procedimento em hospital adequado fazem parte do planejamento de segurança.",
      ],
    },
  ],
  faq: [
    {
      question: "Qual é a diferença entre mamoplastia redutora e mastopexia?",
      answer:
        "A mamoplastia redutora remove excesso de gordura, tecido glandular e pele para reduzir o volume das mamas. A mastopexia corrige a flacidez e reposiciona as mamas; em alguns casos, pode ser associada a próteses.",
    },
    {
      question: "A mastopexia sempre inclui próteses?",
      answer:
        "Não. A mastopexia pode ser realizada com ou sem próteses, conforme a anatomia e os objetivos da paciente após avaliação médica.",
    },
    {
      question: "Quanto tempo dura a recuperação?",
      answer:
        "Os prazos variam conforme a técnica, as atividades da paciente e a evolução individual. O uso de sutiã cirúrgico, a retomada de exercícios e o retorno ao trabalho devem seguir a orientação da equipe médica.",
    },
    {
      question: "Quais são os riscos da mamoplastia?",
      answer:
        "Entre os riscos possíveis estão hematomas, infecção, alterações de sensibilidade, cicatrização desfavorável e assimetrias. A avaliação médica explica os riscos individuais e as medidas de segurança antes da cirurgia.",
    },
  ],
  seo: {
    title: "Mamoplastia em Blumenau/SC | Dr. Claudio Eduardo",
    description:
      "Conheça as possibilidades de mamoplastia redutora e mastopexia em Blumenau/SC, com informações sobre indicação, cirurgia e recuperação.",
  },
};
