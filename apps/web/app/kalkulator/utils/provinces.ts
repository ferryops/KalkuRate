import { indeksStandarRemunerasi } from "../json/indeksStandarRemunerasi";

export function getIndeksRemunerasi(provA: string, provB: string): number {
  const indeksA =
    indeksStandarRemunerasi[provA as keyof typeof indeksStandarRemunerasi] ?? 1;
  const indeksB =
    indeksStandarRemunerasi[provB as keyof typeof indeksStandarRemunerasi] ?? 1;
  return Math.max(indeksA, indeksB);
}
