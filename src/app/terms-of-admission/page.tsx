import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AccreditationBanner from "@/components/AccreditationBanner";

export const metadata: Metadata = {
  title: "Terms of Admission | Excellence Education Academy – Goa",
  description:
    "Admission guidelines, CTH-UK program eligibility, documentation, attendance, kitchen safety, and career placement terms at Excellence Education Academy, Goa.",
};

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "CTH-UK Eligibility",
    description:
      "Level 1 & Level 2 programs are open to students from any stream (10th Pass or Equivalent), plus RPL for experienced professionals.",
  },
  {
    icon: ClipboardCheck,
    title: "Guided Enrolment",
    description:
      "Submitting /enroll carries zero application fee—seats are finalized after counseling, document checks, and CTH registration.",
  },
  {
    icon: Award,
    title: "Practical Standards",
    description:
      "Accredited certificates require active lab attendance, commercial kitchen hygiene adherence, and practical assessment completion.",
  },
] as const;

const SECTIONS = [
  {
    id: "admissions-process",
    number: "01",
    title: "Scope & Admissions Process",
    paragraphs: [
      "These Terms of Admission govern applications, enrollment, practical training, and certification for all vocational programs offered at Excellence Education Academy – Goa (Alto Porvorim Campus).",
      "Submitting an online application on /enroll or /contact does not incur an online application fee and does not by itself constitute final enrollment. Admission is confirmed once eligibility is verified, required documents are submitted, applicable tuition/registration fees are settled, and a seat confirmation is issued by the Academy.",
    ],
  },
  {
    id: "eligibility-and-rpl",
    number: "02",
    title: "Program Eligibility & RPL Criteria",
    paragraphs: [
      "All programs are structured around Confederation of Tourism & Hospitality (CTH, UK) qualification standards:",
    ],
    bullets: [
      "CTH Level 2 Diplomas & Certificates (Culinary Skills, Patisserie & Confectionery, Cruise Hospitality Services, Professional Bartending Skills, and Restaurant Front of House Service): Open to aspiring candidates from any academic stream who have completed 10th Pass or Equivalent.",
      "CTH Level 1 Award in Basic Cookery Skills: Entry-level foundation pathway for beginners, aspiring cooks, and culinary entrepreneurs meeting 10th Pass or Equivalent criteria.",
      "Recognition of Prior Learning (RPL): Designed strictly for working culinary, bakery, and hospitality professionals in Goa and India who can document verified industry work experience for CTH competency evaluation.",
    ],
  },
  {
    id: "documentation",
    number: "03",
    title: "Documentation & Verification",
    paragraphs: [
      "Accurate legal and educational documentation is mandatory because learner records are submitted directly to CTH (UK) for registration and award issuance.",
    ],
    bullets: [
      "Valid government-issued photo identity proof (Aadhaar Card / Passport) matching the exact spelling required on your CTH certificate.",
      "10th Pass or equivalent school leaving/marksheet copies (and higher qualification certificates if applicable).",
      "Recent passport-size photographs and completed campus registration forms.",
      "For RPL applicants: Employer experience letters, service certificates, or documented culinary portfolios.",
      "Any falsified records or misrepresentation discovered before or during training may result in immediate cancellation of admission without certification.",
    ],
  },
  {
    id: "fees-and-refunds",
    number: "04",
    title: "Fees, Seat Reservation & Refunds",
    paragraphs: [
      "Complete fee schedules—including tuition, practical kitchen/bakery consumables, chef uniforms or toolkits, and CTH-UK registration/assessment charges—are shared transparently in writing during 1-on-1 admissions counseling.",
    ],
    bullets: [
      "Seat confirmation in a scheduled intake cohort requires timely payment of the prescribed registration/tuition installment within the stated deadline.",
      "External awarding-body registration fees paid to CTH (UK) are non-refundable once the learner has been registered for a cohort or assessment cycle.",
      "Requests for batch deferral, transfer to a subsequent cohort, or fee refund must be submitted in writing to the Goa Admissions Office and are governed by the signed enrollment agreement issued at registration.",
    ],
  },
  {
    id: "attendance-and-assessments",
    number: "05",
    title: "Attendance & CTH Assessments",
    paragraphs: [
      "CTH-UK qualifications emphasize hands-on competence alongside foundational theory. Learners are expected to maintain regular attendance across commercial kitchen bays, pastry labs, bar stations, and classroom briefings.",
    ],
    bullets: [
      "Learners must fulfill minimum practical attendance hours and submit assigned practical tasks/portfolios on schedule to be eligible for final CTH assessment.",
      "Unexcused absences during graded practical demonstrations or final CTH evaluations may require rescheduling or reassessment fees as applicable.",
      "Certificates are awarded solely upon successfully meeting all CTH learning outcomes and external quality-assurance checks.",
    ],
  },
  {
    id: "kitchen-safety-and-conduct",
    number: "06",
    title: "Kitchen Safety, Uniforms & Conduct",
    paragraphs: [
      "Our Alto Porvorim campus operates commercial-grade culinary equipment—including multi-burner hot kitchen ranges, commercial ovens, dough sheeters, refrigeration units, and cutlery. Safe and professional conduct is non-negotiable.",
    ],
    bullets: [
      "Full prescribed chef/bakery uniform, non-slip safety footwear, apron, and hair restraint must be worn inside all training kitchens and labs.",
      "Strict compliance with HACCP food hygiene, sanitation schedules, knife safety rules, and equipment operating instructions from chef instructors.",
      "Respectful professional behavior is expected toward faculty, peers, visiting hospitality leaders, and guests. Repeated safety violations or misconduct may lead to disciplinary suspension or dismissal.",
    ],
  },
  {
    id: "internships-and-placement",
    number: "07",
    title: "Internships & Career Placement Support",
    paragraphs: [
      "Excellence Education Academy provides dedicated placement guidance, CV and culinary portfolio preparation, mock interviews, and employer introductions across 5-star hotels, resorts, artisan bakeries, and international cruise lines.",
    ],
    bullets: [
      "While we actively support 100% placement assistance for eligible graduates, final employment offers remain at the discretion of recruiting hotels, cruise operators, and hospitality groups based on candidate interview performance and workplace readiness.",
      "International cruise ship and overseas placements are additionally subject to candidate passport validity, STCW/maritime medical fitness, CDC clearances, and destination visa approvals.",
    ],
  },
  {
    id: "changes-and-jurisdiction",
    number: "08",
    title: "Schedule Updates & Contact",
    paragraphs: [
      "The Academy reserves the right to adjust faculty assignments, batch timings, or training calendars where necessary to preserve educational quality or align with updated CTH-UK curriculum specifications.",
      "All admissions agreements and disputes relating to enrollment at Excellence Education Academy – Goa are subject to the applicable laws of India and the jurisdiction of courts in Goa.",
    ],
  },
] as const;

