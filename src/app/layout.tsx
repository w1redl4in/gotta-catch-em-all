import type { Metadata } from "next";
import { Amatic_SC } from "next/font/google";
import "./globals.css";

const singleDay = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Gotta Catch 'Em All",
  description: "Pokemons are everywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={singleDay.className}>
      <body>{children}</body>
    </html>
  );
}
