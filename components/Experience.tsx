import { Icon } from "@iconify/react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 mb-32">
      <h2 className="text-2xl font-semibold text-stone-100 tracking-tight mb-12 flex items-center gap-2">
        <Icon icon="solar:rocket-linear" className="text-stone-500" />
        How Campanion Works
      </h2>

      <div className="relative border-l border-stone-800 ml-3 space-y-12">
        {/* Step 1 */}
        <div className="relative pl-8">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-stone-100 ring-4 ring-stone-950"></span>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
            <h3 className="text-lg font-semibold text-stone-100">
              1. Subscribe & Connect
            </h3>
          </div>
          <div className="text-sm text-stone-400 mb-4 font-medium">
            Onboarding takes 10 minutes
          </div>
          <ul className="list-disc list-outside ml-4 text-sm text-stone-400 space-y-2 leading-relaxed marker:text-stone-600">
            <li>Sign up for the flat ₹699/month plan.</li>
            <li>
              Give our team standard agency access to your ad accounts (Meta,
              Google, TikTok, etc).
            </li>
            <li>
              Get invited to your dedicated client portal/Trello board where you
              can submit tasks.
            </li>
          </ul>
        </div>

        {/* Step 2 */}
        <div className="relative pl-8">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-stone-500 ring-4 ring-stone-950"></span>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
            <h3 className="text-lg font-medium text-stone-200">
              2. Submit Campaign Requests
            </h3>
          </div>
          <div className="text-sm text-stone-400 mb-4 font-medium">
            Unlimited Queue
          </div>
          <ul className="list-disc list-outside ml-4 text-sm text-stone-400 space-y-2 leading-relaxed marker:text-stone-600">
            <li>Add as many campaign requests as you want to your queue.</li>
            <li>
              Just tell us the goal, the budget, and any creatives you have. We
              handle the targeting, copy, and structure.
            </li>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="relative pl-8">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-stone-950"></span>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
            <h3 className="text-lg font-medium text-stone-200">
              3. We Build. You Approve.
            </h3>
          </div>
          <div className="text-sm text-stone-400 mb-4 font-medium">
            24 - 48 Hour Delivery
          </div>
          <ul className="list-disc list-outside ml-4 text-sm text-stone-400 space-y-2 leading-relaxed marker:text-stone-600">
            <li>
              We build the campaigns natively inside your ad accounts as drafts.
            </li>
            <li>
              Review the setup. If you like it, hit publish. If you want
              changes, let us know and we'll revise it.
            </li>
            <li>
              Once completed, we instantly start working on the next request in
              your queue.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
