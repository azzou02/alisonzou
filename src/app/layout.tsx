import type { Metadata } from "next";
import { Josefin_Sans } from 'next/font/google'; 
import "./globals.css";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "alison zou",
  description: "my portolio for ui/ux, visual, and software work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${josefin.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
