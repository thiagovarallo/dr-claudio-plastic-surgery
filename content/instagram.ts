export type InstagramPostItem = {
  id: string;
  shortcode: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl: string;
  caption: string;
  title?: string;
  tag?: string;
  timestamp?: string;
};

/**
 * Lista de shortcodes reais mais recentes do perfil @drclaudioeduardo.
 * Ao adicionar um novo shortcode aqui (ou configurar INSTAGRAM_ACCESS_TOKEN / NEXT_PUBLIC_BEHOLD_FEED_ID),
 * o servidor busca automaticamente a imagem oficial e a legenda no Instagram.
 */
export const INSTAGRAM_SHORTCODES = [
  "De-Z3NluHKh",
  "Dez8Br0sPo4",
  "DefI6xosUrX",
  "DeP728SRqwY",
  "DeKhZTRs7sT",
  "Dd-AZS-NwOX",
  "DduZpQ8M-yy",
  "DdrBNEdujeE",
  "DdmuGhARjbb",
  "Ddj3DNPsSLe",
  "Ddc5vIBO7JT",
  "DdaIcKWOHYP",
  "DchHRlfsCZJ",
  "DcPHCfOMVXw",
  "DbwPfZ7MeWM",
  "DboypwFO5GZ",
  "DbbjgDJMMP9",
  "DbLg3oYxscD",
  "DbGxGrUsgSQ",
  "Da3UdL5MWfb",
  "DayLkvEsG4V",
  "DZVoXwRs-nZ",
  "DPj2zWgjt2l",
  "DPPO0hCjmOv",
  "DD63SUWuGCp",
] as const;

