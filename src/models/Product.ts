import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  slug: string;
  sku: string;
  description: string;
  shortDescription?: string;
  categoryId?: mongoose.Types.ObjectId;
  categoryName?: string;
  brand: string;
  price: number; // Stored in minor units (paise) e.g., ₹499 = 49900
  compareAtPrice?: number;
  stock: number;
  images: string[];
  bullets: string[];
  ratingAverage: number;
  ratingCount: number;
  isActive: boolean;
  isFeatured: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    sku: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    shortDescription: { type: String },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', index: true },
    categoryName: { type: String },
    brand: { type: String, default: 'Health Veda Organics' },
    price: { type: Number, required: true, min: 0 },
    compareAtPrice: { type: Number },
    stock: { type: Number, required: true, default: 0, min: 0 },
    images: [{ type: String, required: true }],
    bullets: [{ type: String }],
    ratingAverage: { type: Number, default: 5.0, min: 0, max: 5 },
    ratingCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true, index: true },
    isFeatured: { type: Boolean, default: false, index: true },
    tags: [{ type: String, index: true }],
  },
  { timestamps: true }
);

// Compound indexes for high-speed queries
ProductSchema.index({ isActive: 1, isFeatured: 1, createdAt: -1 });
ProductSchema.index({ categoryId: 1, price: 1 });
ProductSchema.index({ name: 'text', description: 'text', tags: 'text' });

export const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
