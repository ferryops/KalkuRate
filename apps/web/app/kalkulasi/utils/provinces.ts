// Data indeks dari Tabel 6-25
export const provinsiIndeks: Record<string, number> = {
  "DKI Jakarta": 1.0,
  "Jawa Barat": 0.847,
  "Sumatera Barat": 0.947,
  "Kalimantan Timur": 1.03,
  IKN: 1.294,
};

export function getIndeksRemunerasi(provA: string, provB: string): number {
  const indeksA = provinsiIndeks[provA] ?? 1;
  const indeksB = provinsiIndeks[provB] ?? 1;
  return Math.max(indeksA, indeksB);
}
