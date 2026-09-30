export type PaymentGateway = 'RAZORPAY' | 'COD';
export type PaymentRecordStatus = 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';

export interface RazorpayVerificationData {
  orderId: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}

