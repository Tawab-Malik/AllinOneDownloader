import type { Metadata } from "next";
import { Inter } from 'next/font/google'; // Corrected import
import "./globals.css";

const inter = Inter({ 
  variable: "--font-inter", // Fixed font variable usage
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "AllinOne Downloader",
  description: "This is Free App for Downoading reels and videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
