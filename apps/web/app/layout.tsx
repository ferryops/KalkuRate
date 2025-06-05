import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Kalkulator Billing Rate INKINDO 2025",
    template: "%s | Kalkulator Billing Rate INKINDO",
  },
  description:
    "Hitung billing rate tenaga ahli, sub professional, dan staf pendukung secara akurat berdasarkan Pedoman Standar Minimal INKINDO Tahun 2025.",
  keywords: [
    "INKINDO",
    "billing rate",
    "remunerasi",
    "konsultan",
    "jasa konstruksi",
    "tenaga ahli",
    "sub professional",
    "supporting staff",
    "kalkulator INKINDO",
    "HPS konsultan",
    "harga jasa konsultansi",
  ],
  authors: [{ name: "ferryops", url: "https://github.com/ferryops" }],
  creator: "ferryops",
  metadataBase: new URL("https://kalkurate.vercel.app"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kalkurate.vercel.app",
    siteName: "Kalkulator Billing Rate INKINDO 2025",
    title: "Kalkulator Billing Rate INKINDO 2025",
    description:
      "Hitung billing rate resmi berdasarkan standar INKINDO terbaru untuk tender jasa konsultansi konstruksi dan non-konstruksi.",
    images: [
      {
        url: "https://kalkurate.vercel.app/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Kalkulator Billing Rate INKINDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Billing Rate INKINDO 2025",
    description:
      "Alat bantu digital untuk menghitung billing rate berdasarkan pedoman resmi INKINDO 2025. Gratis, akurat, dan mobile friendly.",
    creator: "@ferryops",
    images: ["https://kalkurate.vercel.app/og-cover.png"],
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
