import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_peeling_de_fenol.jpg",
  alt: "Procedimento de peeling de fenol e rejuvenescimento facial profundo",
  width: 1024,
  height: 682,
};

export const peelingDeFenol: CirurgiaContent = {
  slug: "peeling-de-fenol",
  category: "Procedimento estético",
  title: "Peeling de Fenol",
  subtitle:
    "Procedimento dermatológico profundo e agressivo com ácido carbólico (fenol) e óleo de cróton para renovação intensa da pele e forte estímulo de colágeno.",
  heroImage: procedureImage,
  benefits: [
    "Renovação intensa das camadas profundas da derme",
    "Estímulo potente para a produção de colágeno novo",
    "Tratamento de rugas profundas, sulcos marcados e fotoenvelhecimento severo",
    "Melhora significativa de cicatrizes profundas e sequelas de acne",
  ],
  overview: {
    heading: "Renovação dérmica profunda e estímulo intenso de colágeno",
    paragraphs: [
      "O peeling de fenol é um procedimento dermatológico profundo e agressivo que utiliza o ácido carbólico (fenol), geralmente associado ao óleo de cróton, para promover uma renovação intensa da pele e estimular fortemente a produção de colágeno.",
      "O procedimento atinge camadas profundas da derme e costuma ser indicado apenas para casos severos em que peelings mais leves ou lasers não entregam resultado suficiente.",
      "A indicação exige avaliação médica criteriosa prévia, análise clínica detalhada e exames laboratoriais completos para garantir a máxima segurança do paciente.",
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
      id: "indicacoes-e-atuacao",
      heading: "Indicações clínicas e alcance do procedimento",
      paragraphs: [
        "Por atingir planos profundos da derme, o peeling de fenol é reservado para quadros acentuados em que outros métodos dermatológicos não alcançam o resultado pretendido:",
      ],
      bullets: [
        "Envelhecimento acentuado: rugas profundas, sulcos faciais marcados e perda expressiva de sustentação cutânea",
        "Elastose solar: pele com aspecto apergaminhado, ressecamento extremo e danos severos provocados pela radiação solar",
        "Cicatrizes profundas e sequelas de acne: marcas atróficas e irregularidades na textura da pele",
        "Manchas e lesões: hiperpigmentações e alterações de pigmentação associadas ao fotoenvelhecimento",
      ],
      image: {
        src: "/brand/clinic/consultorio-01.png",
        alt: "Recepção da clínica Dr. Claudio Eduardo em Blumenau",
        width: 1200,
        height: 800,
      },
    },
    {
      id: "seguranca-e-contraindicacoes",
      heading: "Toxicidade sistêmica, segurança e contraindicações",
      paragraphs: [
        "Como o fenol é absorvido pela pele e cai na corrente sanguínea antes de ser metabolizado pelo fígado e excretado pelos rins, ele apresenta toxicidade sistêmica relevante:",
      ],
      bullets: [
        "Contraindicações clínicas: não é recomendável para pessoas com problemas cardíacos, renais ou hepáticos",
        "Gestantes e lactantes: procedimento totalmente contraindicado durante a gravidez e o período de amamentação",
        "Fototipos altos: não é recomendado para indivíduos com peles morenas ou negras, devido ao alto risco de despigmentação permanente (hipocromia) e manchas de contraste",
        "Avaliação cardiológica e laboratorial: imprescindível realizar exames pré-operatórios completos antes de qualquer conduta",
      ],
      image: {
        src: "/brand/clinic/treatment-room.jpg",
        alt: "Ambiente clínico seguro para planejamento e recuperação",
        width: 1200,
        height: 800,
      },
    },
    {
      id: "pos-operatorio-e-recuperacao",
      heading: "Recuperação, pós-operatório e cuidados solares",
      paragraphs: [
        "A recuperação de um peeling de fenol profundo é longa e exige repouso rigoroso e adesão completa às orientações médicas:",
      ],
      bullets: [
        "Primeiras semanas: o rosto apresenta inchaço intenso, dor, ardência e formação de crostas durante os primeiros 10 a 15 dias",
        "Pós-operatório tardio: após a descamação, a pele nova nasce sensível e permanece avermelhada (eritema) por um período de 2 a 3 meses",
        "Proteção solar absoluta: o uso de fotoprotetores de amplo espectro e a não exposição direta à luz solar são indispensáveis para evitar manchas e hiperpigmentação pós-inflamatória",
      ],
      image: {
        src: "/brand/clinic/consultorio-03.png",
        alt: "Sala de atendimento e orientação médica",
        width: 1200,
        height: 800,
      },
    },
  ],
  faq: [
    {
      question: "O que é o peeling de fenol e como ele age?",
      answer:
        "O peeling de fenol é um procedimento dermatológico profundo e agressivo que utiliza o ácido carbólico (fenol), geralmente associado ao óleo de cróton, para promover uma renovação intensa da pele e estimular fortemente a produção de colágeno nas camadas profundas da derme.",
    },
    {
      question: "Para quais casos o peeling de fenol é indicado?",
      answer:
        "É indicado para casos severos em que peelings mais leves ou lasers não entregam resultado suficiente, tais como envelhecimento acentuado com rugas e sulcos profundos, pele apergaminhada pelo sol (elastose solar), cicatrizes profundas, sequelas de acne, manchas e lesões solares.",
    },
    {
      question: "Quais são as contraindicações e riscos sistêmicos do fenol?",
      answer:
        "Como o fenol é absorvido pela pele e entra na corrente sanguínea antes de ser metabolizado pelo fígado e excretado pelos rins, apresenta toxicidade sistêmica relevante. Não é recomendável para pessoas com problemas cardíacos, renais ou hepáticos, gestantes, lactantes e pessoas com peles morenas ou negras (fototipos altos), pelo risco de despigmentação permanente e manchas de contraste.",
    },
    {
      question: "Como é a recuperação após o peeling de fenol?",
      answer:
        "A recuperação é longa e exige repouso rigoroso. Nas primeiras semanas (10 a 15 dias), o rosto apresenta inchaço intenso, dor, ardência e formação de crostas. Após a descamação, a pele nova nasce muito sensível e permanece avermelhada por 2 a 3 meses, exigindo proteção solar absoluta.",
    },
  ],
  seo: {
    title: "Peeling de Fenol em Blumenau/SC | Renovação Facial Profunda · Dr. Claudio Eduardo",
    description:
      "Peeling de fenol com o Dr. Claudio Eduardo (CRM 14.706-SC / RQE 23.737) em Blumenau. Renovação profunda da derme, estímulo de colágeno, cuidados e avaliação responsável.",
  },
};
