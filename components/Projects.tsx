"use client";
import { Icon } from "@iconify/react";

export default function Projects() {
  return (
    <section className="max-w-6xl mr-auto mb-32 ml-auto pr-6 pl-6" id="work">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-semibold text-stone-100 tracking-tight">
          Campaign Requests We Ship
        </h2>
        <a
          href="#"
          className="text-sm text-stone-400 hover:text-stone-100 flex items-center gap-1 transition-colors"
        >
          View More Examples <Icon icon="solar:arrow-right-linear" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <article className="group bg-stone-900/20 border border-stone-800 rounded-2xl overflow-hidden hover:border-stone-600 transition-colors">
          <div className="h-64 bg-stone-800 overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-br from-stone-800 to-stone-900"></div>
            <div
              className="group-hover:translate-y-[-10px] transition-transform duration-500 bg-stone-950 border-stone-700 rounded-t-xl border-t border-r border-l pt-4 pr-4 pb-4 pl-4 absolute top-8 right-8 bottom-0 left-8 shadow-2xl"
              role="button"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-stone-500/50"></div>
              </div>
              <div className="flex gap-4 gap-x-4 gap-y-4 items-end">
                <div className="w-1/3 h-12 bg-stone-800 rounded flex items-center justify-center text-xs text-stone-500">
                  Ad Set 1
                </div>
                <div className="w-1/3 h-12 bg-stone-800 rounded flex items-center justify-center text-xs text-stone-500">
                  Ad Set 2
                </div>
                <div className="w-1/3 h-12 bg-stone-800 rounded flex items-center justify-center text-xs text-stone-500">
                  Ad Set 3
                </div>
              </div>
              <div className="mt-4 w-full h-16 bg-stone-800 rounded flex items-center justify-center text-xs text-stone-500 animate-pulse">
                Conversion Tracking Loaded
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-stone-100 mb-1">
                  Meta Advantage+ Setup
                </h3>
                <p className="text-sm text-stone-500">E-Commerce Retargeting</p>
              </div>
              <div className="flex gap-3">
                <div className="text-xs px-2 py-1 bg-green-900/30 text-green-400 rounded-full border border-green-800/50">
                  Delivered in 24h
                </div>
              </div>
            </div>
            <p className="leading-relaxed text-sm text-stone-400 mb-6">
              A client requested a full Meta Advantage+ campaign structured for
              their Q1 sale. We configured the pixel events, wrote 5 variations
              of ad copy, set the dynamic catalog parameters, and launched the
              draft into their ad account ready to be published.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-stone-300 bg-stone-800 border-stone-700 border rounded-md pt-1 pr-2 pb-1 pl-2">
                Meta Ads
              </span>
              <span className="text-xs text-stone-300 bg-stone-800 border-stone-700 border rounded-md pt-1 pr-2 pb-1 pl-2">
                Advantage+
              </span>
              <span className="text-xs text-stone-300 bg-stone-800 border-stone-700 border rounded-md pt-1 pr-2 pb-1 pl-2">
                Copywriting
              </span>
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="group bg-stone-900/20 border border-stone-800 rounded-2xl overflow-hidden hover:border-stone-600 transition-colors">
          <div className="h-64 bg-stone-800 overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-bl from-stone-800 to-black"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 border border-stone-700/50 rounded-lg bg-stone-950/80 backdrop-blur-sm p-4 group-hover:scale-105 transition-transform duration-500">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-3 w-20 bg-stone-700 rounded"></div>
                  <Icon
                    icon="solar:magnifer-linear"
                    className="text-blue-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="h-6 bg-stone-800/50 rounded border border-dashed border-stone-700 w-full flex items-center px-2 text-[10px] text-stone-500">
                    Exact Match: [software]
                  </div>
                  <div className="h-6 bg-stone-800/50 rounded border border-dashed border-stone-700 w-full flex items-center px-2 text-[10px] text-stone-500">
                    Phrase Match: "saas tools"
                  </div>
                  <div className="h-6 bg-stone-800/50 rounded border border-dashed border-stone-700 w-3/4 flex items-center px-2 text-[10px] text-stone-500">
                    -Negative Keyword
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-stone-100 mb-1">
                  Google Search Build-out
                </h3>
                <p className="text-sm text-stone-500">SaaS B2B Lead Gen</p>
              </div>
              <div className="flex gap-3">
                <div className="text-xs px-2 py-1 bg-green-900/30 text-green-400 rounded-full border border-green-800/50">
                  Delivered in 48h
                </div>
              </div>
            </div>
            <p className="leading-relaxed text-sm text-stone-400 mb-6">
              A comprehensive Google Search campaign build. We conducted keyword
              research, built tightly themed ad groups with exact/phrase
              matching, added extensive negative keyword lists, and wrote RSA
              (Responsive Search Ad) copy with site-link extensions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded-md bg-stone-800 text-stone-300 border border-stone-700">
                Google Ads
              </span>
              <span className="text-xs text-stone-300 bg-stone-800 border-stone-700 border rounded-md pt-1 pr-2 pb-1 pl-2">
                Search Intent
              </span>
              <span className="text-xs text-stone-300 bg-stone-800 border-stone-700 border rounded-md pt-1 pr-2 pb-1 pl-2">
                Keywords
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
