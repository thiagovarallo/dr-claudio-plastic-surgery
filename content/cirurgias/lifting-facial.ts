import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_lifting_facial.jpg",
  alt: "Imagem ilustrativa para cirurgia de lifting facial",
  width: 1024,
  height: 682,
};

export const liftingFacial: CirurgiaContent = {
  slug: "lifting-facial",
  category: "Cirurgia estética",
  title: "Lifting Facial",
  subtitle:
    "O lifting facial é uma cirurgia plástica que reposiciona músculos e tecidos profundos do rosto para reduzir flacidez, rugas e redefinir o contorno facial, proporcionando rejuvenescimento natural.",
  heroImage: procedureImage,
  benefits: [
    "Reposicionamento de músculos e tecidos profundos da face",
    "Redução de flacidez, rugas profundas e papada",
    "Rejuvenescimento natural e redefinição do contorno facial",
  ],
  overview: {
    heading: "Firmeza, contorno e rejuvenescimento natural",
    paragraphs: [
      "O lifting facial é uma cirurgia plástica que reposiciona músculos e tecidos profundos do rosto para reduzir flacidez, rugas e redefinir o contorno facial, proporcionando rejuvenescimento natural.",
      "A cirurgia é indicada para rugas profundas, flacidez no rosto e pescoço, papada, queda das bochechas e linhas de expressão marcadas.",
      "Ela corrige não só a pele, mas também estruturas profundas como músculos e gordura, devolvendo firmeza e contorno facial. O envelhecimento continua, mas de forma mais lenta e harmoniosa.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "procedimento",
      heading: "Como é realizada a cirurgia e incisões",
      paragraphs: [
        "Realizada em ambiente hospitalar, com anestesia geral. A cirurgia tem duração média ao redor de 5 horas e internação de 1 dia.",
        "As incisões geralmente ficam na linha do cabelo e ao redor das orelhas, para minimizar cicatrizes.",
      ],
      bullets: [
        "Realizada em ambiente hospitalar com anestesia geral",
        "Duração média ao redor de 5 horas e internação de 1 dia",
        "Incisões na linha do cabelo e ao redor das orelhas para minimizar cicatrizes",
      ],
      image: procedureImage,
    },
    {
      id: "associacoes",
      heading: "Procedimentos que podem ser associados",
      paragraphs: [
        "Conforme a avaliação anatômica e os objetivos de rejuvenescimento facial, o lifting facial poderá ser associado a elevação de supercílios, blefaroplastia, lip lift, lipoaspiração, enxerto de gordura e laser de CO2.",
        "O planejamento integrado permite tratar diferentes terços da face e a qualidade da pele de maneira proporcional e segura.",
      ],
      bullets: [
        "Elevação de supercílios e blefaroplastia",
        "Lip lift e lipoaspiração facial/cervical",
        "Enxerto de gordura para reposição de volume",
        "Laser de CO2 para estímulo e qualidade da pele",
      ],
      image: { src: "/brand/clinic/treatment-room.jpg", alt: "Ambiente clínico para planejamento cirúrgico", width: 1200, height: 800 },
    },
    {
      id: "recuperacao",
      heading: "Pós-operatório e evolução dos resultados",
      paragraphs: [
        "Inchaço e hematomas nas primeiras semanas são esperados. Os pontos são geralmente retirados após 10 dias.",
        "O resultado inicial aparece em 3 semanas, e o resultado final ao redor de 6 meses. O envelhecimento continua, mas de forma mais lenta e harmoniosa.",
      ],
      bullets: [
        "Inchaço e hematomas esperados nas primeiras semanas",
        "Retirada dos pontos geralmente após 10 dias",
        "Resultado inicial em 3 semanas e resultado final ao redor de 6 meses",
        "Envelhecimento subsequente de forma mais lenta e harmoniosa",
      ],
      image: { src: "/brand/clinic/reception.jpg", alt: "Ambiente para retornos pós-operatórios", width: 1200, height: 800 },
    },
  ],
  faq: [
    {
      question: "Para quem o lifting facial é indicado?",
      answer:
        "A cirurgia é indicada para rugas profundas, flacidez no rosto e pescoço, papada, queda das bochechas e linhas de expressão marcadas, corrigindo não só a pele, mas também estruturas profundas como músculos e gordura.",
    },
    {
      question: "Como ficam as cicatrizes e quanto tempo dura a cirurgia?",
      answer:
        "As incisões geralmente ficam na linha do cabelo e ao redor das orelhas, para minimizar cicatrizes. A cirurgia é realizada em ambiente hospitalar, com anestesia geral, duração média ao redor de 5 horas e internação de 1 dia.",
    },
    {
      question: "Quais procedimentos podem ser associados ao lifting facial?",
      answer:
        "Poderá ser associado a elevação de supercílios, blefaroplastia, lip lift, lipoaspiração, enxerto de gordura e laser de CO2.",
    },
    {
      question: "Quando os pontos são retirados e quando aparece o resultado?",
      answer:
        "Inchaço e hematomas nas primeiras semanas são esperados, e os pontos são geralmente retirados após 10 dias. O resultado inicial aparece em 3 semanas e o final ao redor de 6 meses. O envelhecimento continua, mas de forma mais lenta e harmoniosa.",
    },
  ],
  seo: {
    title: "Lifting Facial em Blumenau/SC | Dr. Claudio Eduardo",
    description:
      "Lifting facial em Blumenau/SC: reposicionamento de músculos e tecidos profundos, redução de flacidez e rejuvenescimento natural com o Dr. Claudio Eduardo.",
  },
};

