"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, GraduationCap } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-[#19364f]/10">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#19364f] text-white text-xs sm:text-sm py-2 px-4 sm:px-8 border-b border-[#BB9331]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-medium text-white/90">
            <span className="flex items-center gap-1.5 text-[#BB9331]">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Goa, India</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:flex items-center gap-1 text-white/90">
              <GraduationCap className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
              <span>Admissions Open for Academic Year 2025–2026</span>
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs text-white/90">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-[#BB9331] transition-colors focus-visible:outline-2 focus-visible:outline-[#BB9331] rounded"
              aria-label="Call Admissions Helpline"
            >
              <Phone className="w-3 h-3 text-[#BB9331]" aria-hidden="true" />
              <span>+91 98765 43210</span>
            </a>
            <span className="text-white/30">•</span>
            <a
              href="mailto:info@exceleduacademy.com"
              className="flex items-center gap-1.5 hover:text-[#BB9331] transition-colors focus-visible:outline-2 focus-visible:outline-[#BB9331] rounded"
              aria-label="Email Admissions Office"
            >
              <Mail className="w-3 h-3 text-[#BB9331]" aria-hidden="true" />
              <span className="hidden xs:inline">info@exceleduacademy.com</span>
              <span className="xs:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo & Title */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#19364f] rounded-lg p-1"
          aria-label="Excellence Education Academy Home"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Excellence Education Academy Crest"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#19364f] leading-tight">
              EXCELLENCE
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#BB9331] uppercase">
              Education Academy
            </span>
            <span className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase">
              Goa • Estd. 2025
            </span>
          </div>
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-[#19364f]">
          <Link
            href="#about"
            className="hover:text-[#BB9331] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded"
          >
            About Academy
          </Link>
          <Link
            href="#programs"
            className="hover:text-[#BB9331] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded"
          >
            Academic Programs
          </Link>
          <Link
            href="#why-us"
            className="hover:text-[#BB9331] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded"
          >
            Why Choose Us
          </Link>
          <Link
            href="#methodology"
            className="hover:text-[#BB9331] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded"
          >
            Methodology
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-[#BB9331] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#19364f] rounded"
          >
            Testimonials
          </Link>
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="#inquire"
            className="inline-flex items-center gap-2 bg-[#BB9331] hover:bg-[#d6a943] text-[#19364f] font-semibold text-sm px-5 py-2.5 rounded-md shadow-sm transition-all duration-200 hover:shadow hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#19364f]"
          >
            <span>Admission Inquiry</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-[#19364f] hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-[#19364f]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-4 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-medium text-[#19364f]">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#f0f5fa] hover:text-[#BB9331] transition-colors"
            >
              About Academy
            </Link>
            <Link
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#f0f5fa] hover:text-[#BB9331] transition-colors"
            >
              Academic Programs
            </Link>
            <Link
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#f0f5fa] hover:text-[#BB9331] transition-colors"
            >
              Why Choose Us
            </Link>
            <Link
              href="#methodology"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#f0f5fa] hover:text-[#BB9331] transition-colors"
            >
              Methodology
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#f0f5fa] hover:text-[#BB9331] transition-colors"
            >
              Testimonials
            </Link>
          </div>
          <div className="pt-2 border-t border-zinc-100">
            <Link
              href="#inquire"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-[#BB9331] hover:bg-[#d6a943] text-[#19364f] font-semibold text-center px-4 py-3 rounded-md shadow-sm transition-colors"
            >
              <span>Admission Inquiry (2025–26)</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

