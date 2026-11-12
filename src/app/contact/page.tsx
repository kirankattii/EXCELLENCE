import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionForm from "@/components/AdmissionForm";
import AccreditationBanner from "@/components/AccreditationBanner";
import { Meteors } from "@/components/ui/meteors";

export const metadata: Metadata = {
  title: "Contact Us | Excellence Education Academy – Goa",
  description:
    "Get in touch with Excellence Education Academy in Alto Porvorim, Goa. Call +91 8329208271 or email contact@exceleduacademy.com for CTH-UK culinary & hospitality admissions.",
};

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Excellence+Education+Academy+The+Capital+660%2F3+Alto+Porvorim+Goa+403521";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Excellence+Education+Academy,+The+Capital,+660/3,+Alto+Porvorim,+Goa+403521&t=&z=16&ie=UTF8&iwloc=&output=embed";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden text-white bg-gradient-to-b from-[#1351C7] via-[#1E6DEB] to-[#4F94FA]">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/sky-clouds.jpg"
              alt="Azure Sky Backdrop"
              fill
              priority
              className="object-cover object-bottom opacity-70 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1048B8]/65 via-[#1E6DEB]/30 to-[#4F94FA]/45" />
          </div>

          <Meteors number={10} />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-6">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-bold text-white/95"
            >
              <Link
                href="/"
                className="hover:text-[#D4F85A] transition-colors"
              >
                Home
              </Link>
              <ChevronRight
                className="w-3.5 h-3.5 text-[#D4F85A]"
                aria-hidden="true"
              />
              <span className="text-[#D4F85A] font-black">Contact</span>
            </nav>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1118]/30 border border-white/25 backdrop-blur-md text-[11px] font-black uppercase tracking-widest text-[#D4F85A]">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>EXCELLENCE EDUCATION ACADEMY • ALTO PORVORIM, GOA</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                Contact <span className="text-[#D4F85A]">Us</span>
              </h1>

              <p className="text-base sm:text-xl text-white/95 max-w-2xl mx-auto font-medium leading-relaxed">
                Reach out for CTH-UK course counseling, admissions support, or
                a guided tour of our culinary and bakery campus in Goa.
              </p>
            </div>

            {/* Quick Contact Action Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="tel:+918329208271"
                className="inline-flex items-center gap-2 bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] px-5 py-2.5 rounded-full text-xs sm:text-sm font-black shadow-md transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+91 8329208271</span>
              </a>
              <a
                href="mailto:contact@exceleduacademy.com"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4F85A]" aria-hidden="true" />
                <span>contact@exceleduacademy.com</span>
              </a>
            </div>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </section>

        {/* 2. Get In Touch Form & Contact Details */}
        <AdmissionForm />

        {/* 3. Visit Our Goa Campus & Connect Online */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Campus Reception Photo */}
              <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] rounded-[32px] overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <Image
                  src="/eea-gallary/eea-gallary1.jpg"
                  alt="Excellence Education Academy reception in Alto Porvorim, Goa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="inline-block bg-[#D4F85A] text-[#0A1118] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    Goa Campus
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                    Visit Excellence Education Academy
                  </h2>
                  <p className="text-xs sm:text-sm text-white/85">
                    The Capital, Alto Porvorim, Goa 403521
                  </p>
                </div>
              </div>

              {/* Directions & Social Channels Card with Map Background */}
              <div className="lg:col-span-6 rounded-3xl sm:rounded-[32px] bg-[#0A1118] text-white p-6 sm:p-10 border border-slate-800/80 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden min-h-[340px]">
                {/* Live Google Map Background */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
                  aria-hidden="true"
                >
                  <iframe
                    src={MAPS_EMBED_URL}
                    title="Map background of Excellence Education Academy at The Capital, Alto Porvorim, Goa"
                    loading="lazy"
                    tabIndex={-1}
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0 opacity-60 contrast-110 saturate-90 scale-[1.06] pointer-events-none"
                  />
                  {/* Legibility gradient scrim preserving visible map texture & pin */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1118]/90 via-[#0A1118]/70 to-[#0A1118]/88" />
                </div>

                <div
                  className="absolute -top-20 -right-20 w-64 h-64 bg-[#1E6DEB]/25 rounded-full blur-3xl pointer-events-none z-0"
                  aria-hidden="true"
                />

                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-black text-[#D4F85A]">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>CAMPUS LOCATION &amp; DIRECTIONS</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                    The Capital, Alto Porvorim
                  </h2>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    Excellence Education Academy, The Capital, 660/3, above Max
                    Showroom, near O&apos;Coqueiro Restaurant, Defence Colony,
                    Alto Porvorim, Porvorim, Salvador du Mundu, Goa 403521.
                  </p>

                  <div className="pt-2">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Official Social Links */}
                <div className="pt-6 border-t border-white/15 space-y-3 relative z-10">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Connect With Us
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.instagram.com/exceleduacademy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-colors"
                    >
                      <span>Instagram</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4F85A]" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCOQQlJnj3vWIcZ5EiPJ9-Hg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-colors"
                    >
                      <span>YouTube</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4F85A]" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/19bToN1wVQ/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-colors"
                    >
                      <span>Facebook</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4F85A]" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTH Accreditation Banner */}
        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}
