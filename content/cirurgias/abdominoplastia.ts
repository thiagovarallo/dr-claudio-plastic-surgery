import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_abdominoplastia.jpg",
  alt: "Cirurgia de abdominoplastia e contorno abdominal em Blumenau",
  width: 1024,
  height: 398,
};

export const abdominoplastia: CirurgiaContent = {
  slug: "abdominoplastia",
  category: "Cirurgia estética",
  title: "Abdominoplastia",
  subtitle:
    "A abdominoplastia (dermolipectomia abdominal) remove o excesso de pele e gordura e restaura os músculos abdominais afastados (diástase), devolvendo firmeza e harmonia ao contorno corporal.",
  heroImage: procedureImage,
  benefits: [
    "Remoção do excesso de pele e gordura localizada no abdômen",
    "Correção e sutura da musculatura abdominal afastada (diástase)",
    "Abordagens personalizadas: clássica, mini, em âncora e lipoabdominoplastia",
    "Recuperação estruturada com acompanhamento médico individualizado",
  ],
  overview: {
    heading: "Contorno corporal, firmeza e restauração da musculatura abdominal",
    paragraphs: [
      "A abdominoplastia (dermolipectomia abdominal) é uma cirurgia plástica indicada para remover o excesso de pele e gordura do abdômen, além de restaurar e costurar os músculos abdominais enfraquecidos ou afastados (diástase).",
      "É o procedimento ideal para quem sofre com flacidez na região da barriga, que geralmente ocorre após gravidezes múltiplas, envelhecimento ou grandes perdas de peso.",
      "Vale ressaltar que ela não é um tratamento para emagrecimento, mas sim uma cirurgia de contorno corporal que busca restaurar a harmonia e o tônus da silhueta.",
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
      alt: "Ambiente clínico para planejamento cirúrgico e recuperação",
      width: 1200,
      height: 800,
    },
  ],
  sections: [
    {
      id: "abordagens-cirurgicas",
      heading: "Abordagens cirúrgicas e indicações",
      paragraphs: [
        "Dependendo do grau de flacidez e acúmulo de gordura, o cirurgião pode recomendar abordagens diferentes:",
      ],
      bullets: [
        "Clássica (ou Tradicional): Indicada para flacidez moderada a grave acima e abaixo do umbigo. Envolve uma incisão transversal arciforme supra-púbica e o reposicionamento do umbigo.",
        "Miniabdominoplastia: Focada em quem tem pouca flacidez e acúmulo de pele apenas na região abaixo do umbigo (púbis). A cicatriz é menor e semelhante à de uma cesárea ampliada.",
        "Em Âncora: Comum em pacientes de cirurgia bariátrica ou pessoas que perderam muito peso. A cicatriz lembra uma âncora (horizontal e vertical), pois retira pele nos dois sentidos.",
        "Lipoabdominoplastia: É a associação da abdominoplastia tradicional com a lipoaspiração para aspirar a gordura localizada dos flancos e cintura, esculpindo melhor o corpo.",
      ],
      image: {
        src: "/brand/clinic/consultorio-01.png",
        alt: "Recepção moderna da clínica em Blumenau",
        width: 1200,
        height: 800,
      },
    },
    {
      id: "cuidados-pos-cirurgicos",
      heading: "Cuidados pós-cirúrgicos e evolução da recuperação",
      paragraphs: [
        "O sucesso do procedimento depende diretamente dos cuidados pós-cirúrgicos:",
      ],
      bullets: [
        "Período de repouso: É necessário um repouso relativo por cerca de 15 a 21 dias, caminhando com o tronco levemente curvado para frente para não tensionar os pontos.",
        "Cinta compressiva e drenos: O uso da cinta cirúrgica é obrigatório por 60 dias para reduzir o inchaço e modelar o abdômen. Drenos também costumam ser usados por 3 a 5 dias para escoar líquidos acumulados.",
        "Exercícios e Sol: O retorno à academia ocorre de forma gradual após 2 meses, com liberação médica. A exposição ao sol deve ser evitada por até 4 meses para não escurecer as cicatrizes.",
        "Resultado final: O resultado definitivo se manifesta entre 6 a 12 meses de pós operatório.",
      ],
      image: {
        src: "/brand/clinic/treatment-room.jpg",
        alt: "Ambiente clínico para acompanhamento pós-operatório seguro",
        width: 1200,
        height: 800,
      },
    },
  ],
  faq: [
    {
      question: "A abdominoplastia é indicada para perder peso?",
      answer:
        "Não. Vale ressaltar que ela não é um tratamento para emagrecimento, mas sim uma cirurgia de contorno corporal. O procedimento remove o excesso de pele e gordura localizada e reconstrói a parede muscular abdominal após gestações, oscilações de peso ou ação do tempo.",
    },
    {
      question: "Quais são as principais abordagens de abdominoplastia?",
      answer:
        "As abordagens variam conforme a anatomia: Abdominoplastia Clássica (flacidez acima e abaixo do umbigo com reposicionamento umbilical), Miniabdominoplastia (flacidez restrita à região infraumbilical com cicatriz menor), Abdominoplastia em Âncora (para grandes perdas de peso e pós-bariátrica) e Lipoabdominoplastia (associação de lipoaspiração para melhor definição da cintura e flancos).",
    },
    {
      question: "Por quanto tempo é necessário usar a cinta cirúrgica e os drenos?",
      answer:
        "O uso da cinta cirúrgica é obrigatório por 60 dias para reduzir o edema e auxiliar no contorno do abdômen. Os drenos costumam ser mantidos de 3 a 5 dias para escoar líquidos acumulados e garantir uma cicatrização segura.",
    },
    {
      question: "Quando posso retornar aos exercícios físicos e tomar sol?",
      answer:
        "O retorno à academia acontece de maneira gradual após 2 meses, sempre com liberação médica. A exposição ao sol direto deve ser evitada por até 4 meses para não escurecer as cicatrizes. O resultado definitivo se consolida entre 6 e 12 meses de pós-operatório.",
    },
  ],
  seo: {
    title: "Abdominoplastia em Blumenau | Dr. Claudio Eduardo",
    description:
      "Cirurgia de abdominoplastia em Blumenau com o Dr. Claudio Eduardo (CRM 14.706-SC / RQE 23.737). Remoção de flacidez abdominal, reparo de diástase e contorno corporal seguro.",
  },
};
