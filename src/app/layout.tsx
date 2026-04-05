import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PinriseBanner from '@/components/PinriseBanner';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nefes Pilates | Beşiktaş, İstanbul",
  description:
    "Nefes Pilates - Beşiktaş'ın kalbinde profesyonel pilates ve yoga stüdyosu. Bedeninizi ve zihninizi yeniden keşfedin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}        <PinriseBanner />
              
{/* Pinrise Sales Banner */}
<script src="https://portal.pinrise.io/api/portal/banner.js?id=92bd0a60-8923-4330-8a6c-05bc8df4166b" defer></script>
      </body>
    </html>
  );
}
