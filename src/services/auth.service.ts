import crypto from 'crypto';
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { PasswordReset } from '@/models/PasswordReset';
import { hashPassword, verifyPassword, generateToken } from '@/lib/auth';
import { sendPasswordResetEmail } from '@/lib/email';
import { AppError, NotFoundError, UnauthorizedError } from '@/utils/errors';

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
  phone?: string;
}) {
  await connectDB();
  const normalizedEmail = data.email.toLowerCase().trim();

  const existing = await User.findOne({ email: normalizedEmail });
  if (existing) {
    throw new AppError('An account with this email already exists', 409, 'USER_EXISTS');
  }

  const passwordHash = await hashPassword(data.password);
  const user = await User.create({
    name: data.name.trim(),
    email: normalizedEmail,
    passwordHash,
    phone: data.phone,
    role: 'customer',
    isActive: true,
  });

  const token = generateToken({
    userId: user._id.toString(),
    email: user.email,
    role: user.role,
  });

  return {
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
}

export async function loginUser(data: { email: string; password: string }) {
  await connectDB();
  const normalizedEmail = data.email.toLowerCase().trim();

  const user = await User.findOne({ email: normalizedEmail });
  if (!user || !user.isActive) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const isValid = await verifyPassword(data.password, user.passwordHash);
  if (!isValid) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const token = generateToken({
    userId: user._id.toString(),
    email: user.email,
    role: user.role,
  });

  return {
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
}

export async function forgotPassword(email: string) {
  await connectDB();
  const normalizedEmail = email.toLowerCase().trim();
  const user = await User.findOne({ email: normalizedEmail, isActive: true });

  // Section 44: Do not reveal whether email exists
  if (!user) {
    return { success: true, message: 'If an account exists, a reset link has been sent' };
  }

  // Generate cryptographically random token
  const resetToken = crypto.randomBytes(32).toString('hex');
  const tokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');

  await PasswordReset.create({
    email: normalizedEmail,
    tokenHash,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
    used: false,
  });

  await sendPasswordResetEmail(normalizedEmail, resetToken);

  return { success: true, message: 'If an account exists, a reset link has been sent' };
}

export async function resetPassword(token: string, newPassword: string) {
  await connectDB();
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

  const record = await PasswordReset.findOne({
    tokenHash,
    used: false,
    expiresAt: { $gt: new Date() },
  });

  if (!record) {
    throw new AppError('Password reset link is invalid or has expired', 400, 'INVALID_TOKEN');
  }

  const user = await User.findOne({ email: record.email });
  if (!user) {
    throw new NotFoundError('User not found');
  }

  user.passwordHash = await hashPassword(newPassword);
  await user.save();

  record.used = true;
  await record.save();

  return { success: true, message: 'Password reset successful. You may now log in.' };
}

export async function getUserSessionProfile(userId: string) {
  await connectDB();
  const user = await User.findById(userId).select('-passwordHash');
  if (!user) {
    throw new NotFoundError('User profile not found');
  }
  return user;
}

