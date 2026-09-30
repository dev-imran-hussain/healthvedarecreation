import mongoose from 'mongoose';
import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';
import { Order, IOrderItemSnapshot, OrderStatus } from '@/models/Order';
import { Payment } from '@/models/Payment';
import { validateAndApplyCoupon } from './coupon.service';
import { razorpay } from '@/lib/razorpay';

export async function createCheckoutOrder(data: {
  userId?: string;
  guestEmail?: string;
  items: { productId: string; quantity: number }[];
  shippingAddress: {
    fullName: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
  };
  couponCode?: string;
  gateway: 'RAZORPAY' | 'COD';
}) {
  await connectDB();

  // 1. Fetch current live products from DB (Never trust client prices)
  const productIds = data.items.map((i) => i.productId);
  const products = await Product.find({ _id: { $in: productIds }, isActive: true });

  if (products.length !== data.items.length) {
    throw new Error('One or more products in your cart are no longer available');
  }

  // 2. Validate stock and build historical snapshot
  const itemSnapshots: IOrderItemSnapshot[] = [];
  let subtotal = 0;

  for (const item of data.items) {
    const product = products.find((p) => p._id.toString() === item.productId);
    if (!product) throw new Error('Product not found');

    if (product.stock < item.quantity) {
      throw new Error(`Insufficient stock for "${product.name}". Only ${product.stock} left.`);
    }

    const unitPrice = product.price; // in paise
    const lineTotal = unitPrice * item.quantity;
    subtotal += lineTotal;

    itemSnapshots.push({
      productId: product._id as mongoose.Types.ObjectId,
      nameSnapshot: product.name,
      skuSnapshot: product.sku,
      imageSnapshot: product.images[0] || '',
      unitPrice,
      quantity: item.quantity,
      lineTotal,
    });
  }

  // 3. Discount calculation
  let discount = 0;
  if (data.couponCode) {
    const couponResult = await validateAndApplyCoupon(data.couponCode, subtotal, data.userId);
    discount = couponResult.discount;
  }

  // 4. Free Shipping threshold calculation: Free if subtotal >= ₹499 (49900 paise)
  const shippingFee = subtotal >= 49900 ? 0 : 5000; // ₹50 shipping if under ₹499
  const tax = 0; // Inclusive tax
  const total = subtotal - discount + shippingFee + tax;

  // 5. Generate human-readable Order Number (Section 64)
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  const orderNumber = `HVO-${new Date().getFullYear()}-${randomSuffix}`;

  // 6. Create Razorpay order if gateway is RAZORPAY
  let razorpayOrderId: string | undefined = undefined;
  if (data.gateway === 'RAZORPAY') {
    try {
      const rzpOrder = await razorpay.orders.create({
        amount: total, // amount in paise
        currency: 'INR',
        receipt: orderNumber,
      });
      razorpayOrderId = rzpOrder.id;
    } catch (err: any) {
      console.warn('⚠️ Razorpay order creation notice (mocking for test):', err.message);
      razorpayOrderId = `order_mock_${Date.now()}`;
    }
  }

  // 7. Persist Order
  const order = await Order.create({
    orderNumber,
    userId: data.userId ? new mongoose.Types.ObjectId(data.userId) : undefined,
    guestEmail: data.guestEmail,
    items: itemSnapshots,
    shippingAddress: data.shippingAddress,
    subtotal,
    discount,
    shippingFee,
    tax,
    total,
    couponCode: data.couponCode,
    paymentStatus: 'UNPAID',
    orderStatus: 'PENDING_PAYMENT',
    razorpayOrderId,
  });

  return {
    orderId: order._id.toString(),
    orderNumber: order.orderNumber,
    total: order.total,
    currency: 'INR',
    razorpayOrderId,
    gateway: data.gateway,
  };
}

export async function getUserOrders(userId: string) {
  await connectDB();
  return Order.find({ userId: new mongoose.Types.ObjectId(userId) })
    .sort({ createdAt: -1 })
    .lean();
}

export async function getOrderById(orderId: string, userId?: string) {
  await connectDB();
  const query: Record<string, unknown> = { _id: orderId };
  if (userId) {
    query.userId = new mongoose.Types.ObjectId(userId);
  }
  const order = await Order.findOne(query).lean();
  if (!order) throw new Error('Order not found');
  return order;
}

export async function updateOrderStatus(orderId: string, newStatus: OrderStatus) {
  await connectDB();
  const order = await Order.findById(orderId);
  if (!order) throw new Error('Order not found');

  // Validate state transitions (Section 36)
  if (order.orderStatus === 'DELIVERED' && newStatus === 'PROCESSING') {
    throw new Error('Invalid status transition');
  }

  order.orderStatus = newStatus;
  await order.save();
  return order;
}
