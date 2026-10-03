"use client";

/**
 * TAFA (তাফা) — Community Stories & Verified Customer Love
 * Genuine reviews and Open Parcel satisfaction from 404,000+ sisters across Bangladesh.
 * Official Facebook: https://www.facebook.com/tafatonzehee
 */

import { useState } from "react";
import Image from "next/image";
import { Star, CheckCircle2, Heart } from "lucide-react";
import { ASSETS } from "@/lib/demo-data";

interface StoryHighlight {
  id: string;
  name: string;
  image: string;
  location: string;
  quote: string;
  product: string;
  rating: number;
}

const STORIES: StoryHighlight[] = [
  {
    id: "story-1",
    name: "Nusrat Jahan",
    location: "Dhanmondi, Dhaka",
    image: ASSETS.tissueKatanGold,
    quote:
      "TAFA-র ধানমন্ডি ৫ শোরুমে (বাড়ি নং ৪২/১) গিয়ে এই গোল্ডেন ফেস্টিভ টিস্যু কাতান শাড়িটি কিনেছিলাম। এত চমৎকার ফিনিশিং ও প্রিমিয়াম লুক কিন্তু দাম মাত্র ৩,৪৫০ টাকা! সবচেয়ে রিজনেবল প্রাইসে এমন গর্জিয়াস শাড়ি আসলেই বিরল।",
    product: "Festive Pure Gold Tissue Katan (৳3,450)",
    rating: 5,
  },
  {
    id: "story-2",
    name: "Sumaiya Akhter",
    location: "Uttara, Dhaka",
    image: ASSETS.royalBlueFloral,
    quote:
      "অনলাইনে রয়্যাল ব্লু ফ্লোরাল সিল্ক শাড়িটি অর্ডার করেছিলাম। ডেলিভারিম্যানের সামনে প্যাকেট খুলে চেক করার পরেই পেমেন্ট করেছি। কাপড়ের কোয়ালিটি ও শাড়ির ফল এক কথায় দারুণ! TAFA-র সার্ভিস সত্যি প্রশংসনীয়।",
    product: "Royal Sapphire Blue Floral Silk Saree (৳2,650)",
    rating: 5,
  },
  {
    id: "story-3",
    name: "Farhana Chowdhury",
    location: "Panchlaish, Chattogram",
    image: ASSETS.kalamkariBlack,
    quote:
      "কালামকারি কটন সিল্ক শাড়িটি মাত্র ২ দিনে চিটাগংয়ে হোম ডেলিভারি পেয়েছি। হাতে আঁকা ময়ূর ও হাতির নকশা আর কনট্রাস্ট আঁচলটি অসাধারণ। উৎসবের জন্য এক কথায় নিখুঁত!",
    product: "Midnight Black Kalamkari Saree (৳1,850)",
    rating: 5,
  },
  {
    id: "story-4",
    name: "Tahmina Begum",
    location: "Sylhet Sadar, Sylhet",
    image: ASSETS.kotaTealPeacock,
    quote:
      "পিকক টিল গ্রিন কোটা ডোরিয়া শাড়িটি উপহার হিসেবে পেয়েছিলাম। কাপড়ের টেক্সচার খুব নরম ও আরামদায়ক। দাম ও মানের তুলনা করলে শাড়িতে TAFA সবসময় সেরা।",
    product: "Peacock Teal Kota Doria Saree (৳1,950)",
    rating: 5,
  },
];

export function CommunityStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStory = STORIES[activeIdx] ?? STORIES[0]!;

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD5] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 mb-3 shadow-xs">
            <Heart className="h-3 w-3 text-[#133827] fill-[#133827]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#133827]">
              ৪০৪,০০০+ আপুদের ভালোবাসা ও রিভিউ
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Loved By 404,000+ Saree Lovers
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            সারাদেশের আপুদের বাস্তব অভিজ্ঞতা, ওপেন পার্সেল আনবক্সিং সন্তুষ্টি এবং রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির নির্ভরযোগ্য ব্র্যান্ড তাফা (TAFA)।
          </p>

          {/* Interactive Story Circles */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8 overflow-x-auto pb-2">
            {STORIES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveIdx(idx)}
                className="flex flex-col items-center gap-2 group/avatar cursor-pointer"
              >
                <div
                  className={`size-16 sm:size-20 rounded-full p-1 transition-all duration-300 ${
                    idx === activeIdx
                      ? "ring-4 ring-[#D4AF37] scale-110 shadow-lg bg-[#133827]"
                      : "ring-2 ring-[#E8DFD5] opacity-70 group-hover/avatar:opacity-100 group-hover/avatar:scale-105"
                  }`}
                >
                  <div className="relative size-full rounded-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className={`text-xs font-bold transition-colors ${idx === activeIdx ? "text-[#133827]" : "text-neutral-500"}`}>
                  {s.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative size-28 sm:size-36 rounded-2xl overflow-hidden shrink-0 shadow-md border border-[#D4AF37]/40 bg-neutral-900">
              <Image
                src={activeStory.image}
                alt={activeStory.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center sm:text-left space-y-3">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(activeStory.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-sm md:text-base text-neutral-700 italic leading-relaxed font-serif">
                &ldquo;{activeStory.quote}&rdquo;
              </p>

              <div className="pt-2 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] font-heading flex items-center justify-center sm:justify-start gap-1.5">
                    {activeStory.name}
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 inline" />
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-medium">
                    {activeStory.location} • Verified Buyer
                  </p>
                </div>

                <span className="text-[11px] font-bold text-[#133827] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#D4AF37]/40">
                  {activeStory.product}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
