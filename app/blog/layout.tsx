import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | companion — Ad Strategy & Marketing Insights",
  description:
    "Real strategies and breakdowns from the companion team. Learn how to run profitable Meta and Google ad campaigns that generate leads and sales.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
