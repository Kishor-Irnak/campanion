import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-32" id="contact">
      <div className="relative bg-[#0a0a0a] backdrop-blur-xl border border-stone-800/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-linear-to-tr from-blue-900/5 to-transparent pointer-events-none"></div>

        {/* Left Side: Copy & Info */}
        <div className="p-8 md:p-12 flex-1 border-b md:border-b-0 md:border-r border-stone-800/60 relative z-10 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 bg-stone-900/50 border border-stone-800 text-stone-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-stone-100 tracking-tight mb-4">
              Stop paying <br />
              <span className="text-stone-500">agency fees.</span>
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-8 relative">
              Subscribe to companion today and start submitting campaign
              requests immediately. Fill this out, and we'll send your
              onboarding link.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-stone-400 text-sm">
              <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                <Icon
                  icon="solar:clock-circle-line-duotone"
                  className="text-stone-300 text-lg"
                />
              </div>
              <span>24-48h turnaround time</span>
            </div>
            <div className="flex items-center gap-3 text-stone-400 text-sm">
              <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                <Icon
                  icon="solar:shield-check-line-duotone"
                  className="text-stone-300 text-lg"
                />
              </div>
              <span>Growth Assurance Credit</span>
            </div>
            <div className="flex items-center gap-3 text-stone-400 text-sm">
              <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                <Icon
                  icon="solar:bill-cross-line-duotone"
                  className="text-stone-300 text-lg"
                />
              </div>
              <span>Cancel anytime, no questions</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12 flex-1 bg-stone-900/10 relative z-10">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all placeholder:text-stone-700 font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all placeholder:text-stone-700 font-medium"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="company"
                className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1 flex items-center justify-between"
              >
                <span>Company Name</span>
                <span className="text-[10px] text-stone-600 normal-case tracking-normal font-medium">
                  (optional)
                </span>
              </label>
              <input
                type="text"
                id="company"
                className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all placeholder:text-stone-700 font-medium"
                placeholder="Your Brand"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 flex flex-col">
                <label
                  htmlFor="platform"
                  className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1"
                >
                  Ad Platform
                </label>
                <div className="relative">
                  <select
                    id="platform"
                    defaultValue=""
                    className="w-full appearance-none bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all font-medium"
                  >
                    <option value="" disabled className="text-stone-700">
                      Select Platform
                    </option>
                    <option
                      value="meta"
                      className="bg-stone-900 text-stone-200"
                    >
                      Meta Ads
                    </option>
                    <option
                      value="google"
                      className="bg-stone-900 text-stone-200"
                    >
                      Google Ads
                    </option>
                  </select>
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label
                  htmlFor="target"
                  className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1"
                >
                  Campaign Target
                </label>
                <div className="relative">
                  <select
                    id="target"
                    defaultValue=""
                    className="w-full appearance-none bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all font-medium"
                  >
                    <option value="" disabled className="text-stone-700">
                      Select Target
                    </option>
                    <option
                      value="lead"
                      className="bg-stone-900 text-stone-200"
                    >
                      Lead Generation
                    </option>
                    <option
                      value="sales"
                      className="bg-stone-900 text-stone-200"
                    >
                      Sales / E-commerce
                    </option>
                  </select>
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5 flex flex-col">
              <label
                htmlFor="budget"
                className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1"
              >
                Daily Ad Spend Budget
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 font-medium">
                  ₹
                </span>
                <input
                  type="number"
                  id="budget"
                  className="w-full bg-stone-950/50 border border-stone-800 rounded-xl pl-8 pr-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all placeholder:text-stone-700 font-medium"
                  placeholder="2000"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full relative group/btn flex items-center justify-center gap-2 bg-stone-100 text-stone-950 text-sm font-semibold mt-6 py-4 rounded-xl hover:bg-white hover:scale-[1.01] transition-all duration-300"
            >
              Start for ₹699
              <Icon
                icon="solar:arrow-right-linear"
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
