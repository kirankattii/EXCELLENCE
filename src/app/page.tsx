import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AccreditationBanner from "@/components/AccreditationBanner";
import CoursesOffered from "@/components/CoursesOffered";
import WhyJoinUs from "@/components/WhyJoinUs";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import BlogSection from "@/components/BlogSection";
import AdmissionForm from "@/components/AdmissionForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* 1. Premium Hero — Academy introduction and admissions CTA */}
        <Hero />

        {/* 2. CTH UK Recognition — Approved Centre Logo & Verification */}
        <AccreditationBanner />

        {/* 3. Explore Our Courses — Six clean, clickable course cards */}
        <CoursesOffered />

        {/* 4. Why Choose Excellence — Training, facilities and faculty */}
        <WhyJoinUs />

        {/* 5. Inside Our Academy — Authentic photographs and student practicals */}
        <GallerySection />

        {/* 6. Student Achievements — Results, testimonials and success stories */}
        <Testimonials />

        {/* 7. Career Support — Internships, career guidance and verified opportunities */}
        <Stats />

        {/* 8. Latest Workshops & Events — Academy activities and masterclasses */}
        <BlogSection />

        {/* 9. Admissions & Campus Visit — Short enquiry form, WhatsApp and contact information */}
        <AdmissionForm />
      </main>
      <Footer />
    </div>
  );
}
