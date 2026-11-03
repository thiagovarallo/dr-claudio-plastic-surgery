import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_rinoplastia.jpg",
  alt: "Imagem ilustrativa para cirurgia de rinoplastia",
  width: 1024,
  height: 1024,
};

export const rinoplastia: CirurgiaContent = {
  slug: "rinoplastia",
  category: "Cirurgia estética e funcional",
  title: "Rinoplastia",
  subtitle:
    "A rinoplastia é uma cirurgia que remodela a estrutura do nariz para fins estéticos ou funcionais, exigindo avaliação presencial com um cirurgião plástico.",
  heroImage: procedureImage,
  benefits: [
    "Remodelação estética e correção funcional da respiração",
    "Abordagem aberta ou fechada conforme a anatomia",
    "Avaliação presencial com cirurgião plástico experiente",
  ],
  overview: {
    heading: "Equilíbrio estético e função respiratória",
    paragraphs: [
      "A rinoplastia é uma cirurgia que remodela a estrutura do nariz para fins estéticos ou funcionais, exigindo avaliação presencial com um cirurgião plástico.",
      "A rinoplastia é usada para ajustar tamanho, largura, ponta, dorso, assimetria e também para corrigir alterações que prejudicam a respiração, como desvio de septo.",
      "Procure um cirurgião plástico com experiência comprovada em rinoplastia para alinhar expectativas realistas e compreender as possibilidades para a sua anatomia.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "abordagens",
      heading: "Abordagens cirúrgicas: aberta e fechada",
      paragraphs: [
        "Existem duas abordagens principais para a realização da rinoplastia, e a escolha depende da anatomia do paciente e dos objetivos da cirurgia.",
        "Rinoplastia aberta — envolve uma pequena incisão externa na columela; permite maior visualização das estruturas internas. Rinoplastia fechada — todas as incisões são internas; costuma ser usada em casos mais simples.",
      ],
      bullets: [
        "Rinoplastia aberta: pequena incisão externa na columela e maior visualização interna",
        "Rinoplastia fechada: incisões internas, indicada habitualmente para casos mais simples",
        "Escolha definida conforme a anatomia do paciente e os objetivos da cirurgia",
      ],
      image: procedureImage,
    },
    {
      id: "consideracoes",
      heading: "Considerações e segurança antes da cirurgia",
      paragraphs: [
        "Antes de realizar o procedimento, é fundamental definir objetivos realistas, avaliar se a motivação é estética, funcional ou ambas, e entender que cada nariz tem limitações anatômicas.",
        "Como qualquer cirurgia, a rinoplastia envolve riscos como sangramento, infecção, assimetria residual e alterações na respiração. Por isso, é essencial conversar com um especialista para entender expectativas realistas.",
      ],
      bullets: [
        "Definir objetivos realistas em consulta presencial",
        "Avaliar se a motivação é estética, funcional ou ambas",
        "Entender que cada nariz tem limitações anatômicas",
        "Esclarecer riscos cirúrgicos com um especialista experiente",
      ],
      image: { src: "/brand/clinic/treatment-room.jpg", alt: "Ambiente clínico para planejamento cirúrgico", width: 1200, height: 800 },
    },
    {
      id: "recuperacao",
      heading: "Recuperação e evolução dos resultados",
      paragraphs: [
        "Inchaço e hematomas são comuns nas primeiras semanas. O resultado inicial aparece em cerca de 1 a 3 meses, mas o resultado final pode levar até 12 meses.",
        "É necessário evitar exercícios intensos, exposição ao sol e traumas no nariz durante a recuperação.",
      ],
      bullets: [
        "Inchaço e hematomas são comuns nas primeiras semanas",
        "Resultado inicial em cerca de 1 a 3 meses e resultado final em até 12 meses",
        "Evitar exercícios intensos, exposição ao sol e traumas no nariz",
      ],
      image: { src: "/brand/clinic/reception.jpg", alt: "Ambiente para retornos pós-operatórios", width: 1200, height: 800 },
    },
  ],
  faq: [
    {
      question: "O que a rinoplastia pode corrigir?",
      answer:
        "A rinoplastia é usada para ajustar tamanho, largura, ponta, dorso, assimetria e também para corrigir alterações que prejudicam a respiração, como desvio de septo.",
    },
    {
      question: "Qual a diferença entre rinoplastia aberta e fechada?",
      answer:
        "A rinoplastia aberta envolve uma pequena incisão externa na columela e permite maior visualização das estruturas internas. Já na rinoplastia fechada, todas as incisões são internas e costuma ser usada em casos mais simples. A escolha depende da anatomia do paciente e dos objetivos da cirurgia.",
    },
    {
      question: "Quanto tempo leva para ver o resultado da rinoplastia?",
      answer:
        "Inchaço e hematomas são comuns nas primeiras semanas. O resultado inicial aparece em cerca de 1 a 3 meses, mas o resultado final pode levar até 12 meses.",
    },
    {
      question: "Quais são os cuidados e riscos envolvidos?",
      answer:
        "Durante a recuperação, é necessário evitar exercícios intensos, exposição ao sol e traumas no nariz. Como qualquer cirurgia, envolve riscos como sangramento, infecção, assimetria residual e alterações na respiração, sendo essencial conversar com um cirurgião plástico experiente.",
    },
  ],
  seo: {
    title: "Rinoplastia em Blumenau/SC | Dr. Claudio Eduardo",
    description:
      "Rinoplastia estética e funcional em Blumenau/SC: abordagens aberta e fechada, indicações, recuperação e avaliação com o Dr. Claudio Eduardo.",
  },
};