export default function TermsOfAdmissionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <PageHero
          breadcrumbLabel="Terms of Admission"
          eyebrow="ADMISSIONS GUIDELINES • CTH-UK STANDARDS"
          title="Terms of"
          highlight="Admission"
          subtitle="Clear guidelines covering CTH-UK course eligibility, campus registration, practical attendance, kitchen safety, and placement support in Goa."
        />

        {/* Key Summary Strip */}
        <section className="py-8 sm:py-12 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-5 sm:p-6 flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h2 className="text-sm sm:text-base font-black text-slate-950">
                        {item.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Terms Articles + Sticky Index */}
        <section className="py-10 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Mobile Quick Jump Pills */}
            <nav
              aria-label="Terms of admission sections"
              className="lg:hidden mb-6 overflow-x-auto no-scrollbar -mx-4 px-4"
            >
              <div className="flex items-center gap-2 w-max">
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="px-3.5 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:border-[#1E6DEB] hover:text-[#1E6DEB] whitespace-nowrap shadow-2xs"
                  >
                    {sec.number}. {sec.title}
                  </a>
                ))}
              </div>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* Left Sidebar (Desktop) */}
              <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
                <div className="hidden lg:block bg-white rounded-[28px] p-6 border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] space-y-4">
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#1E6DEB]">
                      On This Page
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      Updated 2026
                    </span>
                  </div>
                  <nav aria-label="Terms of admission table of contents">
                    <ul className="space-y-1.5 text-xs font-semibold">
                      {SECTIONS.map((sec) => (
                        <li key={sec.id}>
                          <a
                            href={`#${sec.id}`}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:bg-[#F0F6FE] hover:text-[#1E6DEB] transition-colors"
                          >
                            <span className="text-[10px] font-black text-[#1E6DEB] bg-[#F0F6FE] px-1.5 py-0.5 rounded-md">
                              {sec.number}
                            </span>
                            <span className="truncate">{sec.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Admissions Office Card */}
                <div className="bg-[#0A1118] text-white rounded-3xl sm:rounded-[28px] p-5 sm:p-6 space-y-4 shadow-xl">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4F85A]">
                      Goa Admissions Office
                    </span>
                    <h2 className="text-lg font-black tracking-tight">
                      Need Counseling Clarification?
                    </h2>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <p className="flex items-start gap-2.5">
                      <MapPin
                        className="w-4 h-4 text-[#D4F85A] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>
                        The Capital, 660/3, Alto Porvorim, Goa 403521
                      </span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Phone
                        className="w-4 h-4 text-[#D4F85A] shrink-0"
                        aria-hidden="true"
                      />
                      <a
                        href="tel:+918329208271"
                        className="font-bold text-white hover:text-[#D4F85A]"
                      >
                        +91 8329208271
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Mail
                        className="w-4 h-4 text-[#D4F85A] shrink-0"
                        aria-hidden="true"
                      />
                      <a
                        href="mailto:contact@exceleduacademy.com"
                        className="font-bold text-white hover:text-[#D4F85A] break-all"
                      >
                        contact@exceleduacademy.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Clock
                        className="w-4 h-4 text-[#D4F85A] shrink-0"
                        aria-hidden="true"
                      />
                      <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <Link
                      href="/privacy-policy"
                      className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-[#D4F85A]" aria-hidden="true" />
                        <span>Read Privacy Policy</span>
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    <Link
                      href="/enroll"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-xs transition-colors"
                    >
                      <span>Start Your Application</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Terms Articles */}
              <div className="lg:col-span-8 space-y-4 sm:space-y-6">
                {SECTIONS.map((sec) => (
                  <article
                    key={sec.id}
                    id={sec.id}
                    className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-2xl sm:rounded-[28px] p-5 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.04)] space-y-3 sm:space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-[#D4F85A] text-[#0A1118] text-[11px] font-black">
                        {sec.number}
                      </span>
                      <h2 className="text-lg sm:text-2xl font-black text-slate-950 tracking-tight">
                        {sec.title}
                      </h2>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {sec.paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    {"bullets" in sec && sec.bullets && (
                      <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {sec.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className="w-4 h-4 text-[#1E6DEB] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}

