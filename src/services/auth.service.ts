import { connectDB } from '@/lib/db';
import { User, IUser } from '@/models/User';
import { hashPassword, verifyPassword, generateToken, setAuthCookie, clearAuthCookie } from '@/lib/auth';

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
  phone?: string;
}) {
  await connectDB();
  const existing = await User.findOne({ email: data.email.toLowerCase() });
  if (existing) {
    throw new Error('An account with this email already exists');
  }

  const passwordHash = await hashPassword(data.password);
  const user = await User.create({
    name: data.name,
    email: data.email.toLowerCase(),
    passwordHash,
    phone: data.phone,
    role: 'customer',
  });

  const token = generateToken({
    userId: user._id.toString(),
    email: user.email,
    role: user.role,
  });

  await setAuthCookie(token);

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export async function loginUser(email: string, password: string) {
  await connectDB();
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user || !user.isActive) {
    throw new Error('Invalid email or password');
  }

  const isValid = await verifyPassword(password, user.passwordHash);
  if (!isValid) {
    throw new Error('Invalid email or password');
  }

  const token = generateToken({
    userId: user._id.toString(),
    email: user.email,
    role: user.role,
  });

  await setAuthCookie(token);

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export async function logoutUser() {
  await clearAuthCookie();
}

export async function getUserProfile(userId: string) {
  await connectDB();
  const user = await User.findById(userId).select('-passwordHash');
  if (!user) throw new Error('User not found');
  return user;
}
