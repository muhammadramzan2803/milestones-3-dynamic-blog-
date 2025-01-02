import type { Metadata } from "next";
import jetBrains_Mono from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = jetBrains_Mono({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geistSans",
  weight: "100 900",
});

const geistMono = jetBrains_Mono({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geistMono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Professional Next App",
  description: "Styled with Lato and Merriweather fonts",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}