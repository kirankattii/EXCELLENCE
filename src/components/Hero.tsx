import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, GraduationCap, Award, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#fafbfc] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Centered Modern Hero Block */}
        <div className="text-center max-w-4xl mx-auto space-y-7">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-sm text-xs font-medium text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-[#BB9331] animate-pulse" />
            <span>• Estd. 2025 • Premier Coaching Academy in Goa •</span>
          </div>

          {/* Main Headline with Modern Pill Accents */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
            What if every{" "}
            <span className="inline-flex items-center gap-1.5 align-middle bg-[#19364f] text-white px-3 sm:px-4 py-1 rounded-full text-2xl sm:text-4xl lg:text-5xl font-bold shadow-sm">
              <span className="text-[#BB9331]">✦</span>
              <span className="tracking-tighter">study hour</span>
            </span>{" "}
            led directly to top ranks?
          </h1>

          {/* Subtitle with Capsule Tags */}
          <p className="text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            <span className="inline-block bg-[#BB9331]/15 text-[#967523] px-2.5 py-0.5 rounded-full font-semibold text-sm sm:text-base mr-1">
              Board Exams
            </span>
            ,{" "}
            <span className="inline-block bg-zinc-200/70 text-zinc-900 px-2.5 py-0.5 rounded-full font-semibold text-sm sm:text-base mr-1">
              NEET & JEE
            </span>
            , and{" "}
            <span className="inline-block bg-[#19364f] text-white px-2.5 py-0.5 rounded-full font-semibold text-sm sm:text-base mr-1">
              Foundation
            </span>{" "}
            under one roof built for compounding conceptual mastery, not rote memorization.
          </p>

          {/* Action Pill Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="#inquire"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#19364f] hover:bg-[#132c40] text-white font-medium text-base px-8 py-3.5 rounded-full shadow-[0_10px_25px_rgba(25,54,79,0.22)] hover:shadow-[0_14px_32px_rgba(25,54,79,0.3)] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#19364f]"
            >
              <span>Book academic counseling</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </div>
            </Link>

            <Link
              href="#programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-800 font-medium text-base px-7 py-3.5 rounded-full border border-zinc-300 shadow-sm transition-all duration-200 hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-[#19364f]"
            >
              <span>See our programs</span>
            </Link>
          </div>
        </div>

        {/* Bento Grid Showcase Below Hero (Inspired by Screenshots 1, 2 & 5) */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Bento: Academy Profile & Emblem */}
          <div className="lg:col-span-7 bg-white rounded-[32px] border border-zinc-200/80 p-8 sm:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-center gap-8 justify-between">
            <div className="space-y-4 text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BB9331] bg-[#BB9331]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Goa Campus • 2025–26</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                Personalized Care in Every Classroom
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Small batches of maximum 15–20 students guarantee that mentors actively track every learner&apos;s daily comprehension, error patterns, and progress.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="text-xs font-medium text-zinc-700 bg-zinc-100 px-3 py-1.5 rounded-full">
                  ✓ Daily 1:1 Doubt Clearing
                </span>
                <span className="text-xs font-medium text-zinc-700 bg-zinc-100 px-3 py-1.5 rounded-full">
                  ✓ Weekly Simulated Mocks
                </span>
                <span className="text-xs font-medium text-zinc-700 bg-zinc-100 px-3 py-1.5 rounded-full">
                  ✓ NCERT & Board Rigor
                </span>
              </div>
            </div>

            {/* Emblem Container */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0 bg-[#fafbfc] rounded-3xl p-4 border border-zinc-200/70 flex items-center justify-center shadow-inner">
              <div className="relative w-full h-full">
                <Image
                  src="/logo.png"
                  alt="Excellence Education Academy Crest"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Bento: Metric Card with Progress Matrix */}
          <div className="lg:col-span-5 bg-[#19364f] text-white rounded-[32px] p-8 sm:p-10 shadow-lg flex flex-col justify-between relative overflow-hidden">
            {/* Soft decorative glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 bg-[#BB9331]/20 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              {/* Modern Dot Matrix Grid (matching Screenshot 1 & 5) */}
              <div className="flex items-center gap-2 mb-6" aria-label="Visual curriculum completion indicator">
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(18)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${
                        i < 12 ? "bg-[#BB9331]" : "bg-white/15"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Big Stat */}
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                15 : 1
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#BB9331] mt-1">
                Student-to-Mentor Ratio
              </div>

              <p className="text-sm text-zinc-300 mt-4 leading-relaxed font-normal">
                Built for clarity, retention, and compounding confidence across Board Exams, NEET, and JEE.
              </p>
            </div>

            {/* Micro Stats Row */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-xs text-zinc-400">NCERT Coverage</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#BB9331]">0</div>
                <div className="text-xs text-zinc-400">Unresolved Doubts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
