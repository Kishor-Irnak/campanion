"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const posts = [
  {
    slug: "meta-ads-lead-gen-strategy-2024",
    title: "The Meta Ads Lead Gen Blueprint That Gets ₹100 CPL or Less",
    excerpt:
      "Most businesses waste ₹10,000+ before getting a single lead. Here's the exact campaign structure we use to consistently hit sub-₹120 cost-per-lead for our clients across industries.",
    category: "Meta Ads",
    readTime: "6 min read",
    date: "Feb 20, 2026",
    icon: "solar:monitor-camera-line-duotone",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    tags: ["Meta Ads", "Lead Gen", "Strategy"],
  },
  {
    slug: "why-your-google-ads-are-burning-money",
    title: "Why Your Google Ads Are Burning Money (And How to Fix It in 48h)",
    excerpt:
      "Broad match keywords, no negative keyword list, no conversion tracking — the three silent killers of Google Ads ROI. Here's the audit checklist our team runs on every new account.",
    category: "Google Ads",
    readTime: "8 min read",
    date: "Feb 18, 2026",
    icon: "solar:magnifer-line-duotone",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    tags: ["Google Ads", "Audit", "ROI"],
  },
  {
    slug: "meta-retargeting-funnel-guide",
    title: "The 3-Layer Meta Retargeting Funnel Every Brand Needs",
    excerpt:
      "Cold audiences are expensive. Your warm audience is sitting there, ready to convert — you're just not talking to them right. Here's the exact 3-layer funnel architecture we deploy for every e-commerce client.",
    category: "Meta Ads",
    readTime: "7 min read",
    date: "Feb 15, 2026",
    icon: "solar:users-group-rounded-line-duotone",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    tags: ["Meta Ads", "Retargeting", "E-commerce"],
  },
  {
    slug: "google-pmax-vs-search-which-to-use",
    title: "Google Performance Max vs Search: When to Use Each",
    excerpt:
      "Performance Max is not a replacement for Search campaigns — it's a complement. We've managed both for dozens of clients and here's our decision framework for when to use each.",
    category: "Google Ads",
    readTime: "5 min read",
    date: "Feb 12, 2026",
    icon: "solar:video-frame-play-horizontal-line-duotone",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    tags: ["Google Ads", "P-Max", "Strategy"],
  },
  {
    slug: "ad-copy-formula-that-converts",
    title: "The 4-Part Ad Copy Formula That Works on Both Meta and Google",
    excerpt:
      "After writing thousands of ads, we've distilled everything into a 4-part formula: Hook → Problem → Solution → Proof. See exactly how we apply it with real examples from our client campaigns.",
    category: "Copywriting",
    readTime: "9 min read",
    date: "Feb 10, 2026",
    icon: "solar:pen-new-round-line-duotone",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    tags: ["Copywriting", "Meta Ads", "Google Ads"],
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-[#09090b] text-stone-100 font-sans antialiased">
      {/* Grid bg */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid opacity-50" />

      {/* Navbar */}
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
            companion<span className="text-blue-400">.</span>
          </span>
          <div className="text-xs text-stone-500 font-medium">Blog</div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Icon icon="solar:document-text-bold" className="text-sm" />
            Insights & Strategy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            The{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
              companion
            </span>{" "}
            Blog
          </h1>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            Real strategies, real breakdowns — from the team managing ₹10Cr+ in
            Meta & Google ad spend.
          </p>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="block group mb-10">
          <div className="relative bg-[#0a0a0a] border border-stone-800/60 rounded-3xl overflow-hidden hover:border-stone-700/60 transition-all duration-300 p-8 md:p-12">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-900/5 to-transparent pointer-events-none" />
            <div className="relative flex flex-col md:flex-row gap-8 items-start">
              <div
                className={`shrink-0 w-14 h-14 rounded-2xl ${featured.bg} border ${featured.border} flex items-center justify-center`}
              >
                <Icon
                  icon={featured.icon}
                  className={`text-3xl ${featured.color}`}
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${featured.bg} border ${featured.border} ${featured.color} uppercase tracking-wider`}
                  >
                    {featured.category}
                  </span>
                  <span className="text-stone-600 text-xs">
                    {featured.date}
                  </span>
                  <span className="text-stone-600 text-xs">
                    · {featured.readTime}
                  </span>
                  <span className="text-xs bg-stone-800 text-stone-400 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-stone-100 mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-stone-400 leading-relaxed mb-6 max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                  Read Article
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="h-full bg-stone-950/60 border border-stone-800/60 rounded-2xl p-6 hover:border-stone-700/60 transition-all duration-300 hover:bg-stone-900/40 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`shrink-0 w-11 h-11 rounded-xl ${post.bg} border ${post.border} flex items-center justify-center`}
                  >
                    <Icon
                      icon={post.icon}
                      className={`text-2xl ${post.color}`}
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${post.bg} border ${post.border} ${post.color} uppercase tracking-widest`}
                    >
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-stone-600">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-100 mb-3 group-hover:text-blue-300 transition-colors leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] bg-stone-800 text-stone-500 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold mt-auto">
                  Read Article
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
