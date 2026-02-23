import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "companion | High-Converting Ad Campaigns for ₹699/mo",
  description:
    "Stop paying agency retainers. Get expert, high-converting ad campaigns created for a flat fee of ₹699 per month. Pause or cancel anytime.",
  keywords: [
    "Ad Campaigns",
    "Expert Marketing",
    "Media Buying",
    "Marketing Subscription",
    "companion",
  ],
  authors: [{ name: "companion" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "companion | High-Converting Ad Campaigns for ₹699/mo",
    description:
      "Get expert, high-converting ad campaigns created for a flat fee of ₹699 per month.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          defer
        ></script>
      </head>
      <body className="text-zinc-400 overflow-x-hidden selection:bg-zinc-800 selection:text-white bg-[#09090b] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
