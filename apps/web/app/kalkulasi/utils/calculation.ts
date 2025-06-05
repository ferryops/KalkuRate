import { InputType } from "../types/inputType";
import { getIndeksRemunerasi } from "./provinces";
import { getBaseRate } from "./rates";

export function calculateBillingRate({
  pendidikan,
  pengalaman,
  skk,
  tipe,
  lokasiProyek,
  lokasiDomisili,
}: InputType): number {
  const baseRate = getBaseRate(pendidikan, pengalaman, skk);
  const indeksProv = getIndeksRemunerasi(lokasiProyek, lokasiDomisili);
  const tipeMultiplier =
    tipe === "NonProfit" ? 0.7 : tipe === "Perorangan" ? 0.55 : 1;

  return Math.round(baseRate * indeksProv * tipeMultiplier);
}
