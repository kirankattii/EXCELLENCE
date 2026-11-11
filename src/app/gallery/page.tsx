import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import GallerySection from "@/components/GallerySection";
import AccreditationBanner from "@/components/AccreditationBanner";

export const metadata: Metadata = {
  title: "Gallery | Excellence Education Academy – Goa",
  description:
    "Explore our commercial training kitchens, bakery labs, prep counters, and campus reception at Excellence Education Academy in Alto Porvorim, Goa.",
};

const CAMPUS_FACILITIES = [
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

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <PageHero
          breadcrumbLabel="Gallery"
          eyebrow="EXCELLENCE EDUCATION ACADEMY • GOA CAMPUS"
          title="Campus"
          highlight="Gallery"
          subtitle="Step inside our commercial training kitchens, bakery laboratories, and reception facilities in Alto Porvorim, Goa."
        />

        <GallerySection />

        {/* Real Goa Campus Facilities Showcase */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <p className="text-xs font-black uppercase tracking-widest text-[#1E6DEB]">
                INFRASTRUCTURE &amp; SHOWROOM FACILITIES
              </p>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
                Excellence Education Academy Facilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {CAMPUS_FACILITIES.map((item) => (
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

        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}

