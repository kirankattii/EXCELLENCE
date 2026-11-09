import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, ArrowUpRight, ChefHat } from "lucide-react";

export default function AboutSection() {
  const bullets = [
    "Goa's only premier vocational academy accredited by CTH (Confederation of Tourism & Hospitality, UK)",
    "State-of-the-art commercial training kitchens, bakery labs, and mock bar facilities",
    "100% dedicated placement support across luxury ocean cruise liners & 5-star resort properties",
    "Curriculum delivered by veteran Executive Chefs, Master Bakers, and F&B Industry Directors",
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fafbfc] border-b border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Visuals: Clean Modern Photo Collage (from old site spec) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full aspect-[16/10] rounded-[32px] overflow-hidden border border-zinc-200/80 shadow-lg">
              <Image
                src="/images/training-kitchen.jpg"
                alt="State of the art training kitchen at Excellence Education Academy Goa"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#19364f] shadow-sm">
                ✦ Commercial Training Kitchen
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md">
                <Image
                  src="/images/culinary-hero.jpg"
                  alt="Chef plating dish"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md">
                <Image
                  src="/images/barista-beverage.jpg"
                  alt="Barista and beverage training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: About Us Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-sm">
              <ChefHat className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
              <span>ABOUT US • WELCOME TO EXCELLENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15]">
              Who Are Excellence Education Academy
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              Based in the coastal hospitality hub of Goa, <strong className="text-zinc-950 font-semibold">Excellence Education Academy</strong> is the state’s foremost culinary and hospitality institute dedicated to bridging the gap between student aspirations and global career realities.
            </p>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              We provide immersive vocational education where students spend over 80% of their learning time inside high-spec commercial kitchens, pastry studios, and mock service bars. Through our esteemed accreditation from the UK’s Confederation of Tourism &amp; Hospitality (CTH), our diplomas unlock direct employment on international cruise ships and luxury hotels globally.
            </p>

            {/* 4 Feature Bullet Points from old site spec */}
            <div className="space-y-3 pt-2">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-[#BB9331] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#19364f] hover:bg-[#132c40] text-white font-medium text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>Visit Our Goa Campus</span>
                <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
