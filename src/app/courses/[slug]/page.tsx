import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Cake,
  CheckCircle2,
  ChefHat,
  ChevronRight,
  Clock,
  Coffee,
  Compass,
  GraduationCap,
  HeartHandshake,
  Hotel,
  Layers,
  MapPin,
  Phone,
  ShieldCheck,
  Ship,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationBanner from "@/components/AccreditationBanner";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import {
  COURSE_PROGRAMS,
  getCourseBySlug,
  type CourseIconName,
} from "@/data/courses";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: Array<{ slug: string }> = [];
  for (const course of COURSE_PROGRAMS) {
    params.push({ slug: course.slug });
    if (course.id !== course.slug) {
      params.push({ slug: course.id });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Excellence Education Academy",
    };
  }

  return {
    title: `${course.title} | Excellence Education Academy Goa`,
    description: `${course.tagline}. ${course.description}`,
    openGraph: {
      title: `${course.title} – CTH UK Qualification in Goa`,
      description: course.tagline,
      images: [
        {
          url: course.image,
          width: 1200,
          height: 675,
          alt: course.imageAlt,
        },
      ],
    },
  };
}

function CourseIcon({
  name,
  className = "w-6 h-6",
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

function getSkillIcon(skill: string, idx: number) {
  const lower = skill.toLowerCase();
  if (
    lower.includes("wine") ||
    lower.includes("sommelier") ||
    lower.includes("glassware") ||
    lower.includes("beverage") ||
    lower.includes("beer")
  ) {
    return <Wine className="w-5 h-5" aria-hidden="true" />;
  }
  if (
    lower.includes("coffee") ||
    lower.includes("tea") ||
    lower.includes("barista")
  ) {
    return <Coffee className="w-5 h-5" aria-hidden="true" />;
  }
  if (
    lower.includes("conflict") ||
    lower.includes("complaint") ||
    lower.includes("resolution") ||
    lower.includes("manner") ||
    lower.includes("etiquette") ||
    lower.includes("guest") ||
    lower.includes("posture")
  ) {
    return <HeartHandshake className="w-5 h-5" aria-hidden="true" />;
  }
  if (
    lower.includes("safety") ||
    lower.includes("hygiene") ||
    lower.includes("compliance") ||
    lower.includes("haccp") ||
    lower.includes("health")
  ) {
    return <ShieldCheck className="w-5 h-5" aria-hidden="true" />;
  }
  if (
    lower.includes("upsell") ||
    lower.includes("menu") ||
    lower.includes("storytelling") ||
    lower.includes("sales") ||
    lower.includes("speed")
  ) {
    return <TrendingUp className="w-5 h-5" aria-hidden="true" />;
  }
  if (
    lower.includes("banquet") ||
    lower.includes("dining") ||
    lower.includes("private") ||
    lower.includes("restaurant") ||
    lower.includes("hotel") ||
    lower.includes("service")
  ) {
    return <Hotel className="w-5 h-5" aria-hidden="true" />;
  }
  if (
    lower.includes("table") ||
    lower.includes("knife") ||
    lower.includes("culinary") ||
    lower.includes("cookery") ||
    lower.includes("food")
  ) {
    return <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />;
  }
  if (
    lower.includes("pastry") ||
    lower.includes("bake") ||
    lower.includes("patisserie") ||
    lower.includes("cake") ||
    lower.includes("dessert")
  ) {
    return <Cake className="w-5 h-5" aria-hidden="true" />;
  }
  if (
    lower.includes("cruise") ||
    lower.includes("ship") ||
    lower.includes("maritime")
  ) {
    return <Ship className="w-5 h-5" aria-hidden="true" />;
  }

  const fallbacks = [
    <Sparkles key="1" className="w-5 h-5" aria-hidden="true" />,
    <BadgeCheck key="2" className="w-5 h-5" aria-hidden="true" />,
    <Award key="3" className="w-5 h-5" aria-hidden="true" />,
    <Users key="4" className="w-5 h-5" aria-hidden="true" />,
    <Compass key="5" className="w-5 h-5" aria-hidden="true" />,
    <CheckCircle2 key="6" className="w-5 h-5" aria-hidden="true" />,
  ];
  return fallbacks[idx % fallbacks.length];
}

function getRoleIcon(
  role: string,
  idx: number,
  iconClass = "w-3.5 h-3.5 text-[#D4F85A] group-hover:text-[#0A1118] transition-colors"
) {
  const lower = role.toLowerCase();
  if (
    lower.includes("cruise") ||
    lower.includes("ship") ||
    lower.includes("fleet") ||
    lower.includes("marine")
  ) {
    return <Ship className={iconClass} aria-hidden="true" />;
  }
  if (
    lower.includes("bar") ||
    lower.includes("sommelier") ||
    lower.includes("beverage") ||
    lower.includes("wine") ||
    lower.includes("beer")
  ) {
    return <Wine className={iconClass} aria-hidden="true" />;
  }
  if (
    lower.includes("chef") ||
    lower.includes("cook") ||
    lower.includes("culinary") ||
    lower.includes("kitchen")
  ) {
    return <ChefHat className={iconClass} aria-hidden="true" />;
  }
  if (
    lower.includes("pastry") ||
    lower.includes("baker") ||
    lower.includes("patisserie") ||
    lower.includes("cake")
  ) {
    return <Cake className={iconClass} aria-hidden="true" />;
  }
  if (
    lower.includes("hotel") ||
    lower.includes("resort") ||
    lower.includes("banquet") ||
    lower.includes("restaurant") ||
    lower.includes("dining")
  ) {
    return <Hotel className={iconClass} aria-hidden="true" />;
  }
  if (
    lower.includes("supervisor") ||
    lower.includes("manager") ||
    lower.includes("captain") ||
    lower.includes("executive") ||
    lower.includes("lead")
  ) {
    return <TrendingUp className={iconClass} aria-hidden="true" />;
  }
  if (
    lower.includes("guest") ||
    lower.includes("service") ||
    lower.includes("host") ||
    lower.includes("server") ||
    lower.includes("associate")
  ) {
    return <Users className={iconClass} aria-hidden="true" />;
  }

  const icons = [
    <Briefcase key="1" className={iconClass} aria-hidden="true" />,
    <BadgeCheck key="2" className={iconClass} aria-hidden="true" />,
    <Star key="3" className={iconClass} aria-hidden="true" />,
    <Award key="4" className={iconClass} aria-hidden="true" />,
  ];
  return icons[idx % icons.length];
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Related courses (excluding current)
  const relatedCourses = COURSE_PROGRAMS.filter((c) => c.id !== course.id).slice(
    0,
    3
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden text-white bg-gradient-to-b from-[#1351C7] via-[#1E6DEB] to-[#3982F7]">
          {/* Subtle decorative glow */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-20 w-96 h-96 bg-[#D4F85A]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-8">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-bold text-white/95"
            >
              <Link href="/" className="hover:text-[#D4F85A] transition-colors">
                Home
              </Link>
              <ChevronRight
                className="w-3.5 h-3.5 text-[#D4F85A]"
                aria-hidden="true"
              />
              <Link
                href="/courses"
                className="hover:text-[#D4F85A] transition-colors"
              >
                Courses
              </Link>
              <ChevronRight
                className="w-3.5 h-3.5 text-[#D4F85A]"
                aria-hidden="true"
              />
              <span className="text-[#D4F85A] font-black truncate max-w-[200px] sm:max-w-none">
                {course.shortTitle}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading, Badges, Tagline, Actions */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#D4F85A] text-[#0A1118] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                    <Award className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{course.level}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-xs font-extrabold text-white">
                    <Clock className="w-3 h-3 text-[#D4F85A]" aria-hidden="true" />
                    <span>{course.shortDuration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/25 border border-white/20 backdrop-blur-md text-xs font-extrabold text-white">
                    <ShieldCheck
                      className="w-3 h-3 text-[#D4F85A]"
                      aria-hidden="true"
                    />
                    <span>Ofqual UK Regulated</span>
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                    {course.title}
                  </h1>
                  <p className="text-lg sm:text-2xl text-[#D4F85A] font-extrabold tracking-tight">
                    {course.tagline}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-white/95 leading-relaxed font-normal max-w-2xl">
                  {course.description}
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-2">
                  <Link
                    href={`/enroll?course=${course.id}`}
                    className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-xs sm:text-base px-5 sm:px-8 py-2.5 sm:py-4 rounded-full shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Apply for Admission</span>
                    <AnimatedArrow size={14} boxClassName="h-4 w-4 sm:h-5 sm:w-[17px]" />
                  </Link>
                  <a
                    href="https://wa.me/919607622999?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4.5 sm:px-6 py-2.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-xs sm:text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4F85A]" aria-hidden="true" />
                    <span>Speak to Counselor</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Dedicated AI Image Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-[32px] overflow-hidden border-2 border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-slate-900 group aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src={course.image}
                    alt={course.imageAlt}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Award badge on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2 bg-[#0A1118]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      <Image
                        src="/cth-logo.png"
                        alt="CTH UK"
                        width={70}
                        height={16}
                        className="h-3 w-auto object-contain brightness-0 invert"
                      />
                      <span className="text-[10px] font-black text-[#D4F85A] uppercase tracking-wider">
                        UK Accredited
                      </span>
                    </div>

                    <span className="bg-[#D4F85A] text-[#0A1118] px-3 py-1 rounded-full text-xs font-black shadow-sm">
                      {course.shortDuration}
                    </span>
                  </div>

                  {/* Caption badge at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <p className="text-xs font-bold text-white/90 line-clamp-2 bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                      {course.imageAlt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </section>

        {/* 2. Key Facts Strip */}
        <section className="relative z-20 -mt-10 sm:-mt-14 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 p-2.5 sm:p-5 rounded-[22px] sm:rounded-[32px] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(10,17,24,0.12)]">
              {/* Fact 1: Duration */}
              <div className="flex items-start gap-3 sm:gap-3.5 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:border-[#1E6DEB]/40 hover:bg-[#F0F6FE]/50 transition-all duration-200 group">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-[#1E6DEB] flex items-center justify-center flex-shrink-0 shadow-xs group-hover:bg-[#1E6DEB] group-hover:text-white transition-colors">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Duration
                  </span>
                  <h3 className="text-sm sm:text-lg font-black text-slate-950 truncate">
                    {course.shortDuration}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium line-clamp-1">
                    Practical + Theory Curriculum
                  </p>
                </div>
              </div>

              {/* Fact 2: Eligibility */}
              <div className="flex items-start gap-3 sm:gap-3.5 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:border-[#1E6DEB]/40 hover:bg-[#F0F6FE]/50 transition-all duration-200 group">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-[#1E6DEB] flex items-center justify-center flex-shrink-0 shadow-xs group-hover:bg-[#1E6DEB] group-hover:text-white transition-colors">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Eligibility
                  </span>
                  <h3 className="text-sm sm:text-lg font-black text-slate-950 truncate">
                    {course.eligibility.includes("10th") || course.eligibility.includes("Class 10")
                      ? "10th Pass or Equivalent"
                      : "Working Professionals"}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium line-clamp-1">
                    Open to all streams
                  </p>
                </div>
              </div>

              {/* Fact 3: Awarding Body */}
              <div className="flex items-start gap-3 sm:gap-3.5 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:border-[#1E6DEB]/40 hover:bg-[#F0F6FE]/50 transition-all duration-200 group">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-[#1E6DEB] flex items-center justify-center flex-shrink-0 shadow-xs group-hover:bg-[#1E6DEB] group-hover:text-white transition-colors">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Awarding Body
                  </span>
                  <h3 className="text-sm sm:text-lg font-black text-slate-950 truncate">
                    CTH, London (UK)
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium line-clamp-1">
                    Ofqual (UK) Regulated
                  </p>
                </div>
              </div>

              {/* Fact 4: Mode of Study */}
              <div className="flex items-start gap-3 sm:gap-3.5 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:border-[#1E6DEB]/40 hover:bg-[#F0F6FE]/50 transition-all duration-200 group">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-[#1E6DEB] flex items-center justify-center flex-shrink-0 shadow-xs group-hover:bg-[#1E6DEB] group-hover:text-white transition-colors">
                  <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Learning Mode
                  </span>
                  <h3 className="text-sm sm:text-lg font-black text-slate-950 truncate">
                    80% Practical Labs
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium line-clamp-1">
                    Industry-Standard Kitchens
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Course Overview & Program Details */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
              {/* Left narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-[11px] font-black text-[#1E6DEB]">
                  <CourseIcon name={course.iconName} className="w-3.5 h-3.5" />
                  <span>PROGRAM OVERVIEW</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
                  About This CTH-UK Qualification
                </h2>

                <div className="prose prose-slate max-w-none space-y-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  <p>{course.overview}</p>
                  {course.secondaryOverview && <p>{course.secondaryOverview}</p>}
                </div>

                {course.practicalTraining && (
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-5 sm:p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-[#1E6DEB]">
                      <UtensilsCrossed className="w-4 h-4" aria-hidden="true" />
                      <h3 className="text-base font-black text-slate-950">
                        Intensive Practical Training Focus
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {course.practicalTraining}
                    </p>
                  </div>
                )}
              </div>

              {/* Right sticky highlights box */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-[32px] bg-gradient-to-br from-[#0A1118] to-[#122336] text-white p-7 sm:p-9 shadow-xl relative overflow-hidden space-y-6">
                  <div
                    className="absolute -top-16 -right-16 w-48 h-48 bg-[#1E6DEB]/30 rounded-full blur-3xl pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="space-y-2 relative z-10">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#D4F85A]">
                      AT A GLANCE
                    </span>
                    <h3 className="text-2xl font-black tracking-tight">
                      Why Choose This Qualification?
                    </h3>
                  </div>

                  <ul className="space-y-3.5 relative z-10 text-xs sm:text-sm text-slate-200">
                    {course.whyChooseCourse.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 text-[#D4F85A] flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10 relative z-10">
                    <Link
                      href={`/enroll?course=${course.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-sm py-4 px-6 rounded-full shadow-lg transition-all active:scale-95"
                    >
                      <span>Enroll in this Course</span>
                      <AnimatedArrow size={14} />
                    </Link>
                  </div>
                </div>

                {/* Recognition of Awarding Body */}
                <div className="rounded-3xl bg-white border border-slate-200/90 p-6 flex items-center gap-5 shadow-xs">
                  <div className="relative w-20 h-16 flex-shrink-0 bg-slate-50 rounded-2xl p-2 border border-slate-100 flex items-center justify-center">
                    <Image
                      src="/cth-approved.png"
                      alt="CTH Approved Centre"
                      width={120}
                      height={48}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-950">
                      CTH Approved Centre (Ofqual UK)
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Globally recognized British standard that complies with
                      international culinary and hospitality accreditation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Curriculum / What You Will Learn */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-black text-[#1E6DEB] shadow-xs">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                <span>COMPREHENSIVE SYLLABUS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
                What You Will Learn
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Hands-on commercial competencies designed in collaboration with
                hospitality industry leaders and CTH-UK standards.
              </p>
            </div>

            {/* Curriculum Cards Grid: Compact, balanced 2-column directory */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 max-w-5xl mx-auto">
              {course.whatYouWillLearn.map((topic, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-3.5 sm:px-4 sm:py-3.5 border border-slate-200/90 shadow-xs hover:border-[#1E6DEB]/50 hover:bg-[#FDFEFF] transition-all duration-200 flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#F0F6FE] border border-[#1E6DEB]/20 text-[#1E6DEB] font-black text-xs flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E6DEB] group-hover:text-white transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#1E6DEB] transition-colors leading-snug">
                      {topic}
                    </h3>
                  </div>
                  <CheckCircle2
                    className="w-4 h-4 text-slate-300 group-hover:text-[#1E6DEB] flex-shrink-0 transition-colors"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            {/* If Core Units are present (e.g. Front of House) */}
            {course.coreUnits && (
              <div className="rounded-[32px] bg-white border border-slate-200 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#1E6DEB] text-white flex items-center justify-center">
                    <Layers className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#1E6DEB]">
                      MANDATORY CTH CURRICULUM
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                      7 Core Units of Study
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {course.coreUnits.map((unit, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2.5"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#1E6DEB] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* If Assessment Methods are present (e.g. Basic Cookery) */}
            {course.assessmentMethods && (
              <div className="rounded-[32px] bg-white border border-slate-200 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#1E6DEB]">
                      EXAMINATION &amp; EVALUATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                      Assessment Methods
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {course.assessmentMethods.map((method, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-3"
                    >
                      <Sparkles
                        className="w-4 h-4 text-[#1E6DEB] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 5. Skills You Will Develop */}
        {course.skillsDeveloped && (
          <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB]">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>INDUSTRY COMPETENCIES</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
                  Skills You Will Develop
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                  Beyond recipes and drills, you develop professional attitude,
                  commercial speed, and international hospitality standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 max-w-6xl mx-auto">
                {course.skillsDeveloped.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-4.5 rounded-2xl bg-[#F8FAFC] hover:bg-white border border-slate-200/90 hover:border-[#1E6DEB]/40 hover:shadow-sm transition-all duration-200 flex items-start gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1E6DEB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E6DEB] group-hover:text-white group-hover:border-[#1E6DEB] transition-colors shadow-xs">
                      {getSkillIcon(skill, idx)}
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#1E6DEB]">
                        Competency {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#1E6DEB] transition-colors leading-snug">
                        {skill}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. Career Opportunities & Progression */}
        <section className="py-16 sm:py-24 bg-[#0A1118] text-white relative overflow-hidden">
          <div
            className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#1E6DEB]/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#D4F85A]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-black text-[#D4F85A]">
                <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                <span>EMPLOYMENT &amp; GLOBAL PLACEMENT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Career Opportunities
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
                Graduates of this programme are employment-ready for prestigious
                establishments in India and across the world.
              </p>
            </div>

            {/* Career Roles Grid: Compact, modern career pathway cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
              {course.careerOpportunities.map((role, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-[#D4F85A]/50 p-3.5 sm:p-4 flex flex-col justify-between gap-2.5 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-7 h-7 rounded-lg bg-[#D4F85A]/15 border border-[#D4F85A]/25 flex items-center justify-center group-hover:bg-[#D4F85A] group-hover:text-[#0A1118] transition-colors">
                      {getRoleIcon(role, idx)}
                    </div>
                    <span className="text-[10px] font-bold text-white/40 group-hover:text-[#D4F85A] transition-colors">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D4F85A] transition-colors leading-snug">
                      {role}
                    </h3>
                    <span className="text-[10px] text-white/50 block mt-0.5">
                      Employment Ready
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Progression Callout */}
            {course.careerProgression && (
              <div className="rounded-[32px] bg-gradient-to-r from-[#1351C7] to-[#1E6DEB] p-8 sm:p-10 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#D4F85A]">
                    <TrendingUp className="w-4 h-4" aria-hidden="true" />
                    <span>Long-Term Growth Pathway</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Career Progression
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 max-w-3xl leading-relaxed">
                    {course.careerProgression}
                  </p>
                </div>

                <Link
                  href={`/enroll?course=${course.id}`}
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition-all active:scale-95"
                >
                  <span>Begin Your Journey</span>
                  <AnimatedArrow size={14} />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* 7. Who Should Apply & Why Choose EEA Goa */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Who Should Apply */}
              <div className="rounded-[32px] bg-[#F8FAFC] border border-slate-200/90 p-8 sm:p-10 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-black text-[#1E6DEB]">
                    <Users className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>ADMISSIONS ELIGIBILITY</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                    Who Should Apply?
                  </h3>
                  <p className="text-sm text-slate-600 font-normal">
                    This programme has been designed for ambitious individuals
                    seeking high-impact culinary &amp; hospitality careers.
                  </p>
                </div>

                <ul className="space-y-3.5 text-sm sm:text-base text-slate-700">
                  {course.whoShouldApply.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1E6DEB]/15 text-[#1E6DEB] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-500">
                    Minimum Qualification:{" "}
                    <span className="text-slate-900">{course.eligibility}</span>
                  </p>
                </div>
              </div>

              {/* Why Choose Excellence Education Academy Goa */}
              <div className="rounded-[32px] bg-gradient-to-br from-[#1E6DEB] to-[#1351C7] text-white p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs font-black text-[#D4F85A]">
                    <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>WHY EXCELLENCE EDUCATION ACADEMY</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Study in Goa with International Exposure
                  </h3>
                  <p className="text-base sm:text-lg text-white/95 leading-relaxed font-normal">
                    {course.whyChooseEEA}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/20 space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-white/90">
                    <MapPin className="w-4 h-4 text-[#D4F85A] flex-shrink-0" />
                    <span>
                      Excellence Education Academy, Near Goa Beach &amp; Luxury
                      Resorts Hub
                    </span>
                  </div>

                  <Link
                    href={`/enroll?course=${course.id}`}
                    className="inline-flex items-center gap-2 bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-sm px-7 py-3.5 rounded-full shadow-lg transition-all active:scale-95"
                  >
                    <span>Apply Now for Next Batch</span>
                    <AnimatedArrow size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Direct Admissions Fast Form CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <div className="rounded-[36px] bg-white border-2 border-[#1E6DEB]/25 p-8 sm:p-12 shadow-[0_20px_50px_rgba(30,109,235,0.1)] text-center space-y-8">
              <div className="max-w-2xl mx-auto space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#1E6DEB]">
                  ADMISSIONS OPEN • LIMITED SEATS PER BATCH
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                  Start Your Enrollment for {course.shortTitle}
                </h2>
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                  Join students building world-class culinary and hospitality
                  careers with CTH-UK certification at Excellence Education
                  Academy Goa.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`/enroll?course=${course.id}`}
                  className="inline-flex items-center gap-2.5 bg-[#0A1118] hover:bg-[#1E6DEB] text-white font-black text-sm sm:text-base px-9 py-4 rounded-full shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Complete Online Enrollment</span>
                  <AnimatedArrow size={16} />
                </Link>

                <a
                  href="tel:+919607622999"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-black text-sm sm:text-base px-7 py-4 rounded-full shadow-sm transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#1E6DEB]" aria-hidden="true" />
                  <span>Call +91 96076 22999</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Related Other Programs */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#1E6DEB]">
                  EXPLORE ALTERNATIVE PATHWAYS
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1">
                  Other Popular Programs
                </h2>
              </div>

              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 text-sm font-black text-[#1E6DEB] hover:text-[#175CD3] transition-colors"
              >
                <span>View All Courses</span>
                <AnimatedArrow size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedCourses.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-[#1E6DEB]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <Link
                    href={`/courses/${rel.slug}`}
                    className="block cursor-pointer"
                  >
                    <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-[#D4F85A] text-[#0A1118] px-3 py-0.5 rounded-full text-[11px] font-black shadow-sm">
                        {rel.level}
                      </div>
                      <div className="absolute top-3 right-3 bg-white/95 text-slate-900 px-3 py-0.5 rounded-full text-[11px] font-black shadow-sm">
                        {rel.shortDuration}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-black text-slate-950 tracking-tight group-hover:text-[#1E6DEB] transition-colors leading-snug">
                        {rel.shortTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {rel.description}
                      </p>
                    </div>
                  </Link>

                  <div className="p-6 pt-0 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3.5">
                    <Link
                      href={`/courses/${rel.slug}`}
                      className="w-full inline-flex items-center justify-center gap-1 text-xs font-black bg-[#F0F6FE] text-[#1E6DEB] hover:bg-[#E0EEFD] py-2 px-3 rounded-full transition-colors"
                    >
                      <span>View</span>
                      <AnimatedArrow size={11} boxClassName="h-3 w-3" />
                    </Link>

                    <Link
                      href={`/enroll?course=${rel.id}`}
                      className="w-full inline-flex items-center justify-center gap-1 text-xs font-black bg-[#0A1118] text-white hover:bg-[#1E6DEB] py-2 px-3 rounded-full transition-colors"
                    >
                      <span>Enroll</span>
                      <AnimatedArrow size={11} boxClassName="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CTH Accreditation Banner */}
        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}
