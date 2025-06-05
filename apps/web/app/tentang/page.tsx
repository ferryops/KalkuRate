"use client";

import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function TentangPage() {
  useDocumentTitle("Tentang Aplikasi");

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Tentang Aplikasi</h1>

      <p className="leading-relaxed">
        Aplikasi ini dikembangkan untuk membantu{" "}
        <strong>konsultan, penyedia jasa, dan pengguna jasa </strong> dalam
        menghitung secara cepat dan akurat besaran{" "}
        <em>remunerasi / billing rate</em> berdasarkan
        <strong> Pedoman Standar Minimal INKINDO Tahun 2025</strong>.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold ">Latar Belakang</h2>
        <p>
          Setiap tahun, INKINDO menerbitkan pedoman standar biaya untuk jasa
          konsultansi baik konstruksi maupun non-konstruksi dengan
          memperhitungkan inflasi, pertumbuhan ekonomi, dan indeks harga
          provinsi berdasarkan data BPS.
        </p>
        <p>
          Pedoman ini menjadi rujukan utama dalam penyusunan RAB, HPS, dan
          dokumen penawaran harga pada berbagai instansi pemerintah, BUMN,
          maupun sektor swasta.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Fungsi Aplikasi</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Menghitung billing rate tenaga ahli berdasarkan tingkat pendidikan
            dan pengalaman
          </li>
          <li>Memperhitungkan indeks standar per provinsi</li>
          <li>
            Menampilkan hasil konversi ke mingguan, harian, hingga jam (SBOB,
            SBOM, SBOH, SBOJ)
          </li>
          <li>
            Mendukung tenaga ahli dengan/ tanpa SKK, sub-professional, dan
            tenaga pendukung
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Sumber Resmi</h2>
        <p>
          Seluruh data dan referensi dalam aplikasi ini diambil langsung dari:
          <br />
          <em>
            Pedoman Standar Minimal Tahun 2025 – Remunerasi/Biaya Personil dan
            Biaya Langsung
          </em>
          <br />
          yang diterbitkan oleh{" "}
          <strong>Ikatan Nasional Konsultan Indonesia (INKINDO)</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Disclaimer</h2>
        <p>
          Aplikasi ini tidak berafiliasi langsung dengan INKINDO. Dibuat sebagai
          alat bantu edukatif dan praktis bagi siapa pun yang membutuhkan
          referensi cepat dan akurat untuk penghitungan billing rate berdasarkan
          pedoman resmi.
        </p>
      </section>
    </main>
  );
}
