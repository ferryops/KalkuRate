"use client";

import useDocumentTitle from "@/hooks/useDocumentTitle";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function Page() {
  useDocumentTitle("Kalkulator Billing Rate INKINDO 2025");

  return (
    <main className="min-h-svh flex items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-slate-800">
          Kalkulator Billing Rate INKINDO 2025
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          Hitung{" "}
          <strong>
            remunerasi tenaga ahli, teknisi, analis, dan staf pendukung{" "}
          </strong>
          secara akurat & cepat berdasarkan{" "}
          <em>Pedoman Standar Minimal INKINDO 2025</em>. Sesuai untuk tender
          jasa konsultansi konstruksi maupun non-konstruksi.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/kalkulator">
            <Button size="lg">🔢 Kalkulator Tenaga Ahli</Button>
          </Link>
          <Link href="/sub-professional">
            <Button variant="outline" size="lg">
              🛠️ Kalkulator Sub Professional
            </Button>
          </Link>
        </div>

        <section className="pt-10 space-y-4">
          <h2 className="text-xl font-semibold text-slate-800">
            ✨ Fitur Unggulan
          </h2>
          <ul className="list-disc list-inside text-left text-slate-600 space-y-1">
            <li>Data resmi INKINDO 2025: terverifikasi & terpercaya</li>
            <li>Hitung berdasarkan SKK / Non-SKK</li>
            <li>Dukungan 38 provinsi + IKN dengan indeks regional</li>
            <li>Konversi otomatis ke per minggu, hari, dan jam</li>
            <li>Desain ringan, cepat, dan mobile friendly</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
