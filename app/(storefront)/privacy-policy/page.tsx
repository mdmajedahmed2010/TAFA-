/**
 * TAFA | Dhaka (তাফা) — Privacy Policy
 * Online & Showroom Boutique for Premium Sarees in Bangladesh
 * Flagship Showroom: House 42/1, Road No 5, Dhanmondi, Dhaka 1209
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS.NAME} (${BUSINESS.NAME_BN})`,
  description:
    "TAFA Privacy Policy: আমরা আপনার ব্যক্তিগত তথ্যের সর্বোচ্চ গোপনীয়তা ও সুরক্ষায় প্রতিশ্রুতিবদ্ধ।",
};

const privacySections = [
  {
    id: "01",
    title: "আমরা কোন তথ্য সংগ্রহ করি?",
    content: `আপনি যখন আমাদের ওয়েবসাইট, WhatsApp (${BUSINESS.PHONE_ALT}) বা Facebook Page-এ শাড়ি অর্ডার করেন, তখন আমরা কেবল প্রয়োজনীয় তথ্য গ্রহণ করি:
• আপনার পূর্ণ নাম
• মোবাইল / যোগাযোগ নম্বর
• ডেলিভারি ঠিকানা (ঢাকা অথবা দেশের অন্যান্য জেলা)
• ইমেইল এড্রেস (যদি প্রদান করেন)

আমরা কোনো Payment Card তথ্য, পিন নম্বর বা সংবেদনশীল ব্যাংকিং ডাটা সংরক্ষণ করি না। ক্যাশ অন ডেলিভারি (COD) পদ্ধতিতে পার্সেল হাতে পেয়ে চেক করে মূল্য পরিশোধ করবেন।`,
  },
  {
    id: "02",
    title: "আমরা এই তথ্য কীভাবে ব্যবহার করি?",
    content: `আপনার প্রদত্ত তথ্য শুধুমাত্র নিম্নলিখিত উদ্দেশ্যে ব্যবহৃত হয়:
• শাড়ি অর্ডার নিশ্চিতকরণ ও প্রসেসিং
• কুরিয়ার ডেলিভারি কোঅর্ডিনেশন (Steadfast Courier / Pathao)
• কাস্টমার সাপোর্ট ও পার্সেল ট্র্যাকিং নোটিফিকেশন প্রদান
• নতুন কালেকশন ড্রপ বা বিশেষ অফার আপডেট (সম্মতিক্রমে)`,
  },
  {
    id: "03",
    title: "তৃতীয় পক্ষের সাথে তথ্য শেয়ারিং নীতি",
    content: `আমরা আপনার ব্যক্তিগত তথ্য কখনো কোনো তৃতীয় পক্ষের কাছে বিক্রি, ভাড়া বা বাণিজ্যিক প্রচারণামূলক উদ্দেশ্যে হস্তান্তর করি না।

শুধুমাত্র ডেলিভারি পার্টনার (কুরিয়ার প্রতিনিধি) আপনার নাম, ঠিকানা ও ফোন নম্বর দেখতে পান — যাতে তারা নিরাপদে আপনার ঠিকানায় ওপেন পার্সেল পৌঁছে দিতে পারেন।`,
  },
  {
    id: "04",
    title: "Facebook Messenger & WhatsApp যোগাযোগ",
    content: `Facebook Messenger বা WhatsApp-এর মাধ্যমে প্রেরিত প্রতিটি বার্তা, শাড়ির ছবি ও অর্ডার ডিটেইলস সম্পূর্ণ সুরক্ষিত এবং শুধুমাত্র অর্ডার সমন্বয়ের কাজে ব্যবহৃত হয়।`,
  },
  {
    id: "05",
    title: "তথ্যের সর্বোচ্চ নিরাপত্তা ও এনক্রিপশন",
    content: `আমাদের প্ল্যাটফর্মে আধুনিক SSL এনক্রিপশন ব্যবহৃত হয়। গ্রাহকের সংরক্ষিত তথ্য সুরক্ষিত ডাটাবেজে থাকে এবং শুধুমাত্র অনুমোদিত টিম মেম্বারদের দ্বারা পরিচালিত হয়।`,
  },
  {
    id: "06",
    title: "আপনার অধিকার ও আমাদের সাথে যোগাযোগ",
    content: `আপনার সংরক্ষিত তথ্য সংশোধন বা ডিলিট করার পূর্ণ অধিকার রয়েছে। যেকোনো তথ্যের জন্য আমাদের হটলাইন বা ইমেইলে যোগাযোগ করতে পারেন:

ফ্ল্যাগশিপ শোরুম: ${BUSINESS.ADDRESS}
হটলাইন ও WhatsApp: ${BUSINESS.PHONE} / ${BUSINESS.PHONE_ALT}
ইমেইল: ${BUSINESS.EMAIL}`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Page Header */}
      <section className="bg-[#133827] py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#133827] -translate-x-1/2 translate-y-1/2 blur-2xl" />
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#D4AF37] translate-x-1/2 -translate-y-1/2 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>DATA PROTECTION</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-serif">
            Privacy Policy
          </h1>
          <p className="text-[#FAF7F2]/90 text-sm leading-relaxed">
            {BUSINESS.NAME} ({BUSINESS.NAME_BN}) আপনার ব্যক্তিগত তথ্যের গোপনীয়তা ও নিরাপত্তাকে সর্বোচ্চ সম্মান জানায়।
          </p>
          <p className="text-[#D4AF37] text-xs font-mono font-bold">সর্বশেষ আপডেট: অক্টোবর ২০২৬</p>
        </div>
      </section>

      {/* Commitment Strip */}
      <section className="bg-[#0A1F16] py-4 px-6 text-center border-t border-[#D4AF37]/30">
        <p className="text-[#FAF7F2] text-sm font-semibold tracking-wide">
          ✦ আপনার তথ্য কখনোই তৃতীয় পক্ষের কাছে বিক্রি বা অননুমোদিত শেয়ার করা হয় না ✦
        </p>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Intro Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DFD5] shadow-xs mb-8 space-y-3">
            <div className="flex items-center gap-3 text-[#133827]">
              <ShieldCheck className="h-6 w-6 text-[#D4AF37]" />
              <h2 className="text-lg font-bold font-serif text-[#121815]">আমাদের গোপনীয়তা অঙ্গীকার</h2>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed font-medium">
              তাফা ({BUSINESS.NAME})-তে আপনার ব্যক্তিগত তথ্যের নিরাপত্তা আমাদের সর্বোচ্চ অগ্রাধিকার। গ্রাহকের আস্থা বজায় রাখতে আমরা শতভাগ দায়িত্বশীলতার সাথে তথ্য সংরক্ষণ ও পরিচালনা করি।
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {privacySections.map((sec) => (
              <div key={sec.id} className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#133827] bg-emerald-50 px-2.5 py-1 rounded-lg border border-[#133827]/20">
                    {sec.id}
                  </span>
                  <h3 className="font-bold text-base text-[#121815] font-serif">{sec.title}</h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line font-medium">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          {/* Help Box */}
          <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs space-y-2">
            <p className="text-sm font-bold text-[#121815]">কোনো প্রশ্ন বা পরামর্শ থাকলে সরাসরি যোগাযোগ করুন:</p>
            <p className="text-xs text-neutral-600">
              হটলাইন: <a href={`tel:${BUSINESS.PHONE}`} className="text-[#133827] font-bold hover:underline">{BUSINESS.PHONE}</a> | হোয়াটসঅ্যাপ: <a href={BUSINESS.WHATSAPP_LINK} className="text-emerald-600 font-bold hover:underline">{BUSINESS.PHONE_ALT}</a> | ইমেইল: <a href={`mailto:${BUSINESS.EMAIL}`} className="text-[#133827] font-bold hover:underline">{BUSINESS.EMAIL}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
