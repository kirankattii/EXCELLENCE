import React from "react";
import Image from "next/image";

interface HeroAtmosphereProps {
  className?: string;
  showShip?: boolean;
  variant?: "home" | "subpage";
}

export function HeroAtmosphere({
  className = "",
  showShip = true,
  variant = "subpage",
}: HeroAtmosphereProps) {
  const isHome = variant === "home";

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Faded White 3D Globe (Top-Left Flank) */}
      <div
        className={`absolute -left-16 sm:-left-10 lg:-left-6 top-14 sm:top-20 w-[220px] sm:w-[360px] aspect-square opacity-40 sm:opacity-45 lg:opacity-55 mix-blend-screen transition-all duration-500 [mask-image:radial-gradient(circle_at_50%_50%,black_42%,transparent_78%)] ${
          isHome ? "lg:top-16 lg:w-[480px]" : "lg:top-10 lg:w-[340px]"
        }`}
      >
        <Image
          src="/images/globe-hero.png"
          alt=""
          fill
          className="object-contain"
          sizes={
            isHome
              ? "(max-width: 640px) 220px, (max-width: 1024px) 360px, 480px"
              : "(max-width: 640px) 220px, (max-width: 1024px) 360px, 340px"
          }
        />
        {/* Soft radial glow behind globe */}
        <div className="absolute inset-0 bg-radial from-white/15 via-transparent to-transparent rounded-full blur-2xl" />
      </div>

      {/* 2. Blended UK Flag & Sunlit Cruise Ship Composition (Top-Right Flank) */}
      <div
        className={`absolute -right-10 sm:-right-8 lg:-right-4 top-12 sm:top-16 w-[250px] sm:w-[430px] h-[245px] sm:h-[395px] pointer-events-none transition-all duration-500 [mask-image:radial-gradient(ellipse_at_55%_48%,black_42%,transparent_80%)] ${
          isHome
            ? "lg:top-12 lg:w-[580px] lg:h-[510px]"
            : "lg:top-8 lg:w-[420px] lg:h-[360px]"
        }`}
      >
        {/* UK Flag Sky Backdrop */}
        <div className="absolute inset-x-0 top-0 h-[72%] opacity-38 sm:opacity-44 lg:opacity-50 -rotate-[8deg] scale-110 overflow-hidden [mask-image:linear-gradient(to_bottom,black_45%,transparent_95%)]">
          <Image
            src="/images/uk-flag.svg"
            alt=""
            fill
            className="object-cover brightness-110 saturate-90"
            sizes="(max-width: 640px) 250px, (max-width: 1024px) 430px, 580px"
          />
        </div>

        {/* Soft Sunlit Atmospheric Haze between Flag and Ship */}
        <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 w-[85%] h-[54%] bg-radial from-white/30 via-white/10 to-transparent rounded-full blur-2xl" />

        {/* Cruise Ship Blended Below the Upper Flag */}
        {showShip && (
          <div className="absolute inset-x-2 sm:inset-x-4 bottom-0 h-[58%] opacity-42 sm:opacity-50 lg:opacity-58 mix-blend-screen [mask-image:radial-gradient(ellipse_at_50%_52%,black_48%,transparent_82%)]">
            <Image
              src="/images/cruise-ship-hero.png"
              alt=""
              fill
              className="object-contain object-bottom brightness-115 contrast-95"
              sizes="(max-width: 640px) 250px, (max-width: 1024px) 430px, 580px"
            />
          </div>
        )}
      </div>

      {/* 3. Delicate Ambient Light Rays / Center Top Lens Highlight */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[650px] sm:max-w-[900px] h-[280px] sm:h-[400px] bg-radial from-white/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 5. Seamless bottom fade into white section below */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

export default HeroAtmosphere;
