export const historiaPage = {
  hero: {
    eyebrow: "Minha história",
    title: "Uma trajetória construída com ciência, técnica e propósito.",
    text: "Da formação médica no Rio de Janeiro à especialização nos principais centros de São Paulo, cada etapa ampliou a forma de compreender e cuidar de cada paciente.",
  },
  metrics: [
    { value: "1996", label: "ano de formação em Medicina" },
    { value: "12 anos", label: "entre graduação e pós-graduações" },
    { value: "3 áreas", label: "de formação cirúrgica" },
  ],
  formation: [
    {
      number: "01",
      title: "Medicina",
      place: "Universidade Severino Sombra · Vassouras/RJ",
      period: "Concluída em 1996",
      text: "O início de uma formação médica pautada por estudo contínuo, anatomia e técnica cirúrgica.",
    },
    {
      number: "02",
      title: "Cirurgia Geral",
      place: "Hospital do Servidor Público Municipal · São Paulo/SP",
      period: "Residência · 1997—1998",
      text: "Dois anos dedicados à base cirúrgica e ao cuidado de pacientes em ambiente hospitalar.",
    },
    {
      number: "03",
      title: "Cirurgia Plástica",
      place: "Hospital do Estado de São Paulo Brigadeiro",
      period: "Residência · 1999—2001",
      text: "Três anos de especialização em cirurgia estética e reparadora, com atuação como representante dos residentes.",
    },
    {
      number: "04",
      title: "Crânio-Maxilo-Facial",
      place: "Hospital das Clínicas · Universidade de São Paulo",
      period: "Especialização",
      text: "Aprofundamento no tratamento cirúrgico das estruturas da face e de deformidades craniofaciais.",
    },
  ],
  timeline: [
    {
      year: "1991—1994",
      title: "A docência começa ainda na graduação",
      text: "Monitorias em Anatomia, Bioquímica, Anatomia Patológica e Técnica Cirúrgica aproximaram ensino e prática desde os primeiros anos da formação.",
    },
    {
      year: "1996",
      title: "Graduação e mudança para São Paulo",
      text: "Após concluir Medicina em Vassouras, seguiu para São Paulo em busca de qualificação e permaneceu na cidade ao longo de dez anos.",
    },
    {
      year: "1997—2001",
      title: "Duas residências, uma base sólida",
      text: "A residência em Cirurgia Geral foi seguida pela formação específica em Cirurgia Plástica no Hospital Brigadeiro.",
    },
    {
      year: "1999—2007",
      title: "Experiência hospitalar em Mauá",
      text: "Atuação como cirurgião geral no pronto-socorro do Hospital de Clínicas Radamés Nardini e, mais tarde, também como cirurgião plástico.",
    },
    {
      year: "2005—2008",
      title: "Cirurgia craniofacial e reconstrução",
      text: "Responsável pelo tratamento de deformidades craniofaciais e fissuras labiopalatinas no Hospital Universitário da Universidade Severino Sombra.",
    },
    {
      year: "Hoje",
      title: "Cuidado especializado em Blumenau",
      text: "Atendimento em consultório privado e atuação nos hospitais da região, unindo cirurgia estética, reparadora e procedimentos do segmento genital.",
    },
  ],
  practice: [
    {
      title: "Cirurgia estética e reparadora",
      text: "Planejamento individual, indicação responsável e atenção à anatomia de cada paciente.",
    },
    {
      title: "Cirurgia genital",
      text: "Experiência dedicada a procedimentos íntimos, aumento peniano e cirurgias de afirmação de gênero.",
    },
    {
      title: "Atuação hospitalar",
      text: "Experiência em pronto-socorro, cirurgia plástica e reconstrução craniofacial em diferentes instituições.",
    },
  ],
  credentials: [
    "CRM 14.706-SC",
    "RQE 23.737",
    "Membro da Sociedade Brasileira de Cirurgia Plástica",
    "Especialista em Cirurgia Plástica pela Associação Médica Brasileira",
    "Médico cooperado Unimed Blumenau",
  ],
} as const;

