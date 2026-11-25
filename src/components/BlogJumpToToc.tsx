"use client";

import { List } from "lucide-react";

export default function BlogJumpToToc() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Check for desktop vs mobile table of contents container
    const desktopEl = document.getElementById("desktop-table-of-contents");
    const mobileEl = document.getElementById("mobile-table-of-contents");

    // Select the currently visible one based on offsetParent
    const target =
      desktopEl && desktopEl.offsetParent !== null
        ? desktopEl
        : mobileEl && mobileEl.offsetParent !== null
        ? mobileEl
        : document.getElementById("table-of-contents");

    if (target) {
      const offset = 95;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Subtle pulse feedback on the target
      target.classList.add("ring-2", "ring-[#1E6DEB]", "transition-all", "duration-300");
      setTimeout(() => {
        target.classList.remove("ring-2", "ring-[#1E6DEB]");
      }, 1800);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to Table of Contents"
      className="inline-flex items-center gap-1.5 text-xs font-black text-[#D4F85A] hover:text-white px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 transition-all cursor-pointer"
    >
      <List className="w-3.5 h-3.5" />
      <span>Jump to Contents</span>
    </button>
  );
}
