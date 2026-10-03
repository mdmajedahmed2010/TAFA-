"use client";

/**
 * TAFA (তাফা) — Brand Heritage & Social Proof
 * Showroom: House 42/1, Road 5, Dhanmondi, Dhaka 1209
 * Facebook: https://www.facebook.com/tafatonzehee • 404,000+ Followers
 * "সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির সমাহার"
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Award, Users, ShieldCheck, Crown, Store } from "lucide-react";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export function HeritageCouture() {
  const metrics = [
    {
      icon: Users,
      value: "404,000+",
      label: "Facebook Family",
      sub: "৪০৪,০০০+ শাড়িপ্রেমী আপুদের ভালোবাসায় সক্রিয় কমিউনিটি",
    },
    {
      icon: Award,
      value: "১০০%",
      label: "Premium Quality Sarees",
      sub: "সবচেয়ে রিজনেবল প্রাইসে উৎসব ও ক্যাজুয়াল শাড়ির সমাহার",
    },
    {
      icon: ShieldCheck,
      value: "Open Parcel",
      label: "Inspection Guarantee",
      sub: "ডেলিভারিম্যানের সামনে চেক করে পেমেন্ট করার নিশ্চয়তা",
    },
    {
      icon: Store,
      value: "ধানমন্ডি ৫",
      label: "Flagship Showroom",
      sub: "বাড়ি ৪২/১, রোড ৫, ঢাকা ১২০৯ (১০:৩০am - ৯:০০pm)",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-white border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Visual Collage with Floating Showroom Badge (Col-span 6) */}
          <div className="lg:col-span-6 relative">
            <div className="double-bezel-card aspect-[4/5] max-w-md mx-auto shadow-2xl">
              <div className="double-bezel-inner h-full w-full relative overflow-hidden bg-[#1A1A1A]">
                <Image
                  src={ASSETS.showroomBanner}
                  alt="TAFA Dhanmondi Flagship Showroom Interior"
                  fill
                  quality={90}
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg text-[#1A1A1A]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#133827] flex items-center gap-1.5">
                    <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>TAFA • DHANMONDI FLAGSHIP SHOWROOM</span>
                  </p>
                  <p className="text-xs md:text-sm font-medium leading-snug mt-1.5 font-serif italic text-neutral-800">
                    &ldquo;উৎসবকে সাজাই TAFA’র শাড়িতে — সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির বিশ্বস্ত ঠিকানা।&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Manifesto & Value Grid (Col-span 6) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 mb-3">
                <Crown className="h-3 w-3 text-[#D4AF37]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#133827]">
                  TAFA DHAKA HERITAGE
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight leading-[1.14]">
                কেন ৪০৪,০০০+ নারী তাফা (TAFA)-কে ভালোবাসেন?
              </h2>
              <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed font-medium">
                অনলাইনে শাড়ি কেনাকাটায় সবচেয়ে বড় সুবিধা হলো শতভাগ সততা ও স্বচ্ছতা। তাফা (TAFA)-তে আমরা প্রতিটি শাড়ির আসল ছবি, ভিডিও ও স্পষ্ট মূল্য প্রকাশ করি। আমাদের নিজস্ব সংগ্রহে রয়েছে কালামকারি কটন সিল্ক, ফেস্টিভ টিস্যু কাতান, কোটা ডোরিয়া এবং এক্সক্লুসিভ ডিজাইনার শাড়ির সবচেয়ে রিজনেবল প্রাইসের সম্ভার। আপনার সর্বোচ্চ আস্থার জন্য রয়েছে ডেলিভারিম্যানের সামনে পার্সেল খুলে চেক করে পেমেন্ট করার সুবিধা অথবা ধানমন্ডি ৫ ফ্ল্যাগশিপ শোরুমে সরাসরি এসে পছন্দের সুযোগ।
              </p>
            </div>

            {/* Metrics 2x2 Bento */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 md:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] space-y-1 hover:border-[#D4AF37]/60 transition-all hover:shadow-sm"
                >
                  <div className="size-8 rounded-full bg-white text-[#133827] flex items-center justify-center mb-2 shadow-2xs border border-[#E8DFD3]">
                    <m.icon className="h-4 w-4 text-[#133827]" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-sans">
                    {m.value}
                  </p>
                  <p className="text-xs font-bold text-[#133827] uppercase tracking-wider">
                    {m.label}
                  </p>
                  <p className="text-[10px] text-neutral-500 font-medium">
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Official Channels CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#133827] hover:bg-[#0E291C] text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-[0.18em] shadow-md transition-all active:scale-[0.98]"
              >
                <span>Join 404K+ Facebook Family</span>
                <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.16em] border border-[#E8DFD3] transition-all hover:border-[#D4AF37]"
              >
                <span>About TAFA &amp; Showroom</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
