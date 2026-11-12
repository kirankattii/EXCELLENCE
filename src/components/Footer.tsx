import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Award } from "lucide-react";
import BackToTopButton from "@/components/BackToTopButton";

export default function Footer() {
  return (
    <footer className="bg-[#0A1118] border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1 (Brand Info) */}
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
                  <span className="text-xl font-black tracking-tight text-white">
                    Excellence
                  </span>
                  <span className="text-[10px] font-black text-[#0A1118] bg-[#D4F85A] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    CTH UK
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Education Academy
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Goa&apos;s leading CTH-accredited culinary and hospitality institute. Dedicated to world-class vocational chef training, French patisserie arts, and luxury international cruise ship career placements.
            </p>

            <div className="flex flex-col items-start gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white shadow-sm">
                <Image
                  src="/cth-logo2.png"
                  alt="CTH Approved Centre Logo"
                  width={120}
                  height={24}
                  className="h-5 w-auto object-contain"
                />
                <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                  Approved Centre
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-xs text-slate-200 font-bold border border-white/10">
                <Award className="w-4 h-4 text-[#D4F85A]" aria-hidden="true" />
                <span>Goa&apos;s Only CTH Accredited Institute</span>
              </div>
            </div>
          </div>

          {/* Column 2 (Quick Links) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black tracking-wider uppercase text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <Link href="/" className="hover:text-[#D4F85A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4F85A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#D4F85A] transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#D4F85A] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#D4F85A] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-[#D4F85A] transition-colors">
                  Why Join Us
                </Link>
              </li>
              <li>
                <Link href="/#accreditation" className="hover:text-[#D4F85A] transition-colors">
                  CTH Accreditation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4F85A] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (Courses) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black tracking-wider uppercase text-white">
              Culinary &amp; Cruise Diplomas
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <Link href="/courses" className="hover:text-[#D4F85A] transition-colors">
                  Diploma in Culinary Skills
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#D4F85A] transition-colors">
                  Diploma in Patisserie &amp; Confectionery
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#D4F85A] transition-colors">
                  Professional Restaurant Front of House
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#D4F85A] transition-colors">
                  Diploma in Cruise Hospitality Services
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#D4F85A] transition-colors">
                  Professional Bartending Skills
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#D4F85A] transition-colors">
                  Award in Basic Cookery Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (Contact Info) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black tracking-wider uppercase text-white">
              Goa Campus Center
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4F85A] flex-shrink-0 mt-0.5" />
                <span>
                  The Capital, 660/3, above Max Showroom, near O&apos;Coqueiro
                  Restaurant, Defence Colony, Alto Porvorim, Porvorim, Salvador
                  du Mundu, Goa 403521
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4F85A] flex-shrink-0" />
                <a
                  href="tel:+918329208271"
                  className="hover:text-white transition-colors font-bold text-slate-300"
                >
                  +91 8329208271
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4F85A] flex-shrink-0" />
                <a
                  href="mailto:contact@exceleduacademy.com"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  contact@exceleduacademy.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4F85A] flex-shrink-0 mt-0.5" />
                <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.instagram.com/exceleduacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4F85A] transition-colors"
                >
                  Instagram
                </a>
                <span className="text-slate-600" aria-hidden="true">/</span>
                <a
                  href="https://www.youtube.com/channel/UCOQQlJnj3vWIcZ5EiPJ9-Hg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4F85A] transition-colors"
                >
                  YouTube
                </a>
                <span className="text-slate-600" aria-hidden="true">/</span>
                <a
                  href="https://www.facebook.com/share/19bToN1wVQ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4F85A] transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 Excellence Education Academy. All rights reserved. Recognized by CTH (UK).
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D4F85A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-admission" className="hover:text-[#D4F85A] transition-colors">
              Terms of Admission
            </Link>
            <BackToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
