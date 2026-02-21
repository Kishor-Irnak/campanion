"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

/* ─────────────────────────────────────────────────────────────
   ADD YOUR RESULT SCREENSHOTS HERE
   ─────────────────────────────────────────────────────────────
   Each entry:
     src      → file in /public  (e.g. "/result3.jpeg")
     title    → short label shown on the card
     platform → shown as a badge
     tags     → used for filter tabs  ("Lead Gen" | "Sales" | "Reach" | "Meta Ads" | "Google Ads")
     metric   → headline stat to show on hover
   ─────────────────────────────────────────────────────────────
*/
const results = [
  {
    src: "/result1.jpeg",
    title: "Messaging Lead Gen Campaign",
    platform: "Meta Ads",
    tags: ["Lead Gen", "Meta Ads"],
    metric: "86 leads @ ₹102/lead",
  },
  {
    src: "/result2.jpeg",
    title: "Scale Campaign — 227 Ad Sets",
    platform: "Meta Ads",
    tags: ["Reach", "Meta Ads"],
    metric: "6.4L reach · ₹47K spent",
  },
  // ── ADD MORE BELOW ──
  // {
  //   src: "/result3.jpeg",
  //   title: "E-Commerce Sales Campaign",
  //   platform: "Meta Ads",
  //   tags: ["Sales", "Meta Ads"],
  //   metric: "₹4.2 ROAS",
  // },
];

const ALL_TAGS = [
  "All",
  "Lead Gen",
  "Sales",
  "Reach",
  "Meta Ads",
  "Google Ads",
];

export default function ResultsPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [lightbox, setLightbox] = useState<null | (typeof results)[0]>(null);

  const filtered =
    activeTag === "All"
      ? results
      : results.filter((r) => r.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-[#09090b] text-stone-100 font-sans antialiased">
      {/* ── Subtle grid bg ── */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid opacity-60" />

      {/* ── Top Nav bar ── */}
      <header className="sticky top-0 z-50 border-b border-stone-800/60 bg-stone-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-stone-300 hover:text-stone-100 transition-colors text-sm font-medium"
          >
            <Icon icon="solar:arrow-left-linear" className="text-base" />
            Back to Home
          </Link>

          <span className="text-stone-100 font-semibold tracking-tight">
            companion
            <span className="text-blue-400 ml-0.5">.</span>
          </span>

          <div className="flex items-center gap-2 text-xs text-stone-500">
            <Icon
              icon="solar:verified-check-bold"
              className="text-blue-400 text-base"
            />
            Live Screenshots
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32">
        {/* ── Page heading ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Icon icon="solar:graph-up-bold" className="text-sm" />
            Campaign Results
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-5">
            Real{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
              results.
            </span>{" "}
            Real clients.
          </h1>
          <p className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
            Every screenshot below is taken directly from a live client ad
            account — unedited, no mockups.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeTag === tag
                  ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-600 hover:text-stone-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ── Gallery grid ── */}
        {filtered.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((result, i) => (
              <div
                key={i}
                className="break-inside-avoid group relative cursor-pointer"
                onClick={() => setLightbox(result)}
              >
                {/* Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl" />

                <div className="relative bg-stone-950/80 border border-stone-800/80 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.01]">
                  {/* Mac-style top bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-800/60 bg-stone-900/60">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-[11px] text-stone-500 font-medium truncate max-w-[140px]">
                      {result.title}
                    </span>
                    <span className="text-[11px] bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold px-2 py-0.5 rounded-full shrink-0">
                      {result.platform}
                    </span>
                  </div>

                  {/* Screenshot */}
                  <div className="relative">
                    <Image
                      src={result.src}
                      alt={result.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      quality={90}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                      <div className="bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
                        {result.metric}
                      </div>
                      <div className="flex items-center gap-1.5 text-stone-300 text-xs">
                        <Icon icon="solar:maximize-square-linear" />
                        Click to expand
                      </div>
                    </div>
                  </div>

                  {/* Tags row */}
                  <div className="flex items-center gap-2 px-4 py-3 flex-wrap">
                    {result.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-stone-800 text-stone-400 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-stone-600">
            <Icon
              icon="solar:folder-open-line-duotone"
              className="text-5xl mx-auto mb-4 opacity-40"
            />
            <p>
              No results yet for{" "}
              <span className="text-stone-400">{activeTag}</span>.
            </p>
          </div>
        )}
      </main>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-100 bg-stone-950/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-stone-400 hover:text-stone-100 transition-colors bg-stone-800 hover:bg-stone-700 rounded-full p-2"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <Icon icon="solar:close-linear" className="text-xl" />
          </button>

          <div
            className="max-w-4xl w-full bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-700/60 bg-stone-900">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="text-sm text-stone-300 font-medium">
                {lightbox.title}
              </span>
              <span className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold px-2.5 py-0.5 rounded-full">
                {lightbox.platform}
              </span>
            </div>

            {/* Image */}
            <div className="relative max-h-[75vh] overflow-y-auto">
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                width={1200}
                height={900}
                className="w-full h-auto"
                quality={95}
              />
            </div>

            {/* Footer */}
            <div className="px-5 py-3.5 border-t border-stone-700/60 bg-stone-900 flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {lightbox.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-stone-800 text-stone-400 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-blue-400 text-sm font-semibold">
                {lightbox.metric}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
