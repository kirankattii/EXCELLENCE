import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle2, Sparkles } from "lucide-react";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";

export default function FeaturedCourses() {
  const featured = [
    {
      image: "/images/culinary-hero.jpg",
      title: "Diploma in Culinary Skills",
      category: "Eligibility: 10th Pass or Equivalent",
      tag: "CTH Level 2",
      rating: 5,
      duration: "12 Months",
      bullets: [
        "Includes practical training and CTH-UK assessments",
        "Commercial kitchen brigade training & food safety (HACCP)",
        "Career preparation for top hotels, resorts & cruise lines",
      ],
      link: "/enroll?course=diploma-culinary",
    },
    {
      image: "/images/patisserie-skills.jpg",
      title: "Diploma in Patisserie and Confectionery Skills",
      category: "Eligibility: 10th Pass or Equivalent",
      tag: "CTH Level 2",
      rating: 5,
      duration: "12 Months",
      bullets: [
        "Artisan breads, French viennoiserie, croissants & brioche",
        "Chocolate tempering, entremets & modern dessert plating",
        "Prepares graduates for 5-star bakeries & patisserie kitchens",
      ],
      link: "/enroll?course=diploma-patisserie",
    },
    {
      image: "/images/cruise-hospitality.jpg",
      title: "Diploma in Cruise Hospitality Services",
      category: "Eligibility: 10th Pass or Equivalent",
      tag: "CTH Level 2",
      rating: 5,
      duration: "6 Months",
      bullets: [
        "International maritime guest service & banquet operations",
        "100% placement assistance with global cruise & hotel recruiters",
        "Globally recognized British CTH-UK certification",
      ],
      link: "/enroll?course=diploma-cruise",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-black text-[#1E6DEB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED DIPLOMAS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Begin Your Learning Adventure
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Join Goa&apos;s premier Culinary &amp; Bakery Academy with globally
            recognized certification.
          </p>
        </div>

        {/* 3 Featured Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_20px_48px_rgba(30,109,235,0.12)] hover:border-[#1E6DEB]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4F85A] text-[#0A1118] px-3.5 py-1 rounded-full text-xs font-black shadow-sm">
                    {card.tag}
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  {/* Rating & Duration */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                          aria-hidden="true"
                        />
                      ))}
                      <span className="text-xs font-black text-slate-900 ml-1">
                        5.0
                      </span>
                    </div>
                    <span className="text-xs font-black text-[#1E6DEB] bg-[#F0F6FE] border border-[#1E6DEB]/20 px-3 py-1 rounded-full">
                      {card.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#1E6DEB] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {card.category}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 text-[#1E6DEB] flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Black Pill Action Button */}
              <div className="p-4 sm:p-7 pt-0">
                <Link
                  href={card.link}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1118] hover:bg-black text-white font-black text-xs sm:text-sm py-4 px-6 rounded-full shadow-md transition-all duration-200 active:scale-95 group-hover:bg-[#1E6DEB]"
                >
                  <span>Enroll Now</span>
                  <AnimatedArrow
                    direction="right"
                    size={15}
                    className="text-[#D4F85A] group-hover:text-white"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#F0F6FE] text-[#1E6DEB] font-black text-sm px-8 py-3.5 rounded-full border border-[#1E6DEB]/25 shadow-xs transition-colors"
          >
            <span>More Courses</span>
            <AnimatedArrow direction="right" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
