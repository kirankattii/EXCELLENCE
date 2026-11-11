import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";

interface PageHeroProps {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
}

export default function PageHero({
  breadcrumbLabel,
  eyebrow,
  title,
  highlight,
  subtitle,
}: PageHeroProps) {
  return (
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
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-bold text-white/95"
        >
          <Link href="/" className="hover:text-[#D4F85A] transition-colors">
            Home
          </Link>
          <ChevronRight
            className="w-3.5 h-3.5 text-[#D4F85A]"
            aria-hidden="true"
          />
          <span className="text-[#D4F85A] font-black">{breadcrumbLabel}</span>
        </nav>

        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1118]/30 border border-white/25 backdrop-blur-md text-[11px] font-black uppercase tracking-widest text-[#D4F85A]">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            {title} <span className="text-[#D4F85A]">{highlight}</span>
          </h1>

          <p className="text-base sm:text-xl text-white/95 max-w-2xl mx-auto font-medium leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/75 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}

