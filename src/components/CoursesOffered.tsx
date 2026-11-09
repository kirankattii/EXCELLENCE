import Link from "next/link";
import { ArrowUpRight, ChefHat, Cake, Ship, UtensilsCrossed, Hotel, Wine, Award } from "lucide-react";

export default function CoursesOffered() {
  const courses = [
    {
      id: "diploma-culinary",
      pillColor: "bg-blue-50 text-blue-700 border-blue-200",
      accentBg: "bg-blue-500/10 text-blue-700",
      icon: ChefHat,
      duration: "1 Year / Full Time",
      title: "Diploma in Culinary Skills",
      type: "CTH Level 2 / 3 Diploma",
      description:
        "Comprehensive commercial cookery training: master classical French knife work, stocks, sauces, butchery, international culinary techniques, kitchen brigade management, and HACCP food safety standards.",
      skills: ["Classical French Sauces & Stocks", "Poultry, Meat & Seafood Butchery", "Modern Fine Dining Plating", "Kitchen Safety & Food Costing"],
    },
    {
      id: "diploma-patisserie",
      pillColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accentBg: "bg-emerald-500/10 text-emerald-700",
      icon: Cake,
      duration: "1 Year / Full Time",
      title: "Diploma in Patisserie and Confectionery Skills",
      type: "CTH Specialist Diploma",
      description:
        "Master the delicate art of French pastry, artisan sourdough breads, laminated viennoiserie, chocolate tempering, showpieces, entremets, modern gateaux, and sugar confectioneries in a dedicated baking studio.",
      skills: ["Artisan Viennoiserie & Croissants", "Chocolate Tempering & Pralines", "Modern Plated Desserts", "Custom Cake Sculpting & Fondant"],
    },
    {
      id: "diploma-cruise",
      pillColor: "bg-teal-50 text-teal-700 border-teal-200",
      accentBg: "bg-teal-500/10 text-teal-700",
      icon: Ship,
      duration: "1 Year + Sea Internship",
      title: "Diploma in Cruise Hospitality Services",
      type: "Maritime Hospitality Track",
      description:
        "Designed specifically for luxury international cruise liners. Covers nautical hospitality regulations, high-volume dining service, cabin management, guest relations, and international maritime safety.",
      skills: ["Cruise Ship F&B Operations", "International Guest Protocol", "Banqueting & Gala Service", "Maritime Safety & STCW Standards"],
    },
    {
      id: "cert-culinary",
      pillColor: "bg-amber-50 text-amber-700 border-amber-200",
      accentBg: "bg-amber-500/10 text-amber-700",
      icon: UtensilsCrossed,
      duration: "6 Months Intensive",
      title: "Certificate in Culinary Skills",
      type: "Vocational Foundation",
      description:
        "Fast-track foundational program for aspiring line cooks and culinary enthusiasts. Focuses on foundational knife drills, essential kitchen prep, hygiene, and key continental culinary dishes.",
      skills: ["Essential Culinary Knife Skills", "Vegetable, Meat & Fish Prep", "Basic Sauces & Soups", "Commercial Kitchen Etiquette"],
    },
    {
      id: "cert-front-office",
      pillColor: "bg-purple-50 text-purple-700 border-purple-200",
      accentBg: "bg-purple-500/10 text-purple-700",
      icon: Hotel,
      duration: "6 Months / Professional",
      title: "Certificate in Front Office / Food & Beverage Service",
      type: "Hospitality Management",
      description:
        "Professional front-of-house training covering hotel property management systems (PMS), VIP check-ins, silver service, sommelier fundamentals, table setting, and luxury guest communication.",
      skills: ["Opera PMS & Reservation Systems", "Fine Dining Table Etiquette", "Upselling & Revenue Techniques", "Guest Complaint Resolution"],
    },
    {
      id: "cert-bartending",
      pillColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      accentBg: "bg-cyan-500/10 text-cyan-700",
      icon: Wine,
      duration: "3 to 6 Months",
      title: "Certificate in Bartending / Barista Skills",
      type: "Beverage & Mixology",
      description:
        "Master specialty espresso extraction, latte art pouring, cocktail mixology, molecular drinks, beverage costing, bar inventory, and flair bartending for high-end lounges, clubs, and cruise bars.",
      skills: ["Classic & Craft Cocktail Mixology", "Specialty Coffee & Latte Art", "Bar Equipment & Flair Basics", "Responsible Alcohol Service"],
    },
  ];

  return (
    <section id="courses" className="py-20 sm:py-28 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
            <span>CTH ACCREDITED VOCATIONAL PATHWAYS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Courses Offered
          </h2>

          <p className="text-sm sm:text-base font-bold text-[#BB9331] uppercase tracking-wider">
            Goa&apos;s Only CTH Accredited Culinary &amp; Hospitality Institute
          </p>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Accredited by the Confederation of Tourism &amp; Hospitality (CTH, UK), our industry-driven diplomas and certificates equip students with international qualifications respected by top hotels and cruise liners worldwide.
          </p>
        </div>

        {/* 6 Colored Pill Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-[32px] p-7 sm:p-8 border border-zinc-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-zinc-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Colored Pill Badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${course.pillColor}`}
                    >
                      {course.type}
                    </span>
                    <span className="text-[11px] font-semibold text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded-full">
                      {course.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${course.accentBg}`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-2 group-hover:text-[#19364f] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Key Skills Checklist */}
                  <div className="space-y-1.5 pt-4 border-t border-zinc-100 mb-6">
                    <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Key Modules Covered:
                    </p>
                    {course.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BB9331]" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Enroll Action Button */}
                <Link
                  href="#contact"
                  className="w-full inline-flex items-center justify-between bg-zinc-50 hover:bg-[#19364f] text-zinc-800 hover:text-white text-xs font-semibold py-3 px-4 rounded-full border border-zinc-200/80 transition-all group-hover:border-[#19364f]"
                >
                  <span>Enquire for Next Batch</span>
                  <div className="w-6 h-6 rounded-full bg-white text-zinc-900 group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

