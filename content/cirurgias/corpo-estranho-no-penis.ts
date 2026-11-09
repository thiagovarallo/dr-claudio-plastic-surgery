import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_corpo_estranho_penis.jpg",
  alt: "Retirada de corpo estranho no pênis, complicações de PMMA e bioplastia peniana",
  width: 760,
  height: 550,
};

export const corpoEstranhoNoPenis: CirurgiaContent = {
  slug: "corpo-estranho-no-penis",
  category: "Cirurgia reparadora",
  title: "Corpo estranho no pênis",
  subtitle:
    "Tratamento cirúrgico de complicações decorrentes da injeção de PMMA, silicone industrial e preenchedores permanentes, visando controle tecidual, funcionalidade e reparação.",
  heroImage: procedureImage,
  benefits: [
    "Avaliação especializada para diagnóstico da infiltração e da fibrose tecidual",
    "Cirurgia reconstrutiva de alta complexidade com preservação vascular e nervosa",
    "Correção de deformidades, granulomas, nódulos e retrações causadas pelo material",
    "Atendimento com sigilo absoluto e planejamento cirúrgico em ambiente hospitalar",
  ],
  overview: {
    heading: "Riscos do PMMA, silicone e preenchedores permanentes no pênis",
    paragraphs: [
      "O uso de Polimetilmetacrilato (PMMA), silicone industrial ou qualquer outro preenchedor que não seja o ácido hialurônico para procedimentos de aumento ou preenchimento peniano (comumente chamados de bioplastia peniana) é uma prática altamente contraindicada e proibida no Brasil para fins estéticos.",
      "Desde junho de 2026, o Conselho Federal de Medicina, por meio da Resolução CFM nº 2.461/2026, proibiu explicitamente os médicos de utilizarem o PMMA como substância de preenchimento para finalidades estéticas ou reparadoras. A única exceção de uso prevista em território nacional é para o tratamento de lipodistrofia em pessoas vivendo com HIV/aids, restrito ao âmbito do SUS. Portanto, a realização de bioplastia peniana com PMMA configura infração ética e legal.",
      "O PMMA é um material plástico permanente e inabsorvível. Embora a promessa de um resultado definitivo pareça atraente, as características do pênis — um órgão vascularizado, dinâmico e que passa por constantes processos de expansão e retração — tornam o uso desse produto extremamente perigoso.",
      "Poucos médicos no Brasil possuem treinamento e experiência cirúrgica específica para a abordagem e retirada dessas substâncias, tornando a avaliação criteriosa o primeiro e mais importante passo para quem sofre com sequelas do procedimento.",
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
      src: "/brand/clinic/consultorio-03.png",
      alt: "Sala de consulta médica do Dr. Claudio Eduardo",
      width: 1200,
      height: 800,
    },
    {
      src: "/brand/clinic/consultorio-05.png",
      alt: "Ambiente clínico para planejamento e recuperação",
      width: 1200,
      height: 800,
    },
  ],
  sections: [
    {
      id: "complicacoes-graves",
      heading: "Complicações mais comuns e graves descritas na literatura médica",
      paragraphs: [
        "A reação do organismo ao produto permanente na haste peniana pode se manifestar de forma imediata ou até anos após a aplicação:",
      ],
      bullets: [
        "Formação de granulomas e nódulos: o corpo reage ao material estranho criando caroços endurecidos, irregularidades e deformidades estéticas permanentes",
        "Rejeição e necrose: em cenários graves, ocorre a morte do tecido local (necrose), o que pode exigir cirurgias reconstrutivas de alta complexidade ou enxertos de pele",
        "Disfunção erétil e tortuosidade: o material pode migrar, comprimir vasos sanguíneos ou enrijecer a fáscia peniana, impedindo ereções normais ou causando desvios dolorosos",
        "Perda de sensibilidade: a infiltração do produto ao redor das ramificações nervosas pode comprometer permanentemente a sensibilidade local",
        "Extrema dificuldade de remoção: o PMMA se infiltra nos tecidos sadios e gera uma fibrose intensa. Não existe substância capaz de dissolvê-lo",
      ],
      image: {
        src: "/brand/clinic/consultorio-07.png",
        alt: "Estrutura médica do Dr. Claudio Eduardo em Blumenau",
        width: 1200,
        height: 800,
      },
    },
    {
      id: "abordagem-cirurgica",
      heading: "Abordagem cirúrgica e o desafio da extração",
      paragraphs: [
        "A extração cirúrgica de corpos estranhos no pênis é considerada o último recurso, sendo altamente complexa. Uma intervenção inadequada pode causar sequelas piores do que o próprio preenchedor.",
        "O objetivo principal da cirurgia reparadora não é apenas estético, mas primordialmente funcional: desobstruir tecidos, diminuir a sobrecarga inflamatória, proteger a vascularização dos corpos cavernosos e preservar a integridade da haste.",
        "Portanto, jamais se submeta a procedimentos clandestinos de bioplastia com produtos permanentes. Caso já tenha realizado e apresente sintomas ou nódulos, busque atendimento médico especializado com urgência para um plano de contenção e tratamento individualizado.",
      ],
      image: {
        src: "/brand/clinic/treatment-room.jpg",
        alt: "Ambiente clínico para avaliação pré-operatória",
        width: 1200,
        height: 800,
      },
    },
  ],
  faq: [
    {
      question: "Por que o PMMA e o silicone industrial são proibidos para aumento peniano?",
      answer:
        "O Conselho Federal de Medicina (Resolução CFM nº 2.461/2026) proibiu explicitamente o PMMA para fins estéticos e reparadores privados. Por serem plásticos permanentes e inabsorvíveis em um órgão de constante dilatação, causam reações de corpo estranho gravíssimas, como necrose, granulomas e deformidades irreversíveis.",
    },
    {
      question: "Existe alguma substância ou enzima capaz de dissolver o PMMA?",
      answer:
        "Não. Diferente do ácido hialurônico (que pode ser revertido com hialuronidase), o PMMA é um polímero plástico inorgânico. Não existe substância capaz de dissolvê-lo, exigindo apenas intervenção cirúrgica direta em casos com indicação clínica.",
    },
    {
      question: "É possível retirar 100% do PMMA aplicado no pênis?",
      answer:
        "Nem sempre é possível remover 100% do produto sem comprometer tecidos sadios, nervos ou vasos sanguíneos vitais. A retirada é planejada para ressecar o máximo possível das áreas de nódulo e fibrose preservando a função erétil e a sensibilidade do paciente.",
    },
    {
      question: "Quais são as principais complicações do uso de preenchedores permanentes no pênis?",
      answer:
        "As principais complicações incluem formação de granulomas e nódulos dolorosos, infecções de repetição, necrose tecidual com perda de pele, disfunção erétil, tortuosidade peniana na ereção e perda permanente de sensibilidade.",
    },
    {
      question: "Como funciona a consulta para casos de complicações por PMMA?",
      answer:
        "A consulta envolve anamnese aprofundada, exame físico minucioso e solicitação de exames de imagem (como ultrassonografia com Doppler ou ressonância magnética) para mapear a profundidade da infiltração antes de qualquer decisão cirúrgica.",
    },
  ],
  seo: {
    title: "Corpo Estranho no Pênis e Complicações por PMMA | Dr. Claudio Eduardo",
    description:
      "Tratamento e remoção cirúrgica de corpo estranho no pênis (PMMA, silicone e bioplastia) em Blumenau/SC com o Dr. Claudio Eduardo (CRM 14.706-SC / RQE 23.737).",
  },
};
