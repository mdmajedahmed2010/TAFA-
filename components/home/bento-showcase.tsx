"use client";

/**
 * TAFA (তাফা) — Asymmetric Haute Bento Showcase
 * House 42/1, Road 5, Dhanmondi, Dhaka 1209 • FB: https://www.facebook.com/tafatonzehee
 * 404,000+ Followers • "সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির সমাহার"
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/demo-data";

interface BentoItem {
  title: string;
  subtitle: string;
  tag: string;
  priceNote: string;
  image: string;
  href: string;
  gridClass: string;
  accentColor?: string;
}

const BENTO_ITEMS: BentoItem[] = [
  {
    title: "Traditional Kalamkari Cotton Silk",
    subtitle:
      "হাতে আঁকা ঐতিহ্যবাহী ময়ূর ও হাতির ট্র্যাডিশনাল মোটিফ, ব্ল্যাক ও মাস্টার্ড ইয়েলো কনট্রাস্টের নান্দনিক ঐতিহ্যবাহী আঁচল।",
    tag: "KALAMKARI HERITAGE",
    priceNote: "From ৳1,850",
    image: ASSETS.kalamkariBlack,
    href: "/categories/kalamkari-saree",
    gridClass: "lg:col-span-7 lg:row-span-2 min-h-[380px] lg:min-h-[520px]",
    accentColor: "#133827",
  },
  {
    title: "Festive Pure Gold Tissue Katan",
    subtitle:
      "বিয়ে ও জমকালো পার্টির সাজে গাঢ় গোল্ডেন শিimmer এবং জারদৌসি পাড়ের রাজকীয় ব্রাইডাল টিস্যু কাতান শাড়ি।",
    tag: "FESTIVE KATAN",
    priceNote: "From ৳3,450",
    image: ASSETS.tissueKatanGold,
    href: "/categories/festive-tissue-katan",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Kota Doria & Linen Silk Festive",
    subtitle:
      "গাঢ় লাল রঙের জমকালো ও আরামদায়ক কোটা ডোরিয়া এবং লিনেন সিল্ক শাড়ি—যে কোনো উৎসবে পরার জন্য নিখুঁত।",
    tag: "KOTA DORIA",
    priceNote: "From ৳1,950",
    image: ASSETS.kotaCrimsonRed,
    href: "/categories/kota-doria-linen",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Handcrafted Warli Folk Art Linen",
    subtitle:
      "প্লাম ওয়াইন শ্যাডোতে ভারতীয় লোকশিল্পের ট্রাইবাল ফিগার ও জ্যামিতিক নকশার অনবদ্য প্রকাশ।",
    tag: "WARLI FOLK ART",
    priceNote: "From ৳1,950",
    image: ASSETS.warliArtPlum,
    href: "/categories/warli-folk-art",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
  {
    title: "Embroidered Shimmer Tissue Kota",
    subtitle:
      "পিচ রোজ শ্যাডোতে মাল্টিকালার থ্রেড ফ্লোরাল এমব্রয়ডারি ও গোল্ডেন সেলফ-বর্ডার।",
    tag: "TISSUE KOTA",
    priceNote: "From ৳2,250",
    image: ASSETS.tissueKotaPeach,
    href: "/categories/embroidered-tissue",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
];

export function BentoShowcase() {
  return (
    <section className="py-16 md:py-28 bg-[#FAF7F2] border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/50 mb-3 shadow-xs">
              <Crown className="h-3 w-3 text-[#D4AF37]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#133827]">
                TAFA CURATED SIGNATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
              TAFA Designer Saree Wardrobe
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
              উৎসবকে সাজাই TAFA’র শাড়িতে! কালামকারি কটন সিল্ক, ফেস্টিভ টিস্যু কাতান, কোটা ডোরিয়া এবং এক্সক্লুসিভ ডিজাইনার শাড়ির সবচেয়ে রিজনেবল প্রাইসের অনন্য সম্ভার। পার্সেল খুলে দেখে চেক করে পেমেন্ট করার নিশ্চয়তা।
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#133827] hover:text-[#D4AF37] transition-colors group/link self-start md:self-end font-semibold"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="h-4 w-4 text-[#D4AF37] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {BENTO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-[#E8DFD3] bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#D4AF37]/70 ${item.gridClass}`}
            >
              <Link href={item.href} className="absolute inset-0 z-20">
                <span className="sr-only">Explore {item.title}</span>
              </Link>

              {/* Background Product Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 opacity-85 group-hover:opacity-95"
              />

              {/* Dark Gradient Veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase border border-white/20">
                    {item.tag}
                  </span>
                  <span className="text-white/90 text-xs font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs border border-white/10">
                    {item.priceNote}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-heading leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-300 line-clamp-2 max-w-md">
                    {item.subtitle}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] pt-1 uppercase tracking-wider">
                    <span>Shop Collection</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
