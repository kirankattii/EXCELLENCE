import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutSection from "@/components/AboutSection";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Methodology from "@/components/Methodology";
import Testimonials from "@/components/Testimonials";
import AdmissionForm from "@/components/AdmissionForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <AboutSection />
        <Programs />
        <WhyChooseUs />
        <Methodology />
        <Testimonials />
        <AdmissionForm />
      </main>
      <Footer />
    </div>
  );
}
