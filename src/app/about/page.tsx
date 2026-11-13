import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ChefHat,
  ChevronRight,
  Compass,
  Globe2,
  GraduationCap,
  Layers,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationBanner from "@/components/AccreditationBanner";

export const metadata: Metadata = {
  title: "About Us | Excellence Education Academy – Goa",
  description:
    "Excellence Education Academy – Goa is a premier CTH-accredited vocational training institution specializing in Culinary Arts, Bakery, and Hospitality.",
};

const CTH_PILLARS = [
  {
    number: "01",
    icon: Globe2,
    title: "Global Recognition",
    description:
      "Your certificate is internationally accredited, giving you an edge in placements and further education.",
  },
  {
    number: "02",
    icon: Briefcase,
    title: "Employability Boost",
    description:
      "CTH-accredited practical training strengthens your career readiness for top luxury hotels, bakeries, and international cruise lines.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Industry-Relevant Curriculum",
    description:
      "CTH programs are designed in consultation with global employers to ensure practical relevance.",
  },
  {
    number: "04",
    icon: Layers,
    title: "Progression Pathways",
    description:
      "Graduates can progress to degree top-ups or postgraduate studies in the UK, Australia, New Zealand, and Canada.",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Skill-Focused Certification",
    description:
      "Emphasizes not just knowledge but real-world skills critical to succeed in kitchens, bakeries, and food ventures.",
  },
];

const MISSION_POINTS = [
  "To equip students with internationally recognized culinary and bakery skills.",
  "To cultivate industry-ready professionals through hands-on learning, innovation, and mentorship.",
  "To create a global ecosystem that connects students to career opportunities worldwide.",
];

const ACADEMY_GOALS = [
  "Deliver high-quality education aligned with UK standards.",
  "Bridge the gap between education and employability in hospitality.",
  "Establish a pipeline of skilled professionals for global hospitality brands.",
  "Foster entrepreneurship and leadership in culinary arts.",
];

const EEA_GALLERY = [
  {
    src: "/eea-gallary/eea-gallary1.jpg",
    title: "Academy Reception",
    subtitle: "Excellence Education Academy Goa front desk & lounge",
    tag: "Campus Front",
  },
  {
    src: "/eea-gallary/eea-gallary2.jpg",
    title: "Commercial Hot Kitchen",
    subtitle: "Multi-station gas ranges & stainless steel exhaust hood",
    tag: "Hot Kitchen",
  },
  {
    src: "/eea-gallary/eea-gallary3.jpg",
    title: "Culinary Prep & Cold Storage",
    subtitle: "Stainless steel prep counters & commercial refrigeration",
    tag: "Prep Zone",
  },
  {
    src: "/eea-gallary/eea-gallary4.jpg",
    title: "Bakery & Pastry Lab",
    subtitle: "Dough sheeter, prep tables & commercial baking space",
    tag: "Pastry Lab",
  },
  {
    src: "/eea-gallary/eea-gallary5.jpg",
    title: "Commercial Ovens & Proofer",
    subtitle: "Deck baking ovens, proofing cabinet & sheet pan racks",
    tag: "Bakery Equipment",
  },
  {
    src: "/eea-gallary/eea-gallary6.jpg",
    title: "Kitchen Workstations",
    subtitle: "Individual commercial cooking bays & prep tables",
    tag: "Training Lab",
  },
];

