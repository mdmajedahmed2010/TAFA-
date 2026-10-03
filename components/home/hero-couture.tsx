"use client";

/**
 * TAFA (তাফা) — Haute Couture Hero Experience
 * Asymmetric Editorial Canvas with Interactive Saree Hotspots
 * Flagship Showroom: House 42/1, Road No 5, Dhanmondi, Dhaka 1209
 * Facebook: https://www.facebook.com/tafatonzehee • 404,000+ Followers
 * Open Parcel Inspection Nationwide
 */

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, ShieldCheck, Star, Eye, ShoppingBag, Crown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/lib/demo-data";
import { useQuickViewStore } from "@/store/quick-view-store";
import { BUSINESS } from "@/lib/constants";

export interface CoutureHeroSlide {
  id: string;
  image: string;
  category: string;
  title: string;
  italicWord: string;
  subtitle: string;
  link: string;
  hotspot: {
    name: string;
    price: number;
    comparePrice: number;
    slug: string;
    x: number; // percentage from left
    y: number; // percentage from top
  };
}

const HERO_SLIDES: CoutureHeroSlide[] = [
  {
    id: "slide-1",
    image: ASSETS.showroomInterior,
    category: "ধানমন্ডি ফ্ল্যাগশিপ শোরুম • ৪০৪K+ আপুদের পরিবার",
    title: "উৎসবকে সাজাই",
    italicWord: "TAFA’র শাড়িতে ✨",
    subtitle:
      "সবচেয়ে রিজনেবল প্রাইসে ঐতিহ্যবাহী কালামকারি, কোটা ডোরিয়া ও টিস্যু কাতান শাড়ির অনন্য সমাহার। ধানমন্ডি ৫ শোরুম থেকে সরাসরি ট্রায়াল দিয়ে কেনার সুযোগ ও সারা দেশে ক্যাশ অন হোম ডেলিভারি।",
    link: "/collections/showroom-specials",
    hotspot: {
      name: "TAFA Dhanmondi Flagship Exclusive Showroom Curation Saree",
      price: 2450,
      comparePrice: 2950,
      slug: "tafa-dhanmondi-flagship-exclusive-showroom-curation-saree",
      x: 48,
      y: 50,
    },
  },
  {
    id: "slide-2",
    image: ASSETS.tissueKatanGold,
    category: "উৎসবে টিস্যু কাতান ও সিল্ক",
    title: "ROYAL GOLDEN",
    italicWord: "টিস্যু কাতান ব্রাইডাল",
    subtitle:
      "আলো ঝলমলে সোনালী টিস্যু কাতানের রাজকীয় রূপ। বিয়ে, রিসেপশন ও উৎসবের জমকালো সাজে সম্পূর্ণ আভিজাত্যপূর্ণ ও চোখ জুড়ানো রেশমি কারুকাজ।",
    link: "/collections/festive-tissue-katan",
    hotspot: {
      name: "TAFA Pure Gold Festive Tissue Katan Bridal Saree Special",
      price: 3250,
      comparePrice: 3850,
      slug: "tafa-pure-gold-festive-tissue-katan-bridal-saree-special",
      x: 50,
      y: 45,
    },
  },
  {
    id: "slide-3",
    image: ASSETS.kotaCrimson,
    category: "কোটা ডোরিয়া ও লিনেন সিল্ক ট্রায়ো",
    title: "FESTIVE RED",
    italicWord: "কোটা ডোরিয়া সিল্ক",
    subtitle:
      "উজ্জ্বল লাল কোটা ডোরিয়া শাড়ি—সোনালী ফ্লোরাল কলকা বুটি, শেভরন জিগজ্যাগ আঁচল এবং সূক্ষ্ম জরি কাজের ক্লাসিক উৎসব শাড়ি।",
    link: "/collections/kota-doria-linen",
    hotspot: {
      name: "TAFA Crimson Red Festive Kota Doria & Linen Silk Designer Saree",
      price: 1650,
      comparePrice: 1950,
      slug: "tafa-crimson-red-festive-kota-doria-linen-silk-designer-saree",
      x: 46,
      y: 48,
    },
  },
  {
    id: "slide-4",
    image: ASSETS.kalamkariBlack,
    category: "ঐতিহ্যবাহী কালামকারি বুটিক",
    title: "MIDNIGHT PEACOCK",
    italicWord: "কালামকারি বুটিক শাড়ি",
    subtitle:
      "মিডনাইট ব্ল্যাক ও মাস্টার্ড কালারে ময়ূর মোটিফ, স্ট্রাইপড আঁচল এবং রূপালী জরির গর্জিয়াস হাতি পাড়ের সূক্ষ্ম ঐতিহ্যবাহী কারুকাজ।",
    link: "/collections/kalamkari-sarees",
    hotspot: {
      name: "TAFA Midnight Black & Mustard Kalamkari Peacock Motif Boutique Saree",
      price: 1990,
      comparePrice: 2450,
      slug: "tafa-midnight-black-mustard-kalamkari-peacock-motif-boutique-saree",
      x: 50,
      y: 46,
    },
  },
];

