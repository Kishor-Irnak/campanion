import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results | companion – Real Campaign Screenshots",
  description:
    "Browse real ad campaign results from companion clients. Unedited Meta Ads screenshots showing leads, reach, and cost per result.",
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
