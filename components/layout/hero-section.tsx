"use client";

/**
 * TAFA | Dhaka (তাফা) — Hero Section
 * Authentic Sarees, Kalamkari, Tissue Katan & Luxury Drape
 * House 42/1, Road No 5, Dhanmondi, Dhaka 1209
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

const slides = [
  {
    image: ASSETS.heroBanner,
    title: "TAFA | DHAKA (তাফা)",
    subtitle: "সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির সমাহার। উৎসবকে সাজাই TAFA'র শাড়িতে।",
    link: "/collections/kalamkari-cotton",
    overline: "✦ ৪০৪,০০০+ Facebook Community • Dhanmondi Showroom ✦",
  },
  {
    image: ASSETS.tissueKatanGold,
    title: "EXCLUSIVE TISSUE KATAN SILK (৳৩,৪৫০)",
    subtitle: "জমকালো স্বর্ণালি জরির আঁচল ও লাক্সারি টিস্যু কাতান শাড়ি উৎসব ও বিয়ের জন্য।",
    link: "/products/festive-tissue-katan-silk-saree-gold",
    overline: "✦ ১০০% প্রিমিয়াম কোয়ালিটি শাড়ি গ্যারান্টি ✦",
  },
  {
    image: ASSETS.kalamkariBlack,
    title: "PURE COTTON KALAMKARI (৳১,৮৫০)",
    subtitle: "ঐতিহ্যবাহী আরামদায়ক সুতি কালামকারী শাড়ি মার্জিত ড্র্যাপ ও ম্যাচিং ব্লাউজ পিস সহ।",
    link: "/products/traditional-kalamkari-cotton-saree-black",
    overline: "✦ ওপেন পার্সেল গ্যারান্টি ও ধানমন্ডি ৫ শোরুম ✦",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[65vh] md:h-[80vh] min-h-[500px] overflow-hidden bg-neutral-900">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            unoptimized
            className="object-cover object-center transform scale-100 transition-transform duration-[10000ms] ease-out"
            sizes="100vw"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent hidden md:block" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-start container mx-auto px-6 md:px-12 z-20">
            <div className="max-w-2xl text-left space-y-4 md:space-y-6 animate-[fadeInUp_0.8s_ease-out]">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-xs">
                {slide.overline}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] font-serif">
                {slide.title}
              </h1>
              <p className="text-sm md:text-lg text-neutral-200 font-sans max-w-lg leading-relaxed font-light">
                {slide.subtitle}
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href={slide.link}
                  className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full bg-[#133827] text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#0A1F16] transition-all shadow-xl hover:shadow-[#133827]/30 border border-[#D4AF37]/40"
                >
                  Shop This Collection
                </Link>
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center h-12 md:h-14 px-7 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-[0.16em] backdrop-blur-md transition-all border border-white/20"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-6 md:right-12 z-30 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="size-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={nextSlide}
          className="size-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-6 md:left-12 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
