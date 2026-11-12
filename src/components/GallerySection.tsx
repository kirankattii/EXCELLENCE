"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  Pause,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";

interface GallerySectionProps {
  showMosaic?: boolean;
  showAllByDefault?: boolean;
}

let cachedSupportsDisplayTransition: boolean | undefined;

function canTransitionDisplay(): boolean {
  if (cachedSupportsDisplayTransition !== undefined) {
    return cachedSupportsDisplayTransition;
  }
  if (
    typeof window === "undefined" ||
    !window.CSS?.supports?.("transition-behavior", "allow-discrete") ||
    !document.body
  ) {
    return false;
  }
  const probe = document.createElement("div");
  probe.style.cssText =
    "transition: display 1s allow-discrete !important; display: block;";
  document.body.appendChild(probe);
  void getComputedStyle(probe).display;
  probe.style.display = "none";
  cachedSupportsDisplayTransition = getComputedStyle(probe).display === "block";
  probe.remove();
  return cachedSupportsDisplayTransition;
}

function supportsTopLayerExit(): boolean {
  return (
    typeof window !== "undefined" &&
    Boolean(window.CSS?.supports?.("overlay", "auto")) &&
    canTransitionDisplay()
  );
}

/**
 * Computes responsive grid spans for a 6-column desktop bento layout so any
 * filtered photo count forms flush rows without orphan gaps.
 */
function getBentoLayoutClass(index: number, total: number): string {
  const blockStart = Math.floor(index / 6) * 6;
  const posInBlock = index % 6;
  const remainingInBlock = total - blockStart;

  if (remainingInBlock >= 6) {
    if (posInBlock === 0) {
      return "sm:col-span-2 lg:col-span-3 lg:row-span-2 min-h-[280px] sm:min-h-[340px] lg:min-h-full";
    }
    if (posInBlock === 1 || posInBlock === 2) {
      return "lg:col-span-3 aspect-[3/2]";
    }
    return "lg:col-span-2 aspect-[4/3]";
  }

  if (remainingInBlock === 5) {
    if (posInBlock === 0) {
      return "sm:col-span-2 lg:col-span-3 lg:row-span-2 min-h-[280px] sm:min-h-[340px] lg:min-h-full";
    }
    return "lg:col-span-3 aspect-[3/2]";
  }

  if (remainingInBlock === 3) {
    return "lg:col-span-2 aspect-[4/3]";
  }

  if (remainingInBlock === 1) {
    return "sm:col-span-2 lg:col-span-6 aspect-[16/9] max-h-[440px]";
  }

  // remainingInBlock === 2 or 4
  return "lg:col-span-3 aspect-[3/2]";
}

function getObjectPositionClass(item: GalleryItem): string {
  return item.focalPoint === "top" ? "object-[50%_20%]" : "object-center";
}

