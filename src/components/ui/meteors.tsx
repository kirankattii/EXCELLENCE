"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 14,
  minDelay = 0.5,
  maxDelay = 2.5,
  minDuration = 3,
  maxDuration = 8,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Glowing White Meteor Head
        <span
          key={idx}
          style={{ ...style }}
          className={cn(
            "animate-meteor pointer-events-none absolute size-1 rotate-(--angle) rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.9)] opacity-75",
            className
          )}
        >
          {/* Luminous Shooting Star Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1.5px] w-20 -translate-y-1/2 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
