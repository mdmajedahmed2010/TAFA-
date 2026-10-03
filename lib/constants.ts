/**
 * TAFA (তাফা) — Application Constants
 * Official Facebook: https://www.facebook.com/tafatonzehee
 * Flagship Showroom: House 42/1, Road No 5, Dhanmondi, Dhaka 1209
 * Hotlines: 01885-507455 / 01688-231132
 * 404,000+ Followers Community
 */

// Delivery Charges (BDT)
export const DELIVERY_CHARGE = {
  DHAKA_INSIDE: 80,
  OUTSIDE_DHAKA: 150,
  // Backward compatibility aliases
  SYLHET_INSIDE: 80,
  OUTSIDE_SYLHET: 150,
} as const;

// Order Number Prefix
export const ORDER_PREFIX = "TF";

// Product Status
export const PRODUCT_STATUS = {
  DRAFT: "DRAFT",
  ACTIVE: "ACTIVE",
  OUT_OF_STOCK: "OUT_OF_STOCK",
  ARCHIVED: "ARCHIVED",
} as const;

// Order Status
export const ORDER_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  PROCESSING: "PROCESSING",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
  RETURNED: "RETURNED",
  REFUNDED: "REFUNDED",
} as const;

// Payment Methods
export const PAYMENT_METHOD = {
  COD: "COD",
  BKASH: "BKASH",
  NAGAD: "NAGAD",
  SSLCOMMERZ: "SSLCOMMERZ",
} as const;

// Rate Limiting
export const RATE_LIMITS = {
  LOGIN: { requests: 5, window: "15m" },
  REGISTER: { requests: 3, window: "1h" },
  PASSWORD_RESET: { requests: 3, window: "1h" },
  CHECKOUT: { requests: 10, window: "1m" },
  API: { requests: 100, window: "1m" },
  ADMIN: { requests: 50, window: "1m" },
} as const;

// Image Upload Limits
export const UPLOAD_LIMITS = {
  MAX_SIZE_MB: 10,
  MAX_SIZE_BYTES: 10 * 1024 * 1024,
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"],
  ALLOWED_EXTENSIONS: [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"],
  MAX_DIMENSION: 4000,
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 48,
} as const;

// Session & Auth
export const AUTH = {
  ACCESS_TOKEN_EXPIRY: 15 * 60,
  REFRESH_TOKEN_EXPIRY: 7 * 24 * 60 * 60,
  ADMIN_SESSION_TIMEOUT: 30 * 60,
  BCRYPT_SALT_ROUNDS: 12,
  PASSWORD_RESET_EXPIRY: 60 * 60,
} as const;

// Business Info — TAFA (তাফা)
export const BUSINESS = {
  NAME: "TAFA",
  NAME_SHORT: "TAFA",
  NAME_BN: "তাফা",
  PROPRIETOR: "TAFA",
  PROPRIETOR_BN: "তাফা",
  FOUNDER: "TAFA",
  FOUNDER_BN: "তাফা",
  TAGLINE: "উৎসবকে সাজাই TAFA’র শাড়িতে • সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম শাড়ির সমাহার",
  TAGLINE_SUB: "ঐতিহ্যবাহী কালামকারি, কোটা ডোরিয়া, টিস্যু কাতান ও বুটিক শাড়ি • ৪০৪,০০০+ আপুদের ভরসা",
  TAGLINE_BN: "উৎসবকে সাজাই TAFA’র শাড়িতে — প্রিমিয়াম শাড়ির অনন্য কালেকশন এবং সেরা মান প্রদানের নিশ্চয়তা।",
  MOTTO_BN: "উৎসবকে সাজাই TAFA’র শাড়িতে ✨",
  PHONE: "01885-507455",
  PHONE_INTL: "+880 1885-507455",
  PHONE_ALT: "01688-231132",
  PHONE_ALT_INTL: "+880 1688-231132",
  WHATSAPP: "+8801885507455",
  WHATSAPP_LINK: "https://wa.me/8801885507455",
  EMAIL: "tafatonzehee@gmail.com",
  ADDRESS: "House 42/1, Road No 5, Dhanmondi, Dhaka 1209, Bangladesh",
  ADDRESS_BN: "হাউস ৪২/১, রোড নং ৫, ধানমন্ডি, ঢাকা ১২০৯, বাংলাদেশ",
  CITY: "Dhaka",
  COUNTRY: "Bangladesh",
  LOCATION_LANDMARK: "Dhanmondi Road 5, Dhaka",
  FACEBOOK: "https://www.facebook.com/tafatonzehee",
  INSTAGRAM: "https://www.instagram.com/tafatonzehee",
  TIKTOK: "https://www.tiktok.com/@tafatonzehee",
  YOUTUBE: "https://www.youtube.com/@tafatonzehee",
  WEBSITE: "https://tafatonzehee.com",
  ESTABLISHED: "Premium Ethnic Sarees & Festive Boutique House in Dhanmondi, Dhaka",
  MESSENGER: "https://m.me/tafatonzehee",
  FOLLOWERS: "404K+",
  FOLLOWERS_COUNT: "404K+",
  FOLLOWERS_EXACT: "404,000+ Followers",
  RATING: "4.9 ★",
  RECOMMEND_RATE: "99%",
  OPEN_PARCEL_POLICY: true,
  STORE_HOURS: "Everyday: 10:30 AM – 9:00 PM | Online 24/7 Hotline",
  STORE_HOURS_BN: "প্রতিদিন: সকাল ১০:৩০ – রাত ৯:০০ | অনলাইন ২৪/৭ হটলাইন ও ইনবক্স সেবা সক্রিয়",
  DELIVERY_CHARGE_INSIDE: 80,
  DELIVERY_CHARGE_OUTSIDE: 150,
  FREE_DELIVERY_MIN_ITEMS: 2,
} as const;

// Currency
export const CURRENCY = {
  CODE: "BDT",
  SYMBOL: "৳",
  LOCALE: "en-BD",
} as const;

// Coupon Codes
export const COUPON_CODES: Record<
  string,
  { type: "percent" | "flat"; value: number; label: string }
> = {
  TAFA10: { type: "percent", value: 10, label: "10% off with TAFA Welcome Promo" },
  TAFAVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount on TAFA Sarees" },
  UTSAB15: { type: "percent", value: 15, label: "15% Festive Saree Special" },
  KATAN10: { type: "percent", value: 10, label: "10% Katan & Silk Special" },
  WELCOME5: { type: "percent", value: 5, label: "5% Welcome Discount" },
  FLAT300: { type: "flat", value: 300, label: "৳300 flat discount on 2+ Sarees" },
  // Backward compatibility aliases
  DUIKONNA10: { type: "percent", value: 10, label: "10% off promo" },
  MUSLINVIP: { type: "percent", value: 15, label: "15% VIP discount" },
  ORNI10: { type: "percent", value: 10, label: "10% promotional discount" },
  QUEENVIP: { type: "percent", value: 15, label: "15% VIP discount" },
  TAZEEN10: { type: "percent", value: 10, label: "10% off your order" },
  TAZEENVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
  ASH10: { type: "percent", value: 10, label: "10% off your order" },
  ASPENVIP: { type: "percent", value: 15, label: "15% VIP exclusive discount" },
} as const;
