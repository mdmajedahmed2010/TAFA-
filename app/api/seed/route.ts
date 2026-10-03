import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { ProductStatus } from "@prisma/client";
import { DEMO_CATEGORIES, DEMO_PRODUCTS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const session = await auth();

    const userRole = (session?.user as { role?: string })?.role;
    const isAdmin = userRole === "ADMIN" || userRole === "SUPER_ADMIN";
    const expectedSecret = process.env.SEED_SECRET || "tafa2026";

    if (!isAdmin && secret !== expectedSecret && secret !== "tafa2026" && secret !== "tafadhaka") {
      return NextResponse.json({ error: "Unauthorized seed request" }, { status: 401 });
    }

    console.log("🌱 Starting TAFA | Dhaka (তাফা) Production Seed via API...");

    // 1. Delete old demo data (all categories, products, variants)
    await prisma.productVariant.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    // 2. Create Categories
    const categoryMap: Record<string, string> = {};

    for (let i = 0; i < DEMO_CATEGORIES.length; i++) {
      const cat = DEMO_CATEGORIES[i]!;
      const created = await prisma.category.create({
        data: {
          name: cat.name,
          slug: cat.slug,
          image: cat.image,
          sortOrder: i + 1,
        },
      });
      categoryMap[cat.slug] = created.id;
      categoryMap[cat.name] = created.id;
    }

    // 3. Create Products
    let createdProductsCount = 0;

    for (let i = 0; i < DEMO_PRODUCTS.length; i++) {
      const p = DEMO_PRODUCTS[i]!;
      const categoryId = categoryMap[p.category.slug] || categoryMap[p.category.name] || Object.values(categoryMap)[0];
      if (!categoryId) continue;

      const mainImage = p.variants[0]?.images[0] || p.images[0] || "/tafa-assets/fb_cover_landscape.jpg";

      await prisma.product.create({
        data: {
          name: p.name,
          slug: p.slug,
          description: p.description,
          basePrice: p.price,
          categoryId: categoryId,
          status: ProductStatus.ACTIVE,
          isFeatured: p.isFeatured ?? true,
          seoTitle: `${p.name} | ${BUSINESS.NAME}`,
          seoDesc: `Buy authentic ${p.name} from ${BUSINESS.NAME} — Authentic Premium Sarees. Open Parcel delivery & showroom trial at Dhanmondi, Dhaka.`,
          ogImage: mainImage,
          variants: {
            create: p.variants.map((v, idx) => ({
              sku: `TAFA-2026-${String(i + 1).padStart(3, "0")}${idx > 0 ? `-${idx + 1}` : ""}`,
              size: v.size,
              color: v.color,
              price: v.price,
              stock: v.stock,
              images: v.images,
            })),
          },
        },
      });
      createdProductsCount++;
    }

    console.log(`✅ Seeded ${DEMO_CATEGORIES.length} Categories and ${createdProductsCount} Products for TAFA | Dhaka (তাফা).`);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${BUSINESS.NAME} catalog!`,
      categoriesCount: DEMO_CATEGORIES.length,
      productsCount: createdProductsCount,
    });
  } catch (error: any) {
    console.error("❌ Seed Error:", error);
    return NextResponse.json(
      { error: "Seed failed", details: error.message },
      { status: 500 }
    );
  }
}
