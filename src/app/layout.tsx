import type { Metadata } from "next";
import { Gochi_Hand } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const singleDay = Gochi_Hand({
  weight: "400",
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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
