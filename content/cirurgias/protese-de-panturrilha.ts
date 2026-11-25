import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_protese_de_panturrilha.jpg",
  alt: "Prótese de panturrilha e implantes de silicone para contorno das pernas",
  width: 547,
  height: 365,
};

export const proteseDePanturrilha: CirurgiaContent = {
  slug: "protese-de-panturrilha",
  category: "Cirurgia estética",
  title: "Prótese de panturrilha",
  subtitle:
    "Cirurgia plástica com implantes de silicone específicos para aumentar volume, definir o contorno das pernas e corrigir assimetrias musculares.",
  heroImage: procedureImage,
  benefits: [
    "Aumento de volume e harmonia proporcional com as coxas",
    "Cicatriz discreta de 3 a 4 cm na dobra natural atrás do joelho (fossa poplítea)",
    "Posicionamento subfascial preservando a integridade das fibras musculares",
    "Correção de assimetrias genéticas, traumas ou sequelas neuromusculares",
  ],
  overview: {
    heading: "Volume, definição e proporção natural para as pernas",
    paragraphs: [
      "A cirurgia de prótese de panturrilha consiste na colocação de implantes de silicone específicos na parte posterior e interna das pernas para aumentar o volume, melhorar o contorno ou corrigir assimetrias musculares.",
      "O procedimento atende tanto a demandas estéticas quanto reparadoras, proporcionando maior projeção muscular e equilíbrio com as demais proporções corporais.",
      "A escolha do modelo e volume das próteses é individualizada, considerando o biotipo, a altura e a harmonia estética de cada paciente.",
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
      id: "indicacoes-clinicas",
      heading: "Indicações estéticas e reparadoras",
      paragraphs: [
        "A prótese de panturrilha é indicada para diferentes necessidades anatômicas e funcionais:",
      ],
      bullets: [
        "Fatores estéticos e genéticos: pessoas com panturrilhas muito finas ou desproporcionais às coxas que não conseguem hipertrofia mesmo com treinos intensos",
        "Assimetrias e sequelas: correção de diferenças visíveis entre as duas pernas causadas por traumas, acidentes, pé torto congênito ou sequelas de poliomielite",
      ],
      image: {
        src: "/brand/clinic/consultorio-01.png",
        alt: "Recepção da clínica Dr. Claudio Eduardo em Blumenau",
        width: 1200,
        height: 800,
      },
    },
    {
      id: "tecnica-e-procedimento",
      heading: "Técnica cirúrgica, anestesia e posicionamento",
      paragraphs: [
        "O procedimento é realizado em ambiente cirúrgico com rigor técnico e foco na discrição das cicatrizes:",
      ],
      bullets: [
        "Anestesia e duração: realizada com anestesia peridural ou raquidiana com sedação (ou anestesia geral), levando em média de 1 a 2 horas",
        "Incisão discreta: feito um pequeno corte (cerca de 3 a 4 cm) na dobra natural atrás do joelho (fossa poplítea), deixando a cicatriz bem disfarçada",
        "Plano subfascial: a prótese, feita de gel de silicone coesivo ou silicone sólido de consistência firme e formato alongado, é posicionada abaixo da fáscia (capa que recobre o músculo gastrocnêmio), sem cortar o músculo",
        "Lipoenxertia associada: em casos onde a parte inferior da perna também é muito fina, o cirurgião pode associar enxerto de gordura",
        "Internação e alta: a alta costuma ocorrer no dia seguinte à cirurgia",
      ],
      image: {
        src: "/brand/clinic/treatment-room.jpg",
        alt: "Estrutura hospitalar para cirurgias plásticas seguras",
        width: 1200,
        height: 800,
      },
    },
    {
      id: "recuperacao-e-resultados",
      heading: "Pós-operatório, atividades e evolução do resultado",
      paragraphs: [
        "A recuperação pós-operatória demanda cuidados específicos para estabilização das próteses:",
      ],
      bullets: [
        "Primeiras semanas: repouso com as pernas elevadas, uso de meias de compressão e caminhadas leves logo nos primeiros dias",
        "Restrições iniciais: deve-se evitar subir escadas, usar salto muito alto ou dirigir nas primeiras 2 a 4 semanas",
        "Atividades físicas: exercícios leves costumam ser liberados após 30 dias, enquanto treinos intensos de membros inferiores exigem cerca de 2 meses de pausa",
        "Evolução e resultados: a melhora inicial aparece por volta de 2 meses, mas o resultado definitivo surge após 6 meses, quando o inchaço regride totalmente",
      ],
      image: {
        src: "/brand/clinic/consultorio-03.png",
        alt: "Acompanhamento pós-operatório na clínica em Blumenau",
        width: 1200,
        height: 800,
      },
    },
  ],
  faq: [
    {
      question: "Em que consiste a cirurgia de prótese de panturrilha?",
      answer:
        "Consiste na colocação de implantes de silicone específicos na parte posterior e interna das pernas para aumentar o volume, melhorar o contorno ou corrigir assimetrias musculares.",
    },
    {
      question: "Quais são as principais indicações do procedimento?",
      answer:
        "É indicada para fatores estéticos e genéticos (panturrilhas finas que não desenvolvem com treino) e para correção de assimetrias e sequelas causadas por traumas, acidentes, pé torto congênito ou poliomielite.",
    },
    {
      question: "Onde fica posicionada a cicatriz?",
      answer:
        "A incisão mede cerca de 3 a 4 cm e fica posicionada na dobra natural atrás do joelho (fossa poplítea), tornando a cicatriz bastante discreta e imperceptível no dia a dia.",
    },
    {
      question: "O músculo da perna é cortado para colocar o implante?",
      answer:
        "Não. A prótese de silicone é posicionada abaixo da fáscia (capa que recobre o músculo gastrocnêmio), preservando integralmente o músculo. Quando necessário, pode-se associar lipoenxertia.",
    },
    {
      question: "Como é o pós-operatório e quando posso voltar a treinar?",
      answer:
        "Nas primeiras semanas recomenda-se pernas elevadas, meias elásticas e caminhadas leves, evitando escadas, salto alto e direção por 2 a 4 semanas. Exercícios leves são liberados após 30 dias e treinos de perna intensos após 2 meses. O resultado definitivo surge após 6 meses.",
    },
  ],
  seo: {
    title: "Prótese de Panturrilha em Blumenau/SC | Implante de Silicone · Dr. Claudio Eduardo",
    description:
      "Cirurgia de prótese de panturrilha em Blumenau com o Dr. Claudio Eduardo (CRM 14.706-SC / RQE 23.737). Implantes de silicone para contorno das pernas e correção de assimetrias.",
  },
};
