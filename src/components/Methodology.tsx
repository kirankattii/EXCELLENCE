import { Search, BookCheck, ClipboardCheck, Trophy } from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Diagnostic Assessment",
      subtitle: "Map Comprehension & Baseline",
      description:
        "Every student begins with an individual diagnostic assessment to pinpoint conceptual strengths, learning speed, and foundational gaps.",
    },
    {
      step: "02",
      icon: BookCheck,
      title: "Conceptual Rigor & Daily DPPs",
      subtitle: "Deep Understanding",
      description:
        "Classroom instruction prioritizes first principles, visual derivations, and immediate hands-on practice through curated Daily Practice Problem workbooks.",
    },
    {
      step: "03",
      icon: ClipboardCheck,
      title: "Weekly Testing & Error Journals",
      subtitle: "Simulated Test Conditions",
      description:
        "Timed weekly mock exams simulate actual examination pressure. Students maintain an 'Error Journal' to systematically eliminate repeat mistakes.",
    },
    {
      step: "04",
      icon: Trophy,
      title: "Targeted Revision & Exam Mastery",
      subtitle: "Top Rank Readiness",
      description:
        "The final sprint includes full-length grand tests, formula speed-drills, board answer presentation workshops, and 1-on-1 strategy coaching.",
    },
  ];

  return (
    <section id="methodology" className="py-20 sm:py-28 bg-[#fafbfc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-sm">
            <span>• How it works •</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Our 4-step academic success framework
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            A structured, repeatable methodology that turns confusion into competence and competence into top rank performance.
          </p>
        </div>

        {/* 4 Bento Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[32px] p-7 border border-zinc-200/80 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#19364f] tracking-tight">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-zinc-100 text-[#BB9331] flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#BB9331] mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-medium text-zinc-400">
                  <span>Stage 0{index + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#19364f]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
