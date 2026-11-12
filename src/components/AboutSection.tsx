import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChefHat, Sparkles } from "lucide-react";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";

export default function AboutSection() {
  const bullets = [
    "Deliver high-quality education aligned with UK standards.",
    "Bridge the gap between education and employability in hospitality.",
    "Establish a pipeline of skilled professionals for global hospitality brands.",
    "Foster entrepreneurship and leadership in culinary arts.",
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Visuals: Clean Modern Photo Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full aspect-[16/10] rounded-[32px] overflow-hidden border border-slate-200 shadow-xl">
              <Image
                src="/eea-gallary/eea-gallary1.jpg"
                alt="Excellence Education Academy Goa reception and campus"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0A1118]/90 text-[#D4F85A] border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4F85A]" />
                <span>Goa Campus &amp; Training Labs</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/eea-gallary/eea-gallary2.jpg"
                  alt="Commercial hot kitchen workstations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/eea-gallary/eea-gallary5.jpg"
                  alt="Commercial bakery ovens and patisserie lab"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: About Us Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB] shadow-xs">
              <ChefHat className="w-3.5 h-3.5 text-[#1E6DEB]" aria-hidden="true" />
              <span>INSTITUTION PROFILE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Who Are Excellence Education Academy
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <strong className="text-slate-950 font-bold">
                Excellence Education Academy &ndash; Goa
              </strong>{" "}
              is a premier vocational training institution specializing in
              Culinary Arts and Bakery. Strategically located in the vibrant
              coastal state of Goa, Excellence Education Academy is a hub for
              aspiring chefs, bakers, and hospitality professionals seeking
              globally recognized education.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              The academy is built with a vision to provide world-class culinary
              training in India with British accreditations that open doors to
              international career pathways.
            </p>

            {/* 4 Feature Bullet Points */}
            <div className="space-y-3 pt-2">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#D4F85A] text-[#0A1118] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2.5 sm:gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0A1118] hover:bg-black text-white font-black text-xs sm:text-sm px-4 sm:px-8 py-2.5 sm:py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Visit Our Goa Campus</span>
                <AnimatedArrow size={15} className="text-[#D4F85A]" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#F0F6FE] hover:bg-[#e1edfe] text-[#1E6DEB] font-black text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-4 rounded-full border border-[#1E6DEB]/20 transition-colors"
              >
                <span>Read Full About Us</span>
                <AnimatedArrow size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
