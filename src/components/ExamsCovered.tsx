import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";

export default function ExamsCovered() {
  const exams = [
    { name: "CBSE Board", desc: "Classes 8 to 12" },
    { name: "ICSE / ISC", desc: "Class 9, 10 & 12" },
    { name: "Goa Board", desc: "GBSHSE SSC & HSSC" },
    { name: "NEET-UG", desc: "National Medical" },
    { name: "JEE Main", desc: "Engineering Entrance" },
    { name: "JEE Advanced", desc: "IIT Entrance" },
    { name: "Olympiads", desc: "IMO, NSO & IEO" },
    { name: "NTSE & KVPY", desc: "Talent Search" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-zinc-200/70 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-14 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700">
            <span>• Examination Mastery •</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Master the examinations that matter most
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Comprehensive curriculum integration for national competitive entrance tests and premier state & central schooling boards in Goa.
          </p>

          <div className="pt-2">
            <Link
              href="#inquire"
              className="inline-flex items-center gap-2 bg-[#19364f] hover:bg-[#132c40] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(25,54,79,0.2)] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Explore curriculum blueprints</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>

        {/* Radial Arc Layout Inspired by Screenshot 3 (FintechX) */}
        <div className="relative pt-8 pb-4 max-w-4xl mx-auto">
          {/* Subtle Ambient Arc Background */}
          <div
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#BB9331]/5 to-transparent rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Grid of Exam Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {exams.map((exam, index) => (
              <div
                key={index}
                className="bg-[#fafbfc] rounded-2xl p-5 border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#19364f]/30 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-[#19364f] flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 group-hover:bg-[#19364f] group-hover:text-white transition-all">
                  <GraduationCap className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 tracking-tight">
                  {exam.name}
                </h3>
                <p className="text-[11px] font-medium text-zinc-500 mt-0.5">
                  {exam.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center Emblem Anchor */}
          <div className="mt-10 inline-flex items-center gap-3 bg-white border border-zinc-200/90 rounded-full px-5 py-2.5 shadow-sm">
            <div className="relative w-6 h-6">
              <Image
                src="/logo.png"
                alt="Excellence Education Academy Crest"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs font-semibold text-zinc-800">
              Complete Board & Entrance Syllabus Integrated Under One Roof
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

