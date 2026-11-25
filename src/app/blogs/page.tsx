import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Ship,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationBanner from "@/components/AccreditationBanner";
import { HeroAtmosphere } from "@/components/ui/HeroAtmosphere";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Culinary & Hospitality Blogs | Excellence Education Academy – Goa",
  description:
    "Authoritative guides on CTH-UK culinary qualifications, international cruise ship careers, classical French cooking techniques, patisserie science, and professional bartending in Goa.",
  keywords: [
    "culinary school blogs Goa",
    "cruise ship chef careers",
    "CTH UK qualifications",
    "French mother sauces guide",
    "croissant lamination science",
    "RPL culinary certification India",
    "Excellence Education Academy Goa",
  ],
  openGraph: {
    title: "Culinary & Hospitality Insights | Excellence Education Academy Goa",
    description:
      "Explore 10 comprehensive guides on commercial cookery, French patisserie, cruise ship placements, and British CTH certifications from Goa's premier culinary academy.",
    url: "https://exceleduacademy.com/blogs",
    siteName: "Excellence Education Academy",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Upgraded Header / Hero Section */}
        <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden text-white bg-gradient-to-b from-[#1351C7] via-[#1E6DEB] to-[#3B82F6]">
          {/* Faded White Globe, UK Flag & Cruise Ship Atmosphere */}
          <HeroAtmosphere />

          {/* Decorative ambient glows */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#D4F85A]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-6">
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
              <span className="text-[#D4F85A] font-black">Blogs &amp; Insights</span>
            </nav>

            {/* Headline and Eyebrow */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1118]/35 border border-white/25 backdrop-blur-md text-[11px] font-black uppercase tracking-widest text-[#D4F85A]">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>EXCELLENCE EDUCATION ACADEMY • CULINARY JOURNAL &amp; KNOWLEDGE HUB</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                Culinary Techniques, Pastry Science &amp;{" "}
                <span className="text-[#D4F85A]">Global Career Insights</span>
              </h1>

              <p className="text-base sm:text-xl text-white/95 max-w-3xl mx-auto font-medium leading-relaxed">
                Authoritative, chef-authored guides on British CTH-UK qualifications, luxury cruise ship placements, French mother sauces, laminated doughs, and professional kitchen mastery from our Goa training labs.
              </p>
            </div>

            {/* Trust and Summary Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-2">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md text-slate-900">
                <Image
                  src="/cth-logo.png"
                  alt="CTH UK"
                  width={75}
                  height={15}
                  className="h-3.5 w-auto object-contain"
                />
                <span className="text-[11px] font-black text-slate-800">
                  Approved Centre • Goa
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-extrabold text-white">
                <BookOpen className="w-3.5 h-3.5 text-[#D4F85A]" aria-hidden="true" />
                <span>10 In-Depth Guides</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-extrabold text-white">
                <Ship className="w-3.5 h-3.5 text-[#D4F85A]" aria-hidden="true" />
                <span>Maritime Cruise Careers</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-extrabold text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4F85A]" aria-hidden="true" />
                <span>80% Practical Kitchen Science</span>
              </span>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-50 via-slate-50/75 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </section>

        {/* Blogs Catalog, Search & Filter Section */}
        <BlogsClient />

        {/* CTH UK Accreditation Banner */}
        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}
