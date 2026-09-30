import mongoose from 'mongoose';
import { connectDB } from '@/lib/db';
import { Order, IOrder, IShippingAddressSnapshot } from '@/models/Order';
import { Product } from '@/models/Product';
import { validateAndCalculateCheckout, CheckoutCalculationItem } from './checkout.service';
import { createRazorpayOrder } from '@/lib/razorpay';
import { OrderStatus } from '@/types/order';
import { NotFoundError, ForbiddenError, AppError } from '@/utils/errors';
import { sendOrderConfirmationEmail } from '@/lib/email';

export async function createOrder(data: {
  userId?: string;
  guestEmail?: string;
  items: CheckoutCalculationItem[];
  shippingAddress: IShippingAddressSnapshot;
  couponCode?: string;
  gateway?: 'RAZORPAY' | 'COD';
}): Promise<{ order: IOrder; razorpayOrder?: { id: string; amount: number; currency: string } }> {
  await connectDB();

  // 1. Authoritative server price and stock calculation
  const calc = await validateAndCalculateCheckout(data.items, data.couponCode);

  // 2. Generate unique order number (HVO-YYYY-XXXXXX)
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  const orderNumber = `HVO-${year}-${randomSuffix}`;

  // 3. Create Gateway Order if Razorpay
  let razorpayOrderData: { id: string; amount: number; currency: string } | undefined;
  if (data.gateway !== 'COD') {
    razorpayOrderData = await createRazorpayOrder(calc.total, orderNumber);
  }

  // 4. Persist Order with historical snapshots
  const order = await Order.create({
    orderNumber,
    userId: data.userId ? new mongoose.Types.ObjectId(data.userId) : undefined,
    guestEmail: data.guestEmail,
    items: calc.items,
    shippingAddressSnapshot: data.shippingAddress,
    subtotal: calc.subtotal,
    discount: calc.discount,
    shippingFee: calc.shippingFee,
    tax: calc.tax,
    total: calc.total,
    couponCode: calc.couponCode,
    paymentStatus: data.gateway === 'COD' ? 'PENDING' : 'PENDING',
    orderStatus: 'PENDING_PAYMENT',
    razorpayOrderId: razorpayOrderData?.id,
  });

  // If COD, dispatch confirmation immediately
  if (data.gateway === 'COD' && data.guestEmail) {
    sendOrderConfirmationEmail(data.guestEmail, orderNumber, calc.total / 100);
  }

  return {
    order,
    razorpayOrder: razorpayOrderData,
  };
}

export async function getOrder(
  orderId: string,
  userId?: string,
  isAdmin = false
): Promise<IOrder> {
  await connectDB();
  const query = mongoose.Types.ObjectId.isValid(orderId)
    ? { _id: orderId }
    : { orderNumber: orderId };

  const order = await Order.findOne(query);
  if (!order) throw new NotFoundError('Order not found');

  // Object-level authorization (Section 47)
  if (!isAdmin && userId && order.userId && !order.userId.equals(new mongoose.Types.ObjectId(userId))) {
    throw new ForbiddenError('You are not authorized to view this order');
  }

  return order;
}

export async function cancelOrder(
  orderId: string,
  userId: string,
  reason: string
): Promise<IOrder> {
  await connectDB();
  const order = await Order.findById(orderId);
  if (!order) throw new NotFoundError('Order not found');

  // Section 38: Verify order ownership
  if (!order.userId || !order.userId.equals(new mongoose.Types.ObjectId(userId))) {
    throw new ForbiddenError('You are not authorized to cancel this order');
  }

  // Only allowed if not shipped or delivered
  if (['SHIPPED', 'DELIVERED', 'CANCELLED'].includes(order.orderStatus)) {
    throw new AppError(`Cannot cancel an order in "${order.orderStatus}" state`, 400);
  }

  order.orderStatus = 'CANCELLED';
  order.cancellation = {
    reason,
    cancelledAt: new Date(),
    cancelledBy: 'CUSTOMER',
  };
  await order.save();

  // Restore inventory
  for (const item of order.items) {
    await Product.updateOne({ _id: item.productId }, { $inc: { stock: item.quantity } });
  }

  return order;
}

export async function updateOrderStatus(orderId: string, status: OrderStatus): Promise<IOrder> {
  await connectDB();
  const order = await Order.findById(orderId);
  if (!order) throw new NotFoundError('Order not found');

  order.orderStatus = status;
  if (status === 'PAID') {
    order.paymentStatus = 'PAID';
  }
  await order.save();
  return order;
}

export async function getUserOrders(userId: string): Promise<IOrder[]> {
  await connectDB();
  return Order.find({ userId }).sort({ createdAt: -1 });
}

export async function getAdminOrders(status?: string): Promise<IOrder[]> {
  await connectDB();
  const query: Record<string, unknown> = {};
  if (status && status !== 'all') {
    query.orderStatus = status;
  }
  return Order.find(query).sort({ createdAt: -1 });
}