export default function GallerySection({
  showMosaic = false,
  showAllByDefault = false,
}: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | GalleryCategory>(
    "all",
  );
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isStageInteracting, setIsStageInteracting] = useState(false);
  const [showAll, setShowAll] = useState(showAllByDefault);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const filmstripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lightboxTitleId = useId();
  const pressedOutsideRef = useRef(false);
  const hasUserNavigatedSpotlight = useRef(false);

  const categoryCounts = useMemo(() => {
    const counts: Record<"all" | GalleryCategory, number> = {
      all: GALLERY_ITEMS.length,
      kitchens: 0,
      hospitality: 0,
      launch: 0,
    };
    for (const item of GALLERY_ITEMS) {
      counts[item.category] += 1;
    }
    return counts;
  }, []);

  const filteredPhotos = useMemo(
    () =>
      activeFilter === "all"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  const safeSpotlightIndex =
    filteredPhotos.length > 0 ? spotlightIndex % filteredPhotos.length : 0;
  const activePhoto = filteredPhotos[safeSpotlightIndex];

  const upNextPhotos = useMemo(() => {
    if (filteredPhotos.length <= 1) return [];
    const results: { item: GalleryItem; index: number }[] = [];
    for (let offset = 1; offset <= Math.min(2, filteredPhotos.length - 1); offset++) {
      const idx = (safeSpotlightIndex + offset) % filteredPhotos.length;
      results.push({ item: filteredPhotos[idx], index: idx });
    }
    return results;
  }, [filteredPhotos, safeSpotlightIndex]);

  const visibleBentoPhotos = useMemo(() => {
    if (showAll || activeFilter !== "all" || filteredPhotos.length <= 9) {
      return filteredPhotos;
    }
    return filteredPhotos.slice(0, 9);
  }, [activeFilter, filteredPhotos, showAll]);

  const closeTopLayer = useCallback(async () => {
    const dialog = dialogRef.current;
    if (!dialog || !dialog.open) return;

    if (!supportsTopLayerExit()) {
      dialog.setAttribute("data-closing", "");
      const animations = dialog.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((resolve) => setTimeout(resolve, 600)),
        ]);
      }
      if (!dialog.hasAttribute("data-closing")) return;
      dialog.removeAttribute("data-closing");
    }

    dialog.close();
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  // Open native modal dialog when lightboxIndex becomes non-null
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (lightboxIndex !== null && !dialog.open) {
      dialog.removeAttribute("data-closing");
      dialog.showModal();
    }
  }, [lightboxIndex]);

  // Intercept native cancel (Esc / closedby) to support exit animation fallback
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      if (!supportsTopLayerExit()) {
        event.preventDefault();
        void closeTopLayer();
      }
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [closeTopLayer]);

  // Safari fallback for closedby="any" light dismiss
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || "closedBy" in HTMLDialogElement.prototype) return;

    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };

    const onPointerDown = (e: PointerEvent) => {
      pressedOutsideRef.current = isOutside(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (pressedOutsideRef.current && isOutside(e)) {
        void closeTopLayer();
      }
      pressedOutsideRef.current = false;
    };

    dialog.addEventListener("pointerdown", onPointerDown);
    dialog.addEventListener("pointerup", onPointerUp);
    return () => {
      dialog.removeEventListener("pointerdown", onPointerDown);
      dialog.removeEventListener("pointerup", onPointerUp);
    };
  }, [closeTopLayer]);

  // Auto-advance Spotlight Tour when playing and undisturbed
  useEffect(() => {
    if (
      !isAutoPlaying ||
      isStageInteracting ||
      lightboxIndex !== null ||
      prefersReducedMotion ||
      filteredPhotos.length <= 1
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % filteredPhotos.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [
    filteredPhotos.length,
    isAutoPlaying,
    isStageInteracting,
    lightboxIndex,
    prefersReducedMotion,
  ]);

  // Keep active filmstrip thumbnail centered when user steps through spotlight
  useEffect(() => {
    if (!hasUserNavigatedSpotlight.current) return;
    const thumb = thumbRefs.current[safeSpotlightIndex];
    const strip = filmstripRef.current;
    if (!thumb || !strip) return;

    const targetLeft =
      thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
    strip.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion, safeSpotlightIndex]);

  const selectSpotlight = (idx: number, pauseAuto = false) => {
    hasUserNavigatedSpotlight.current = true;
    setSpotlightIndex(idx);
    if (pauseAuto) setIsAutoPlaying(false);
  };

  const stepSpotlight = (delta: number) => {
    if (filteredPhotos.length === 0) return;
    hasUserNavigatedSpotlight.current = true;
    setSpotlightIndex(
      (prev) => (prev + delta + filteredPhotos.length) % filteredPhotos.length,
    );
  };

  const stepLightbox = useCallback(
    (delta: number) => {
      if (filteredPhotos.length === 0) return;
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        return (prev + delta + filteredPhotos.length) % filteredPhotos.length;
      });
    },
    [filteredPhotos.length],
  );

  const scrollFilmstripBy = (direction: -1 | 1) => {
    const strip = filmstripRef.current;
    if (!strip) return;
    strip.scrollBy({
      left: direction * Math.max(260, strip.clientWidth * 0.65),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleFilterChange = (category: "all" | GalleryCategory) => {
    hasUserNavigatedSpotlight.current = false;
    setActiveFilter(category);
    setSpotlightIndex(0);
    if (filmstripRef.current) {
      filmstripRef.current.scrollTo({ left: 0, behavior: "auto" });
    }
  };

  const lightboxPhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="py-12 sm:py-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>CAMPUS LIFE, KITCHENS &amp; MILESTONES</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-slate-950">
            Life at Excellence Education Academy
          </h2>

          <p className="text-sm sm:text-lg text-slate-600 leading-snug sm:leading-relaxed max-w-2xl mx-auto font-normal">
            Explore our commercial training kitchens, patisserie labs, live
            hospitality service floor, and campus inauguration highlights in
            Alto Porvorim, Goa.
          </p>

          {/* Interactive Filter Pills with Counts */}
          <div
            className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-1.5 sm:gap-2 pt-1.5 sm:pt-4 max-w-md sm:max-w-none mx-auto"
            role="group"
            aria-label="Filter gallery by category"
          >
            {GALLERY_CATEGORIES.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleFilterChange(tab.id)}
                  className={`inline-flex items-center justify-center gap-1 sm:gap-2 text-[10.5px] sm:text-xs font-black px-2 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#D4F85A] text-[#0A1118] shadow-md sm:scale-[1.03]"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-950"
                  }`}
                >
                  <span className="truncate">{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] tabular-nums shrink-0 ${
                      isActive
                        ? "bg-[#0A1118]/12 text-[#0A1118]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {categoryCounts[tab.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Interactive Spotlight Cinema Stage & Story Rail */}
        {activePhoto && (
          <div
            className="rounded-[24px] sm:rounded-[32px] bg-[#0A1118] p-2.5 sm:p-5 border border-slate-800/90 shadow-[0_24px_60px_rgba(10,17,24,0.16)]"
            onMouseEnter={() => setIsStageInteracting(true)}
            onMouseLeave={() => setIsStageInteracting(false)}
            onFocusCapture={() => setIsStageInteracting(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsStageInteracting(false);
              }
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-4 lg:gap-6 items-stretch">
              {/* Main Featured Viewport */}
              <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[3/2] rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#121D2B]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activePhoto.id}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 1.02 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0.12 : 0.32,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activePhoto.src}
                      alt={activePhoto.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 62vw"
                      className={`object-cover ${getObjectPositionClass(activePhoto)}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/70 via-transparent to-[#0A1118]/25 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Overlay Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center bg-[#D4F85A] text-[#0A1118] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {activePhoto.tag}
                    </span>
                    <span className="hidden sm:inline-flex items-center bg-[#0A1118]/70 backdrop-blur-md text-white/90 text-[10px] font-bold px-3 py-1 rounded-full border border-white/15">
                      {activePhoto.categoryLabel}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openLightbox(safeSpotlightIndex)}
                    aria-label={`Open fullscreen view of ${activePhoto.title}`}
                    className="inline-flex items-center gap-1.5 bg-[#0A1118]/75 hover:bg-[#1E6DEB] text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/15 transition-colors cursor-pointer"
                  >
                    <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="hidden sm:inline">Fullscreen</span>
                  </button>
                </div>

                {/* Clickable stage trigger for pointer users */}
                <button
                  type="button"
                  onClick={() => openLightbox(safeSpotlightIndex)}
                  aria-label={`Inspect ${activePhoto.title} in lightbox`}
                  className="absolute inset-0 z-[5] cursor-zoom-in focus-visible:outline-none"
                  tabIndex={-1}
                />

                {/* Prev / Next Overlay Controls */}
                {filteredPhotos.length > 1 && (
                  <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between pointer-events-none z-10">
                    <span className="bg-[#0A1118]/75 backdrop-blur-md text-white text-xs font-black tabular-nums px-3 py-1.5 rounded-full border border-white/15">
                      {String(safeSpotlightIndex + 1).padStart(2, "0")} /{" "}
                      {String(filteredPhotos.length).padStart(2, "0")}
                    </span>

                    <div className="flex items-center gap-2 pointer-events-auto">
                      <button
                        type="button"
                        onClick={() => stepSpotlight(-1)}
                        aria-label="Previous featured photo"
                        className="w-10 h-10 rounded-full bg-[#0A1118]/80 hover:bg-[#1E6DEB] text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => stepSpotlight(1)}
                        aria-label="Next featured photo"
                        className="w-10 h-10 rounded-full bg-[#0A1118]/80 hover:bg-[#1E6DEB] text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Story & Up-Next Panel */}
              <div className="lg:col-span-4 flex flex-col justify-between px-1.5 py-1 sm:p-4 text-white space-y-2.5 sm:space-y-6">
                <div className="space-y-1.5 sm:space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#D4F85A]">
                      Spotlight Tour
                    </span>

                    {!prefersReducedMotion && filteredPhotos.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setIsAutoPlaying((prev) => !prev)}
                        aria-pressed={!isAutoPlaying}
                        className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-300 hover:text-white bg-white/8 hover:bg-white/14 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10 transition-colors cursor-pointer"
                      >
                        {isAutoPlaying ? (
                          <>
                            <Pause className="w-3 h-3" aria-hidden="true" />
                            <span>Pause Tour</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3" aria-hidden="true" />
                            <span>Auto Tour</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <h3 className="text-base sm:text-2xl font-black tracking-tight text-white leading-tight sm:leading-snug">
                    {activePhoto.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {activePhoto.caption}
                  </p>

                  <div className="pt-0.5 sm:pt-1">
                    <button
                      type="button"
                      onClick={() => openLightbox(safeSpotlightIndex)}
                      className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#D4F85A] hover:bg-[#E2FA84] text-[#0A1118] text-[11px] sm:text-xs font-black px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-md transition-colors cursor-pointer"
                    >
                      <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Inspect High-Res Photo</span>
                    </button>
                  </div>
                </div>

                {/* Up Next Quick-Jump Queue (desktop sidebar; mobile uses filmstrip right below) */}
                {upNextPhotos.length > 0 && (
                  <div className="hidden lg:block space-y-2.5 pt-4 border-t border-white/10">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Up Next in Reel
                    </span>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                      {upNextPhotos.map(({ item, index }) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => selectSpotlight(index)}
                          className="group flex items-center gap-3 p-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 text-left transition-colors cursor-pointer"
                        >
                          <div className="relative w-16 h-11 rounded-xl overflow-hidden shrink-0 bg-slate-800">
                            <Image
                              src={item.src}
                              alt=""
                              fill
                              sizes="64px"
                              className={`object-cover group-hover:scale-105 transition-transform duration-300 ${getObjectPositionClass(item)}`}
                            />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-[10px] font-bold text-[#D4F85A] truncate">
                              {item.tag}
                            </span>
                            <span className="block text-xs font-bold text-white truncate">
                              {item.title}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Filmstrip Thumbnail Rail */}
            {filteredPhotos.length > 1 && (
              <div className="mt-2.5 pt-2.5 sm:mt-4 sm:pt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollFilmstripBy(-1)}
                  aria-label="Scroll thumbnail strip left"
                  className="hidden sm:flex w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 text-white items-center justify-center shrink-0 border border-white/10 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>

                <div
                  ref={filmstripRef}
                  role="region"
                  aria-label="Gallery thumbnail strip"
                  tabIndex={0}
                  className="flex-1 flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto snap-x snap-proximity py-1 sm:py-1.5 px-1 no-scrollbar"
                >
                  {filteredPhotos.map((item, idx) => {
                    const isCurrent = idx === safeSpotlightIndex;
                    return (
                      <button
                        key={item.id}
                        ref={(el) => {
                          thumbRefs.current[idx] = el;
                        }}
                        type="button"
                        onClick={() => selectSpotlight(idx)}
                        aria-label={`Show ${item.title} (${idx + 1} of ${filteredPhotos.length})`}
                        aria-current={isCurrent ? "true" : undefined}
                        className={`group relative w-14 sm:w-24 md:w-28 aspect-[3/2] rounded-lg sm:rounded-xl overflow-hidden shrink-0 snap-center transition-all duration-200 cursor-pointer ${
                          isCurrent
                            ? "ring-2 ring-[#D4F85A] ring-offset-1 sm:ring-offset-2 ring-offset-[#0A1118] scale-[1.03]"
                            : "opacity-75 hover:opacity-100 ring-1 ring-white/15"
                        }`}
                      >
                        <Image
                          src={item.src}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 56px, 112px"
                          className={`object-cover ${getObjectPositionClass(item)}`}
                        />
                        {isCurrent && (
                          <span
                            className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4F85A] shadow-sm"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => scrollFilmstripBy(1)}
                  aria-label="Scroll thumbnail strip right"
                  className="hidden sm:flex w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 text-white items-center justify-center shrink-0 border border-white/10 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. Interactive Bento Mosaic Grid (only on /gallery or when showMosaic is enabled) */}
        {showMosaic ? (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F0F6FE] text-[#1E6DEB]">
                  <Images className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-black text-slate-950 tracking-tight">
                    Interactive Photo Mosaic
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Click any photograph to open high-resolution inspection mode
                  </p>
                </div>
              </div>

              <span className="text-xs font-bold text-slate-500 tabular-nums">
                Showing {visibleBentoPhotos.length} of {filteredPhotos.length}{" "}
                photos
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
              {visibleBentoPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => openLightbox(index)}
                  aria-label={`Open ${photo.title} in fullscreen gallery`}
                  className={`group relative text-left rounded-[28px] overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.04)] hover:shadow-xl hover:border-[#1E6DEB]/40 transition-all duration-300 bg-slate-100 cursor-pointer ${getBentoLayoutClass(
                    index,
                    visibleBentoPhotos.length,
                  )}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover group-hover:scale-105 transition-transform duration-500 ${getObjectPositionClass(
                      photo,
                    )}`}
                  />

                  {/* Top Tag & Expand Indicator */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span className="inline-block bg-[#D4F85A] text-[#0A1118] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {photo.tag}
                    </span>

                    <span className="w-8 h-8 rounded-full bg-[#0A1118]/75 text-white flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-200 backdrop-blur-sm">
                      <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Gradient Overlay & Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/90 via-[#0A1118]/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5 sm:p-6 text-white">
                    <span className="text-[10px] font-black text-[#D4F85A] uppercase tracking-wider mb-1">
                      {photo.categoryLabel}
                    </span>
                    <h4 className="text-base sm:text-lg font-black tracking-tight text-white leading-snug">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-white/80 font-medium mt-1 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Expand / Collapse All Toggle */}
            {activeFilter === "all" && filteredPhotos.length > 9 && !showAllByDefault && (
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={() => setShowAll((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-[#1E6DEB] text-white text-xs font-black tracking-wide shadow-md transition-colors cursor-pointer"
                >
                  <Images className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {showAll
                      ? "Show Featured Highlights"
                      : `Explore All ${filteredPhotos.length} Moments`}
                  </span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-[#1E6DEB] text-white text-xs font-black tracking-wide shadow-md transition-colors"
            >
              <Images className="w-4 h-4" aria-hidden="true" />
              <span>View Full {GALLERY_ITEMS.length}-Photo Gallery</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>

      {/* Native Top-Layer <dialog> High-Res Lightbox */}
      <dialog
        ref={dialogRef}
        aria-labelledby={lightboxTitleId}
        {...({ closedby: "any" } as Record<string, string>)}
        onClose={(e) => {
          e.currentTarget.returnValue = "";
          setLightboxIndex(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            stepLightbox(-1);
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            stepLightbox(1);
          }
        }}
        className="gallery-lightbox m-auto w-[min(94vw,calc(62dvh*1.5),1020px)] max-w-none rounded-[28px] bg-[#0A1118] text-white border border-white/15 shadow-2xl p-0 overflow-hidden"
      >
        {lightboxPhoto && lightboxIndex !== null && (
          <div className="flex flex-col max-h-[92dvh]">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3.5 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <span className="inline-block bg-[#D4F85A] text-[#0A1118] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shrink-0">
                  {lightboxPhoto.tag}
                </span>
                <span className="text-xs font-black text-slate-400 tabular-nums shrink-0">
                  {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                  {String(filteredPhotos.length).padStart(2, "0")}
                </span>
                <h3
                  id={lightboxTitleId}
                  className="text-sm sm:text-base font-black text-white truncate"
                >
                  {lightboxPhoto.title}
                </h3>
              </div>

              <button
                type="button"
                autoFocus
                onClick={() => void closeTopLayer()}
                aria-label="Close photo lightbox"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Lightbox Image Stage (matched 3:2 cinema ratio) */}
            <div className="relative w-full aspect-[3/2] bg-[#061122] shrink-0 overflow-hidden">
              <Image
                src={lightboxPhoto.src}
                alt={lightboxPhoto.title}
                fill
                sizes="(max-width: 1024px) 94vw, 1020px"
                fetchPriority="low"
                className="object-contain"
              />

              {filteredPhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepLightbox(-1)}
                    aria-label="Previous photo"
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0A1118]/80 hover:bg-[#1E6DEB] text-white flex items-center justify-center border border-white/15 backdrop-blur-md transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepLightbox(1)}
                    aria-label="Next photo"
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0A1118]/80 hover:bg-[#1E6DEB] text-white flex items-center justify-center border border-white/15 backdrop-blur-md transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Caption & Quick Strip */}
            <div className="px-5 py-4 border-t border-white/10 bg-[#0A1118] space-y-3">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lightboxPhoto.caption}
              </p>

              {filteredPhotos.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
                  {filteredPhotos.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      aria-label={`Jump to ${item.title}`}
                      aria-current={idx === lightboxIndex ? "true" : undefined}
                      className={`relative w-16 aspect-[3/2] rounded-lg overflow-hidden shrink-0 transition-all cursor-pointer ${
                        idx === lightboxIndex
                          ? "ring-2 ring-[#D4F85A] opacity-100"
                          : "opacity-50 hover:opacity-90"
                      }`}
                    >
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        sizes="64px"
                        fetchPriority="low"
                        className={`object-cover ${getObjectPositionClass(item)}`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
