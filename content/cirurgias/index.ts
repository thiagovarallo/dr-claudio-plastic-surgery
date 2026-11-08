import { abdominoplastia } from "./abdominoplastia";
import { aumentoPenianoFaloplastia } from "./aumento-peniano-faloplastia";
import { blefaroplastia } from "./blefaroplastia";
import { cirurgiaIntimaFeminina } from "./cirurgia-intima-feminina";
import { gluteoplastia } from "./gluteoplastia";
import { liftingFacial } from "./lifting-facial";
import { lipoaspiracao } from "./lipoaspiracao";
import { mastectomiaMasculinizadora } from "./mastectomia-masculinizadora";
import { otoplastia } from "./otoplastia";
import { proteseDeMama } from "./protese-de-mama";
import { redesignacaoSexual } from "./redesignacao-sexual";
import { rinoplastia } from "./rinoplastia";
import type { CirurgiaContent } from "./types";

const cirurgias: CirurgiaContent[] = [
  aumentoPenianoFaloplastia,
  cirurgiaIntimaFeminina,
  redesignacaoSexual,
  mastectomiaMasculinizadora,
  proteseDeMama,
  gluteoplastia,
  rinoplastia,
  liftingFacial,
  lipoaspiracao,
  blefaroplastia,
  abdominoplastia,
  otoplastia,
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
