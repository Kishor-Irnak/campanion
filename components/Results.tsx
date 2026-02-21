import Image from "next/image";
import { Icon } from "@iconify/react";

const stats = [
  { icon: "solar:chart-bold", label: "Leads Generated", value: "500+" },
  { icon: "solar:target-bold", label: "Avg. Cost per Lead", value: "₹102" },
  {
    icon: "solar:users-group-rounded-bold",
    label: "Total Reach",
    value: "6.4L+",
  },
];

export default function Results() {
  return (
    <section id="results" className="max-w-6xl mx-auto px-6 mb-32">
      {/* Heading */}
      <div className="flex flex-col items-center mb-14 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
          <Icon icon="solar:graph-up-bold" className="text-sm" />
          Real Results
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-stone-100 tracking-tight mb-4">
          Proof that{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
            it works.
          </span>
        </h2>
        <p className="text-stone-400 text-lg max-w-xl leading-relaxed">
          Real campaign data from real clients. These aren&apos;t mockups —
          these are live ad account screenshots.
        </p>
      </div>

      {/* Stat pills */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-3 bg-stone-900/80 border border-stone-800 rounded-full px-5 py-2.5"
          >
            <Icon icon={s.icon} className="text-blue-400 text-lg shrink-0" />
            <span className="text-stone-400 text-sm">{s.label}</span>
            <span className="text-stone-100 font-semibold text-sm">
              {s.value}
            </span>
          </div>
        ))}
      </div>

      {/* Image cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            src: "/result1.jpeg",
            alt: "Meta Ads campaign results — messaging conversations at ₹100–₹137 cost per result",
            label: "Lead Gen Campaign",
            badge: "Meta Ads",
          },
          {
            src: "/result2.jpeg",
            alt: "Meta Ads campaign results — 227 ad sets, ₹47,153 total spend, 645K reach",
            label: "Scale Campaign",
            badge: "Meta Ads",
          },
        ].map((img) => (
          <div key={img.src} className="relative group">
            {/* Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-blue-500/15 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl" />

            {/* Card */}
            <div className="relative bg-stone-950/80 backdrop-blur-md border border-stone-800/80 rounded-2xl overflow-hidden shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-stone-800/60">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-stone-500 font-medium">
                  {img.label}
                </span>
                <span className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold px-2 py-0.5 rounded-full">
                  {img.badge}
                </span>
              </div>

              {/* Screenshot */}
              <div className="relative w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  quality={90}
                />
                {/* Subtle bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-950/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-center text-xs text-stone-600 mt-6">
        Screenshots taken directly from client Meta Ads Manager accounts.
        Results may vary based on product, offer, and market.
      </p>
    </section>
  );
}
