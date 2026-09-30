import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProductImage {
  url: string;
  publicId?: string;
}

export interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  sku: string;
  categoryId?: mongoose.Types.ObjectId;
  price: number; // Stored in minor units (paise) e.g., ₹499 = 49900
  compareAtPrice?: number;
  stock: number;
  images: IProductImage[];
  attributes?: Record<string, unknown>;
  displayOrder: number;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductImageSchema = new Schema<IProductImage>(
  {
    url: { type: String, required: true },
    publicId: { type: String },
  },
  { _id: false }
);

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    sku: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    shortDescription: { type: String },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', index: true },
    price: { type: Number, required: true, min: 0 },
    compareAtPrice: { type: Number },
    stock: { type: Number, required: true, default: 0, min: 0 },
    images: [ProductImageSchema],
    attributes: { type: Schema.Types.Mixed, default: {} },
    displayOrder: { type: Number, default: 0, index: true },
    isActive: { type: Boolean, default: true, index: true },
    isFeatured: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

// Indexes matching Section 54
ProductSchema.index({ categoryId: 1, isActive: 1 });
ProductSchema.index({ displayOrder: 1, createdAt: -1 });

export const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

