import Image from "next/image";
import {
  Flame,
  Globe2,
  CheckCircle2,
  ChefHat,
  Award,
  Ship,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

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
      title: "Dedicated Placement Support",
      description:
        "We support students with structured career guidance, interview preparation, and placement assistance, helping secure roles across hotels, resorts, catering, cruise lines, events, and airlines.",
    },
  ];

  return (
    <section
      id="why-join-us"
      className="py-12 sm:py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-12 md:space-y-16">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-black text-[#1E6DEB] shadow-xs">
            <span>• THE EXCELLENCE ADVANTAGE •</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Top Reasons to Join Goa&apos;s Leading Culinary Academy
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Goa&apos;s booming hospitality sector makes it an ideal place to
            train for a culinary career. Excellence Education Academy combines
            this advantage with state-of-the-art facilities, expert instructors,
            and globally recognized CTH-UK certification.
          </p>
        </ScrollReveal>

        {/* 3 Bento Feature Highlights matching reference Section 3 with Lime Badges */}
        <StaggerContainer
          staggerDelay={0.1}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-px-4 sm:scroll-px-8 md:scroll-px-0 scroll-smooth no-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 py-1 md:py-0"
        >
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <StaggerItem
                key={idx}
                className="w-[82vw] sm:w-[340px] md:w-auto shrink-0 md:shrink snap-start bg-white rounded-[22px] sm:rounded-[28px] p-5 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.03)] hover:shadow-[0_16px_36px_rgba(30,109,235,0.08)] hover:border-[#1E6DEB]/40 transition-all flex flex-col justify-between group cursor-default"
              >
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Electric Lime Square Badge */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center font-black shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-black text-slate-400 tracking-wider">
                      STANDARD {p.num}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {p.description}
                  </p>

                  {p.num === "02" && (
                    <div className="pt-2">
                      <div className="inline-flex items-center px-2.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <Image
                          src="/cth-approved.png"
                          alt="CTH Approved Centre"
                          width={140}
                          height={56}
                          className="h-6 sm:h-7 w-auto object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* 2 Big Feature Visual Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 pt-0 sm:pt-4">
          {/* Sub-block 1: State-of-the-Art Training Kitchens */}
          <ScrollReveal
            variant="fade-up"
            delay={0.1}
            className="bg-white rounded-[22px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_16px_40px_rgba(30,109,235,0.08)] hover:border-[#1E6DEB]/40 transition-all duration-300 flex flex-col justify-between space-y-5 sm:space-y-8"
          >
            <div className="space-y-3.5 sm:space-y-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F0F6FE] border border-[#1E6DEB]/20 text-[#1E6DEB] flex items-center justify-center shadow-xs">
                <Flame className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
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
                  <CheckCircle2
                    className="w-4 h-4 text-[#1E6DEB]"
                    aria-hidden="true"
                  />
                  <span>
                    Professional-grade kitchen &amp; bakery training labs
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1E6DEB]"
                    aria-hidden="true"
                  />
                  <span>
                    Live cooking demonstrations &amp; interactive workshops
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1E6DEB]"
                    aria-hidden="true"
                  />
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
          </ScrollReveal>

          {/* Sub-block 2: Global Stage / Career Opportunities */}
          <ScrollReveal
            variant="fade-up"
            delay={0.2}
            className="bg-white rounded-[22px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_16px_40px_rgba(30,109,235,0.08)] hover:border-[#1E6DEB]/40 transition-all duration-300 flex flex-col justify-between space-y-5 sm:space-y-8"
          >
            <div className="space-y-3.5 sm:space-y-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center shadow-xs">
                <Globe2 className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                Career Opportunities &amp; Placements
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Graduates build careers across hotels and resorts, restaurants
                and catering, cruise lines, event management, airlines, and
                more. We support students with professional career guidance and
                structured industry placement assistance.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1E6DEB]"
                    aria-hidden="true"
                  />
                  <span>
                    Industry-focused career guidance and placement preparation
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1E6DEB]"
                    aria-hidden="true"
                  />
                  <span>
                    Dedicated placement cell connecting graduates with
                    recruiters
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1E6DEB]"
                    aria-hidden="true"
                  />
                  <span>
                    Comprehensive placement assistance across global hospitality
                    sectors
                  </span>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
