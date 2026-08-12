import { cirurgiaIntimaFeminina } from "./cirurgia-intima-feminina";
import type { CirurgiaContent } from "./types";

const cirurgias: CirurgiaContent[] = [cirurgiaIntimaFeminina];

export function getAllCirurgias(): CirurgiaContent[] {
  return cirurgias;
}

export function getCirurgiaSlugs(): string[] {
  return cirurgias.map((c) => c.slug);
}

export function getCirurgiaBySlug(slug: string): CirurgiaContent | undefined {
  return cirurgias.find((c) => c.slug === slug);
}
