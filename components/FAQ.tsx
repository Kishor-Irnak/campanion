"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    q: "What is Evoc Companion?",
    a: "Evoc Companion is a 24-hour rapid campaign launch system where we build, launch, and optimize a high-converting campaign for just ₹699 — focused on generating leads or sales fast.",
  },
  {
    q: 'What do you mean by "Profitable Campaign"?',
    a: (
      <>
        A profitable campaign means:
        <ul className="mt-3 space-y-1.5 list-disc list-outside ml-4 marker:text-stone-600">
          <li>
            <span className="text-stone-300 font-medium">For sales:</span> Cost
            per purchase is lower than your target margin.
          </li>
          <li>
            <span className="text-stone-300 font-medium">For leads:</span> Cost
            per lead falls within your industry benchmark.
          </li>
        </ul>
        <p className="mt-3">We align expected benchmarks before launching.</p>
      </>
    ),
  },
  {
    q: "How can you deliver results in just 24 hours?",
    a: (
      <>
        We use:
        <ul className="mt-3 space-y-1.5 list-disc list-outside ml-4 marker:text-stone-600">
          <li>Pre-tested creative frameworks</li>
          <li>Winning audience structures</li>
          <li>Proven campaign architecture</li>
          <li>Fast execution systems</li>
        </ul>
        <p className="mt-3 text-stone-300 font-medium">
          This is not experimental. It&apos;s a structured sprint model.
        </p>
      </>
    ),
  },
  {
    q: "Is ₹699 the total cost?",
    a: "₹699 is our GrowthShot execution fee. Ad spend is separate and paid directly from your ad account.",
  },
  {
    q: "What platforms do you run ads on?",
    a: (
      <>
        We currently run GrowthShot campaigns on:
        <ul className="mt-3 space-y-1.5 list-disc list-outside ml-4 marker:text-stone-600">
          <li>Meta Ads (Facebook + Instagram)</li>
          <li>Lead Generation campaigns</li>
          <li>Conversion / Sales campaigns</li>
        </ul>
      </>
    ),
  },
  {
    q: "What if I don't get results?",
    a: (
      <>
        If your campaign does not meet the pre-defined benchmark within 24
        hours, we initiate our{" "}
        <span className="text-blue-400 font-medium">
          Growth Assurance Credit
        </span>
        . Instead of calling it a &quot;refund&quot;, we offer:
        <ul className="mt-3 space-y-1.5 list-disc list-outside ml-4 marker:text-stone-600">
          <li>50% performance credit</li>
          <li>Redeemable on your next campaign</li>
          <li>Valid for 7 days</li>
        </ul>
        <p className="mt-3">
          Because we believe in improving performance — not abandoning
          campaigns.
        </p>
      </>
    ),
  },
  {
    q: "Why not 100% refund?",
    a: (
      <>
        Because campaigns depend on multiple variables:
        <ul className="mt-3 space-y-1.5 list-disc list-outside ml-4 marker:text-stone-600">
          <li>Product-market fit</li>
          <li>Offer strength</li>
          <li>Landing page quality</li>
          <li>Pricing</li>
          <li>Competition</li>
        </ul>
        <p className="mt-3">
          We take responsibility for{" "}
          <span className="text-stone-300 font-medium">execution</span>. You
          take responsibility for{" "}
          <span className="text-stone-300 font-medium">
            product &amp; offer
          </span>
          . This keeps the model fair.
        </p>
      </>
    ),
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onClick,
  index,
}: {
  q: string;
  a: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <div
      className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-blue-500/40 bg-blue-500/5"
          : "border-stone-800/80 bg-stone-950/60 hover:border-stone-700/80"
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span
            className={`shrink-0 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isOpen
                ? "bg-blue-500 text-white"
                : "bg-stone-800 text-stone-500 group-hover:bg-stone-700"
            }`}
          >
            {index + 1}
          </span>
          <span
            className={`text-base font-medium transition-colors duration-200 ${
              isOpen
                ? "text-stone-100"
                : "text-stone-300 group-hover:text-stone-100"
            }`}
          >
            {q}
          </span>
        </div>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-blue-500/20 text-blue-400 rotate-45"
              : "bg-stone-800 text-stone-500 rotate-0 group-hover:bg-stone-700"
          }`}
        >
          <Icon icon="solar:add-linear" className="text-base" />
        </span>
      </button>

      {/* Answer panel — CSS max-height transition */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-6 pt-0">
          {/* divider */}
          <div className="h-px bg-stone-800/60 mb-5" />
          <div className="text-stone-400 text-sm leading-relaxed pl-10">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 mb-32">
      {/* Heading */}
      <div className="flex flex-col items-center mb-14 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
          <Icon icon="solar:chat-square-like-bold" className="text-sm" />
          FAQ
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-stone-100 tracking-tight mb-4">
          Got{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
            Questions?
          </span>
        </h2>
        <p className="text-stone-400 text-lg max-w-xl leading-relaxed">
          Everything you need to know about GrowthShot and how we work.
        </p>
      </div>

      {/* Accordion list */}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            index={i}
            q={faq.q}
            a={faq.a}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
