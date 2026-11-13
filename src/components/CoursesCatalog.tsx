"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Award,
  Cake,
  ChefHat,
  Clock,
  Compass,
  GraduationCap,
  Hotel,
  Ship,
  Sparkles,
  Users,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import {
  COURSE_PROGRAMS,
  type CourseIconName,
  type CourseProgram,
  type CourseTrack,
} from "@/data/courses";

type FilterTrack = "all" | CourseTrack;

const FILTER_TABS: Array<{ id: FilterTrack; label: string; count: number }> = [
  { id: "all", label: "All Programs", count: COURSE_PROGRAMS.length },
  {
    id: "diploma",
    label: "Diplomas (6 Months)",
    count: COURSE_PROGRAMS.filter((c) => c.track === "diploma").length,
  },
  {
    id: "certificate",
    label: "Certifications (3 Months)",
    count: COURSE_PROGRAMS.filter((c) => c.track === "certificate").length,
  },
  {
    id: "award",
    label: "Foundation Award (1 Month)",
    count: COURSE_PROGRAMS.filter((c) => c.track === "award").length,
  },
  {
    id: "rpl",
    label: "Working Professionals (RPL)",
    count: COURSE_PROGRAMS.filter((c) => c.track === "rpl").length,
  },
];

function CourseIcon({
  name,
  className = "w-5 h-5",
}: {
  name: CourseIconName;
  className?: string;
}) {
  switch (name) {
    case "chef":
      return <ChefHat className={className} aria-hidden="true" />;
    case "cake":
      return <Cake className={className} aria-hidden="true" />;
    case "ship":
      return <Ship className={className} aria-hidden="true" />;
    case "wine":
      return <Wine className={className} aria-hidden="true" />;
    case "hotel":
      return <Hotel className={className} aria-hidden="true" />;
    case "utensils":
      return <UtensilsCrossed className={className} aria-hidden="true" />;
    case "award":
    default:
      return <Award className={className} aria-hidden="true" />;
  }
}

function renderEligibility(text: string) {
  if (text.includes(" | ")) {
    const [part1, part2] = text.split(" | ");
    return (
      <>
        {/* Mobile: 2 lines */}
        <div className="leading-snug sm:hidden">
          <span className="block font-medium text-slate-800">{part1}</span>
          <span className="block text-[11px] text-slate-500 font-normal">{part2}</span>
        </div>
        {/* Desktop / Tablet: single line */}
        <span className="hidden sm:inline whitespace-nowrap">{text}</span>
      </>
    );
  }
  if (text.includes(" / ")) {
    const [part1, part2] = text.split(" / ");
    return (
      <>
        {/* Mobile: 2 lines */}
        <div className="leading-snug sm:hidden">
          <span className="block font-medium text-slate-800">{part1}</span>
          <span className="block text-[11px] text-slate-500 font-normal">{part2}</span>
        </div>
        {/* Desktop / Tablet: single line */}
        <span className="hidden sm:inline whitespace-nowrap">{text}</span>
      </>
    );
  }
  return (
    <>
      <span className="block leading-snug sm:hidden">{text}</span>
      <span className="hidden sm:inline whitespace-nowrap">{text}</span>
    </>
  );
}

