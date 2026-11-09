import { Calendar, Users, Target, Compass } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Calendar,
      value: "2025",
      label: "Estd. In Goa",
      description: "Founded with a modern vision for academic excellence",
    },
    {
      icon: Users,
      value: "15 : 1",
      label: "Student-to-Teacher Ratio",
      description: "Ensuring personal attention for every single learner",
    },
    {
      icon: Target,
      value: "100%",
      label: "Syllabus & Concept Mastery",
      description: "Thorough NCERT, state board & competitive alignment",
    },
    {
      icon: Compass,
      value: "360°",
      label: "Holistic Development",
      description: "Exam temperament, discipline, and critical thinking",
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl hover:bg-[#f0f5fa] transition-colors border border-transparent hover:border-[#19364f]/10"
              >
                <div className="w-10 h-10 rounded-lg bg-[#19364f] text-[#BB9331] flex items-center justify-center mb-3 shadow-sm">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#19364f] tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-[#BB9331] mt-0.5">
                  {item.label}
                </div>
                <p className="text-xs text-zinc-500 mt-1">
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

