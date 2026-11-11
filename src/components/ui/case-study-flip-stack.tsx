"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

export interface CaseStudyFlipItem {
  number?: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  background: string;
  foreground?: string;
}

interface CaseStudyFlipStackProps {
  items?: CaseStudyFlipItem[];
  className?: string;
  hint?: string;
  heading?: string;
  endLabel?: string;
}

const DEFAULT_ITEMS: CaseStudyFlipItem[] = [
  {
    eyebrow: "Fintech",
    title: "Boosted conversion by 42% with a product-led redesign",
    description:
      "We restructured the onboarding flow and clarified the value proposition, helping the platform turn more visitors into activated users.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&q=90&auto=format&fit=crop",
    imageAlt: "Portrait framed by tropical greenery",
    background: "#a94808",
    foreground: "#fff7ed",
  },
  {
    eyebrow: "Hospitality",
    title: "A slower digital experience for a faster-growing retreat",
    description:
      "A cinematic booking journey brings the landscape forward, simplifies room selection, and gives every stay a stronger sense of place.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=90&auto=format&fit=crop",
    imageAlt: "A person overlooking a mountain landscape",
    background: "#067b8f",
    foreground: "#ecfeff",
  },
  {
    eyebrow: "Culture",
    title: "Turning a living archive into something you can wander through",
    description:
      "We paired bold editorial typography with an intuitive collection system, making decades of work feel immediate, playful, and alive.",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1400&q=90&auto=format&fit=crop",
    imageAlt: "Colorful artwork in a contemporary gallery",
    background: "#ba075f",
    foreground: "#fff1f7",
  },
  {
    eyebrow: "Climate",
    title: "Making complex energy data feel clear enough to act on",
    description:
      "An approachable visual system turns live infrastructure data into useful decisions for operators, partners, and the communities they serve.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1400&q=90&auto=format&fit=crop",
    imageAlt: "Wind turbines across a green landscape",
    background: "#3322a8",
    foreground: "#f3f1ff",
  },
];

