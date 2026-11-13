"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Manages scroll behavior across page transitions:
 * 1. Prevents browser from retaining bottom-of-page scroll position when navigating to a new page.
 * 2. Instantly resets scroll position to (0, 0) on pathname change so pages open at the top.
 * 3. Keeps smooth scrolling for in-page hash links (e.g. href="#courses" or href="#admissions").
 */
export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable automatic browser scroll restoration on route changes
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Immediately snap to the top on page transition without bottom-to-top animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Enable smooth scrolling exclusively for in-page anchor links (e.g. href="#...")
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}
