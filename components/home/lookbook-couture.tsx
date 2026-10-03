"use client";

/**
 * TAFA (তাফা) — Interactive "Shop The Look" Lookbook
 * Direct editorial saree hotspot interaction and instant order
 * House 42/1, Road 5, Dhanmondi, Dhaka 1209 • FB: https://www.facebook.com/tafatonzehee
 * 404,000+ Followers • "সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির সমাহার"
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Crown, ShoppingBag, ArrowUpRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/lib/demo-data";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

interface LookbookSpot {
  id: string;
  name: string;
  category: string;
  price: number;
  comparePrice: number;
  slug: string;
  image: string;
  x: number;
  y: number;
  sizes: string[];
}

interface CoutureLook {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  heroImage: string;
  spots: LookbookSpot[];
}

const COUTURE_LOOKS: CoutureLook[] = [
  {
    id: "look-1",
    tabLabel: "Tissue Katan (৳3,450)",
    title: "Pure Gold Festive Tissue Katan Bridal Saree",
    subtitle: "গাঢ় গোল্ডেন শিimmer ও রয়্যাল জরি জারদৌসি পাড়ে বিয়ের জমকালো সাজের অনন্য আকর্ষণ।",
    heroImage: ASSETS.tissueKatanGold,
    spots: [
      {
        id: "spot-1",
        name: "Festive Pure Gold Tissue Katan Bridal Saree",
        category: "Festive Tissue Katan",
        price: 3450,
        comparePrice: 4200,
        slug: "festive-pure-gold-tissue-katan-bridal-saree",
        image: ASSETS.tissueKatanGold,
        x: 50,
        y: 48,
        sizes: ["Full Saree (12 Haat)", "With Blouse Piece"],
      },
    ],
  },
  {
    id: "look-2",
    tabLabel: "Champagne Silk (৳3,450)",
    title: "Royal Champagne Gold Tissue Silk Saree",
    subtitle: "অভিজাত শ্যাম্পেন গোল্ডেন টিস্যু সিল্ক শাড়ি—গর্জিয়াস কুন্দন ও জুয়েলারির সাথে ক্লাসিক ড্র্যাপিং।",
    heroImage: ASSETS.tissueSilkChampagne,
    spots: [
      {
        id: "spot-2",
        name: "Royal Champagne Gold Tissue Silk Saree",
        category: "Festive Tissue Katan",
        price: 3450,
        comparePrice: 4200,
        slug: "royal-champagne-gold-tissue-silk-saree",
        image: ASSETS.tissueSilkChampagne,
        x: 50,
        y: 44,
        sizes: ["Full Saree (12 Haat)", "With Blouse Piece"],
      },
    ],
  },
  {
    id: "look-3",
    tabLabel: "Kalamkari (৳1,850)",
    title: "Midnight Black Kalamkari Cotton Silk Saree",
    subtitle: "হাতে আঁকা ঐতিহ্যবাহী ময়ূর ও হাতির মোটিফে ব্ল্যাক ও মাস্টার্ড ইয়েলো কনট্রাস্টের নান্দনিক ঐতিহ্য।",
    heroImage: ASSETS.kalamkariBlack,
    spots: [
      {
        id: "spot-3",
        name: "Midnight Black Traditional Kalamkari Cotton Silk Saree",
        category: "Kalamkari Saree",
        price: 1850,
        comparePrice: 2400,
        slug: "midnight-black-traditional-kalamkari-cotton-silk-saree",
        image: ASSETS.kalamkariBlack,
        x: 50,
        y: 46,
        sizes: ["Full Saree (12 Haat)", "With Blouse Piece"],
      },
    ],
  },
  {
    id: "look-4",
    tabLabel: "Sapphire Blue (৳2,650)",
    title: "Royal Sapphire Blue Floral Silk Saree",
    subtitle: "রয়্যাল ব্লু বডিতে মাল্টিকালার ফ্লোরাল ও গোল্ডেন জরি পাল্লু—উৎসবের মার্জিত ড্র্যাপিং লুক।",
    heroImage: ASSETS.royalBlueFloral,
    spots: [
      {
        id: "spot-4",
        name: "Royal Sapphire Blue Floral Silk Saree with Zari Pallu",
        category: "Designer Silk",
        price: 2650,
        comparePrice: 3200,
        slug: "royal-sapphire-blue-floral-silk-saree",
        image: ASSETS.royalBlueFloral,
        x: 50,
        y: 46,
        sizes: ["Full Saree (12 Haat)", "With Blouse Piece"],
      },
    ],
  },
];

export function LookbookCouture() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSpotId, setActiveSpotId] = useState<string>("spot-1");
  const [selectedSize, setSelectedSize] = useState<string>("Full Saree (12 Haat)");
  const [isAdding, setIsAdding] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const currentLook = COUTURE_LOOKS[activeTab] ?? COUTURE_LOOKS[0]!;
  const activeSpot =
    currentLook.spots.find((s) => s.id === activeSpotId) ?? currentLook.spots[0]!;

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    const newLook = COUTURE_LOOKS[idx];
    if (newLook && newLook.spots.length > 0) {
      const firstSpot = newLook.spots[0]!;
      setActiveSpotId(firstSpot.id);
      setSelectedSize(firstSpot.sizes[0] ?? "Full Saree (12 Haat)");
    }
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      variantId: `${activeSpot.slug}-${selectedSize.replace(/\s+/g, "-")}`,
      productId: activeSpot.slug,
      name: activeSpot.name,
      price: activeSpot.price,
      quantity: 1,
      size: selectedSize,
      color: "As Pictured",
      image: activeSpot.image,
      stock: 15,
    });

    toast.success(`Added ${activeSpot.name} to your bag!`, {
      description: "✓ Open Parcel Policy • ক্যাশ অন ডেলিভারিতে চেক করে মূল্য পরিশোধ করুন।",
    });

    setTimeout(() => {
      setIsAdding(false);
    }, 1200);
  };

  return (
    <section className="py-16 md:py-28 bg-[#FAF7F2] border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 mb-3 shadow-xs">
            <Crown className="h-3 w-3 text-[#D4AF37]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#133827]">
              TAFA LOOKBOOK
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Festive Saree Stylebook
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            উৎসবকে সাজাই TAFA’র শাড়িতে — ধানমন্ডি ৫ শোরুম এবং অনলাইনে সরাসরি অর্ডার করুন সবচেয়ে রিজনেবল প্রাইসের প্রিমিয়াম শাড়ি।
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {COUTURE_LOOKS.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => handleTabChange(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#133827] text-[#D4AF37] shadow-lg border border-[#D4AF37] scale-105"
                    : "bg-white text-neutral-700 hover:bg-[#FAF7F2] border border-[#E8DFD3]"
                }`}
              >
                {look.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 md:p-10 border border-[#E8DFD3] shadow-md">
          {/* LEFT: Hero Lookbook Photo with Interactive Hotspots (7 Cols) */}
          <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-[#E8DFD3]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLook.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentLook.heroImage}
                  alt={currentLook.title}
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Hotspots */}
            {currentLook.spots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => {
                  setActiveSpotId(spot.id);
                  setSelectedSize(spot.sizes[0] ?? "Full Saree (12 Haat)");
                }}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-9 rounded-full bg-white text-[#133827] shadow-2xl hover:scale-115 transition-transform duration-300 ring-4 ring-[#D4AF37] cursor-pointer"
                aria-label={`View ${spot.name}`}
              >
                <span className="size-3 rounded-full bg-[#133827] animate-ping absolute" />
                <span className="size-3 rounded-full bg-[#133827] relative z-10" />
              </button>
            ))}
          </div>

          {/* RIGHT: Curated Garment Details & 1-Tap Purchase (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37]">
                {activeSpot.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-heading leading-tight mt-1">
                {activeSpot.name}
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 mt-2 leading-relaxed">
                {currentLook.subtitle}
              </p>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3]">
              <span className="text-2xl md:text-3xl font-bold text-[#133827] font-heading">
                ৳{activeSpot.price.toLocaleString()}
              </span>
              {activeSpot.comparePrice > activeSpot.price && (
                <span className="text-sm text-neutral-400 line-through">
                  ৳{activeSpot.comparePrice.toLocaleString()}
                </span>
              )}
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 ml-auto">
                ইন-স্টক
              </span>
            </div>

            {/* Size / Saree Drape Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                Select Option / শাড়ির ধরন:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {activeSpot.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      selectedSize === sz
                        ? "bg-[#133827] text-[#D4AF37] border-[#D4AF37] shadow-sm"
                        : "bg-white text-neutral-700 hover:bg-[#FAF7F2] border-[#E8DFD3]"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="w-full h-13 rounded-full bg-[#133827] hover:bg-[#0E291C] text-[#D4AF37] hover:text-white font-bold text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                {isAdding ? (
                  <>
                    <Check className="h-4 w-4 text-[#D4AF37]" />
                    <span>Added To Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" />
                    <span>Add Saree To Bag — ৳{activeSpot.price.toLocaleString()}</span>
                  </>
                )}
              </button>

              <Link
                href={`/products/${activeSpot.slug}`}
                className="w-full h-11 rounded-full bg-white hover:bg-[#FAF7F2] text-[#133827] border border-[#D4AF37]/50 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Full Saree Details</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Assurance Note */}
            <p className="text-[11px] text-neutral-500 text-center">
              ✓ ক্যাশ অন ডেলিভারি • পার্সেল খুলে দেখে চেক করার সুযোগ • ঢাকা ৳৮০ / বাইরে ৳১৫০
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
