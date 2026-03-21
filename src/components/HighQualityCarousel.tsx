"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HighQualityCarouselProps {
  images: string[];
  title: string;
}

export function HighQualityCarousel({ images, title }: HighQualityCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
      setCurrentSlide(index);
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-video bg-muted border-b-2 border-foreground flex items-center justify-center">
        <span className="font-mono text-muted-foreground uppercase tracking-widest font-bold">No Image</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="w-full aspect-video border-b-2 border-foreground relative bg-muted overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video border-b-2 border-foreground bg-muted group">
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full h-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 snap-center relative">
            <img
              src={img}
              alt={`${title} - ${idx + 1}`}
              className="w-full h-full object-cover pointer-events-none"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="pointer-events-auto bg-background/90 border-2 border-foreground p-1 hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50"
          onClick={() => scrollTo(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="pointer-events-auto bg-background/90 border-2 border-foreground p-1 hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50"
          onClick={() => scrollTo(Math.min(images.length - 1, currentSlide + 1))}
          disabled={currentSlide === images.length - 1}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Counter / Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 p-1.5 bg-background/90 border-2 border-foreground shadow-[2px_2px_0px_0px_var(--brutal-shadow)]">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`h-2 transition-all border border-foreground ${
              idx === currentSlide ? "w-6 bg-primary" : "w-2 bg-muted-foreground hover:bg-foreground"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
