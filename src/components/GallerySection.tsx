"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const photos = [
    {
      src: "/images/culinary-hero.jpg",
      title: "Gourmet Plating Masterclass",
      category: "culinary",
      categoryLabel: "Culinary Arts",
      span: "md:col-span-2 md:row-span-2",
      aspect: "aspect-[16/10] md:aspect-auto md:h-full",
    },
    {
      src: "/eea-gallary/eea-gallary5.jpg",
      title: "Commercial Bakery & Ovens Suite",
      category: "patisserie",
      categoryLabel: "Pastry & Baking",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/eea-gallary/eea-gallary2.jpg",
      title: "Commercial Training Kitchen Facilities",
      category: "kitchen",
      categoryLabel: "Campus Facilities",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/images/cruise-hospitality.jpg",
      title: "Luxury Cruise Dining & Service Practice",
      category: "cruise",
      categoryLabel: "Cruise Hospitality",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/images/barista-beverage.jpg",
      title: "Specialty Coffee & Mixology Bar",
      category: "beverage",
      categoryLabel: "Beverage & Bar",
      span: "md:col-span-2 md:row-span-1",
      aspect: "aspect-[16/9] md:aspect-auto md:h-full",
    },
  ];

  const filteredPhotos =
    activeFilter === "all"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAMPUS LIFE &amp; PRACTICALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Life at Excellence Education Academy
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Step inside our live training kitchens, pastry laboratories, and mock service venues where culinary passion transforms into world-class expertise.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Photos" },
              { id: "culinary", label: "Culinary Arts" },
              { id: "patisserie", label: "Pastry Studio" },
              { id: "cruise", label: "Cruise Hospitality" },
              { id: "kitchen", label: "Facilities" },
              { id: "beverage", label: "Bar & Coffee" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`text-xs font-black px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#D4F85A] text-[#0A1118] shadow-md scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-950"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className={`group relative rounded-[28px] overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.04)] hover:shadow-xl transition-all duration-300 bg-slate-100 ${photo.span} ${photo.aspect}`}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/90 via-[#0A1118]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-black text-[#D4F85A] uppercase tracking-wider mb-1">
                  {photo.categoryLabel}
                </span>
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white leading-snug">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
