import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Utensils, Compass, Phone, MessageSquare, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#fafbfc] overflow-hidden">
      {/* Floating Side Action Icons (Right Edge - from old website specs) */}
      <aside aria-label="Quick contact" className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3">
        <a
          href="tel:+919876543210"
          className="w-12 h-12 rounded-full bg-[#19364f] hover:bg-[#132c40] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all focus-visible:outline-2 focus-visible:outline-[#19364f]"
          aria-label="Call Admissions Directly"
          title="Call Admissions: +91 98765 43210"
        >
          <Phone className="w-5 h-5 text-[#BB9331]" aria-hidden="true" />
        </a>
        <a
          href="https://wa.me/919876543210?text=Hi%20Excellence%20Education%20Academy,%20I%20am%20interested%20in%20your%20culinary%20and%20hospitality%20courses."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all focus-visible:outline-2 focus-visible:outline-[#25D366]"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
        </a>
      </aside>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-sm text-xs font-semibold text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-[#BB9331] animate-pulse" />
              <span>EXCELLENCE EDUCATION ACADEMY • GOA</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
              Goa&apos;s Leading{" "}
              <span className="text-[#19364f]">Culinary &amp; Hospitality</span>{" "}
              Academy
            </h1>

            {/* Subheading */}
            <div className="inline-block bg-[#BB9331]/15 text-[#8f6e20] px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
              ✦ Goa&apos;s Only CTH Accredited Culinary &amp; Hospitality Institute ✦
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Launch an exciting global career in fine dining, pastry arts, 5-star luxury hotels, and international cruise liners. Master real-world commercial kitchen techniques with internationally recognized UK qualifications in Goa.
            </p>

            {/* Key Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 px-3.5 py-1.5 rounded-full shadow-sm">
                <Award className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
                <span>CTH UK Accredited</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 px-3.5 py-1.5 rounded-full shadow-sm">
                <Utensils className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
                <span>100% Hands-On Kitchen Training</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 px-3.5 py-1.5 rounded-full shadow-sm">
                <Compass className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
                <span>Global Cruise Placements</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#19364f] hover:bg-[#132c40] text-white font-medium text-base px-8 py-3.5 rounded-full shadow-[0_10px_25px_rgba(25,54,79,0.22)] hover:shadow-[0_14px_32px_rgba(25,54,79,0.3)] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#19364f]"
              >
                <span>Enquire Now</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                </div>
              </Link>

              <Link
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-800 font-medium text-base px-7 py-3.5 rounded-full border border-zinc-300 shadow-sm transition-all duration-200 hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-[#19364f]"
              >
                <span>Explore Courses</span>
              </Link>
            </div>
          </div>

          {/* Right Column: AI Generated Hero Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Soft decorative glow */}
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-[#BB9331]/20 to-[#19364f]/10 rounded-[36px] blur-2xl"
                aria-hidden="true"
              />

              {/* Main Visual Card */}
              <div className="relative bg-white rounded-[32px] p-3 sm:p-4 border border-zinc-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-zinc-100">
                  <Image
                    src="/images/culinary-hero.jpg"
                    alt="Professional Chef Plating Gourmet Dish at Excellence Education Academy Goa"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Floating CTH Accreditation Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-zinc-200 flex items-center gap-2 text-xs font-bold text-[#19364f]">
                    <span className="w-2 h-2 rounded-full bg-[#BB9331]" />
                    <span>CTH UK Accredited</span>
                  </div>

                  {/* Floating Job Placement Tag */}
                  <div className="absolute bottom-4 right-4 bg-[#19364f]/95 backdrop-blur-md text-white px-4 py-2 rounded-2xl shadow-lg border border-white/20 text-xs">
                    <p className="font-bold text-[#BB9331]">100% Placement</p>
                    <p className="text-[10px] text-zinc-300">Cruise &amp; 5-Star Hotels</p>
                  </div>
                </div>

                {/* Sub-bar below photo */}
                <div className="pt-4 px-3 pb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 flex-shrink-0">
                      <Image
                        src="/logo.png"
                        alt="Academy Crest"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-900 leading-tight">
                        Excellence Education Academy
                      </p>
                      <p className="text-[10px] text-[#BB9331] font-semibold">
                        Goa Campus • Estd. 2025
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full">
                    Admissions Open
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
