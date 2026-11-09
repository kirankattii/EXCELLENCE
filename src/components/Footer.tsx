import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUp, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f2334] text-white border-t-2 border-[#BB9331]">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 bg-white/5 rounded-xl p-1 border border-[#BB9331]/30">
                <Image
                  src="/logo.png"
                  alt="Excellence Education Academy Crest"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  EXCELLENCE
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#BB9331] uppercase">
                  Education Academy
                </span>
                <span className="text-[10px] text-zinc-400 font-medium tracking-widest uppercase">
                  Goa • Estd. 2025
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm">
              Dedicated to academic rigor, conceptual understanding, and character building.
              Preparing students across Goa for board dominance and competitive entrance triumphs.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300">
                <GraduationCap className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
                <span>Admissions open for 2025–2026 batches</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#BB9331]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li>
                <Link href="#about" className="hover:text-[#BB9331] transition-colors">
                  About Academy
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-[#BB9331] transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-[#BB9331] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#methodology" className="hover:text-[#BB9331] transition-colors">
                  4-Step Methodology
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[#BB9331] transition-colors">
                  Student Reviews
                </Link>
              </li>
              <li>
                <Link href="#inquire" className="hover:text-[#BB9331] transition-colors">
                  Admission Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Coaching Streams */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#BB9331]">
              Programs Offered
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li>
                <Link href="#programs" className="hover:text-[#BB9331] transition-colors">
                  Class 8–10 Foundation (CBSE/ICSE/Goa)
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-[#BB9331] transition-colors">
                  NEET-UG Medical Coaching
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-[#BB9331] transition-colors">
                  JEE Main & Advanced Coaching
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-[#BB9331] transition-colors">
                  11th & 12th Commerce Stream
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-[#BB9331] transition-colors">
                  Olympiad & NTSE Talent Batches
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-[#BB9331] transition-colors">
                  Board Booster Crash Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#BB9331]">
              Goa Campus
            </h4>
            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BB9331] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Excellence Education Academy<br />
                  Panaji / Margao Campus, Goa, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919876543210" className="hover:text-[#BB9331] transition-colors">
                  +91 98765 43210 / 0832-2456789
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@exceleduacademy.com" className="hover:text-[#BB9331] transition-colors">
                  info@exceleduacademy.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#BB9331] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0a1824] py-6 px-4 sm:px-8 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © 2025–2026 Excellence Education Academy, Goa. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[#BB9331] font-semibold">
              Navy: #19364f • Gold: #BB9331 • White
            </span>
            <Link
              href="#"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-[#BB9331] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

