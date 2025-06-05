import { indeksStandarRemunerasi } from "../json/indeksStandarRemunerasi";
import {
  subProfessionalRates,
  SubProfessionalRole,
} from "../json/subProfessionalRates";

export function getSubProfessionalRate(
  role: SubProfessionalRole,
  provinsi: keyof typeof indeksStandarRemunerasi
): number {
  const baseRate = subProfessionalRates[role];
  const indeks = indeksStandarRemunerasi[provinsi] ?? 1;
  return Math.round(baseRate * indeks);
}
