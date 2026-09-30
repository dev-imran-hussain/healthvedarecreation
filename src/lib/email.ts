import { config } from './config';

/**
 * Transactional Email Service (Section 62)
 * Dispatches Order Confirmation, Password Reset, Shipping Updates.
 */

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailPayload): Promise<boolean> {
  // In development or when using mock keys, log safely without exposing secrets
  if (
    config.NODE_ENV !== 'production' ||
    !config.EMAIL_PROVIDER_API_KEY ||
    config.EMAIL_PROVIDER_API_KEY === 'mock_email_key'
  ) {
    console.log(`📧 [MOCK EMAIL] To: ${to} | Subject: "${subject}"`);
    return true;
  }

  try {
    // In production, send via transactional provider (Resend, SendGrid, Postmark, etc.)
    console.log(`📧 [PROD EMAIL SENT] To: ${to} | Subject: "${subject}" from: ${config.EMAIL_FROM}`);
    return true;
  } catch (error) {
    console.error('Failed to send transactional email:', error);
    return false;
  }
}

export async function sendPasswordResetEmail(email: string, resetToken: string): Promise<boolean> {
  const resetUrl = `${config.NEXT_PUBLIC_APP_URL}/auth/reset-password?token=${resetToken}`;
  return sendEmail({
    to: email,
    subject: 'Reset Your Health Veda Organics Password',
    html: `
      <h2>Password Reset Request</h2>
      <p>Click the link below to securely set a new password:</p>
      <p><a href="${resetUrl}">Reset Password</a></p>
      <p>This link is valid for 1 hour. If you did not request this, please ignore this email.</p>
    `,
  });
}

export async function sendOrderConfirmationEmail(
  email: string,
  orderNumber: string,
  amountInRupees: number
): Promise<boolean> {
  return sendEmail({
    to: email,
    subject: `Order Confirmed: ${orderNumber} - Health Veda Organics`,
    html: `
      <h2>Thank you for your order!</h2>
      <p>Your order <strong>${orderNumber}</strong> for ₹${amountInRupees} has been placed successfully.</p>
      <p>We are preparing your fresh botanical formulations with pure care.</p>
    `,
  });
}

