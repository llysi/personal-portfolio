import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alysa Zhao",
  description: "Portfolio website for Alysa Zhao - Computer Science student at Texas A&M University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Momo+Trust+Display&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${poppins.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning>
          <div className="max-w-5xl mx-auto px-4 w-full flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
          </div>
          <Footer />
      </body>
    </html>
  );
}
