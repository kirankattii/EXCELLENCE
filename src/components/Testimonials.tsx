import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Rajesh Naik",
      role: "Parent (Class 11 Science Student)",
      location: "Panaji, Goa",
      quote:
        "The small batch size makes an enormous difference. The teachers at Excellence Education Academy know my daughter's exact strengths and weak areas. Her confidence in Physics and Chemistry has soared.",
      rating: 5,
    },
    {
      name: "Aarav Fernandes",
      role: "Student (Class 10 CBSE Board)",
      location: "Margao, Goa",
      quote:
        "Before joining Excellence Academy, I struggled with mathematical proofs and application problems. The daily doubt clinics and structured DPPs made concepts crystal clear. I feel completely ready for my board exams.",
      rating: 5,
    },
    {
      name: "Sunita Prabhu",
      role: "Parent (NEET Aspirant)",
      location: "Mapusa, Goa",
      quote:
        "We wanted an academy in Goa that provides national-standard coaching without having to send our child to another state. Excellence Education Academy has delivered beyond our expectations with disciplined mock tests and dedicated faculty.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#19364f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BB9331]/20 text-[#BB9331] text-xs font-bold uppercase tracking-wider border border-[#BB9331]/40">
            <Quote className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Student & Parent Voices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by Students, Trusted by Parents Across Goa
          </h2>
          <p className="text-base text-zinc-300">
            Hear from our community about how our focused mentorship and nurturing environment
            catalyze academic transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 hover:border-[#BB9331]/50 rounded-2xl p-7 flex flex-col justify-between backdrop-blur-sm transition-all duration-200"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-[#BB9331]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#BB9331]" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-zinc-200 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-white">{t.name}</h3>
                  <p className="text-xs text-[#BB9331]">{t.role}</p>
                </div>
                <span className="text-[11px] text-zinc-400 bg-white/10 px-2.5 py-1 rounded-full">
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

