import { Icon } from "@iconify/react";

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-32" id="pricing">
      <div className="flex flex-col items-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-stone-100 tracking-tight mb-6 text-center">
          One Flat Price.{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
            Genuine Value.
          </span>
        </h2>
        <p className="text-stone-400 text-lg max-w-2xl text-center leading-relaxed">
          Ditch the costly retainers and unpredictable hourly billing. Get an
          entire campaign creation team for a fraction of an agency's cost.
        </p>
      </div>

      <div className="max-w-lg mx-auto relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-2xl bg-blue-500/20 opacity-50 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl"></div>

        {/* Card */}
        <div className="bg-stone-950/80 backdrop-blur-md border border-stone-800/80 p-10 rounded-4xl relative shadow-2xl card-hover flex flex-col h-full">
          {/* Badge */}
          <div className="absolute top-0 right-8 -translate-y-1/2">
            <span className="bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md tracking-wide uppercase">
              Most Popular
            </span>
          </div>

          <div className="mb-8 border-b border-stone-800/80 pb-8 flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-semibold text-stone-100 mb-2">
                Standard Plan
              </h3>
              <p className="text-sm text-stone-400">
                Perfect for scaling brands.
              </p>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className="flex items-start justify-end gap-1">
                <span className="text-xl font-medium text-stone-400 mt-1">
                  ₹
                </span>
                <span className="text-5xl font-bold text-stone-100 tracking-tighter">
                  699
                </span>
              </div>
              <p className="text-sm text-stone-500 mt-1">
                per month / cancel anytime
              </p>
            </div>
          </div>

          <ul className="space-y-5 mb-10 flex-1">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-blue-500/10 p-1 rounded-full shrink-0">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-blue-500 text-xl"
                />
              </div>
              <div>
                <span className="text-stone-200 font-medium block">
                  1 Active Request at a time
                </span>
                <span className="text-sm text-stone-500">
                  We work on one task until it's perfect.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-blue-500/10 p-1 rounded-full shrink-0">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-blue-500 text-xl"
                />
              </div>
              <div>
                <span className="text-stone-200 font-medium block">
                  Unlimited Ad Platforms
                </span>
                <span className="text-sm text-stone-500">
                  Meta, Google, TikTok, LinkedIn & more.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-blue-500/10 p-1 rounded-full shrink-0">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-blue-500 text-xl"
                />
              </div>
              <p className="text-stone-200 font-medium pt-1">
                Ad Copywriting Included
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-blue-500/10 p-1 rounded-full shrink-0">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-blue-500 text-xl"
                />
              </div>
              <p className="text-stone-200 font-medium pt-1">
                Targeting & Account Structure Setup
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-blue-500/10 p-1 rounded-full shrink-0">
                <Icon
                  icon="solar:clock-circle-bold"
                  className="text-blue-500 text-xl"
                />
              </div>
              <div>
                <span className="text-stone-200 font-medium block">
                  24 - 48h Delivery Average
                </span>
                <span className="text-sm text-stone-500">
                  Fast turnarounds so you can launch faster.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-blue-500/10 p-1 rounded-full shrink-0">
                <Icon
                  icon="solar:refresh-circle-bold"
                  className="text-blue-500 text-xl"
                />
              </div>
              <div>
                <span className="text-stone-200 font-medium block">
                  Unlimited Revisions
                </span>
                <span className="text-sm text-stone-500">
                  We keep iterating until you're satisfied.
                </span>
              </div>
            </li>
          </ul>

          <a
            href="#contact"
            className="w-full relative group/btn flex items-center justify-center gap-2 bg-stone-100 text-stone-950 font-semibold py-4 rounded-xl hover:bg-white transition-all overflow-hidden mt-6"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Subscription
              <Icon
                icon="solar:arrow-right-linear"
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </span>
          </a>
          <p className="text-center text-xs text-stone-500 mt-4">
            No long-term contracts. Pause or cancel instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
