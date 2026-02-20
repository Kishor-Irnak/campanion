import { Icon } from "@iconify/react";

export default function TechStack() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <p className="text-center text-sm font-medium text-stone-500 mb-8 uppercase tracking-widest">
        Campaigns we build for you
      </p>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center gap-2 text-stone-300">
          <Icon icon="solar:monitor-camera-linear" width="24" /> Meta Ads
        </div>
        <div className="flex items-center gap-2 text-stone-300">
          <Icon icon="solar:video-frame-linear" width="24" /> TikTok Ads
        </div>
        <div className="flex items-center gap-2 text-stone-300">
          <Icon icon="solar:magnifer-linear" width="24" /> Google Search
        </div>
        <div className="flex items-center gap-2 text-stone-300">
          <Icon icon="solar:cart-large-linear" width="24" /> Google Shopping
        </div>
        <div className="flex items-center gap-2 text-stone-300">
          <Icon icon="solar:letter-linear" width="24" /> Email Flows
        </div>
        <div className="flex items-center gap-2 text-stone-300">
          <Icon icon="solar:users-group-rounded-linear" width="24" /> LinkedIn
          B2B
        </div>
      </div>
    </section>
  );
}
