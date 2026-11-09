import Image from "next/image";
import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail, Clock, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200/80 text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1 (Brand Info): Excellence logo + description */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Excellence Education Academy Crest"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-extrabold tracking-tight text-zinc-950">
                    Excellence
                  </span>
                  <span className="text-[10px] font-bold text-[#BB9331] bg-[#BB9331]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    CTH UK
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                  Culinary &amp; Hospitality Academy
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
              Goa&apos;s leading CTH-accredited culinary and hospitality institute. Dedicated to world-class vocational chef training, French patisserie arts, and luxury international cruise ship career placements.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-xs text-zinc-700 font-semibold border border-zinc-200/80">
              <Award className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
              <span>Goa&apos;s Only CTH Accredited Institute</span>
            </div>
          </div>

          {/* Column 2 (Quick Links): Home, About Us, Gallery, Blogs, Contact Us */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-950">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li>
                <Link href="/" className="hover:text-zinc-950 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-zinc-950 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-zinc-950 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#why-join-us" className="hover:text-zinc-950 transition-colors">
                  Why Join Us
                </Link>
              </li>
              <li>
                <Link href="#accreditation" className="hover:text-zinc-950 transition-colors">
                  CTH Accreditation
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-zinc-950 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (Courses): 5 course links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-950">
              Culinary &amp; Hospitality Courses
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li>
                <Link href="#courses" className="hover:text-zinc-950 transition-colors">
                  Diploma in Culinary Skills (1 Year)
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-zinc-950 transition-colors">
                  Diploma in Patisserie &amp; Confectionery
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-zinc-950 transition-colors">
                  Diploma in Cruise Hospitality Services
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-zinc-950 transition-colors">
                  Certificate in Culinary Skills (6 Mo)
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-zinc-950 transition-colors">
                  Certificate in Bartending &amp; Barista
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-zinc-950 transition-colors">
                  Front Office &amp; F&amp;B Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (Contact Info & Socials) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-950">
              Contact &amp; Location
            </h4>
            <div className="space-y-3 text-sm text-zinc-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BB9331] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Panaji / Margao Campus, Goa, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919876543210" className="hover:text-zinc-950 transition-colors">
                  +91 98765 43210 / 0832-2456789
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                <a href="mailto:admissions@exceleduacademy.com" className="hover:text-zinc-950 transition-colors">
                  admissions@exceleduacademy.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-xs text-zinc-500">
                <Clock className="w-4 h-4 text-[#BB9331] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2025–2026 Excellence Education Academy. All Rights Reserved. CTH Approved Centre.</p>

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
