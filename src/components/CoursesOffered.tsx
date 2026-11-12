"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Cake,
  CheckCircle2,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Hotel,
  Ship,
  UtensilsCrossed,
  Wine,
} from "lucide-react";

const COURSES = [
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
] as const;

interface SliderMetrics {
  positions: number[];
  activeStep: number;
  visibleCount: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

export default function CoursesOffered() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [metrics, setMetrics] = useState<SliderMetrics>({
    positions: [0, 1, 2, 3, 4, 5],
    activeStep: 0,
    visibleCount: 1,
    canScrollPrev: false,
    canScrollNext: true,
  });

  const syncSliderState = useCallback(() => {
    const track = sliderRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScrollLeft = Math.max(0, scrollWidth - clientWidth);
    const trackRect = track.getBoundingClientRect();
    const paddingLeft = Number.parseFloat(getComputedStyle(track).paddingLeft) || 0;

    // Build exact deduplicated snap stops that are actually reachable on the current viewport
    const positions: number[] = [];
    let visibleCount = 0;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const rawTarget = Math.round(
        cardRect.left - trackRect.left + scrollLeft - paddingLeft,
      );
      const clampedTarget = Math.min(maxScrollLeft, Math.max(0, rawTarget));

      // Count fully or mostly visible cards for accurate summary text
      const overlap =
        Math.min(cardRect.right, trackRect.right) -
        Math.max(cardRect.left, trackRect.left);
      if (overlap >= cardRect.width * 0.65) {
        visibleCount += 1;
      }

      if (idx === 0) {
        positions.push(0);
      } else {
        const last = positions[positions.length - 1];
        if (clampedTarget - last > 24) {
          positions.push(clampedTarget);
        }
      }
    });

    if (positions.length === 0) {
      positions.push(0);
    }

    let activeStep = 0;
    if (scrollLeft <= 6) {
      activeStep = 0;
    } else if (scrollLeft >= maxScrollLeft - 6) {
      activeStep = positions.length - 1;
    } else {
      let minDist = Number.POSITIVE_INFINITY;
      positions.forEach((pos, idx) => {
        const dist = Math.abs(scrollLeft - pos);
        if (dist < minDist) {
          minDist = dist;
          activeStep = idx;
        }
      });
    }

