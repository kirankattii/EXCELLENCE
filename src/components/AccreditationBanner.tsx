import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function AccreditationBanner() {
  return (
    <section
      id="accreditation"
      className="py-12 sm:py-18 bg-gradient-to-b from-[#1862DE] via-[#246EE8] to-[#175CD3] text-white relative overflow-hidden"
    >
      {/* Subtle cloud mist and light radial */}
      <div
        className="absolute top-0 right-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-white/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
        <div className="flex flex-col items-center gap-3.5">
          <div className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 shadow-[0_12px_32px_rgba(10,17,24,0.18)] border border-white/70">
            <Image
              src="/cth-logo2.png"
              alt="CTH — Confederation of Tourism & Hospitality Logo"
              width={220}
              height={44}
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-xs font-black uppercase tracking-widest text-[#D4F85A] shadow-sm">
            <Award className="w-4 h-4 text-[#D4F85A]" aria-hidden="true" />
            <span>UK GOLD STANDARD RECOGNITION</span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight max-w-5xl mx-auto">
          Confederation of Tourism &amp; Hospitality (CTH) ACCREDITATION
        </h2>

        <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-4xl mx-auto font-normal">
          The Confederation of Tourism &amp; Hospitality (CTH, UK) is a
          UK-based specialist awarding body offering professional
          qualifications across the tourism, hospitality, and culinary sectors.
          With over 30 years of expertise, CTH qualifications are globally
          respected and recognized by employers and academic institutions in
          over 100 countries.
        </p>

        <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-4xl mx-auto font-normal">
          Ready to start your culinary journey? Contact Excellence Education
          Academy or apply online now to secure your spot in Goa&apos;s premier
          culinary institute. Join us and become part of a vibrant learning
          community committed to excellence.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs sm:text-sm font-black text-white">
          <span className="flex items-center gap-2">
            <CheckCircle2
              className="w-4 h-4 text-[#D4F85A]"
              aria-hidden="true"
            />
            <span>Over 30 Years CTH Expertise</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2
              className="w-4 h-4 text-[#D4F85A]"
              aria-hidden="true"
            />
            <span>Recognized in 100+ Countries</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2
              className="w-4 h-4 text-[#D4F85A]"
              aria-hidden="true"
            />
            <span>100+ Partner Institutions</span>
          </span>
        </div>

        <div className="pt-4">
          <Link
            href="/enroll"
            className="inline-flex items-center gap-2.5 bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-sm sm:text-base px-9 py-4 rounded-full shadow-[0_12px_32px_rgba(212,248,90,0.45)] hover:shadow-[0_16px_40px_rgba(212,248,90,0.55)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            <span>Enroll Now</span>
            <div className="w-5 h-5 rounded-full bg-[#0A1118] flex items-center justify-center">
              <ArrowUpRight
                className="w-3 h-3 text-[#D4F85A]"
                aria-hidden="true"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
