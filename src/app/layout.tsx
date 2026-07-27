import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { RouteLoadingOverlay } from "@/components/RouteLoadingOverlay";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geekpedia.example.com"),
  title: {
    default: "Geekpedia — Franchise Viewing Guides",
    template: "%s | Geekpedia",
  },
  description:
    "Geekpedia is the definitive hub for franchise watch orders — MCU, DCU, Star Wars, Lord of the Rings, X-Men, and more. Noob mode for newcomers, Lore Master mode for completionists.",
  keywords: ["watch order", "MCU watch order", "DCU watch order", "Star Wars watch order", "movie order", "geekpedia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <RouteLoadingOverlay />
        <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-center gap-2 font-display text-2xl tracking-wide text-text">
              <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8" priority />
              GEEK<span className="text-[#ed1d24]">PEDIA</span>
            </Link>
            <nav className="flex items-center gap-5 text-sm text-text-dim">
              <Link href="/" className="hover:text-text transition-colors">
                Franchises
              </Link>
              <Link href="/about" className="hover:text-text transition-colors">
                About
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-8 text-center text-xs text-text-dim">
          <p>
            Curated from community research &amp; the author&apos;s own guides.{" "}
            <Link href="/about" className="underline hover:text-text">
              Read more
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
