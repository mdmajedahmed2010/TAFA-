import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCard } from "@/components/product/product-card";
import { getProducts } from "@/actions/product.actions";
import { ALL_PRODUCTS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Search Products — ${BUSINESS.NAME}`,
  description: `Search exclusive ${BUSINESS.NAME} collections, Authentic Dhakai Muslin Sarees, Dhakai Jamdani, Bridal Red Muslin, and Luxury Karchupi Sarees.`,
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string; search?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolved = await searchParams;
  const query = resolved.q || resolved.search || "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = { products: [] };
  try {
    result = await getProducts({
      search: query || undefined,
      pageSize: 36,
    });
  } catch (e) {
    // Ignore DB errors
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let products: any[] = result.products || [];

  if (products.length === 0) {
    const qLower = query.toLowerCase();
    products = ALL_PRODUCTS.filter(p => 
      !query || 
      p.name.toLowerCase().includes(qLower) || 
      (p.category || "").toLowerCase().includes(qLower)
    ).map(p => ({
      ...p,
      basePrice: p.price,
      variants: [{ images: [p.image], price: p.price }],
      category: { name: p.category }
    }));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedProducts = products.map((p: any) => {
    const variantImages = p.variants?.[0]?.images;
    const image =
      Array.isArray(variantImages) && variantImages.length > 0
        ? variantImages[0]
        : "/tafa-assets/473729906_122137976936551800_4469796677943567704_n.jpg";

    const variantPrice = p.variants?.[0]?.price ? Number(p.variants[0].price) : Number(p.basePrice);

    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: variantPrice,
      compareAtPrice: Math.round(variantPrice * 1.2),
      image,
      category: p.category?.name || "TAFA Saree Collection",
      isNew: p.isFeatured,
    };
  });

  return (
    <div className="container mx-auto px-6 md:px-8 py-6 md:py-10 max-w-[1280px] min-h-[70vh]">
      <Breadcrumb items={[{ label: "Search" }]} />

      <div className="mt-6 mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-serif text-[#121815]">
          {query ? `Search Results for "${query}"` : "Explore Catalog"}
        </h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-2">
          {query
            ? `Found ${mappedProducts.length} ${mappedProducts.length === 1 ? "item" : "items"} matching your query.`
            : "Use the search bar above to discover Kalamkari, Tissue Katan, Kota Doria, and Tissue Silk Sarees."}
        </p>
      </div>

      {mappedProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 mt-8">
          {mappedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 border border-dashed border-[#E8DFD5] rounded-2xl max-w-md mx-auto space-y-3 mt-12 bg-white">
          <p className="text-sm font-semibold text-[#181513] font-serif">No matching products found</p>
          <p className="text-xs text-neutral-500 max-w-xs mx-auto">
            Try searching for another keyword or browse our curated Dhakai Muslin & Luxury Saree collections.
          </p>
        </div>
      )}
    </div>
  );
}
