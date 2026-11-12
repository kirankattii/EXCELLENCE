"use client";

import { AnimatedArrow } from "@/components/ui/AnimatedArrow";

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
      <AnimatedArrow direction="up" size={14} boxClassName="h-4 w-4" />
    </button>
  );
}

