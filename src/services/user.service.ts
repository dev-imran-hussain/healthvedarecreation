import mongoose from 'mongoose';
import { connectDB } from '@/lib/db';
import { User, IUserAddress } from '@/models/User';
import { Order } from '@/models/Order';
import { NotFoundError } from '@/utils/errors';

export async function getUserProfile(userId: string) {
  await connectDB();
  const user = await User.findById(userId).select('-passwordHash').populate('wishlist');
  if (!user) throw new NotFoundError('User not found');
  return user;
}

export async function updateUserProfile(userId: string, data: { name?: string; phone?: string }) {
  await connectDB();
  const user = await User.findByIdAndUpdate(
    userId,
    { $set: data },
    { new: true }
  ).select('-passwordHash');
  if (!user) throw new NotFoundError('User not found');
  return user;
}

export async function getUserAddresses(userId: string) {
  await connectDB();
  const user = await User.findById(userId).select('addresses');
  if (!user) throw new NotFoundError('User not found');
  return user.addresses;
}

export async function addAddress(userId: string, address: Omit<IUserAddress, '_id'>) {
  await connectDB();
  const user = await User.findById(userId);
  if (!user) throw new NotFoundError('User not found');

  if (address.isDefault) {
    user.addresses.forEach((addr) => {
      addr.isDefault = false;
    });
  } else if (user.addresses.length === 0) {
    address.isDefault = true;
  }

  user.addresses.push(address as IUserAddress);
  await user.save();
  return user.addresses;
}

export async function updateAddress(
  userId: string,
  addressId: string,
  addressData: Partial<IUserAddress>
) {
  await connectDB();
  const user = await User.findById(userId);
  if (!user) throw new NotFoundError('User not found');

  const addr = user.addresses.find((a) => a._id?.toString() === addressId);
  if (!addr) throw new NotFoundError('Address not found');

  if (addressData.isDefault) {
    user.addresses.forEach((a) => {
      a.isDefault = false;
    });
  }

  Object.assign(addr, addressData);
  await user.save();
  return user.addresses;
}

export async function deleteAddress(userId: string, addressId: string) {
  await connectDB();
  const user = await User.findById(userId);
  if (!user) throw new NotFoundError('User not found');

  user.addresses = user.addresses.filter((a) => a._id?.toString() !== addressId);
  await user.save();
  return user.addresses;
}

export async function getWishlist(userId: string) {
  await connectDB();
  const user = await User.findById(userId).select('wishlist').populate('wishlist');
  if (!user) throw new NotFoundError('User not found');
  return user.wishlist;
}

export async function addToWishlist(userId: string, productId: string) {
  await connectDB();
  const user = await User.findById(userId);
  if (!user) throw new NotFoundError('User not found');

  const prodObjId = new mongoose.Types.ObjectId(productId);
  if (!user.wishlist.some((id) => id.equals(prodObjId))) {
    user.wishlist.push(prodObjId);
    await user.save();
  }
  return user.wishlist;
}

export async function removeFromWishlist(userId: string, productId: string) {
  await connectDB();
  const user = await User.findById(userId);
  if (!user) throw new NotFoundError('User not found');

  user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);
  await user.save();
  return user.wishlist;
}

export async function getUserOrders(userId: string) {
  await connectDB();
  return Order.find({ userId }).sort({ createdAt: -1 });
}

