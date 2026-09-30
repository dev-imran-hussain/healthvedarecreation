export type UserRole = 'customer' | 'admin';

export interface Address {
  _id?: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  isDefault?: boolean;
}

export interface UserSession {
  userId: string;
  email: string;
  role: UserRole;
  name: string;
}

