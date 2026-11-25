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
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationBanner from "@/components/AccreditationBanner";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import { BLOG_POSTS } from "@/data/blogs";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "The Culinary Journal | Excellence Education Academy – Goa",
  description:
    "Authoritative culinary masterclasses, French pastry techniques, cruise ship career roadmaps, and CTH-UK qualification guides from Excellence Education Academy Goa.",
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
    title: "The Culinary Journal & Insights | Excellence Education Academy Goa",
    description:
      "Explore 10 comprehensive masterclasses on commercial cookery, French patisserie, cruise ship placements, and British CTH certifications from Goa's premier culinary academy.",
    url: "https://exceleduacademy.com/blogs",
    siteName: "Excellence Education Academy",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogsPage() {
  // Top featured spotlight post for the hero card
  const spotlightPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Distinctive Dark Obsidian Culinary Journal Masthead */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden text-white bg-[#0A1118] border-b border-slate-800">
          {/* Subtle Fine Mesh Grid & Warm Ambient Glows (No generic blue gradient) */}
          <div
            className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
            aria-hidden="true"
          />
          {/* Warm Amber Kitchen Heat Lamp Glow (Top Left) */}
          <div
            className="absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none"
            aria-hidden="true"
          />
          {/* Electric Lime Accent Glow (Bottom Right) */}
          <div
            className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-[#D4F85A]/10 blur-[140px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-10">
            {/* Masthead Top Bar: Breadcrumb + Edition Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs">
              <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 font-bold text-slate-300">
                <Link href="/" className="hover:text-[#D4F85A] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                <span className="text-[#D4F85A] font-black uppercase tracking-wider">
                  The Culinary Journal
                </span>
              </nav>

              <div className="flex items-center gap-3 text-slate-400 font-semibold text-[11px] uppercase tracking-wider">
                <span className="inline-flex items-center gap-1.5 text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#D4F85A] animate-pulse" />
                  <span>Goa Campus Editorial</span>
                </span>
                <span>•</span>
                <span>British CTH-UK Center</span>
              </div>
            </div>

            {/* Split Masthead Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Publication Title & Manifesto */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] font-black uppercase tracking-widest text-[#D4F85A]">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>MASTERCLASSES, TECHNIQUE &amp; MARITIME PATHWAYS</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
                    Stories From <br className="hidden sm:inline" />
                    The Pass:{" "}
                    <span className="text-[#D4F85A]">The Culinary Journal</span>
                  </h1>
                  <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                    Straight from our commercial training kitchens in Alto Porvorim, Goa. Explore classical French kitchen techniques, high-earning cruise ship placements, patisserie chemistry, and Ofqual UK vocational pathways.
                  </p>
                </div>

                {/* Trending Topic Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#D4F85A]" />
                    <span>Trending:</span>
                  </span>
                  <Link
                    href="/blogs/the-5-french-mother-sauces-culinary-school-guide"
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
                  >
                    #MotherSauces
                  </Link>
                  <Link
                    href="/blogs/how-to-join-international-cruise-ships-from-goa"
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
                  >
                    #CruiseShipJobs
                  </Link>
                  <Link
                    href="/blogs/mastering-french-patisserie-science-of-croissants-and-viennoiserie"
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
                  >
                    #CroissantScience
                  </Link>
                  <Link
                    href="/blogs/essential-culinary-knife-skills-8-classical-cuts"
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
                  >
                    #KnifeSkills
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Spotlight Feature Card */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-b from-slate-900 to-[#0A1118] rounded-3xl p-6 border-2 border-white/10 hover:border-[#D4F85A]/50 transition-all duration-300 shadow-2xl relative group overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#D4F85A]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>EDITOR&apos;S SPOTLIGHT</span>
                    </span>
                    <span className="text-slate-400 font-semibold">{spotlightPost.readTime}</span>
                  </div>

                  <Link href={`/blogs/${spotlightPost.slug}`} className="block pt-4 space-y-4">
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-800">
                      <Image
                        src={spotlightPost.image}
                        alt={spotlightPost.imageAlt}
                        fill
                        priority
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 35vw"
                      />
                      <div className="absolute top-3 left-3 bg-[#D4F85A] text-[#0A1118] px-3 py-0.5 rounded-full text-[11px] font-black shadow-sm">
                        {spotlightPost.category}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-white group-hover:text-[#D4F85A] transition-colors leading-snug">
                        {spotlightPost.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed font-normal">
                        {spotlightPost.excerpt}
                      </p>
                    </div>
                  </Link>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-700">
                        <Image
                          src={spotlightPost.author.avatar}
                          alt={spotlightPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs text-slate-300 font-semibold">
                        {spotlightPost.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/blogs/${spotlightPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#D4F85A] hover:underline"
                    >
                      <span>Read Spotlight</span>
                      <AnimatedArrow size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Trust Row Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-bold text-slate-300">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                <BookOpen className="w-4 h-4 text-[#D4F85A] shrink-0" />
                <span>10 Complete Masterclasses</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                <Award className="w-4 h-4 text-[#D4F85A] shrink-0" />
                <span>British Ofqual UK Regulated</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                <Ship className="w-4 h-4 text-[#D4F85A] shrink-0" />
                <span>Maritime Cruise Placements</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                <GraduationCap className="w-4 h-4 text-[#D4F85A] shrink-0" />
                <span>Executive Chef Mentorship</span>
              </div>
            </div>
          </div>
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
