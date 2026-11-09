import { Award, Compass, Briefcase, Users } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: "20+",
      label: "Culinary & Service Modules",
      subtext: "Hands-on classical & modern techniques",
      icon: Award,
    },
    {
      value: "50+",
      label: "Global Hotel & Cruise Partners",
      subtext: "Royal Caribbean, Carnival, 5-Star chains",
      icon: Compass,
    },
    {
      value: "100%",
      label: "Job Placement Assistance",
      subtext: "Internships & maritime career onboardings",
      icon: Briefcase,
    },
    {
      value: "100+",
      label: "Trained Hospitality Alumni",
      subtext: "Placed in luxury venues across the world",
      icon: Users,
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 border-y border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#fafbfc] rounded-3xl p-6 border border-zinc-200/70 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl sm:text-4xl font-black text-[#19364f] tracking-tight">
                    {s.value}
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 text-[#BB9331] flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900">
                    {s.label}
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-500 mt-1">
                    {s.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
