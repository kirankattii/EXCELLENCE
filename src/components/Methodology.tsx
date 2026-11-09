import { Search, BookCheck, ClipboardCheck, Trophy } from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Diagnostic Assessment",
      description:
        "Every student undergoes an initial diagnostic test to map current comprehension levels, learning speed, and foundational gaps.",
    },
    {
      step: "02",
      icon: BookCheck,
      title: "Conceptual Rigor & Daily Practice",
      description:
        "Classroom instruction prioritizes first principles, visual derivations, and immediate hands-on practice via curated DPP workbooks.",
    },
    {
      step: "03",
      icon: ClipboardCheck,
      title: "Weekly Testing & Error Journals",
      description:
        "Timed weekly mock exams simulate actual test conditions. Students maintain an 'Error Log' to systematically eliminate repeat mistakes.",
    },
    {
      step: "04",
      icon: Trophy,
      title: "Targeted Revision & Exam Mastery",
      description:
        "Final sprint includes full-length grand tests, formula speed-drills, board presentation workshops, and individualized mentoring.",
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-white text-[#19364f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BB9331]/15 text-[#BB9331] text-xs font-bold uppercase tracking-wider">
            <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
            <span>Proven Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19364f] tracking-tight">
            Our 4-Step Academic Success Framework
          </h2>
          <p className="text-base text-zinc-600">
            A scientific, structured approach that transforms confusion into competence and competence into top rank performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-[#f0f5fa] rounded-2xl p-6 border border-[#19364f]/10 hover:border-[#BB9331]/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#BB9331] tracking-wider">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#19364f] text-[#BB9331] flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#19364f] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#19364f]/10 text-[11px] font-semibold text-[#BB9331] uppercase tracking-wider">
                  Phase {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

