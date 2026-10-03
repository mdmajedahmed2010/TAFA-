"use client";

/**
 * TAFA | Dhaka (তাফা) — Brand Story Component
 * Authentic Sarees, Kalamkari, Tissue Katan & Luxury Drape
 * House 42/1, Road No 5, Dhanmondi, Dhaka 1209
 */

import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export function BrandStory() {
  return (
    <section className="bg-[#FAF7F2] border-t border-[#D4AF37]/20 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-md group reveal">
            <Image
              src={ASSETS.tissueKatanGold}
              alt="TAFA | Dhaka — Authentic Sarees & Luxury Partywear"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Accent overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.2),transparent_50%)]" />
            {/* Heritage badge */}
            <div className="absolute bottom-5 left-5 bg-[#133827]/90 backdrop-blur-sm border border-[#D4AF37]/40 px-4 py-2.5 rounded-xl">
              <p className="text-[#D4AF37] text-[9.5px] uppercase tracking-[0.25em] font-bold">{BUSINESS.NAME}</p>
              <p className="text-white text-xs font-semibold mt-0.5">{BUSINESS.FOLLOWERS_COUNT} Facebook Community • Dhanmondi, Dhaka</p>
            </div>
          </div>

          {/* Right Side: Brand Narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 reveal [transition-delay:200ms]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#133827] font-bold">
              আমাদের গল্প • Our Heritage
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#121815] font-serif">
              Authentic Sarees &amp; Festive Drape,
              <br />
              <span className="italic font-normal text-[#133827]">{BUSINESS.TAGLINE}</span>
            </h2>

            <div className="border-l-4 border-[#133827] pl-4 py-1 text-[#133827] italic text-sm">
              &ldquo;{BUSINESS.NAME} ({BUSINESS.NAME_BN}) — সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির সমাহার।&rdquo;
            </div>

            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                {BUSINESS.NAME} ({BUSINESS.NAME_BN}) আজ বাংলাদেশের ৪০৪,০০০+ নারীর পরম আস্থার ব্র্যান্ড। ঐতিহ্যবাহী কালামকারী সুতি শাড়ি, জমকালো টিস্যু কাতান, কোটা ডোরিয়া এবং উৎসব স্পেশাল টিস্যু সিল্ক শাড়ির অনন্য কালেকশন নিয়ে আমরা কাজ করছি।
              </p>
              <p>
                অনলাইনে অর্ডার করা প্রতিটি শাড়িতে রয়েছে ডেলিভারিম্যানের সামনে ওপেন পার্সেল চেক করার পূর্ণ সুবিধা। এছাড়াও ঢাকার ধানমন্ডি ৫, বাড়ি ৪২/১ এ অবস্থিত আমাদের ফ্ল্যাগশিপ শোরুমে এসে সরাসরি শাড়ি দেখে কেনার আন্তরিক আমন্ত্রণ।
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#133827] text-[#D4AF37] text-xs font-bold uppercase tracking-[0.16em] rounded-full hover:bg-[#0A1F16] transition-all shadow-md"
              >
                <span>Read Full Story</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