const INSTRUCTIONAL_ADVISORS = [
  {
    name: "Mr. Alphonso Pereira",
    role: "Academic Head",
    badge: "Academic Leadership",
    image: "/acemedic-head.jpg",
    imageAlt:
      "Mr. Alphonso Pereira, Academic Head at Excellence Education Academy",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden text-white bg-gradient-to-b from-[#1351C7] via-[#1E6DEB] to-[#4F94FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-6">
            {/* Breadcrumb */}
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
              <span className="text-[#D4F85A] font-black">About</span>
            </nav>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1118]/30 border border-white/25 backdrop-blur-md text-[11px] font-black uppercase tracking-widest text-[#D4F85A]">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>WHO ARE &ldquo;EXCELLENCE EDUCATION ACADEMY&rdquo;?</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                About <span className="text-[#D4F85A]">Us</span>
              </h1>

              <p className="text-base sm:text-xl text-white/95 max-w-2xl mx-auto font-medium leading-relaxed">
                Goa&apos;s premier CTH-accredited vocational training
                institution for Culinary Arts, Bakery, and Hospitality.
              </p>
            </div>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/75 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </section>

        {/* 2. Institution Profile */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB]">
                  <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>INSTITUTION PROFILE</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
                  Who Are &ldquo;Excellence Education Academy&rdquo;?
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Excellence Education Academy &ndash; Goa is a premier
                  vocational training institution specializing in Culinary Arts
                  and Bakery. Strategically located in the vibrant coastal state
                  of Goa, Excellence Education Academy is a hub for aspiring
                  chefs, bakers, and hospitality professionals seeking globally
                  recognized education.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  The academy is built with a vision to provide world-class
                  culinary training in India with British accreditations that
                  open doors to international career pathways.
                </p>

                {/* Key Highlights Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-4">
                    <p className="text-2xl font-black text-[#1E6DEB]">Goa</p>
                    <p className="text-xs font-bold text-slate-600 mt-1">
                      Coastal Hospitality Hub
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-4">
                    <p className="text-2xl font-black text-slate-950">CTH UK</p>
                    <p className="text-xs font-bold text-slate-600 mt-1">
                      100+ Countries Recognition
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#D4F85A] border border-[#8BAE16]/25 p-4">
                    <p className="text-2xl font-black text-[#0A1118]">
                      30+ Yrs
                    </p>
                    <p className="text-xs font-bold text-[#0A1118]/80 mt-1">
                      CTH Awarding Expertise
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4">
                  <Link
                    href="/enroll"
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0A1118] hover:bg-black text-white font-black text-xs sm:text-sm px-4.5 sm:px-8 py-2.5 sm:py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Enquire for Admissions</span>
                    <AnimatedArrow size={14} className="text-[#D4F85A]" boxClassName="h-4 w-4 sm:h-5 sm:w-[17px]" />
                  </Link>
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#F0F6FE] hover:bg-[#e1edfe] text-[#1E6DEB] font-black text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-4 rounded-full border border-[#1E6DEB]/20 transition-colors"
                  >
                    <span>Explore Courses</span>
                  </Link>
                </div>
              </div>

              {/* Right Visual Collage */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative w-full aspect-[16/10] rounded-[32px] overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                  <Image
                    src="/eea-gallary/eea-gallary1.jpg"
                    alt="Excellence Education Academy Goa reception lobby"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-3">
                    <Image
                      src="/cth-approved.png"
                      alt="CTH Approved Centre"
                      width={130}
                      height={52}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                    <Image
                      src="/eea-gallary/eea-gallary2.jpg"
                      alt="Commercial hot kitchen range workstations"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                    <Image
                      src="/eea-gallary/eea-gallary5.jpg"
                      alt="Commercial bakery deck ovens and proofer suite"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What is CTH? / CTH Accreditation */}
        <section className="py-10 sm:py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-10 md:space-y-12">
            <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-5">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200 text-[11px] sm:text-xs font-black text-[#1E6DEB] shadow-xs">
                <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                <span>CTH ACCREDITATION</span>
              </div>

              <div className="flex justify-center">
                <div className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-white px-4 py-2 sm:px-6 sm:py-3 border border-slate-200/90 shadow-sm">
                  <Image
                    src="/cth-approved.png"
                    alt="CTH Approved Centre — Confederation of Tourism & Hospitality"
                    width={220}
                    height={88}
                    className="h-8 sm:h-12 w-auto object-contain"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
                What is CTH?
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                The Confederation of Tourism &amp; Hospitality (CTH) is a
                UK-based specialist awarding body offering professional
                qualifications across the tourism, hospitality, and culinary
                sectors. With over 30 years of expertise, CTH qualifications are
                globally respected and recognized by employers and academic
                institutions in over 100 countries.
              </p>
            </div>

            {/* 5 CTH Pillars in balanced 6-col bento grid (3 top + 2 bottom) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3.5 sm:gap-6">
              {CTH_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                const spanClass = idx < 3 ? "lg:col-span-2" : "lg:col-span-3";
                return (
                  <div
                    key={pillar.number}
                    className={`${spanClass} bg-white rounded-[20px] sm:rounded-[28px] p-4.5 sm:p-7 md:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.03)] hover:shadow-[0_16px_36px_rgba(30,109,235,0.08)] hover:border-[#1E6DEB]/40 transition-all flex flex-col justify-between space-y-3 sm:space-y-5 group`}
                  >
                    <div className="space-y-2.5 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                        </div>
                        <span className="text-[11px] sm:text-xs font-black text-slate-400 tracking-wider">
                          {pillar.number}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-950 tracking-tight">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Vision, Mission And Goals */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB]">
                <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                <span>OUR PURPOSE &amp; DIRECTION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
                Vision, Mission And Goals
              </h2>
            </div>

            {/* Vision & Mission Bento Duo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Vision */}
              <div className="rounded-[32px] bg-[#0A1118] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-6">
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 bg-[#1E6DEB]/25 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4F85A] text-[#0A1118] text-xs font-black uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Our Vision</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Vision
                  </h3>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                    To be India&apos;s leading culinary and bakery institute
                    that delivers globally benchmarked vocational education,
                    nurturing innovation, creativity, and excellence in the
                    hospitality domain.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="rounded-[32px] bg-[#1E6DEB] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-6">
                <div
                  className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/15 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1E6DEB] text-xs font-black uppercase tracking-wider">
                    <Target className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Our Mission</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Mission
                  </h3>
                  <ul className="space-y-3 text-sm sm:text-base text-white/95 leading-relaxed font-normal">
                    {MISSION_POINTS.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 text-[#D4F85A] flex-shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Goals Card */}
            <div className="rounded-[32px] bg-[#F8FAFC] border border-slate-200/90 p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,17,24,0.03)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#1E6DEB]">
                    STRATEGIC COMMITMENTS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1">
                    Goals
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4F85A] text-[#0A1118] text-xs font-black self-start sm:self-auto">
                  Aligned With UK Standards
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ACADEMY_GOALS.map((goal, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#D4F85A] text-[#0A1118] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-bold text-slate-800 leading-snug">
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Excellence Education Academy Gallery */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-black text-[#1E6DEB] shadow-xs">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>INFRASTRUCTURE &amp; SHOWROOM FACILITIES</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
                Excellence Education Academy Gallery
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Explore our culinary prep counters, commercial ovens, kitchen
                workstations, academy reception, and practical training labs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {EEA_GALLERY.map((item) => (
                <div
                  key={item.title}
                  className="group relative rounded-[32px] overflow-hidden border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(10,17,24,0.05)] hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.src}
                      alt={`${item.title} — ${item.subtitle}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/85 via-[#0A1118]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-[#D4F85A] text-[#0A1118] text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <h3 className="text-xl font-black tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/85 font-medium mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Course Mentors / Instructional Advisors */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB]">
                <ChefHat className="w-3.5 h-3.5" aria-hidden="true" />
                <span>COURSE MENTORS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
                Instructional Advisors
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Dedicated academic leadership mentoring students to
                international CTH hospitality standards.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              {INSTRUCTIONAL_ADVISORS.map((advisor) => (
                <article
                  key={advisor.name}
                  className="group bg-[#F8FAFC] rounded-[32px] p-4 border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_20px_48px_rgba(30,109,235,0.12)] hover:border-[#1E6DEB]/40 transition-all duration-300"
                >
                  <div className="relative aspect-[4/5] w-full rounded-[24px] overflow-hidden bg-slate-100">
                    <Image
                      src={advisor.image}
                      alt={advisor.imageAlt}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/65 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 bg-[#D4F85A] text-[#0A1118] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        <GraduationCap className="w-3 h-3" aria-hidden="true" />
                        <span>{advisor.badge}</span>
                      </span>
                    </div>
                  </div>

                  <div className="px-3 pt-5 pb-3 text-center space-y-1">
                    <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                      {advisor.name}
                    </h3>
                    <p className="text-sm font-bold text-[#1E6DEB]">
                      {advisor.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTH Accreditation Banner */}
        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}
