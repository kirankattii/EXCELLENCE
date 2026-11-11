"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

/**
 * Reusable Counter Component
 * Solves the "jumping" issue by using a hidden ghost element to reserve the final width.
 */
export interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  align?: "left" | "center" | "right";
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = "",
  decimals = 0,
  className = "",
  align = "center",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState<string | number>(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setDisplayValue(latest.toFixed(decimals));
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView, decimals]);

  const formattedValue = parseFloat(displayValue.toString()).toLocaleString(
    undefined,
    {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }
  );

  const finalValue = value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  const justifyClass =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <span
      ref={ref}
      className={`relative inline-block tabular-nums ${className}`}
    >
      {/* GHOST ELEMENT: 
          This is invisible but has the 'final' width (e.g., "15.5K+").
          It prevents the layout from shifting while the number is smaller.
      */}
      <span className="invisible opacity-0 select-none" aria-hidden="true">
        {finalValue}
        {suffix}
      </span>

      {/* ACTUAL COUNTER: 
          Positioned absolutely so it doesn't affect the parent container's width.
      */}
      <span className={`absolute inset-0 flex items-center ${justifyClass}`}>
        {formattedValue}
        {suffix}
      </span>
    </span>
  );
};

/**
 * Individual Stat Card Component
 */
export interface StatItemProps {
  number: number;
  suffix?: string;
  label: string;
  showDivider?: boolean;
  className?: string;
}

export const StatItem: React.FC<StatItemProps> = ({
  number,
  suffix = "",
  label,
  showDivider = true,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center flex-1 px-8 text-center relative group ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-4 min-h-[1.2em] flex items-center justify-center">
          <AnimatedCounter
            value={number}
            suffix={suffix}
            decimals={number % 1 !== 0 ? 1 : 0}
          />
        </h2>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-[220px]">
          {label}
        </p>
      </motion.div>

      {/* Vertical Divider */}
      {showDivider && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gray-200" />
      )}
    </div>
  );
};

export interface StatItemData {
  number: number;
  suffix?: string;
  label: string;
}

export interface StatsProps {
  stats?: StatItemData[];
  className?: string;
}

const DEFAULT_STATS: StatItemData[] = [
  {
    number: 100,
    suffix: "%",
    label: "Placement Track Record for Qualified Graduates",
  },
  {
    number: 40,
    suffix: "+",
    label: "Nations Recognize Our CTH UK Credentials",
  },
  {
    number: 1200,
    suffix: "+",
    label: "Trained Culinary & Cruise Alumni Worldwide",
  },
];

/**
 * Main App Component / Stats Section
 */
export function SmallAnimation5({
  stats = DEFAULT_STATS,
  className = "",
}: StatsProps) {
  return (
    <div
      className={`min-h-screen bg-white flex items-center justify-center p-6 font-sans ${className}`}
    >
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 py-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              showDivider={index !== stats.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const Stats = SmallAnimation5;
export const StatSection = SmallAnimation5;
export default SmallAnimation5;

