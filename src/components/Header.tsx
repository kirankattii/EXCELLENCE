"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Phone,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none flex justify-center px-3 sm:px-6">
      {/* Floating Navbar with balanced height */}
      <nav
        className={`w-full flex items-center justify-between pointer-events-auto transition-all duration-300 ease-out relative ${
          isScrolled
            ? "max-w-6xl mt-2 sm:mt-2.5 h-12 sm:h-[58px] md:h-[62px] pl-1.5 sm:pl-2 pr-2.5 sm:pr-3 rounded-full bg-white/90 backdrop-blur-xl shadow-[0_12px_36px_-10px_rgba(10,17,24,0.14)] border border-slate-200/80 text-slate-900"
            : "max-w-7xl mt-2 sm:mt-4 h-12 sm:h-[58px] md:h-[62px] pl-1.5 sm:pl-2 pr-2.5 sm:pr-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-sm"
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer"
          aria-label="Excellence Education Academy"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-13 md:h-13 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Excellence Education Academy Crest"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
              <span
                className={`font-black text-sm sm:text-lg md:text-xl tracking-tight leading-none transition-colors ${
                  isScrolled ? "text-slate-950" : "text-white"
                }`}
              >
                Excellence
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] font-black text-[#0A1118] bg-[#D4F85A] px-1.5 py-0.5 rounded-full uppercase tracking-wider leading-none">
                CTH UK
              </span>
            </div>
            <span
              className={`text-[8.5px] sm:text-[10.5px] font-semibold uppercase tracking-wider mt-0.5 transition-colors leading-none ${
                isScrolled ? "text-slate-500" : "text-white/80"
              }`}
            >
              Education Academy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          className={`hidden lg:flex items-center gap-7 text-[14px] font-semibold transition-colors ${
            isScrolled ? "text-slate-700" : "text-white/90"
          }`}
        >
          <Link
            href="/"
            className={`transition-colors py-1 ${
              isScrolled ? "hover:text-[#1E6DEB]" : "hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors py-1 ${
              pathname === "/about"
                ? isScrolled
                  ? "text-[#1E6DEB] font-bold"
                  : "text-[#D4F85A] font-bold"
                : isScrolled
                  ? "hover:text-[#1E6DEB]"
                  : "hover:text-white"
            }`}
          >
            About
          </Link>

          <Link
            href="/courses"
            className={`transition-colors py-1 ${
              pathname === "/courses"
                ? isScrolled
                  ? "text-[#1E6DEB] font-bold"
                  : "text-[#D4F85A] font-bold"
                : isScrolled
                  ? "hover:text-[#1E6DEB]"
                  : "hover:text-white"
            }`}
          >
            Courses
          </Link>

          <Link
            href="/gallery"
            className={`transition-colors py-1 ${
              pathname === "/gallery"
                ? isScrolled
                  ? "text-[#1E6DEB] font-bold"
                  : "text-[#D4F85A] font-bold"
                : isScrolled
                  ? "hover:text-[#1E6DEB]"
                  : "hover:text-white"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/blogs"
            className={`transition-colors py-1 ${
              pathname === "/blogs"
                ? isScrolled
                  ? "text-[#1E6DEB] font-bold"
                  : "text-[#D4F85A] font-bold"
                : isScrolled
                  ? "hover:text-[#1E6DEB]"
                  : "hover:text-white"
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/why-us"
            className={`transition-colors py-1 ${
              pathname === "/why-us"
                ? isScrolled
                  ? "text-[#1E6DEB] font-bold"
                  : "text-[#D4F85A] font-bold"
                : isScrolled
                  ? "hover:text-[#1E6DEB]"
                  : "hover:text-white"
            }`}
          >
            Why Us
          </Link>
          <Link
            href="/contact"
            className={`transition-colors py-1 ${
              pathname === "/contact"
                ? isScrolled
                  ? "text-[#1E6DEB] font-bold"
                  : "text-[#D4F85A] font-bold"
                : isScrolled
                  ? "hover:text-[#1E6DEB]"
                  : "hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+918329208271"
            className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full font-bold text-xs transition-colors ${
              isScrolled
                ? "text-slate-700 border border-slate-200 hover:bg-slate-50"
                : "text-white/95 border border-white/30 hover:bg-white/15"
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#D4F85A]" />
            <span>+91 8329208271</span>
          </a>

          {/* Electric Lime Pill Button: Strictly hidden on mobile, visible on sm+ */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-xs sm:text-sm shadow-[0_4px_16px_rgba(212,248,90,0.45)] hover:shadow-[0_6px_22px_rgba(212,248,90,0.55)] transition-all active:scale-95 hover:scale-105"
          >
            <span>Apply Now</span>
            <div className="w-4 h-4 rounded-full bg-[#0A1118] flex items-center justify-center">
              <ArrowUpRight className="w-2.5 h-2.5 text-[#D4F85A]" />
            </div>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors focus-visible:outline-2 ${
              isScrolled
                ? "text-[#1E6DEB] bg-[#F0F6FE] border border-[#1E6DEB]/25 hover:bg-[#e1edfe] focus-visible:outline-[#1E6DEB]"
                : "text-white bg-white/15 border border-white/25 hover:bg-white/25 focus-visible:outline-white"
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl border border-slate-200 shadow-2xl p-5 space-y-4 text-slate-900"
            >
              <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Courses Offered
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Campus Gallery
                </Link>
                <Link
                  href="/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Industry Blogs
                </Link>
                <Link
                  href="/why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Why Join Us
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:+918329208271"
                  className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1E6DEB]" />
                  <span>Call: +91 8329208271</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#D4F85A] text-[#0A1118] font-black text-xs py-3 rounded-full shadow-md hover:bg-[#c7f445]"
                >
                  <span>Enquire for Admissions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
