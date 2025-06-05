import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center p-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Halaman yang kamu cari tidak ditemukan.
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Mungkin kamu salah ketik atau halaman sudah dipindahkan.
        </p>
        <div className="mt-6">
          <Link href="/">
            <Button variant="default">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
