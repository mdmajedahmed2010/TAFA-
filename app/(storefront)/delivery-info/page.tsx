import { Metadata } from "next";
import Link from "next/link";
import { 
  Truck, 
  Eye, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Phone, 
  CreditCard, 
  AlertCircle, 
  Sparkles,
  Gift,
  Store
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Delivery & Open Parcel Policy | ${BUSINESS.NAME} (${BUSINESS.NAME_BN})`,
  description:
    "TAFA delivery charges (Inside Dhaka ৳80, Outside Dhaka ৳150, Free Delivery on 2+ sarees), shipping timelines, and our signature Open Parcel inspection guarantee across Bangladesh.",
};

export default function DeliveryInfoPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#133827] text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>NATIONWIDE DELIVERY & OPEN PARCEL POLICY</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif">
            Delivery &amp; Open Parcel Guide
          </h1>
          <p className="text-[#FAF7F2] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            সারা বাংলাদেশে দ্রুততম হোম ডেলিভারি এবং পার্সেল খুলে শাড়ির কাপড় ও নিখুঁত ফিনিশিং দেখে নেওয়ার শতভাগ নিশ্চিন্ত সুবিধা।
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Free Shipping Banner */}
        <div className="bg-gradient-to-r from-[#D4AF37]/20 via-[#133827]/10 to-[#D4AF37]/20 border border-[#D4AF37] rounded-2xl p-4 md:p-6 text-center space-y-1">
          <div className="inline-flex items-center gap-2 text-[#133827] font-bold text-sm md:text-base">
            <Gift className="h-5 w-5 text-[#D4AF37]" />
            <span>স্পেশাল অফার: যেকোনো ২ বা ততোধিক শাড়ি অর্ডারে সারা দেশে ডেলিভারি সম্পূর্ণ ফ্রি!</span>
          </div>
          <p className="text-xs text-neutral-600">
            অটোমেটিক চেকআউটে ফ্রি ডেলিভারি ডিসকাউন্ট কার্যকর হবে অথবা কুপন TAFA10 ব্যবহার করুন।
          </p>
        </div>

        {/* Delivery Rates Grid */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#133827] font-bold">
              চার্জ ও সময়সূচী
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-serif">
              Delivery Coverage &amp; Rates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs relative overflow-hidden">
              <div className="w-2 h-full bg-[#133827] absolute left-0 top-0" />
              <div className="size-11 rounded-full bg-emerald-50 text-[#133827] flex items-center justify-center mb-4 border border-[#133827]/20">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-[#1A1A1A] mb-1 font-serif">ঢাকা সিটির ভিতরে</h3>
              <p className="text-3xl font-bold text-[#133827] mb-2">৳{BUSINESS.DELIVERY_CHARGE_INSIDE}</p>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#D4AF37]" />
                  <span>২৪ – ৪৮ ঘণ্টার মধ্যে এক্সপ্রেস ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>ক্যাশ অন ডেলিভারি (COD) প্রযোজ্য</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#133827]" />
                  <span>ওপেন পার্সেল চেকিং শতভাগ উন্মুক্ত</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37] shadow-md relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-[#D4AF37] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                All 64 Districts
              </div>
              <div className="size-11 rounded-full bg-amber-50 text-[#D4AF37] flex items-center justify-center mb-4 border border-[#D4AF37]/30">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-[#1A1A1A] mb-1 font-serif">ঢাকার বাইরে সারাদেশে</h3>
              <p className="text-3xl font-bold text-[#1A1A1A] mb-2">৳{BUSINESS.DELIVERY_CHARGE_OUTSIDE}</p>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#D4AF37]" />
                  <span>২ – ৪ কার্যদিবসের মধ্যে হোম ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>৬৪ জেলা ও উপজেলা পর্যায়ে সরাসরি হোম ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#133827]" />
                  <span>ডেলিভারিম্যানের সামনে ওপেন পার্সেল চেক</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs relative overflow-hidden">
              <div className="w-2 h-full bg-[#0E291C] absolute left-0 top-0" />
              <div className="size-11 rounded-full bg-neutral-100 text-[#1A1A1A] flex items-center justify-center mb-4 border border-neutral-200">
                <Store className="h-5 w-5 text-[#133827]" />
              </div>
              <h3 className="font-bold text-lg text-[#1A1A1A] mb-1 font-serif">শোরুম পিকআপ ও ট্রায়াল</h3>
              <p className="text-sm font-bold text-[#133827] mb-2">ধানমন্ডি ৫, ঢাকা ১২০৯</p>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>সরাসরি এসে শাড়ি দেখে কেনার সুযোগ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>প্রতিদিন সকাল ১০:৩০ থেকে রাত ৯:০০</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>কোনো ডেলিভারি ফি নেই (বিনামূল্যে পিকআপ)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Open Parcel Inspection */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8DFD5] shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#133827] text-xs font-bold uppercase tracking-wider">
              <Eye className="h-4 w-4" />
              <span>How Open Parcel Works</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-serif">
              ওপেন পার্সেল চেক করার ৪টি সহজ ধাপ
            </h2>
            <p className="text-neutral-600 text-xs md:text-sm">
              {BUSINESS.NAME}-এ শাড়ি কেনাকাটায় নেই কোনো সংশয়! পার্সেল নেওয়ার সময় ধাপগুলো অনুসরণ করুন:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "০১",
                title: "কুরিয়ারের আগমন",
                desc: "ডেলিভারিম্যান আপনার ঠিকানায় পার্সেল নিয়ে পৌঁছালে তাকে ওপেন পার্সেল চেকের কথা বলুন।",
              },
              {
                step: "০২",
                title: "প্যাকেট খোলা",
                desc: "ডেলিভারিম্যানের উপস্থিতিতে সাবধানে প্যাকেটের সিল খুলে শাড়িটি বের করুন।",
              },
              {
                step: "০৩",
                title: "শাড়ি পরখ করা",
                desc: "শাড়ির রঙ, ফেব্রিক, আঁচলের কাজ, পাড় ও ব্লাউজ পিস ভালো করে মিলিয়ে নিন।",
              },
              {
                step: "০৪",
                title: "পেমেন্ট ও গ্রহণ",
                desc: "সবকিছু ঠিক থাকলে ক্যাশ অন ডেলিভারি মূল্য বুঝিয়ে দিয়ে শাড়িটি পরম আনন্দে গ্রহণ করুন।",
              },
            ].map((s) => (
              <div key={s.step} className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E8DFD5] space-y-2">
                <span className="text-2xl font-bold text-[#133827] font-mono block">
                  {s.step}
                </span>
                <h3 className="font-bold text-sm text-[#1A1A1A] font-serif">{s.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Alert Notice */}
          <div className="bg-amber-50 border-l-4 border-[#D4AF37] p-4 rounded-xl flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-800 leading-relaxed font-medium">
              <strong>জরুরি সতর্কতা:</strong> যদি কোনো কুরিয়ার রাইডার প্যাকেট খুলতে আপত্তি জানায়, তবে রাইডারকে উপস্থিত রেখেই আমাদের অফিসিয়াল হটলাইন <strong>{BUSINESS.PHONE}</strong> অথবা <strong>{BUSINESS.PHONE_ALT}</strong>-এ কল দিন। আমাদের কাস্টমার সার্ভিস টিম তাৎক্ষণিক কুরিয়ারের সাথে যোগাযোগ করে সমাধান করবে।
            </p>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-[#133827] text-white rounded-3xl p-8 md:p-10 border border-[#D4AF37]/30 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              পেমেন্ট মাধ্যমসমূহ
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-serif">
              Secure &amp; Convenient Payment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 backdrop-blur-sm">
              <div className="size-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-sm font-serif">Cash on Delivery (COD)</h3>
              <p className="text-xs text-neutral-200">ডেলিভারিতে শাড়ি দেখে নগদ টাকা প্রদান করুন</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 backdrop-blur-sm">
              <div className="size-10 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center mx-auto">
                <span className="font-bold text-xs">bKash</span>
              </div>
              <h3 className="font-bold text-sm font-serif">bKash Payment</h3>
              <p className="text-xs text-neutral-200">বিকাশের মাধ্যমে দ্রুত ও ১০০% নিরাপদ পেমেন্ট</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 backdrop-blur-sm">
              <div className="size-10 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center mx-auto">
                <span className="font-bold text-xs">Nagad</span>
              </div>
              <h3 className="font-bold text-sm font-serif">Nagad / Rocket</h3>
              <p className="text-xs text-neutral-200">ডিজিটাল ওয়ালেটের মাধ্যমে সুবিধাজনক পেমেন্ট</p>
            </div>
          </div>
        </section>

        {/* Help CTA */}
        <section className="text-center space-y-4 pt-4">
          <p className="text-sm text-neutral-600">
            ডেলিভারি ট্র্যাক করতে বা কোনো তথ্য জানতে আমাদের সাথে যোগাযোগ করুন:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS.PHONE}`}
              className="inline-flex items-center gap-2 h-12 px-7 bg-[#133827] hover:bg-[#0E291C] text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-md"
            >
              <Phone className="h-4 w-4" />
              <span>হটলাইন: {BUSINESS.PHONE}</span>
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 h-12 px-7 bg-white hover:bg-[#FAF7F2] text-[#1A1A1A] border border-[#E8DFD5] text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-xs hover:border-[#D4AF37]"
            >
              <span>সাধারণ জিজ্ঞাসা (FAQ) →</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
