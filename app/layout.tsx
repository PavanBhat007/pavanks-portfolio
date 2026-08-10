import "./global.css";
import { Hanken_Grotesk, Oswald } from "next/font/google"

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap"
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
