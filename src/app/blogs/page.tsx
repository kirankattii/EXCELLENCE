import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BlogSection from "@/components/BlogSection";
import AccreditationBanner from "@/components/AccreditationBanner";

export const metadata: Metadata = {
  title: "Blogs & Insights | Excellence Education Academy – Goa",
  description:
    "Culinary techniques, pastry articles, and CTH-UK hospitality career insights from Excellence Education Academy in Goa.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <PageHero
          breadcrumbLabel="Blogs"
          eyebrow="INDUSTRY INSIGHTS & ARTICLES"
          title="Culinary"
          highlight="Blogs"
          subtitle="Practical techniques, hospitality career insights, and CTH-UK program guides from our Goa academy."
        />

        <BlogSection />
        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}

