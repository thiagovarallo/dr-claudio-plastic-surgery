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
 * Lista de shortcodes reais do perfil @drclaudioeduardo.
 * Ao adicionar um novo shortcode aqui (ou configurar INSTAGRAM_ACCESS_TOKEN / NEXT_PUBLIC_BEHOLD_FEED_ID),
 * o servidor busca automaticamente a imagem oficial e a legenda no Instagram.
 */
export const INSTAGRAM_SHORTCODES = [
  "DZVoXwRs-nZ",
  "DPj2zWgjt2l",
  "DPPO0hCjmOv",
  "DD63SUWuGCp",
] as const;

export const FALLBACK_INSTAGRAM_POSTS: InstagramPostItem[] = [
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

