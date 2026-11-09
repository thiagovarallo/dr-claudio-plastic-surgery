export const navigation = [
  { label: "Home", href: "/#inicio" },
  { label: "Sobre", href: "/claudio-eduardo-cirurgiao-plastico" },
  { label: "Cirurgias", href: "/cirurgias" },
  { label: "Unidades", href: "/#consultorio" },
  { label: "Hospitais", href: "/#hospitais" },
  { label: "Contato", href: "/contato" },
] as const;

export const locales = [
  { code: "pt", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
] as const;

export type LocaleCode = (typeof locales)[number]["code"];

export const credibility = [
  { value: "CRM 14.706-SC", hint: "Conselho Regional de Medicina" },
  { value: "RQE 23.737", hint: "Especialista em Cirurgia Plástica" },
  { value: "SBCP", hint: "Sociedade Brasileira de Cirurgia Plástica" },
  { value: "12 anos", hint: "De formação e pós-graduações" },
] as const;

export const diferenciais = [
  {
    eyebrow: "Consultas",
    title: "Avaliação médica",
    text: "Escuta atenta, exame individual e indicação cirúrgica responsável para cada caso.",
  },
  {
    eyebrow: "Cirurgias",
    title: "Planejamento seguro",
    text: "Cada procedimento é planejado conforme anatomia, objetivos e histórico de saúde.",
  },
] as const;

export const patientJourney = [
  {
    number: "01",
    eyebrow: "Primeira conversa",
    title: "Entender o seu momento",
    text: "Na consulta, você compartilha suas expectativas, seu histórico e o que deseja compreender sobre o procedimento.",
  },
  {
    number: "02",
    eyebrow: "Avaliação médica",
    title: "Definir possibilidades",
    text: "Anatomia, objetivos e condições de saúde são avaliados para definir se há indicação e quais caminhos fazem sentido.",
  },
  {
    number: "03",
    eyebrow: "Pré e pós-operatório",
    title: "Acompanhar cada etapa",
    text: "Quando há indicação cirúrgica, o cuidado continua com orientações para o preparo, retornos e recuperação.",
  },
] as const;

export const history = {
  lead: "Uma trajetória construída com formação sólida e especialização cirúrgica.",
  text: "Formado em Medicina em 1996, especializou-se em Cirurgia Geral, Cirurgia Plástica e Cirurgia Crânio-Maxilo-Facial no Hospital das Clínicas da USP, somando 12 anos entre graduação e pós-graduações.",
  highlight:
    "12 anos dedicados à formação em cirurgia geral, plástica e crânio-maxilo-facial.",
  nodes: [
    {
      year: "1996",
      label: "Graduação em Medicina",
      place: "Universidade Severino Sombra · Vassouras/RJ",
      text: "Início de uma trajetória de 12 anos entre graduação e especializações.",
      tone: "dark",
    },
    {
      year: "1998",
      label: "Residência em Cirurgia Geral",
      place: "Formação hospitalar",
      text: "Consolidação da base cirúrgica antes da especialização em cirurgia plástica.",
      tone: "dark",
    },
    {
      year: "2001",
      label: "Residência em Cirurgia Plástica",
      place: "Hospital do Estado de São Paulo Brigadeiro",
      text: "Três anos de formação específica, com representação dos residentes em 2000 e 2001.",
      tone: "brand",
    },
    {
      year: "2004",
      label: "Crânio-Maxilo-Facial",
      place: "Hospital das Clínicas · USP",
      text: "Especialização em cirurgia crânio-maxilo-facial no principal centro de formação do país.",
      tone: "dark",
    },
    {
      year: "Hoje",
      label: "Atendimento em Blumenau",
      place: "Consultório privado e hospitais da região",
      text: "Cirurgia estética, reparadora e de afirmação de gênero em Santa Catarina.",
      tone: "dark",
    },
  ],
} as const;

export const units = [
  {
    id: "blumenau",
    city: "Blumenau",
    eyebrow: "Unidade presencial",
    mode: "presencial",
    address: "Edifício Stein Tower · R. Floriano Peixoto, 222",
    complement: "8º andar, Sala 801 · Centro, Blumenau/SC",
    email: "contato@drclaudioeduardo.com.br",
    phone: "(47) 99611-7198",
    phoneHref: "tel:+5547996117198",
    emailHref: "mailto:contato@drclaudioeduardo.com.br",
    contactLabel: "Entrar em contato",
  },
  {
    id: "telemedicina",
    city: "Telemedicina",
    eyebrow: "Unidade digital",
    mode: "online",
    address: "Consulta online com atendimento individualizado",
    complement: "Disponível para pacientes do Brasil e exterior",
    email: "contato@drclaudioeduardo.com.br",
    phone: "(47) 99611-7198",
    phoneHref: "tel:+5547996117198",
    emailHref: "mailto:contato@drclaudioeduardo.com.br",
    contactLabel: "Agendar teleconsulta",
  },
] as const;

export const unit = units[0];

export const hospitals = [
  {
    id: "unimed-blumenau",
    name: "Hospital Unimed",
    city: "Blumenau",
    address: "Rua Ingo Hering, 20",
    complement: "Centro · Blumenau/SC",
    email: "contato@drclaudioeduardo.com.br",
    emailHref: "mailto:contato@drclaudioeduardo.com.br",
    phone: "(47) 3037-8500",
    phoneHref: "tel:+554730378500",
    image: "https://www.drclaudioeduardo.com.br/uploads/conteudo/foto-hospital-unimed-blumenau.jpg",
    alt: "Fachada do Hospital Unimed Blumenau",
  },
  {
    id: "santo-antonio",
    name: "Hospital Santo Antônio",
    city: "Blumenau",
    address: "Rua Itajaí, 545",
    complement: "Vorstadt · Blumenau/SC",
    email: "contato@drclaudioeduardo.com.br",
    emailHref: "mailto:contato@drclaudioeduardo.com.br",
    phone: "(47) 3231-4000",
    phoneHref: "tel:+554732314000",
    image: "https://www.drclaudioeduardo.com.br/uploads/conteudo/foto-hospital-santo-antonio.jpg",
    alt: "Fachada do Hospital Santo Antônio em Blumenau",
  },
  {
    id: "santa-isabel",
    name: "Hospital Santa Isabel",
    city: "Blumenau",
    address: "Rua Floriano Peixoto, 300",
    complement: "Centro · Blumenau/SC",
    email: "contato@drclaudioeduardo.com.br",
    emailHref: "mailto:contato@drclaudioeduardo.com.br",
    phone: "(47) 3321-1000",
    phoneHref: "tel:+554733211000",
    image: "/brand/hospital-santa-isabel.jpg",
    alt: "Fachada do Hospital Santa Isabel em Blumenau",
  },
] as const;

export const clinicGallery = [
  {
    src: "/brand/clinic/consultorio-01.png",
    alt: "Recepção moderna da clínica em Blumenau",
  },
  {
    src: "/brand/clinic/consultorio-02.png",
    alt: "Sala de consulta médica do Dr. Claudio Eduardo",
  },
  {
    src: "/brand/clinic/consultorio-03.png",
    alt: "Recepção e sala de espera da clínica",
  },
  {
    src: "/brand/clinic/consultorio-04.png",
    alt: "Consultório com diplomas e mostruário de próteses",
  },
  {
    src: "/brand/clinic/consultorio-05.png",
    alt: "Mesa de atendimento e biblioteca médica",
  },
  {
    src: "/brand/clinic/consultorio-06.png",
    alt: "Sala de avaliação clínica e procedimentos com vista de Blumenau",
  },
  {
    src: "/brand/clinic/consultorio-07.png",
    alt: "Sala de exames e avaliação médica",
  },
  {
    src: "/brand/clinic/consultorio-08.png",
    alt: "Bancada de apoio e equipamentos clínicos",
  },
  {
    src: "/brand/clinic/consultorio-09.png",
    alt: "Estrutura da sala de atendimento médico",
  },
  {
    src: "/brand/clinic/consultorio-10.png",
    alt: "Espaço de espera e conveniência da clínica",
  },
] as const;

export const surgeries = [
  {
    title: "Aumento peniano",
    image: "/procedimentos/_destaque_penis.jpg",
    href: "/cirurgias/aumento-peniano-faloplastia",
    featured: true,
  },
  {
    title: "Cirurgia íntima feminina",
    image: "/procedimentos/_destaque_clitoris.jpg",
    href: "/cirurgias/cirurgia-intima-feminina",
    featured: true,
  },
  {
    title: "Redesignação sexual",
    image: "/procedimentos/_destaque_cirurgia_de_mudanca_de_sexo.jpg",
    href: "/cirurgias/redesignacao-sexual",
    featured: false,
  },
  {
    title: "Mastectomia masculinizadora",
    image: "/procedimentos/_destaque_mastectomia_masculinizadora.v3.jpg",
    href: "/cirurgias/mastectomia-masculinizadora",
    featured: false,
  },
  {
    title: "Prótese de mama",
    image: "/procedimentos/_destaque_protese_de_mama.jpg",
    href: "/cirurgias/protese-de-mama",
    featured: false,
  },
  {
    title: "Gluteoplastia",
    image: "/procedimentos/_destaque_gluteoplastia.jpg",
    href: "/cirurgias/gluteoplastia",
    featured: false,
  },
  {
    title: "Rinoplastia",
    image: "/procedimentos/_destaque_rinoplastia.jpg",
    href: "/cirurgias/rinoplastia",
    featured: false,
  },
  {
    title: "Lifting facial",
    image: "/procedimentos/_destaque_lifting_facial.jpg",
    href: "/cirurgias/lifting-facial",
    featured: false,
  },
  {
    title: "Lipoaspiração",
    image: "/procedimentos/_destaque_lipoaspiracao.jpg",
    href: "/cirurgias/lipoaspiracao",
    featured: false,
  },
  {
    title: "Blefaroplastia",
    image: "/procedimentos/_destaque_blefaroplastia.jpg",
    href: "/cirurgias/blefaroplastia",
    featured: false,
  },
  {
    title: "Abdominoplastia",
    image: "/procedimentos/_destaque_abdominoplastia.jpg",
    href: "/cirurgias/abdominoplastia",
    featured: false,
  },
  {
    title: "Otoplastia",
    image: "/procedimentos/_destaque_otoplastia.jpg",
    href: "/cirurgias/otoplastia",
    featured: false,
  },
  {
    title: "Corpo estranho no pênis",
    image: "/procedimentos/_destaque_corpo_estranho_penis.jpg",
    href: "/cirurgias/corpo-estranho-no-penis",
    featured: false,
  },
] as const;
