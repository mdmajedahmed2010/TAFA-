/**
 * TAFA | Dhaka (তাফা) — 404 Not Found Page
 * Premium Quality Sarees in Bangladesh
 * Showroom: House 42/1, Road No 5, Dhanmondi, Dhaka 1209
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, Home } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#FAF7F2]">
      <div className="text-center space-y-8 max-w-lg">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <div className="relative size-24 rounded-full overflow-hidden ring-4 ring-[#D4AF37]/40 shadow-xl border-2 border-white">
            <Image
              src="/tafa-assets/logo.png"
              alt={BUSINESS.NAME}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 404 Text */}
        <div className="space-y-3">
          <p className="text-8xl md:text-9xl font-bold text-[#133827]/10 leading-none font-serif">404</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#121815] font-serif">
            পেজটি পাওয়া যাচ্ছে না
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto font-medium">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে বা আর নেই। {BUSINESS.NAME}-এর প্রিমিয়াম কোয়ালিটি শাড়ির কালেকশন দেখতে হোমপেজে ফিরে যান।
          </p>
        </div>

        {/* Brand Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
          <p className="text-[11px] text-[#133827] font-bold tracking-wide uppercase">
            {BUSINESS.NAME} — {BUSINESS.TAGLINE}
          </p>
          <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#133827] text-[#D4AF37] font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#0A1F16] transition-all shadow-md active:scale-[0.98] border border-[#D4AF37]/40"
          >
            <Home className="h-4 w-4 text-[#D4AF37]" />
            <span>হোম পেজে যান</span>
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-[#E8DFD5] bg-white text-[#121815] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#133827]/5 hover:border-[#133827] transition-all shadow-xs"
          >
            কালেকশন দেখুন
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-4 border-t border-[#E8DFD5]">
          <p className="text-xs text-neutral-500 mb-3 font-medium">জনপ্রিয় শাড়ি কালেকশন:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-[#121815]">
            <Link href="/collections/kalamkari-cotton" className="hover:underline hover:text-[#133827]">
              কালামকারী কটন শাড়ি
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/collections/tissue-katan-silk" className="hover:underline hover:text-[#133827]">
              টিস্যু কাতান সিল্ক
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/collections/kota-doria" className="hover:underline hover:text-[#133827]">
              কোটা ডোরিয়া শাড়ি
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/collections/tissue-silk" className="hover:underline hover:text-[#133827]">
              টিস্যু সিল্ক উৎসব কালেকশন
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/contact" className="hover:underline hover:text-[#133827]">
              ধানমন্ডি শোরুম ও যোগাযোগ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
