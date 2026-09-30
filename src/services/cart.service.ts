import mongoose from 'mongoose';
import { connectDB } from '@/lib/db';
import { Cart, ICart } from '@/models/Cart';
import { Product } from '@/models/Product';
import { NotFoundError, AppError } from '@/utils/errors';

export async function getCart(userId?: string, guestId?: string): Promise<ICart | null> {
  await connectDB();
  const query = userId ? { userId } : { guestId };
  if (!userId && !guestId) return null;

  return Cart.findOne(query).populate('items.productId');
}

export async function addItemToCart(
  productId: string,
  quantity = 1,
  userId?: string,
  guestId?: string
): Promise<ICart> {
  await connectDB();
  if (!userId && !guestId) {
    throw new AppError('Either userId or guestId is required', 400);
  }

  // Validate product exists and has stock
  const product = await Product.findById(productId);
  if (!product || !product.isActive) {
    throw new NotFoundError('Product not found or unavailable');
  }

  if (product.stock < quantity) {
    throw new AppError(`Only ${product.stock} units available in stock`, 400, 'INSUFFICIENT_STOCK');
  }

  const query = userId ? { userId } : { guestId };
  let cart = await Cart.findOne(query);

  if (!cart) {
    cart = new Cart({
      userId: userId ? new mongoose.Types.ObjectId(userId) : undefined,
      guestId,
      items: [],
    });
  }

  const prodObjectId = new mongoose.Types.ObjectId(productId);
  const existingItemIndex = cart.items.findIndex((item) =>
    item.productId.equals(prodObjectId)
  );

  if (existingItemIndex > -1) {
    cart.items[existingItemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId: prodObjectId, quantity });
  }

  await cart.save();
  return cart.populate('items.productId');
}

export async function updateCartItemQuantity(
  productId: string,
  quantity: number,
  userId?: string,
  guestId?: string
): Promise<ICart> {
  await connectDB();
  const query = userId ? { userId } : { guestId };
  const cart = await Cart.findOne(query);

  if (!cart) throw new NotFoundError('Cart not found');

  const prodObjectId = new mongoose.Types.ObjectId(productId);

  if (quantity <= 0) {
    cart.items = cart.items.filter((item) => !item.productId.equals(prodObjectId));
  } else {
    const item = cart.items.find((item) => item.productId.equals(prodObjectId));
    if (!item) throw new NotFoundError('Item not found in cart');
    item.quantity = quantity;
  }

  await cart.save();
  return cart.populate('items.productId');
}

export async function removeCartItem(
  productId: string,
  userId?: string,
  guestId?: string
): Promise<ICart> {
  return updateCartItemQuantity(productId, 0, userId, guestId);
}

export async function clearCart(userId?: string, guestId?: string): Promise<boolean> {
  await connectDB();
  const query = userId ? { userId } : { guestId };
  await Cart.deleteOne(query);
  return true;
}

export async function mergeGuestCart(guestId: string, userId: string): Promise<ICart> {
  await connectDB();
  const guestCart = await Cart.findOne({ guestId });
  if (!guestCart || guestCart.items.length === 0) {
    const existingUserCart = await Cart.findOne({ userId });
    return existingUserCart || Cart.create({ userId, items: [] });
  }

  let userCart = await Cart.findOne({ userId });
  if (!userCart) {
    userCart = new Cart({ userId, items: [] });
  }

  for (const guestItem of guestCart.items) {
    const userItem = userCart.items.find((i) => i.productId.equals(guestItem.productId));
    if (userItem) {
      userItem.quantity += guestItem.quantity;
    } else {
      userCart.items.push(guestItem);
    }
  }

  await userCart.save();
  await Cart.deleteOne({ _id: guestCart._id });

  return userCart.populate('items.productId');
}

