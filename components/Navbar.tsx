import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-stone-800/50 bg-stone-950/80 backdrop-blur-md">
      <div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
        <Link
          href="/#home"
          className="flex items-center gap-2 group text-lg font-bold text-stone-100 tracking-tight"
        >
          CAMPANION.
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="#about"
            className="hover:text-stone-100 transition-colors"
          >
            How It Works
          </Link>
          <Link href="#work" className="hover:text-stone-100 transition-colors">
            Our Work
          </Link>
          <Link
            href="#experience"
            className="hover:text-stone-100 transition-colors"
          >
            Process
          </Link>
          <Link
            href="#pricing"
            className="hover:text-stone-100 transition-colors text-blue-400"
          >
            ₹699/mo Plan
          </Link>
        </div>

        <Link
          href="#contact"
          className="hidden md:flex items-center gap-2 hover:bg-stone-200 transition-colors text-xs font-bold text-stone-950 bg-stone-100 rounded-full pt-2 pr-4 pb-2 pl-4 uppercase tracking-wide"
        >
          Subscribe Now
          <Icon icon="solar:arrow-right-linear" />
        </Link>

        <button className="md:hidden text-stone-100">
          <Icon icon="solar:hamburger-menu-linear" width="24" />
        </button>
      </div>
    </nav>
  );
}
