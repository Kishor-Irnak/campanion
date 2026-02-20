import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section className="z-10 text-center max-w-4xl mx-auto mb-20 md:mb-32 px-6 relative">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-xs font-medium text-stone-300 mb-8 animate-fade-up">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Unlimited Campaigns Active
      </div>

      <h1 className="md:text-7xl leading-[1.1] animate-fade-up delay-100 text-5xl font-semibold text-stone-100 tracking-tighter mb-6">
        Unlimited{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-stone-100 to-stone-500">
          campaigns
        </span>{" "}
        for a flat fee.
      </h1>

      <p className="leading-relaxed animate-fade-up delay-200 text-lg text-stone-400 max-w-xl mr-auto mb-10 ml-auto">
        Stop paying agencies thousands. Get unlimited, high-converting ad
        campaigns created for just ₹699/month. Pause or cancel anytime.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
        <a
          href="#pricing"
          className="w-full sm:w-auto px-6 py-3 bg-stone-100 text-stone-950 font-medium rounded-lg hover:bg-stone-200 transition-all flex items-center justify-center gap-2"
        >
          Start for ₹699/mo
          <Icon icon="solar:arrow-right-up-linear" />
        </a>
        <a
          href="#work"
          className="sm:w-auto hover:bg-stone-800 hover:text-stone-100 transition-all flex items-center justify-center gap-2 font-medium text-stone-300 bg-stone-900 w-full border-stone-800 border rounded-lg pt-3 pr-6 pb-3 pl-6"
        >
          <Icon icon="solar:eye-linear" />
          See Recent Campaigns
        </a>
      </div>
    </section>
  );
}
