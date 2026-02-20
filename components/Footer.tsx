import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="max-w-xl mx-auto px-6 mb-20">
      <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
        <div>© 2026 companion. All rights reserved.</div>
        <div className="flex gap-6">
          <a
            href="mailto:hello@companion.com"
            className="hover:text-stone-200 transition-colors flex items-center gap-1"
          >
            <Icon icon="solar:letter-linear" /> Email Support
          </a>
          <a
            href="#"
            className="hover:text-stone-200 transition-colors flex items-center gap-1"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-stone-200 transition-colors flex items-center gap-1"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
