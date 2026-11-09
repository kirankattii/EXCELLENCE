import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CoursesOffered from "@/components/CoursesOffered";
import AboutSection from "@/components/AboutSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import GallerySection from "@/components/GallerySection";
import WhyJoinUs from "@/components/WhyJoinUs";
import CaseStudyFlipStack, { type CaseStudyFlipItem } from "@/components/ui/case-study-flip-stack";
import BlogSection from "@/components/BlogSection";
import AccreditationBanner from "@/components/AccreditationBanner";
import AdmissionForm from "@/components/AdmissionForm";
import Footer from "@/components/Footer";

const CULINARY_STUDY_ITEMS: CaseStudyFlipItem[] = [
  {
    number: "01",
    eyebrow: "Culinary Arts",
    title: "Master classical French cookery & commercial kitchen leadership",
    description:
      "Trained in high-spec commercial kitchens under executive master chefs. Students master knife precision, butchery, stocks, mother sauces, and live brigade plating.",
    image: "/images/culinary-hero.jpg",
    imageAlt: "Executive chef plating fine dining dish",
    background: "#19364f",
    foreground: "#ffffff",
  },
  {
    number: "02",
    eyebrow: "Pastry Arts",
    title: "Classical French viennoiserie, artisan breads & confectionery",
    description:
      "From flaky golden croissants to intricate tempered chocolate showpieces and modern plated entremets in our dedicated climate-controlled baking studio.",
    image: "/images/patisserie-skills.jpg",
    imageAlt: "French pastry and confectionery display",
    background: "#967523",
    foreground: "#fffdf5",
  },
  {
    number: "03",
    eyebrow: "Cruise Hospitality",
    title: "Direct career pathways onto international luxury mega-liners",
    description:
      "Comprehensive maritime hospitality training, fine dining service protocols, and guest relations that lead directly to high-earning global cruise careers.",
    image: "/images/cruise-hospitality.jpg",
    imageAlt: "Luxury cruise liner fine dining room",
    background: "#086576",
    foreground: "#ecfeff",
  },
  {
    number: "04",
    eyebrow: "Mixology & Barista",
    title: "Craft cocktail design, flair bartending & specialty coffee",
    description:
      "Comprehensive beverage program covering espresso extraction, microfoam latte art, modern craft mixology, and responsible high-volume bar management.",
    image: "/images/barista-beverage.jpg",
    imageAlt: "Barista pouring latte art at a modern bar",
    background: "#1e293b",
    foreground: "#f8fafc",
  },
];

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
          className="bg-[#fafbfc] border-y border-zinc-200/80"
        />

        {/* 9. Latest Blogs & Industry Insights */}
        <BlogSection />

        {/* 10. CTH Accreditation Banner */}
        <AccreditationBanner />

        {/* 11. Get In Touch with Us (Contact Form & Details) */}
        <AdmissionForm />
      </main>
      <Footer />
    </div>
  );
}
