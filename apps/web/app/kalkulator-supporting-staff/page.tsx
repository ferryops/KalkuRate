"use client";

import { useState } from "react";

import useDocumentTitle from "@/hooks/useDocumentTitle";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@workspace/ui/components/select";
import { Label } from "@workspace/ui/components/label";
import { Button } from "@workspace/ui/components/button";
import {
  supportingStaffRates,
  SupportingStaffRole,
} from "./utils/supportingStaffRates";
import {
  indeksStandarRemunerasi,
  Provinsi,
} from "../kalkulator/json/indeksStandarRemunerasi";
import { getSupportingStaffRate } from "./utils/getSupportingStaffRate";

export default function SupportingStaffPage() {
  useDocumentTitle("Kalkulator Supporting Staff");

  const [role, setRole] = useState<SupportingStaffRole | "">("");
  const [provinsi, setProvinsi] = useState<Provinsi | "">("");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!role || !provinsi) return;
    const rate = getSupportingStaffRate(role, provinsi);
    setResult(rate);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">
        Kalkulator Billing Rate Tenaga Pendukung
      </h1>

      <p>
        Hitung billing rate untuk posisi staf pendukung seperti operator,
        pengemudi, dan lainnya berdasarkan pedoman resmi INKINDO 2025.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <Label className="sm:w-40">Jabatan</Label>
        <Select
          value={role}
          onValueChange={(val) => setRole(val as SupportingStaffRole)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Jabatan" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(supportingStaffRates).map((r) => (
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
        className="w-full mt-4"
        onClick={handleSubmit}
        disabled={!role || !provinsi}
      >
        Hitung Billing Rate
      </Button>

      {result && (
        <div className="mt-6 p-4 bg-blue-100 text-blue-900 rounded-xl font-semibold shadow">
          Billing Rate {role}:<br />
          <span className="text-xl">Rp {result.toLocaleString("id-ID")}</span> /
          bulan
        </div>
      )}
    </main>
  );
}
