import "./globals.css";
import { Lora, Pinyon_Script,  } from 'next/font/google'
import localFont from "next/font/local";


export const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lora",
  display: "swap",
});

export const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "swap",
});

export const afrah = localFont({
  src: "./fonts/afrah.otf",
  variable: "--font-afrah",
  display: "swap",
});


export const symphony = localFont({
  src: "./fonts/symphony.woff2",
  variable: "--font-symphony",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${lora.variable} ${pinyon.variable} ${afrah.variable} ${symphony.variable}`} >
      <body className="h-screen w-screen">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
