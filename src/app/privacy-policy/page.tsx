import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileText,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AccreditationBanner from "@/components/AccreditationBanner";

export const metadata: Metadata = {
  title: "Privacy Policy | Excellence Education Academy – Goa",
  description:
    "How Excellence Education Academy in Alto Porvorim, Goa collects, uses, protects, and manages applicant and student information for CTH-UK hospitality programs.",
};

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Purpose-Bound Data",
    description:
      "Details submitted through /enroll or /contact are used strictly for admissions counseling, CTH registration, and student support.",
  },
  {
    icon: Lock,
    title: "No Data Selling",
    description:
      "We never sell, rent, or trade student or parent contact details to third-party telemarketers or data brokers.",
  },
  {
    icon: UserCheck,
    title: "Full Applicant Control",
    description:
      "Request access, corrections, or deletion of your inquiry record at any time via phone or email.",
  },
] as const;

const SECTIONS = [
  {
    id: "overview",
    number: "01",
    title: "Overview & Scope",
    paragraphs: [
      "Excellence Education Academy – Goa (\"the Academy\", \"we\", \"our\") respects the privacy of prospective learners, parents, guardians, working professionals seeking Recognition of Prior Learning (RPL), and visitors to our website.",
      "This Privacy Policy explains what information we collect when you browse our website, submit an admissions inquiry or course application, contact our Alto Porvorim campus, or enroll in a Confederation of Tourism & Hospitality (CTH, UK) accredited program.",
    ],
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    paragraphs: [
      "We collect only the information relevant to guiding you through our culinary, patisserie, bartending, front-of-house, and cruise hospitality programs:",
    ],
    bullets: [
      "Admissions & Counseling Inquiries (/enroll and /contact): Your full name, email address, mobile or WhatsApp number, optional city/location, selected CTH course or RPL track, educational qualification or work background, and any career goals or questions you choose to share.",
      "Formal Enrollment & CTH-UK Verification Records: When confirming a seat at our Goa campus, we collect government-issued ID proof, 10th Pass or equivalent academic transcripts, photographs, and—for RPL candidates—verified hospitality work experience records.",
      "Website & Essential Operational Logs: Standard server and request metadata (such as page routes accessed and browser user-agent) used strictly to keep the site reliable and secure.",
    ],
  },
  {
    id: "how-we-use-data",
    number: "03",
    title: "How We Use Your Information",
    paragraphs: [
      "Information shared with Excellence Education Academy Goa is processed solely for legitimate educational and admissions operations:",
    ],
    bullets: [
      "Responding within 24 hours to schedule 1-on-1 admissions counseling calls and live kitchen/bakery tours in Alto Porvorim.",
      "Sending requested program brochures, batch schedules, fee structures, and admission confirmation references (such as your EEA application reference ID).",
      "Assessing candidate eligibility for CTH Level 1, CTH Level 2, or RPL British Certification tracks.",
      "Completing official student registration, practical assessments, and certificate issuance with CTH (UK).",
      "Coordinating internships and career placement interviews with partner hotels, resorts, bakeries, and cruise hospitality recruiters with your consent.",
    ],
  },
  {
    id: "sharing-and-confidentiality",
    number: "04",
    title: "Sharing & Confidentiality",
    paragraphs: [
      "We do not sell, lease, or distribute applicant records to unrelated third parties. Access to your records is restricted to authorized academic, counseling, and administrative staff at Excellence Education Academy.",
      "Where required to deliver your training or certification, relevant details may be shared strictly on a need-to-know basis with:",
    ],
    bullets: [
      "Confederation of Tourism & Hospitality (CTH, UK) for learner enrollment, internal/external verification, and award certification.",
      "Hospitality placement partners, hotels, and maritime/cruise recruitment teams when you opt into placement and internship interviews.",
      "Legal, regulatory, or statutory authorities in India where disclosure is required by applicable law.",
    ],
  },
  {
    id: "communication-preferences",
    number: "05",
    title: "Communication Preferences",
    paragraphs: [
      "When you submit an inquiry form or click to fast-track your application via WhatsApp, our Goa admissions advisors may follow up by phone call, SMS, WhatsApp, or email regarding your selected program.",
      "You may opt out of follow-up communications at any time by replying STOP on WhatsApp, emailing contact@exceleduacademy.com, or informing our team on +91 8329208271.",
    ],
  },
  {
    id: "retention-and-security",
    number: "06",
    title: "Data Retention & Security",
    paragraphs: [
      "We maintain administrative and technical safeguards designed to protect stored admission inquiries and academic records against unauthorized access, alteration, or loss.",
      "Website inquiry records are retained only for as long as needed to support your admissions cohort and counseling requests. Academic and certification records of enrolled learners are maintained in line with CTH-UK audit and verification standards.",
    ],
  },
  {
    id: "your-rights",
    number: "07",
    title: "Your Privacy Rights",
    paragraphs: [
      "You retain control over the personal information you provide to the Academy. At any time, you may request to:",
    ],
    bullets: [
      "Review the inquiry or enrollment contact details we hold for you.",
      "Update or correct inaccurate phone numbers, email addresses, or spelling of your legal name prior to CTH-UK registration.",
      "Request deletion of an inquiry record if you choose not to proceed with admission.",
    ],
  },
  {
    id: "updates-and-contact",
    number: "08",
    title: "Policy Updates & Contact",
    paragraphs: [
      "We may update this Privacy Policy periodically to reflect improvements in our admissions portal or regulatory guidance. The effective year below always indicates the latest active version.",
      "For any questions regarding this Privacy Policy or your personal data, please contact the Admissions & Administration Office in Goa using the details on this page.",
    ],
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <PageHero
          breadcrumbLabel="Privacy Policy"
          eyebrow="EXCELLENCE EDUCATION ACADEMY • GOA"
          title="Privacy"
          highlight="Policy"
          subtitle="How we safeguard the contact details, admissions inquiries, and academic records entrusted to our CTH-UK hospitality campus in Goa."
        />

        {/* Policy Highlights Strip */}
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

        {/* Main Document Content + Sticky Index */}
        <section className="py-10 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Mobile Quick Jump Pills */}
            <nav
              aria-label="Privacy policy sections"
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
                  <nav aria-label="Privacy policy table of contents">
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

                {/* Privacy Office Contact Card */}
                <div className="bg-[#0A1118] text-white rounded-3xl sm:rounded-[28px] p-5 sm:p-6 space-y-4 shadow-xl">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4F85A]">
                      Admissions &amp; Privacy Desk
                    </span>
                    <h2 className="text-lg font-black tracking-tight">
                      Questions About Your Data?
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
                      href="/terms-of-admission"
                      className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-[#D4F85A]" aria-hidden="true" />
                        <span>Read Terms of Admission</span>
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    <Link
                      href="/enroll"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-xs transition-colors"
                    >
                      <span>Apply for a Program</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Policy Articles */}
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

