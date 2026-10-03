/**
 * TAFA | Dhaka (তাফা) — Checkout Page
 * Guest-first checkout flow (no login required)
 * Nationwide Cash on Delivery & Open Parcel Inspection
 */

import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { getStorefrontSettings } from "@/actions/settings.actions";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Checkout | ${BUSINESS.NAME}`,
  description: `Complete your order — Open Parcel & Cash on Delivery with ${BUSINESS.NAME}.`,
};

export default async function CheckoutPage() {
  const { settings } = await getStorefrontSettings();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">Checkout</h1>
      <CheckoutForm settings={settings || {}} />
    </div>
  );
}
