import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://companion.evoclabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "companion | High-Converting Ad Campaigns for ₹699/mo",
    template: "%s | companion",
  },
  description:
    "Stop paying agency retainers. Get expert, high-converting Meta & Google ad campaigns created for a flat fee of ₹699 per month. Profitable in 24 hours or your money back.",
  keywords: [
    "Meta Ads India",
    "Google Ads India",
    "Ad campaign service",
    "Digital marketing subscription",
    "Facebook Ads ₹699",
    "Marketing agency alternative",
    "High converting ads",
    "Lead generation ads",
    "companion marketing",
    "Evoc companion",
  ],
  authors: [{ name: "companion", url: SITE_URL }],
  creator: "companion",
  publisher: "companion",

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Favicons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "companion",
    title: "companion | High-Converting Ad Campaigns for ₹699/mo",
    description:
      "Stop paying agency retainers. Get expert Meta & Google ad campaigns for just ₹699/month. Profitable in 24 hours — or your money back.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "companion — High-Converting Ad Campaigns",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary",
    title: "companion | High-Converting Ad Campaigns for ₹699/mo",
    description:
      "Expert Meta & Google ad campaigns for ₹699/month. No retainers, no contracts. Profitable in 24 hours or money back.",
    images: ["/android-chrome-512x512.png"],
    creator: "@evoclabs",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add Google Search Console verify tag here if you have it)
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "companion",
      description: "High-converting Meta & Google ad campaigns for ₹699/month.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/blog/` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "companion",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "companion Ad Campaign Subscription",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Expert Meta Ads and Google Ads campaign creation for a flat monthly subscription of ₹699. Delivered within 24–48 hours.",
      offers: {
        "@type": "Offer",
        price: "699",
        priceCurrency: "INR",
        priceValidUntil: "2027-01-01",
        availability: "https://schema.org/InStock",
      },
    },
  ],
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="text-zinc-400 overflow-x-hidden selection:bg-zinc-800 selection:text-white bg-[#09090b] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
