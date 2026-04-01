import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { companyData } from "@/data/companyData";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: companyData.siteName,
  description: companyData.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-dvh bg-background text-foreground antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
