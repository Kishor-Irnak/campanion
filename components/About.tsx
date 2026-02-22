import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 mb-32 grid md:grid-cols-2 gap-16 items-start"
    >
      <div>
        <h2 className="text-2xl font-semibold text-stone-100 tracking-tight mb-6 flex items-center gap-2">
          <Icon icon="solar:bolt-circle-linear" className="text-stone-500" />
          The Campaign Subscription
        </h2>
        <div className="space-y-6 text-stone-400 leading-relaxed">
          <p>
            Agencies are slow, expensive, and require long-term contracts.
            Freelancers are unreliable. We built <strong>companion</strong> to
            act as your pocket campaign creation team.
          </p>
          <p>
            For a flat rate of ₹699, you get high-quality campaign creation. You
            add your request to the queue, and our expert media buyers and
            copywriters build, structure, and deliver your Meta or Google ad
            campaign back to you within 48 hours.
          </p>
          <p>
            Once a campaign is delivered, we immediately start working on your
            next request. No hidden fees, no hourly billing, just pure output.
          </p>
        </div>
      </div>

      <div className="bg-stone-900/30 border border-stone-800 rounded-2xl p-6">
        <h3 className="text-sm font-medium text-stone-200 mb-4 uppercase tracking-wider">
          Why companion?
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1 text-stone-400">
              <span>Cost Efficiency vs Agencies</span>
              <span className="text-stone-500">95% cheaper</span>
            </div>
            <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
              <div className="h-full bg-stone-200 w-[95%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1 text-stone-400">
              <span>Turnaround Time</span>
              <span className="text-stone-500">24-48 hours</span>
            </div>
            <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
              <div className="h-full bg-stone-400 w-[90%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1 text-stone-400">
              <span>Campaign Quality</span>
              <span className="text-stone-500">Expert-level</span>
            </div>
            <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
              <div className="h-full bg-stone-200 w-[90%]"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-800">
          <h3 className="text-sm font-medium text-stone-200 mb-3">
            What's included in every request
          </h3>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs border border-stone-700 px-2 py-1 rounded bg-stone-800/50 text-stone-300">
              Ad Copywriting
            </span>
            <span className="text-xs border border-stone-700 px-2 py-1 rounded bg-stone-800/50 text-stone-300">
              Audience Targeting
            </span>
            <span className="text-xs border border-stone-700 px-2 py-1 rounded bg-stone-800/50 text-stone-300">
              Budget Setup
            </span>
            <span className="text-xs border border-stone-700 px-2 py-1 rounded bg-stone-800/50 text-stone-300">
              A/B Test Structure
            </span>
            <span className="text-xs border border-stone-700 px-2 py-1 rounded bg-stone-800/50 text-stone-300">
              Meta/Google Integration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
