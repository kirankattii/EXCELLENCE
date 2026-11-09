"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Phone, Mail, MapPin } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80">
      {/* Top Utility Bar */}
      <div className="bg-[#19364f] text-white py-1.5 px-4 sm:px-8 text-xs border-b border-[#BB9331]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-3 text-zinc-300">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
              <span>Goa, India</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#BB9331] font-semibold">
              Goa&apos;s Only CTH Accredited Culinary & Hospitality Institute
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-300">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-[#BB9331] transition-colors focus-visible:outline-2 focus-visible:outline-[#BB9331] rounded"
            >
              <Phone className="w-3 h-3 text-[#BB9331]" aria-hidden="true" />
              <span>+91 98765 43210</span>
            </a>
            <span className="text-white/30">•</span>
            <a
              href="mailto:admissions@exceleduacademy.com"
              className="flex items-center gap-1.5 hover:text-[#BB9331] transition-colors focus-visible:outline-2 focus-visible:outline-[#BB9331] rounded"
            >
              <Mail className="w-3 h-3 text-[#BB9331]" aria-hidden="true" />
              <span className="hidden xs:inline">admissions@exceleduacademy.com</span>
              <span className="xs:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
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
              Culinary & Hospitality Academy
            </span>
          </div>
        </Link>

        {/* Center Nav Menu: Home, About, Courses, Gallery, Blogs, Contact */}
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
            href="#why-join-us"
            className="hover:text-[#19364f] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Why Join Us
          </Link>
          <Link
            href="#accreditation"
            className="hover:text-[#19364f] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            CTH Accreditation
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#19364f] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-full px-2"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA */}
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
      </header>

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
              href="#why-join-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              Why Join Us
            </Link>
            <Link
              href="#accreditation"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              CTH Accreditation
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
    </div>
  );
}
