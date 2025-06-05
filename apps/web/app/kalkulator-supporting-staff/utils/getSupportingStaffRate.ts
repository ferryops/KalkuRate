import {
  indeksStandarRemunerasi,
  Provinsi,
} from "@/app/kalkulator/json/indeksStandarRemunerasi";
import {
  SupportingStaffRole,
  supportingStaffRates,
} from "./supportingStaffRates";

export function getSupportingStaffRate(
  role: SupportingStaffRole,
  provinsi: Provinsi
): number {
  const baseRate = supportingStaffRates[role];
  const indeks = indeksStandarRemunerasi[provinsi] ?? 1;
  return Math.round(baseRate * indeks);
}
