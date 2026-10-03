"use client";

/**
 * TAFA | Dhaka (তাফা) — Short Brand Story Section (Homepage)
 * Authentic Sarees, Kalamkari, Tissue Katan & Luxury Drape
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export function EditorialSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] relative border-y border-[#D4AF37]/20 overflow-hidden">
      <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-[#D4AF37]/20 hidden lg:block" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px 0px" }}
        className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-2 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-2xl -z-10 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-md">
              <Image
                src={ASSETS.tissueKatanGold}
                alt="TAFA | Dhaka — Authentic Sarees & Festive Drape"
                fill
                unoptimized
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-7 space-y-5 lg:pl-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#133827] animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#133827] font-bold">
                  ABOUT {BUSINESS.NAME.toUpperCase()}
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-[#121815] font-serif">
                Dedicated to <span className="italic font-normal text-[#133827]">Timeless Festive Saree Elegance</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              {BUSINESS.NAME} ({BUSINESS.NAME_BN}) বাংলাদেশের ৪০৪,০০০+ রুচিশীল নারীদের জন্য সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম কালামকারী সুতি, টিস্যু কাতান, কোটা ডোরিয়া এবং উৎসব স্পেশাল টিস্যু সিল্ক শাড়ির নির্ভরযোগ্য ঠিকানা।
            </p>

            <div className="p-4 md:p-5 bg-white border-l-4 border-[#133827] rounded-xl shadow-xs">
              <p className="text-xs md:text-sm text-[#121815] leading-relaxed font-medium italic">
                &ldquo;ওপেন পার্সেল গ্যারান্টি: ডেলিভারিম্যানের সামনে প্যাকেট খুলে কাপড় ও রঙ দেখে নিশ্চিত হয়ে মূল্য পরিশোধ করুন। অথবা ধানমন্ডি ৫ ফ্ল্যাগশিপ শোরুমে এসে ট্রায়াল দিন।&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#133827] hover:bg-[#0A1F16] text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-full shadow-md border border-[#D4AF37]/40 active:scale-[0.98]"
              >
                Explore Collections
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121815] border-b-2 border-[#133827] hover:text-[#133827] pb-1 transition-all"
              >
                Read Our Story
                <ArrowRight className="h-3.5 w-3.5 text-[#133827]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