function FlipCard({
  item,
  index,
  total,
  progress,
  reduceMotion,
}: {
  item: CaseStudyFlipItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const transitionCount = Math.max(total - 1, 1);
  const segment = 1 / transitionCount;
  const isLast = index === total - 1;
  const start = index * segment;
  const end = Math.min(start + segment, 1);
  const entryStart = Math.max(0, start - segment);
  const entryEnd =
    index === 0
      ? 0.0001
      : Math.min(start, entryStart + segment * 0.7);
  const exitStart = isLast ? 0 : start;
  const exitEnd = isLast ? 1 : Math.max(end, start + 0.0001);
  const stackedCardGap = Math.min(24, 72 / Math.max(total - 1, 1));
  const stackedOffset = index * stackedCardGap;
  const restingOffset = Math.min(index * 12, 34);
  const restingScale = 1 - Math.min(index * 0.012, 0.035);

  const exitYPercent = useTransform(
    progress,
    [exitStart, exitEnd],
    reduceMotion || isLast ? [0, 0] : [0, -118],
  );
  const exitStackOffset = useTransform(
    progress,
    [exitStart, exitEnd],
    reduceMotion || isLast ? [0, 0] : [0, stackedOffset],
  );
  const exitY = useMotionTemplate`calc(${exitYPercent}% + ${exitStackOffset}px)`;
  const rotateX = useTransform(
    progress,
    [exitStart, exitEnd],
    reduceMotion || isLast ? [0, 0] : [0, 22],
  );
  const opacity = useTransform(
    progress,
    [exitStart, exitEnd],
    reduceMotion && !isLast ? [1, 0] : [1, 1],
  );
  const entryScale = useTransform(
    progress,
    [entryStart, entryEnd],
    index === 0 ? [1, 1] : [restingScale, 1],
  );
  const entryY = useTransform(
    progress,
    [entryStart, entryEnd],
    index === 0 ? [0, 0] : [restingOffset, 0],
  );

  return (
    <motion.article
      className="absolute inset-x-0 top-0 aspect-[3/4] will-change-transform sm:aspect-[1.76/1]"
      style={{
        y: exitY,
        rotateX,
        opacity,
        zIndex: total - index,
        transformOrigin: "50% 50%",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      <motion.div
        className="grid h-full overflow-hidden rounded-[clamp(18px,2vw,30px)] shadow-[0_16px_50px_rgba(20,17,10,0.18)] sm:grid-cols-[1.15fr_0.85fr]"
        style={{
          backgroundColor: item.background,
          color: item.foreground ?? "white",
          y: entryY,
          scale: entryScale,
          transformOrigin: "50% 100%",
        }}
      >
        <div className="flex min-w-0 flex-col p-[clamp(24px,3vw,48px)] md:pr-[clamp(22px,3vw,48px)]">
          <div className="flex items-start">
            <span className="text-[clamp(24px,2.5vw,36px)] font-medium leading-none tracking-[-0.06em]">
              {item.number ?? String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-auto max-w-[46rem] pt-8">
            <p className="mb-[clamp(10px,1.5vw,22px)] text-[10px] font-semibold uppercase tracking-[0.16em] opacity-70 sm:text-xs">
              {item.eyebrow}
            </p>
            <h2 className="max-w-[16ch] text-balance text-[clamp(28px,3.25vw,48px)] font-semibold leading-[0.96] tracking-[-0.05em]">
              {item.title}
            </h2>
            <p className="mt-[clamp(16px,1.8vw,24px)] max-w-[42rem] text-[clamp(13px,1.1vw,16px)] leading-[1.5] opacity-82">
              {item.description}
            </p>
          </div>
        </div>

        <div className="relative m-[clamp(10px,1.2vw,18px)] min-h-[180px] overflow-hidden rounded-[clamp(12px,1.4vw,22px)] sm:ml-0">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, 45vw"
            className="object-cover"
            priority={index < 2}
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
        </div>
      </motion.div>
    </motion.article>
  );
}

export function CaseStudyFlipStack({
  items = DEFAULT_ITEMS,
  className,
  hint = "Scroll Down",
  heading = "Design That Delivers.",
  endLabel = "The End",
}: CaseStudyFlipStackProps) {
  const stackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const safeItems = items.length > 0 ? items : DEFAULT_ITEMS;
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    mass: 0.8,
    restDelta: 0.0005,
  });
  const cardProgress = reduceMotion ? scrollYProgress : smoothProgress;

  return (
    <main
      className={cn("relative bg-[#F8FAFC] font-sans text-slate-900", className)}
    >
      <section className="relative z-10 flex flex-col items-center justify-center pt-12 sm:pt-16 pb-2 sm:pb-4 px-5 sm:px-10">
        <div className="flex items-center justify-center gap-[clamp(10px,2vw,24px)] text-[clamp(18px,2.4vw,30px)] font-bold tracking-[-0.055em] text-[#1E6DEB] mb-3 sm:mb-4">
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
          <span>{hint}</span>
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{
              duration: 1.4,
              delay: 0.18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.span>
        </div>

        <div className="flex justify-center max-w-4xl px-4">
          <h1 className="max-w-[18ch] text-center text-[clamp(34px,5vw,70px)] font-black leading-[0.94] tracking-[-0.06em] text-slate-950">
            {heading}
          </h1>
        </div>
      </section>

      <div
        ref={stackRef}
        className="relative"
        style={
          safeItems.length > 1
            ? {
                height: `${(safeItems.length - 1) * 75 + 100}vh`,
                marginTop: "calc(-1 * clamp(0px, 50vh - 300px, 160px))",
              }
            : undefined
        }
      >
        <div
          className={cn(
            "flex flex-col justify-center overflow-hidden px-[clamp(14px,4vw,64px)]",
            safeItems.length > 1
              ? "sticky top-0 h-screen py-4 sm:py-6"
              : "py-10 sm:py-14",
          )}
        >
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[860px] [perspective:800px] sm:aspect-[1.76/1]">
            {[...safeItems].reverse().map((item, reverseIndex) => {
              const index = safeItems.length - reverseIndex - 1;
              return (
                <FlipCard
                  key={`${item.title}-${index}`}
                  item={item}
                  index={index}
                  total={safeItems.length}
                  progress={cardProgress}
                  reduceMotion={reduceMotion}
                />
              );
            })}
          </div>
        </div>
      </div>

      <section
        className="relative z-10 flex flex-col items-center justify-center pt-4 pb-12 sm:pt-6 sm:pb-16 px-5 sm:px-10"
        style={
          safeItems.length > 1
            ? { marginTop: "calc(-1 * clamp(0px, 50vh - 300px, 160px))" }
            : undefined
        }
      >
        <p className="max-w-[16ch] text-center text-[clamp(40px,7vw,104px)] font-black leading-[0.95] tracking-[-0.06em] text-slate-950">
          {endLabel}
        </p>
      </section>
    </main>
  );
}

export default CaseStudyFlipStack;

