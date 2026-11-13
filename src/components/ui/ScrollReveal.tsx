"use client";

import React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "scale-up"
  | "fade-left"
  | "fade-right";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

const getVariantConfig = (
  variant: RevealVariant,
  distance: number,
  shouldReduceMotion: boolean | null
) => {
  if (shouldReduceMotion) {
    return {
      initial: { opacity: 1 },
      whileInView: { opacity: 1 },
      transition: { duration: 0 },
    };
  }

  const baseTransition = {
    ease: [0.22, 1, 0.36, 1] as const, // Smooth natural cubic-bezier
  };

  switch (variant) {
    case "fade-down":
      return {
        initial: { opacity: 0, y: -distance },
        whileInView: { opacity: 1, y: 0 },
        transition: baseTransition,
      };
    case "fade-left":
      return {
        initial: { opacity: 0, x: -distance },
        whileInView: { opacity: 1, x: 0 },
        transition: baseTransition,
      };
    case "fade-right":
      return {
        initial: { opacity: 0, x: distance },
        whileInView: { opacity: 1, x: 0 },
        transition: baseTransition,
      };
    case "scale-up":
      return {
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        transition: baseTransition,
      };
    case "fade-in":
      return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: baseTransition,
      };
    case "fade-up":
    default:
      return {
        initial: { opacity: 0, y: distance },
        whileInView: { opacity: 1, y: 0 },
        transition: baseTransition,
      };
  }
};

/**
 * SEO-safe, accessible on-scroll reveal wrapper.
 * - Always keeps full semantic HTML in the DOM for search engines and screen readers.
 * - Respects prefers-reduced-motion.
 * - Only triggers once (`once: true`) to prevent distracting re-animations.
 */
export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.55,
  distance = 24,
  className = "",
  once = true,
  ...props
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const config = getVariantConfig(variant, distance, shouldReduceMotion);

  return (
    <motion.div
      initial={config.initial}
      whileInView={config.whileInView}
      viewport={{ once, margin: "-40px" }}
      transition={{
        ...config.transition,
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container that staggers its child items as they scroll into view.
 */
interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = "",
  once = true,
  ...props
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child item inside a StaggerContainer.
 */
export function StaggerItem({
  children,
  className = "",
  distance = 20,
  ...props
}: HTMLMotionProps<"div"> & { distance?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
