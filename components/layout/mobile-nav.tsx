"use client";

/**
 * TAFA (তাফা) — Mobile Navigation Overlay
 * Authentic Kalamkari, Kota Doria & Festive Tissue Katan Sarees
 * Flagship Showroom: House 42/1, Road No 5, Dhanmondi, Dhaka 1209
 * Facebook: https://www.facebook.com/tafatonzehee • 404,000+ Followers
 * Open Parcel Inspection Nationwide
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, User, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useCartStore } from "@/store/cart-store";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // Read cart items count dynamically from Zustand store
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  // Prevent background body scroll when the overlay is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleAccordion = (label: string) => {
    setActiveAccordion(activeAccordion === label ? null : label);
  };

  // Subcategories matching TAFA collections
  const categoriesWithSubs: Record<string, string[]> = {
    "Kalamkari Sarees": [
      "Shop All Kalamkari Sarees",
      "Midnight Black & Mustard Peacock Saree",
      "Sage Green & Royal Purple Kalamkari Saree",
      "Traditional Peacock & Elephant Zari Weaves",
    ],
    "Kota Doria & Linen": [
      "Shop All Kota Doria & Linen",
      "Crimson Red Festive Kota Saree",
      "Peacock Teal Green Kota Saree",
      "Midnight Navy Blue Kota Saree",
    ],
    "Festive Tissue Katan": [
      "Shop All Festive Tissue Katan",
      "Pure Gold Festive Tissue Katan Bridal Saree",
      "Royal Champagne Gold Tissue Silk Saree",
      "Peach Rose Shimmer Tissue Kota Silk",
    ],
    "Warli Art Sarees": [
      "Shop All Warli Art Sarees",
      "Plum Wine Tribal Warli Linen Saree",
      "Handcrafted Folk Art Motifs",
    ],
    "Dhakai Jamdani": [
      "Shop All Dhakai Jamdani",
      "Traditional Heritage Weaves",
      "Festive Jamdani & Gadwal Specials",
    ],
  };

  return (
    <>
      {/* Minimal line trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center justify-center size-10 text-foreground/80 hover:bg-neutral-100 rounded-full transition-all duration-200"
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6 text-[#133827]" strokeWidth={1.75} />
      </button>

      {/* Premium Full-Screen Navigation Panel Overlay */}
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed top-0 left-0 w-screen h-[100dvh] bg-[#FAF7F2] z-[9999] flex flex-col overflow-y-auto animate-slide-up">
            {/* Header bar within overlay */}
            <div className="flex h-16 items-center justify-between px-6 border-b border-[#E5DAC6] bg-white">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <Image
                  src={ASSETS.logo}
                  alt="TAFA (তাফা)"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover rounded-full ring-2 ring-[#D4AF37] bg-black"
                />
                <div className="flex flex-col">
                  <span className="font-heading text-base font-extrabold tracking-tight text-[#133827] leading-none flex items-center gap-1">
                    <span>🌸</span>
                    TAFA
                  </span>
                  <span className="text-[8.5px] font-semibold tracking-widest text-[#D4AF37] uppercase mt-0.5">
                    তাফা • 404K+ FAMILY
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center size-10 text-foreground hover:bg-neutral-100 rounded-full transition-all duration-200"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6 text-[#121815]" strokeWidth={1.5} />
              </button>
            </div>

            {/* Touch-Optimized Accordion Navigation Links */}
            <nav className="flex-1 px-6 py-4" aria-label="Mobile navigation">
              <div className="flex flex-col">
                {links.map((link) => {
                  const hasSubCategories = link.label in categoriesWithSubs;
                  const isAccordionActive = activeAccordion === link.label;

                  return (
                    <div key={link.href} className="border-b border-[#E5DAC6]/60">
                      {hasSubCategories ? (
                        <div>
                          <button
                            onClick={() => toggleAccordion(link.label)}
                            className="w-full min-h-[56px] py-4 flex justify-between items-center text-[15px] font-semibold tracking-wide text-[#121815] hover:text-[#133827] transition-colors"
                            aria-expanded={isAccordionActive}
                          >
                            {link.label}
                            {isAccordionActive ? (
                              <ChevronUp className="h-4 w-4 text-[#133827]" strokeWidth={2} />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                            )}
                          </button>

                          {/* Expandable Category Sub-menus */}
                          {isAccordionActive && (
                            <div className="pl-4 pb-5 flex flex-col gap-3 animate-slide-down">
                              {(categoriesWithSubs[link.label] ?? []).map((subLabel) => {
                                const isShopAll = subLabel.toLowerCase().startsWith("shop all");
                                const urlParam = isShopAll
                                  ? ""
                                  : `?filter=${subLabel.toLowerCase().replace(/\s+/g, "-")}`;
                                return (
                                  <Link
                                    key={subLabel}
                                    href={`${link.href}${urlParam}`}
                                    onClick={() => setOpen(false)}
                                    className="text-[13.5px] text-neutral-600 hover:text-[#133827] transition-colors py-1 flex items-center justify-between"
                                  >
                                    <span>{subLabel}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block min-h-[56px] py-4 text-[15px] font-semibold tracking-wide text-[#121815] hover:text-[#133827] transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Secondary utility links */}
              <div className="mt-8 pt-6 border-t border-[#E5DAC6] flex flex-col gap-4">
                <Link
                  href="/track-order"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-[#133827] transition-colors"
                >
                  Track My Order (অর্ডার ট্র্যাক করুন)
                </Link>
                <Link
                  href="/delivery-info"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-[#133827] transition-colors"
                >
                  Delivery Info (ঢাকা ৮০৳ • বাইরে ১৫০৳ • ক্যাশ অন ডেলিভারি)
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-[#133827] transition-colors"
                >
                  Frequently Asked Questions (FAQ)
                </Link>
                <Link
                  href="/refund-policy"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-[#133827] transition-colors"
                >
                  Open Parcel &amp; Return Policy (পার্সেল চেকিং সুবিধা)
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-[#133827] transition-colors"
                >
                  Showroom Location &amp; Hotlines ({BUSINESS.PHONE})
                </Link>
              </div>
            </nav>

            {/* Action cards in footer */}
            <div className="px-6 py-5 border-t border-[#E5DAC6] bg-white mt-auto">
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 h-12 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm mb-3 active:scale-[0.98]"
              >
                <span>WhatsApp Hotline ({BUSINESS.PHONE})</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/account"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 h-12 bg-[#FAF7F2] border border-[#E5DAC6] text-xs font-bold text-[#121815] hover:bg-neutral-100 rounded-xl transition-colors shadow-xs"
                >
                  <User className="h-4 w-4 text-[#133827]" strokeWidth={1.5} />
                  My Account
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 h-12 bg-[#133827] text-[#D4AF37] text-xs font-bold hover:bg-[#1A4B35] rounded-xl transition-colors shadow-xs"
                >
                  <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                  Bag ({cartCount})
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
