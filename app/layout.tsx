import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { CartSyncManager } from "@/components/cart/cart-sync-manager";
import { unstable_cache } from "next/cache";
import { ServiceWorkerRegistry } from "@/components/pwa/service-worker-registry";
import { PostHogProvider } from "@/components/analytics/posthog-provider";
import { BUSINESS } from "@/lib/constants";

// Body font — modern, geometric, luxury editorial clarity
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Heading font — high-fashion variable serif for luxury pret
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Global metadata — TAFA (তাফা)
export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.WEBSITE),
  title: {
    default: "TAFA (তাফা) — উৎসবকে সাজাই TAFA’র শাড়িতে | প্রিমিয়াম শাড়ির সমাহার",
    template: "%s — TAFA (তাফা)",
  },
  description:
    "TAFA (তাফা) — উৎসবকে সাজাই TAFA’র শাড়িতে। সবচেয়ে রিজনেবল প্রাইসে কালামকারি শাড়ি, কোটা ডোরিয়া, টিস্যু কাতান ও বুটিক শাড়ির বিশাল সমাহার। ৪০৪,০০০+ আপুদের ভরসা। শোরুম: ধানমন্ডি ৫, বাড়ি নং ৪২/১, ঢাকা ১২০৯। সারা বাংলাদেশে ক্যাশ অন হোম ডেলিভারি ও পার্সেল খুলে চেক করে পেমেন্ট করার নিশ্চিন্ত সুবিধা।",
  keywords: [
    "TAFA",
    "তাফা",
    "tafatonzehee",
    "TAFA Saree",
    "Kalamkari Saree Dhaka",
    "কালামকারি শাড়ি",
    "Kota Doria Saree",
    "কোটা ডোরিয়া শাড়ি",
    "Tissue Katan Saree BD",
    "টিস্যু কাতান শাড়ি",
    "Dhanmondi Saree Showroom",
    "TAFA Facebook Page",
  ],
  authors: [{ name: "TAFA" }],
  creator: "TAFA",
  openGraph: {
    type: "website",
    locale: "bn_BD",
    siteName: "TAFA",
    title: "TAFA (তাফা) — উৎসবকে সাজাই TAFA’র শাড়িতে | প্রিমিয়াম শাড়ির সমাহার",
    description:
      "উৎসবকে সাজাই TAFA’র শাড়িতে — সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির সমাহার। ধানমন্ডি ৫ শোরুম ও অনলাইন হোম ডেলিভারি। পার্সেল খুলে চেক করে পেমেন্ট করার ১০০% নিশ্চিন্ত সুবিধা।",
    images: ["/tafa-assets/baner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "TAFA",
  },
};

export const viewport: Viewport = {
  themeColor: "#133827",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userId = session?.user?.id;

  const getFavicon = unstable_cache(
    async () => {
      try {
        const setting = await prisma.siteSetting.findUnique({
          where: { key: "store_favicon" },
        });
        if (setting && setting.value) {
          return String(setting.value).replace(/['"]/g, "");
        }
      } catch {
        console.error("Failed to load favicon setting");
      }
      return "/favicon.ico";
    },
    ["favicon_setting"],
    { revalidate: 3600, tags: ["site_settings"] }
  );

  const faviconUrl = await getFavicon();

  return (
    <html
      lang="en"
      className={cn("h-full", jakarta.variable, playfair.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={faviconUrl} />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground">
        <CartSyncManager userId={userId} />
        {/* Skip to main content — Accessibility (WCAG AA) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NextTopLoader
          color="#E29578"
          height={3}
          showSpinner={false}
          shadow="0 0 12px #E29578, 0 0 6px #484860"
        />
        {/* Structured Data — SEO (SOP §৭) */}
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
        <Toaster position="top-right" richColors closeButton />
        <PostHogProvider />
        <ServiceWorkerRegistry />
      </body>
    </html>
  );
}

