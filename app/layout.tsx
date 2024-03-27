import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const openSans = Noto_Sans_KR({
  subsets: ["latin", "cyrillic"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "MyTop - наш лучший топ",
  description: "Рейтинг лучших курсов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
