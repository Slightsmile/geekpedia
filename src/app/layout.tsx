import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import Link from "next/link";
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
  metadataBase: new URL("https://watchorder.example.com"),
  title: {
    default: "Watch Order — Franchise Viewing Guides",
    template: "%s | Watch Order",
  },
  description:
    "The definitive hub for franchise watch orders — MCU, DCU, Star Wars, Lord of the Rings, X-Men, and more. Easy Mode for newcomers, Deep Dive mode for completionists.",
  keywords: ["watch order", "MCU watch order", "DCU watch order", "Star Wars watch order", "movie order"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="font-display text-2xl tracking-wide text-text">
              WATCH<span className="text-[#ed1d24]">ORDER</span>
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
