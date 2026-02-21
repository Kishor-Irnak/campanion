"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-stone-800/50 bg-stone-950/80 backdrop-blur-md">
      <div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
        <Link
          href="/#home"
          className="flex items-center gap-2 group text-lg font-bold text-stone-100 tracking-tight"
        >
          companion.
        </Link>

        {/* Desktop Links */}
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-stone-100 p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            icon={
              isOpen
                ? "solar:close-circle-linear"
                : "solar:hamburger-menu-linear"
            }
            width="28"
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-stone-950/95 backdrop-blur-xl border-b border-stone-800/50 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-5">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-stone-300 hover:text-stone-100"
          >
            How It Works
          </Link>
          <Link
            href="#work"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-stone-300 hover:text-stone-100"
          >
            Our Work
          </Link>
          <Link
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-stone-300 hover:text-stone-100"
          >
            Process
          </Link>
          <Link
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-blue-400"
          >
            ₹699/mo Plan
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-stone-100 text-stone-950 rounded-xl py-3.5 mt-2 text-sm font-bold transition-transform active:scale-95"
          >
            Subscribe Now <Icon icon="solar:arrow-right-linear" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
