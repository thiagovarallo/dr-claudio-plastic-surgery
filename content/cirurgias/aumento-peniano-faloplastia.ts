import type { CirurgiaContent } from "./types";

const procedureImage = {
  src: "/procedimentos/_destaque_penis.jpg",
  alt: "Imagem ilustrativa para aumento peniano (faloplastia)",
  width: 1200,
  height: 800,
};

export const aumentoPenianoFaloplastia: CirurgiaContent = {
  slug: "aumento-peniano-faloplastia",
  category: "Cirurgia íntima masculina",
  title: "Aumento peniano (faloplastia)",
  subtitle:
    "Apresentamos aqui a cirurgia de aumento peniano, conhecida também como Faloplastia.",
  heroImage: procedureImage,
  benefits: [
    "Consulta individual, presencial em Blumenau/SC ou via Telemedicina",
    "Alongamento de 1,5 a 5 cm e engrossamento ao redor de 30%",
    "Procedimento hospitalar sigiloso com alta no dia seguinte",
  ],
  overview: {
    heading: "Como funciona a cirurgia de Faloplastia",
    paragraphs: [
      "Apresentamos aqui a cirurgia de aumento peniano, conhecida também como Faloplastia.",
      "O procedimento consiste na lipoaspiração da região pubiana e/ou abdome com coleta de tecido gorduroso, liberação do ligamento suspensor do pênis e enxerto de gordura (lipoenxertia) no corpo peniano. Tem como resultado o alongamento e o engrossamento do pênis, tanto no estado flácido (ganho maior) quanto no estado ereto (ganho menor). Este ganho poderá ser entre 1,5 a 5 cm de comprimento, além do engrossamento ao redor de 30%.",
      "Deveremos associar a cirurgia de Postectomia neste tempo principal. A escrotoplastia poderá ser associada em casos específicos. O único segmento que não é alterado é a glande do pênis (impossibilidade técnica).",
    ],
    image: procedureImage,
  },
  gallery: [],
  sections: [
    {
      id: "indicacao",
      heading: "Indicação, função e pré-requisitos",
      paragraphs: [
        "Esta cirurgia está indicada para pacientes que estão desconfortáveis com o tamanho do pênis, podendo ser nos casos de micro pênis como para pênis considerados de tamanho normal. Em torno de 90% dos homens operados têm o pênis de tamanho normal, ou seja, têm o intuito de melhorar a autoestima e confiança!",
        "A cirurgia não altera a potência sexual, função, sensibilidade ou o tempo ejaculatório.",
        "A idade mínima para se submeter à cirurgia é de 18 anos. Pacientes portadores de hérnia inguinal deverão ser operados antes da realização da Faloplastia.",
      ],
      bullets: [
        "Preservação da potência sexual, função, sensibilidade e tempo ejaculatório",
        "Idade mínima de 18 anos para realização do procedimento",
        "Tratamento prévio de hérnia inguinal quando presente",
        "Associação com Postectomia no tempo principal (e escrotoplastia em casos específicos)",
      ],
      image: { ...procedureImage, alt: "Consulta médica para planejamento de cirurgia íntima masculina" },
    },
    {
      id: "segundo-tempo",
      heading: "Reabsorção de gordura e segundo tempo cirúrgico",
      paragraphs: [
        "Poderá haver a necessidade de um segundo tempo cirúrgico, a partir de 06 meses da cirurgia primária, para uma nova sessão de lipoenxertia (engrossamento), haja vista que a média de reabsorção de gordura é em torno de 30%; porém isso varia de paciente para paciente.",
        "O percentual de pacientes que necessitam de um segundo tempo cirúrgico (engrossamento) gira em torno de 10% a 15% dos casos.",
      ],
      bullets: [
        "Média de reabsorção de gordura em torno de 30% (variável conforme cada organismo)",
        "Possibilidade de nova sessão de lipoenxertia a partir de 06 meses da cirurgia primária",
        "Apenas 10% a 15% dos casos necessitam de um segundo tempo cirúrgico",
      ],
    },
    {
      id: "hospital-e-sigilo",
      heading: "Estrutura hospitalar, anestesia e sigilo",
      paragraphs: [
        "O procedimento é realizado na cidade de Blumenau/SC. Internação em Hospital de alto padrão, equipe médica composta por cirurgião plástico, anestesiologista e auxiliares, duração da cirurgia em torno de 140 minutos e a alta hospitalar no dia seguinte.",
        "A anestesia será a geral, a depender da avaliação do médico anestesiologista. Tomamos certos cuidados para que a cirurgia transcorra do modo mais sigiloso possível!",
        "O procedimento é de caráter particular. Não aceitamos convênios médicos.",
      ],
      bullets: [
        "Internação em Hospital de alto padrão em Blumenau/SC",
        "Duração em torno de 140 minutos e alta hospitalar no dia seguinte",
        "Anestesia geral, conforme avaliação do médico anestesiologista",
        "Atendimento particular com rigoroso cuidado de sigilo e discrição",
      ],
      image: { src: "/brand/clinic/consultorio-02.png", alt: "Ambiente clínico preparado para atendimento individual", width: 1200, height: 1600 },
    },
    {
      id: "consulta-e-logistica",
      heading: "Opções de consulta, valores e logística em Blumenau/SC",
      paragraphs: [
        "Você terá 02 opções: agendar uma primeira consulta presencial conosco na cidade de Blumenau/SC ou então uma consulta via Telemedicina, de qualquer lugar onde você estiver.",
        "OBS: O valor da cirurgia poderá variar de acordo com o caso, portanto somente poderemos repassar o mesmo após avaliação realizada pelo médico. O Conselho Federal de Medicina (CFM) proíbe o médico e sua equipe de informarem valores sem prévia avaliação do paciente, sob pena de sanção disciplinar!",
        "A cidade de Blumenau/SC se distancia 50 km do Aeroporto Internacional de Navegantes/SC, onde possui voos diários para São Paulo, Rio de Janeiro e conexões. Existe um translado em ônibus executivo do aeroporto para Blumenau e vice-versa, pareados com as chegadas e partidas dos voos.",
        "Sugerimos hotéis de categoria superior para acomodação, bem próximo ao hospital. Necessitará de 04 diárias na cidade, podendo retornar ao domicílio após este prazo.",
      ],
      bullets: [
        "Primeira consulta presencial em Blumenau/SC ou online via Telemedicina",
        "Valores informados exclusivamente após avaliação médica (norma do CFM)",
        "A 50 km do Aeroporto Internacional de Navegantes/SC com translado executivo",
        "Sugestão de hotéis próximos ao hospital e permanência de 04 diárias na cidade",
      ],
      image: { src: "/brand/clinic/consultorio-01.png", alt: "Recepção da clínica em Blumenau/SC", width: 1200, height: 1600 },
    },
  ],
  faq: [
    {
      question: "A cirurgia altera a potência sexual, sensibilidade ou ejaculação?",
      answer:
        "Não. A cirurgia não altera a potência sexual, função, sensibilidade ou o tempo ejaculatório.",
    },
    {
      question: "Qual o ganho esperado e o que não é alterado?",
      answer:
        "O procedimento resulta no alongamento (entre 1,5 a 5 cm) e no engrossamento (ao redor de 30%) do pênis, tanto no estado flácido (ganho maior) quanto no estado ereto (ganho menor). O único segmento que não é alterado é a glande do pênis, por impossibilidade técnica.",
    },
    {
      question: "Pode ser necessário um segundo tempo cirúrgico?",
      answer:
        "Sim. Como a média de reabsorção de gordura gira em torno de 30% (variando de paciente para paciente), cerca de 10% a 15% dos casos podem necessitar de uma nova sessão de lipoenxertia (engrossamento) a partir de 06 meses da cirurgia primária.",
    },
    {
      question: "Como funcionam a consulta, os valores e a estadia em Blumenau/SC?",
      answer:
        "Você pode agendar uma consulta presencial em Blumenau/SC ou via Telemedicina. O procedimento é particular (não aceitamos convênios) e os valores são informados somente após avaliação médica, em respeito às normas do CFM. Para pacientes de fora, Blumenau fica a 50 km do Aeroporto de Navegantes/SC e são necessárias 04 diárias na cidade.",
    },
  ],
  seo: {
    title: "Aumento Peniano (Faloplastia) em Blumenau/SC | Dr. Claudio Eduardo",
    description:
      "Cirurgia de aumento peniano (Faloplastia) em Blumenau/SC com o Dr. Claudio Eduardo: lipoenxertia, liberação do ligamento suspensor, indicações, internação e consulta presencial ou por telemedicina.",
  },
};
