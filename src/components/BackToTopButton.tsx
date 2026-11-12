"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const handleBackToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      className="hover:text-[#D4F85A] transition-colors flex items-center gap-1 font-bold text-slate-400 cursor-pointer"
    >
      <span>Back to Top</span>
      <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
    </button>
  );
}