    setMetrics({
      positions,
      activeStep,
      visibleCount: Math.max(1, Math.min(COURSES.length, visibleCount || 1)),
      canScrollPrev: scrollLeft > 6,
      canScrollNext: scrollLeft < maxScrollLeft - 6,
    });
  }, []);

  useEffect(() => {
    const track = sliderRef.current;
    if (!track) return;

    syncSliderState();

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        syncSliderState();
        rafId = 0;
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    const resizeObserver = new ResizeObserver(syncSliderState);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [syncSliderState]);

  const scrollToStep = useCallback(
    (stepIndex: number) => {
      const track = sliderRef.current;
      if (!track) return;

      const clampedStep = Math.min(
        metrics.positions.length - 1,
        Math.max(0, stepIndex),
      );
      const targetLeft = metrics.positions[clampedStep] ?? 0;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      track.scrollTo({
        left: targetLeft,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [metrics.positions],
  );

  const rangeStart = metrics.activeStep + 1;
  const rangeEnd = Math.min(
    COURSES.length,
    metrics.activeStep + metrics.visibleCount,
  );
  const summaryLabel =
    metrics.visibleCount > 1
      ? `${rangeStart}–${rangeEnd} of ${COURSES.length} Programs`
      : `${rangeStart} of ${COURSES.length} Programs`;

  return (
    <section
      id="courses"
      className="py-12 sm:py-24 bg-white border-b border-slate-200/80 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-[11px] sm:text-xs font-black text-[#1E6DEB] shadow-xs">
            <Award className="w-3.5 h-3.5" aria-hidden="true" />
            <span>CTH ACCREDITED VOCATIONAL PATHWAYS</span>
          </div>

          <div className="flex justify-center pt-0.5 sm:pt-1">
            <Image
              src="/cth-logo2.png"
              alt="CTH — Confederation of Tourism & Hospitality"
              width={160}
              height={32}
              className="h-6 sm:h-8 w-auto object-contain"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Courses Offered
          </h2>

          <p className="text-xs sm:text-base font-extrabold text-[#1E6DEB] uppercase tracking-wider">
            Goa&apos;s Only CTH-Accredited Culinary &amp; Hospitality Institute
          </p>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-5xl mx-auto font-normal">
            At Excellence Education Academy Goa, we offer British-standard
            culinary and bakery programs accredited by CTH-UK. Our mission is to
            empower students with the skills, discipline, and creativity needed
            to succeed in global hospitality right from the heart of
            India&apos;s tourism capital.
          </p>
        </div>

        {/* Horizontal Slider Wrapper */}
        <div className="space-y-3 sm:space-y-5">
          {/* Top Controls Bar: Program Summary + Highlighted Prev/Next Arrows */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/25 text-[11px] font-black text-[#1E6DEB]">
                {summaryLabel}
              </span>
              <Link
                href="/courses"
                className="text-xs font-bold text-slate-500 hover:text-[#1E6DEB] transition-colors hidden sm:inline-flex items-center gap-1"
              >
                <span>Compare All Courses</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToStep(metrics.activeStep - 1)}
                disabled={!metrics.canScrollPrev}
                aria-label="Previous courses"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] border border-[#0A1118]/15 shadow-[0_4px_14px_rgba(212,248,90,0.45)] disabled:bg-slate-100 disabled:text-slate-300 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                onClick={() => scrollToStep(metrics.activeStep + 1)}
                disabled={!metrics.canScrollNext}
                aria-label="Next courses"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] border border-[#0A1118]/15 shadow-[0_4px_14px_rgba(212,248,90,0.45)] disabled:bg-slate-100 disabled:text-slate-300 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronRight
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Track */}
          <div
            ref={sliderRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="CTH Accredited Courses Offered"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                scrollToStep(metrics.activeStep - 1);
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                scrollToStep(metrics.activeStep + 1);
              }
            }}
            className="flex gap-3.5 sm:gap-6 lg:gap-7 overflow-x-auto snap-x snap-mandatory scroll-px-4 sm:scroll-px-1 scroll-smooth no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-1 py-2 sm:py-3 focus-visible:outline-2 focus-visible:outline-[#1E6DEB] focus-visible:outline-offset-4 rounded-3xl"
          >
            {COURSES.map((course, idx) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className="w-[82vw] max-w-[310px] sm:w-[340px] sm:max-w-none lg:w-[calc((100%-3.5rem)/3)] shrink-0 snap-start bg-white rounded-2xl sm:rounded-[32px] p-4 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.04)] hover:shadow-[0_16px_40px_rgba(30,109,235,0.12)] hover:border-[#1E6DEB]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3 sm:space-y-5">
                    {/* Top Bar with Icon & Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center font-black shadow-sm group-hover:scale-105 transition-transform">
                        <Icon
                          className="w-4 h-4 sm:w-6 sm:h-6"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs font-black text-[#0A1118] bg-[#D4F85A] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                        {course.tag}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#1E6DEB]">
                        {course.duration}
                      </span>
                      <h3 className="text-base sm:text-xl font-black text-slate-950 tracking-tight leading-snug mt-0.5 sm:mt-1 group-hover:text-[#1E6DEB] transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-bold text-slate-400 mt-0.5">
                        {course.type}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {course.description}
                    </p>

                    {/* Skills Checklist */}
                    <div className="pt-2.5 sm:pt-3 border-t border-slate-100 space-y-1.5 sm:space-y-2">
                      <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-400">
                        Core Modules &amp; Skills:
                      </p>
                      <ul className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs text-slate-700 font-medium">
                        {course.skills.map((skill, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2">
                            <CheckCircle2
                              className="w-3.5 h-3.5 text-[#1E6DEB] flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="truncate">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom CTA Button */}
                  <div className="pt-4 sm:pt-8">
                    <Link
                      href={`/enroll?course=${course.id}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#0A1118] hover:bg-black text-white font-black text-xs sm:text-sm py-2.5 sm:py-4 px-4 sm:px-6 rounded-full shadow-md transition-all duration-200 active:scale-95 group-hover:bg-[#1E6DEB]"
                    >
                      <span>Apply for Program</span>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4F85A] group-hover:text-white"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Synchronized Step Dots */}
          <div className="flex items-center justify-center gap-2 pt-1">
            {metrics.positions.map((_, stepIdx) => {
              const isActive = stepIdx === metrics.activeStep;
              return (
                <button
                  key={stepIdx}
                  type="button"
                  onClick={() => scrollToStep(stepIdx)}
                  aria-label={`Show slide ${stepIdx + 1} of ${metrics.positions.length}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-7 bg-[#1E6DEB]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
