import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_protese_de_mama.jpg",
  alt: "Imagem ilustrativa para cirurgia de prótese de mama",
  width: 1200,
  height: 800,
};

export const proteseDeMama: CirurgiaContent = {
  slug: "protese-de-mama",
  category: "Cirurgia estética e reparadora",
  title: "Prótese de mama",
  subtitle:
    "Mamoplastia de aumento planejada a partir da anatomia, das proporções corporais e das expectativas de cada paciente.",
  heroImage: procedureImage,
  benefits: [
    "Escolha individualizada de volume, formato e plano",
    "Planejamento com foco em proporção e segurança",
    "Acompanhamento próximo no período pós-operatório",
  ],
  overview: {
    heading: "Aumento mamário com proporção e planejamento",
    paragraphs: [
      "A mamoplastia de aumento, conhecida como cirurgia de prótese de mama, pode ser indicada para ampliar o volume das mamas ou contribuir para reconstruções, sempre após avaliação individual.",
      "Existem diferentes formatos, dimensões e perfis de implantes. A escolha considera características do tórax, qualidade da pele, tecido mamário disponível, estilo de vida e objetivos da paciente.",
      "A consulta permite entender as alternativas, explicar cicatrizes e alinhar expectativas sobre forma, volume e recuperação.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "planejamento",
      heading: "Escolha do implante e da técnica",
      paragraphs: [
        "O tamanho do implante não é definido de forma isolada. O planejamento avalia medidas corporais, base da mama, espessura dos tecidos e o resultado desejado.",
        "A via de incisão e o plano de colocação da prótese também são definidos de acordo com a anatomia e a estratégia cirúrgica mais adequada.",
      ],
      bullets: [
        "Avaliação das proporções do tórax e das mamas",
        "Discussão sobre formato, perfil e volume do implante",
        "Orientação sobre cicatrizes e possibilidades de técnica",
      ],
      image: { ...procedureImage, alt: "Planejamento de mamoplastia de aumento" },
    },
    {
      id: "cirurgia",
      heading: "Como é realizada a cirurgia",
      paragraphs: [
        "A cirurgia é realizada em ambiente hospitalar, com anestesia definida após avaliação anestésica. A duração e a necessidade de internação são explicadas no planejamento pré-operatório.",
        "Exames pré-operatórios e registros fotográficos fazem parte do processo de organização e segurança do procedimento.",
      ],
      image: { src: "/brand/clinic/treatment-room.jpg", alt: "Ambiente clínico para planejamento cirúrgico", width: 1200, height: 800 },
    },
    {
      id: "recuperacao",
      heading: "Pós-operatório e retorno às atividades",
      paragraphs: [
        "Após a alta, são necessários cuidados com repouso relativo, uso de sutiã cirúrgico, proteção solar e retornos médicos. As orientações são adaptadas à evolução de cada paciente.",
        "A retomada de trabalho, direção e exercícios ocorre de forma gradual, somente com liberação da equipe.",
      ],
      bullets: [
        "Uso de sutiã cirúrgico conforme orientação",
        "Retornos para avaliar cicatrização e posicionamento",
        "Liberação progressiva de atividades físicas",
      ],
      image: { src: "/brand/clinic/reception.jpg", alt: "Ambiente para retornos pós-operatórios", width: 1200, height: 800 },
    },
  ],
  faq: [
    {
      question: "Como é escolhido o tamanho da prótese?",
      answer: "A escolha considera anatomia, proporções, espessura dos tecidos e objetivo da paciente. A decisão é tomada na avaliação, não por um volume padrão.",
    },
    {
      question: "A prótese interfere na amamentação?",
      answer: "A possibilidade de amamentação depende de diversos fatores. A técnica é planejada para preservar estruturas importantes quando possível, e o tema deve ser conversado na consulta.",
    },
    {
      question: "Quando posso voltar ao trabalho?",
      answer: "O prazo varia conforme a atividade profissional e a evolução pós-operatória. A equipe orienta a retomada segura em cada retorno.",
    },
    {
      question: "A cirurgia exige internação?",
      answer: "A necessidade e o período de internação são definidos no planejamento cirúrgico e pela avaliação anestésica.",
    },
  ],
  seo: {
    title: "Prótese de mama | Dr. Claudio Eduardo",
    description: "Informações sobre mamoplastia de aumento, planejamento e recuperação em Blumenau/SC.",
  },
};