export function HeroCouture() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showHotspotTooltip, setShowHotspotTooltip] = useState(true);
  const openQuickView = useQuickViewStore((state) => state.openQuickView);

  const activeSlide = HERO_SLIDES[currentIdx] ?? HERO_SLIDES[0]!;
  const SLIDE_DURATION = 6500;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = useCallback((idx: number) => {
    setCurrentIdx(idx);
  }, []);

  const handleHotspotClick = () => {
    openQuickView({
      id: activeSlide.hotspot.slug,
      name: activeSlide.hotspot.name,
      price: activeSlide.hotspot.price,
      compareAtPrice: activeSlide.hotspot.comparePrice,
      image: activeSlide.image,
      images: [activeSlide.image],
      category: activeSlide.category,
      slug: activeSlide.hotspot.slug,
      stock: 15,
      isNew: true,
    });
  };

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden border-b border-[#E5DAC6]">
      {/* Background Decorative Typography */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 pointer-events-none select-none text-[100px] md:text-[240px] font-bold text-black/[0.02] font-heading leading-none whitespace-nowrap z-0">
        TAFA
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Editorial Storytelling & Direct Conversion CTA (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/50 shadow-xs">
              <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.16em] uppercase text-[#133827]">
                {activeSlide.category}
              </span>
            </div>

            {/* Haute Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#121815] font-heading leading-[1.08]">
                {activeSlide.title} <br />
                <span className="italic font-normal font-serif text-[#133827] tracking-normal">
                  {activeSlide.italicWord}
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-sans leading-relaxed pt-2 max-w-lg">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Primary Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href={activeSlide.link}
                className="h-12 md:h-13 px-8 rounded-full bg-[#133827] hover:bg-[#1A4B35] text-[#D4AF37] hover:text-white text-xs md:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 group/btn active:scale-98"
              >
                <span>অর্ডার করুন / View Collection</span>
                <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 md:h-13 px-6 rounded-full bg-white hover:bg-[#FAF7F2] text-[#133827] border border-[#D4AF37]/40 text-xs md:text-sm font-semibold tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                <span>হটলাইন: {BUSINESS.PHONE}</span>
              </a>
            </div>

            {/* Value Indicators Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E5DAC6]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[#133827]">
                  <Star className="h-3.5 w-3.5 fill-current text-[#D4AF37]" />
                  <span className="text-xs font-bold text-[#121815] font-heading">৪০৪K+ ফলোয়ার</span>
                </div>
                <p className="text-[10px] text-neutral-500">Facebook Community</p>
              </div>

              <div className="space-y-0.5 border-x border-[#E5DAC6] px-3">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <ShieldCheck className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-bold text-[#121815] font-heading">১০০% প্রিমিয়াম শাড়ি</span>
                </div>
                <p className="text-[10px] text-neutral-500">সেরা মানের নিশ্চয়তা</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-emerald-600">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span className="text-xs font-bold text-[#121815] font-heading">ওপেন পার্সেল</span>
                </div>
                <p className="text-[10px] text-neutral-500">দেখে চেক করে পেমেন্ট</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Asymmetric High-Fashion Editorial Canvas (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Luxury Frame Glow */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#133827]/20 via-[#D4AF37]/20 to-[#1E5038]/20 blur-xl opacity-70" />

              {/* Main Image Viewport with Aspect Ratio */}
              <div className="relative aspect-[4/5] sm:aspect-[16/11] md:aspect-[4/5] lg:aspect-[16/12] w-full rounded-[1.75rem] overflow-hidden bg-neutral-900 border-2 border-white shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.hotspot.name}
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    {/* Editorial Gradient Veil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  </motion.div>
                </AnimatePresence>

                {/* Interactive Hotspot Pin on the Saree */}
                <div
                  style={{
                    left: `${activeSlide.hotspot.x}%`,
                    top: `${activeSlide.hotspot.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin"
                >
                  {/* Radar Pulse Effect */}
                  <span className="absolute -inset-2 rounded-full bg-[#D4AF37] opacity-75 animate-ping pointer-events-none" />

                  {/* Interactive Button */}
                  <button
                    onClick={handleHotspotClick}
                    className="relative flex items-center justify-center size-9 md:size-10 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#D4AF37] shadow-xl text-[#133827] hover:scale-110 transition-transform cursor-pointer"
                    aria-label={`View ${activeSlide.hotspot.name}`}
                  >
                    <Eye className="h-4 w-4 text-[#133827]" />
                  </button>

                  {/* Hotspot Floating Tooltip Card */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 sm:w-64 p-3 rounded-xl bg-white/95 backdrop-blur-xl border border-[#D4AF37]/50 shadow-2xl transition-all duration-300 pointer-events-auto z-30 ${
                      showHotspotTooltip ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="relative size-12 rounded-lg overflow-hidden shrink-0 border border-[#E5DAC6] bg-neutral-100">
                        <Image
                          src={activeSlide.image}
                          alt={activeSlide.hotspot.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] uppercase tracking-wider font-bold text-[#D4AF37]">
                          Featured Saree
                        </p>
                        <p className="text-xs font-bold text-[#121815] truncate font-heading">
                          {activeSlide.hotspot.name}
                        </p>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-xs font-extrabold text-[#133827]">
                            ৳{activeSlide.hotspot.price.toLocaleString("en-BD")}
                          </span>
                          <span className="text-[10px] text-neutral-400 line-through">
                            ৳{activeSlide.hotspot.comparePrice.toLocaleString("en-BD")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleHotspotClick}
                      className="mt-2.5 w-full py-1.5 rounded-lg bg-[#133827] text-[#D4AF37] hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Quick View &amp; Order</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* Bottom Slide Info overlay within the frame */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10 pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[10px] sm:text-xs font-medium tracking-wide flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span>TAFA Dhanmondi Flagship Collection</span>
                  </div>

                  {/* Slide Indicators Navigation */}
                  <div className="flex items-center gap-1.5 pointer-events-auto bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => handleSlideChange(idx)}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          currentIdx === idx
                            ? "w-6 h-2 bg-[#D4AF37]"
                            : "w-2 h-2 bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
