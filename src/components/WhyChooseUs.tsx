import { Users, BookOpenCheck, BrainCircuit, BarChart3, Clock, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Users,
      title: "Limited Batch Sizes (Max 15–20)",
      description:
        "We reject crowded lecture halls. Our low student-teacher ratio ensures the mentor actively monitors every student’s retention, notes, and progress in every class.",
    },
    {
      icon: BrainCircuit,
      title: "Conceptual Clarity & Depth",
      description:
        "We demystify hard concepts using relatable analogies and intuitive step-by-step logic, turning intimidating formulas into natural understanding.",
    },
    {
      icon: BookOpenCheck,
      title: "Curated High-Yield Material",
      description:
        "Students receive meticulously crafted study modules, crisp formula pocketbooks, past question banks, and daily practice problem (DPP) sheets.",
    },
    {
      icon: Clock,
      title: "Dedicated Daily Doubt Labs",
      description:
        "No question is left unanswered. Students have access to daily post-lecture doubt clearing sessions with faculty to resolve conceptual hurdles immediately.",
    },
    {
      icon: BarChart3,
      title: "In-Depth Performance Analytics",
      description:
        "Weekly simulated tests with detailed question-level error analysis. Parents receive transparent reports on test scores, attendance, and progress trajectory.",
    },
    {
      icon: Sparkles,
      title: "Exam Temperament & Mindset",
      description:
        "Regular workshops on time management, stress reduction, strategic question selection, and overcoming exam anxiety to perform at peak potential.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#f0f5fa] text-[#19364f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BB9331]/15 text-[#BB9331] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>The Excellence Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19364f] tracking-tight">
            Why Goa’s Students & Parents Trust Us
          </h2>
          <p className="text-base text-zinc-600">
            We combine high academic standards with genuine compassion and personal care,
            fostering an environment where every learner thrives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-zinc-200 hover:border-[#BB9331]/50 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#19364f] text-[#BB9331] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#19364f] mb-2 group-hover:text-[#BB9331] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

