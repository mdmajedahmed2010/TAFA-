/**
 * TAFA | Dhaka (তাফা) — Register Page
 * Route: /register
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { RegisterForm } from "@/components/auth/register-form";
import { Loader2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Create Account | ${BUSINESS.NAME}`,
  description: `Create your ${BUSINESS.NAME} account for faster checkout, order tracking, and exclusive offers.`,
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#FAF7F2]">
      <div className="w-full max-w-md space-y-8 bg-white p-8 md:p-10 rounded-2xl border border-[#E8DFD5] shadow-sm">
        {/* Header */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex flex-col items-center gap-2 group">
            <div className="relative size-14 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-xs">
              <Image
                src="/tafa-assets/logo.png"
                alt={BUSINESS.NAME}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#133827] font-serif group-hover:text-[#0A1F16] transition-colors">
              {BUSINESS.NAME}
            </span>
          </Link>
          <h1 className="text-xl font-bold text-[#121815] font-serif">Create Your Account</h1>
          <p className="text-xs text-neutral-500">
            Join 404,000+ TAFA saree lovers across Bangladesh
          </p>
        </div>

        {/* Register Form */}
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          }
        >
          <RegisterForm />
        </Suspense>

        {/* Login Link */}
        <p className="text-center text-xs text-neutral-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-[#133827] hover:underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
