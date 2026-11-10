"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Megaphone,
  Menu,
  X,
  Phone,
  ChefHat,
  Cake,
  Ship,
  Wine,
  Hotel,
  UtensilsCrossed,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courseList = [
    {
      title: "Diploma in Culinary Skills",
      desc: "Classical French cookery & kitchen brigade management",
      icon: ChefHat,
      href: "#courses",
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Diploma in Patisserie & Confectionery",
      desc: "Artisan breads, viennoiserie, chocolate & entremets",
      icon: Cake,
      href: "#courses",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Diploma in Cruise Hospitality Services",
      desc: "Maritime operations, dining etiquette & cruise careers",
      icon: Ship,
      href: "#courses",
      color: "text-teal-600 bg-teal-50",
    },
    {
      title: "Certificate in Culinary Skills",
      desc: "6-month intensive fundamental knife & cookery skills",
      icon: UtensilsCrossed,
      href: "#courses",
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Certificate in Front Office / F&B Service",
      desc: "Opera PMS, luxury concierge & silver service",
      icon: Hotel,
      href: "#courses",
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Certificate in Bartending / Barista Skills",
      desc: "Espresso latte art, craft mixology & flair bar basics",
      icon: Wine,
      href: "#courses",
      color: "text-cyan-600 bg-cyan-50",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center pointer-events-none">
      {/* Top Announcement Bar - Collapses smoothly on scroll */}
      <motion.div
        animate={{
          height: isScrolled ? 0 : "auto",
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full bg-gradient-to-r from-[#f0f5fa] via-[#fdf8ed] to-[#f0f5fa] border-b border-[#BB9331]/20 overflow-hidden pointer-events-auto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-between sm:justify-center gap-3 text-xs sm:text-[13px] text-slate-800 font-medium">
          <div className="flex items-center gap-2 truncate">
            <div className="bg-[#BB9331]/20 p-1 rounded-full flex-shrink-0">
              <Megaphone className="w-3 h-3 text-[#8f6e20]" />
            </div>
            <span className="truncate">
              Admissions Open 2025–2026:{" "}
              <strong>Goa&apos;s Only CTH Accredited</strong> Culinary &amp; Cruise Institute.
            </span>
            <span className="hidden md:inline opacity-60 text-xs border-l border-black/20 pl-2">
              Limited Seats Per Batch
            </span>
          </div>

          <Link
            href="#contact"
            className="flex-shrink-0 bg-white border border-[#19364f]/30 text-[#19364f] px-3 py-1 rounded-full text-xs font-bold hover:bg-[#19364f] hover:text-white transition-colors"
          >
            Apply Online
          </Link>
        </div>
      </motion.div>

      {/* Main Dynamic Morphing Navbar */}
      <motion.div
        layout
        initial={false}
        animate={{
          width: isScrolled ? "92%" : "100%",
          maxWidth: isScrolled ? "1240px" : "100%",
          marginTop: isScrolled ? "12px" : "0px",
          borderRadius: isScrolled ? "100px" : "0px",
          padding: isScrolled ? "8px 24px" : "14px 40px",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.92)"
            : "rgba(255, 255, 255, 1)",
          boxShadow: isScrolled
            ? "0 10px 30px -10px rgba(0,0,0,0.12)"
            : "0 1px 0 0 rgba(0,0,0,0.06)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          borderWidth: isScrolled ? "1px" : "0px",
          borderColor: "rgba(0,0,0,0.08)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex items-center justify-between pointer-events-auto bg-white transition-colors relative"
      >
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Excellence Education Academy"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Excellence Education Academy Crest"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                Excellence
              </span>
              <span className="text-[10px] font-bold text-[#BB9331] bg-[#BB9331]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                CTH UK
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
              Culinary &amp; Hospitality
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-slate-700"
          aria-label="Main Navigation"
        >
          <Link
            href="/"
            className="hover:text-indigo-900 transition-colors py-1 hover:text-[#19364f]"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-indigo-900 transition-colors py-1 hover:text-[#19364f]"
          >
            About
          </Link>

          {/* Courses Dropdown Link */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesDropdownOpen(true)}
            onMouseLeave={() => setCoursesDropdownOpen(false)}
          >
            <Link
              href="#courses"
              className="flex items-center gap-1 cursor-pointer py-1 hover:text-[#19364f] transition-colors"
            >
              <span>Courses</span>
              <ChevronDown
                className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                  coursesDropdownOpen ? "rotate-180 text-[#19364f]" : ""
                }`}
              />
            </Link>

            {/* Courses Dropdown Mega Menu */}
            <AnimatePresence>
              {coursesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[460px] pointer-events-auto"
                >
                  <div className="bg-white rounded-3xl p-4 shadow-2xl border border-zinc-200/80 grid grid-cols-1 gap-2">
                    <div className="px-3 py-1.5 border-b border-zinc-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        CTH Accredited Programs
                      </span>
                      <span className="text-[10px] font-semibold text-[#BB9331] bg-[#BB9331]/10 px-2 py-0.5 rounded-full">
                        6 Diplomas &amp; Certificates
                      </span>
                    </div>

                    {courseList.map((c, i) => {
                      const Icon = c.icon;
                      return (
                        <Link
                          key={i}
                          href={c.href}
                          onClick={() => setCoursesDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${c.color}`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 group-hover/item:text-[#19364f] transition-colors">
                              {c.title}
                            </p>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              {c.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="pt-2 border-t border-zinc-100 px-3 flex items-center justify-between text-xs">
                      <span className="text-zinc-500 text-[11px]">
                        Need help choosing a course?
                      </span>
                      <Link
                        href="#contact"
                        onClick={() => setCoursesDropdownOpen(false)}
                        className="font-bold text-[#19364f] hover:text-[#BB9331] transition-colors flex items-center gap-1"
                      >
                        <span>Talk to counselor</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="#gallery"
            className="hover:text-indigo-900 transition-colors py-1 hover:text-[#19364f]"
          >
            Gallery
          </Link>
          <Link
            href="#blogs"
            className="hover:text-indigo-900 transition-colors py-1 hover:text-[#19364f]"
          >
            Blogs
          </Link>
          <Link
            href="#why-join-us"
            className="hover:text-indigo-900 transition-colors py-1 hover:text-[#19364f]"
          >
            Why Us
          </Link>
          <Link
            href="#contact"
            className="hover:text-indigo-900 transition-colors py-1 hover:text-[#19364f]"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-slate-700 font-bold text-xs border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#BB9331]" />
            <span>+91 98765 43210</span>
          </a>

          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#19364f] hover:bg-[#132c40] text-white font-bold text-xs sm:text-sm hover:shadow-lg hover:shadow-slate-300 transition-all active:scale-95 flex items-center gap-1.5"
          >
            <span>Enquire Now</span>
            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#19364f]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl border border-zinc-200 shadow-2xl p-5 space-y-4"
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
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Courses Offered
                </Link>
                <Link
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Campus Gallery
                </Link>
                <Link
                  href="#blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Industry Blogs
                </Link>
                <Link
                  href="#why-join-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Why Join Us
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-slate-700 border border-slate-200 rounded-full"
                >
                  <Phone className="w-3.5 h-3.5 text-[#BB9331]" />
                  <span>Call: +91 98765 43210</span>
                </a>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#19364f] text-white font-bold text-xs py-3 rounded-full shadow-md"
                >
                  <span>Enquire for Admissions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
