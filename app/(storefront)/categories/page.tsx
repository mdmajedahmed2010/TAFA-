/**
 * TAFA | Dhaka (তাফা) — All Categories Page
 * Route: /categories
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { prisma } from "@/lib/db";
import { CATEGORIES, ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export const revalidate = 60;

export const metadata: Metadata = {
  title: `All Collections & Categories — ${BUSINESS.NAME}`,
  description:
    `Browse all ${BUSINESS.NAME} authentic saree categories — Kalamkari Cotton, Tissue Katan, Kota Doria, Tissue Silk, Semi-Silk & Exclusive Organza at the most reasonable prices.`,
};

type CategoryItem = {
  id: string;
  name: string;
  slug: string;
  image: string | null;
  _count?: {
    products: number;
  };
};

export default async function CategoriesPage() {
  let categories: CategoryItem[] = [];
  try {
    categories = await prisma.category.findMany({
      where: { isActive: true },
      include: {
        _count: { select: { products: true } },
      },
      orderBy: { sortOrder: "asc" },
    });
  } catch (err) {
    console.error("[CATEGORIES] Database error:", err);
  }

  // Fallback to demo data if DB is empty or fails
  if (categories.length === 0) {
    categories = CATEGORIES.map((cat, i) => ({
      id: `demo-cat-${i}`,
      name: cat.name,
      slug: cat.slug,
      image: cat.image,
      _count: { products: cat.productCount },
    }));
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "All Categories" }]} />

        {/* Luxury Header */}
        <div className="mt-10 mb-14 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#133827]/30 bg-[#133827]/5 text-[#133827] text-[10px] uppercase tracking-[0.28em] font-bold mb-4">
            ✦ TAFA (তাফা) ✦
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#133827] font-serif">
            All Categories
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-5" />
          <p className="text-neutral-700 mt-4 text-sm md:text-base max-w-xl mx-auto font-sans">
            সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম কালামকারী সুতি, টিস্যু কাতান, কোটা ডোরিয়া এবং উৎসব স্পেশাল টিস্যু সিল্ক শাড়ির পূর্ণাঙ্গ সম্ভার।
          </p>
        </div>

        {/* Categories Grid */}
        {categories.length === 0 ? (
          <div className="text-center py-20 text-[#999]">
            <p className="text-lg font-serif">No categories found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mb-24">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 aspect-[3/4] bg-neutral-900 block border border-[#E8DFD5] hover:border-[#D4AF37]"
              >
                <Image
                  src={
                    cat.image || ASSETS.logo
                  }
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-3.5 border border-[#D4AF37]/25 group-hover:border-[#D4AF37]/70 rounded-xl transition-all duration-500 pointer-events-none z-10" />

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-20">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[9.5px] uppercase tracking-[0.24em] font-bold mb-2.5">
                    ✦ {cat._count?.products ?? 0} Products
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold font-serif text-white group-hover:text-[#D4AF37] transition-colors">
                    {cat.name}
                  </h2>
                  <span className="text-[11px] text-[#D4AF37] uppercase tracking-[0.16em] font-bold mt-3 inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                    Explore Category →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
