import mongoose, { Schema, Document, Model } from 'mongoose';
import { OrderStatus, PaymentStatus, OrderCancellation } from '@/types/order';

export interface IOrderItemSnapshot {
  productId: mongoose.Types.ObjectId;
  nameSnapshot: string;
  skuSnapshot?: string;
  imageSnapshot?: string;
  unitPrice: number; // in paise
  quantity: number;
  lineTotal: number; // in paise
}

export interface IShippingAddressSnapshot {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface IOrder extends Document {
  orderNumber: string;
  userId?: mongoose.Types.ObjectId;
  guestEmail?: string;
  items: IOrderItemSnapshot[];
  shippingAddressSnapshot: IShippingAddressSnapshot;
  subtotal: number; // in paise
  discount: number;
  shippingFee: number;
  tax: number;
  total: number;
  couponCode?: string;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  cancellation?: OrderCancellation;
  paymentId?: mongoose.Types.ObjectId;
  razorpayOrderId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSnapshotSchema = new Schema<IOrderItemSnapshot>({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  nameSnapshot: { type: String, required: true },
  skuSnapshot: { type: String },
  imageSnapshot: { type: String },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
  lineTotal: { type: Number, required: true },
});

const ShippingAddressSnapshotSchema = new Schema<IShippingAddressSnapshot>({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  country: { type: String, default: 'India' },
});

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: { type: String, required: true, unique: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
    guestEmail: { type: String },
    items: [OrderItemSnapshotSchema],
    shippingAddressSnapshot: { type: ShippingAddressSnapshotSchema, required: true },
    subtotal: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    shippingFee: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    total: { type: Number, required: true },
    couponCode: { type: String },
    paymentStatus: {
      type: String,
      enum: ['PENDING', 'PAID', 'FAILED', 'REFUNDED'],
      default: 'PENDING',
      index: true,
    },
    orderStatus: {
      type: String,
      enum: [
        'PENDING_PAYMENT',
        'PAID',
        'PROCESSING',
        'SHIPPED',
        'DELIVERED',
        'CANCELLED',
        'PAYMENT_FAILED',
        'REFUNDED',
      ],
      default: 'PENDING_PAYMENT',
      index: true,
    },
    cancellation: {
      reason: { type: String },
      cancelledAt: { type: Date },
      cancelledBy: { type: String, enum: ['CUSTOMER', 'ADMIN'] },
    },
    paymentId: { type: Schema.Types.ObjectId, ref: 'Payment' },
    razorpayOrderId: { type: String, index: true },
  },
  { timestamps: true }
);

OrderSchema.index({ userId: 1, createdAt: -1 });

export const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

