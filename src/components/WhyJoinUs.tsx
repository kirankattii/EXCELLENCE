import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Flame, Globe2, CheckCircle2, ShieldCheck } from "lucide-react";

export default function WhyJoinUs() {
  return (
    <section id="why-join-us" className="py-20 sm:py-28 bg-white border-b border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700">
            <span>• WHY CHOOSE US •</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Top Reasons to Join Goa&apos;s Leading Culinary Academy
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Choosing where to build your culinary or hospitality foundation is a life-defining choice. At Excellence Education Academy, we ensure every trainee graduates with battle-tested kitchen stamina, poise, and global employability.
          </p>
        </div>

        {/* 2 Big Feature Bento Blocks (from old site spec) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sub-block 1: State-of-the-Art Training Kitchens and Facilities */}
          <div className="bg-[#fafbfc] rounded-[36px] p-8 sm:p-10 border border-zinc-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#BB9331]/10 text-[#BB9331] flex items-center justify-center">
                <Flame className="w-6 h-6" aria-hidden="true" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#BB9331] tracking-tight">
                State-of-the-Art Training Kitchens and Facilities
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Our custom-designed Goa campus features commercial-grade stainless steel workstations, Rational combi-steamers, blast chillers, induction cooktops, and specialized temperature-controlled pastry labs. Students train on the exact equipment used in Michelin-starred establishments and luxury mega-cruisers.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
                  <span>Dedicated individual cooking stations for every student</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
                  <span>Climate-controlled chocolate &amp; sugar confection studio</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
                  <span>Full-scale mock cocktail bar and barista espresso lab</span>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200">
              <Image
                src="/images/training-kitchen.jpg"
                alt="Commercial Training Kitchen at Excellence Academy Goa"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Sub-block 2: Global Stage / Career Opportunities & Placements */}
          <div className="bg-[#fafbfc] rounded-[36px] p-8 sm:p-10 border border-zinc-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#19364f]/10 text-[#19364f] flex items-center justify-center">
                <Globe2 className="w-6 h-6" aria-hidden="true" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#19364f] tracking-tight">
                Global Stage: Career Opportunities &amp; Placements
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                With our CTH UK accreditation, our credentials act as a universal passport across 40+ countries. We maintain active hiring relationships with the world&apos;s leading cruise lines (Royal Caribbean, Carnival, MSC, Princess, Viking) and top 5-star hotel chains across Goa, Dubai, Europe, and the Americas.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-[#19364f]" aria-hidden="true" />
                  <span>Direct cruise ship interview drives held on our Goa campus</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-[#19364f]" aria-hidden="true" />
                  <span>Pre-boarding STCW maritime safety orientation &amp; visa guidance</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-[#19364f]" aria-hidden="true" />
                  <span>100% placement track record for qualified diploma graduates</span>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200">
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

