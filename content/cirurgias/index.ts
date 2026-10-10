import { aumentoPenianoFaloplastia } from "./aumento-peniano-faloplastia";
import { cirurgiaIntimaFeminina } from "./cirurgia-intima-feminina";
import { gluteoplastia } from "./gluteoplastia";
import { mastectomiaMasculinizadora } from "./mastectomia-masculinizadora";
import { proteseDeMama } from "./protese-de-mama";
import { redesignacaoSexual } from "./redesignacao-sexual";
import type { CirurgiaContent } from "./types";

const cirurgias: CirurgiaContent[] = [
  aumentoPenianoFaloplastia,
  cirurgiaIntimaFeminina,
  redesignacaoSexual,
  mastectomiaMasculinizadora,
  proteseDeMama,
  gluteoplastia,
];

export function getAllCirurgias(): CirurgiaContent[] {
  return cirurgias;
}

export function getCirurgiaSlugs(): string[] {
  return cirurgias.map((c) => c.slug);
}

export function getCirurgiaBySlug(slug: string): CirurgiaContent | undefined {
  return cirurgias.find((c) => c.slug === slug);
}
