"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Sparkles } from "lucide-react";

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
      src: "/images/patisserie-skills.jpg",
      title: "Artisan Viennoiserie & Pastry Studio",
      category: "patisserie",
      categoryLabel: "Pastry & Baking",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/images/training-kitchen.jpg",
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
    <section id="gallery" className="py-20 sm:py-28 bg-[#fafbfc] border-b border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
            <span>CAMPUS LIFE &amp; PRACTICALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Life at Excellence Academy
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
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
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-[#19364f] text-white shadow-sm"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-950"
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
              className={`group relative rounded-[28px] overflow-hidden border border-zinc-200/80 shadow-[0_2px_14px_rgba(0,0,0,0.03)] bg-zinc-100 ${photo.span} ${photo.aspect}`}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold text-[#BB9331] uppercase tracking-wider mb-1">
                  {photo.categoryLabel}
                </span>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-snug">
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