export default function CoursesCatalog() {
  const router = useRouter();
  const [activeTrack, setActiveTrack] = useState<FilterTrack>("all");

  const visibleCourses =
    activeTrack === "all"
      ? COURSE_PROGRAMS
      : COURSE_PROGRAMS.filter((course) => course.track === activeTrack);

  return (
    <div className="space-y-16">
      {/* Filter Controls Header */}
      <div className="space-y-4 sm:space-y-5 pb-6 border-b border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#1E6DEB]">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>CTH-UK ACCREDITED CURRICULUM</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight mt-2">
              Explore Our {COURSE_PROGRAMS.length} Dedicated Programs
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-500 whitespace-nowrap">
            Showing <span className="text-[#1E6DEB] font-black">{visibleCourses.length}</span> of {COURSE_PROGRAMS.length} Courses
          </p>
        </div>

        {/* Filter Tabs Bar: Horizontal scrollable strip on mobile, flexible row on tablet/desktop */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-1 sm:py-0 md:flex-wrap"
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
                  className={`text-xs font-black px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 whitespace-nowrap active:scale-95 ${
                    isActive
                      ? "bg-[#0A1118] text-[#D4F85A] shadow-md shadow-slate-950/10 ring-2 ring-[#0A1118]/10"
                      : "bg-white text-slate-700 border border-slate-200/90 hover:border-[#1E6DEB]/40 hover:text-[#1E6DEB] shadow-2xs"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-black px-2 py-0.5 rounded-full min-w-[20px] text-center transition-colors ${
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
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCourses.map((course) => (
          <article
            key={course.id}
            onClick={() => router.push(`/courses/${course.slug}`)}
            className="bg-white rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_20px_48px_rgba(30,109,235,0.12)] hover:border-[#1E6DEB]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              {/* Card Image Header with Direct Page Link */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/70 via-transparent to-transparent" />

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
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider text-white bg-[#0A1118]/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/15">
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
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#1E6DEB] transition-colors">
                      {course.shortTitle}
                    </h3>
                    <p className="text-xs font-bold text-[#1E6DEB]">
                      {course.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {course.description}
                </p>

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
                      <dd className="text-slate-600 line-clamp-2 leading-relaxed font-normal">
                        {course.idealFor}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            {/* CTAs: View + Enroll Buttons */}
            <div className="p-6 pt-0 grid grid-cols-2 gap-2.5">
              <Link
                href={`/courses/${course.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#F0F6FE] hover:bg-[#E0EEFD] border border-[#1E6DEB]/25 text-[#1E6DEB] font-black text-xs py-2.5 px-3 rounded-full transition-all duration-200"
              >
                <span>View</span>
                <AnimatedArrow size={11} boxClassName="h-3 w-3" />
              </Link>

              <Link
                href={`/enroll?course=${course.id}`}
                onClick={(e) => e.stopPropagation()}
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0A1118] hover:bg-[#1E6DEB] text-white font-black text-xs py-2.5 px-3 rounded-full shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>Enroll</span>
                <span className="w-4 h-4 rounded-full bg-[#D4F85A] text-[#0A1118] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <AnimatedArrow size={10} boxClassName="h-2.5 w-2.5" />
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Quick Comparison Table */}
      <div className="rounded-[20px] sm:rounded-[32px] bg-[#F8FAFC] border border-slate-200/90 p-2.5 sm:p-8 shadow-xs space-y-3.5 sm:space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 px-1 sm:px-0">
          <div>
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#1E6DEB]">
              AT A GLANCE
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-slate-950 tracking-tight">
              Program Comparison &amp; Dedicated Pages
            </h3>
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-slate-500">
            Regulated by CTH (UK) &amp; Ofqual (UK)
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500">
                <th className="py-3 px-3 sm:py-3.5 sm:px-5">Program</th>
                <th className="py-3 px-2.5 sm:py-3.5 sm:px-4">Level</th>
                <th className="py-3 px-2.5 sm:py-3.5 sm:px-4">Duration</th>
                <th className="py-3 px-2.5 sm:py-3.5 sm:px-4 min-w-[140px] sm:min-w-0 sm:whitespace-nowrap">Eligibility</th>
                <th className="py-3 px-3 sm:py-3.5 sm:px-5 text-right">Explore</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COURSE_PROGRAMS.map((course) => (
                <tr
                  key={`row-${course.id}`}
                  className="hover:bg-[#F0F6FE]/50 transition-colors"
                >
                  <td className="py-3 px-3 sm:py-3.5 sm:px-5 font-bold text-slate-950">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="hover:text-[#1E6DEB] transition-colors"
                    >
                      {course.shortTitle}
                    </Link>
                  </td>
                  <td className="py-3 px-2.5 sm:py-3.5 sm:px-4 whitespace-nowrap">
                    <span className="inline-block bg-[#D4F85A] text-[#0A1118] text-[10px] font-black px-2.5 py-0.5 rounded-full">
                      {course.level}
                    </span>
                  </td>
                  <td className="py-3 px-2.5 sm:py-3.5 sm:px-4 font-semibold text-slate-700 whitespace-nowrap">
                    {course.shortDuration}
                  </td>
                  <td className="py-3 px-2.5 sm:py-3.5 sm:px-4 text-slate-600 min-w-[140px] sm:min-w-0 sm:whitespace-nowrap">
                    {renderEligibility(course.eligibility)}
                  </td>
                  <td className="py-3 px-3 sm:py-3.5 sm:px-5 text-right whitespace-nowrap space-x-2.5 sm:space-x-3">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex items-center gap-1 font-black text-xs text-[#1E6DEB] hover:text-[#175CD3]"
                    >
                      <span>Details</span>
                      <AnimatedArrow size={12} boxClassName="h-3 w-3" />
                    </Link>
                    <Link
                      href={`/enroll?course=${course.id}`}
                      className="inline-flex items-center gap-1 font-black text-xs text-slate-800 hover:text-black"
                    >
                      <span>Enroll</span>
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
