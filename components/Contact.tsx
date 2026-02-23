"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type FormState = {
  name: string;
  email: string;
  company: string;
  platform: string;
  target: string;
  budget: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  platform: "",
  target: "",
  budget: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.platform || !form.target) return;

    setStatus("loading");
    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        submittedAt: serverTimestamp(),
      });
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      console.error("Firestore error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 mb-32" id="contact">
      <div className="relative bg-[#0a0a0a] backdrop-blur-xl border border-stone-800/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-linear-to-tr from-blue-900/5 to-transparent pointer-events-none"></div>

        {/* Left Side: Copy & Info */}
        <div className="p-8 md:p-12 flex-1 border-b md:border-b-0 md:border-r border-stone-800/60 relative z-10 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 bg-stone-900/50 border border-stone-800 text-stone-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-stone-100 tracking-tight mb-4">
              Stop paying <br />
              <span className="text-stone-500">agency fees.</span>
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-8 relative">
              Get started in seconds — just ping us on WhatsApp and we&apos;ll
              have your campaign live in 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-stone-400 text-sm">
              <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                <Icon
                  icon="solar:clock-circle-line-duotone"
                  className="text-stone-300 text-lg"
                />
              </div>
              <span>24-48h turnaround time</span>
            </div>
            <div className="flex items-center gap-3 text-stone-400 text-sm">
              <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                <Icon
                  icon="solar:shield-check-line-duotone"
                  className="text-stone-300 text-lg"
                />
              </div>
              <span>Growth Assurance Credit</span>
            </div>
            <div className="flex items-center gap-3 text-stone-400 text-sm">
              <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                <Icon
                  icon="solar:bill-cross-line-duotone"
                  className="text-stone-300 text-lg"
                />
              </div>
              <span>Cancel anytime, no questions</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12 flex-1 bg-stone-900/10 relative z-10">
          {/* ── Success state ── */}
          {status === "success" ? (
            <div className="flex flex-col h-full justify-between gap-6 animate-fade-up">
              {/* Top: icon + headline */}
              <div className="flex flex-col items-center text-center gap-4 pt-4">
                {/* Pulsing glow ring + icon */}
                <div className="relative flex items-center justify-center w-20 h-20">
                  <span className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
                  <span className="absolute inset-0 rounded-full bg-green-500/10 border border-green-500/30" />
                  <Icon
                    icon="solar:check-circle-bold"
                    className="relative text-green-400 text-4xl z-10"
                  />
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  Submission received
                </div>

                <div>
                  <p className="text-stone-100 font-bold text-2xl mb-2 tracking-tight">
                    You&apos;re all set! 🎉
                  </p>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                    We&apos;ve received your details. Our team will send your
                    personalised onboarding link within{" "}
                    <span className="text-stone-300 font-medium">24 hours</span>
                    .
                  </p>
                </div>
              </div>

              {/* Middle: what happens next */}
              <div className="bg-stone-950/60 border border-stone-800/70 rounded-2xl p-5 space-y-3">
                <p className="text-[11px] font-semibold tracking-widest text-stone-600 uppercase mb-1">
                  What happens next
                </p>
                {[
                  {
                    icon: "solar:letter-bold-duotone",
                    text: "Onboarding email lands in your inbox",
                  },
                  {
                    icon: "solar:bolt-bold-duotone",
                    text: "Campaign goes live within 24 hours",
                  },
                  {
                    icon: "solar:graph-up-bold-duotone",
                    text: "Track results in your dashboard",
                  },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                      <Icon icon={icon} className="text-green-400 text-base" />
                    </div>
                    <span className="text-stone-400 text-sm">{text}</span>
                  </div>
                ))}
              </div>

              {/* Bottom: reset */}
              <button
                onClick={() => setStatus("idle")}
                className="w-full py-3 rounded-xl border border-stone-800 text-stone-500 text-sm font-medium hover:border-stone-700 hover:text-stone-300 transition-all"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={set("name")}
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all placeholder:text-stone-700 font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all placeholder:text-stone-700 font-medium"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="company"
                  className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1 flex items-center justify-between"
                >
                  <span>Company Name</span>
                  <span className="text-[10px] text-stone-600 normal-case tracking-normal font-medium">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  id="company"
                  value={form.company}
                  onChange={set("company")}
                  className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all placeholder:text-stone-700 font-medium"
                  placeholder="Your Brand"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 flex flex-col">
                  <label
                    htmlFor="platform"
                    className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1"
                  >
                    Ad Platform
                  </label>
                  <div className="relative">
                    <select
                      id="platform"
                      required
                      value={form.platform}
                      onChange={set("platform")}
                      className="w-full appearance-none bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all font-medium"
                    >
                      <option value="" disabled className="text-stone-700">
                        Select Platform
                      </option>
                      <option
                        value="meta"
                        className="bg-stone-900 text-stone-200"
                      >
                        Meta Ads
                      </option>
                      <option
                        value="google"
                        className="bg-stone-900 text-stone-200"
                      >
                        Google Ads
                      </option>
                    </select>
                    <Icon
                      icon="solar:alt-arrow-down-linear"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 flex flex-col">
                  <label
                    htmlFor="target"
                    className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1"
                  >
                    Campaign Target
                  </label>
                  <div className="relative">
                    <select
                      id="target"
                      required
                      value={form.target}
                      onChange={set("target")}
                      className="w-full appearance-none bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all font-medium"
                    >
                      <option value="" disabled className="text-stone-700">
                        Select Target
                      </option>
                      <option
                        value="lead"
                        className="bg-stone-900 text-stone-200"
                      >
                        Lead Generation
                      </option>
                      <option
                        value="sales"
                        className="bg-stone-900 text-stone-200"
                      >
                        Sales / E-commerce
                      </option>
                    </select>
                    <Icon
                      icon="solar:alt-arrow-down-linear"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label
                  htmlFor="budget"
                  className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase ml-1"
                >
                  Daily Ad Spend Budget
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 font-medium">
                    ₹
                  </span>
                  <input
                    type="number"
                    id="budget"
                    value={form.budget}
                    onChange={set("budget")}
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-xl pl-8 pr-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all placeholder:text-stone-700 font-medium"
                    placeholder="2000"
                  />
                </div>
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-red-400 text-xs text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Primary WhatsApp CTA */}
              <a
                href="https://wa.me/919548833953?text=I%20want%20to%20start%20a%20campaign%20for%20%E2%82%B9699%2Fmo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#22c55e] text-white text-sm font-semibold mt-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="#fff"
                  aria-hidden="true"
                >
                  <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.47 2.02 7.77L.5 31.5l7.93-2.07A15.42 15.42 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28a13.4 13.4 0 01-6.84-1.87l-.49-.29-5.1 1.34 1.36-4.96-.32-.51A13.38 13.38 0 012.5 16C2.5 8.54 8.54 2.5 16 2.5S29.5 8.54 29.5 16 23.46 28.5 16 28.5zm7.34-10.13c-.4-.2-2.38-1.17-2.75-1.3-.37-.13-.63-.2-.9.2s-1.03 1.3-1.27 1.57c-.23.27-.47.3-.87.1a11 11 0 01-3.23-1.99 12.1 12.1 0 01-2.24-2.79c-.23-.4-.02-.62.18-.82.18-.18.4-.47.6-.7.2-.23.27-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.32-.78-.65-.67-.9-.68h-.76c-.27 0-.7.1-1.06.5s-1.4 1.37-1.4 3.34 1.44 3.87 1.64 4.14c.2.27 2.83 4.32 6.86 6.06.96.41 1.71.66 2.3.84.96.31 1.84.26 2.53.16.77-.12 2.38-.97 2.72-1.91.33-.94.33-1.74.23-1.91-.1-.17-.37-.27-.77-.47z" />
                </svg>
                Chat on WhatsApp — Get Started
              </a>

              {/* Divider */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex-1 h-px bg-stone-800"></div>
                <span className="text-stone-600 text-xs">
                  or fill the form below
                </span>
                <div className="flex-1 h-px bg-stone-800"></div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full relative group/btn flex items-center justify-center gap-2 bg-stone-900 border border-stone-700 text-stone-300 text-sm font-semibold py-3.5 rounded-xl hover:bg-stone-800 hover:text-stone-100 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Icon
                      icon="solar:refresh-circle-linear"
                      className="animate-spin text-base"
                    />
                    Submitting…
                  </>
                ) : (
                  <>
                    Send via Form
                    <Icon
                      icon="solar:arrow-right-linear"
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
