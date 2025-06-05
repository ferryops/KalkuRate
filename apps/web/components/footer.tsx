import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t dark:border-gray-700 bg-white dark:bg-black/20 py-6 px-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="max-w-screen-lg mx-auto space-y-1">
        <p>
          © {new Date().getFullYear()} Kalkulator Billing Rate INKINDO. Dibuat
          untuk memudahkan perhitungan remunerasi jasa konsultansi atau non
          konsultansi berdasarkan standar resmi INKINDO 2025.
        </p>
        <p>
          Dibangun dengan ❤️ oleh{" "}
          <Link href="https://github.com/ferryops" target="_blank">
            ferryops
          </Link>
        </p>
      </div>
    </footer>
  );
}
