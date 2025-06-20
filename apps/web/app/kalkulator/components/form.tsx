"use client";

import { useState } from "react";
import { InputType } from "../types/inputType";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  indeksStandarRemunerasi,
  Provinsi,
} from "../json/indeksStandarRemunerasi";

const provinsiList: Provinsi[] = Object.keys(
  indeksStandarRemunerasi
) as Provinsi[];

export function CalculatorForm({
  onSubmit,
}: {
  onSubmit: (values: InputType) => void;
}) {
  const [form, setForm] = useState<InputType>({
    pendidikan: "S1",
    pengalaman: 5,
    skk: true,
    tipe: "BadanUsaha",
    lokasiProyek: "DKI Jakarta",
    lokasiDomisili: "DKI Jakarta",
  });

  const handleChange = (key: keyof InputType, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Label className="sm:w-40">Pendidikan</Label>
          <Select
            value={form.pendidikan}
            onValueChange={(val) => handleChange("pendidikan", val as any)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Pendidikan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="S1">S1</SelectItem>
              <SelectItem value="S2">S2</SelectItem>
              <SelectItem value="S3">S3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Label className="sm:w-40">Pengalaman (tahun)</Label>
          <Input
            type="number"
            value={form.pengalaman}
            onChange={(e) => handleChange("pengalaman", +e.target.value)}
            placeholder="Contoh: 5"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Label className="sm:w-40">Lokasi Proyek</Label>
          <Select
            value={form.lokasiProyek}
            onValueChange={(val) => handleChange("lokasiProyek", val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Lokasi Proyek" />
            </SelectTrigger>
            <SelectContent>
              {provinsiList.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Label className="sm:w-40">Domisili Tenaga Ahli</Label>
          <Select
            value={form.lokasiDomisili}
            onValueChange={(val) => handleChange("lokasiDomisili", val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Domisili" />
            </SelectTrigger>
            <SelectContent>
              {provinsiList.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Label className="sm:w-40">Tipe Penyedia</Label>
          <Select
            value={form.tipe}
            onValueChange={(val) => handleChange("tipe", val as any)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Tipe Penyedia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BadanUsaha">Badan Usaha</SelectItem>
              <SelectItem value="NonProfit">Non Profit</SelectItem>
              <SelectItem value="Perorangan">Perorangan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Label className="sm:w-40">Memiliki SKK?</Label>
          <Select
            value={form.skk ? "yes" : "no"}
            onValueChange={(val) => handleChange("skk", val === "yes")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Ya/Tidak" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Ya</SelectItem>
              <SelectItem value="no">Tidak</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit" className="w-full mt-6">
        Hitung Billing Rate
      </Button>
    </form>
  );
}
