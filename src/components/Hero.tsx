import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Users, BookOpen, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#19364f] text-white py-16 sm:py-24 lg:py-28 border-b border-[#BB9331]/20">
      {/* Background Decorative Accents */}
      <div
        className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#BB9331]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#BB9331]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Academy Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BB9331]/15 border border-[#BB9331]/40 text-[#BB9331] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
              <span>Estd. 2025 • Premier Coaching Academy in Goa</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Empowering Minds, <br className="hidden sm:inline" />
              Inspiring{" "}
              <span className="text-[#BB9331] underline decoration-[#BB9331]/50 decoration-wavy decoration-2 underline-offset-8">
                Excellence
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Welcome to <strong className="text-white font-semibold">Excellence Education Academy</strong>, Goa.
              We provide transformative academic coaching for Board Exams (CBSE / ICSE / Goa Board),
              NEET, JEE, and Olympiads with individualized attention and proven pedagogy.
            </p>

            {/* Key Advantages Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-200 max-w-xl mx-auto lg:mx-0 pt-1">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                <span>Small Batches (Max 15–20 Students)</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                <span>Expert & Passionate Faculty</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                <span>Weekly Diagnostic Mock Tests</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#BB9331] flex-shrink-0" aria-hidden="true" />
                <span>Daily Doubt Resolution Labs</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#inquire"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#BB9331] hover:bg-[#d6a943] text-[#19364f] font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Enroll for 2025–26</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="#programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold text-base px-7 py-3.5 rounded-lg border border-white/30 hover:border-[#BB9331] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#BB9331]"
              >
                <BookOpen className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
                <span>Explore Programs</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Emblem & Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing Halo */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#BB9331]/20 to-white/5 blur-xl"
                aria-hidden="true"
              />

              {/* Main Card */}
              <div className="relative bg-white text-[#19364f] rounded-2xl p-6 sm:p-8 shadow-2xl border-4 border-[#BB9331]/40 flex flex-col items-center text-center">
                {/* Floating Admission Badge */}
                <div className="absolute -top-4 bg-[#BB9331] text-[#19364f] font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                  ✨ Admissions Open 2025–2026
                </div>

                {/* Academy Emblem */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 my-3">
                  <Image
                    src="/logo.png"
                    alt="Excellence Education Academy Goa Official Emblem"
                    fill
                    className="object-contain drop-shadow-md"
                    priority
                  />
                </div>

                <div className="w-full pt-4 border-t border-zinc-100 space-y-1">
                  <h2 className="text-xl font-bold tracking-tight text-[#19364f]">
                    Excellence Education Academy
                  </h2>
                  <p className="text-xs font-semibold text-[#BB9331] tracking-widest uppercase">
                    Goa • Established 2025
                  </p>
                  <p className="text-xs text-zinc-600 pt-2 italic">
                    &ldquo;Excellence is not an act, but a dedicated habit.&rdquo;
                  </p>
                </div>

                {/* Sub Features Grid */}
                <div className="grid grid-cols-2 gap-3 w-full mt-5 pt-4 border-t border-zinc-100 text-left">
                  <div className="flex items-start gap-2 bg-[#f0f5fa] p-2.5 rounded-lg border border-[#19364f]/10">
                    <Award className="w-4 h-4 text-[#BB9331] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-[11px] font-bold text-[#19364f]">Top Mentorship</p>
                      <p className="text-[10px] text-zinc-500">Subject Experts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-[#fdf8ed] p-2.5 rounded-lg border border-[#BB9331]/20">
                    <Users className="w-4 h-4 text-[#BB9331] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-[11px] font-bold text-[#19364f]">Personal Care</p>
                      <p className="text-[10px] text-zinc-500">1:1 Doubt Clearing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

