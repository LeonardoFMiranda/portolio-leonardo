import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/app/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Miranda | Desenvolvedor Full Stack",
  description:
    "Portfólio de Leonardo Miranda, desenvolvedor especializado em React, Next.js e aplicações modernas.",
  keywords: ["React", "Next.js", "Desenvolvedor", "Frontend"],
  authors: [{ name: "Leonardo Miranda" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-mono antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
