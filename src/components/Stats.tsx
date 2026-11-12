import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Sparkles, Ship } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/stat";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";

export default function Stats() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROVEN CAREER TRACK RECORD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Accelerating your pathway into high-earning hospitality
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Practical, hands-on culinary and bakery training with 100% placement
            support preparing graduates for careers in top hotels, resorts, and
            cruise lines worldwide.
          </p>
        </div>

        {/* Bento Grid Trio matching reference Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Vibrant Azure Blue (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-[#1E6DEB] text-white rounded-[32px] p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
            {/* Background subtle light radial */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="space-y-4 relative z-10">
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#D4F85A] bg-[#0A1118]/30 px-3 py-1 rounded-full">
                Certification
              </span>

              <div className="space-y-1">
                <div className="text-5xl sm:text-6xl font-black tracking-tight flex items-center">
                  <AnimatedCounter value={100} suffix="%" align="left" />
                </div>
                <h3 className="text-lg font-black leading-snug">
                  Certification &amp; Placement Support
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                Practical, hands-on learning with 100% placement support
                preparing graduates for careers in top hotels, resorts, and
                cruise lines worldwide.
              </p>
            </div>

            {/* Visual preview strip inside card */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-md">
              <Image
                src="/images/cruise-hospitality.jpg"
                alt="Luxury Cruise Ship Careers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-[#0A1118]/90 text-white text-[10px] font-black px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5">
                <Ship className="w-3 h-3 text-[#D4F85A]" />
                <span>Global Fleet Placement</span>
              </div>
            </div>
          </div>

          {/* Card 2: Crisp White Card (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white rounded-[32px] p-8 border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] flex flex-col justify-between space-y-6 hover:border-[#1E6DEB]/40 hover:shadow-lg transition-all">
            <div className="space-y-4">
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#1E6DEB] bg-[#F0F6FE] px-3 py-1 rounded-full border border-[#1E6DEB]/20">
                International Recognition
              </span>

              <div className="space-y-1">
                <div className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight flex items-center">
                  <AnimatedCounter value={100} suffix="+" align="left" />
                </div>
                <h3 className="text-lg font-black text-slate-950 leading-snug">
                  Institutions with Global Pathways
                </h3>
              </div>

              {/* CTH Authority Highlights */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs font-black text-slate-900">
                  <span className="text-[#1E6DEB]">
                    30+ Years Awarding Body
                  </span>
                  <span>60+ Countries Reach</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  Trusted UK awarding body recognized by employers and academic
                  institutions globally.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                CTH qualifications open doors to international culinary careers
                and progression to degree or postgraduate programs globally.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs font-black text-[#1E6DEB]">
              <Image
                src="/cth-logo2.png"
                alt="CTH Gold Standard"
                width={110}
                height={22}
                className="h-5 w-auto object-contain"
              />
              <span className="text-slate-400 font-semibold text-[11px]">
                CTH-UK Certified
              </span>
            </div>
          </div>

          {/* Card 3: Electric Lime Card (lg:col-span-4) matching reference */}
          <div className="lg:col-span-4 bg-[#D4F85A] text-[#0A1118] rounded-[32px] p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="space-y-4">
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#0A1118] bg-white/70 px-3 py-1 rounded-full border border-black/10">
                Global Hospitality Careers
              </span>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight text-[#0A1118]">
                  Internships from Day One
                </h3>
                <p className="text-xs sm:text-sm text-[#0A1118]/85 leading-relaxed font-medium">
                  Our placement team connects graduates with opportunities across
                  international hospitality, food service, and maritime sectors.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-black text-[#0A1118]">
                  <CheckCircle2 className="w-4 h-4 text-[#0A1118]" />
                  <span>Hotels, resorts, restaurants &amp; catering</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-[#0A1118]">
                  <CheckCircle2 className="w-4 h-4 text-[#0A1118]" />
                  <span>Cruise lines, airlines &amp; event management</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-[#0A1118]">
                  <CheckCircle2 className="w-4 h-4 text-[#0A1118]" />
                  <span>Hands-on labs &amp; industry internships</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1118] hover:bg-black text-white font-black text-xs sm:text-sm py-4 px-6 rounded-full shadow-lg transition-all duration-200 active:scale-95"
              >
                <span>Explore Placement Pathways</span>
                <AnimatedArrow size={15} className="text-[#D4F85A]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
