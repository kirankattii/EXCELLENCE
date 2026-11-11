import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Compass,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationBanner from "@/components/AccreditationBanner";
import CoursesCatalog from "@/components/CoursesCatalog";
import { Meteors } from "@/components/ui/meteors";

export const metadata: Metadata = {
  title: "Courses | Excellence Education Academy – Goa",
  description:
    "Internationally accredited CTH-UK culinary, patisserie, cruise hospitality, front of house, and bartending courses in Goa.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden text-white bg-gradient-to-b from-[#1351C7] via-[#1E6DEB] to-[#4F94FA]">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/sky-clouds.jpg"
              alt="Azure Sky Backdrop"
              fill
              priority
              className="object-cover object-bottom opacity-70 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1048B8]/65 via-[#1E6DEB]/30 to-[#4F94FA]/45" />
          </div>

          <Meteors number={10} />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-6">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-bold text-white/95"
            >
              <Link
                href="/"
                className="hover:text-[#D4F85A] transition-colors"
              >
                Home
              </Link>
              <ChevronRight
                className="w-3.5 h-3.5 text-[#D4F85A]"
                aria-hidden="true"
              />
              <span className="text-[#D4F85A] font-black">Courses</span>
            </nav>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1118]/30 border border-white/25 backdrop-blur-md text-[11px] font-black uppercase tracking-widest text-[#D4F85A]">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>CTH-UK ACCREDITED CULINARY &amp; HOSPITALITY PROGRAMS</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                Courses to Build Your{" "}
                <span className="text-[#D4F85A]">Global Culinary Career</span>
              </h1>

              <p className="text-base sm:text-xl text-white/95 max-w-3xl mx-auto font-medium leading-relaxed">
                Internationally Accredited Programs Designed for Aspiring Chefs
                and Hospitality Professionals
              </p>
            </div>

            {/* Quick Summary Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Image
                  src="/cth-logo.png"
                  alt="CTH UK"
                  width={80}
                  height={16}
                  className="h-3.5 w-auto object-contain"
                />
                <span className="text-[11px] font-black text-slate-800">
                  Level 1 &amp; Level 2
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-extrabold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4F85A]" aria-hidden="true" />
                <span>10th Pass or Equivalent</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-extrabold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4F85A]" aria-hidden="true" />
                <span>Practical Training &amp; Assessments</span>
              </span>
            </div>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/75 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </section>

        {/* 2. Interactive Course Catalog */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <CoursesCatalog />
          </div>
        </section>

        {/* 3. Career Pathways & RPL */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-black text-[#1E6DEB] shadow-xs">
                <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                <span>OPPORTUNITIES FOR STUDENTS &amp; PROFESSIONALS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
                Career Pathways
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Whether you are starting fresh after school or validating your
                existing kitchen experience for overseas opportunities, our
                CTH-UK pathways support every stage of your career.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pathway 1: Students from Any Stream */}
              <div className="rounded-[32px] bg-[#0A1118] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-8">
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 bg-[#1E6DEB]/25 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4F85A] text-[#0A1118] text-xs font-black uppercase tracking-wider">
                    <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>For Aspiring Students</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Open to Students from Any Stream
                  </h3>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                    Golden opportunity for students from any stream aspiring for
                    a bright future in the hospitality industry.
                  </p>
                </div>

                <div className="relative z-10 pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-sm px-7 py-3.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Enroll Now</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Pathway 2: Working Professionals (RPL) */}
              <div className="rounded-[32px] bg-[#1E6DEB] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-8">
                <div
                  className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/15 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1E6DEB] text-xs font-black uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>RPL Certification</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Recognition of Prior Learning (RPL)
                  </h3>
                  <p className="text-base sm:text-lg text-white/95 leading-relaxed font-normal">
                    Recognition of Prior Learning (RPL) certification for
                    working professionals in Goa seeking British certification
                    for overseas employment.
                  </p>
                </div>

                <div className="relative z-10 pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#1E6DEB] font-black text-sm px-7 py-3.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Enroll Now</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTH Accreditation Banner */}
        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}

