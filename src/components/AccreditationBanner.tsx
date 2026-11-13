import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  UtensilsCrossed,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";

export default function AccreditationBanner() {
  const steps = [
    {
      step: "01",
      tag: "Regulated Curriculum",
      icon: BookOpen,
      title: "British Standard Syllabi",
      desc: "Courses follow standardized CTH London curricula regulated in the UK, mastering international culinary, bakery, and hospitality benchmarks.",
      badge: "Ofqual Regulated",
    },
    {
      step: "02",
      tag: "Live Commercial Labs",
      icon: UtensilsCrossed,
      title: "Hands-on Practical Training",
      desc: "Students train in fully-equipped commercial kitchens in Alto Porvorim under continuous British practical assessment and food safety audits.",
      badge: "Goa Campus Labs",
    },
    {
      step: "03",
      tag: "London Certification",
      icon: GraduationCap,
      title: "Direct UK Diplomas",
      desc: "Graduates receive official CTH diplomas issued straight from London, recognized across 50+ countries by luxury hotels and cruise lines.",
      badge: "Global Mobility",
    },
  ];

  return (
    <section
      id="accreditation"
      className="relative py-10 sm:py-14 bg-gradient-to-b from-[#1351C7] via-[#1E6DEB] to-[#175CD3] text-white overflow-hidden"
      aria-labelledby="accreditation-title"
    >
      {/* Subtle Radial Ambient Glows matching Hero */}
      <div
        className="absolute -top-20 right-10 w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-white/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Dot Grid Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        {/* Compact Header: Dual Logo Badge + Status Pill + Headline */}
        <div className="flex flex-col items-center text-center space-y-3.5 max-w-4xl mx-auto">
          {/* Top Status & Brand Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {/* Live Approval Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-[11px] font-black text-[#D4F85A] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4F85A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4F85A]" />
              </span>
              <span>Official CTH Approved Centre • London, UK</span>
            </div>

            {/* Micro Ofqual Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-[11px] font-bold text-white">
              <Sparkles className="w-3 h-3 text-[#D4F85A]" />
              <span>British Regulated Standard</span>
            </div>
          </div>

          {/* Compact Dual Logo Floating Card */}
          <div className="inline-flex items-center justify-center gap-2 sm:gap-4 bg-white rounded-2xl px-4 py-2 shadow-[0_12px_32px_rgba(10,17,24,0.18)] border border-white/90">
            <div className="flex items-center justify-center h-10 sm:h-16">
              <Image
                src="/logo.png"
                alt="Excellence Education Academy Logo"
                width={140}
                height={32}
                className="h-10 sm:h-16 w-auto object-contain"
                priority
              />
            </div>

            <span
              className="text-slate-300 font-black text-xs"
              aria-hidden="true"
            >
              •
            </span>

            <div className="flex items-center justify-center h-10 sm:h-14">
              <Image
                src="/cth-approved.png"
                alt="CTH Approved Centre"
                width={160}
                height={64}
                className="h-10 sm:h-14 w-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-2">
            <h2
              id="accreditation-title"
              className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white leading-snug drop-shadow-sm"
            >
              Excellence Education Academy – Approved Centre of{" "}
              <span className="text-[#D4F85A] underline decoration-white/40 decoration-wavy decoration-1 underline-offset-4">
                CTH, London (UK)
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-white/95 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-xs">
              CTH (London, UK) is the premier awarding body for tourism and
              hospitality. Excellence Education Academy provides commercial
              kitchen training in Goa, culminating in authentic, externally
              audited British diplomas.
            </p>
          </div>
        </div>

        {/* 3 Compact Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/45 rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {/* Header Row: Icon + Step + Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center font-black shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-white/90 bg-white/15 px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-black text-[#D4F85A] bg-[#0A1118]/40 px-2 py-0.5 rounded-md border border-white/15">
                      Step {item.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#D4F85A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/90 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Micro Tag */}
                <div className="pt-2 border-t border-white/15 flex items-center gap-1.5 text-[11px] font-medium text-white/80">
                  <CheckCircle2 className="w-3 h-3 text-[#D4F85A] shrink-0" />
                  <span>{item.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Footer Strip: Institutional Governance Note + CTA */}
        <div className="max-w-6xl mx-auto rounded-2xl bg-[#0A1118]/35 border border-white/25 p-3 sm:px-5 sm:py-3.5 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shadow-sm">
          <div className="flex items-center gap-2.5 text-center sm:text-left text-xs text-white/95">
            <div className="w-7 h-7 rounded-lg bg-[#D4F85A]/20 text-[#D4F85A] flex items-center justify-center shrink-0 hidden sm:flex">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            </div>
            <p className="leading-snug">
              <span className="font-bold text-[#D4F85A]">
                Campus &amp; Awarding Roles:
              </span>{" "}
              Practical culinary training at Goa campus • Qualification verified
              and awarded directly by CTH (London, UK).
            </p>
          </div>

          <Link
            href="/courses"
            className="group shrink-0 inline-flex items-center justify-center gap-2 bg-[#D4F85A] hover:bg-[#cbf544] text-[#0A1118] font-black text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-[0_8px_24px_rgba(212,248,90,0.4)] hover:shadow-[0_12px_32px_rgba(212,248,90,0.6)] transition-all duration-200 active:scale-95 w-full sm:w-auto"
          >
            <span>Explore CTH Programs</span>
            <div className="w-4 h-4 rounded-full bg-[#0A1118] flex items-center justify-center overflow-hidden">
              <AnimatedArrow
                size={10}
                boxClassName="h-3 w-3"
                className="text-[#D4F85A]"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
