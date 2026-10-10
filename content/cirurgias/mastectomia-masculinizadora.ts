import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_mastectomia_masculinizadora.v2.jpg",
  alt: "Imagem ilustrativa para mastectomia masculinizadora",
  width: 1200,
  height: 800,
};

export const mastectomiaMasculinizadora: CirurgiaContent = {
  slug: "mastectomia-masculinizadora",
  category: "Afirmação de gênero",
  title: "Mastectomia masculinizadora",
  subtitle:
    "Planejamento cirúrgico individualizado para masculinização do tórax, com acolhimento, segurança e acompanhamento especializado.",
  heroImage: procedureImage,
  benefits: [
    "Planejamento conforme anatomia e objetivos individuais",
    "Procedimento hospitalar com equipe especializada",
    "Orientações claras para cada fase da recuperação",
  ],
  overview: {
    heading: "Masculinização do tórax com planejamento individual",
    paragraphs: [
      "A mastectomia masculinizadora é um procedimento de afirmação de gênero que busca construir um tórax com contorno mais compatível com os objetivos do homem trans ou de pessoas transmasculinas.",
      "A técnica é escolhida após avaliar volume e qualidade da pele, posição das aréolas, elasticidade dos tecidos e expectativas sobre cicatrizes e contorno final.",
      "Cada etapa é discutida em consulta, com informações sobre preparo, cirurgia, curativos, drenos e recuperação.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "planejamento",
      heading: "Escolha da técnica",
      paragraphs: [
        "Não existe uma única técnica adequada para todos os casos. O planejamento considera o tamanho das mamas, a qualidade da pele, o posicionamento desejado das aréolas e o equilíbrio do tórax.",
        "A consulta também aborda cicatrizes, possibilidade de ajustes e os resultados esperados de forma realista.",
      ],
      bullets: [
        "Avaliação da anatomia do tórax e da pele",
        "Discussão sobre cicatrizes e contorno corporal",
        "Definição individualizada da estratégia cirúrgica",
      ],
      image: { ...procedureImage, alt: "Avaliação para cirurgia de masculinização do tórax" },
    },
    {
      id: "procedimento",
      heading: "Cirurgia e internação",
      paragraphs: [
        "A cirurgia é realizada em ambiente hospitalar, sob anestesia definida pela equipe anestésica. O uso de drenos, curativos e o tempo de internação dependem do planejamento e da evolução imediata.",
        "Antes do procedimento, a equipe explica a preparação necessária e os cuidados do primeiro período após a cirurgia.",
      ],
      image: { src: "/brand/clinic/treatment-room.jpg", alt: "Ambiente de clínica para orientação cirúrgica", width: 1200, height: 800 },
    },
    {
      id: "recuperacao",
      heading: "Cuidados após a cirurgia",
      paragraphs: [
        "No pós-operatório, são feitas orientações sobre curativos, drenos quando utilizados, movimentação dos braços, uso de malha e retorno gradual às atividades.",
        "O acompanhamento presencial permite monitorar a cicatrização e adaptar as recomendações conforme a evolução de cada paciente.",
      ],
      bullets: [
        "Retornos para avaliação de curativos e cicatrização",
        "Liberação progressiva para dirigir, trabalhar e exercícios",
        "Proteção das cicatrizes conforme orientação médica",
      ],
      image: { src: "/brand/clinic/reception.jpg", alt: "Clínica para acompanhamento pós-operatório", width: 1200, height: 800 },
    },
  ],
  faq: [
    {
      question: "A técnica é a mesma para todos os pacientes?",
      answer: "Não. A técnica é definida conforme a anatomia do tórax, o volume mamário, a pele e o resultado desejado.",
    },
    {
      question: "Haverá cicatrizes?",
      answer: "Toda cirurgia deixa cicatrizes. A localização e a extensão variam conforme a técnica necessária e são discutidas durante a consulta.",
    },
    {
      question: "Quando é possível retomar exercícios?",
      answer: "A liberação é gradual e depende da evolução clínica. A equipe orienta o retorno seguro a cada tipo de atividade.",
    },
    {
      question: "É necessário acompanhamento antes da cirurgia?",
      answer: "A equipe orienta os exames, documentos e acompanhamentos necessários conforme a avaliação individual e as recomendações médicas aplicáveis.",
    },
  ],
  seo: {
    title: "Mastectomia masculinizadora | Dr. Claudio Eduardo",
    description: "Informações sobre mastectomia masculinizadora, planejamento e recuperação em Blumenau/SC.",
  },
};
