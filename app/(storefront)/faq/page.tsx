"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  CreditCard, 
  RefreshCcw,
  Store
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface FAQItem {
  question: string;
  answer: string;
  category: "saree-quality" | "saree-care" | "delivery" | "payment" | "showroom";
}

const FAQS: FAQItem[] = [
  {
    category: "saree-quality",
    question: "তাফা (TAFA | Dhaka)-র শাড়িগুলোর কোয়ালিটি ও ফেব্রিক কেমন?",
    answer: "তাফা সবসময় প্রিমিয়াম কোয়ালিটির অথেনটিক শাড়ির নিশ্চয়তা দেয়। আমাদের প্রতিটি শাড়ি—হোক তা কালামকারী সুতি, টিস্যু কাতান, কোটা ডোরিয়া, টিস্যু সিল্ক কিংবা এক্সক্লুসিভ অর্গানজা—উচ্চমানের সুতা ও নিপুণ কারুকাজে তৈরি। আমাদের শাড়িগুলো হালকা, গায়ের সাথে চমৎকারভাবে ড্র্যাপ হয় এবং উৎসব-অনুষ্ঠানে অত্যন্ত মার্জিত ও গর্জিয়াস লুক এনে দেয়।",
  },
  {
    category: "saree-quality",
    question: "শাড়ির দৈর্ঘ্য কত এবং সাথে কি ব্লাউজ পিস থাকে?",
    answer: "আমাদের প্রতিটি শাড়ির স্ট্যান্ডার্ড পরিমাপ পূর্ণ ১২ হাত (প্রায় ৫.৫ মিটার) এবং সাথে ম্যাচিং ৮০ সেমি বা তার অধিক ব্লাউজ পিস সংযুক্ত থাকে। ফলে আপনি নিজের পছন্দমতো ফিটিংস ও স্টাইলে ব্লাউজ ডিজাইন করে নিতে পারবেন।",
  },
  {
    category: "saree-quality",
    question: "শাড়ির দাম কি ফিক্সড নাকি ডিসকাউন্ট পাওয়া যাবে?",
    answer: "তাফা সব সময় 'সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ি' পৌঁছে দেওয়ার নীতিতে বিশ্বাসী। প্রতিটি শাড়ির সর্বোচ্চ যৌক্তিক মূল্য ট্যাগে ও ওয়েবসাইটে মুদ্রিত থাকে (কোনো হিডেন চার্জ নেই)। বিশেষ উৎসব ও ক্যাম্পেইনে প্রোমোকোড (যেমনঃ TAFA10) ব্যবহার করে বিশেষ ছাড় উপভোগ করতে পারেন।",
  },
  {
    category: "delivery",
    question: "ওপেন পার্সেল (Open Parcel Guarantee) কী এবং ডেলিভারিতে আমি কি শাড়ি খুলে দেখতে পারব?",
    answer: "অবশ্যই! তাফা-র অন্যতম প্রধান পলিসি হলো ১০০% ওপেন পার্সেল সুবিধা। ডেলিভারি রাইডার যখন পার্সেল নিয়ে আসবেন, আপনি ডেলিভারি ম্যানের উপস্থিতিতেই প্যাকেট খুলে শাড়ির ফেব্রিক, কালার, জরির কাজ ও ব্লাউজ পিস ভালো করে দেখে নিতে পারবেন। শতভাগ সন্তুষ্ট হওয়ার পর ক্যাশ পেমেন্ট করে পার্সেল রিসিভ করবেন।",
  },
  {
    category: "delivery",
    question: "ডেলিভারি চার্জ কত এবং ফ্রি ডেলিভারি পাওয়ার কোনো শর্ত আছে কি?",
    answer: `ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৳${BUSINESS.DELIVERY_CHARGE_INSIDE} (১–২ কার্যদিবস) এবং ঢাকার বাইরে সমগ্র বাংলাদেশের যেকোনো জেলা বা উপজেলায় মাত্র ৳${BUSINESS.DELIVERY_CHARGE_OUTSIDE} (২–৪ কার্যদিবস)। দারুণ খবর: একসাথে যেকোনো ২টি বা তার বেশি শাড়ি অর্ডার করলেই সারা বাংলাদেশে ডেলিভারি সম্পূর্ণ ফ্রি!`,
  },
  {
    category: "payment",
    question: "পেমেন্ট কীভাবে করব? ক্যাশ অন ডেলিভারি (COD) সুবিধা আছে কি?",
    answer: "সারা বাংলাদেশে আমাদের ১০০% ক্যাশ অন ডেলিভারি (Cash on Delivery) সুবিধা রয়েছে। ডেলিভারিম্যানের সামনে শাড়ি চেক করে নগদ টাকায় মূল্য পরিশোধ করবেন। এছাড়াও আপনি চাইলে bKash বা Nagad-এর মাধ্যমে ডিজিটাল পেমেন্টও করতে পারেন।",
  },
  {
    category: "showroom",
    question: "আপনাদের ফিজিক্যাল শোরুম কোথায়? সরাসরি গিয়ে দেখে কেনা যাবে কি?",
    answer: `হ্যাঁ! আমাদের ফ্ল্যাগশিপ শোরুম ঢাকার প্রাণকেন্দ্র ধানমন্ডিতে অবস্থিত: ${BUSINESS.ADDRESS} (ধানমন্ডি ৫, বাড়ি নং ৪২/১, ঢাকা ১২০৯)। প্রতিদিন সকাল ১০:৩০টা থেকে রাত ৯:০০টা পর্যন্ত শোরুম খোলা থাকে। আপনি সরাসরি শোরুমে এসে ট্রায়াল দিয়ে শাড়ির ফেব্রিক ও রঙ মিলিয়ে নিশ্চিন্তে কেনাকাটা করতে পারবেন।`,
  },
  {
    category: "saree-care",
    question: "টিস্যু কাতান, টিস্যু সিল্ক ও কালামকারী শাড়ির যত্ন ও ওয়াশের সঠিক নিয়ম কী?",
    answer: "টিস্যু কাতান, কোটা ডোরিয়া ও গর্জিয়াস সিল্ক শাড়িগুলোর দীর্ঘস্থায়িত্ব বজায় রাখতে ড্রাই ক্লিন (Dry Clean Only) করার পরামর্শ দেওয়া হয়। সুতি কালামকারী শাড়ি মৃদু শ্যাম্পু বা ওয়াটার ওয়াশ করা যায় তবে কোনোভাবেই কড়া রোদে সরাসরি শুকানো উচিত নয়। শাড়িগুলো সংরক্ষণের সময় সুতি কভারে মুড়িয়ে ছায়াযুক্ত শুষ্ক স্থানে রাখুন এবং মাঝে মাঝে ভাঁজ বদলে দিন।",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = activeCategory === "all" 
    ? FAQS 
    : FAQS.filter(f => f.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#133827] text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.2),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif">
            সাধারণ জিজ্ঞাসা ও উত্তর (FAQ)
          </h1>
          <p className="text-[#FAF7F2]/90 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {BUSINESS.NAME} ({BUSINESS.NAME_BN})-এর শাড়ি নির্বাচন, ওপেন পার্সেল পলিসি, ধানমন্ডি শোরুম ভিজিট ও ওয়াশ কেয়ার সম্পর্কিত আপনার প্রতিটি প্রশ্নের স্পষ্ট উত্তর।
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-6 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-2 shadow-md border border-[#E8DFD5] flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: "all", label: "সব প্রশ্ন (All)" },
            { id: "saree-quality", label: "শাড়ির কোয়ালিটি ও ফেব্রিক" },
            { id: "delivery", label: "ডেলিভারি ও ওপেন পার্সেল" },
            { id: "showroom", label: "ধানমন্ডি শোরুম তথ্য" },
            { id: "saree-care", label: "শাড়ির যত্ন ও ওয়াশ" },
            { id: "payment", label: "পেমেন্ট ও অর্ডার পদ্ধতি" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-[#133827] text-[#D4AF37] shadow-xs"
                  : "text-[#121815] hover:bg-[#133827]/5 hover:text-[#133827]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#D4AF37] shadow-md ring-1 ring-[#D4AF37]/30"
                    : "bg-white/80 border-[#E8DFD5] hover:border-[#D4AF37]/50"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`size-8 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-[#133827] text-[#D4AF37]" : "bg-emerald-50 text-[#133827]"
                    }`}>
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-sm md:text-base text-[#121815] font-serif">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#133827]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFD5] font-medium text-[#121815]/90">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="max-w-3xl mx-auto mt-14 bg-gradient-to-r from-[#133827] to-[#0A1F16] text-white rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-xl border border-[#D4AF37]/30">
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold font-serif">
              আরও কোনো শাড়ি সম্পর্কে জানতে চান?
            </h3>
            <p className="text-neutral-200 text-sm max-w-lg mx-auto leading-relaxed">
              তাফা (TAFA | Dhaka)-র কাস্টমার রিলেশন টিম ও ধানমন্ডি শোরুম প্রতিনিধি আপনাকে সহায়তা করতে সবসময় প্রস্তুত। সরাসরি কল, হোয়াটসঅ্যাপ বা ফেসবুক পেজে যোগাযোগ করুন।
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-7 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp ({BUSINESS.PHONE_ALT})</span>
              </a>
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-7 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-md"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook ({BUSINESS.FOLLOWERS_COUNT} কমিউনিটি)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
