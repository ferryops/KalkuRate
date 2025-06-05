import {
  indeksStandarRemunerasi,
  Provinsi,
} from "@/app/kalkulator/json/indeksStandarRemunerasi";
import {
  SubProfessionalRole,
  subProfessionalRates,
} from "./subProfessionalRates";

export function getSubProfessionalRate(
  role: SubProfessionalRole,
  provinsi: Provinsi
): number {
  const baseRate = subProfessionalRates[role];
  const indeks = indeksStandarRemunerasi[provinsi] ?? 1;
  return Math.round(baseRate * indeks);
}
