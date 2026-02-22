"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="z-10 text-center max-w-4xl mx-auto mb-20 md:mb-32 px-6 relative">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-xs font-medium text-stone-300 mb-8 animate-fade-up">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        High-Converting Campaigns Active
      </div>

      <h1 className="animate-fade-up delay-100 font-bold text-stone-100 tracking-tight mb-6">
        <span className="block text-2xl sm:text-3xl md:text-4xl text-stone-400 font-semibold mb-3 uppercase tracking-widest">
          Profitable Campaign in 24 Hours
        </span>
        <span className="block text-2xl sm:text-3xl md:text-4xl text-stone-500 font-medium mb-4">
          — or Get Your Money Back
        </span>
        <span className="block text-4xl sm:text-5xl md:text-7xl text-stone-100 font-extrabold tracking-tighter">
          In Just{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400">
            ₹699/-
          </span>{" "}
          Only
        </span>
      </h1>

      <p className="leading-relaxed animate-fade-up delay-200 text-lg text-stone-400 max-w-xl mr-auto mb-6 ml-auto">
        Stop paying agencies thousands. Get expert, high-converting ad campaigns
        created for just ₹699/month. Pause or cancel anytime.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
        <a
          href="#pricing"
          className="w-full sm:w-auto px-6 py-3 bg-stone-100 text-stone-950 font-medium rounded-lg hover:bg-stone-200 transition-all flex items-center justify-center gap-2"
        >
          Start for ₹699/mo
          <Icon icon="solar:arrow-right-up-linear" />
        </a>
        <Link
          href="/results"
          className="sm:w-auto hover:bg-stone-800 hover:text-stone-100 transition-all flex items-center justify-center gap-2 font-medium text-stone-300 bg-stone-900 w-full border-stone-800 border rounded-lg pt-3 pr-6 pb-3 pl-6"
        >
          <Icon icon="solar:chart-bold" />
          See Results
        </Link>
      </div>

      {/* Social proof stat */}
      <div className="mt-8 flex items-center justify-center gap-3 animate-fade-up delay-300">
        <div className="h-px w-12 bg-stone-800"></div>
        <div className="flex items-center gap-2 text-stone-500 text-sm">
          <Icon icon="solar:graph-up-bold" className="text-green-500" />
          <span>
            <span className="text-stone-300 font-bold">₹10Cr+</span> managed in
            ad spend
          </span>
        </div>
        <div className="h-px w-12 bg-stone-800"></div>
      </div>
    </section>
  );
}
