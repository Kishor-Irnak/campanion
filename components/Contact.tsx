import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto px-6 mb-20" id="contact">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-stone-100 tracking-tight mb-4">
          Ready to save on agency fees?
        </h2>
        <p className="text-stone-400">
          Subscribe to Campanion today and start submitting campaign requests
          immediately. Fill this out, and we'll send the onboarding link.
        </p>
      </div>

      <form className="space-y-4 mb-16">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="text-xs font-medium text-stone-500 uppercase"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-stone-900/50 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 outline-none focus:ring-2 focus:ring-stone-600 focus:border-transparent transition-all placeholder:text-stone-700"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-xs font-medium text-stone-500 uppercase"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-stone-900/50 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 outline-none focus:ring-2 focus:ring-stone-600 focus:border-transparent transition-all placeholder:text-stone-700"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label
            htmlFor="company"
            className="text-xs font-medium text-stone-500 uppercase"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="w-full bg-stone-900/50 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 outline-none focus:ring-2 focus:ring-stone-600 focus:border-transparent transition-all placeholder:text-stone-700"
            placeholder="Your Brand"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="message"
            className="text-xs font-medium text-stone-500 uppercase"
          >
            Which platforms do you need campaigns for?
          </label>
          <textarea
            id="message"
            rows={3}
            className="w-full bg-stone-900/50 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 outline-none focus:ring-2 focus:ring-stone-600 focus:border-transparent transition-all placeholder:text-stone-700"
            placeholder="Meta, Google Ads, TikTok, etc..."
          ></textarea>
        </div>
        <button
          type="button"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
        >
          Get Started For ₹699
          <Icon icon="solar:arrow-right-linear" />
        </button>
      </form>
    </section>
  );
}
