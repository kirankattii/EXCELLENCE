"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ShowcaseCardItem {
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  rating?: string;
  featured?: boolean;
  link?: string;
}

interface CurvedMobileMarqueeProps {
  cards: ShowcaseCardItem[];
  speed?: number; // pixels per second
}

export function CurvedMobileMarquee({
  cards,
  speed = 36,
}: CurvedMobileMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const positionRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const containerWidthRef = useRef<number>(360);
  const isVisibleRef = useRef<boolean>(true);
  const lastZIndices = useRef<number[]>([]);
  const lastVisibility = useRef<boolean[]>([]);

  const dragRef = useRef<{
    active: boolean;
    dragging: boolean;
    pointerId: number | null;
    startX: number;
    startY: number;
    lastX: number;
  }>({
    active: false,
    dragging: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    lastX: 0,
  });

  // Repeat cards 3 times for a continuous circular track
  const repeatedCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Cache container dimensions once and update on resize only (NO layout thrashing in RAF)
    const updateDimensions = () => {
      if (container) {
        containerWidthRef.current = container.clientWidth || 360;
      }
    };
    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    resizeObserver.observe(container);

    // Pause animation when scrolled out of viewport for 120Hz smooth page scroll
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0]?.isIntersecting ?? false;
        if (isVisibleRef.current) {
          lastTimeRef.current = null; // reset delta to prevent jump
        }
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    const updateLoop = (now: number) => {
      animFrameRef.current = requestAnimationFrame(updateLoop);

      if (!isVisibleRef.current) return;

      if (lastTimeRef.current !== null) {
        // Tightly clamp delta to max 33ms (prevents hitching/jumping if scroll pauses execution)
        const rawDelta = (now - lastTimeRef.current) / 1000;
        const delta = Math.min(rawDelta, 0.033);
        positionRef.current += speed * delta;
      }
      lastTimeRef.current = now;

      const containerWidth = containerWidthRef.current;
      const isDesktop = containerWidth >= 640;
      const cardWidth = isDesktop ? 260 : 215;
      const cardGap = isDesktop ? 20 : 16;
      const itemStride = cardWidth + cardGap;
      const totalTrackWidth = repeatedCards.length * itemStride;

      const centerX = containerWidth / 2;
      const curveSpan = isDesktop
        ? containerWidth * 0.48
        : containerWidth * 0.58;
      const currentOffset =
        ((positionRef.current % totalTrackWidth) + totalTrackWidth) %
        totalTrackWidth;

      // Smoothed mobile curve: gentler dip (14px) and subtle rotation (5.5deg) prevents jitter
      const yDip = isDesktop ? 24 : 14;
      const rotateFactor = isDesktop ? 7.0 : 5.5;

      for (let idx = 0; idx < repeatedCards.length; idx++) {
        const el = cardRefs.current[idx];
        if (!el) continue;

        // Circular wrap relative to screen center
        const rawPos = idx * itemStride - currentOffset;
        let distFromCenter =
          (((rawPos + cardWidth / 2 - centerX) % totalTrackWidth) +
            totalTrackWidth) %
          totalTrackWidth;

        if (distFromCenter > totalTrackWidth / 2) {
          distFromCenter -= totalTrackWidth;
        }

        const x = centerX + distFromCenter - cardWidth / 2;

        // Performance: Offscreen culling (skip composite of non-visible cards on mobile)
        const isOffscreen =
          x < -cardWidth - 80 || x > containerWidth + 80;

        if (lastVisibility.current[idx] !== !isOffscreen) {
          el.style.visibility = isOffscreen ? "hidden" : "visible";
          lastVisibility.current[idx] = !isOffscreen;
        }

        if (isOffscreen) continue;

        const dist = distFromCenter / curveSpan;
        const clampedDist = Math.max(-1.4, Math.min(1.4, dist));

        // Smooth parabolic smile arc
        const y = Math.pow(clampedDist, 2) * yDip;
        const rotate = clampedDist * rotateFactor;
        const scale = 1.03 - Math.min(Math.abs(clampedDist), 1.2) * 0.08;

        // Apply hardware-accelerated transform only (no layout triggers)
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(3)})`;

        // Update z-index ONLY when changed to prevent CSS stacking rebuilds
        const newZ = Math.round(30 - Math.abs(clampedDist) * 10);
        if (lastZIndices.current[idx] !== newZ) {
          el.style.zIndex = `${newZ}`;
          lastZIndices.current[idx] = newZ;
        }
      }
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [cards.length, speed, repeatedCards.length]);

  const endDrag = () => {
    dragRef.current.active = false;
    dragRef.current.dragging = false;
    dragRef.current.pointerId = null;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[265px] sm:h-[305px] overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      style={{ touchAction: "pan-y" }}
      onPointerDown={(e) => {
        dragRef.current = {
          active: true,
          dragging: false,
          pointerId: e.pointerId,
          startX: e.clientX,
          startY: e.clientY,
          lastX: e.clientX,
        };
      }}
      onPointerMove={(e) => {
        if (
          !dragRef.current.active ||
          dragRef.current.pointerId !== e.pointerId
        ) {
          return;
        }
        const totalDx = Math.abs(e.clientX - dragRef.current.startX);
        const totalDy = Math.abs(e.clientY - dragRef.current.startY);

        if (!dragRef.current.dragging) {
          // If vertical gesture exceeds horizontal, immediately yield to native scroll
          if (totalDy > totalDx && totalDy > 4) {
            dragRef.current.active = false;
            return;
          }
          if (totalDx > 6) {
            dragRef.current.dragging = true;
          } else {
            return;
          }
        }
        const deltaX = e.clientX - dragRef.current.lastX;
        dragRef.current.lastX = e.clientX;
        positionRef.current -= deltaX;
      }}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      aria-label="Interactive Curriculum Cards"
    >
      {repeatedCards.map((card, idx) => (
        <div
          key={idx}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          className="absolute top-2 left-0 w-[215px] sm:w-[260px] h-[240px] sm:h-[275px] pointer-events-auto cursor-grab active:cursor-grabbing"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            touchAction: "pan-y",
          }}
        >
          <Link
            href={card.link || "/courses"}
            onClick={(e) => {
              if (dragRef.current.dragging) {
                e.preventDefault();
              }
            }}
            className={`w-full h-full flex flex-col justify-start relative bg-white rounded-3xl p-3 shadow-[0_16px_40px_rgba(10,17,24,0.22)] border border-white transition-all duration-300 hover:scale-105 ${
              card.featured
                ? "ring-2 ring-[#D4F85A] shadow-[0_20px_50px_rgba(212,248,90,0.35)]"
                : ""
            }`}
          >
            {/* Photo container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shrink-0">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 215px, 260px"
              />
              <div className="absolute top-2 left-2 bg-[#0A1118]/85 text-[#D4F85A] text-[9px] sm:text-[9.5px] font-black px-2 sm:px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                {card.badge}
              </div>
            </div>

            {/* Card footer details: Same height, compact typography */}
            <div className="pt-2 sm:pt-2.5 px-1 text-left flex-1 flex flex-col justify-start">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-[1.12] sm:leading-[1.15] tracking-tight line-clamp-2">
                {card.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-1 line-clamp-1">
                {card.subtitle}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CurvedMobileMarquee;
