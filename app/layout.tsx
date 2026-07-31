import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

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
    default: "LWAR Companies",
    template: "%s | LWAR Companies",
  },

  description:
    "LWAR Companies connects technology, artificial intelligence, digital growth, education, and research to engineer intelligent transformation.",

  keywords: [
    "LWAR Companies",
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
      name: "LWAR Companies",
    },
  ],

  creator: "LWAR Companies",
  publisher: "LWAR Companies",

  openGraph: {
    title: "LWAR Companies",
    description:
      "Engineering Intelligence. Enabling Transformation.",
    type: "website",
    locale: "en_US",
    siteName: "LWAR Companies",
    images: [
      {
        url: "/images/brand/lwar-logo.png",
        width: 1200,
        height: 630,
        alt: "LWAR Companies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LWAR Companies",
    description:
      "Engineering Intelligence. Enabling Transformation.",
    images: ["/images/brand/lwar-logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("lwar-theme");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${geist.className} antialiased`}>
        <Header />

        <main>{children}</main>

        <Footer />

        <WhatsAppButton />

        <Analytics />
      </body>
    </html>
  );
}