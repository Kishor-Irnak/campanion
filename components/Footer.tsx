import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-4xl mx-auto px-6 pb-20">
      <div className="border-t border-stone-800/60 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
          {/* Brand & Tagline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/apple-touch-icon.png"
                alt="companion logo"
                className="w-6 h-6 rounded-md"
              />
              <span className="text-xl font-bold tracking-tighter text-stone-100 italic">
                companion
                <span className="text-blue-500 not-italic">.</span>
              </span>
            </div>
            <p className="text-xs text-stone-500 font-medium tracking-wide uppercase">
              The 24h rapid campaign launch system.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-stone-600 uppercase tracking-[0.2em] mb-1">
                Support
              </span>
              <a
                href="mailto:hello@evoc-companion.com"
                className="text-stone-400 hover:text-stone-100 transition-colors text-sm flex items-center gap-2 group"
              >
                <Icon
                  icon="solar:letter-line-duotone"
                  className="text-lg text-stone-600 group-hover:text-blue-400 transition-colors"
                />
                Email Support
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-stone-600 uppercase tracking-[0.2em] mb-1">
                Legal
              </span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-stone-400 hover:text-stone-100 transition-colors text-sm"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-stone-400 hover:text-stone-100 transition-colors text-sm"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-stone-600 font-medium">
            © {currentYear} companion. Built for brands that scale.
          </p>

          <div className="flex items-center gap-4 text-stone-600">
            <a href="#" className="hover:text-stone-400 transition-colors">
              <Icon icon="solar:camera-line-duotone" className="text-xl" />
            </a>
            <a href="#" className="hover:text-stone-400 transition-colors">
              <Icon
                icon="solar:share-circle-line-duotone"
                className="text-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
