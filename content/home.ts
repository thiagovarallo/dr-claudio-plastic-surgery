import { WHATSAPP_HREF } from "./site";

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
    email: "clinicadrclaudioeduardo@gmail.com",
    phone: "(47) 99611-7198",
    phoneHref: "tel:+5547996117198",
    emailHref: "mailto:clinicadrclaudioeduardo@gmail.com",
    contactLabel: "Entrar em contato",
  },
  {
    id: "telemedicina",
    city: "Telemedicina",
    eyebrow: "Unidade digital",
    mode: "online",
    address: "Consulta online com atendimento individualizado",
    complement: "Disponível para pacientes do Brasil e exterior",
    email: "clinicadrclaudioeduardo@gmail.com",
    phone: "(47) 99611-7198",
    phoneHref: "tel:+5547996117198",
    emailHref: "mailto:clinicadrclaudioeduardo@gmail.com",
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
] as const;

export const clinicGallery = [
  {
    src: "/brand/clinic/reception.jpg",
    alt: "Recepção moderna da clínica em Blumenau",
  },
  {
    src: "/brand/clinic/treatment-room.jpg",
    alt: "Sala de atendimento moderna e equipada",
  },
  {
    src: "/brand/official/banner-principal-03.jpg",
    alt: "Ambiente clínico do consultório",
  },
  {
    src: "/brand/official/banner-principal-01.jpg",
    alt: "Espaço de consulta do Dr. Claudio Eduardo",
  },
] as const;

export const surgeries = [
  {
    title: "Aumento peniano",
    text: "Procedimentos voltados ao aumento do comprimento e da espessura peniana, indicados somente após avaliação individual.",
    image: "/procedimentos/_destaque_penis.jpg",
    href: WHATSAPP_HREF,
    featured: true,
  },
  {
    title: "Cirurgia íntima feminina",
    text: "Tratamento do excesso dos pequenos lábios e de outras alterações da região íntima, com técnica e discrição.",
    image: "/procedimentos/_destaque_clitoris.jpg",
    href: "/cirurgias/cirurgia-intima-feminina",
    featured: true,
  },
  {
    title: "Redesignação sexual",
    text: "Cirurgia de afirmação de gênero com indicação responsável e acompanhamento especializado.",
    image: "/procedimentos/_destaque_cirurgia_de_mudanca_de_sexo.jpg",
    href: WHATSAPP_HREF,
    featured: false,
  },
  {
    title: "Mastectomia masculinizadora",
    text: "Cirurgia indicada para pessoas em transição, com planejamento proporcional e cuidado individual.",
    image: "/procedimentos/_destaque_mastectomia_masculinizadora.v2.jpg",
    href: WHATSAPP_HREF,
    featured: false,
  },
  {
    title: "Prótese de mama",
    text: "Aumento mamário estético ou reparador, definido após avaliação de anatomia e expectativas.",
    image: "/procedimentos/_destaque_protese_de_mama.jpg",
    href: WHATSAPP_HREF,
    featured: false,
  },
  {
    title: "Gluteoplastia",
    text: "Introdução de próteses de silicone no músculo glúteo maior, com indicação e técnica individualizadas.",
    image: "/procedimentos/_destaque_gluteoplastia.jpg",
    href: WHATSAPP_HREF,
    featured: false,
  },
] as const;
