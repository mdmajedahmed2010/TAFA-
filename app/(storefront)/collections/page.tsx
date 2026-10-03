/**
 * TAFA | Dhaka (তাফা) — All Collections Page
 * Route: /collections
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { prisma } from "@/lib/db";
import { CATEGORIES } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export const revalidate = 60;

export const metadata: Metadata = {
  title: `All Collections — ${BUSINESS.NAME}`,
  description:
    `Explore exclusive ${BUSINESS.NAME} collections — Kalamkari Cotton, Tissue Katan, Kota Doria, Tissue Silk, Semi-Silk & Exclusive Organza Sarees at the most reasonable prices.`,
};

export default async function CollectionsPage() {
  const curatedCollections = [
    {
      title: "Kalamkari Cotton Sarees",
      image: "/tafa-assets/473729906_122137976936551800_4469796677943567704_n.jpg",
      href: "/collections/kalamkari-cotton",
      tag: "100% PURE COTTON",
      desc: "ঐতিহ্যবাহী প্রাকৃতিক প্রিন্ট ও ১০০% খাঁটি আরামদায়ক সুতি কালামকারী শাড়ির মার্জিত কালেকশন।",
    },
    {
      title: "Tissue Katan Royal Silk",
      image: "/tafa-assets/473347514_122137977476551800_1876527014660724835_n.jpg",
      href: "/collections/tissue-katan-silk",
      tag: "ROYAL PARTY WEAR",
      desc: "জমকালো স্বর্ণালি জরির আঁচল ও লাক্সারি টিস্যু কাতান শাড়ি উৎসব ও বিয়ের রাজকীয় সাজের জন্য।",
    },
    {
      title: "Kota Doria Handloom",
      image: "/tafa-assets/473775191_122137976510551800_3429398858348573934_n.jpg",
      href: "/collections/kota-doria",
      tag: "LIGHTWEIGHT GRACE",
      desc: "হালকা, আরামদায়ক ও এলিগ্যান্ট জ্যামিতিক চেক বুননের কোটা ডোরিয়া শাড়ির সমাহার।",
    },
    {
      title: "Tissue Silk Glamour",
      image: "/tafa-assets/474143491_122137977218551800_4193529813524671445_n.jpg",
      href: "/collections/tissue-silk",
      tag: "FESTIVE DRAPE",
      desc: "আলো-আঁধারি শাইন ও প্রিমিয়াম টিস্যু সিল্ক ফেব্রিকের আভিজাত্য, সাথে ম্যাচিং ব্লাউজ পিস।",
    },
    {
      title: "Semi-Silk Traditional",
      image: "/tafa-assets/473789973_122137977710551800_2773340889260662282_n.jpg",
      href: "/collections/semi-silk",
      tag: "AFFORDABLE LUXURY",
      desc: "প্রতিদিনের উৎসব ও স্পেশাল অকেশনের জন্য প্রিমিয়াম সেমি সিল্ক শাড়ির আকর্ষণীয় সম্ভার।",
    },
    {
      title: "Exclusive Organza & Party Saree",
      image: "/tafa-assets/473859664_122137976690551800_223405367683935398_n.jpg",
      href: "/collections/exclusive-organza",
      tag: "DHANMONDI FLAGSHIP",
      desc: "ধানমন্ডি ৫ ফ্ল্যাগশিপ শোরুম স্পেশাল এক্সক্লুসিভ অর্গানজা ও গর্জিয়াস পার্টি ওয়্যার শাড়ি।",
    },
  ];

  // Also fetch DB categories so users can easily browse by category too
  let categories = await prisma.category.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  if (categories.length === 0) {
    categories = CATEGORIES.map((cat, i) => ({
      id: `demo-cat-${i}`,
      name: cat.name,
      slug: cat.slug,
      parentId: null,
      image: cat.image,
      sortOrder: i,
      isActive: true,
      seoTitle: null,
      seoDesc: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "All Collections" }]} />

        {/* Luxury Header */}
        <div className="mt-10 mb-14 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#133827]/30 bg-[#133827]/5 text-[#133827] text-[10px] uppercase tracking-[0.28em] font-bold mb-4">
            ✦ TAFA (তাফা) CURATIONS ✦
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#133827] font-serif">
            All Collections
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-5" />
          <p className="text-neutral-700 mt-4 text-sm md:text-base max-w-xl mx-auto font-sans">
            সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম কালামকারী, টিস্যু কাতান, কোটা ডোরিয়া এবং উৎসব স্পেশাল টিস্যু সিল্ক শাড়ির পূর্ণাঙ্গ সম্ভার।
          </p>
        </div>

        {/* Curated Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9 mb-24">
          {curatedCollections.map((col) => (
            <Link
              key={col.title}
              href={col.href}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/5] bg-neutral-900 block border border-[#E8DFD5] hover:border-[#D4AF37]"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-3.5 border border-[#D4AF37]/25 group-hover:border-[#D4AF37]/70 rounded-xl transition-all duration-500 pointer-events-none z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[9.5px] uppercase tracking-[0.24em] font-bold mb-2.5">
                  ✦ {col.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white group-hover:text-[#D4AF37] transition-colors">
                  {col.title}
                </h2>
                <p className="text-xs md:text-sm text-neutral-300 mt-2 line-clamp-2 leading-relaxed">
                  {col.desc}
                </p>
                <span className="text-[11px] text-[#D4AF37] uppercase tracking-[0.16em] font-bold mt-4 inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Category Switcher */}
        <div className="border-t border-[#E8DFD5] pt-12 pb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-[#121815]">Shop by Category</h3>
            <Link
              href="/categories"
              className="text-xs uppercase tracking-widest font-bold text-[#133827] hover:underline"
            >
              View All Categories →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="px-4 py-2 rounded-xl border border-[#E8DFD5] bg-white hover:bg-[#133827] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
