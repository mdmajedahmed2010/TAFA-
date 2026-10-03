/**
 * TAFA (তাফা) — Official Product Data & Catalog
 * Authentic Kalamkari, Festive Tissue Katan, Kota Doria & Boutique Sarees
 * Flagship Showroom: House 42/1, Road No 5, Dhanmondi, Dhaka 1209
 * Facebook: https://www.facebook.com/tafatonzehee (404,000+ Community)
 * All assets served locally from /tafa-assets/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, /tafa-assets/)
// ═══════════════════════════════════════════
export const ASSETS = {
  logo: "/tafa-assets/logo.jpg",
  banner: "/tafa-assets/baner.jpg",
  heroImage: "/tafa-assets/baner.jpg",
  heroBanner: "/tafa-assets/baner.jpg",

  // Authentic Assets from TAFA Facebook & Dhanmondi Boutique
  kalamkariBlack: "/tafa-assets/806366292_1071856802226602_7059483926647638925_n.jpg",
  kalamkariGreen: "/tafa-assets/813634865_1075160555229560_5818203055627500016_n.jpg",
  kotaCrimson: "/tafa-assets/814088576_1076502615095354_7429738963769164894_n.jpg",
  kotaTeal: "/tafa-assets/814761844_1076502655095350_8353822882528535397_n.jpg",
  kotaNavy: "/tafa-assets/815469353_1076502661762016_187855542332609630_n.jpg",
  warliPlum: "/tafa-assets/795582567_1075160605229555_4581872319101641132_n.jpg",
  tissueKotaPeach: "/tafa-assets/813407336_1075162458562703_6329338457814441472_n.jpg",
  tissueKatanGold: "/tafa-assets/813805019_1075162411896041_4532628974852127168_n.jpg",
  tissueSilkChampagne: "/tafa-assets/828598232_1087875203958095_2142770223889394794_n.jpg",
  royalBlueFloral: "/tafa-assets/809544132_1072994075446208_6475467488723721568_n.jpg",
  showroomInterior: "/tafa-assets/baner.jpg",
  showroomBanner: "/tafa-assets/baner.jpg",
  sareeChampagne: "/tafa-assets/828598232_1087875203958095_2142770223889394794_n.jpg",
  kotaCrimsonRed: "/tafa-assets/814088576_1076502615095354_7429738963769164894_n.jpg",
  warliArtPlum: "/tafa-assets/795582567_1075160605229555_4581872319101641132_n.jpg",
  kotaTealPeacock: "/tafa-assets/814761844_1076502655095350_8353822882528535397_n.jpg",

  // Backward compatibility keys
  product1: "/tafa-assets/806366292_1071856802226602_7059483926647638925_n.jpg",
  product2: "/tafa-assets/814088576_1076502615095354_7429738963769164894_n.jpg",
  product3: "/tafa-assets/813805019_1075162411896041_4532628974852127168_n.jpg",
  product4: "/tafa-assets/814761844_1076502655095350_8353822882528535397_n.jpg",
  product5: "/tafa-assets/813634865_1075160555229560_5818203055627500016_n.jpg",
  product6: "/tafa-assets/815469353_1076502661762016_187855542332609630_n.jpg",
  product7: "/tafa-assets/795582567_1075160605229555_4581872319101641132_n.jpg",
  product8: "/tafa-assets/813407336_1075162458562703_6329338457814441472_n.jpg",
  product9: "/tafa-assets/828598232_1087875203958095_2142770223889394794_n.jpg",
  product10: "/tafa-assets/809544132_1072994075446208_6475467488723721568_n.jpg",
  product11: "/tafa-assets/813805019_1075162411896041_4532628974852127168_n.jpg",
  product12: "/tafa-assets/baner.jpg",
};

// ═══════════════════════════════════════════
// Product Categories — TAFA
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Kalamkari Boutique Sarees",
    nameBn: "ঐতিহ্যবাহী কালামকারি শাড়ি",
    slug: "kalamkari-sarees",
    description:
      "ঐতিহ্যবাহী ময়ূর মোটিফ, রয়্যাল কন্ট্রাস্ট পাড় ও রূপালী জরির গর্জিয়াস বুননে তৈরি এক্সক্লুসিভ কালামকারি শাড়ি কালেকশন।",
    image: ASSETS.kalamkariBlack,
    productCount: 16,
  },
  {
    name: "Kota Doria & Linen Silk",
    nameBn: "কোটা ডোরিয়া ও লিনেন সিল্ক",
    slug: "kota-doria-linen",
    description:
      "আরামদায়ক সফট ফেব্রিক, ফ্লোরাল কলকা বুটি, শেভরন জিগজ্যাগ আঁচল এবং সূক্ষ্ম জরি কাজের ক্লাসিক উৎসব শাড়ি।",
    image: ASSETS.kotaCrimson,
    productCount: 22,
  },
  {
    name: "Festive Tissue Katan & Silk",
    nameBn: "উৎসবে টিস্যু কাতান ও সিল্ক",
    slug: "festive-tissue-katan",
    description:
      "আলো ঝলমলে সোনালী টিস্যু কাতান ও রয়্যাল শ্যাম্পেন সিল্ক—বিয়ে, রিসেপশন ও উৎসবের পরম আভিজাত্যপূর্ণ আকর্ষণ।",
    image: ASSETS.tissueKatanGold,
    productCount: 18,
  },
  {
    name: "Handcrafted Warli & Linen",
    nameBn: "হ্যান্ডক্রাফটেড ওয়ারলি আর্ট শাড়ি",
    slug: "warli-folk-art",
    description:
      "প্রাচীন লোকশিল্পের নিপুণ ওয়ারলি আল্পনা, জ্যামিতিক নকশা ও আরামদায়ক সফট লিনেন ফেব্রিকের সিগনেচার শাড়ি।",
    image: ASSETS.warliPlum,
    productCount: 12,
  },
  {
    name: "Dhakai Jamdani & Gadwal",
    nameBn: "ঐতিহ্যবাহী জামদানি ও গাদোয়াল",
    slug: "jamdani-gadwal",
    description:
      "শতবর্ষের ঐতিহ্যবাহী ঢাকাই তাঁতের খাঁটি জামদানি ও গাদোয়াল নকশা—নান্দনিক বুটি ও মনকাড়া কন্ট্রাস্ট পাড়।",
    image: ASSETS.tissueKotaPeach,
    productCount: 14,
  },
  {
    name: "Showroom Special Curations",
    nameBn: "ধানমন্ডি শোরুম স্পেশাল কালেকশন",
    slug: "showroom-specials",
    description:
      "ধানমন্ডি ফ্ল্যাগশিপ শোরুমের সাপ্তাহিক নতুন আগমনী ও এক্সক্লুসিভ বুটিক ড্রপ—সবচেয়ে রিজনেবল প্রাইসে।",
    image: ASSETS.showroomInterior,
    productCount: 25,
  },
];

// ═══════════════════════════════════════════
// Collections — Featured Curations
// ═══════════════════════════════════════════
export const FEATURED_COLLECTIONS = [
  {
    id: "col-kalamkari",
    title: "Royal Kalamkari Heritage 2026",
    titleBn: "রয়্যাল কালামকারি হেরিটেজ সিরিজ",
    slug: "kalamkari-sarees",
    subtitle: "ময়ূর মোটিফ, স্ট্রাইপড আঁচল ও নিখুঁত রূপালী জরির আভিজাত্য — স্পেশাল এডিট",
    image: ASSETS.kalamkariBlack,
    itemCount: 16,
  },
  {
    id: "col-kota-doria",
    title: "Festive Kota Doria & Linen Silk",
    titleBn: "ফেস্টিভ কোটা ডোরিয়া ও লিনেন সিল্ক",
    slug: "kota-doria-linen",
    subtitle: "লাল, টিল গ্রিন ও নেভি ব্লু ট্রায়ো — ফ্লোরাল কলকা বুটি ও গর্জিয়াস জরি পাড়",
    image: ASSETS.kotaCrimson,
    itemCount: 22,
  },
  {
    id: "col-tissue-katan",
    title: "Grand Festive Golden Tissue Katan",
    titleBn: "গ্র্যান্ড ফেস্টিভ গোল্ডেন টিস্যু কাতান",
    slug: "festive-tissue-katan",
    subtitle: "উৎসবে ঝলমলে সোনালী টিস্যু কাতান ও রয়্যাল শ্যাম্পেন সিল্ক মাস্টারপিস",
    image: ASSETS.tissueKatanGold,
    itemCount: 18,
  },
  {
    id: "col-warli-folk",
    title: "Handcrafted Tribal Warli Folk Art",
    titleBn: "হ্যান্ডক্রাফটেড ট্রাইবাল ওয়ারলি আর্ট",
    slug: "warli-folk-art",
    subtitle: "ওয়াইন প্লাম শেডে প্রাচীন ফোক আর্ট ও খাঁটি লিনেন কটন বুনন",
    image: ASSETS.warliPlum,
    itemCount: 12,
  },
];

// ═══════════════════════════════════════════
// All Products — TAFA Official Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  {
    id: "TF-001",
    name: "TAFA Midnight Black & Mustard Kalamkari Peacock Motif Boutique Saree",
    slug: "tafa-midnight-black-mustard-kalamkari-peacock-motif-boutique-saree",
    price: 1990,
    compareAtPrice: 2450,
    image: ASSETS.kalamkariBlack,
    images: [ASSETS.kalamkariBlack, ASSETS.kalamkariGreen, ASSETS.showroomInterior],
    category: "Kalamkari Boutique Sarees",
    isNew: true,
    isBestseller: true,
    stock: 24,
  },
  {
    id: "TF-002",
    name: "TAFA Crimson Red Festive Kota Doria & Linen Silk Designer Saree",
    slug: "tafa-crimson-red-festive-kota-doria-linen-silk-designer-saree",
    price: 1650,
    compareAtPrice: 1950,
    image: ASSETS.kotaCrimson,
    images: [ASSETS.kotaCrimson, ASSETS.kotaTeal, ASSETS.kotaNavy],
    category: "Kota Doria & Linen Silk",
    isNew: true,
    isBestseller: true,
    stock: 30,
  },
  {
    id: "TF-003",
    name: "TAFA Peacock Teal Green Kota Doria & Linen Silk Designer Saree",
    slug: "tafa-peacock-teal-green-kota-doria-linen-silk-designer-saree",
    price: 1650,
    compareAtPrice: 1950,
    image: ASSETS.kotaTeal,
    images: [ASSETS.kotaTeal, ASSETS.kotaNavy, ASSETS.kotaCrimson],
    category: "Kota Doria & Linen Silk",
    isNew: true,
    isBestseller: true,
    stock: 28,
  },
  {
    id: "TF-004",
    name: "TAFA Midnight Navy Blue Kota Doria & Linen Silk Designer Saree",
    slug: "tafa-midnight-navy-blue-kota-doria-linen-silk-designer-saree",
    price: 1650,
    compareAtPrice: 1950,
    image: ASSETS.kotaNavy,
    images: [ASSETS.kotaNavy, ASSETS.kotaCrimson, ASSETS.kotaTeal],
    category: "Kota Doria & Linen Silk",
    isNew: true,
    isBestseller: true,
    stock: 25,
  },
  {
    id: "TF-005",
    name: "TAFA Sage Green & Royal Purple Kalamkari Saree with Zari Border",
    slug: "tafa-sage-green-royal-purple-kalamkari-saree-with-zari-border",
    price: 1990,
    compareAtPrice: 2450,
    image: ASSETS.kalamkariGreen,
    images: [ASSETS.kalamkariGreen, ASSETS.kalamkariBlack, ASSETS.showroomInterior],
    category: "Kalamkari Boutique Sarees",
    isNew: true,
    isBestseller: true,
    stock: 20,
  },
  {
    id: "TF-006",
    name: "TAFA Handcrafted Plum Wine Warli Folk Art Linen Saree",
    slug: "tafa-handcrafted-plum-wine-warli-folk-art-linen-saree",
    price: 1650,
    compareAtPrice: 1950,
    image: ASSETS.warliPlum,
    images: [ASSETS.warliPlum, ASSETS.kotaCrimson, ASSETS.kalamkariGreen],
    category: "Handcrafted Warli & Linen",
    isNew: true,
    isBestseller: true,
    stock: 18,
  },
  {
    id: "TF-007",
    name: "TAFA Peach Rose Shimmer Tissue Kota Silk Floral Embroidered Saree",
    slug: "tafa-peach-rose-shimmer-tissue-kota-silk-floral-embroidered-saree",
    price: 2180,
    compareAtPrice: 2650,
    image: ASSETS.tissueKotaPeach,
    images: [ASSETS.tissueKotaPeach, ASSETS.tissueKatanGold, ASSETS.tissueSilkChampagne],
    category: "Festive Tissue Katan & Silk",
    isNew: true,
    isBestseller: true,
    stock: 16,
  },
  {
    id: "TF-008",
    name: "TAFA Pure Gold Festive Tissue Katan Bridal Saree Special",
    slug: "tafa-pure-gold-festive-tissue-katan-bridal-saree-special",
    price: 3250,
    compareAtPrice: 3850,
    image: ASSETS.tissueKatanGold,
    images: [ASSETS.tissueKatanGold, ASSETS.tissueSilkChampagne, ASSETS.tissueKotaPeach],
    category: "Festive Tissue Katan & Silk",
    isNew: true,
    isBestseller: true,
    stock: 14,
  },
  {
    id: "TF-009",
    name: "TAFA Royal Champagne Gold Tissue Silk Saree (Model Draped Edition)",
    slug: "tafa-royal-champagne-gold-tissue-silk-saree-model-draped-edition",
    price: 3450,
    compareAtPrice: 4200,
    image: ASSETS.tissueSilkChampagne,
    images: [ASSETS.tissueSilkChampagne, ASSETS.tissueKatanGold, ASSETS.showroomInterior],
    category: "Festive Tissue Katan & Silk",
    isNew: true,
    isBestseller: true,
    stock: 12,
  },
  {
    id: "TF-010",
    name: "TAFA Royal Sapphire Blue Floral Silk Saree with Zari Pallu",
    slug: "tafa-royal-sapphire-blue-floral-silk-saree-with-zari-pallu",
    price: 1850,
    compareAtPrice: 2250,
    image: ASSETS.royalBlueFloral,
    images: [ASSETS.royalBlueFloral, ASSETS.kotaTeal, ASSETS.kalamkariGreen],
    category: "Kota Doria & Linen Silk",
    isNew: true,
    isBestseller: true,
    stock: 22,
  },
  {
    id: "TF-011",
    name: "TAFA Dhanmondi Flagship Exclusive Showroom Curation Saree",
    slug: "tafa-dhanmondi-flagship-exclusive-showroom-curation-saree",
    price: 2450,
    compareAtPrice: 2950,
    image: ASSETS.showroomInterior,
    images: [ASSETS.showroomInterior, ASSETS.kalamkariBlack, ASSETS.tissueKatanGold],
    category: "Showroom Special Curations",
    isNew: true,
    isBestseller: false,
    stock: 35,
  },
  {
    id: "TF-012",
    name: "TAFA Heritage Dhakai Jamdani & Gadwal Festive Saree",
    slug: "tafa-heritage-dhakai-jamdani-gadwal-festive-saree",
    price: 2180,
    compareAtPrice: 2600,
    image: ASSETS.tissueKotaPeach,
    images: [ASSETS.tissueKotaPeach, ASSETS.kotaCrimson, ASSETS.kalamkariBlack],
    category: "Dhakai Jamdani & Gadwal",
    isNew: true,
    isBestseller: true,
    stock: 15,
  },
];

// ═══════════════════════════════════════════
// Filtered Helper Collections
// ═══════════════════════════════════════════
export const NEW_ARRIVALS = ALL_PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 8);
export const KALAMKARI_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Kalamkari Boutique Sarees");
export const KOTA_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Kota Doria & Linen Silk");
export const TISSUE_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Festive Tissue Katan & Silk");
export const WARLI_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Handcrafted Warli & Linen");
export const JAMDANI_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Dhakai Jamdani & Gadwal");
export const SHOWROOM_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Showroom Special Curations");

// Backward compatibility aliases
export const MUSLIN_PRODUCTS = KOTA_PRODUCTS;
export const BRIDAL_PRODUCTS = TISSUE_PRODUCTS;
export const KARCHUPI_PRODUCTS = KALAMKARI_PRODUCTS;
export const PASTEL_PRODUCTS = WARLI_PRODUCTS;
export const FOURPIECE_PRODUCTS = SHOWROOM_PRODUCTS;
export const LAWN_PRODUCTS = KOTA_PRODUCTS;
export const PARTY_PRODUCTS = TISSUE_PRODUCTS;
export const COTTON_PRODUCTS = WARLI_PRODUCTS;
export const CHUNRI_PRODUCTS = KALAMKARI_PRODUCTS;
export const SIGNATURE_PRODUCTS = TISSUE_PRODUCTS;
export const SKINCARE_PRODUCTS = SHOWROOM_PRODUCTS;
export const SEQUIN_PRODUCTS = TISSUE_PRODUCTS;
export const KATAN_PRODUCTS = TISSUE_PRODUCTS;
export const THREEPIECE_PRODUCTS = SHOWROOM_PRODUCTS;
export const ORGANZA_PRODUCTS = TISSUE_PRODUCTS;
export const PRET_PRODUCTS = SHOWROOM_PRODUCTS;
export const SILK_PRODUCTS = TISSUE_PRODUCTS;
export const DESIGNER_PRODUCTS = KALAMKARI_PRODUCTS;
export const CASUAL_PRODUCTS = KOTA_PRODUCTS;
export const VINTAGE_PRODUCTS = KALAMKARI_PRODUCTS;
export const FARSI_PRODUCTS = TISSUE_PRODUCTS;
export const VELVET_PRODUCTS = TISSUE_PRODUCTS;
export const JEWELRY_PRODUCTS = SHOWROOM_PRODUCTS;
export const COORD_PRODUCTS = SHOWROOM_PRODUCTS;
export const ABAYA_PRODUCTS = SHOWROOM_PRODUCTS;
export const KAFTAN_PRODUCTS = SHOWROOM_PRODUCTS;
export const DRESS_PRODUCTS = SHOWROOM_PRODUCTS;
export const KURTI_PRODUCTS = KOTA_PRODUCTS;
export const CHIFFON_PRODUCTS = KOTA_PRODUCTS;

// Helper to filter by category slug
export function getProductsByCategory(slug: string): ProductCardProps[] {
  switch (slug) {
    case "kalamkari-sarees":
    case "exclusive-muslin":
    case "chunri-traditional":
      return KALAMKARI_PRODUCTS;
    case "kota-doria-linen":
    case "pastel-heritage":
    case "premium-cotton":
    case "handloom-cotton-sarees":
      return KOTA_PRODUCTS;
    case "festive-tissue-katan":
    case "bridal-festive":
    case "festive-party":
    case "heritage-katan-silk":
    case "sequin-tissue-sarees":
      return TISSUE_PRODUCTS;
    case "warli-folk-art":
      return WARLI_PRODUCTS;
    case "jamdani-gadwal":
    case "dhakai-jamdani":
      return JAMDANI_PRODUCTS;
    case "showroom-specials":
    case "luxury-karchupi":
    case "muslin-four-piece":
      return SHOWROOM_PRODUCTS;
    case "new-arrivals":
      return NEW_ARRIVALS;
    case "featured":
      return FEATURED_PRODUCTS;
    default:
      return ALL_PRODUCTS;
  }
}

// ═══════════════════════════════════════════
// Seeding Helpers & Backwards-Compatible Exports
// ═══════════════════════════════════════════
export const DEMO_CATEGORIES = CATEGORIES;

export const DEMO_PRODUCTS = ALL_PRODUCTS.map((p) => {
  const catObj = CATEGORIES.find((c) => c.name === p.category) || CATEGORIES[0];
  const catName = catObj?.name || "Kalamkari Boutique Sarees";
  const catSlug = catObj?.slug || "kalamkari-sarees";
  const imgs = p.images && p.images.length > 0 ? p.images : [p.image];

  return {
    name: p.name,
    slug: p.slug,
    description: `${p.name} — TAFA (তাফা) এক্সক্লুসিভ শাড়ি কালেকশন। উৎসবকে সাজাই TAFA’র শাড়িতে! সবচেয়ে রিজনেবল প্রাইসে প্রিমিয়াম ফেব্রিক, সূক্ষ্ম কারুকাজ, নিখুঁত আঁচল ও ম্যাচিং ব্লাউজ পিস। আমাদের ধানমন্ডি ৫ শোরুম (House 42/1, Road No 5, Dhanmondi) থেকে সরাসরি প্রস্তুতকৃত। সারা দেশে ক্যাশ অন হোম ডেলিভারি এবং ডেলিভারিম্যানের সামনে পার্সেল খুলে চেক করে পেমেন্ট করার শতভাগ নিশ্চিন্ত সুবিধা।`,
    price: p.price,
    isFeatured: p.isBestseller ?? true,
    images: imgs,
    category: {
      name: catName,
      slug: catSlug,
    },
    variants: [
      {
        size: "Standard Saree (12 Haat with Blouse Piece)",
        color: "As Shown in Picture",
        price: p.price,
        stock: Math.max(8, Math.floor((p.stock ?? 20) / 2)),
        images: imgs,
      },
      {
        size: "Fall & Pico Finished Premium Edition",
        color: "As Shown in Picture",
        price: p.price + 250,
        stock: Math.max(5, Math.floor((p.stock ?? 20) / 3)),
        images: imgs,
      },
    ],
  };
});
