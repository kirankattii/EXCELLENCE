import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CoursesOffered from "@/components/CoursesOffered";
import AboutSection from "@/components/AboutSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyJoinUs from "@/components/WhyJoinUs";
import AccreditationBanner from "@/components/AccreditationBanner";
import AdmissionForm from "@/components/AdmissionForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Statistics Banner */}
        <Stats />

        {/* 3. Courses Offered (6 Colored Pills) */}
        <CoursesOffered />

        {/* 4. About Us (Who Are Excellence Education Academy) */}
        <AboutSection />

        {/* 5. Featured Courses (Begin Your Learning Adventure) */}
        <FeaturedCourses />

        {/* 6. Why Join Us (Kitchens & Global Placements) */}
        <WhyJoinUs />

        {/* 7. CTH Accreditation Banner */}
        <AccreditationBanner />

        {/* 8. Get In Touch with Us (Contact Form & Details) */}
        <AdmissionForm />
      </main>
      <Footer />
    </div>
  );
}
