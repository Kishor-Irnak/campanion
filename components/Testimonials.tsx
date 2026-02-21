import { Icon } from "@iconify/react";

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-32" id="pricing">
      {/* Premium Header */}
      <div className="flex flex-col items-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 bg-stone-900/50 border border-stone-800 text-stone-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
          Simple Pricing
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-stone-100 tracking-tight mb-5 text-center">
          One Flat Price. <span className="text-stone-500">Genuine Value.</span>
        </h2>
        <p className="text-stone-400 text-base max-w-xl text-center leading-relaxed">
          Ditch the costly retainers and unpredictable hourly billing. Get an
          entire campaign creation team for a fraction of an agency's cost.
        </p>
      </div>

      {/* Modern Minimalist Card */}
      <div className="relative group mx-auto w-full">
        {/* Subtle background glow */}
        <div className="absolute -inset-px rounded-3xl bg-linear-to-b from-stone-800 to-stone-900/0 opacity-50 blur-sm pointer-events-none"></div>

        <div className="relative bg-[#0a0a0a] backdrop-blur-xl border border-stone-800/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Left side: Content & Features */}
          <div className="p-8 md:p-12 flex-1 border-b md:border-b-0 md:border-r border-stone-800/60">
            <h3 className="text-2xl font-medium text-stone-100 mb-2">
              Standard Plan
            </h3>
            <p className="text-sm text-stone-400 mb-8 max-w-sm">
              The essential subscription for modern, scaling brands ready to
              launch campaigns faster.
            </p>

            <ul className="space-y-4">
              {[
                "1 Active Request at a time",
                "Platforms: Meta Ads & Google Ads",
                "Targeting & Account Structure Setup",
                "Ad Copywriting Included",
                "24 - 48h Delivery Average",
                "Unlimited Revisions",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    icon="solar:check-circle-line-duotone"
                    className="text-stone-500 text-lg shrink-0 mt-0.5"
                  />
                  <span className="text-stone-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Price & CTA */}
          <div className="p-8 md:p-12 bg-stone-900/20 md:w-80 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="mb-8">
              <span className="text-stone-500 font-medium text-lg align-top mr-1">
                ₹
              </span>
              <span className="text-6xl font-semibold text-stone-100 tracking-tighter">
                699
              </span>
              <span className="text-stone-500 text-sm block mt-2">
                per month
              </span>
            </div>

            <a
              href="#contact"
              className="w-full relative group/btn flex items-center justify-center gap-2 bg-stone-100 text-stone-950 text-sm font-semibold py-3.5 px-6 rounded-xl hover:bg-white hover:scale-[1.02] transition-all duration-300"
            >
              Start Subscription
              <Icon
                icon="solar:arrow-right-linear"
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </a>

            <p className="text-xs text-stone-500 mt-5 w-full text-center">
              Pause or cancel anytime. <br className="hidden md:block" /> No
              long-term contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
