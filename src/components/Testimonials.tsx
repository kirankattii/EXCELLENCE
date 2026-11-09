import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Rajesh Naik",
      role: "Parent (Class 11 Science Student)",
      location: "Panaji, Goa",
      quote:
        "The small batch size makes an enormous difference. The faculty at Excellence Education Academy know my daughter's exact strengths and weak areas. Her confidence in Physics and Chemistry has soared.",
      rating: 5,
    },
    {
      name: "Aarav Fernandes",
      role: "Student (Class 10 CBSE Board)",
      location: "Margao, Goa",
      quote:
        "Before joining Excellence Academy, I struggled with mathematical proofs. The daily doubt clinics and structured DPPs made concepts crystal clear. I feel completely ready for my board examinations.",
      rating: 5,
    },
    {
      name: "Sunita Prabhu",
      role: "Parent (NEET Aspirant)",
      location: "Mapusa, Goa",
      quote:
        "We wanted an academy in Goa that provides national-level competitive rigor without having to relocate our child. Excellence Education Academy has delivered beyond our expectations with disciplined testing.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white border-y border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700">
            <span>• Community feedback •</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Loved by students, trusted by parents in Goa
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Real feedback from families who experienced our personalized mentorship and structured preparation.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#fafbfc] rounded-[32px] p-8 border border-zinc-200/80 shadow-[0_2px_14px_rgba(0,0,0,0.02)] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#BB9331] text-[#BB9331]" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-sm text-zinc-700 leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-zinc-200/70 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-zinc-950">{t.name}</h3>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
                <span className="text-[11px] font-medium text-zinc-600 bg-white border border-zinc-200 px-3 py-1 rounded-full">
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
