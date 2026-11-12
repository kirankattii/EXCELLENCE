import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import GallerySection from "@/components/GallerySection";
import AccreditationBanner from "@/components/AccreditationBanner";

export const metadata: Metadata = {
  title: "Gallery | Excellence Education Academy – Goa",
  description:
    "Explore our commercial training kitchens, bakery labs, live hospitality service, and campus inauguration highlights at Excellence Education Academy in Alto Porvorim, Goa.",
};

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
          subtitle="Step inside our commercial training kitchens, bakery laboratories, live dining service, and inauguration milestones in Alto Porvorim, Goa."
        />

        <GallerySection showMosaic showAllByDefault />

        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}
