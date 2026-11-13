import Image from "next/image";
import { Star, Quote, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Fernandes",
      role: "Commis Chef • Royal Caribbean International",
      location: "Placed from Goa Campus",
      image: "/images/culinary-hero.jpg",
      quote:
        "The hands-on brigade training in Goa prepared me perfectly for high-volume fine dining service. Within weeks of graduating my CTH diploma, I was hired directly aboard Royal Caribbean.",
      rating: 5,
    },
    {
      name: "Neil D'Souza",
      role: "Demi Chef de Partie • Taj Exotica Resort & Spa",
      location: "Diploma in Culinary Skills",
      image: "/images/training-kitchen.jpg",
      quote:
        "Training on real commercial Rational steamers and having master chefs critique my knife precision every single morning gave me the confidence to excel in luxury 5-star hospitality.",
      rating: 5,
    },
    {
      name: "Sanjana Naik",
      role: "Pastry Specialist • Luxury Boutique Patisserie",
      location: "Diploma in Patisserie & Confectionery",
      image: "/images/patisserie-skills.jpg",
      quote:
        "Learning artisan sourdough laminations, chocolate tempering showpieces, and modern plated desserts transformed my dream into an incredible, rewarding international career.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-black text-[#1E6DEB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STUDENT SUCCESS STORIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            What our graduates say
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Real feedback from graduates working aboard luxury international cruise liners and inside premier 5-star kitchens across the globe.
          </p>
        </ScrollReveal>

        {/* Photo Overlay Cards matching reference Section 6 */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, index) => (
            <StaggerItem
              key={index}
              className="relative rounded-[32px] overflow-hidden min-h-[460px] shadow-xl border border-slate-200 flex flex-col justify-end p-8 group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Photo background */}
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
              />

              {/* Rich gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/80 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Top rating badge */}
              <div className="absolute top-6 left-6 z-10 bg-white/20 backdrop-blur-md border border-white/30 px-3.5 py-1 rounded-full flex items-center gap-1.5 text-xs text-white font-bold">
                <Star className="w-3.5 h-3.5 fill-[#D4F85A] text-[#D4F85A]" />
                <span>Verified Alumnus</span>
              </div>

              {/* Content on dark gradient */}
              <div className="relative z-10 space-y-4 text-white">
                <Quote className="w-8 h-8 text-[#D4F85A] opacity-80" />

                <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-3 border-t border-white/20">
                  <h3 className="font-black text-lg text-white tracking-tight">
                    {t.name}
                  </h3>
                  <p className="text-xs font-bold text-[#D4F85A] mt-0.5">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    {t.location}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
