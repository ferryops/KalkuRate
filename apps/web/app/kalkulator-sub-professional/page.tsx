"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Label } from "@workspace/ui/components/label";
import { Button } from "@workspace/ui/components/button";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import {
  subProfessionalRates,
  SubProfessionalRole,
} from "./utils/subProfessionalRates";
import {
  indeksStandarRemunerasi,
  Provinsi,
} from "../kalkulator/json/indeksStandarRemunerasi";
import { getSubProfessionalRate } from "./utils/getSubProfessionalRate";

export default function SubProfessionalPage() {
  useDocumentTitle("Kalkulator Sub Professional");

  const [role, setRole] = useState<SubProfessionalRole | "">("");
  const [provinsi, setProvinsi] = useState<Provinsi | "">("");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!role || !provinsi) return;
    const rate = getSubProfessionalRate(role, provinsi);
    setResult(rate);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">
        Kalkulator Billing Rate Sub Professional
      </h1>

      <p>
        Gunakan alat ini untuk menghitung billing rate tenaga teknisi, analis,
        dan personel pendukung berdasarkan Pedoman INKINDO 2025 (Tabel 4-25).
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <Label className="sm:w-40">Jabatan</Label>
        <Select
          value={role}
          onValueChange={(val) => setRole(val as SubProfessionalRole)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Jabatan" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(subProfessionalRates).map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Label className="sm:w-40">Provinsi</Label>
        <Select
          value={provinsi}
          onValueChange={(val) => setProvinsi(val as Provinsi)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Provinsi" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(indeksStandarRemunerasi).map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        className="w-full"
        onClick={handleSubmit}
        disabled={!role || !provinsi}
      >
        Hitung Billing Rate
      </Button>

      {result && (
        <div className="mt-6 p-4 bg-green-100 text-green-900 rounded-xl font-semibold shadow">
          Billing Rate Sub Professional:
          <br />
          <span className="text-xl">Rp {result.toLocaleString("id-ID")}</span> /
          bulan
        </div>
      )}
    </main>
  );
}
