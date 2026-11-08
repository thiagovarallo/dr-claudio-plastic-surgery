import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_cirurgia_de_mudanca_de_sexo.jpg",
  alt: "Cirurgia de redesignação sexual e afirmação de gênero em Blumenau",
  width: 1200,
  height: 800,
};

export const redesignacaoSexual: CirurgiaContent = {
  slug: "redesignacao-sexual",
  category: "Afirmação de gênero",
  title: "Redesignação sexual MTF",
  subtitle:
    "Cirurgia de afirmação de gênero realizada com técnica de inversão peniana e enxerto escrotal, estética anatômica detalhada e preservação da sensibilidade e orgasmo.",
  heroImage: procedureImage,
  benefits: [
    "Estética vulvar detalhada: neoclitóris, óstio urinário, canal vaginal, pequenos e grandes lábios",
    "Preservação da sensibilidade tátil e erógena com capacidade de orgasmo",
    "Técnica padrão de inversão peniana com enxerto de pele da bolsa escrotal",
    "Internação hospitalar segura de 4 dias sem necessidade de UTI",
  ],
  overview: {
    heading: "Evolução cirúrgica, refinamento estético e acolhimento integral",
    paragraphs: [
      "A cirurgia de redesignação sexual ou de reafirmação de gênero é realizada no Brasil há mais de 50 anos. Claro que a técnica foi aperfeiçoada ao longo do tempo e hoje conseguimos uma estética bem similar à de uma vulva, com detalhamento de todas as suas estruturas: neoclitóris, óstio urinário, canal vaginal, pequenos e grandes lábios.",
      "A técnica comumente utilizada é a da inversão peniana com enxerto de pele da bolsa escrotal. Outras técnicas existentes, tais como a intestinal (jejuno) ou peritoneal, são utilizadas somente como 2ª opção; em caso de complicações de cirurgias primárias ou em situações específicas.",
      "A sensibilidade também é preservada, podendo a paciente chegar ao orgasmo de forma plena e gratificante.",
    ],
    image: {
      src: "/brand/clinic/consultorio-02.png",
      alt: "Planejamento médico para cirurgia de afirmação de gênero em Blumenau",
      width: 1200,
      height: 800,
    },
  },
  gallery: [
    {
      src: "/brand/clinic/consultorio-04.png",
      alt: "Consultório médico do Dr. Claudio Eduardo em Blumenau",
      width: 1200,
      height: 800,
    },
    {
      src: "/brand/clinic/consultorio-06.png",
      alt: "Ambiente clínico para avaliação pré e pós-operatória",
      width: 1200,
      height: 800,
    },
  ],
  sections: [
    {
      id: "criterios-e-tecnicas",
      heading: "Critérios de indicação e técnicas cirúrgicas",
      paragraphs: [
        "A realização da cirurgia obedece a critérios rigorosos de segurança e planejamento multidisciplinar:",
      ],
      bullets: [
        "Idade mínima: esta cirurgia só é possível de ser realizada a partir dos 21 anos completos.",
        "Acompanhamento prévio de pelo menos 1 ano por psicólogo, psiquiatra e endocrinologista.",
        "Técnica padrão-ouro: inversão peniana associada a enxerto de pele da bolsa escrotal para garantir profundidade adequada do canal vaginal.",
        "Técnicas secundárias: abordagens intestinais (jejuno) ou peritoneais são utilizadas somente como 2ª opção, em situações específicas ou revisão de cirurgias primárias.",
      ],
      image: {
        src: "/brand/clinic/consultorio-05.png",
        alt: "Planejamento individualizado e consulta médica",
        width: 1200,
        height: 800,
      },
    },
    {
      id: "procedimento-e-internacao",
      heading: "Ambiente hospitalar, duração e logística de estadia",
      paragraphs: [
        "Todo o procedimento é conduzido com máxima segurança, privacidade e acolhimento hospitalar:",
      ],
      bullets: [
        "Realizada em ambiente hospitalar de alto padrão, sob anestesia geral, com duração ao redor de 6 horas.",
        "Não necessita de UTI no pós-operatório.",
        "A internação hospitalar é de 4 dias.",
        "A paciente necessitará permanecer em nossa cidade por mais 11 dias após a alta, perfazendo o total de 15 dias a contar da data da cirurgia.",
      ],
      image: {
        src: "/brand/clinic/treatment-room.jpg",
        alt: "Estrutura hospitalar e clínica para o procedimento",
        width: 1200,
        height: 800,
      },
    },
    {
      id: "cuidados-dilatacoes-recuperacao",
      heading: "Pós-operatório, dilatações e retorno às atividades",
      paragraphs: [
        "Os cuidados imediatos e as orientações para manutenção do canal neovaginal são detalhados minuciosamente pela equipe:",
      ],
      bullets: [
        "A paciente fica com sonda vesical, drenos e tampão no canal da neo-vagina por 7 a 8 dias.",
        "Após isto, iniciamos as dilatações vaginais, que deverão acontecer ao longo da vida para manter a amplitude e a profundidade vaginal.",
        "O retorno às atividades profissionais poderá iniciar-se após 15 dias (a depender da ocupação exercida).",
        "Quanto a atividades sexuais com penetração, aguarda-se 90 dias para a completa cicatrização e segurança dos tecidos.",
      ],
      image: {
        src: "/brand/clinic/consultorio-01.png",
        alt: "Recepção da clínica Dr. Claudio Eduardo em Blumenau",
        width: 1200,
        height: 800,
      },
    },
  ],
  faq: [
    {
      question: "Qual a idade mínima e os pré-requisitos para a cirurgia de redesignação sexual?",
      answer:
        "Esta cirurgia só é possível de ser realizada a partir dos 21 anos, com acompanhamento prévio de pelo menos 1 ano comprovado por psicólogo, psiquiatra e endocrinologista.",
    },
    {
      question: "Como funciona a estética e a sensibilidade com a técnica de inversão peniana?",
      answer:
        "A cirurgia atinge uma estética muito próxima à da vulva, com detalhamento de neoclitóris, óstio urinário, canal vaginal, pequenos e grandes lábios. A sensibilidade também é preservada, podendo a paciente chegar ao orgasmo.",
    },
    {
      question: "Quanto tempo dura a cirurgia e qual é o tempo de internação?",
      answer:
        "Realizada em ambiente hospitalar, sob anestesia geral, a cirurgia tem duração ao redor de 6 horas. Não necessita de UTI no pós-operatório. A internação hospitalar é de 4 dias e a paciente necessitará permanecer em nossa cidade (Blumenau/SC) por mais 11 dias, perfazendo o total de 15 dias a contar da data da cirurgia.",
    },
    {
      question: "Por quanto tempo fico com sonda e como funcionam as dilatações vaginais?",
      answer:
        "A paciente fica com sonda vesical, drenos e tampão no canal da neo-vagina por 7 a 8 dias. Após este período e com a retirada do tampão, iniciam-se as dilatações vaginais com moldes anatômicos, que deverão acontecer ao longo da vida para preservar a profundidade e elasticidade do canal.",
    },
    {
      question: "Quando posso retornar ao trabalho e às atividades sexuais?",
      answer:
        "O retorno às atividades profissionais pode iniciar-se após 15 dias (a depender da exigência física da ocupação). Quanto às atividades sexuais, aguarda-se 90 dias para cicatrização completa.",
    },
  ],
  seo: {
    title: "Redesignação Sexual MTF em Blumenau/SC | Dr. Claudio Eduardo",
    description:
      "Cirurgia de redesignação sexual MTF (afirmação de gênero) em Blumenau/SC com o Dr. Claudio Eduardo. Inversão peniana, preservação da sensibilidade e acompanhamento especializado.",
  },
};
