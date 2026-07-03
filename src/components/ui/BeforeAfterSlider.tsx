"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  aspectClass?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  aspectClass = "aspect-[3/2]",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(4, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(96, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className={`group relative ${aspectClass} overflow-hidden select-none touch-none cursor-ew-resize`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      role="slider"
      aria-label={`${alt} — before and after comparison`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
    >
      {/* After (base layer) */}
      <Image
        src={afterSrc}
        alt={`${alt} — after`}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 100vw, 1024px"
      />

      {/* Before (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={`${alt} — before`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1024px"
        />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 z-10 pointer-events-none bg-charcoal/60 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-linen backdrop-blur-sm">
        Before
      </span>
      <span className="absolute top-4 right-4 z-10 pointer-events-none bg-linen/85 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal backdrop-blur-sm">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-0 bottom-0 -translate-x-1/2 w-px bg-linen shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
        <div
          className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-linen shadow-lg transition-transform duration-200 ${
            isDragging ? "scale-110" : "group-hover:scale-105"
          }`}
        >
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            className="text-charcoal"
          >
            <path
              d="M5 1 L1 6 L5 11 M13 1 L17 6 L13 11"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
