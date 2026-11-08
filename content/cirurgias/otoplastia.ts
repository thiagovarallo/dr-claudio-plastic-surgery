import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_otoplastia.jpg",
  alt: "Cirurgia de otoplastia e correção de orelhas em abano em Blumenau",
  width: 1024,
  height: 745,
};

export const otoplastia: CirurgiaContent = {
  slug: "otoplastia",
  category: "Cirurgia estética",
  title: "Otoplastia",
  subtitle:
    "Cirurgia plástica para corrigir o formato, a posição e a proporção das orelhas (orelha em abano), devolvendo harmonia facial e confiança com cicatrizes discretas.",
  heroImage: procedureImage,
  benefits: [
    "Correção anatômica natural da orelha em abano e assimetrias",
    "Cicatriz imperceptível localizada no sulco atrás da orelha",
    "Cirurgia ambulatorial com alta hospitalar no mesmo dia",
    "Indicada a partir dos 5 a 7 anos de idade e também para adultos",
  ],
  overview: {
    heading: "Harmonia facial, proporção natural e elevação da autoestima",
    paragraphs: [
      "A Otoplastia é a cirurgia plástica realizada para corrigir o formato, a posição ou a proporção das orelhas, sendo amplamente conhecida por solucionar a chamada \"orelha em abano\".",
      "O procedimento busca reposicionar as orelhas de forma mais natural e próxima ao crânio, melhorando a harmonia facial e, consequentemente, a autoestima e a confiança do paciente.",
      "Poderá ser feita a partir dos 5 a 7 anos de idade, período em que as orelhas já estão quase totalmente desenvolvidas e antes de a criança sofrer impactos psicossociais (como bullying) na escola. Também é realizada com frequência em pacientes adultos.",
    ],
    image: {
      src: "/brand/clinic/consultorio-04.png",
      alt: "Consultório do Dr. Claudio Eduardo em Blumenau",
      width: 1200,
      height: 800,
    },
  },
  gallery: [
    {
      src: "/brand/clinic/consultorio-02.png",
      alt: "Sala de consulta médica do Dr. Claudio Eduardo",
      width: 1200,
      height: 800,
    },
    {
      src: "/brand/clinic/consultorio-06.png",
      alt: "Ambiente clínico para planejamento e recuperação",
      width: 1200,
      height: 800,
    },
  ],
  sections: [
    {
      id: "tecnica-e-anestesia",
      heading: "Incisão, técnica cirúrgica e anestesia",
      paragraphs: [
        "A técnica cirúrgica busca esculpir e reposicionar a cartilagem auricular com precisão e delicadeza:",
      ],
      bullets: [
        "Incisão retroauricular: o cirurgião costuma fazer uma pequena incisão atrás da orelha, onde remove-se o excesso de pele e remodela-se as curvas internas",
        "Cicatriz imperceptível: a cicatriz fica praticamente invisível no sulco natural atrás da orelha",
        "Tipos de anestesia: em adultos, geralmente usa-se anestesia local com ou sem sedação. Em crianças pequenas, costuma-se optar por anestesia geral para máximo conforto",
        "Alta no mesmo dia: é um procedimento cirúrgico ambulatorial, permitindo que o paciente receba alta hospitalar poucas horas após a intervenção",
      ],
      image: {
        src: "/brand/clinic/consultorio-01.png",
        alt: "Recepção da clínica Dr. Claudio Eduardo em Blumenau",
        width: 1200,
        height: 800,
      },
    },
    {
      id: "cuidados-e-recuperacao",
      heading: "Cuidados pós-operatórios, faixa cirúrgica e recuperação",
      paragraphs: [
        "O período pós-operatório transcorre com conforto ao seguir as recomendações de proteção da cartilagem:",
      ],
      bullets: [
        "Afastamento inicial: é recomendado um afastamento de 2 a 5 dias das atividades escolares ou de trabalho",
        "Faixa cirúrgica/compressiva: é necessário usar uma faixa compressiva por cerca de 30 dias (geralmente em tempo integral nas primeiras semanas e depois apenas para dormir), para proteger a região e manter as orelhas na posição correta",
        "Retomada de atividades: atividades leves podem ser retomadas em cerca de 7 dias, mas exercícios pesados ou esportes de contato devem ser evitados por no mínimo 1 mês",
        "Resultado final: o inchaço diminui consideravelmente nas primeiras semanas, mas o resultado definitivo é observado após 6 meses",
      ],
      image: {
        src: "/brand/clinic/treatment-room.jpg",
        alt: "Ambiente clínico para acompanhamento e segurança pós-operatória",
        width: 1200,
        height: 800,
      },
    },
  ],
  faq: [
    {
      question: "A partir de qual idade a otoplastia pode ser realizada?",
      answer:
        "Poderá ser feita a partir dos 5 a 7 anos de idade, período em que as orelhas já estão quase totalmente desenvolvidas e antes de a criança sofrer impactos psicossociais (como bullying) na escola. Também é procurada por adolescentes e adultos em qualquer faixa etária.",
    },
    {
      question: "Onde fica a cicatriz e ela é visível?",
      answer:
        "O cirurgião costuma fazer uma pequena incisão atrás da orelha, onde remove-se o excesso de pele e remodela-se as curvas internas. A cicatriz fica praticamente invisível, alojada no sulco atrás da orelha.",
    },
    {
      question: "Qual anestesia é utilizada e é necessário internação hospitalar?",
      answer:
        "Em adultos, geralmente usa-se anestesia local com ou sem sedação. Em crianças pequenas, costuma-se optar por anestesia geral. Trata-se de um procedimento cirúrgico ambulatorial, permitindo que o paciente receba alta no mesmo dia.",
    },
    {
      question: "Por que e por quanto tempo deve-se usar a faixa cirúrgica?",
      answer:
        "É necessário usar uma faixa cirúrgica/compressiva por cerca de 30 dias (geralmente em tempo integral nas primeiras semanas e depois apenas para dormir), para proteger a região contra traumas e manter as orelhas estabilizadas na posição correta.",
    },
    {
      question: "Quando posso retornar à escola/trabalho e praticar esportes?",
      answer:
        "Recomenda-se um afastamento de 2 a 5 dias das atividades escolares ou de trabalho. Atividades leves podem ser retomadas em cerca de 7 dias, enquanto exercícios pesados ou esportes de contato devem ser evitados por no mínimo 1 mês. O inchaço diminui nas primeiras semanas e o resultado definitivo consolida-se após 6 meses.",
    },
  ],
  seo: {
    title: "Otoplastia em Blumenau/SC | Cirurgia de Orelha em Abano · Dr. Claudio Eduardo",
    description:
      "Otoplastia em Blumenau com o Dr. Claudio Eduardo (CRM 14.706-SC / RQE 23.737). Correção de orelhas em abano para crianças e adultos, procedimento ambulatorial e resultado natural.",
  },
};
