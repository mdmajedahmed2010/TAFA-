"use client";

/**
 * TAFA (তাফা) — Haute Couture Header
 * Authentic Kalamkari, Kota Doria & Festive Tissue Katan Sarees
 * Flagship Showroom: House 42/1, Road No 5, Dhanmondi, Dhaka 1209
 * Facebook: https://www.facebook.com/tafatonzehee • 404,000+ Followers
 * Open Parcel Inspection Nationwide
 */

import Link from "next/link";
import Image from "next/image";
import { User, MessageCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar";
import { MegaMenu } from "../storefront/mega-menu";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

const navLinks = [
  { href: "/collections/kalamkari-sarees", label: "Kalamkari Sarees" },
  { href: "/collections/kota-doria-linen", label: "Kota Doria & Linen" },
  { href: "/collections/festive-tissue-katan", label: "Festive Tissue Katan" },
  { href: "/collections/warli-folk-art", label: "Warli Art Sarees" },
  { href: "/collections/jamdani-gadwal", label: "Dhakai Jamdani" },
  { href: "/collections/showroom-specials", label: "Showroom Specials" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Dhanmondi Showroom" },
  { href: "/faq", label: "FAQ" },
];

const megaMenuData: Record<
  string,
  {
    categories: { label: string; href: string }[];
    styles: { label: string; href: string }[];
    featured: { title: string; subtitle: string; image: string; href: string };
  }
> = {
  "Kalamkari Sarees": {
    categories: [
      { label: "Shop All Kalamkari Boutique Sarees", href: "/collections/kalamkari-sarees" },
      { label: "Midnight Black & Mustard Peacock Motif Saree (৳১,৯৯০)", href: "/products/tafa-midnight-black-mustard-kalamkari-peacock-motif-boutique-saree" },
      { label: "Sage Green & Royal Purple Kalamkari Saree (৳১,৯৯০)", href: "/products/tafa-sage-green-royal-purple-kalamkari-saree-with-zari-border" },
      { label: "Traditional Peacock & Elephant Zari Weaves", href: "/collections/kalamkari-sarees" },
    ],
    styles: [
      { label: "ঐতিহ্যবাহী ময়ূর মোটিফ ও রূপালী জরির গর্জিয়াস হাতি পাড়", href: "/collections/kalamkari-sarees" },
      { label: "ম্যাচিং রানিং ব্লাউজ পিস ও স্ট্রাইপড আঁচল", href: "/collections/kalamkari-sarees" },
      { label: "উৎসব, বৈকালিক দাওয়াত ও পারিবারিক অনুষ্ঠানের আভিজাত্য", href: "/collections/kalamkari-sarees" },
    ],
    featured: {
      title: "Midnight Black & Mustard Kalamkari Saree",
      subtitle: "ময়ূর মোটিফ ও রূপালী জরির হাতি পাড় — ৳১,৯৯০",
      image: ASSETS.kalamkariBlack,
      href: "/collections/kalamkari-sarees",
    },
  },
  "Kota Doria & Linen": {
    categories: [
      { label: "Shop All Kota Doria & Linen Silk", href: "/collections/kota-doria-linen" },
      { label: "Crimson Red Festive Kota Doria Saree (৳১,৬৫০)", href: "/products/tafa-crimson-red-festive-kota-doria-linen-silk-designer-saree" },
      { label: "Peacock Teal Green Kota Doria Saree (৳১,৬৫০)", href: "/products/tafa-peacock-teal-green-kota-doria-linen-silk-designer-saree" },
      { label: "Midnight Navy Blue Kota Doria Saree (৳১,৬৫০)", href: "/products/tafa-midnight-navy-blue-kota-doria-linen-silk-designer-saree" },
    ],
    styles: [
      { label: "হ্যান্ড ব্লক ফ্লোরাল কলকা বুটি ও শেভরন জিগজ্যাগ আঁচল", href: "/collections/kota-doria-linen" },
      { label: "লাইটওয়েট আরামদায়ক ফেব্রিক ও চকচকে জরি পাড়", href: "/collections/kota-doria-linen" },
      { label: "সারা দিনের পরিধানে পরম প্রশান্তি ও মার্জিত লুক", href: "/collections/kota-doria-linen" },
    ],
    featured: {
      title: "Crimson Red Festive Kota Doria Saree",
      subtitle: "সোনালী কলকা বুটি ও শেভরন জিগজ্যাগ আঁচল — ৳১,৬৫০",
      image: ASSETS.kotaCrimson,
      href: "/collections/kota-doria-linen",
    },
  },
  "Festive Tissue Katan": {
    categories: [
      { label: "Shop All Festive Tissue Katan & Silk", href: "/collections/festive-tissue-katan" },
      { label: "Pure Gold Festive Tissue Katan Bridal Saree (৳৩,২৫০)", href: "/products/tafa-pure-gold-festive-tissue-katan-bridal-saree-special" },
      { label: "Royal Champagne Gold Tissue Silk Saree (৳৩,৪৫০)", href: "/products/tafa-royal-champagne-gold-tissue-silk-saree-model-draped-edition" },
      { label: "Peach Rose Shimmer Tissue Kota Silk (৳২,১৮০)", href: "/products/tafa-peach-rose-shimmer-tissue-kota-silk-floral-embroidered-saree" },
    ],
    styles: [
      { label: "আলো ঝলমলে সোনালী টিস্যু টেক্সচার ও ব্রাইডাল কারুকাজ", href: "/collections/festive-tissue-katan" },
      { label: "বিয়ে, রিসেপশন ও ঈদ উৎসবের পরম আকর্ষণ", href: "/collections/festive-tissue-katan" },
      { label: "অল-ওভার কাশ্মীরি ফ্লোরাল জাল ও সূক্ষ্ম এমব্রয়ডারি", href: "/collections/festive-tissue-katan" },
    ],
    featured: {
      title: "Pure Gold Festive Tissue Katan Saree",
      subtitle: "রাজকীয় স্বর্ণালী আভা ও ঐতিহ্যবাহী চওড়া পাড় — ৳৩,২৫০",
      image: ASSETS.tissueKatanGold,
      href: "/collections/festive-tissue-katan",
    },
  },
};

export function Header({ settings = {} }: { settings?: Record<string, unknown> }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeItems = [
    "🌸 উৎসবকে সাজাই TAFA’র শাড়িতে • সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির সমাহার",
    "✦ ৪০৪,০০০+ আপুদের ভালোবাসায় ধানমন্ডি শোরুম ও বিশ্বস্ত অনলাইন বুটিক",
    "🌸 ওপেন পার্সেল গ্যারান্টি — পার্সেল খুলে শাড়ি দেখে চেক করে পেমেন্ট করার শতভাগ নিশ্চিন্ত সুবিধা",
    "✦ ঢাকা ডেলিভারি চার্জ ৮০ টাকা • ঢাকার বাইরে ১৫০ টাকা • ২ বা ততোধিক শাড়িতে সারাদেশে ফ্রি ডেলিভারি",
    "🌸 সরাসরি শোরুম ভিজিট করুন: হাউস ৪২/১, রোড নং ৫, ধানমন্ডি, ঢাকা ১২০৯ (প্রতিদিন সকাল ১০:৩০ - রাত ৯:০০)",
    "✦ হটলাইন ও হোয়াটসঅ্যাপ: 01885-507455 / 01688-231132",
    "🌸 ঐতিহ্যবাহী কালামকারি, কোটা ডোরিয়া ও টিস্যু কাতান শাড়ির এক্সক্লুসিভ সমাহার",
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Endless Haute Marquee Ticker */}
      <div className="bg-[#133827] text-[#D4AF37] overflow-hidden py-2 border-b border-[#D4AF37]/30 select-none">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Floating Luxury Glass Island */}
      <div
        className={`w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(19,56,39,0.18)] border-b border-[#D4AF37]/30 py-1.5"
            : "bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#E5DAC6] py-2.5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-18 items-center justify-between">
            {/* Left: Mobile menu + Brand Identity */}
            <div className="flex items-center gap-3 md:gap-5">
              <MobileNav links={navLinks} />
              <Link href="/" className="flex items-center gap-3 group/brand">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#133827] via-[#D4AF37] to-[#1E5038] opacity-75 blur-[2px] group-hover/brand:opacity-100 transition-opacity" />
                  <Image
                    src={
                      typeof settings?.store_logo === "string" && settings.store_logo
                        ? settings.store_logo
                        : ASSETS.logo
                    }
                    alt="TAFA (তাফা)"
                    width={52}
                    height={52}
                    className="relative h-11 w-11 md:h-13 md:w-13 object-cover bg-black rounded-full ring-2 ring-[#D4AF37] shadow-sm transition-transform duration-500 group-hover/brand:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#D4AF37] text-base">🌸</span>
                    <p className="text-[19px] md:text-[23px] font-bold tracking-[0.02em] text-[#133827] font-heading leading-none">
                      TAFA
                    </p>
                  </div>
                  <p className="text-[9.5px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase mt-0.5">
                    তাফা • DHANMONDI BOUTIQUE
                  </p>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation with Couture Mega Menu */}
            <nav className="hidden lg:flex items-center gap-6 static" aria-label="Main navigation">
              {navLinks.map((link) => {
                const hasMegaMenu = link.label in megaMenuData;
                const menu = megaMenuData[link.label];

                if (hasMegaMenu && menu) {
                  return (
                    <MegaMenu key={link.href} label={link.label} href={link.href} data={menu} />
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#121815]/85 hover:text-[#133827] py-4 block transition-all relative group/nav"
                  >
                    {link.label}
                    <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-[#133827] transition-all duration-300 group-hover/nav:w-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions (Search, Account, Cart, Facebook) */}
            <div className="flex items-center gap-2 sm:gap-4">
              <SearchBar />

              {/* Facebook Page Direct Link */}
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#133827]/10 hover:bg-[#133827] text-[#133827] hover:text-[#D4AF37] border border-[#133827]/30 transition-all text-[11px] font-bold tracking-wider"
                title="TAFA Facebook Page (404K+ Followers)"
              >
                <span>FB: 404K+</span>
              </a>

              {/* User Account / Login */}
              <Link
                href="/account"
                aria-label="User Account"
                className="flex items-center justify-center size-10 rounded-full text-foreground/80 hover:text-[#133827] hover:bg-[#FAF7F2] transition-colors"
              >
                <User className="h-5 w-5" strokeWidth={1.75} />
              </Link>

              {/* Shopping Bag Button */}
              <CartButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
