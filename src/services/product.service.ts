import mongoose from 'mongoose';
import { connectDB } from '@/lib/db';
import { Product, IProduct } from '@/models/Product';
import { Category } from '@/models/Category';
import { slugify } from '@/utils/slug';
import { NotFoundError } from '@/utils/errors';

/**
 * Product Service (Lean Production Architecture)
 * Section 19, 21, 72, 73, 74: Direct MongoDB Atlas queries.
 * No Redis, no search engine, no pagination for ~20 product catalog.
 */

export async function getProducts(categorySlug?: string): Promise<IProduct[]> {
  await connectDB();
  const query: Record<string, unknown> = { isActive: true };

  if (categorySlug && categorySlug !== 'all') {
    const category = await Category.findOne({ slug: categorySlug, isActive: true });
    if (category) {
      query.categoryId = category._id;
    }
  }

  return Product.find(query).sort({ displayOrder: 1, createdAt: -1 });
}

export async function getProduct(idOrSlug: string): Promise<IProduct> {
  await connectDB();
  let product: IProduct | null = null;

  if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
    product = await Product.findById(idOrSlug);
  }

  if (!product) {
    product = await Product.findOne({ slug: idOrSlug });
  }

  if (!product || !product.isActive) {
    throw new NotFoundError('Product not found');
  }

  return product;
}

export interface ProductInput {
  name: string;
  slug?: string;
  description: string;
  shortDescription?: string;
  sku: string;
  categoryId?: string | mongoose.Types.ObjectId;
  price: number;
  compareAtPrice?: number;
  stock: number;
  images: Array<{ url: string; publicId?: string }>;
  attributes?: Record<string, unknown>;
  displayOrder?: number;
  isActive?: boolean;
  isFeatured?: boolean;
}

export async function createProduct(data: ProductInput): Promise<IProduct> {
  await connectDB();
  const slug = data.slug ? slugify(data.slug) : slugify(data.name || 'product');

  return Product.create({
    ...data,
    slug,
    categoryId: data.categoryId ? new mongoose.Types.ObjectId(String(data.categoryId)) : undefined,
    isActive: true,
  });
}

export async function updateProduct(id: string, data: Partial<ProductInput>): Promise<IProduct> {
  await connectDB();
  const updateData: Record<string, unknown> = { ...data };
  if (data.slug) {
    updateData.slug = slugify(data.slug);
  }
  if (data.categoryId) {
    updateData.categoryId = new mongoose.Types.ObjectId(String(data.categoryId));
  }

  const product = await Product.findByIdAndUpdate(id, { $set: updateData }, { new: true });
  if (!product) throw new NotFoundError('Product not found');
  return product;
}

export async function archiveProduct(id: string): Promise<{ success: boolean; message: string }> {
  await connectDB();
  // Section 65: Product Archive instead of hard delete
  const product = await Product.findByIdAndUpdate(id, { $set: { isActive: false } });
  if (!product) throw new NotFoundError('Product not found');
  return { success: true, message: 'Product archived successfully' };
}
