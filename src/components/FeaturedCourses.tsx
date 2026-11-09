import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function FeaturedCourses() {
  const featured = [
    {
      image: "/images/culinary-hero.jpg",
      title: "Diploma in Culinary Skills",
      category: "Culinary Arts Track",
      rating: 5,
      duration: "1 Year Full-Time",
      bullets: [
        "Classical French technique & international gastronomy",
        "Commercial kitchen brigade training & food safety (HACCP)",
      ],
      link: "#contact",
    },
    {
      image: "/images/patisserie-skills.jpg",
      title: "Diploma in Patisserie and Confectionery Skills",
      category: "Baking & Pastry Track",
      rating: 5,
      duration: "1 Year Full-Time",
      bullets: [
        "Artisan breads, French viennoiserie, croissants & brioche",
        "Chocolate tempering, showpieces, entremets & dessert plating",
      ],
      link: "#contact",
    },
    {
      image: "/images/cruise-hospitality.jpg",
      title: "Diploma in Cruise Hospitality Services",
      category: "Maritime Careers",
      rating: 5,
      duration: "1 Year + Internship",
      bullets: [
        "International maritime customer service & banquet operations",
        "Guaranteed interview opportunities with top cruise liners",
      ],
      link: "#contact",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700">
            <span>• Featured Diplomas •</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Begin Your Learning Adventure
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Choose from our premier CTH accredited diploma programs tailored to give you an immediate competitive edge in international fine dining and luxury hospitality.
          </p>
        </div>

        {/* 3 Featured Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#fafbfc] rounded-[32px] overflow-hidden border border-zinc-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-zinc-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-zinc-900 border border-zinc-200/70 shadow-sm">
                    {card.category}
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  {/* Rating & Duration */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#BB9331]">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#BB9331]" aria-hidden="true" />
                      ))}
                      <span className="text-xs font-bold text-zinc-700 ml-1">5.0</span>
                    </div>
                    <span className="text-xs font-semibold text-zinc-500 bg-white border border-zinc-200 px-2.5 py-0.5 rounded-full">
                      {card.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-950 tracking-tight leading-snug group-hover:text-[#19364f] transition-colors">
                    {card.title}
                  </h3>

                  {/* 2 Bullet Details from old site spec */}
                  <div className="space-y-2 pt-2 border-t border-zinc-200/70">
                    {card.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-600 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BB9331] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Read More Button */}
              <div className="p-7 pt-0">
                <Link
                  href={card.link}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#BB9331] hover:bg-[#d6a943] text-[#19364f] font-bold text-xs py-3 px-5 rounded-full shadow-sm hover:shadow transition-all group-hover:-translate-y-0.5"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#19364f]" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button (View All Courses) */}
        <div className="text-center pt-4">
          <Link
            href="#courses"
            className="inline-flex items-center gap-2 bg-[#19364f] hover:bg-[#132c40] text-white font-medium text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <span>View All Courses</span>
            <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

