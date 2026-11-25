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
  speed = 40,
}: CurvedMobileMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const positionRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
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

  // Repeat cards 3 times for a continuous circular track that easily spans ultra-wide desktop displays
  const repeatedCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    const updateLoop = (now: number) => {
      if (lastTimeRef.current !== null) {
        const delta = Math.min((now - lastTimeRef.current) / 1000, 0.1); // clamp delta
        // Never pause on hover: continuously glide at smooth speed
        positionRef.current += speed * delta;
      }
      lastTimeRef.current = now;

      const container = containerRef.current;
      if (container) {
        const containerWidth = container.clientWidth || 360;
        const isDesktop = containerWidth >= 640;
        const cardWidth = isDesktop ? 260 : 215;
        const cardGap = isDesktop ? 20 : 16;
        const itemStride = cardWidth + cardGap;
        const totalTrackWidth = repeatedCards.length * itemStride;

        const centerX = containerWidth / 2;
        const curveSpan = isDesktop
          ? containerWidth * 0.46
          : containerWidth * 0.52;
        const currentOffset =
          ((positionRef.current % totalTrackWidth) + totalTrackWidth) %
          totalTrackWidth;

        cardRefs.current.forEach((el, idx) => {
          if (!el) return;

          // Continuous circular wrap relative to screen center
          const rawPos = idx * itemStride - currentOffset;
          let distFromCenter =
            (((rawPos + cardWidth / 2 - centerX) % totalTrackWidth) +
              totalTrackWidth) %
            totalTrackWidth;

          if (distFromCenter > totalTrackWidth / 2) {
            distFromCenter -= totalTrackWidth;
          }

          const x = centerX + distFromCenter - cardWidth / 2;
          const dist = distFromCenter / curveSpan;
          const clampedDist = Math.max(-1.5, Math.min(1.5, dist));

          // Curved smile arc formula for both mobile and desktop:
          // Center (dist = 0): y = 0, rotate = 0, scale = 1.04
          // Left/Right: y dips smoothly down, rotates gracefully along arc
          const yDip = isDesktop ? 26 : 20;
          const rotateFactor = isDesktop ? 7.5 : 9.5;
          const y = Math.pow(clampedDist, 2) * yDip;
          const rotate = clampedDist * rotateFactor;
          const scale = 1.04 - Math.min(Math.abs(clampedDist), 1.25) * 0.1;

          el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
          el.style.zIndex = `${Math.round(30 - Math.abs(clampedDist) * 10)}`;
        });
      }

      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
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
      className="relative w-full h-[265px] sm:h-[305px] overflow-hidden select-none touch-pan-y [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
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
          if (totalDy > totalDx && totalDy > 6) {
            // Vertical page scroll takes priority
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
          className="absolute top-2 left-0 w-[215px] sm:w-[260px] h-[230px] sm:h-[265px] will-change-transform pointer-events-auto cursor-grab active:cursor-grabbing"
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

            {/* Card footer details: Same height, reduced gap between text lines */}
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
