import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChefHat,
  Cake,
  Ship,
  UtensilsCrossed,
  Hotel,
  Wine,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function CoursesOffered() {
  const courses = [
    {
      id: "diploma-culinary",
      tag: "CTH Level 2",
      icon: ChefHat,
      duration: "12 Months • 10th Pass or Equivalent",
      title: "CTH Level 2 Diploma in Culinary Skills",
      type: "Classical Cookery & Kitchen Practice",
      description:
        "Comprehensive commercial cookery training: master classical knife work, stocks, mother sauces, butchery, international culinary techniques, kitchen brigade coordination, and HACCP food safety standards.",
      skills: [
        "Classical Sauces & Stocks",
        "Poultry, Meat & Seafood Prep",
        "Fine Dining Plating",
        "Kitchen Safety & Food Hygiene",
      ],
    },
    {
      id: "diploma-patisserie",
      tag: "CTH Level 2",
      icon: Cake,
      duration: "12 Months • 10th Pass or Equivalent",
      title: "CTH Level 2 Diploma in Patisserie and Confectionery Skills",
      type: "Artisan Breads & Confectionery",
      description:
        "Master the delicate art of French pastry, artisan breads, laminated viennoiserie, chocolate tempering, entremets, modern gateaux, and sugar confectioneries in our bakery and pastry lab.",
      skills: [
        "Artisan Viennoiserie & Croissants",
        "Chocolate Tempering & Pralines",
        "Modern Plated Desserts",
        "Bakery & Confectionery Arts",
      ],
    },
    {
      id: "diploma-cruise",
      tag: "CTH Level 2",
      icon: Ship,
      duration: "6 Months • 10th Pass or Equivalent",
      title: "CTH Level 2 Diploma in Cruise Hospitality Services",
      type: "Maritime Hospitality Track",
      description:
        "Designed specifically for international cruise liners. Covers maritime hospitality standards, high-volume dining service, cabin & guest relations, and onboard safety awareness.",
      skills: [
        "Cruise Ship F&B Operations",
        "International Guest Protocol",
        "Banqueting & Gala Service",
        "Maritime Hospitality Standards",
      ],
    },
    {
      id: "cert-bartending",
      tag: "CTH Level 2",
      icon: Wine,
      duration: "Professional Certificate",
      title: "CTH Level 2 Certificate in Professional Bartending Skills",
      type: "Beverage & Craft Mixology",
      description:
        "Master classic and craft cocktail mixology, beverage preparation, bar inventory, glassware service, and responsible beverage operations for luxury lounges, hotels, and cruise bars.",
      skills: [
        "Classic & Craft Mixology",
        "Bar Equipment & Service",
        "Beverage Costing & Inventory",
        "Responsible Beverage Service",
      ],
    },
    {
      id: "cert-front-office",
      tag: "CTH Level 2",
      icon: Hotel,
      duration: "Professional Certificate",
      title:
        "CTH Level 2 Certificate in Professional Restaurant Front of House Service",
      type: "Restaurant & Guest Service",
      description:
        "Professional front-of-house training covering restaurant operations, luxury dining etiquette, table setting, reservation coordination, and high-touch guest communication.",
      skills: [
        "Fine Dining Table Service",
        "Guest Reception & Reservations",
        "Food & Beverage Pairing Basics",
        "Hospitality Service Standards",
      ],
    },
    {
      id: "award-cookery",
      tag: "CTH Level 1",
      icon: UtensilsCrossed,
      duration: "Foundation Award",
      title: "CTH Level 1 Award in Basic Cookery Skills",
      type: "Culinary Foundation",
      description:
        "Entry-level foundational program for aspiring cooks and culinary beginners. Focuses on essential knife drills, ingredient prep, kitchen hygiene, and core culinary techniques.",
      skills: [
        "Essential Knife Skills",
        "Basic Vegetable & Meat Prep",
        "Core Stocks & Soups",
        "Commercial Kitchen Hygiene",
      ],
    },
  ];

  return (
    <section
      id="courses"
      className="py-20 sm:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB] shadow-xs">
            <Award className="w-3.5 h-3.5" />
            <span>CTH ACCREDITED VOCATIONAL PATHWAYS</span>
          </div>

          <div className="flex justify-center pt-1">
            <Image
              src="/cth-logo2.png"
              alt="CTH — Confederation of Tourism & Hospitality"
              width={160}
              height={32}
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Courses Offered
          </h2>

          <p className="text-sm sm:text-base font-extrabold text-[#1E6DEB] uppercase tracking-wider">
            Goa&apos;s Only CTH-Accredited Culinary &amp; Hospitality Institute
          </p>

          <p className="text-base text-slate-600 leading-relaxed max-w-5xl mx-auto font-normal">
            At Excellence Education Academy Goa, we offer British-standard
            culinary and bakery programs accredited by CTH-UK. Our mission is to
            empower students with the skills, discipline, and creativity needed
            to succeed in global hospitality right from the heart of
            India&apos;s tourism capital.
          </p>
        </div>

        {/* 6 Clean Program Cards matching reference spec */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-[32px] p-8 border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_20px_48px_rgba(30,109,235,0.12)] hover:border-[#1E6DEB]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center font-black shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-[#0A1118] bg-[#D4F85A] px-3 py-1 rounded-full">
                      {course.tag}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#1E6DEB]">
                      {course.duration}
                    </span>
                    <h3 className="text-xl font-black text-slate-950 tracking-tight leading-snug mt-1 group-hover:text-[#1E6DEB] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-0.5">
                      {course.type}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {course.description}
                  </p>

                  {/* Skills Checklist */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      Core Modules &amp; Skills:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                      {course.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6DEB] flex-shrink-0" />
                          <span className="truncate">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8">
                  <Link
                    href={`/enroll?course=${course.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1118] hover:bg-black text-white font-black text-xs sm:text-sm py-4 px-6 rounded-full shadow-md transition-all duration-200 active:scale-95 group-hover:bg-[#1E6DEB]"
                  >
                    <span>Apply for Program</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4F85A] group-hover:text-white" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
