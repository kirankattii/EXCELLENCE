import Image from "next/image";
import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200/80 text-zinc-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Excellence Education Academy Crest"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-zinc-950">
                  Excellence
                </span>
                <span className="text-[11px] font-semibold text-[#BB9331] bg-[#BB9331]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Academy
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
              Empowering students in Goa to achieve true academic mastery through small batches, first-principles pedagogy, and daily 1:1 doubt clearing.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-xs text-zinc-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#BB9331]" />
                <span>Goa Campus • Estd. 2025</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-950">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li>
                <Link href="#about" className="hover:text-zinc-950 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-zinc-950 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-zinc-950 transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="#methodology" className="hover:text-zinc-950 transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-zinc-950 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#inquire" className="hover:text-zinc-950 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-950">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li>
                <Link href="#programs" className="hover:text-zinc-950 transition-colors">
                  Classes 8–10
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-zinc-950 transition-colors">
                  NEET-UG
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-zinc-950 transition-colors">
                  JEE Main & Adv
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-zinc-950 transition-colors">
                  Commerce 11–12
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-zinc-950 transition-colors">
                  Olympiads
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-zinc-950 transition-colors">
                  Crash Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Location & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-950">
              Campus & Hours
            </h4>
            <div className="space-y-3 text-sm text-zinc-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BB9331] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Panaji / Margao Campus, Goa, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919876543210" className="hover:text-zinc-950 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@exceleduacademy.com" className="hover:text-zinc-950 transition-colors">
                  info@exceleduacademy.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-xs text-zinc-500">
                <Clock className="w-4 h-4 text-[#BB9331] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-14 pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2025–2026 Excellence Education Academy, Goa. All rights reserved.</p>

          <Link
            href="#"
            className="inline-flex items-center gap-1.5 text-zinc-700 hover:text-zinc-950 font-medium transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#19364f]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