export const FALLBACK_INSTAGRAM_POSTS: InstagramPostItem[] = [
  {
    id: "De-Z3NluHKh",
    shortcode: "De-Z3NluHKh",
    permalink: "https://www.instagram.com/drclaudioeduardo/p/De-Z3NluHKh/",
    mediaType: "IMAGE",
    mediaUrl: "/instagram/post-De-Z3NluHKh.jpg",
    thumbnailUrl: "/instagram/post-De-Z3NluHKh.jpg",
    tag: "Avaliação Médica",
    title: "Um bom resultado cirúrgico começa antes da cirurgia: começa na avaliação.",
    caption:
      "Não basta olhar apenas para a técnica. É preciso entender como estão os tecidos, a anatomia da região, a capacidade de cicatrização e o que realmente é possível alcançar em cada caso. Na cirurgia plástica, individualizar o planejamento é essencial para buscar um resultado seguro, proporcional e compatível com a realidade de cada paciente.",
  },
  {
    id: "Dez8Br0sPo4",
    shortcode: "Dez8Br0sPo4",
    permalink: "https://www.instagram.com/drclaudioeduardo/p/Dez8Br0sPo4/",
    mediaType: "IMAGE",
    mediaUrl: "/instagram/post-Dez8Br0sPo4.jpg",
    thumbnailUrl: "/instagram/post-Dez8Br0sPo4.jpg",
    tag: "Planejamento Cirúrgico",
    title: "Expectativa realista e planejamento individualizado na cirurgia plástica",
    caption:
      "A avaliação médica consegue analisar fatores como anatomia, proporções, elasticidade dos tecidos e condições locais para estimar o que pode ser possível em cada caso. Mas é importante entender que cirurgia não funciona como uma medida exata: a resposta do organismo, a cicatrização e outras características individuais também influenciam o resultado final.",
  },
  {
    id: "DefI6xosUrX",
    shortcode: "DefI6xosUrX",
    permalink: "https://www.instagram.com/drclaudioeduardo/p/DefI6xosUrX/",
    mediaType: "IMAGE",
    mediaUrl: "/instagram/post-DefI6xosUrX.jpg",
    thumbnailUrl: "/instagram/post-DefI6xosUrX.jpg",
    tag: "Esclarecimento Médico",
    title: "Pênis embutido e pênis pequeno têm causas e tratamentos diferentes",
    caption:
      "Embora possam parecer a mesma situação à primeira vista, pênis embutido e pênis pequeno têm causas diferentes e isso muda completamente a forma de avaliação e tratamento. No pênis embutido, parte da haste pode ficar escondida por fatores como excesso de gordura na região pubiana ou excesso de pele, mesmo quando o comprimento anatômico está dentro do esperado.",
  },
  {
    id: "DeP728SRqwY",
    shortcode: "DeP728SRqwY",
    permalink: "https://www.instagram.com/drclaudioeduardo/p/DeP728SRqwY/",
    mediaType: "IMAGE",
    mediaUrl: "/instagram/post-DeP728SRqwY.jpg",
    thumbnailUrl: "/instagram/post-DeP728SRqwY.jpg",
    tag: "Telemedicina",
    title: "Avaliação inicial por telemedicina para pacientes de outras cidades ou países",
    caption:
      "Mesmo morando em outra cidade, estado ou país, você pode dar o primeiro passo para entender se existe indicação para o procedimento. A avaliação inicial pode ser realizada por telemedicina, permitindo conversar sobre o caso, histórico, expectativas e possibilidades antes de organizar a viagem para Blumenau-SC.",
  },
  {
    id: "DeKhZTRs7sT",
    shortcode: "DeKhZTRs7sT",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DeKhZTRs7sT/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DeKhZTRs7sT.jpg",
    thumbnailUrl: "/instagram/post-DeKhZTRs7sT.jpg",
    tag: "Reels · Cirurgia Íntima",
    title: "A importância da técnica e qualificação médica na ninfoplastia",
    caption:
      "A cirurgia de redução dos pequenos lábios (ninfoplastia) exige conhecimento da anatomia, técnica cirúrgica e planejamento cuidadoso. Uma retirada excessiva de tecido pode provocar alterações estéticas e funcionais difíceis de corrigir. Verifique sempre o CRM, o RQE e a experiência do profissional.",
  },
  {
    id: "Dd-AZS-NwOX",
    shortcode: "Dd-AZS-NwOX",
    permalink: "https://www.instagram.com/drclaudioeduardo/p/Dd-AZS-NwOX/",
    mediaType: "IMAGE",
    mediaUrl: "/instagram/post-Dd-AZS-NwOX.jpg",
    thumbnailUrl: "/instagram/post-Dd-AZS-NwOX.jpg",
    tag: "Alerta Médico",
    title: "Complicações após a aplicação de PMMA na região peniana",
    caption:
      "Quando surgem complicações após a aplicação de PMMA na região peniana, é fundamental entender primeiro o que está acontecendo com os tecidos. Nódulos, irregularidades, deformidades, dor, endurecimento e processos inflamatórios podem aparecer em momentos diferentes e exigir avaliação especializada.",
  },
  {
    id: "DduZpQ8M-yy",
    shortcode: "DduZpQ8M-yy",
    permalink: "https://www.instagram.com/drclaudioeduardo/p/DduZpQ8M-yy/",
    mediaType: "IMAGE",
    mediaUrl: "/instagram/post-DduZpQ8M-yy.jpg",
    thumbnailUrl: "/instagram/post-DduZpQ8M-yy.jpg",
    tag: "Anatomia & Avaliação",
    title: "Como o volume na região pubiana influencia a percepção do comprimento",
    caption:
      "Em alguns homens o pênis não é necessariamente menor. Parte dele pode estar visualmente escondida pelo excesso de volume na região pubiana. Isso pode alterar bastante a percepção do comprimento, principalmente no estado flácido. Por isso, é importante avaliar a anatomia como um todo.",
  },
  {
    id: "DdrBNEdujeE",
    shortcode: "DdrBNEdujeE",
    permalink: "https://www.instagram.com/drclaudioeduardo/p/DdrBNEdujeE/",
    mediaType: "IMAGE",
    mediaUrl: "/instagram/post-DdrBNEdujeE.jpg",
    thumbnailUrl: "/instagram/post-DdrBNEdujeE.jpg",
    tag: "Orientação Médica",
    title: "Padrões anatômicos esperados e distorções de percepção",
    caption:
      "Muitos homens acreditam que têm um pênis pequeno quando, na avaliação médica, as medidas estão dentro dos padrões anatômicos esperados. Comparações e expectativas irreais podem distorcer bastante essa percepção. Antes de qualquer procedimento, o mais importante é entender as medidas e a anatomia.",
  },
  {
    id: "DdmuGhARjbb",
    shortcode: "DdmuGhARjbb",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DdmuGhARjbb/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DdmuGhARjbb.jpg",
    thumbnailUrl: "/instagram/post-DdmuGhARjbb.jpg",
    tag: "Reels · Faloplastia",
    title: "Como funciona o engrossamento peniano e a absorção de gordura?",
    caption:
      "Em muitos casos, é possível obter um aumento significativo com o engrossamento peniano. Mas o resultado final depende da anatomia e, principalmente, de quanto da gordura enxertada será absorvida pelo organismo. Por isso, cada paciente precisa ser avaliado individualmente.",
  },
  {
    id: "Ddj3DNPsSLe",
    shortcode: "Ddj3DNPsSLe",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/Ddj3DNPsSLe/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-Ddj3DNPsSLe.jpg",
    thumbnailUrl: "/instagram/post-Ddj3DNPsSLe.jpg",
    tag: "Reels · Pergunta de seguidor",
    title: "13 cm podem chegar a 15 cm após a faloplastia?",
    caption:
      "É possível haver aumento também no estado ereto, mas ele não acontece na mesma proporção do estado flácido. O resultado varia de acordo com a anatomia e a elasticidade dos tecidos de cada paciente, por isso não é possível garantir um número exato antes da avaliação.",
  },
  {
    id: "Ddc5vIBO7JT",
    shortcode: "Ddc5vIBO7JT",
    permalink: "https://www.instagram.com/drclaudioeduardo/p/Ddc5vIBO7JT/",
    mediaType: "IMAGE",
    mediaUrl: "/instagram/post-Ddc5vIBO7JT.jpg",
    thumbnailUrl: "/instagram/post-Ddc5vIBO7JT.jpg",
    tag: "Tire suas dúvidas",
    title: "Existe idade máxima para realizar a cirurgia de aumento peniano?",
    caption:
      "A idade, sozinha, não determina se um paciente pode ou não realizar a faloplastia. O que realmente precisa ser considerado é o conjunto: condições gerais de saúde, exames pré-operatórios, avaliação cardiológica e possíveis fatores de risco analisados individualmente.",
  },
  {
    id: "DdaIcKWOHYP",
    shortcode: "DdaIcKWOHYP",
    permalink: "https://www.instagram.com/drclaudioeduardo/p/DdaIcKWOHYP/",
    mediaType: "IMAGE",
    mediaUrl: "/instagram/post-DdaIcKWOHYP.jpg",
    thumbnailUrl: "/instagram/post-DdaIcKWOHYP.jpg",
    tag: "Centro Cirúrgico",
    title: "Equipe cirúrgica nota 1000",
    caption:
      "Equipe cirúrgica nota 1000 🚀😷 Dedicação, segurança hospitalar e cuidado em cada etapa do procedimento cirúrgico em Blumenau/SC.",
  },
  {
    id: "DchHRlfsCZJ",
    shortcode: "DchHRlfsCZJ",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DchHRlfsCZJ/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DchHRlfsCZJ.jpg",
    thumbnailUrl: "/instagram/post-DchHRlfsCZJ.jpg",
    tag: "Reels · Dúvida comum",
    title: "Doutor, tenho 50 anos. Ainda posso fazer a cirurgia de aumento peniano?",
    caption:
      "A idade, isoladamente, não é o único fator que determina se um paciente pode ou não realizar a faloplastia. Mais importante é avaliar as condições gerais de saúde, exames pré-operatórios, histórico clínico e se o paciente está apto para o procedimento.",
  },
  {
    id: "DcPHCfOMVXw",
    shortcode: "DcPHCfOMVXw",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DcPHCfOMVXw/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DcPHCfOMVXw.jpg",
    thumbnailUrl: "/instagram/post-DcPHCfOMVXw.jpg",
    tag: "Reels · Faloplastia",
    title: "A cirurgia de aumento peniano é indicada apenas para quem possui micropênis?",
    caption:
      "Muitas pessoas acreditam que a cirurgia de aumento peniano é indicada apenas para quem possui micropênis. Na prática, a grande maioria dos pacientes que procura a faloplastia possui um pênis dentro da faixa considerada normal e busca melhorar comprimento e diâmetro em conjunto.",
  },
  {
    id: "DbwPfZ7MeWM",
    shortcode: "DbwPfZ7MeWM",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DbwPfZ7MeWM/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DbwPfZ7MeWM.jpg",
    thumbnailUrl: "/instagram/post-DbwPfZ7MeWM.jpg",
    tag: "Reels · Segurança Médica",
    title: "A importância da técnica na aplicação de toxina botulínica",
    caption:
      "Um procedimento considerado simples também exige conhecimento técnico e uma avaliação adequada. A aplicação da toxina botulínica deve ser realizada por um profissional habilitado, pois a técnica faz diferença e previne intercorrências como a ptose palpebral.",
  },
  {
    id: "DboypwFO5GZ",
    shortcode: "DboypwFO5GZ",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DboypwFO5GZ/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DboypwFO5GZ.jpg",
    thumbnailUrl: "/instagram/post-DboypwFO5GZ.jpg",
    tag: "Reels · Cirurgia Íntima",
    title: "Segurança e escolha do profissional na redução dos pequenos lábios",
    caption:
      "A cirurgia de redução dos pequenos lábios deve ser realizada por um profissional habilitado e em ambiente com estrutura adequada. Antes de qualquer procedimento, verifique se o profissional é médico especialista e se o local oferece total segurança.",
  },
  {
    id: "DbbjgDJMMP9",
    shortcode: "DbbjgDJMMP9",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DbbjgDJMMP9/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DbbjgDJMMP9.jpg",
    thumbnailUrl: "/instagram/post-DbbjgDJMMP9.jpg",
    tag: "Reels · Alerta Médico",
    title: "PMMA no pênis? Pense muito bem antes de tomar essa decisão",
    caption:
      "O PMMA é um material permanente e, quando aplicado no pênis, pode causar complicações importantes, como deformidades, processos inflamatórios e dificuldade para remoção. Na faloplastia, o engrossamento é realizado com gordura do próprio paciente.",
  },
  {
    id: "DbLg3oYxscD",
    shortcode: "DbLg3oYxscD",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DbLg3oYxscD/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DbLg3oYxscD.jpg",
    thumbnailUrl: "/instagram/post-DbLg3oYxscD.jpg",
    tag: "Reels · Orientação Médica",
    title: "Como é realizada a medição padronizada no consultório?",
    caption:
      "Na hora da medição no consultório, muitos pacientes percebem que estavam utilizando uma forma incorreta de medir. A medida deve ser realizada seguindo uma técnica padronizada para evitar comparações baseadas em números imprecisos.",
  },
  {
    id: "DbGxGrUsgSQ",
    shortcode: "DbGxGrUsgSQ",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DbGxGrUsgSQ/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DbGxGrUsgSQ.jpg",
    thumbnailUrl: "/instagram/post-DbGxGrUsgSQ.jpg",
    tag: "Reels · Dúvida frequente",
    title: "A faloplastia aumenta o pênis apenas no estado flácido?",
    caption:
      "A cirurgia de aumento peniano pode proporcionar ganho de comprimento tanto no pênis flácido quanto no ereto, sendo mais perceptível no estado flácido. Cada paciente possui características anatômicas próprias e elasticidade tecidual que influenciam a resposta.",
  },
  {
    id: "Da3UdL5MWfb",
    shortcode: "Da3UdL5MWfb",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/Da3UdL5MWfb/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-Da3UdL5MWfb.jpg",
    thumbnailUrl: "/instagram/post-Da3UdL5MWfb.jpg",
    tag: "Reels · Consulta Médica",
    title: "Doutor, quanto custa a cirurgia? Entenda a importância da avaliação",
    caption:
      "Antes de informar qualquer orçamento, é necessária uma avaliação médica. Além de ser uma exigência do Conselho Federal de Medicina (CFM), cada paciente possui características anatômicas e necessidades que precisam ser analisadas individualmente em consulta.",
  },
  {
    id: "DayLkvEsG4V",
    shortcode: "DayLkvEsG4V",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DayLkvEsG4V/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DayLkvEsG4V.jpg",
    thumbnailUrl: "/instagram/post-DayLkvEsG4V.jpg",
    tag: "Reels · Ética Médica",
    title: "Por que fotos de antes e depois não são divulgadas nas redes sociais?",
    caption:
      "De acordo com as normas do Conselho Federal de Medicina, imagens de antes e depois não podem ser divulgadas nas redes sociais. Durante a consulta presencial ou por telemedicina, é possível esclarecer todas as dúvidas e orientar o paciente com total sigilo.",
  },
  {
    id: "DZVoXwRs-nZ",
    shortcode: "DZVoXwRs-nZ",
    permalink: "https://www.instagram.com/drclaudioeduardo/p/DZVoXwRs-nZ/",
    mediaType: "IMAGE",
    mediaUrl: "/instagram/post-DZVoXwRs-nZ.jpg",
    thumbnailUrl: "/instagram/post-DZVoXwRs-nZ.jpg",
    tag: "Tire suas dúvidas",
    title: "O resultado da cirurgia de aumento peniano muda com o envelhecimento?",
    caption:
      "Assim como acontece com qualquer região do corpo, o envelhecimento faz parte do processo natural da vida. Mudanças hormonais, variações de peso e alterações na elasticidade dos tecidos podem ocorrer ao longo dos anos. Cada paciente possui uma evolução individual e o acompanhamento médico é sempre importante.",
  },
  {
    id: "DPj2zWgjt2l",
    shortcode: "DPj2zWgjt2l",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DPj2zWgjt2l/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DPj2zWgjt2l.jpg",
    thumbnailUrl: "/instagram/post-DPj2zWgjt2l.jpg",
    tag: "Reels · Dúvida comum",
    title: "É possível fazer a cirurgia de vasectomia junto com a cirurgia de faloplastia?",
    caption:
      "Essa é uma dúvida bem comum entre os pacientes e nas redes sociais. No vídeo, o Dr. Claudio Eduardo explica o que é importante entender antes de pensar em associar essas duas cirurgias.",
  },
  {
    id: "DPPO0hCjmOv",
    shortcode: "DPPO0hCjmOv",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DPPO0hCjmOv/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DPPO0hCjmOv.jpg",
    thumbnailUrl: "/instagram/post-DPPO0hCjmOv.jpg",
    tag: "Reels · Pergunta de seguidor",
    title: "Você faz cirurgia de faloplastia e corrige cicatrizes?",
    caption:
      "A resposta é: depende. É necessário avaliar o tipo, o tamanho e a localização da cicatriz. O tempo da cirurgia não deve ser prolongado em excesso. Cada situação é única e só pode ser definida após consulta médica.",
  },
  {
    id: "DD63SUWuGCp",
    shortcode: "DD63SUWuGCp",
    permalink: "https://www.instagram.com/drclaudioeduardo/reel/DD63SUWuGCp/",
    mediaType: "VIDEO",
    mediaUrl: "/instagram/post-DD63SUWuGCp.jpg",
    thumbnailUrl: "/instagram/post-DD63SUWuGCp.jpg",
    tag: "Reels · Tire suas dúvidas",
    title: "Dr., o que é a lipoenxertia e como ela funciona?",
    caption:
      "Entenda como funciona a coleta, o preparo e o enxerto de gordura autóloga na cirurgia plástica íntima com avaliação médica individualizada.",
  },
];
