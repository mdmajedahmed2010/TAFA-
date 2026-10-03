import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Phone, ShieldCheck, Heart, Award, CheckCircle2, Truck, MessageCircle, Store, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS.NAME} (${BUSINESS.NAME_BN}) — সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির সমাহার`,
  description:
    "Discover TAFA (তাফা) — Dhaka's premier saree and fashion house. 404,000+ Facebook community, flagship showroom at House 42/1, Road 5, Dhanmondi, Dhaka, nationwide Open Parcel Cash on Delivery, and authentic designer sarees at the most reasonable prices.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#133827] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              আমাদের পরিচিতি • ABOUT TAFA
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif mb-4 text-white">
            {BUSINESS.NAME} ({BUSINESS.NAME_BN})
          </h1>
          <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-sans max-w-2xl mx-auto">
            {BUSINESS.TAGLINE} — বাংলাদেশের ৪০৪,০০০+ মার্জিত রুচিশীল নারীদের আস্থার প্রতীক। সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম কালামকারি, ফেস্টিভ টিস্যু কাতান, কোটা ডোরিয়া ও ডিজাইনার শাড়ির অনন্য সমাহার।
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#133827]">
            <Image
              src={ASSETS.showroomBanner}
              alt="TAFA Dhanmondi Flagship Showroom Interior"
              fill
              unoptimized
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#181513]/95 backdrop-blur-md border border-[#D4AF37]/40 px-5 py-3 rounded-xl text-white shadow-lg">
              <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-[#D4AF37] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                TAFA DHANMONDI FLAGSHIP SHOWROOM
              </p>
              <p className="text-xs font-semibold mt-0.5">House 42/1, Road 5, Dhanmondi, Dhaka • 404,000+ Family</p>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#133827] font-bold">
                আমাদের ঐতিহ্য ও দর্শন • OUR PHILOSOPHY & VISION
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] font-serif leading-tight">
                উৎসবকে সাজাই TAFA’র শাড়িতে
              </h2>
            </div>

            <div className="border-l-4 border-[#133827] pl-4 py-2 text-[#133827] italic text-sm font-serif bg-emerald-50/70 rounded-r-lg">
              &ldquo;আমাদের মূল দর্শন হলো—প্রিমিয়াম মানের শাড়ি প্রতিটি নারীর কাছে সবচেয়ে রিজনেবল ও ন্যায্য মূল্যে পৌঁছে দেওয়া, যাতে প্রতিটি উৎসব হয়ে ওঠে আরও রঙিন ও আনন্দময়।&rdquo; — তাফা (TAFA)
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>{BUSINESS.NAME}</strong> ({BUSINESS.NAME_BN}) ঢাকার ধানমন্ডিতে অবস্থিত একটি স্বনামধন্য ও শীর্ষস্থানীয় ফ্যাশন ও শাড়ি হাউস। আমাদের ৪০৪,০০০+ এরও বেশি সক্রিয় ফেসবুক পরিবারের ভালোবাসা ও আস্থাই আমাদের সবচেয়ে বড় অনুপ্রেরণা।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              আমরা নিয়মিত কিউরেট করি ঐতিহ্যবাহী ও আধুনিক ট্রেন্ডের সেরা শাড়ি কালেকশন—যার মধ্যে রয়েছে হাতে আঁকা <strong className="text-[#133827]">কালামকারি কটন সিল্ক</strong>, জমকালো বিয়ের সাজের জন্য <strong className="text-[#133827]">ফেস্টিভ পিওর গোল্ড টিস্যু কাতান</strong>, হালকা ও গর্জিয়াস <strong className="text-[#133827]">কোটা ডোরিয়া ও লিনেন সিল্ক</strong>, এবং ওয়ারলি ফোক আর্ট ও ফ্লোরাল এমব্রয়ডারি শাড়ি।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              অনলাইনে শাড়ি কেনাকাটায় আপনাদের শতভাগ নিশ্চিন্ত রাখতে আমরা চালু রেখেছি আমাদের সিগনেচার <strong className="text-[#133827]">ওপেন পার্সেল গ্যারান্টি (Open Parcel Policy)</strong>। পার্সেল হাতে পেয়ে ডেলিভারিম্যানের সামনে শাড়ির কাপড়, রঙ ও ফিনিশিং ভালো করে দেখে নিশ্চিত হয়ে মূল্য পরিশোধ করার পূর্ণ স্বাধীনতা পাবেন। এছাড়াও সরাসরি এসে পছন্দের জন্য রয়েছে আমাদের ধানমন্ডি ৫ ফ্ল্যাগশিপ শোরুম।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#E8DFD5]">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#133827]">404K+</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  FB Community
                </p>
              </div>
              <div className="text-center border-x border-[#E8DFD5]">
                <p className="text-2xl font-bold text-[#D4AF37]">Open Parcel</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  হাতে পেয়ে চেক
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#133827]">ধানমন্ডি ৫</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  ফ্ল্যাগশিপ শোরুম
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-16 bg-[#F4EFEA] px-6 border-t border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#133827] font-bold mb-2">
              আমাদের মূল স্তম্ভসমূহ
            </p>
            <h2 className="text-3xl font-bold text-[#1A1A1A] font-serif">Why Choose TAFA (তাফা)?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#133827]/10 text-[#133827] flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">১০০% ওপেন পার্সেল গ্যারান্টি</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ডেলিভারিম্যানের সামনে প্যাকেট খুলে কাপড় ও ডিজাইন চেক করে পেমেন্ট করার নিশ্চিন্ত সুযোগ। কোনো সংশয় ছাড়াই নিশ্চিন্তে অর্ডার করুন।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">সবচেয়ে রিজনেবল প্রাইস</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                প্রিমিয়াম মানের শাড়িতে সবচেয়ে সাশ্রয়ী ও রিজনেবল মূল্য নিশ্চিত করে তাফা। কোনো হিডেন চার্জ বা অযৌক্তিক মূল্য নেই।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">ধানমন্ডি ৫ ফ্ল্যাগশিপ শোরুম</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                বাড়ি নং ৪২/১, রোড নং ৫, ধানমন্ডি, ঢাকা ১২০৯। প্রতিদিন সকাল ১০:৩০ থেকে রাত ৯:০০ পর্যন্ত সরাসরি শাড়ি দেখে ট্রায়াল দেওয়ার সুযোগ।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">কিউরেটেড প্রিমিয়াম ফেব্রিক</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                কালামকারি কটন সিল্ক, কোটা ডোরিয়া, ফেস্টিভ টিস্যু কাতান এবং হ্যান্ডক্রাফটেড লিনেন প্রতিটি শাড়ি নিখুঁত কোয়ালিটি চেকে নির্বাচিত।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#133827] flex items-center justify-center mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">সারাদেশে ক্যাশ অন ডেলিভারি</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ঢাকার ভেতর মাত্র ৳৮০ এবং ঢাকার বাইরে ৳১৫০। ২ বা ততোধিক শাড়িতে উপভোগ করুন সম্পূর্ণ ফ্রি হোম ডেলিভারি।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">হটলাইন ও হোয়াটসঅ্যাপ সেবা</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                হটলাইন (01885-507455) ও হোয়াটসঅ্যাপে (01688-231132) যেকোনো শাড়ির তথ্য, বুকিং বা ডেলিভারি সহায়তায় আমাদের টিম সদা তৎপর।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom & Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 font-serif">যোগাযোগ ও শোরুমের ঠিকানা</h2>
          <p className="text-neutral-600 mb-10 max-w-xl mx-auto text-sm">
            অনলাইনে সরাসরি অর্ডার করতে পারেন অথবা ধানমন্ডি ৫ শোরুমে এসে সরাসরি শাড়ি পরখ করতে পারেন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#133827] border border-[#133827]/20 flex items-center justify-center mb-3">
                <Store className="h-5 w-5 text-[#133827]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">ফ্ল্যাগশিপ শোরুম</h3>
              <p className="text-xs text-[#133827] font-semibold mb-2">ধানমন্ডি ৫, ঢাকা ১২০৯</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {BUSINESS.ADDRESS}
              </p>
              <p className="text-[11px] text-neutral-500 font-medium mt-2 flex items-center gap-1">
                <Clock className="h-3 w-3 inline text-[#133827]" />
                প্রতিদিন সকাল ১০:৩০টা — রাত ৯:০০টা
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                <MessageCircle className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">ফেসবুক কমিউনিটি</h3>
              <p className="text-xs text-[#D4AF37] font-bold mb-2">৪০৪,০০০+ ফ্যান পেজ</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                নতুন শাড়ির কালেকশন ও ভিডিও দেখতে যুক্ত থাকুন:
              </p>
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#133827] font-bold hover:underline block mt-2"
              >
                facebook.com/tafatonzehee
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#133827] border border-[#133827]/20 flex items-center justify-center mb-3">
                <Phone className="h-5 w-5 text-[#133827]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">অর্ডার হটলাইন ও হোয়াটসঅ্যাপ</h3>
              <p className="text-xs text-neutral-600 mb-2">যেকোনো প্রশ্ন বা দ্রুত শাড়ি বুকিংয়ের জন্য:</p>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="text-xs text-[#1A1A1A] font-bold hover:underline block"
              >
                হটলাইন: {BUSINESS.PHONE}
              </a>
              <a
                href={`tel:${BUSINESS.PHONE_ALT}`}
                className="text-xs text-[#1A1A1A] font-bold hover:underline block mt-0.5"
              >
                হোয়াটসঅ্যাপ: {BUSINESS.PHONE_ALT}
              </a>
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-600 font-bold hover:underline block mt-1.5"
              >
                হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#133827] text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#0E291C] transition-all duration-300 rounded-full shadow-md active:scale-[0.98]"
            >
              Contact Us Page →
            </Link>
            <Link
              href="/delivery-info"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#1A1A1A] border border-[#E8DFD5] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#FAF7F2] hover:border-[#D4AF37] transition-all duration-300 rounded-full shadow-xs active:scale-[0.98]"
            >
              ডেলিভারি ও ওপেন পার্সেল পলিসি
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
