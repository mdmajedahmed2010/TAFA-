import type { Metadata } from "next";
import { ShieldCheck, Truck, Eye, Phone, AlertTriangle, CheckCircle2, Clock, Sparkles, Store } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Open Parcel & Refund Policy | ${BUSINESS.NAME} (${BUSINESS.NAME_BN})`,
  description:
    "TAFA's signature Open Parcel Inspection Guarantee, Return & Exchange guidelines, and Cash on Delivery terms across Bangladesh.",
};

const policyPoints = [
  {
    icon: Eye,
    title: "Open Parcel Policy — ডেলিভারিতে শাড়ি চেক করার পূর্ণ স্বাধীনতা",
    body: `You have to check products in front of the delivery man. ডেলিভারিম্যানের সামনে পার্সেলের প্যাকেট খুলে শাড়ির কাপড়, প্রিন্ট, রঙ, আঁচল ও ব্লাউজ পিস ভালোভাবে দেখে নিশ্চিত হয়ে নিন। কোনো অসঙ্গতি বা অমিল দেখলে সাথে সাথে আমাদের হটলাইন ${BUSINESS.PHONE} অথবা ${BUSINESS.PHONE_ALT}-এ কল করুন।`,
    type: "warning",
  },
  {
    icon: CheckCircle2,
    title: "১০০% রিজনেবল প্রাইস ও অরিজিনাল কোয়ালিটি",
    body: `${BUSINESS.NAME}-এর প্রতিটি শাড়ি উন্নতমানের কাপড় ও নিখুঁত ফিনিশিংয়ে তৈরি। কালামকারি কটন সিল্ক, ফেস্টিভ টিস্যু কাতান, কোটা ডোরিয়া এবং এক্সক্লুসিভ ডিজাইনার শাড়ির গুণগত মানের ব্যাপারে আমরা শতভাগ প্রতিশ্রুতিবদ্ধ। প্রতিটি শাড়ির মূল্য সম্পূর্ণ ন্যায্য ও সাশ্রয়ী।`,
    type: "success",
  },
  {
    icon: Store,
    title: "ধানমন্ডি ৫ শোরুমে ৩ দিনের এক্সচেঞ্জ সুবিধা",
    body: `অব্যবহৃত, মূল ভাঁজ ও ট্যাগসহ থাকা শাড়ি ডেলিভারি গ্রহণের ৩ দিনের মধ্যে আমাদের ধানমন্ডি ৫ ফ্ল্যাগশিপ শোরুমে (${BUSINESS.ADDRESS}) নিয়ে এসে পছন্দমতো যেকোনো সমমূল্যের শাড়ির সাথে এক্সচেঞ্জ করে নিতে পারবেন।`,
    type: "info",
  },
  {
    icon: Truck,
    title: "ডেলিভারি চার্জ ও ফ্রি ডেলিভারি অফার",
    body: `ঢাকা সিটির ভিতরে ডেলিভারি চার্জ মাত্র ৳${BUSINESS.DELIVERY_CHARGE_INSIDE} (২৪-৪৮ ঘণ্টার মধ্যে)। ঢাকার বাইরে সারা বাংলাদেশে ৳${BUSINESS.DELIVERY_CHARGE_OUTSIDE} (২-৪ কার্যদিবসের মধ্যে)। যেকোনো ২ বা ততোধিক শাড়ি অর্ডারে সারা দেশে ডেলিভারি সম্পূর্ণ ফ্রি! ক্যাশ অন ডেলিভারি (COD) প্রযোজ্য।`,
    type: "info",
  },
  {
    icon: ShieldCheck,
    title: "অন-স্পট রিটার্ন ও সুরক্ষা নীতিমালা",
    body: "ডেলিভারিম্যানের সামনে চেক করার পর যদি পণ্যে কোনো ডিফেক্ট বা রঙের বড় ধরণের অমিল থাকে, তবে আপনি ডেলিভারিম্যানকে উপস্থিত রেখে সাথে সাথে পার্সেল রিটার্ন করতে পারবেন (প্রযোজ্য ক্ষেত্রে কেবল কুরিয়ার চার্জ দিয়ে)। কোনো রাইডার সমস্যা করলে সাথে সাথে আমাদের হটলাইনে কল দিন।",
    type: "warning",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Page Header */}
      <section className="bg-[#133827] py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#133827] -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#D4AF37] translate-x-1/2 translate-y-1/2 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>TRANSPARENCY &amp; TRUST</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-serif">
            Open Parcel &amp; Refund Policy
          </h1>
          <p className="text-[#FAF7F2] text-sm md:text-base leading-relaxed">
            {BUSINESS.NAME} ({BUSINESS.NAME_BN})-এ কেনাকাটায় নিশ্চিন্ত থাকুন — আমাদের ওপেন পার্সেল ও রিটার্ন নীতিমালা।
          </p>
        </div>
      </section>

      {/* Main Alert */}
      <section className="bg-[#0E291C] py-4 px-6 border-t border-[#D4AF37]/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center flex-wrap text-center">
            <CheckCircle2 className="h-5 w-5 text-[#D4AF37] shrink-0" />
            <p className="text-[#FAF7F2] text-sm font-bold tracking-wide">
              ১০০% সততা ও ওপেন পার্সেল চেকিং — পার্সেল খুলে দেখে বুঝে নিন আপনার পছন্দের প্রিমিয়াম শাড়ি
            </p>
            <CheckCircle2 className="h-5 w-5 text-[#D4AF37] shrink-0" />
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Policy Cards */}
          <div className="space-y-5 mb-14">
            {policyPoints.map((point, idx) => (
              <div
                key={point.title}
                className={`flex items-start gap-5 p-6 rounded-2xl border shadow-xs ${
                  point.type === "warning"
                    ? "bg-amber-50/80 border-amber-200 border-l-4 border-l-amber-500"
                    : point.type === "success"
                    ? "bg-emerald-50/80 border-emerald-200 border-l-4 border-l-[#133827]"
                    : "bg-white border-[#E8DFD5] border-l-4 border-l-[#133827]"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${
                    point.type === "warning"
                      ? "bg-amber-100 text-amber-800"
                      : point.type === "success"
                      ? "bg-emerald-100 text-[#133827]"
                      : "bg-[#FAF7F2] text-[#1A1A1A] border border-[#E8DFD5]"
                  }`}
                >
                  <point.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400 font-mono font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className={`text-sm font-bold uppercase tracking-wide ${
                        point.type === "warning"
                          ? "text-amber-900"
                          : point.type === "success"
                          ? "text-[#133827]"
                          : "text-[#1A1A1A]"
                      }`}
                    >
                      {point.title}
                    </h2>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-medium">{point.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact for Help */}
          <div className="text-center space-y-4 bg-white rounded-3xl p-8 border border-[#E8DFD5] shadow-sm">
            <h3 className="text-lg font-bold text-[#1A1A1A] font-serif">
              কোনো প্রশ্ন বা ডেলিভারি সহায়তা প্রয়োজন?
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto">
              আমাদের ডেডিকেটেড কাস্টমার কেয়ার টিম সরাসরি ফোন বা হোয়াটসঅ্যাপে আপনাকে তাৎক্ষণিক সাহায্য করতে প্রস্তুত।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-sm"
              >
                WhatsApp ({BUSINESS.PHONE_ALT})
              </a>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 border-2 border-[#133827] text-[#133827] text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#133827] hover:text-white transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>Call Hotline ({BUSINESS.PHONE})</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
