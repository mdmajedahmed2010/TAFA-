/**
 * TAFA | Dhaka (তাফা) — Collection/Category Page
 * Route: /collections/[slug]
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCard } from "@/components/product/product-card";
import { CollectionFilters } from "@/components/product/collection-filters";
import { SortDropdown } from "@/components/product/sort-dropdown";
import { MobileFilterDrawer } from "@/components/product/mobile-filter-drawer";
import { getProducts } from "@/actions/product.actions";
import { prisma } from "@/lib/db";
import { CATEGORIES, getProductsByCategory, ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export const revalidate = 60;

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ size?: string | string[]; price?: string; sort?: string; q?: string }>;
}

// Special category descriptions
const specialCategories: Record<string, { name: string; description: string }> = {
  "new-arrivals": {
    name: "New Arrivals",
    description: "Discover our latest authentic Kalamkari cotton, Tissue Katan, Kota Doria weaves, and festive saree curations.",
  },
  featured: {
    name: "Featured Collections",
    description: `Handpicked signature partywear sarees & elegant drape curations by ${BUSINESS.NAME}.`,
  },
  sale: {
    name: "Special Offers",
    description: "Exclusive saree offers with nationwide Open Parcel inspection & showroom trial at Dhanmondi, Dhaka.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Check special categories first
  if (specialCategories[slug]) {
    return {
      title: `${specialCategories[slug].name} — ${BUSINESS.NAME}`,
      description: specialCategories[slug].description,
    };
  }

  // Otherwise fetch from DB or Demo Data
  let category = await prisma.category.findUnique({ where: { slug } });
  
  // Fallback to Demo Data
  if (!category) {
    const demoCat = CATEGORIES.find((c) => c.slug === slug);
    if (demoCat) {
      category = { id: "demo", name: demoCat.name, slug: demoCat.slug } as any;
    }
  }

  if (!category) return { title: `Collection Not Found — ${BUSINESS.NAME}` };

  return {
    title: `${category.name} — ${BUSINESS.NAME}`,
    description: `Browse our ${category.name} collection — smart & elegant heritage sarees and boutique wear with Open Parcel Policy.`,
  };
}

export default async function CollectionPage({ params, searchParams }: CollectionPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;

  // Determine category info
  let categoryName: string;
  let categoryDescription: string;
  let useFeaturedFilter = false;
  let useNewestSort = false;

  if (specialCategories[slug]) {
    categoryName = specialCategories[slug].name;
    categoryDescription = specialCategories[slug].description;
    if (slug === "featured") useFeaturedFilter = true;
    if (slug === "new-arrivals") useNewestSort = true;
  } else {
    // Look up category from DB or Demo Data
    let category = await prisma.category.findUnique({ where: { slug } });
    if (!category) {
      const demoCat = CATEGORIES.find((c) => c.slug === slug);
      if (demoCat) {
        category = { id: "demo", name: demoCat.name, slug: demoCat.slug } as any;
      }
    }
    if (!category) notFound();
    categoryName = category.name;
    categoryDescription = `Browse our ${category.name} collection — smart & elegant heritage sarees, delicate sequin borders, and regal boutique couture.`;
  }

  // Determine sort
  const sort = resolvedSearchParams.sort;
  let sortOrder = "newest";
  if (useNewestSort) sortOrder = "newest";
  if (sort === "price-low-high") sortOrder = "price-asc";
  if (sort === "price-high-low") sortOrder = "price-desc";

  // Fetch products from DB
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = { products: [] };
  try {
    result = await getProducts({
      categorySlug: specialCategories[slug] ? undefined : slug,
      sort: sortOrder,
      pageSize: 48,
      isFeatured: useFeaturedFilter ? true : undefined,
    });
  } catch (e) {
    // Ignore DB errors
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let products: any[] = result.products || [];

  // Fallback to Demo Data if DB is empty
  if (products.length === 0) {
    const demoProducts = getProductsByCategory(slug);
    products = demoProducts.map(p => ({
      ...p,
      basePrice: p.price,
      variants: [{ images: [p.image], price: p.price }],
      category: { name: p.category }
    }));
  }

  // Server-side price filter
  const price = resolvedSearchParams.price;
  if (price && typeof price === "string") {
    const parts = price.split("-");
    const minVal = Number(parts[0]);
    const maxVal = Number(parts[1]);
    if (!isNaN(minVal) && !isNaN(maxVal)) {
      products = products.filter((p) => {
        const productPrice = Number(p.basePrice);
        return productPrice >= minVal && productPrice <= maxVal;
      });
    }
  }

  // Server-side size filter
  const sizeParam = resolvedSearchParams.size;
  if (sizeParam) {
    const selectedSizes = Array.isArray(sizeParam) ? sizeParam : [sizeParam];
    if (selectedSizes.length > 0) {
      products = products.filter((p) =>
        p.variants?.some((v: { size?: string }) => v.size && selectedSizes.includes(v.size))
      );
    }
  }

  // Server-side search query filter
  const searchQuery = resolvedSearchParams.q;
  if (searchQuery && typeof searchQuery === "string" && searchQuery.trim().length > 0) {
    const qLower = searchQuery.trim().toLowerCase();
    products = products.filter(
      (p) =>
        p.name?.toLowerCase().includes(qLower) ||
        p.description?.toLowerCase().includes(qLower)
    );
  }

  // Map DB products to ProductCard format
  const mappedProducts = products.map((p) => {
    const variantImages = p.variants?.[0]?.images;
    const image =
      Array.isArray(variantImages) && variantImages.length > 0
        ? variantImages[0]
        : ASSETS.sareeChampagne;

    const variantPrice = p.variants?.[0]?.price ? Number(p.variants[0].price) : Number(p.basePrice);

    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: variantPrice,
      compareAtPrice: Math.round(variantPrice * 1.15),
      image,
      category: p.category?.name || categoryName,
      isNew: p.isFeatured,
    };
  });

  return (
    <div className="container mx-auto px-4 md:px-8 py-6 md:py-10 max-w-[1280px]">
      <Breadcrumb
        items={[{ label: "Collections", href: "/collections" }, { label: categoryName }]}
      />

      <div className="mt-6 mb-10 bg-gradient-to-r from-[#133827] via-[#0A1F16] to-[#133827] text-[#FAF7F2] p-8 md:p-14 rounded-3xl border border-[#D4AF37]/30 shadow-xl text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.2),transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-extrabold uppercase tracking-[0.24em] mb-3 text-[#D4AF37]">
            ✦ TAFA (তাফা) ✦
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-serif mb-3 text-white">
            {categoryName}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed font-sans font-medium max-w-lg mx-auto">
            {categoryDescription}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <CollectionFilters />
      </div>

      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {mappedProducts.length} {mappedProducts.length === 1 ? "Product" : "Products"} Found
        </p>
        <div className="flex items-center gap-4">
          <MobileFilterDrawer />
          <SortDropdown />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {mappedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {mappedProducts.length === 0 && (
        <div className="text-center py-24 border border-dashed border-border/80 rounded-lg max-w-md mx-auto space-y-3 mt-12 bg-neutral-50/50">
          <p className="text-sm font-semibold text-foreground">No matching products found</p>
          <p className="text-xs text-muted-foreground max-w-xs mx-auto">
            Try adjusting your filters to discover other exclusive saree & boutique edits.
          </p>
        </div>
      )}
    </div>
  );
}
