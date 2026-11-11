"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Cake,
  ChefHat,
  Clock,
  GraduationCap,
  Hotel,
  Ship,
  Users,
  UtensilsCrossed,
  Wine,
} from "lucide-react";

type CourseTrack = "all" | "diploma" | "certificate" | "award";

interface CourseItem {
  id: string;
  level: "CTH Level 2" | "CTH Level 1";
  track: Exclude<CourseTrack, "all">;
  trackLabel: string;
  title: string;
  eligibility: string;
  duration: string;
  shortDuration: string;
  idealFor: string;
  image: string;
  imageAlt: string;
  iconName: "chef" | "cake" | "ship" | "utensils" | "hotel" | "wine";
}

const COURSES: CourseItem[] = [
  {
    id: "diploma-culinary",
    level: "CTH Level 2",
    track: "diploma",
    trackLabel: "Diploma",
    title: "Diploma in Culinary Skills",
    eligibility: "10th Pass or equivalent",
    duration: "6 Months (with practical training & assessments)",
    shortDuration: "6 Months",
    idealFor:
      "Aspiring chefs, hotel school graduates, or food enthusiasts seeking international certification",
    image: "/images/culinary-hero.jpg",
    imageAlt: "Diploma in Culinary Skills training at Excellence Education Academy",
    iconName: "chef",
  },
  {
    id: "diploma-patisserie",
    level: "CTH Level 2",
    track: "diploma",
    trackLabel: "Diploma",
    title: "Diploma in Patisserie & Confectionery Skills",
    eligibility: "10th Pass or equivalent",
    duration: "6 Months (with practical training & assessments)",
    shortDuration: "6 Months",
    idealFor:
      "Future pastry chefs, home bakers, or professionals enhancing bakery knowledge",
    image: "/images/patisserie-skills.jpg",
    imageAlt: "Diploma in Patisserie & Confectionery Skills",
    iconName: "cake",
  },
  {
    id: "diploma-cruise",
    level: "CTH Level 2",
    track: "diploma",
    trackLabel: "Diploma",
    title: "Diploma in Cruise Hospitality Services",
    eligibility: "10th Pass or equivalent",
    duration: "6 Months (with practical training & assessments)",
    shortDuration: "6 Months",
    idealFor: "Aspiring chefs aiming for the global cruise line industry",
    image: "/images/cruise-hospitality.jpg",
    imageAlt: "Diploma in Cruise Hospitality Services",
    iconName: "ship",
  },
  {
    id: "award-cookery",
    level: "CTH Level 1",
    track: "award",
    trackLabel: "Foundation Award",
    title: "Award in Basic Cookery Skills",
    eligibility: "10th Pass or equivalent",
    duration: "1 Month (with practical training & assessments)",
    shortDuration: "1 Month",
    idealFor:
      "Culinary entrepreneurs, aspiring chefs, food enthusiasts, and students pursuing hospitality careers",
    image: "/eea-gallary/eea-gallary2.jpg",
    imageAlt: "Award in Basic Cookery Skills commercial kitchen lab",
    iconName: "utensils",
  },
  {
    id: "cert-front-of-house",
    level: "CTH Level 2",
    track: "certificate",
    trackLabel: "Certification",
    title: "Professional Restaurant Front of House Service",
    eligibility: "10th Pass or equivalent",
    duration: "3 Months (with practical training & assessments)",
    shortDuration: "3 Months",
    idealFor: "Food & beverage service staff and restaurant stewards",
    image: "/eea-gallary/eea-gallary1.jpg",
    imageAlt: "Professional Restaurant Front of House Service",
    iconName: "hotel",
  },
  {
    id: "cert-bartending",
    level: "CTH Level 2",
    track: "certificate",
    trackLabel: "Certification",
    title: "Professional Bartending Skills Certification",
    eligibility: "10th Pass or equivalent",
    duration: "3 Months (with practical training & assessments)",
    shortDuration: "3 Months",
    idealFor:
      "Bartending learners and professionals aspiring for international certification",
    image: "/images/barista-beverage.jpg",
    imageAlt: "Professional Bartending Skills Certification",
    iconName: "wine",
  },
];

const FILTER_TABS: Array<{ id: CourseTrack; label: string; count: number }> = [
  { id: "all", label: "All Programs", count: COURSES.length },
  {
    id: "diploma",
    label: "Diplomas (6 Months)",
    count: COURSES.filter((c) => c.track === "diploma").length,
  },
  {
    id: "certificate",
    label: "Certifications (3 Months)",
    count: COURSES.filter((c) => c.track === "certificate").length,
  },
  {
    id: "award",
    label: "Foundation Award (1 Month)",
    count: COURSES.filter((c) => c.track === "award").length,
  },
];

