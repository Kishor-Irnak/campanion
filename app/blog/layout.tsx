import type { Metadata } from "next";

const SITE_URL = "https://companion.evoclabs.com";

export const metadata: Metadata = {
  title: "Blog — Ad Strategy & Marketing Insights",
  description:
    "Real strategies and breakdowns from the companion team managing ₹10Cr+ in Meta & Google ad spend. Learn how to run profitable campaigns that generate leads and sales.",
  alternates: {
    canonical: `${SITE_URL}/blog/`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog/`,
    title: "companion Blog — Meta & Google Ad Strategy",
    description:
      "Expert-level breakdowns on Meta Ads, Google Ads, retargeting, copywriting, and scaling profitable campaigns.",
    siteName: "companion",
    images: [
      {
        url: `${SITE_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: "companion Blog",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "companion Blog — Ad Strategy & Marketing Insights",
    description:
      "Real strategies from the team managing ₹10Cr+ in Meta & Google ad spend.",
    images: [`${SITE_URL}/android-chrome-512x512.png`],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
