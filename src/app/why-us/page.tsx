import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import WhyJoinUs from "@/components/WhyJoinUs";
import Stats from "@/components/Stats";
import AccreditationBanner from "@/components/AccreditationBanner";

export const metadata: Metadata = {
  title: "Why Us | Excellence Education Academy – Goa",
  description:
    "Discover top reasons to join Excellence Education Academy in Goa: CTH-UK accreditation, modern culinary & bakery labs, and 100% placement support.",
};

export default function WhyUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <PageHero
          breadcrumbLabel="Why Us"
          eyebrow="THE EXCELLENCE EDUCATION ACADEMY ADVANTAGE"
          title="Why Choose"
          highlight="Us"
          subtitle="Hands-on commercial kitchen training, CTH-UK qualifications, and 100% placement support in Goa."
        />

        <WhyJoinUs />
        <Stats />
        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}

