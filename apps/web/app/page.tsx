"use client";

import useDocumentTitle from "@/hooks/useDocumentTitle";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function Page() {
  useDocumentTitle("Kalkulator Billing Rate INKINDO 2025");

  return (
    <main className="min-h-svh flex items-center justify-center px-4 py-12 bg-gradient-to-b">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Kalkulator Billing Rate INKINDO 2025
        </h1>
        <p className="text-base md:text-lg leading-relaxed">
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
          <Link href="/kalkulator-sub-professional">
            <Button variant="outline" size="lg">
              🛠️ Kalkulator Sub Professional
            </Button>
          </Link>
          <Link href="/kalkulator-supporting-staff">
            <Button variant="outline" size="lg">
              👥 Kalkulator Staf Pendukung
            </Button>
          </Link>
        </div>

        <section className="pt-10 space-y-4">
          <h2 className="text-xl font-semibold">✨ Fitur Unggulan</h2>
          <ul className="list-disc list-inside text-left space-y-1">
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
