import type { Metadata } from "next";
import { Gamja_Flower, Single_Day } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const font1 = Gamja_Flower({
  weight: "400",
  subsets: ["latin"],
  variable: "--display-font",
});

const font2 = Single_Day({
  weight: ["400"],
  // subsets: ["latin"],
  variable: "--body-font",
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
    <html lang="pt" className={`${font1.variable} ${font2.className}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
