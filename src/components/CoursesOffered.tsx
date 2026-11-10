"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChefHat,
  Cake,
  Ship,
  UtensilsCrossed,
  Hotel,
  Wine,
  ChevronRight,
  CheckCircle2,
  Star,
  Clock,
  Award,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function CoursesOffered() {
  const courses = [
    {
      id: "diploma-culinary",
      title: "Diploma in Culinary Skills",
      tagline: "Classical French Gastronomy & Modern Kitchen Leadership",
      duration: "1 Year Full-Time • CTH UK Level 2 & 3",
      description:
        "Comprehensive commercial cookery training in state-of-the-art kitchens. Master classical French knife techniques, mother sauces, poultry and seafood butchery, modern fine-dining plating, kitchen brigade leadership, and international HACCP food hygiene protocols.",
      skills: [
        "Classical French Sauces & Stocks",
        "Poultry, Meat & Seafood Butchery",
        "Modern Fine Dining Plating",
        "Kitchen Safety & Food Costing",
      ],
      icon: <ChefHat className="w-7 h-7 text-indigo-600" />,
      colorClass: "indigo",
      bgClass: "bg-indigo-50",
      textClass: "text-indigo-600",
      image: "/images/culinary-hero.jpg",
      visualBadge: "CTH UK Level 2 & 3",
      visualTitle: "Commercial Culinary Kitchen",
      visualSubtitle: "80% Practical Kitchen Hours",
      visualMetric: "100% Placement",
    },
    {
      id: "diploma-patisserie",
      title: "Diploma in Patisserie & Confectionery",
      tagline: "Artisan Viennoiserie, Chocolate & Haute Pâtisserie",
      duration: "1 Year Full-Time • Specialist Pastry Studio",
      description:
        "Delve into the delicate craft of French baking inside our climate-controlled pastry studio. Master artisan sourdoughs, flaky butter croissants, chocolate tempering, showpieces, entremets, modern gateaux, and sugar confectioneries under expert pastry chefs.",
      skills: [
        "Artisan Viennoiserie & Croissants",
        "Chocolate Tempering & Pralines",
        "Modern Plated Entremets",
        "Custom Cake Sculpting & Fondant",
      ],
      icon: <Cake className="w-7 h-7 text-emerald-600" />,
      colorClass: "emerald",
      bgClass: "bg-emerald-50",
      textClass: "text-emerald-600",
      image: "/images/patisserie-skills.jpg",
      visualBadge: "18°C Controlled Studio",
      visualTitle: "French Pastry & Baking Studio",
      visualSubtitle: "Croissants • Macarons • Chocolates",
      visualMetric: "Master Baker Track",
    },
    {
      id: "diploma-cruise",
      title: "Diploma in Cruise Hospitality Services",
      tagline: "Direct Maritime Careers on Luxury Ocean Mega-Liners",
      duration: "1 Year + Sea Internship • Global Placement",
      description:
        "Engineered specifically for premier international cruise lines like Royal Caribbean, Carnival, and Viking. Covers high-volume maritime banqueting, fine-dining silver service, international guest protocols, and STCW maritime safety standards with direct campus hiring.",
      skills: [
        "Cruise Ship F&B Operations",
        "International Guest Protocol",
        "Banqueting & Gala Service",
        "Maritime Safety & STCW Standards",
      ],
      icon: <Ship className="w-7 h-7 text-teal-600" />,
      colorClass: "teal",
      bgClass: "bg-teal-50",
      textClass: "text-teal-600",
      image: "/images/cruise-hospitality.jpg",
      visualBadge: "Global Maritime Passport",
      visualTitle: "Cruise Line Dining & Hospitality",
      visualSubtitle: "Royal Caribbean & Carnival Hiring",
      visualMetric: "Global Sea Careers",
    },
    {
      id: "cert-culinary",
      title: "Certificate in Culinary Skills",
      tagline: "Intensive 6-Month Foundational Cookery",
      duration: "6 Months Intensive • Vocational Foundation",
      description:
        "A fast-track foundational program for aspiring line cooks and culinary enthusiasts. Focuses on essential knife drills, commercial kitchen prep, continental cooking recipes, hygiene standards, and kitchen brigade teamwork.",
      skills: [
        "Essential Culinary Knife Skills",
        "Vegetable, Meat & Fish Prep",
        "Basic Sauces & Soups",
        "Commercial Kitchen Etiquette",
      ],
      icon: <UtensilsCrossed className="w-7 h-7 text-amber-600" />,
      colorClass: "amber",
      bgClass: "bg-amber-50",
      textClass: "text-amber-600",
      image: "/images/training-kitchen.jpg",
      visualBadge: "Fast-Track Cookery",
      visualTitle: "Vocational Foundation Course",
      visualSubtitle: "Individual Cooking Stations",
      visualMetric: "Job-Ready Skills",
    },
    {
      id: "cert-front-office",
      title: "Certificate in Front Office / F&B Service",
      tagline: "5-Star Front-of-House & Hotel Operations",
      duration: "6 Months Professional • Hotel Management",
      description:
        "Professional front-of-house training covering hotel property management systems (Opera PMS), VIP guest relations, silver service dining, sommelier wine service, banquet coordination, and international hospitality etiquette.",
      skills: [
        "Opera PMS & Reservation Systems",
        "Fine Dining Table Etiquette",
        "Upselling & Revenue Techniques",
        "Guest Complaint Resolution",
      ],
      icon: <Hotel className="w-7 h-7 text-purple-600" />,
      colorClass: "purple",
      bgClass: "bg-purple-50",
      textClass: "text-purple-600",
      image: "/images/cruise-hospitality.jpg",
      visualBadge: "Opera PMS Certified",
      visualTitle: "Hotel Front Office & F&B Service",
      visualSubtitle: "5-Star Concierge & Silver Service",
      visualMetric: "Hospitality Management",
    },
    {
      id: "cert-bartending",
      title: "Certificate in Bartending & Barista Skills",
      tagline: "Specialty Espresso Extraction, Latte Art & Craft Mixology",
      duration: "3 to 6 Months • Beverage & Mixology Lab",
      description:
        "Master specialty espresso extraction, microfoam latte art, cocktail mixology, molecular drinks, beverage costing, bar inventory, and flair bartending for high-end resort bars, lounges, and luxury cruise clubs.",
      skills: [
        "Classic & Craft Cocktail Mixology",
        "Specialty Coffee & Latte Art",
        "Bar Equipment & Flair Basics",
        "Responsible Alcohol Service",
      ],
      icon: <Wine className="w-7 h-7 text-cyan-600" />,
      colorClass: "cyan",
      bgClass: "bg-cyan-50",
      textClass: "text-cyan-600",
      image: "/images/barista-beverage.jpg",
      visualBadge: "Latte Art & Mixology",
      visualTitle: "Beverage & Espresso Academy",
      visualSubtitle: "Commercial Bar & Coffee Lab",
      visualMetric: "Barista Pro Track",
    },
  ];

  return (
    <section id="courses" className="py-24 sm:py-32 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-24 sm:space-y-32">
        {/* Header Section (matching the provided UI style) */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Star size={14} className="fill-indigo-600 text-indigo-600" />
              <span>Goa&apos;s Only CTH Accredited Institute</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Courses We Offer &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19364f] via-[#244b6e] to-[#BB9331]">
                Vocational Qualifications
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              We provide world-class vocational training in culinary arts, French patisserie, mixology, and cruise line hospitality, all accredited by the Confederation of Tourism &amp; Hospitality (CTH, UK).
            </p>
          </motion.div>
        </div>

        {/* Alternating Zig-Zag Services Grid */}
        <div className="space-y-24 sm:space-y-36">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-12 md:gap-20`}
            >
              {/* Text Content Column */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-14 h-14 rounded-2xl ${course.bgClass} flex items-center justify-center shadow-sm border border-slate-100`}
                  >
                    {course.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                    {course.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {course.title}
                  </h3>
                  <p className={`text-base sm:text-lg font-semibold ${course.textClass} mb-4`}>
                    {course.tagline}
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Key Skills Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {course.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#BB9331] flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Enquire for this course</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all"
                  >
                    <span>Download Syllabus</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Visual Asset Container Column with 3D Hover & Image */}
              <div className="flex-1 w-full max-w-lg group">
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
                  className="relative transition-all duration-500"
                >
                  {/* Shadow Decor Underneath */}
                  <div className="absolute inset-0 bg-slate-200 rounded-[32px] translate-x-3 translate-y-3 -z-10 opacity-40 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />

                  {/* Main Visual Card */}
                  <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark gradient for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-black/30" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-5 left-5 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#BB9331] animate-pulse" />
                      <span className="text-xs font-bold text-slate-900">
                        {course.visualBadge}
                      </span>
                    </div>

                    {/* Top Right Duration Pill */}
                    <div className="absolute top-5 right-5 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white border border-white/10 flex items-center gap-1.5">
                      <Clock size={12} className="text-[#BB9331]" />
                      <span>{course.duration.split("•")[0]}</span>
                    </div>

                    {/* Bottom Floating Glassmorphic Info Card */}
                    <div className="absolute inset-x-5 bottom-5 z-10 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/40">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BB9331]">
                          {course.visualTitle}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          {course.visualMetric}
                        </span>
                      </div>

                      <div className="text-sm font-bold text-slate-900 leading-tight">
                        {course.visualSubtitle}
                      </div>

                      {/* Interactive completion progress bar */}
                      <div className="mt-3 space-y-1.5">
                        <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                          <span>Curriculum Hands-On Readiness</span>
                          <span className="text-slate-800">100%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-[#19364f] to-[#BB9331]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action Section */}
        <div className="pt-8">
          <div className="bg-slate-50 rounded-[36px] p-8 sm:p-12 border border-slate-200/80 text-center space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to begin your culinary or hospitality journey?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Schedule a personalized kitchen tour and consultation with our Executive Master Chef in Goa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#19364f] hover:bg-[#132c40] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Apply for Next Batch
              </Link>
              <Link
                href="tel:+919876543210"
                className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-300 text-slate-800 font-bold rounded-full hover:bg-slate-100 transition-all"
              >
                Call Admissions: +91 98765 43210
              </Link>
            </div>
            <p className="text-xs text-slate-400">
              No registration fee required to apply • Dedicated counseling • Direct sea &amp; hotel placements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
