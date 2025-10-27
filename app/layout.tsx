import type { Metadata } from "next";
import { Inter } from 'next/font/google'; // Corrected import
import "./globals.css";
import HeaderNew from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ 
  variable: "--font-inter", // Fixed font variable usage
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "AllinOne Downloader",
  description: "This is Free App for Downoading Instagram reels and videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="Q6nHj_OrnijOXIEO2ppfl0a6mHevKx5MpJXGU58wiEo" />
      </head>
      <body className={`${inter.variable} antialiased`}>
         <HeaderNew/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
