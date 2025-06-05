// Contoh data dari Tabel 2-25 (dengan SKK) dan Tabel 3-25 (tanpa SKK)
export const ratesWithSKK: Record<string, number[]> = {
  S1: [
    27300000, 28900000, 30500000, 32150000, 33750000, 35350000, 37000000,
    38600000, 40200000, 41850000,
  ],
  S2: [
    35650000, 37650000, 39650000, 41650000, 43600000, 45600000, 47600000,
    49600000, 51600000, 53600000,
  ],
  S3: [
    45900000, 48000000, 50050000, 52150000, 54250000, 56350000, 58450000,
    60550000, 62650000, 64750000,
  ],
};

export const ratesWithoutSKK: Record<string, number[]> = {
  S1: [
    27300000, 28900000, 30500000, 32150000, 33750000, 35350000, 37000000,
    38600000, 40200000, 41850000,
  ],
  S2: [
    35650000, 37650000, 39650000, 41650000, 43600000, 45600000, 47600000,
    49600000, 51600000, 53600000,
  ],
  S3: [
    45900000, 48000000, 50050000, 52150000, 54250000, 56350000, 58450000,
    60550000, 62650000, 64750000,
  ],
};

export function getBaseRate(
  pendidikan: string,
  pengalaman: number,
  skk: boolean
): number {
  const rates = skk ? ratesWithSKK : ratesWithoutSKK;
  const list = rates[pendidikan];
  const idx = Math.max(0, Math.min(pengalaman - 1, (list || []).length - 1));
  return list?.[idx] ?? 0;
}
