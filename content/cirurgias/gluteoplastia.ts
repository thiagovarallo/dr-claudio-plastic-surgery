import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_gluteoplastia.jpg",
  alt: "Cirurgia de gluteoplastia e prótese de glúteos em Blumenau",
  width: 1200,
  height: 800,
};

export const gluteoplastia: CirurgiaContent = {
  slug: "gluteoplastia",
  category: "Cirurgia estética",
  title: "Gluteoplastia",
  subtitle:
    "Cirurgia de prótese de silicone intramuscular para aumento e projeção dos glúteos, com incisão discreta no sulco interglúteo e contorno corporal harmônico.",
  heroImage: procedureImage,
  benefits: [
    "Próteses inclusas no interior do músculo glúteo maior para máxima naturalidade",
    "Incisão única discreta de cerca de 5 cm posicionada no sulco interglúteo",
    "Possibilidade de associação com lipoaspiração dos flancos para afinar a cintura",
    "Implantes modernos e definitivos, sem necessidade de troca programada",
  ],
  overview: {
    heading: "Projeção, definição e harmonia do contorno glúteo",
    paragraphs: [
      "O procedimento de Gluteoplastia ou próteses de glúteos vem ganhando destaque na Cirurgia Plástica. Consiste na introdução de um par de próteses de silicone, que podem ser lisas ou texturizadas, ovais (quartzo) ou redondas, possuem diversos tamanhos e são inclusas em uma loja confeccionada pelo cirurgião no interior do músculo glúteo maior.",
      "O intuito desta cirurgia é melhorar a projeção e o contorno da região glútea. A incisão é posicionada no sulco interglúteo, ao redor de 5 cm. Com esta única abordagem, incluem-se as próteses bilateralmente. São colocados drenos aspirativos.",
      "O cirurgião plástico saberá indicar o melhor tamanho em relação ao biotipo da paciente, peso, altura, diâmetro do quadril e expectativa.",
    ],
    image: {
      src: "/brand/clinic/consultorio-04.png",
      alt: "Consultório médico do Dr. Claudio Eduardo em Blumenau",
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
      id: "planejamento-e-associacoes",
      heading: "Escolha das próteses e procedimentos associados",
      paragraphs: [
        "A individualização da técnica é essencial para alcançar harmonia com a estrutura física de cada paciente:",
      ],
      bullets: [
        "Modelos de prótese: lisas ou texturizadas, ovais (quartzo) ou redondas, selecionadas conforme a anatomia individual",
        "Plano intramuscular: a inclusão no interior do músculo glúteo maior confere proteção ao implante e resultado com aspecto natural",
        "Associação com lipoaspiração: a lipoaspiração dos flancos poderá ser associada para acentuar a curvatura da cintura e valorizar a projeção glútea",
        "Durabilidade: a princípio, estes implantes não necessitarão serem substituídos, a não ser por desejo da paciente ou rompimento destas (pouco provável)",
      ],
      image: {
        src: "/brand/clinic/consultorio-05.png",
        alt: "Planejamento e análise das proporções corporais no consultório",
        width: 1200,
        height: 800,
      },
    },
    {
      id: "internacao-e-cuidados",
      heading: "Internação, cuidados pós-operatórios e restrições",
      paragraphs: [
        "A recuperação da gluteoplastia segue recomendações pontuais para assegurar estabilidade aos implantes e cicatrização adequada:",
      ],
      bullets: [
        "Internação de 1 dia com duração da cirurgia ao redor de 2 horas",
        "A anestesia pode ser peridural ou geral, a depender da avaliação anestésica",
        "Posição ao dormir: a paciente deverá dormir de bruços por 20 dias para não pressionar a área operada",
        "Malha pós-cirúrgica: utiliza-se uma malha compressiva tipo short por 2 meses contínuos",
        "Atenção com injeções: a região glútea não poderá mais receber injeções intramusculares, com o risco de perfuração das próteses",
      ],
      image: {
        src: "/brand/clinic/treatment-room.jpg",
        alt: "Ambiente clínico para acompanhamento e segurança do paciente",
        width: 1200,
        height: 800,
      },
    },
  ],
  faq: [
    {
      question: "Onde fica localizada a cicatriz da cirurgia de gluteoplastia?",
      answer:
        "A incisão é posicionada estrategicamente no sulco interglúteo, medindo ao redor de 5 cm. Com esta única abordagem discreta, incluem-se as próteses bilateralmente, ficando a cicatriz camuflada na dobra natural entre as nádegas.",
    },
    {
      question: "Como é escolhido o tipo e o tamanho ideal da prótese de glúteo?",
      answer:
        "As próteses podem ser lisas ou texturizadas, ovais (quartzo) ou redondas. O cirurgião plástico indicará o melhor tamanho e formato em relação ao biotipo da paciente, peso, altura, diâmetro do quadril e expectativa de resultado.",
    },
    {
      question: "É possível associar a gluteoplastia com lipoaspiração?",
      answer:
        "Sim. A lipoaspiração dos flancos poderá ser associada no mesmo tempo cirúrgico para retirar gordura localizada, esculpindo a cintura e proporcionando ainda maior destaque à projeção dos glúteos.",
    },
    {
      question: "Qual o tempo de internação e como deve ser a posição de dormir?",
      answer:
        "A internação é de 1 dia e a duração da cirurgia é de cerca de 2 horas (anestesia peridural ou geral). A paciente deverá dormir obrigatoriamente de bruços por 20 dias para evitar pressão sobre os implantes recém-colocados, além de utilizar malha compressiva tipo short por 2 meses.",
    },
    {
      question: "Posso tomar injeções na nádega após colocar prótese de silicone?",
      answer:
        "Não. A região glútea não poderá mais receber injeções intramusculares, sob o risco de perfuração das próteses de silicone. Medicamentos injetáveis intramusculares deverão ser aplicados em outras regiões corporais, como braços ou coxas.",
    },
    {
      question: "As próteses de glúteo precisam ser trocadas após alguns anos?",
      answer:
        "A princípio, estes implantes não necessitarão ser substituídos, a não ser por desejo futuro da paciente ou em caso de rompimento destas (situação pouco provável em decorrência da tecnologia e resistência dos implantes modernos).",
    },
  ],
  seo: {
    title: "Gluteoplastia em Blumenau/SC | Prótese de Glúteos · Dr. Claudio Eduardo",
    description:
      "Gluteoplastia com próteses de silicone em Blumenau/SC com o Dr. Claudio Eduardo (CRM 14.706-SC / RQE 23.737). Inclusão intramuscular, incisão discreta e recuperação segura.",
  },
};
