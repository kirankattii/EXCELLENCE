import Link from "next/link";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Sparkles, BookOpen } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      label: "Small Batches",
      value: "Max 15–20",
      description: "No overcrowded lectures; every student receives direct, personal faculty attention.",
    },
    {
      label: "Concept-First",
      value: "First Principles",
      description: "We dismantle hard physics, math & chemistry problems with intuitive visual reasoning.",
    },
    {
      label: "Daily Care",
      value: "1:1 Doubt Labs",
      description: "Open faculty clinics after every lecture so no doubt carries over to the next day.",
    },
    {
      label: "Performance",
      value: "Error Journals",
      description: "Systematic test reviews that turn past mistakes into permanent exam strengths.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-y border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
        {/* Story Headline (Matching Screenshot 4 - Overtake style) */}
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700">
            <span>• Our story •</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.18]">
            We founded{" "}
            <span className="inline-block bg-[#BB9331]/20 text-[#8f6e20] px-3 sm:px-4 py-0.5 rounded-full font-bold">
              Excellence
            </span>{" "}
            because promising{" "}
            <span className="inline-block bg-[#19364f]/10 text-[#19364f] px-3 sm:px-4 py-0.5 rounded-full font-bold">
              students
            </span>{" "}
            kept getting lost in crowded coaching factories.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl">
            Established in 2025 in Goa, Excellence Education Academy was created to bring national-caliber teaching standards back to a human scale. We focus on rigorous conceptual depth, individual mentoring, and disciplined study habits.
          </p>
        </div>

        {/* 4 Feature Bento Cards in a Row (Matching Screenshot 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-[#fafbfc] rounded-3xl p-6 sm:p-7 border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-[#BB9331] uppercase tracking-wider block mb-2">
                  {item.label}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">
                  {item.value}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between text-xs font-medium text-zinc-400">
                <span>Pillar 0{index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#BB9331]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
