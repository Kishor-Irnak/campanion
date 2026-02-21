import { Icon } from "@iconify/react";

export default function TechStack() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <p className="text-center text-xs font-semibold text-stone-500 mb-10 uppercase tracking-[0.2em]">
        Campaigns we build for you
      </p>
      <div className="relative overflow-hidden opacity-70 grayscale hover:grayscale-0 transition-all duration-500 py-2">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#09090b] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#09090b] to-transparent z-10"></div>

        <div className="flex animate-ticker whitespace-nowrap min-w-max">
          {/* Main items */}
          <div className="flex gap-x-12 px-6">
            <div className="flex items-center gap-2.5 text-stone-300 font-medium">
              <Icon
                icon="solar:monitor-camera-line-duotone"
                width="24"
                className="text-blue-500"
              />{" "}
              Meta Lead Gen
            </div>
            <div className="flex items-center gap-2.5 text-stone-300 font-medium">
              <Icon
                icon="solar:cart-large-line-duotone"
                width="24"
                className="text-blue-500"
              />{" "}
              Meta E-commerce
            </div>
            <div className="flex items-center gap-2.5 text-stone-300 font-medium">
              <Icon
                icon="solar:magnifer-line-duotone"
                width="24"
                className="text-green-500"
              />{" "}
              Google Search
            </div>
            <div className="flex items-center gap-2.5 text-stone-300 font-medium">
              <Icon
                icon="solar:video-frame-play-horizontal-line-duotone"
                width="24"
                className="text-red-500"
              />{" "}
              Google P-Max
            </div>
            <div className="flex items-center gap-2.5 text-stone-300 font-medium">
              <Icon
                icon="solar:users-group-rounded-line-duotone"
                width="24"
                className="text-blue-500"
              />{" "}
              Meta Retargeting
            </div>
          </div>

          {/* Duplicated items for seamless loop */}
          <div className="flex gap-x-12 px-6">
            <div className="flex items-center gap-2.5 text-stone-300 font-medium">
              <Icon
                icon="solar:monitor-camera-line-duotone"
                width="24"
                className="text-blue-500"
              />{" "}
              Meta Lead Gen
            </div>
            <div className="flex items-center gap-2.5 text-stone-300 font-medium">
              <Icon
                icon="solar:cart-large-line-duotone"
                width="24"
                className="text-blue-500"
              />{" "}
              Meta E-commerce
            </div>
            <div className="flex items-center gap-2.5 text-stone-300 font-medium">
              <Icon
                icon="solar:magnifer-line-duotone"
                width="24"
                className="text-green-500"
              />{" "}
              Google Search
            </div>
            <div className="flex items-center gap-2.5 text-stone-300 font-medium">
              <Icon
                icon="solar:video-frame-play-horizontal-line-duotone"
                width="24"
                className="text-red-500"
              />{" "}
              Google P-Max
            </div>
            <div className="flex items-center gap-2.5 text-stone-300 font-medium">
              <Icon
                icon="solar:users-group-rounded-line-duotone"
                width="24"
                className="text-blue-500"
              />{" "}
              Meta Retargeting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
