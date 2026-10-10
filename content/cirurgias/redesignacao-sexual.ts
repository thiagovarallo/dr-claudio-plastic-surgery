import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_cirurgia_de_mudanca_de_sexo.jpg",
  alt: "Imagem ilustrativa para cirurgia de redesignação sexual",
  width: 1200,
  height: 800,
};

export const redesignacaoSexual: CirurgiaContent = {
  slug: "redesignacao-sexual",
  category: "Afirmação de gênero",
  title: "Redesignação sexual MTF",
  subtitle:
    "Cuidado cirúrgico especializado, informação clara e acompanhamento individual em cada etapa da afirmação de gênero.",
  heroImage: procedureImage,
  benefits: [
    "Planejamento individual e acolhimento respeitoso",
    "Procedimento realizado em ambiente hospitalar",
    "Acompanhamento estruturado no pós-operatório",
  ],
  overview: {
    heading: "Uma decisão construída com escuta e informação",
    paragraphs: [
      "A cirurgia de redesignação sexual MTF, também chamada de cirurgia de afirmação de gênero, busca construir estruturas genitais alinhadas à identidade e aos objetivos de cada paciente.",
      "O planejamento considera aspectos funcionais, estéticos, condições clínicas e expectativas. A técnica é individualizada e explicada detalhadamente durante a avaliação.",
      "A consulta é conduzida com respeito, privacidade e espaço para esclarecer dúvidas sobre preparo, internação, recuperação e acompanhamento a longo prazo.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "preparo",
      heading: "Preparo para a cirurgia",
      paragraphs: [
        "O processo começa com avaliação clínica completa e conversa sobre objetivos, histórico de saúde e rede de apoio. Documentação e acompanhamento multiprofissional podem ser necessários conforme a situação individual e as orientações médicas vigentes.",
        "O preparo também inclui exames, orientação anestésica e organização do período de permanência na cidade quando a paciente vem de outra região.",
      ],
      bullets: [
        "Avaliação clínica e exames pré-operatórios",
        "Orientação sobre documentação e acompanhamento necessário",
        "Planejamento de suporte durante a recuperação",
      ],
      image: { ...procedureImage, alt: "Planejamento médico para cirurgia de afirmação de gênero" },
    },
    {
      id: "cirurgia",
      heading: "Cirurgia e internação",
      paragraphs: [
        "O procedimento é realizado em hospital, sob anestesia geral, por equipe cirúrgica e anestésica. A duração e o tempo de internação são definidos pelo planejamento e pela evolução pós-operatória.",
        "Durante a consulta, são explicadas as etapas da técnica, os cuidados imediatos e as particularidades que podem variar de uma paciente para outra.",
      ],
      image: { src: "/brand/clinic/treatment-room.jpg", alt: "Ambiente clínico para orientação pré-operatória", width: 1200, height: 800 },
    },
    {
      id: "pos-operatorio",
      heading: "Recuperação e seguimento",
      paragraphs: [
        "A recuperação exige acompanhamento próximo, cuidados locais e retorno progressivo às atividades. As orientações incluem higiene, medicações, manejo de curativos e, quando indicado, cuidados específicos para manutenção do canal vaginal.",
        "O tempo para trabalho, exercícios e relações sexuais é individualizado e liberado somente conforme a evolução clínica.",
      ],
      bullets: [
        "Acompanhamento pós-operatório programado",
        "Orientações para cuidados locais e atividades",
        "Canal direto com a equipe para dúvidas durante a recuperação",
      ],
      image: { src: "/brand/clinic/reception.jpg", alt: "Ambiente de acolhimento para retornos médicos", width: 1200, height: 800 },
    },
  ],
  faq: [
    {
      question: "Quem pode realizar a cirurgia?",
      answer: "A elegibilidade é definida após avaliação médica individual. A equipe orienta sobre idade, condições clínicas, exames e os acompanhamentos necessários para cada caso.",
    },
    {
      question: "Quanto tempo dura a recuperação?",
      answer: "O período varia conforme a técnica e a evolução de cada paciente. A equipe apresenta um plano de recuperação e libera atividades de forma gradual.",
    },
    {
      question: "É necessário permanecer em Blumenau após a cirurgia?",
      answer: "Para pacientes de outras cidades, é preciso planejar uma permanência compatível com a internação e os primeiros retornos. O prazo é definido na consulta.",
    },
    {
      question: "Como são tratadas as expectativas sobre resultado?",
      answer: "A consulta aborda as possibilidades, limites, riscos e cuidados do procedimento de maneira individual, com espaço para dúvidas e decisões informadas.",
    },
  ],
  seo: {
    title: "Redesignação sexual MTF | Dr. Claudio Eduardo",
    description: "Informações sobre cirurgia de redesignação sexual MTF, preparo e recuperação em Blumenau/SC.",
  },
};
