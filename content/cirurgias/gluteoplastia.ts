import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_gluteoplastia.jpg",
  alt: "Imagem ilustrativa para gluteoplastia",
  width: 1200,
  height: 800,
};

export const gluteoplastia: CirurgiaContent = {
  slug: "gluteoplastia",
  category: "Cirurgia estética",
  title: "Gluteoplastia",
  subtitle:
    "Cirurgia para melhorar projeção e contorno da região glútea, com escolha individualizada de técnica e implantes.",
  heroImage: procedureImage,
  benefits: [
    "Planejamento de acordo com biótipo e proporções corporais",
    "Escolha individualizada do implante e da técnica",
    "Orientações rigorosas para uma recuperação segura",
  ],
  overview: {
    heading: "Projeção glútea com técnica e proporção",
    paragraphs: [
      "A gluteoplastia com implantes de silicone é indicada para pessoas que buscam melhorar a projeção e o contorno da região glútea. A escolha do implante e da técnica considera biótipo, tecidos locais e expectativa de resultado.",
      "A cirurgia pode ser associada a procedimentos complementares, como lipoaspiração de áreas próximas, quando isso faz parte de um planejamento seguro e proporcional.",
      "Na consulta, são discutidos os cuidados específicos da recuperação, incluindo posições para dormir, restrição temporária para sentar e uso de malha compressiva.",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "avaliacao",
      heading: "Planejamento do contorno corporal",
      paragraphs: [
        "O volume e o formato do implante são definidos a partir das proporções corporais, qualidade dos tecidos e objetivo de projeção. Não há um tamanho único adequado para todos os casos.",
        "A avaliação também verifica a possibilidade de associar outras técnicas e explica as limitações relacionadas à anatomia de cada paciente.",
      ],
      bullets: [
        "Avaliação de biótipo e anatomia glútea",
        "Escolha individualizada de volume e perfil do implante",
        "Discussão de procedimentos complementares quando indicados",
      ],
      image: { ...procedureImage, alt: "Avaliação para planejamento de gluteoplastia" },
    },
    {
      id: "cirurgia",
      heading: "Procedimento hospitalar",
      paragraphs: [
        "Os implantes são posicionados em plano definido pelo cirurgião conforme a avaliação individual. A cirurgia é realizada em ambiente hospitalar, com anestesia e internação planejadas para cada caso.",
        "Antes da cirurgia, a equipe explica a localização das incisões, os cuidados imediatos e o que esperar dos primeiros dias de recuperação.",
      ],
      image: { src: "/brand/clinic/treatment-room.jpg", alt: "Ambiente clínico para preparo pré-operatório", width: 1200, height: 800 },
    },
    {
      id: "recuperacao",
      heading: "Cuidados no pós-operatório",
      paragraphs: [
        "A recuperação exige atenção especial às posições para dormir e sentar, além do uso de malha compressiva pelo período definido pela equipe. Essas medidas ajudam a proteger a área operada.",
        "Também é importante informar outros profissionais de saúde sobre a presença dos implantes, pois a região glútea não deve receber injeções intramusculares sem orientação médica.",
      ],
      bullets: [
        "Orientação sobre posições e restrição temporária para sentar",
        "Uso de malha compressiva conforme recomendação",
        "Retornos programados para acompanhar cicatrização e adaptação",
      ],
      image: { src: "/brand/clinic/reception.jpg", alt: "Ambiente para acompanhamento pós-operatório", width: 1200, height: 800 },
    },
  ],
  faq: [
    {
      question: "Como é definido o tamanho do implante?",
      answer: "O volume é escolhido de acordo com biótipo, anatomia, qualidade dos tecidos e expectativa de resultado. Essa decisão é individualizada.",
    },
    {
      question: "Posso sentar logo após a cirurgia?",
      answer: "Há restrições temporárias importantes relacionadas a sentar e dormir. A equipe orienta posições e prazos seguros para cada fase da recuperação.",
    },
    {
      question: "Pode haver associação com lipoaspiração?",
      answer: "Em alguns casos, procedimentos complementares podem ser considerados. A indicação depende da avaliação clínica e do planejamento de segurança.",
    },
    {
      question: "Por que devo avisar sobre a prótese em atendimentos futuros?",
      answer: "A região glútea exige cuidado especial para evitar procedimentos inadequados sobre os implantes. Informe sempre os profissionais que acompanham sua saúde.",
    },
  ],
  seo: {
    title: "Gluteoplastia | Dr. Claudio Eduardo",
    description: "Informações sobre gluteoplastia com implantes, planejamento e recuperação em Blumenau/SC.",
  },
};
