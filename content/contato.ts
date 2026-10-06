export const contactLocations = [
  {
    id: "clinica-dr-claudio",
    eyebrow: "Atendimento principal",
    name: "Clínica Dr. Claudio Eduardo",
    building: "Edifício Stein Tower",
    address: "R. Floriano Peixoto, 222",
    complement: "8º andar, Sala 801 · Centro, Blumenau/SC",
    postalCode: "CEP 89010-022",
    email: "clinicadrclaudioeduardo@gmail.com",
    emailHref: "mailto:clinicadrclaudioeduardo@gmail.com",
    phones: [
      { label: "WhatsApp", value: "(47) 99611-7198", href: "tel:+5547996117198" },
    ],
    whatsappHref: "https://wa.me/5547996117198",
  },
  {
    id: "centro-clinico-santa-catarina",
    eyebrow: "Consultório",
    name: "Centro Clínico Santa Catarina",
    building: "Edifício Stein Tower",
    address: "R. Floriano Peixoto, 222",
    complement: "8º andar, Sala 801 · Centro, Blumenau/SC",
    postalCode: "",
    email: "contato@drclaudioeduardo.com.br",
    emailHref: "mailto:contato@drclaudioeduardo.com.br",
    phones: [
      { label: "Telefone", value: "(47) 3322-4389", href: "tel:+554733224389" },
      { label: "Telefone", value: "(47) 3035-4350", href: "tel:+554730354350" },
    ],
    whatsappHref: null,
  },
] as const;

export const contactMap = {
  label: "Edifício Stein Tower · Blumenau/SC",
  query: "Edifício Stein Tower, Rua Floriano Peixoto, 222, Blumenau - SC",
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=Edif%C3%ADcio+Stein+Tower%2C+Rua+Floriano+Peixoto%2C+222%2C+Blumenau+-+SC",
  embedSrc:
    "https://www.google.com/maps?q=Edif%C3%ADcio+Stein+Tower%2C+Rua+Floriano+Peixoto%2C+222%2C+Blumenau+-+SC&output=embed",
} as const;

export const contactPage = {
  hero: {
    eyebrow: "Contato · Blumenau/SC",
    title: "Vamos conversar sobre o seu próximo passo.",
    text: "Tire suas dúvidas, compartilhe o que você busca e encontre o melhor caminho para uma avaliação individual.",
  },
  legalNotice:
    "Não divulgamos preços de cirurgias ou médias de valores no site. Após a consulta e a indicação do procedimento específico, a equipe apresenta os custos e as formas de pagamento, conforme as orientações do Código de Ética Médica.",
} as const;
