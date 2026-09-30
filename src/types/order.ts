import { Address } from './user';

export type OrderStatus =
  | 'PENDING_PAYMENT'
  | 'PAID'
  | 'PROCESSING'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'PAYMENT_FAILED'
  | 'REFUNDED';

export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';

export interface OrderItemSnapshot {
  productId: string;
  nameSnapshot: string;
  skuSnapshot?: string;
  imageSnapshot?: string;
  unitPrice: number; // in paise
  quantity: number;
  lineTotal: number; // in paise
}

export interface OrderCancellation {
  reason: string;
  cancelledAt: Date;
  cancelledBy: 'CUSTOMER' | 'ADMIN';
}

