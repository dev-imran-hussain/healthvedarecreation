import { connectDB } from '@/lib/db';
import { Product, IProduct } from '@/models/Product';
import { redis } from '@/lib/redis';

export async function getProducts(params: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  sort?: string;
  featured?: boolean;
}) {
  await connectDB();
  const page = params.page || 1;
  const limit = Math.min(params.limit || 20, 100);
  const skip = (page - 1) * limit;

  // Cache key for public queries without search
  const cacheKey = !params.search
    ? `products:cat_${params.category || 'all'}:p_${page}:l_${limit}:s_${params.sort || 'new'}:f_${params.featured ?? 'any'}`
    : null;

  if (cacheKey) {
    const cached = await redis.get(cacheKey);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        // Fallback to DB
      }
    }
  }

  const query: Record<string, unknown> = { isActive: true };

  if (params.category && params.category !== 'all') {
    query.categoryName = new RegExp(`^${params.category}$`, 'i');
  }

  if (params.featured !== undefined) {
    query.isFeatured = params.featured;
  }

  if (params.search) {
    query.$text = { $search: params.search };
  }

  let sortQuery: Record<string, 1 | -1> = { createdAt: -1 };
  if (params.sort === 'price_asc') sortQuery = { price: 1 };
  if (params.sort === 'price_desc') sortQuery = { price: -1 };
  if (params.sort === 'popular') sortQuery = { ratingCount: -1 };

  const [products, total] = await Promise.all([
    Product.find(query)
      .select('name slug sku brand price compareAtPrice stock images bullets ratingAverage ratingCount categoryName isFeatured')
      .sort(sortQuery)
      .skip(skip)
      .limit(limit)
      .lean(),
    Product.countDocuments(query),
  ]);

  const result = {
    products,
    pagination: {
      page,
      limit,
      total,
      hasNextPage: skip + products.length < total,
    },
  };

  if (cacheKey) {
    // Cache for 10 minutes
    await redis.set(cacheKey, JSON.stringify(result), 'EX', 600);
  }

  return result;
}

export async function getProductBySlugOrId(identifier: string) {
  await connectDB();
  const cacheKey = `product:${identifier}`;
  const cached = await redis.get(cacheKey);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch {
      // Fallback
    }
  }

  const isObjectId = identifier.match(/^[0-9a-fA-F]{24}$/);
  const query = isObjectId ? { _id: identifier } : { slug: identifier };

  const product = await Product.findOne({ ...query, isActive: true }).lean();
  if (!product) throw new Error('Product not found');

  await redis.set(cacheKey, JSON.stringify(product), 'EX', 1800); // 30 mins
  return product;
}

export async function invalidateProductCache(slug?: string, id?: string) {
  if (slug) await redis.del(`product:${slug}`);
  if (id) await redis.del(`product:${id}`);
}
