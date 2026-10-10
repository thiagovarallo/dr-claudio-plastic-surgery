import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_penis.jpg",
  alt: "Imagem ilustrativa para aumento peniano",
  width: 1200,
  height: 800,
};

export const aumentoPenianoFaloplastia: CirurgiaContent = {
  slug: "aumento-peniano-faloplastia",
  category: "Cirurgia íntima masculina",
  title: "Aumento peniano (faloplastia)",
  subtitle:
    "Avaliação individual e atendimento reservado para pessoas que desejam compreender as possibilidades cirúrgicas de aumento peniano.",
  heroImage: procedureImage,
  benefits: [
    "Consulta individual, presencial ou por telemedicina",
    "Planejamento cirúrgico conforme anatomia e objetivos",
    "Procedimento hospitalar com acompanhamento especializado",
  ],
  overview: {
    heading: "Informação, discrição e indicação responsável",
    paragraphs: [
      "A cirurgia de aumento peniano pode reunir etapas como tratamento do acúmulo de gordura na região pubiana, liberação do ligamento suspensor e enxertia de gordura. A indicação e a combinação de técnicas dependem da avaliação médica.",
      "O objetivo é discutir possibilidades de ganho em comprimento e espessura de maneira realista, sempre respeitando a anatomia, a segurança e os limites de cada caso.",
      "A consulta é o momento para falar sobre expectativas, condições de saúde, histórico cirúrgico e eventuais tratamentos necessários antes do procedimento.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "avaliacao",
      heading: "Avaliação e indicação",
      paragraphs: [
        "A indicação é construída após exame físico e conversa detalhada sobre o que motiva a busca pelo procedimento. A cirurgia é considerada apenas para pessoas maiores de idade e em condições clínicas adequadas.",
        "Condições como hérnia inguinal precisam ser investigadas e tratadas previamente quando indicadas. A avaliação também esclarece o que é possível alcançar em cada anatomia.",
      ],
      bullets: [
        "Avaliação individual de anatomia e saúde geral",
        "Alinhamento de expectativas e limites do procedimento",
        "Investigação de condições que possam exigir tratamento prévio",
      ],
      image: { ...procedureImage, alt: "Consulta médica para planejamento de cirurgia íntima masculina" },
    },
    {
      id: "procedimento",
      heading: "Como é planejado o procedimento",
      paragraphs: [
        "A estratégia cirúrgica é definida caso a caso. Quando indicada, a cirurgia é realizada em ambiente hospitalar, com equipe especializada e anestesia definida após avaliação anestésica.",
        "A duração, a necessidade de internação e a possibilidade de associar outros procedimentos variam conforme o planejamento individual.",
      ],
      image: { src: "/brand/clinic/treatment-room.jpg", alt: "Ambiente clínico preparado para atendimento individual", width: 1200, height: 800 },
    },
    {
      id: "recuperacao",
      heading: "Recuperação e acompanhamento",
      paragraphs: [
        "O pós-operatório inclui orientações específicas sobre curativos, medicações, higiene, repouso e retomada gradual das atividades. Os retornos são essenciais para acompanhar a evolução da cicatrização.",
        "Em procedimentos com enxertia de gordura, pode ocorrer reabsorção parcial. A necessidade de uma nova etapa, quando houver, é avaliada somente após a recuperação completa.",
      ],
      bullets: [
        "Retornos programados para acompanhamento",
        "Orientações individualizadas para atividades e vida sexual",
        "Contato com a equipe diante de sinais ou dúvidas no pós-operatório",
      ],
      image: { src: "/brand/clinic/reception.jpg", alt: "Recepção da clínica para acompanhamento pós-operatório", width: 1200, height: 800 },
    },
  ],
  faq: [
    {
      question: "A cirurgia é indicada para qualquer pessoa?",
      answer: "Não. A indicação depende de avaliação médica, condições de saúde, anatomia e expectativas realistas. A decisão é sempre individual.",
    },
    {
      question: "O resultado é igual para todos os pacientes?",
      answer: "Não. As possibilidades cirúrgicas e a resposta de cada organismo variam. A consulta serve para explicar limites, riscos e expectativas de forma clara.",
    },
    {
      question: "Pode ser necessário outro procedimento?",
      answer: "Em alguns casos, especialmente quando há enxertia de gordura, uma nova etapa pode ser considerada após a recuperação. Isso não é decidido antes da avaliação da evolução.",
    },
    {
      question: "A consulta pode ser por telemedicina?",
      answer: "A equipe pode orientar sobre a possibilidade de telemedicina para a conversa inicial. A indicação cirúrgica depende da avaliação médica necessária em cada caso.",
    },
  ],
  seo: {
    title: "Aumento peniano (Faloplastia) | Dr. Claudio Eduardo",
    description: "Informações sobre avaliação, planejamento e recuperação da cirurgia de aumento peniano em Blumenau/SC.",
  },
};
