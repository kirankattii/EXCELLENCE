import Link from "next/link";
import { BookOpen, GraduationCap, Microscope, Calculator, Award, Zap, ArrowRight, Check } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      id: "foundation",
      icon: BookOpen,
      badge: "Classes 8th to 10th",
      title: "Junior & High School Foundation",
      target: "CBSE / ICSE / Goa State Board",
      description:
        "Builds rock-solid foundational concepts in Mathematics, Science, and English. Designed to prepare students for school toppers' ranks and future entrance exams.",
      highlights: [
        "Comprehensive NCERT & Board Syllabus Coverage",
        "Olympiad & NTSE Orientation",
        "Weekly Speed & Accuracy Quizzes",
        "Doubt Resolution Clinics",
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
        "Rigorous classroom coaching in Physics, Chemistry, and Biology. Deep dive into line-by-line NCERT retention, diagram mastery, and national-level mock tests.",
      highlights: [
        "Line-by-line NCERT Drill Sessions",
        "Full-length OMR Simulated Mock Exams",
        "Special Doubt Labs for Numerical Physics",
        "Previous 15-Year Question Trend Analysis",
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
        "Intensive problem-solving pedagogy covering advanced calculus, mechanics, electrodynamics, organic synthesis, and physical chemistry calculations.",
      highlights: [
        "Multi-concept Problem Solving Technique",
        "Computer-Based Testing (CBT) Practice",
        "Speed, Accuracy & Negative Marking Mastery",
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
        "CA/CS Foundation Bridging Modules",
      ],
      tag: "New Batch",
    },
    {
      id: "crash-course",
      icon: Zap,
      badge: "Short-Term Intensive",
      title: "Board Booster & Revision Crash Courses",
      target: "10th & 12th Board Fast-Track",
      description:
        "Fast-track 60-day syllabus consolidation, high-yield concept review, formula marathons, and board model answer writing practice.",
      highlights: [
        "Top 200 Repeated Question Patterns",
        "Sample Paper Solving under Exam Conditions",
        "Handwritten Formula Sheets & Summary Maps",
        "Individual Weak-Area Remedial Support",
      ],
      tag: "Intensive",
    },
    {
      id: "olympiad",
      icon: GraduationCap,
      badge: "Competitive Talent",
      title: "Olympiads & Competitive Talent Hunt",
      target: "IMO, NSO, IEO, VVM & Scholarship Exams",
      description:
        "Tailored for students aiming to compete on regional and national stages. Advanced critical thinking and non-routine problem sets.",
      highlights: [
        "High-order Thinking Skills (HOTS)",
        "Logical Reasoning & Mental Ability Sets",
        "Past International Olympiad Walkthroughs",
        "Mentorship by Medal-winning Tutors",
      ],
      tag: "Weekend Batch",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white text-[#19364f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BB9331]/15 text-[#BB9331] text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" aria-hidden="true" />
            <span>Academic Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19364f] tracking-tight">
            Comprehensive Programs Designed for Success
          </h2>
          <p className="text-base text-zinc-600">
            From early foundation development to high-stakes competitive entrance examinations,
            we offer targeted curricula tailored to every stage of a student’s academic journey.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.id}
                className="group relative flex flex-col bg-white rounded-2xl border border-zinc-200 hover:border-[#BB9331]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Top Banner Accent */}
                <div className="h-2 w-full bg-gradient-to-r from-[#19364f] via-[#BB9331] to-[#19364f]" />

                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  {/* Badge & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-[#19364f] bg-[#f0f5fa] px-3 py-1 rounded-md">
                      {prog.badge}
                    </span>
                    <span className="text-[11px] font-bold text-[#BB9331] bg-[#fdf8ed] border border-[#BB9331]/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Title & Target */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#19364f] text-[#BB9331] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#19364f] leading-snug group-hover:text-[#BB9331] transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#BB9331] mt-0.5">
                        {prog.target}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 mb-5 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 mb-6 border-t border-zinc-100 pt-4 flex-grow">
                    <p className="text-xs font-bold text-[#19364f] uppercase tracking-wider">
                      Program Highlights:
                    </p>
                    {prog.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600">
                        <Check className="w-3.5 h-3.5 text-[#BB9331] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-2">
                    <Link
                      href={`#inquire`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#f0f5fa] hover:bg-[#19364f] text-[#19364f] hover:text-white font-semibold text-xs py-2.5 px-4 rounded-lg transition-colors border border-[#19364f]/10"
                    >
                      <span>Inquire About This Course</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#19364f] text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-[#BB9331]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Not sure which stream or program is right for you?
            </h3>
            <p className="text-sm text-zinc-300 max-w-xl">
              Meet our academic counselors in Goa for a free diagnostic evaluation and 1-on-1 counseling session.
            </p>
          </div>
          <Link
            href="#inquire"
            className="inline-flex items-center gap-2 bg-[#BB9331] hover:bg-[#d6a943] text-[#19364f] font-bold text-sm px-6 py-3 rounded-lg shadow transition-all hover:scale-105 flex-shrink-0"
          >
            <span>Book Free Counseling</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

