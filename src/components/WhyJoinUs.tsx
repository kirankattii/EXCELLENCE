import Image from "next/image";
import { Flame, Globe2, CheckCircle2, ChefHat, Award, Ship, ArrowUpRight } from "lucide-react";

export default function WhyJoinUs() {
  const pillars = [
    {
      num: "01",
      icon: ChefHat,
      title: "Practical, Hands-On Learning",
      description:
        "Our curriculum blends classroom theory with extensive practical experience through live cooking demonstrations, hands-on lab sessions, and industry internships.",
    },
    {
      num: "02",
      icon: Award,
      title: "British CTH-UK Accreditation",
      description:
        "Our association with CTH-UK ensures your qualification is internationally recognized across over 100 countries, opening doors to global opportunities.",
    },
    {
      num: "03",
      icon: Ship,
      title: "100% Placement Support",
      description:
        "We support students with career guidance and internships from day one, helping secure roles across hotels, resorts, catering, cruise lines, events, and airlines.",
    },
  ];

  return (
    <section id="why-join-us" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-black text-[#1E6DEB] shadow-xs">
            <span>• THE EXCELLENCE ADVANTAGE •</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Top Reasons to Join Goa&apos;s Leading Culinary Academy
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Goa&apos;s booming hospitality sector makes it an ideal place to
            train for a culinary career. Excellence Education Academy combines
            this advantage with state-of-the-art facilities, expert instructors,
            and globally recognized CTH-UK certification.
          </p>
        </div>

        {/* 3 Bento Feature Highlights matching reference Section 3 with Lime Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[28px] p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.03)] hover:shadow-[0_16px_36px_rgba(30,109,235,0.08)] hover:border-[#1E6DEB]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Electric Lime Square Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center font-black shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-slate-400 tracking-wider">
                      STANDARD {p.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 tracking-tight leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-black text-[#1E6DEB] group-hover:translate-x-1 transition-transform">
                  <span>Explore Standard {p.num}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 2 Big Feature Visual Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          {/* Sub-block 1: State-of-the-Art Training Kitchens */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_16px_40px_rgba(30,109,235,0.08)] hover:border-[#1E6DEB]/40 transition-all duration-300 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F6FE] border border-[#1E6DEB]/20 text-[#1E6DEB] flex items-center justify-center shadow-xs">
                <Flame className="w-6 h-6" aria-hidden="true" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                State-of-the-Art Training Kitchens and Facilities
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                In our modern kitchen and bakery labs, students train with
                professional-grade equipment to simulate real restaurant and
                hotel environments. They cook, bake, and mix drinks under the
                guidance of experienced chefs through live demos and interactive
                workshops.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6DEB]" aria-hidden="true" />
                  <span>Professional-grade kitchen &amp; bakery training labs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6DEB]" aria-hidden="true" />
                  <span>Live cooking demonstrations &amp; interactive workshops</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6DEB]" aria-hidden="true" />
                  <span>Simulated real restaurant and hotel environments</span>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <Image
                src="/eea-gallary/eea-gallary2.jpg"
                alt="State-of-the-Art Commercial Training Kitchen at Excellence Education Academy Goa"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Sub-block 2: Global Stage / Career Opportunities */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_16px_40px_rgba(30,109,235,0.08)] hover:border-[#1E6DEB]/40 transition-all duration-300 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center shadow-xs">
                <Globe2 className="w-6 h-6" aria-hidden="true" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Career Opportunities &amp; Placements
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Graduates build careers across hotels and resorts, restaurants
                and catering, cruise lines, event management, airlines, and
                more. We support students with career guidance and internships
                from day one, maintaining 100% placement support.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6DEB]" aria-hidden="true" />
                  <span>Career guidance and industry internships from day one</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6DEB]" aria-hidden="true" />
                  <span>Dedicated placement team connecting alumni worldwide</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1E6DEB]" aria-hidden="true" />
                  <span>100% placement support across global hospitality sectors</span>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <Image
                src="/images/cruise-hospitality.jpg"
                alt="Global Cruise Hospitality Career Placements"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