export const curriculumSections = [
  {
    id: "formacao",
    label: "Formação",
    eyebrow: "Formação acadêmica",
    title: "Uma base cirúrgica construída em grandes centros.",
    description:
      "Da graduação às especializações, uma formação multidisciplinar voltada à cirurgia estética, reparadora e craniofacial.",
    icon: "graduation",
    credentials: [
      { label: "Registro profissional", value: "CRM 14.706-SC" },
      { label: "Qualificação em Cirurgia Plástica", value: "RQE 23.737" },
    ],
    items: [
      {
        title: "Graduação em Medicina",
        text: "Universidade Severino Sombra · Vassouras/RJ",
        meta: "Concluída em 1996",
      },
      {
        title: "Especialização em Cirurgia Geral",
        text: "Hospital do Servidor Público Municipal de São Paulo",
        meta: "São Paulo/SP",
      },
      {
        title: "Especialização em Cirurgia Plástica",
        text: "Hospital do Estado de São Paulo Brigadeiro",
        meta: "São Paulo/SP",
      },
      {
        title: "Especialista em Cirurgia Plástica",
        text: "Sociedade Brasileira de Cirurgia Plástica",
        meta: "Título de especialista",
      },
      {
        title: "Especialização em Cirurgia Crânio-Maxilo-Facial",
        text: "Hospital das Clínicas da Universidade de São Paulo",
        meta: "Universidade de São Paulo · USP",
      },
      {
        title: "Membro da Sociedade Brasileira de Cirurgia Plástica",
        text: "Participação ativa na principal sociedade da especialidade no país.",
        meta: "SBCP",
      },
    ],
  },
  {
    id: "atividades-medicas",
    label: "Atuação médica",
    eyebrow: "Atividades médicas",
    title: "Experiência em cirurgia, urgência e reconstrução.",
    description:
      "Uma trajetória desenvolvida entre pronto-socorro, cirurgia plástica, reconstrução craniofacial e prática clínica privada.",
    icon: "stethoscope",
    items: [
      {
        title: "Cirurgião geral · Pronto-socorro",
        text: "Hospital de Clínicas Radamés Nardini · Mauá/SP",
        meta: "Maio de 1999 a junho de 2007",
      },
      {
        title: "Cirurgião plástico",
        text: "Hospital de Clínicas Radamés Nardini · Mauá/SP",
        meta: "Dezembro de 2006 a junho de 2007",
      },
      {
        title: "Cirurgião plástico e crânio-maxilo-facial",
        text: "Responsável pelo tratamento de deformidades craniofaciais e fissuras labiopalatinas no Hospital Universitário da Universidade Severino Sombra · Vassouras/RJ.",
        meta: "Maio de 2005 a maio de 2008",
      },
      {
        title: "Consultório privado de Cirurgia Plástica",
        text: "Atendimento médico individualizado no município de Blumenau, Santa Catarina.",
        meta: "Blumenau/SC",
      },
      {
        title: "Médico cooperado Unimed Blumenau",
        text: "Atuação pelo convênio na especialidade de Cirurgia Plástica.",
        meta: "UNIMED · Blumenau",
      },
    ],
  },
  {
    id: "sociedades",
    label: "Sociedades",
    eyebrow: "Associações e sociedades médicas",
    title: "Participação e representação profissional.",
    description:
      "Atuação representativa durante a residência e participação continuada na Sociedade Brasileira de Cirurgia Plástica.",
    icon: "users",
    items: [
      {
        title: "Representante dos residentes",
        text: "Hospital do Estado de São Paulo Brigadeiro",
        meta: "Anos de 2000 e 2001",
      },
      {
        title: "Membro da Sociedade Brasileira de Cirurgia Plástica",
        text: "Vínculo profissional com a sociedade médica da especialidade.",
        meta: "SBCP",
      },
    ],
  },
  {
    id: "monitorias",
    label: "Monitorias",
    eyebrow: "Atividades didáticas",
    title: "O ensino como parte da formação médica.",
    description:
      "Atividades acadêmicas que aprofundaram o conhecimento em anatomia, bioquímica, patologia e técnica cirúrgica.",
    icon: "book",
    items: [
      {
        title: "Estagiário · Anatomia I e II",
        text: "Disciplina de Anatomia I e II",
        meta: "Julho de 1991 a dezembro de 1992",
      },
      {
        title: "Monitor concursado e remunerado · Bioquímica",
        text: "Disciplina de Bioquímica",
        meta: "Setembro de 1991 a novembro de 1992",
      },
      {
        title: "Monitor concursado e remunerado · Anatomia Patológica",
        text: "Disciplina de Anatomia Patológica",
        meta: "Fevereiro de 1993 a junho de 1993",
      },
      {
        title: "Monitor concursado e remunerado · Técnica Cirúrgica",
        text: "Disciplina de Técnica Cirúrgica",
        meta: "Agosto de 1993 a junho de 1994",
      },
    ],
  },
  {
    id: "concursos",
    label: "Concursos",
    eyebrow: "Concursos aprovados",
    title: "Aprovações que abriram o caminho para as residências.",
    description:
      "Processos seletivos em Cirurgia Geral e Cirurgia Plástica realizados no estado de São Paulo.",
    icon: "trophy",
    items: [
      {
        title: "Residência Médica em Cirurgia Geral · FUNDAP-SP",
        text: "Complexo Hospitalar do Mandaqui",
        meta: "1996 · Classificado e convocado · Início em 1997",
      },
      {
        title: "Residência Médica em Cirurgia Geral",
        text: "Hospital do Servidor Público Estadual de São Paulo",
        meta: "1996 · Classificado, não convocado",
      },
      {
        title: "Residência Médica em Cirurgia Geral",
        text: "Hospital do Servidor Público Municipal de São Paulo",
        meta: "1996 · Classificado e convocado · Início em 1997",
      },
      {
        title: "Residência Médica em Cirurgia Plástica",
        text: "Hospital do Estado de São Paulo Brigadeiro",
        meta: "1998 · Classificado e convocado · Início em 1999",
      },
    ],
  },
  {
    id: "residencias",
    label: "Residências",
    eyebrow: "Residências médicas",
    title: "Cinco anos de formação cirúrgica intensiva.",
    description:
      "Residências sequenciais em Cirurgia Geral e Cirurgia Plástica, realizadas em instituições públicas de São Paulo.",
    icon: "hospital",
    items: [
      {
        title: "Residência em Cirurgia Geral",
        text: "Hospital do Servidor Público Municipal · São Paulo/SP",
        meta: "1997—1998 · 2 anos",
      },
      {
        title: "Residência em Cirurgia Plástica",
        text: "Hospital do Estado de São Paulo Brigadeiro · São Paulo/SP",
        meta: "1999—2001 · 3 anos",
      },
    ],
  },
] as const;
