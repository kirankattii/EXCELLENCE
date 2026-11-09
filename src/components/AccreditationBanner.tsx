import Link from "next/link";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function AccreditationBanner() {
  return (
    <section id="accreditation" className="py-20 sm:py-24 bg-[#19364f] text-white relative overflow-hidden">
      {/* Subtle gold glow backdrop */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#BB9331]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#BB9331]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-[#BB9331]">
          <Award className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
          <span>UK GOLD STANDARD RECOGNITION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Confederation of Tourism &amp; Hospitality (CTH) ACCREDITATION
        </h2>

        <p className="text-base sm:text-lg text-zinc-200 leading-relaxed max-w-3xl mx-auto">
          The Confederation of Tourism &amp; Hospitality (CTH, UK) is the world&apos;s leading specialist professional awarding body for qualifications in the growing commercial hospitality, culinary, and tourism sectors. Established in 1982, CTH qualifications are regulated by Ofqual (UK Government) and recognized by universities and premier hospitality employers across more than 40 countries.
        </p>

        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          As Goa&apos;s only accredited CTH center, Excellence Education Academy guarantees your culinary or hospitality diploma adheres to stringent international culinary benchmarks, enabling direct credit transfers and immediate overseas employment.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs sm:text-sm font-semibold text-zinc-200">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
            <span>Ofqual UK Regulated</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
            <span>Accepted in 40+ Nations</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
            <span>Maritime &amp; Cruise Endorsed</span>
          </span>
        </div>

        <div className="pt-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#BB9331] hover:bg-[#d6a943] text-[#19364f] font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Learn More About CTH Qualifications</span>
            <ArrowRight className="w-4 h-4 text-[#19364f]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
