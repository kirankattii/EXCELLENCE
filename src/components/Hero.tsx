"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Star, CheckCircle2 } from "lucide-react";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import { CurvedMobileMarquee } from "@/components/ui/curved-mobile-marquee";

export default function Hero() {
  const showcaseCards = [
    {
      title: "Culinary Skills",
      subtitle: "CTH Level 2 Diploma",
      badge: "CTH Level 2",
      image: "/images/culinary-hero.jpg",
      rating: "4.9",
      rotate: "sm:-rotate-6",
      offset: "sm:translate-y-4",
    },
    {
      title: "Patisserie Arts",
      subtitle: "Bakery & Confectionery",
      badge: "CTH Level 2",
      image: "/images/patisserie-skills.jpg",
      rating: "5.0",
      rotate: "sm:-rotate-3",
      offset: "sm:translate-y-1",
    },
    {
      title: "Cruise Hospitality",
      subtitle: "Global Fleet Careers",
      badge: "CTH Level 2",
      image: "/images/cruise-hospitality.jpg",
      rating: "5.0",
      rotate: "sm:rotate-0",
      offset: "sm:-translate-y-2",
      featured: true,
    },
    {
      title: "Commercial Kitchens",
      subtitle: "Goa Training Labs",
      badge: "Goa Campus",
      image: "/eea-gallary/eea-gallary2.jpg",
      rating: "4.9",
      rotate: "sm:rotate-3",
      offset: "sm:translate-y-1",
    },
    {
      title: "Bartending Skills",
      subtitle: "Professional Bar Service",
      badge: "CTH Level 2",
      image: "/images/barista-beverage.jpg",
      rating: "4.8",
      rotate: "sm:rotate-6",
      offset: "sm:translate-y-4",
    },
  ];

  const partners = [
    { name: "CTH UK", label: "Awarding Body" },
    { name: "30+ Years", label: "Trusted UK Expertise" },
    { name: "60+ Countries", label: "Global Reach" },
    { name: "100+ Institutions", label: "Partner Pathways" },
    { name: "Hotels & Resorts", label: "Global Careers" },
    { name: "Restaurants & Catering", label: "Culinary Roles" },
    { name: "Cruise Lines", label: "Maritime Hospitality" },
    { name: "Airlines & Events", label: "Service Leadership" },
  ];

  return (
    <>
      <section className="relative pt-20 sm:pt-36 overflow-hidden text-white bg-gradient-to-b from-[#1351C7] via-[#1E6DEB] to-[#4F94FA]">
        {/* Floating Side Action Icons (Right Edge) */}
        <aside
          aria-label="Quick contact"
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3"
        >
          <a
            href="tel:+918329208271"
            className="w-12 h-12 rounded-full bg-[#0A1118] hover:bg-[#162436] text-[#D4F85A] flex items-center justify-center shadow-2xl hover:scale-110 transition-all focus-visible:outline-2 focus-visible:outline-[#D4F85A]"
            aria-label="Call Admissions Directly"
            title="Call Admissions: +91 8329208271"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/918329208271?text=Hi%20Excellence%20Education%20Academy,%20I%20am%20interested%20in%20your%20culinary%20and%20hospitality%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all focus-visible:outline-2 focus-visible:outline-[#25D366]"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-5 h-5" aria-hidden="true" />
          </a>
        </aside>

        <div className="max-w-7xl mx-auto px-1 sm:px-8 relative z-10 text-center space-y-7 pt-4">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/35 backdrop-blur-md text-xs font-black text-white shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#D4F85A] animate-pulse" />
            <span>EXCELLENCE EDUCATION ACADEMY • GOA</span>
          </div>

          {/* Main Central Heading matching Reference */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              Craft Your Skills.{" "}
              <span className="text-[#D4F85A] drop-shadow-[0_4px_28px_rgba(212,248,90,0.45)] underline decoration-white/40 decoration-wavy decoration-1 underline-offset-8">
                Shape Your Future.
              </span>
            </h1>

            <p className="text-lg sm:text-2xl font-bold text-white/95 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
              International Culinary &amp; Hospitality Education in Goa
            </p>

            <p className="text-base sm:text-xl text-white max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
              Train with industry-focused practical learning at Excellence
              Education Academy, an approved centre of the Confederation of
              Tourism &amp; Hospitality (CTH), UK.
            </p>
          </div>

          {/* Action Buttons matching Reference with Electric Lime */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 w-full max-w-[280px] mx-auto sm:max-w-none sm:w-auto">
            <Link
              href="#courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-sm sm:text-base py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-[0_8px_24px_rgba(212,248,90,0.5)] hover:shadow-[0_16px_40px_rgba(212,248,90,0.7)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 hover:scale-105"
            >
              <span>Explore Our Courses</span>
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0A1118] flex items-center justify-center overflow-hidden">
                <AnimatedArrow
                  size={12}
                  boxClassName="h-3.5 w-3.5"
                  className="text-[#D4F85A]"
                />
              </div>
            </Link>

            <Link
              href="#admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold text-sm sm:text-base py-3 px-6 sm:py-4 sm:px-7 rounded-full border border-white/40 backdrop-blur-md transition-all duration-200 shadow-md"
            >
              <span>Book a Campus Visit</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 pt-1 text-xs text-white font-extrabold drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4F85A]" />
              <span>30+ Trusted UK Awarding Body</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4F85A]" />
              <span>60+ Countries Global Reach</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4F85A]" />
              <span>100% CTH-UK Certification</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4F85A]" />
              <span>100+ Partner Institutions</span>
            </span>
          </div>

          {/* Mobile View: Dynamic Curved Path Marquee */}
          <div className="block sm:hidden pt-4 pb-1 w-full overflow-hidden">
            <CurvedMobileMarquee cards={showcaseCards} speed={36} />
          </div>

          {/* Desktop View: Floating Perspective Cards Fan */}
          <div className="hidden sm:block pt-6 sm:pt-10 pb-4">
            <div className="grid grid-cols-5 gap-4 lg:gap-4 items-end max-w-6xl mx-auto">
              {showcaseCards.map((card, idx) => (
                <div
                  key={idx}
                  className={`relative bg-white rounded-3xl p-3 shadow-[0_20px_50px_rgba(10,17,24,0.25)] border border-white transition-all duration-300 hover:scale-105 hover:z-20 ${card.rotate} ${card.offset} ${
                    card.featured
                      ? "ring-2 ring-[#D4F85A] shadow-[0_25px_60px_rgba(212,248,90,0.45)]"
                      : ""
                  }`}
                >
                  {/* Photo container */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="20vw"
                    />
                    <div className="absolute top-2 left-2 bg-[#0A1118]/85 text-[#D4F85A] text-[9px] font-black px-2 py-0.5 rounded-full backdrop-blur-xs">
                      {card.badge}
                    </div>
                  </div>

                  {/* Card footer details */}
                  <div className="pt-3 px-1 text-left">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-slate-900 truncate">
                        {card.title}
                      </h3>
                      <div className="flex items-center gap-0.5 text-[10px] font-bold text-amber-500">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{card.rating}</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 truncate mt-0.5 font-medium">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider fading seamlessly to pure white at bottom of section */}
        <div
          className="relative z-10 w-full pointer-events-none -mt-4 sm:-mt-8"
          aria-hidden="true"
        >
          <div className="h-16 sm:h-24 w-full bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
      </section>

      {/* Partner Marquee Strip on clean pure white below the sky section */}
      <section
        aria-label="Accredited and Recruiting Partners"
        className="relative z-10 bg-white border-b border-slate-100 py-6 sm:py-7 overflow-hidden group"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-4 text-center">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
            CTH-UK Accredited Programs &amp; Global Career Pathways
          </p>
        </div>

        {/* Infinite Marquee Track with edge fade masks */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max select-none">
            {/* Track 1 */}
            <div className="flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4 animate-marquee will-change-transform">
              {[...partners, ...partners].map((p, idx) => (
                <div
                  key={`p1-${idx}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-700 hover:border-[#1E6DEB]/50 hover:bg-[#F0F6FE] transition-colors whitespace-nowrap shadow-xs shrink-0 cursor-pointer"
                >
                  {p.name === "CTH UK" ? (
                    <Image
                      src="/cth-logo2.png"
                      alt="CTH UK"
                      width={75}
                      height={15}
                      className="h-3.5 w-auto object-contain"
                    />
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E6DEB]" />
                      <span className="text-slate-900 font-extrabold">
                        {p.name}
                      </span>
                    </>
                  )}
                  <span className="text-slate-400 text-[11px]">
                    • {p.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Track 2 - Exact clone for seamless infinite loop */}
            <div
              className="flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4 animate-marquee will-change-transform"
              aria-hidden="true"
            >
              {[...partners, ...partners].map((p, idx) => (
                <div
                  key={`p2-${idx}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-700 hover:border-[#1E6DEB]/50 hover:bg-[#F0F6FE] transition-colors whitespace-nowrap shadow-xs shrink-0 cursor-pointer"
                >
                  {p.name === "CTH UK" ? (
                    <Image
                      src="/cth-logo2.png"
                      alt=""
                      width={75}
                      height={15}
                      className="h-3.5 w-auto object-contain"
                    />
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E6DEB]" />
                      <span className="text-slate-900 font-extrabold">
                        {p.name}
                      </span>
                    </>
                  )}
                  <span className="text-slate-400 text-[11px]">
                    • {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
