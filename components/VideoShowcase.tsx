"use client";

export default function VideoShowcase() {
  return (
    <section className="relative px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Glow behind card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/15 via-transparent to-emerald-500/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none"></div>

          {/* Card */}
          <div className="relative rounded-2xl border border-stone-800 overflow-hidden shadow-2xl transition-all duration-500 hover:border-stone-700">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            {/* 16:9 responsive wrapper */}
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src="https://www.youtube.com/embed/TBTwYQdy4h8?autoplay=1&mute=1&loop=1&playlist=TBTwYQdy4h8&controls=1&rel=0&modestbranding=1&vq=hd1080"
                title="Evoc Companion"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
