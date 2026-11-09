import Link from "next/link";
import { ArrowUpRight, BookOpen, Microscope, Calculator, Award, Zap, GraduationCap, Check } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      id: "foundation",
      icon: BookOpen,
      badge: "Classes 8th to 10th",
      title: "Junior & High School Foundation",
      target: "CBSE / ICSE / Goa State Board",
      description:
        "Builds rock-solid foundational concepts in Mathematics and Science. Prepares students for school toppers' ranks and competitive examinations.",
      highlights: [
        "NCERT & Board Syllabus Coverage",
        "Olympiad & NTSE Orientation",
        "Weekly Speed & Accuracy Quizzes",
      ],
      tag: "Popular",
    },
    {
      id: "neet",
      icon: Microscope,
      badge: "Medical Stream (11th & 12th)",
      title: "NEET-UG Comprehensive Prep",
      target: "NEET & 12th Board Integration",
      description:
        "Rigorous classroom coaching in Physics, Chemistry, and Biology with line-by-line NCERT retention, diagram mastery, and simulated OMR tests.",
      highlights: [
        "Line-by-line NCERT Drills",
        "Full-length OMR Mock Exams",
        "Dedicated Doubt Labs for Numerical Physics",
      ],
      tag: "High Demand",
    },
    {
      id: "jee",
      icon: Calculator,
      badge: "Engineering Stream (11th & 12th)",
      title: "JEE Main & Advanced Mastery",
      target: "JEE Main, Advanced & State CET",
      description:
        "Intensive problem-solving pedagogy covering calculus, mechanics, electrodynamics, organic synthesis, and physical chemistry drills.",
      highlights: [
        "Multi-concept Problem Solving Drills",
        "Computer-Based Testing (CBT) Practice",
        "Daily Practice Problem (DPP) Sets",
      ],
      tag: "Specialized",
    },
    {
      id: "commerce",
      icon: Award,
      badge: "Commerce Stream (11th & 12th)",
      title: "Commerce & Professional Foundation",
      target: "Accountancy, Economics & Business Studies",
      description:
        "Conceptual clarity in Accountancy, Macroeconomics, Indian Economic Development, and Business Management along with CA Foundation orientation.",
      highlights: [
        "Practical Accountancy Ledger Drills",
        "Case Study & Applied Economics Clinics",
        "Board Presentation & Formatting Training",
      ],
      tag: "New Batch",
    },
    {
      id: "crash-course",
      icon: Zap,
      badge: "Short-Term Intensive",
      title: "Board Booster Revision Series",
      target: "10th & 12th Fast-Track",
      description:
        "Fast-track 60-day syllabus consolidation, high-yield formula marathons, previous 10-year question trends, and board answer writing practice.",
      highlights: [
        "Top 200 Repeated Question Patterns",
        "Sample Paper Solving under Exam Timers",
        "Handwritten Formula Sheets & Summary Maps",
      ],
      tag: "Intensive",
    },
    {
      id: "olympiad",
      icon: GraduationCap,
      badge: "Competitive Talent",
      title: "Olympiads & Competitive Talent Hunt",
      target: "IMO, NSO, IEO, VVM & Scholarships",
      description:
        "Tailored for students aiming to compete on regional and national stages. Advanced critical thinking and non-routine problem sets.",
      highlights: [
        "High-order Thinking Skills (HOTS)",
        "Logical Reasoning & Mental Ability Sets",
        "Mentorship by Medal-winning Tutors",
      ],
      tag: "Weekend Batch",
    },
  ];

  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#fafbfc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-sm">
            <span>• Academic streams •</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Programs built for compounding achievement
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            From early foundation development to high-stakes competitive entrance examinations,
            we offer targeted curricula tailored to every stage of a student’s academic journey.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.id}
                className="bg-white rounded-[32px] p-7 sm:p-8 border border-zinc-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-zinc-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Tags */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-3 py-1 rounded-full">
                      {prog.badge}
                    </span>
                    <span className="text-[11px] font-bold text-[#BB9331] bg-[#BB9331]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-[#19364f] flex items-center justify-center mb-4 group-hover:bg-[#19364f] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-1">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#BB9331] mb-3">
                    {prog.target}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-zinc-100 mb-6">
                    {prog.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-600">
                        <Check className="w-3.5 h-3.5 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <Link
                  href="#inquire"
                  className="w-full inline-flex items-center justify-between bg-zinc-50 hover:bg-[#19364f] text-zinc-800 hover:text-white text-xs font-semibold py-3 px-4 rounded-full border border-zinc-200/80 transition-all group-hover:border-[#19364f]"
                >
                  <span>Inquire about this batch</span>
                  <div className="w-6 h-6 rounded-full bg-white text-zinc-900 group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Clean White Bottom Action Banner */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-zinc-200/80 shadow-[0_2px_20px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-zinc-950">
              Not sure which stream fits your goals?
            </h3>
            <p className="text-sm text-zinc-600 max-w-xl">
              Meet our academic counselors in Goa for a complimentary diagnostic evaluation and 1-on-1 counseling session.
            </p>
          </div>
          <Link
            href="#inquire"
            className="inline-flex items-center gap-2 bg-[#19364f] hover:bg-[#132c40] text-white font-medium text-sm px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all flex-shrink-0"
          >
            <span>Book free counseling</span>
            <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
