"use client";

/**
 * TAFA (তাফা) — Curated Haute Arrivals Showcase
 * Features double-bezel cards, interactive category filtering, and 1-tap quick-add
 * House 42/1, Road 5, Dhanmondi, Dhaka 1209 • FB: https://www.facebook.com/tafatonzehee
 * 404,000+ Followers • "সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির সমাহার"
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Crown, Eye, Heart, ArrowUpRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuickViewStore } from "@/store/quick-view-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

export interface CuratedProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice: number;
  image: string;
  secondaryImage?: string;
  slug: string;
  tag?: string;
  sizes?: string[];
}

const CATEGORY_TABS = [
  "All Collections",
  "Kalamkari Saree",
  "Kota Doria & Linen",
  "Festive Tissue Katan",
  "Warli Folk Art",
  "Embroidered Tissue",
  "Designer Silk",
];

export function CuratedArrivals({ products }: { products: CuratedProduct[] }) {
  const [activeTab, setActiveTab] = useState("All Collections");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const openQuickView = useQuickViewStore((state) => state.openQuickView);
  const wishlistItems = useWishlistStore((state) => state.items);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const addItemToCart = useCartStore((state) => state.addItem);

  const filteredProducts =
    activeTab === "All Collections"
      ? products
      : products.filter((p) => {
          const cat = p.category.toLowerCase();
          const name = p.name.toLowerCase();
          if (activeTab === "Kalamkari Saree") return cat.includes("kalamkari") || name.includes("kalamkari");
          if (activeTab === "Kota Doria & Linen") return cat.includes("kota") || cat.includes("doria") || cat.includes("linen") || name.includes("kota") || name.includes("linen");
          if (activeTab === "Festive Tissue Katan") return cat.includes("tissue") || cat.includes("katan") || name.includes("katan");
          if (activeTab === "Warli Folk Art") return cat.includes("warli") || cat.includes("folk") || name.includes("warli");
          if (activeTab === "Embroidered Tissue") return cat.includes("embroidered") || name.includes("embroidered");
          if (activeTab === "Designer Silk") return cat.includes("silk") || name.includes("silk");
          return true;
        });

  const handleQuickAdd = (product: CuratedProduct, size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItemToCart({
      productId: product.id,
      variantId: `${product.id}-${size}`,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color: "Default",
      quantity: 1,
    });

    setAddedProductId(`${product.id}-${size}`);
    toast.success(`Added ${product.name} to bag!`, {
      description: "✓ Open Parcel Policy • ক্যাশ অন ডেলিভারি এবং পার্সেল খুলে দেখে চেক করার সুবিধা।",
    });

    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-28 bg-[#FAF7F2] border-b border-[#E8DFD5] relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 mb-3 shadow-xs">
            <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#133827]">
              TAFA ARRIVALS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Curated Festive &amp; Designer Sarees
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            ৪০৪,০০০+ আপুদের নির্ভরযোগ্য পছন্দ — উৎসবকে সাজাই TAFA’র শাড়িতে। সবচেয়ে রিজনেবল প্রাইস ও ওপেন পার্সেল চেক সুবিধাসহ দেশজুড়ে হোম ডেলিভারি।
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#133827] text-[#D4AF37] shadow-md border border-[#D4AF37] scale-105"
                    : "bg-white text-neutral-700 hover:bg-[#FAF7F2] border border-[#E8DFD5]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid with Double-Bezel Architecture */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          <AnimatePresence>
            {filteredProducts.slice(0, 8).map((product) => {
              const isWishlisted = wishlistItems.some((i) => i.id === product.id);
              const sizes = product.sizes || ["Standard Saree (12 Haat)", "With Blouse Piece"];
              const isHovered = hoveredCard === product.id;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative flex flex-col bg-white rounded-3xl border border-[#E8DFD5] hover:border-[#D4AF37]/80 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Card Image Container with secondary hover image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                    <Link href={`/products/${product.slug}`} className="absolute inset-0 z-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        unoptimized
                        className={`object-cover object-center transition-all duration-700 ease-out ${
                          isHovered && product.secondaryImage
                            ? "opacity-0 scale-105"
                            : "opacity-100 group-hover:scale-105"
                        }`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {product.secondaryImage && (
                        <Image
                          src={product.secondaryImage}
                          alt={`${product.name} alternate view`}
                          fill
                          unoptimized
                          className={`object-cover object-center transition-all duration-700 ease-out absolute inset-0 ${
                            isHovered ? "opacity-100 scale-105" : "opacity-0"
                          }`}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      )}
                    </Link>

                    {/* Badge Pill */}
                    {product.tag && (
                      <span className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full bg-[#133827] text-[#D4AF37] text-[9.5px] font-extrabold uppercase tracking-widest shadow-sm border border-[#D4AF37]/40">
                        {product.tag}
                      </span>
                    )}

                    {/* Floating Actions (Wishlist & Quick View) */}
                    <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-2">
                      <button
                        onClick={() =>
                          toggleWishlist({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            category: product.category,
                            slug: product.slug,
                          })
                        }
                        className={`size-9 rounded-full flex items-center justify-center transition-all shadow-md backdrop-blur-md cursor-pointer ${
                          isWishlisted
                            ? "bg-[#133827] text-[#D4AF37]"
                            : "bg-white/90 text-neutral-700 hover:bg-[#133827] hover:text-[#D4AF37]"
                        }`}
                        aria-label="Save to Wishlist"
                      >
                        <Heart className="h-4 w-4" fill={isWishlisted ? "currentColor" : "none"} />
                      </button>

                      <button
                        onClick={() =>
                          openQuickView({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            compareAtPrice: product.compareAtPrice,
                            image: product.image,
                            images: product.secondaryImage
                              ? [product.image, product.secondaryImage]
                              : [product.image],
                            category: product.category,
                            slug: product.slug,
                            stock: 20,
                            isNew: true,
                          })
                        }
                        className="size-9 rounded-full bg-white/90 text-neutral-700 hover:bg-[#133827] hover:text-[#D4AF37] flex items-center justify-center transition-all shadow-md backdrop-blur-md cursor-pointer opacity-0 group-hover:opacity-100"
                        aria-label="Quick View"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>

                    {/* 1-Tap Quick Saree Spec Selector Overlay on Hover */}
                    <div
                      className={`absolute inset-x-2 bottom-2 z-10 p-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-3 pointer-events-none"
                      }`}
                    >
                      <p className="text-[10px] font-bold text-neutral-600 text-center uppercase tracking-wider mb-1.5">
                        Quick Add Saree to Bag
                      </p>
                      <div className="flex gap-1.5 justify-center">
                        {sizes.slice(0, 2).map((size) => (
                          <button
                            key={size}
                            onClick={(e) => handleQuickAdd(product, size, e)}
                            className="flex-1 py-1.5 px-2 rounded-xl bg-[#FAF7F2] hover:bg-[#133827] text-[#133827] hover:text-[#D4AF37] border border-[#E8DFD5] hover:border-[#D4AF37] text-[10px] font-bold tracking-tight transition-colors flex items-center justify-center gap-1 cursor-pointer truncate"
                          >
                            {addedProductId === `${product.id}-${size}` ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-500" />
                                <span>Added</span>
                              </>
                            ) : (
                              <span>{size.length > 18 ? size.slice(0, 17) + "..." : size}</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                        {product.category}
                      </p>
                      <Link href={`/products/${product.slug}`} className="block mt-1">
                        <h3 className="text-sm font-bold text-[#1A1A1A] line-clamp-2 leading-snug group-hover:text-[#133827] transition-colors font-heading">
                          {product.name}
                        </h3>
                      </Link>
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#E8DFD5]">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-bold text-[#133827] font-heading">
                          ৳{product.price.toLocaleString()}
                        </span>
                        {product.compareAtPrice > product.price && (
                          <span className="text-xs text-neutral-400 line-through">
                            ৳{product.compareAtPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/products/${product.slug}`}
                        className="size-8 rounded-full bg-[#FAF7F2] text-[#133827] group-hover:bg-[#133827] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors"
                        aria-label={`View ${product.name}`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#133827] hover:bg-[#0E291C] text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-md group active:scale-98"
          >
            <span>Explore Complete Saree Catalog</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
