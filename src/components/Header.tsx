"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-lg p-1"
          aria-label="Excellence Education Academy"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Excellence Education Academy Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#19364f] leading-none">
                Excellence
              </span>
              <span className="text-[10px] font-bold text-[#BB9331] bg-[#BB9331]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                CTH UK
              </span>
            </div>
            <span className="text-[11px] font-semibold text-zinc-600 tracking-wider uppercase mt-0.5">
              Culinary &amp; Hospitality Academy
            </span>
          </div>
        </Link>

        {/* Center Nav Menu: Home, About, Courses, Gallery, Blogs, Why Us, Contact */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-700"
          aria-label="Main Navigation"
        >
          <Link
            href="/"
            className="hover:text-[#19364f] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#19364f] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            About
          </Link>
          <Link
            href="#courses"
            className="hover:text-[#19364f] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Courses
          </Link>
          <Link
            href="#gallery"
            className="hover:text-[#19364f] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Gallery
          </Link>
          <Link
            href="#blogs"
            className="hover:text-[#19364f] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Blogs
          </Link>
          <Link
            href="#why-join-us"
            className="hover:text-[#19364f] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Why Us
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#19364f] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-[#19364f] hover:bg-[#132c40] text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(25,54,79,0.2)] hover:shadow-[0_6px_20px_rgba(25,54,79,0.28)] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#19364f]"
          >
            <span>Enquire Now</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </div>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-zinc-700 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-[#19364f]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-5 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2 text-sm font-medium text-zinc-700">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              Courses Offered
            </Link>
            <Link
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="#why-join-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              Why Join Us
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="pt-2 border-t border-zinc-100">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-[#19364f] text-white font-medium text-sm py-3 px-5 rounded-full shadow-md hover:bg-[#132c40] transition-colors"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
