import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import WhatsAppButton from "../components/layout/WhatsAppButton";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lwar.group"),

  title: {
    default: "LWAR Group",
    template: "%s | LWAR Group",
  },

  description:
    "LWAR Group connects technology, artificial intelligence, digital growth, education, and research to engineer intelligent transformation.",

  keywords: [
    "LWAR Group",
    "technology",
    "artificial intelligence",
    "digital transformation",
    "education",
    "research",
    "professional training",
    "strategic advisory",
  ],

  authors: [
    {
      name: "LWAR Group",
    },
  ],

  creator: "LWAR Group",
  publisher: "LWAR Group",

  openGraph: {
    title: "LWAR Group",
    description:
      "Engineering Intelligence. Enabling Transformation.",
    type: "website",
    locale: "en_US",
    siteName: "LWAR Group",
    images: [
      {
        url: "/images/brand/lwar-logo.png",
        width: 1200,
        height: 630,
        alt: "LWAR Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LWAR Group",
    description:
      "Engineering Intelligence. Enabling Transformation.",
    images: ["/images/brand/lwar-logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <Header />

        <main>{children}</main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}