function CourseIcon({ name }: { name: CourseItem["iconName"] }) {
  switch (name) {
    case "chef":
      return <ChefHat className="w-5 h-5" aria-hidden="true" />;
    case "cake":
      return <Cake className="w-5 h-5" aria-hidden="true" />;
    case "ship":
      return <Ship className="w-5 h-5" aria-hidden="true" />;
    case "utensils":
      return <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />;
    case "hotel":
      return <Hotel className="w-5 h-5" aria-hidden="true" />;
    case "wine":
      return <Wine className="w-5 h-5" aria-hidden="true" />;
  }
}

export default function CoursesCatalog() {
  const [activeTrack, setActiveTrack] = useState<CourseTrack>("all");

  const visibleCourses =
    activeTrack === "all"
      ? COURSES
      : COURSES.filter((course) => course.track === activeTrack);

  return (
    <div className="space-y-16">
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-[#1E6DEB]">
            CTH-UK ACCREDITED CURRICULUM
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1">
            Explore Our {COURSES.length} Programs
          </h2>
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter courses by program type"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeTrack === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTrack(tab.id)}
                className={`text-xs font-black px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#0A1118] text-[#D4F85A] shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#1E6DEB]/40 hover:text-[#1E6DEB]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-[#D4F85A] text-[#0A1118]"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCourses.map((course) => (
          <article
            key={course.id}
            className="bg-white rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_20px_48px_rgba(30,109,235,0.12)] hover:border-[#1E6DEB]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Card Image Header */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/65 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#D4F85A] text-[#0A1118] px-3 py-1 rounded-full text-xs font-black shadow-sm">
                    <Award className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{course.level}</span>
                  </span>

                  <span className="bg-white/95 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-[11px] font-black shadow-sm">
                    {course.shortDuration}
                  </span>
                </div>

                <div className="absolute bottom-3.5 left-4">
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider text-white bg-[#0A1118]/75 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/15">
                    {course.trackLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#F0F6FE] border border-[#1E6DEB]/20 text-[#1E6DEB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E6DEB] group-hover:text-white transition-colors">
                    <CourseIcon name={course.iconName} />
                  </div>
                  <h3 className="text-xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#1E6DEB] transition-colors">
                    {course.title}
                  </h3>
                </div>

                {/* Structured Details */}
                <dl className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap
                      className="w-4 h-4 text-[#1E6DEB] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                        Eligibility
                      </dt>
                      <dd className="font-bold text-slate-800">
                        {course.eligibility}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock
                      className="w-4 h-4 text-[#1E6DEB] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                        Duration
                      </dt>
                      <dd className="font-bold text-slate-800">
                        {course.duration}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Users
                      className="w-4 h-4 text-[#1E6DEB] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                        Ideal For
                      </dt>
                      <dd className="text-slate-600 leading-relaxed font-normal">
                        {course.idealFor}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            {/* Enroll CTA */}
            <div className="p-7 pt-0">
              <Link
                href="/#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1118] hover:bg-[#1E6DEB] text-white font-black text-xs sm:text-sm py-4 px-6 rounded-full shadow-md transition-all duration-200 active:scale-95"
              >
                <span>Enroll Now</span>
                <span className="w-5 h-5 rounded-full bg-[#D4F85A] text-[#0A1118] flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Quick Comparison Table */}
      <div className="rounded-[32px] bg-[#F8FAFC] border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#1E6DEB]">
              AT A GLANCE
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
              Program Duration &amp; Level Comparison
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500">
            All programs include practical training &amp; assessments
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4 sm:px-5">Program</th>
                <th className="py-3.5 px-4">Level</th>
                <th className="py-3.5 px-4">Duration</th>
                <th className="py-3.5 px-4">Eligibility</th>
                <th className="py-3.5 px-4 sm:px-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COURSES.map((course) => (
                <tr
                  key={`row-${course.id}`}
                  className="hover:bg-[#F0F6FE]/50 transition-colors"
                >
                  <td className="py-3.5 px-4 sm:px-5 font-bold text-slate-950">
                    {course.title}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="inline-block bg-[#D4F85A] text-[#0A1118] text-[10px] font-black px-2.5 py-0.5 rounded-full">
                      {course.level}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700 whitespace-nowrap">
                    {course.shortDuration}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                    {course.eligibility}
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-right whitespace-nowrap">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1 font-black text-xs text-[#1E6DEB] hover:text-[#175CD3]"
                    >
                      <span>Enroll</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

