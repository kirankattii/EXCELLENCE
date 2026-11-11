import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CoursesOffered from "@/components/CoursesOffered";
import AboutSection from "@/components/AboutSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import GallerySection from "@/components/GallerySection";
import WhyJoinUs from "@/components/WhyJoinUs";
import CaseStudyFlipStack, {
  type CaseStudyFlipItem,
} from "@/components/ui/case-study-flip-stack";
import BlogSection from "@/components/BlogSection";
import AccreditationBanner from "@/components/AccreditationBanner";
import AdmissionForm from "@/components/AdmissionForm";
import Footer from "@/components/Footer";

const CULINARY_STUDY_ITEMS: CaseStudyFlipItem[] = [
  {
    number: "01",
    eyebrow: "Culinary Arts Track",
    title: "Master classical French cookery & commercial kitchen leadership",
    description:
      "Trained in high-spec commercial kitchens under executive master chefs. Students master knife precision, butchery, stocks, mother sauces, and live brigade plating.",
    image: "/images/culinary-hero.jpg",
    imageAlt: "Executive chef plating fine dining dish",
    background: "#1E6DEB",
    foreground: "#ffffff",
  },
  {
    number: "02",
    eyebrow: "Pastry Arts Track",
    title: "Classical French viennoiserie, artisan breads & confectionery",
    description:
      "From flaky golden croissants to intricate tempered chocolate showpieces and modern plated entremets in our dedicated climate-controlled baking studio.",
    image: "/images/patisserie-skills.jpg",
    imageAlt: "French pastry and confectionery display",
    background: "#0A1118",
    foreground: "#D4F85A",
  },
  {
    number: "03",
    eyebrow: "Cruise Hospitality Track",
    title: "Direct career pathways onto international luxury mega-liners",
    description:
      "Comprehensive maritime hospitality training, fine dining service protocols, and guest relations that lead directly to high-earning global cruise careers.",
    image: "/images/cruise-hospitality.jpg",
    imageAlt: "Luxury cruise liner fine dining room",
    background: "#0E7490",
    foreground: "#F0FDFA",
  },
  {
    number: "04",
    eyebrow: "Bartending & Front of House",
    title: "Professional bartending skills & restaurant front of house service",
    description:
      "CTH Level 2 certification programs preparing students for international bar operations, beverage service, and fine dining restaurant hospitality.",
    image: "/images/barista-beverage.jpg",
    imageAlt: "Beverage and hospitality service training",
    background: "#162436",
    foreground: "#FFFBEB",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* 1. Hero Section with Atmospheric Sky & Fanned 3D Cards */}
        <Hero />

        {/* 2. Bento Grid Career Statistics (100% Placement / 100+ Partners / Pathways) */}
        <Stats />

        {/* 3. Courses & Diplomas (6 Programs with High-Contrast Spec Cards) */}
        <CoursesOffered />

        {/* 4. About Us (Who Are Excellence Education Academy) */}
        <AboutSection />

        {/* 5. Featured Courses (Begin Your Learning Adventure) */}
        <FeaturedCourses />

        {/* 6. Campus & Kitchen Gallery */}
        <GallerySection />

        {/* 7. Why Join Us (Kitchens & Global Placements) */}
        <WhyJoinUs />

        {/* 8. Interactive 3D Case Study Flip Stack UI */}
        <CaseStudyFlipStack
          items={CULINARY_STUDY_ITEMS}
          heading="Culinary Mastery That Delivers."
          hint="Scroll Down"
          endLabel="Your Global Career Begins Here."
          className="bg-[#F8FAFC] border-y border-slate-200/80"
        />

        {/* 9. Latest Blogs & Industry Insights */}
        <BlogSection />

        {/* 10. CTH Accreditation Sky Atmosphere Banner */}
        <AccreditationBanner />

        {/* 11. Get In Touch with Us (Contact Form & Details) */}
        <AdmissionForm />
      </main>
      <Footer />
    </div>
  );
}
