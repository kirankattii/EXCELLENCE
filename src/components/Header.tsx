"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, MapPin } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-8">
      {/* Floating Modern Pill Navbar */}
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-full border border-zinc-200/80 shadow-[0_2px_20px_rgba(0,0,0,0.04)] px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full p-1"
          aria-label="Excellence Education Academy"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Excellence Education Academy Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#19364f]">
              Excellence
            </span>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-[#BB9331] bg-[#BB9331]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Academy
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600"
          aria-label="Main Navigation"
        >
          <Link
            href="#about"
            className="hover:text-zinc-950 transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            About
          </Link>
          <Link
            href="#programs"
            className="hover:text-zinc-950 transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Programs
          </Link>
          <Link
            href="#why-us"
            className="hover:text-zinc-950 transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Why Us
          </Link>
          <Link
            href="#methodology"
            className="hover:text-zinc-950 transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Methodology
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-zinc-950 transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Reviews
          </Link>
        </nav>

        {/* Right CTA & Location Tag */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1 text-xs text-zinc-500 font-medium bg-zinc-100/80 px-3 py-1.5 rounded-full border border-zinc-200/50">
            <MapPin className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
            <span>Goa, India</span>
          </div>

          <Link
            href="#inquire"
            className="inline-flex items-center gap-1.5 bg-[#19364f] hover:bg-[#132c40] text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(25,54,79,0.2)] hover:shadow-[0_6px_20px_rgba(25,54,79,0.28)] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#19364f]"
          >
            <span>Book counseling</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </div>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-zinc-700 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-[#19364f]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl border border-zinc-200/80 shadow-xl p-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-medium text-zinc-700">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              About Academy
            </Link>
            <Link
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              Programs & Courses
            </Link>
            <Link
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              Why Choose Us
            </Link>
            <Link
              href="#methodology"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              4-Step Methodology
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              Student Reviews
            </Link>
          </div>
          <div className="pt-2 border-t border-zinc-100">
            <Link
              href="#inquire"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-[#19364f] text-white font-medium text-sm py-3 px-5 rounded-full shadow-md hover:bg-[#132c40] transition-colors"
            >
              <span>Book Academic Counseling</span>
              <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
