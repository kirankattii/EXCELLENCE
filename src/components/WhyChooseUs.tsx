import Link from "next/link";
import { ArrowUpRight, Users, BrainCircuit, BookOpenCheck, Clock, BarChart3, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Users,
      tag: "Batch Size",
      title: "Limited to 15–20 Students",
      description:
        "We reject crowded lecture halls. Low student-teacher ratio ensures the mentor actively monitors every student’s retention, notes, and individual progress.",
    },
    {
      icon: BrainCircuit,
      tag: "Pedagogy",
      title: "First-Principles Conceptual Clarity",
      description:
        "We demystify hard concepts using intuitive step-by-step logic and visual reasoning, turning intimidating equations into natural understanding.",
    },
    {
      icon: BookOpenCheck,
      tag: "Study Material",
      title: "High-Yield Modules & DPP Sheets",
      description:
        "Students receive meticulously curated study modules, crisp formula pocketbooks, past question banks, and daily practice problem (DPP) sets.",
    },
    {
      icon: Clock,
      tag: "Mentorship",
      title: "Dedicated Daily Doubt Labs",
      description:
        "No question is left unanswered. Students have access to daily post-lecture doubt clearing sessions with faculty to resolve conceptual hurdles immediately.",
    },
    {
      icon: BarChart3,
      tag: "Tracking",
      title: "In-Depth Performance Analytics",
      description:
        "Weekly simulated tests with detailed question-level error analysis. Parents receive transparent reports on test scores, attendance, and progress trajectory.",
    },
    {
      icon: Sparkles,
      tag: "Mindset",
      title: "Exam Temperament & Confidence",
      description:
        "Regular workshops on time management, stress reduction, strategic question selection, and overcoming exam anxiety to perform at peak potential.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white border-y border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700">
            <span>• The Excellence Advantage •</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Why Goa’s students & parents choose us
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            We combine high academic standards with genuine personal attention,
            fostering a disciplined and supportive environment where every learner thrives.
          </p>
        </div>

        {/* 6 Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#fafbfc] rounded-[32px] p-7 sm:p-8 border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-zinc-200 text-[#19364f] flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-[#BB9331] bg-[#BB9331]/10 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/60 text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">
                  Standard 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
