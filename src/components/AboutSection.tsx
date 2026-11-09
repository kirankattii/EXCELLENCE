import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, HeartHandshake, Lightbulb, Compass, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#f0f5fa] text-[#19364f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image / Crest Graphic */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#BB9331] to-[#19364f] rounded-2xl opacity-20 blur-lg" />
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-[#BB9331]/30 text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/logo1.png"
                    alt="Excellence Education Academy Crest"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="bg-[#19364f] text-white py-3 px-4 rounded-xl space-y-1">
                  <h3 className="font-bold text-base text-[#BB9331]">Our Core Philosophy</h3>
                  <p className="text-xs text-zinc-300">
                    Nurturing independent thought, disciplined study habits, and unyielding academic rigor.
                  </p>
                </div>
                <div className="mt-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                  Serving Goa&apos;s Aspiring Students
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BB9331]/15 text-[#BB9331] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>About Excellence Education Academy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19364f] tracking-tight leading-tight">
              A Legacy of Quality Learning, Rooted in Goa
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed">
              Established in 2025 in the vibrant state of Goa,{" "}
              <strong className="text-[#19364f] font-semibold">Excellence Education Academy</strong> was
              founded with a singular mission: to provide Goa’s youth with the highest caliber of coaching,
              matching national standards without losing touch with individual student needs.
            </p>

            <p className="text-base text-zinc-600 leading-relaxed">
              We bridge the gap between school curriculum and competitive examination benchmarks. Whether
              mastering foundational concepts in middle school or cracking prestigious medical (NEET) and
              engineering (JEE) exams, our structured methodology equips learners with confidence, speed, and precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <div className="p-2 rounded-lg bg-[#19364f] text-[#BB9331]">
                  <Lightbulb className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#19364f]">Concept-First Pedagogy</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    No rote memorization; we focus on intuitive understanding from first principles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <div className="p-2 rounded-lg bg-[#BB9331] text-[#19364f]">
                  <HeartHandshake className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#19364f]">Personalized Mentoring</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Dedicated teachers mentor students through emotional support and academic milestones.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#inquire"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#19364f] hover:text-[#BB9331] group"
              >
                <span>Learn more about our admission process</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#BB9331]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

