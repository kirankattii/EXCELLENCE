import { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EnrollExperience from "@/components/EnrollExperience";
import AccreditationBanner from "@/components/AccreditationBanner";

export const metadata: Metadata = {
  title: "Enroll Online | Excellence Education Academy – Goa",
  description:
    "Apply online for CTH-UK accredited culinary, patisserie, bartending, front-of-house, and cruise hospitality courses at Excellence Education Academy in Goa.",
};

function EnrollSkeleton() {
  return (
    <section className="pt-5 pb-12 sm:pt-12 sm:pb-20 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 border border-slate-200/90 h-[560px] animate-pulse" />
        <div className="lg:col-span-5 bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 border border-slate-200/90 h-[420px] animate-pulse" />
      </div>
    </section>
  );
}

export default function EnrollPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <PageHero
          breadcrumbLabel="Enroll"
          eyebrow="ADMISSIONS OPEN • CTH-UK ACCREDITED"
          title="Enroll"
          highlight="Today"
          subtitle="Choose your culinary, bakery, or cruise hospitality track below and reserve a 1-on-1 admissions counseling session and live kitchen walkthrough in Goa."
        />

        <Suspense fallback={<EnrollSkeleton />}>
          <EnrollExperience />
        </Suspense>

        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}

