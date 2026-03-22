import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UPLUS Construction | 정밀 설계·시공 전문기업",
  description:
    "HACCP, GMP, 클린룸, HVAC, 턴키 건설 전문기업 유플러스건설. 제약·바이오·식품·물류 산업시설의 설계부터 시공, 밸리데이션까지.",
  keywords: [
    "UPLUS Construction",
    "유플러스건설",
    "HACCP",
    "GMP",
    "클린룸",
    "HVAC",
    "턴키건설",
    "산업시설",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
