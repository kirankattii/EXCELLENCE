import React from "react";
import Image from "next/image";

interface HeroAtmosphereProps {
  className?: string;
  showShip?: boolean;
}

export function HeroAtmosphere({
  className = "",
  showShip = true,
}: HeroAtmosphereProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Faded White 3D Globe with Soft Silk Ribbons (Upper-Left Flank) */}
      <div className="absolute -left-14 sm:-left-8 lg:-left-2 top-[32%] sm:top-[44%] lg:top-1/2 -translate-y-1/2 w-[190px] sm:w-[340px] lg:w-[460px] aspect-square opacity-22 sm:opacity-30 lg:opacity-38 mix-blend-screen transition-all duration-500 [mask-image:radial-gradient(circle_at_45%_50%,black_35%,transparent_78%)]">
        <Image
          src="/images/globe-hero.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 640px) 190px, (max-width: 1024px) 340px, 460px"
          priority
        />
        {/* Soft radial glow behind globe */}
        <div className="absolute inset-0 bg-radial from-white/20 via-transparent to-transparent rounded-full blur-2xl" />
      </div>

      {/* 2. Soft Colored UK Flag / Union Jack Watermark (Upper-Right Sky Flank) */}
      <div className="absolute -right-2 sm:-right-8 lg:-right-6 top-[16%] sm:top-[20%] lg:top-[24%] -translate-y-1/2 w-[210px] sm:w-[380px] lg:w-[520px] h-[125px] sm:h-[220px] lg:h-[300px] opacity-32 sm:opacity-36 lg:opacity-44 -rotate-[6deg] overflow-hidden pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_82%)]">
        <Image
          src="/images/uk-flag.svg"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 640px) 200px, (max-width: 1024px) 380px, 520px"
        />
      </div>

      {/* 3. Faded Modern Luxury Cruise Ship (Lower-Right Flank - Lowered on Mobile) */}
      {showShip && (
        <div className="absolute -right-8 sm:-right-4 lg:right-2 top-[57%] sm:top-[52%] lg:top-[56%] -translate-y-1/2 w-[210px] sm:w-[380px] lg:w-[520px] h-[130px] sm:h-[230px] lg:h-[300px] opacity-28 sm:opacity-38 lg:opacity-46 mix-blend-screen transition-all duration-500 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_82%)]">
          <Image
            src="/images/cruise-ship-hero.png"
            alt=""
            fill
            className="object-contain object-center"
            sizes="(max-width: 640px) 210px, (max-width: 1024px) 380px, 520px"
            priority
          />
          {/* Subtle water wake glow beneath ship */}
          <div className="absolute bottom-1 right-4 w-3/4 h-10 bg-white/15 blur-xl rounded-full" />
        </div>
      )}

      {/* 4. Delicate Ambient Light Rays / Center Lens Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[650px] sm:max-w-[900px] h-[320px] sm:h-[480px] bg-radial from-white/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 5. Seamless bottom fade into white section below */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

export default HeroAtmosphere;
