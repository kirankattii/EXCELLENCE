"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export interface ShowcaseCardItem {
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  rating: string;
  featured?: boolean;
}

interface CurvedMobileMarqueeProps {
  cards: ShowcaseCardItem[];
  speed?: number; // pixels per second
}

export function CurvedMobileMarquee({
  cards,
  speed = 42,
}: CurvedMobileMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isPaused = useRef(false);
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

  // Repeat cards twice for a continuous circular track
  const repeatedCards = [...cards, ...cards];
  const CARD_WIDTH = 210;
  const CARD_GAP = 16;
  const ITEM_STRIDE = CARD_WIDTH + CARD_GAP;
  const TOTAL_TRACK_WIDTH = repeatedCards.length * ITEM_STRIDE;

  useEffect(() => {
    const updateLoop = (now: number) => {
      if (lastTimeRef.current !== null && !isPaused.current) {
        const delta = Math.min((now - lastTimeRef.current) / 1000, 0.1); // clamp delta to prevent giant leaps on tab switch
        positionRef.current += speed * delta;
      }
      lastTimeRef.current = now;

      const container = containerRef.current;
      if (container) {
        const containerWidth = container.clientWidth || 360;
        const centerX = containerWidth / 2;
        const curveSpan = containerWidth * 0.52;
        const currentOffset =
          ((positionRef.current % TOTAL_TRACK_WIDTH) + TOTAL_TRACK_WIDTH) %
          TOTAL_TRACK_WIDTH;

        cardRefs.current.forEach((el, idx) => {
          if (!el) return;

          // Continuous circular wrap relative to screen center
          const rawPos = idx * ITEM_STRIDE - currentOffset;
          let distFromCenter =
            ((rawPos + CARD_WIDTH / 2 - centerX) % TOTAL_TRACK_WIDTH +
              TOTAL_TRACK_WIDTH) %
            TOTAL_TRACK_WIDTH;

          if (distFromCenter > TOTAL_TRACK_WIDTH / 2) {
            distFromCenter -= TOTAL_TRACK_WIDTH;
          }

          const x = centerX + distFromCenter - CARD_WIDTH / 2;
          const dist = distFromCenter / curveSpan;
          const clampedDist = Math.max(-1.4, Math.min(1.4, dist));

          // Curved smile arc formula:
          // Center (dist = 0): y = 0, rotate = 0, scale = 1.04
          // Left/Right: y dips smoothly down, rotates along arc
          const y = Math.pow(clampedDist, 2) * 22;
          const rotate = clampedDist * 9.5;
          const scale = 1.04 - Math.min(Math.abs(clampedDist), 1.2) * 0.12;

          el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
          el.style.zIndex = `${Math.round(20 - Math.abs(clampedDist) * 10)}`;
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
  }, [cards.length, speed, TOTAL_TRACK_WIDTH, ITEM_STRIDE, repeatedCards.length]);

  const endDrag = () => {
    dragRef.current.active = false;
    dragRef.current.dragging = false;
    dragRef.current.pointerId = null;
    isPaused.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[260px] overflow-hidden select-none touch-pan-y [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
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
            isPaused.current = true;
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
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") {
          isPaused.current = true;
        }
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") {
          isPaused.current = false;
        }
      }}
      aria-label="Interactive Curriculum Cards"
    >
      {repeatedCards.map((card, idx) => (
        <div
          key={idx}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          className="absolute top-3 left-0 w-[210px] will-change-transform pointer-events-auto cursor-grab active:cursor-grabbing"
          style={{
            transform: `translate3d(${idx * ITEM_STRIDE}px, 0, 0)`,
          }}
        >
          <div
            className={`relative bg-white rounded-3xl p-3 shadow-[0_16px_40px_rgba(10,17,24,0.22)] border border-white transition-shadow ${
              card.featured
                ? "ring-2 ring-[#D4F85A] shadow-[0_20px_50px_rgba(212,248,90,0.35)]"
                : ""
            }`}
          >
            {/* Photo container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="210px"
              />
              <div className="absolute top-2 left-2 bg-[#0A1118]/85 text-[#D4F85A] text-[9px] font-black px-2 py-0.5 rounded-full backdrop-blur-xs">
                {card.badge}
              </div>
            </div>

            {/* Card footer details */}
            <div className="pt-2.5 px-1 text-left">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black text-slate-900 truncate">
                  {card.title}
                </h3>
                <div className="flex items-center gap-0.5 text-[10px] font-bold text-amber-500">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{card.rating}</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 truncate mt-0.5 font-medium">
                {card.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurvedMobileMarquee;
