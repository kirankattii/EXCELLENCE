"use client";

import React, { useEffect, useRef } from "react";

interface HeroAtmosphereProps {
  className?: string;
}

export function HeroAtmosphere({ className = "" }: HeroAtmosphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates with smooth damping
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      mouse.targetX = clientX - rect.left;
      mouse.targetY = clientY - rect.top;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);

    const updateSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    // Visibility observer to save battery when off-screen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? false;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    // Fluid Gradient Orbs definitions
    const orbs = [
      {
        // 1. Signature Electric Lime Glow (Signature Brand Asset)
        baseXRatio: 0.18,
        baseYRatio: 0.25,
        radiusRatio: 0.38,
        colorStops: [
          { stop: 0, color: "rgba(212, 248, 90, 0.42)" },
          { stop: 0.45, color: "rgba(163, 230, 53, 0.22)" },
          { stop: 0.8, color: "rgba(132, 204, 22, 0.08)" },
          { stop: 1, color: "rgba(132, 204, 22, 0)" },
        ],
        speedX: 0.00075,
        speedY: 0.00062,
        phase: 0.5,
        ampX: 0.12,
        ampY: 0.14,
      },
      {
        // 2. High-Tech Aqua / Cyan Beam (Goa Maritime & Global Horizons)
        baseXRatio: 0.82,
        baseYRatio: 0.28,
        radiusRatio: 0.42,
        colorStops: [
          { stop: 0, color: "rgba(6, 182, 212, 0.52)" },
          { stop: 0.4, color: "rgba(14, 165, 233, 0.28)" },
          { stop: 0.85, color: "rgba(2, 132, 199, 0.08)" },
          { stop: 1, color: "rgba(2, 132, 199, 0)" },
        ],
        speedX: 0.00058,
        speedY: 0.00085,
        phase: 2.1,
        ampX: 0.14,
        ampY: 0.16,
      },
      {
        // 3. Deep Royal Violet / Ultraviolet (AI Era Cinematic Depth)
        baseXRatio: 0.48,
        baseYRatio: 0.55,
        radiusRatio: 0.52,
        colorStops: [
          { stop: 0, color: "rgba(129, 140, 248, 0.38)" },
          { stop: 0.5, color: "rgba(99, 102, 241, 0.20)" },
          { stop: 0.85, color: "rgba(79, 70, 229, 0.05)" },
          { stop: 1, color: "rgba(79, 70, 229, 0)" },
        ],
        speedX: 0.00045,
        speedY: 0.00052,
        phase: 4.2,
        ampX: 0.16,
        ampY: 0.12,
      },
      {
        // 4. Cobalt Sapphire Foundation (Rich Luminescence)
        baseXRatio: 0.25,
        baseYRatio: 0.8,
        radiusRatio: 0.46,
        colorStops: [
          { stop: 0, color: "rgba(37, 99, 235, 0.48)" },
          { stop: 0.45, color: "rgba(30, 64, 175, 0.26)" },
          { stop: 0.85, color: "rgba(30, 58, 138, 0.07)" },
          { stop: 1, color: "rgba(30, 58, 138, 0)" },
        ],
        speedX: 0.00068,
        speedY: 0.00042,
        phase: 1.2,
        ampX: 0.12,
        ampY: 0.15,
      },
      {
        // 5. Warm Golden Solar Flare (International Prestige Accent)
        baseXRatio: 0.75,
        baseYRatio: 0.75,
        radiusRatio: 0.32,
        colorStops: [
          { stop: 0, color: "rgba(251, 191, 36, 0.32)" },
          { stop: 0.4, color: "rgba(245, 158, 11, 0.14)" },
          { stop: 0.8, color: "rgba(217, 119, 6, 0.04)" },
          { stop: 1, color: "rgba(217, 119, 6, 0)" },
        ],
        speedX: 0.00085,
        speedY: 0.00072,
        phase: 3.5,
        ampX: 0.1,
        ampY: 0.12,
      },
    ];

    // Ambient floating particles (stardust / light sparks)
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      size: 1 + Math.random() * 2.2,
      speedY: 0.00015 + Math.random() * 0.00035,
      speedX: (Math.random() - 0.5) * 0.00015,
      opacity: 0.2 + Math.random() * 0.6,
      pulseSpeed: 0.002 + Math.random() * 0.003,
      phase: Math.random() * Math.PI * 2,
    }));

    let lastTime = performance.now();

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible || width === 0 || height === 0) return;

      const elapsed = currentTime;
      lastTime = currentTime;

      // Mouse smooth interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.06;
        mouse.y += (mouse.targetY - mouse.y) * 0.06;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Deep Tech Gradient Foundation
      const baseGrad = ctx.createLinearGradient(0, 0, width, height);
      baseGrad.addColorStop(0, "#050C1B");
      baseGrad.addColorStop(0.35, "#0A2054");
      baseGrad.addColorStop(0.75, "#103F9B");
      baseGrad.addColorStop(1, "#1858CB");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Enable screen blend mode for radiant, high-energy light blending
      ctx.globalCompositeOperation = "screen";

      // 2. Render Animated Fluid Orbs
      orbs.forEach((orb) => {
        const xOffset = Math.sin(elapsed * orb.speedX + orb.phase) * (width * orb.ampX);
        const yOffset = Math.cos(elapsed * orb.speedY + orb.phase) * (height * orb.ampY);

        let cx = width * orb.baseXRatio + xOffset;
        let cy = height * orb.baseYRatio + yOffset;

        // Subtle mouse interaction: gently pull towards mouse
        if (mouse.active) {
          const dx = mouse.x - cx;
          const dy = mouse.y - cy;
          const dist = Math.hypot(dx, dy);
          if (dist < 500 && dist > 0) {
            const force = (1 - dist / 500) * 45;
            cx += (dx / dist) * force;
            cy += (dy / dist) * force;
          }
        }

        const baseRadius = Math.min(width, height) * orb.radiusRatio;
        const breath = Math.sin(elapsed * 0.001 + orb.phase) * (baseRadius * 0.12);
        const radius = Math.max(10, baseRadius + breath);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        orb.colorStops.forEach((cs) => {
          gradient.addColorStop(cs.stop, cs.color);
        });

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Interactive Mouse Spotlight
      if (mouse.active) {
        const mouseRadius = Math.min(width, height) * 0.35;
        const mouseGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseRadius
        );
        mouseGrad.addColorStop(0, "rgba(212, 248, 90, 0.28)");
        mouseGrad.addColorStop(0.35, "rgba(56, 189, 248, 0.18)");
        mouseGrad.addColorStop(0.7, "rgba(30, 109, 235, 0.06)");
        mouseGrad.addColorStop(1, "rgba(30, 109, 235, 0)");

        ctx.fillStyle = mouseGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Subtle Shimmering Particles
      ctx.globalCompositeOperation = "source-over";
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        if (p.y < 0) p.y = 1;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;

        const currentOpacity =
          p.opacity * (0.6 + 0.4 * Math.sin(elapsed * p.pulseSpeed + p.phase));

        const px = p.x * width;
        const py = p.y * height;

        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Fluid Canvas Rendering Engine */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* 2. Cyber Horizon Grid with Soft Fading Perspective */}
      <div
        className="absolute inset-0 opacity-[0.09] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, transparent 85%)",
        }}
      />

      {/* 3. Futuristic Curved Vector Beams / Aurora Light Wave Sweeps */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
      >
        <defs>
          <linearGradient id="beamGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4F85A" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beamGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4F85A" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M -100 220 C 350 480, 850 80, 1540 320"
          fill="none"
          stroke="url(#beamGrad1)"
          strokeWidth="2.5"
          className="opacity-75"
        />
        <path
          d="M -100 240 C 350 500, 850 100, 1540 340"
          fill="none"
          stroke="url(#beamGrad1)"
          strokeWidth="1"
          strokeDasharray="8 12"
          className="opacity-45"
        />
        <path
          d="M -50 120 C 450 30, 950 450, 1540 180"
          fill="none"
          stroke="url(#beamGrad2)"
          strokeWidth="2"
          className="opacity-60"
        />
      </svg>

      {/* 4. Film Grain Texture Overlay (Apple / Linear / Vercel style) */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 5. Center Soft Lens Highlight for Crystal Clear Typography */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[360px] sm:h-[550px] bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </div>
  );
}

export default HeroAtmosphere;
