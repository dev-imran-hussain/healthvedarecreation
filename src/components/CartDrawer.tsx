'use client';

import React from 'react';
import Link from 'next/link';

export const CartDrawer: React.FC = () => {
  return (
    <>
      <div className="cart-drawer-overlay" id="cart-drawer-overlay" aria-hidden="true"></div>
      <aside className="cart-drawer" id="cart-drawer" aria-label="Shopping Cart">
        <div className="cart-header">
          <h3>Your Botanical Bag (<span id="cart-items-count">0</span>)</h3>
          <button className="cart-close-btn" id="close-cart-btn" aria-label="Close Shopping Cart">&times;</button>
        </div>

        <div className="cart-shipping-meter">
          <p id="shipping-meter-text">Add ₹499 more for FREE Express Shipping!</p>
          <div className="meter-bar">
            <div className="meter-fill" id="meter-fill" style={{ width: '0%' }}></div>
          </div>
        </div>

        <div className="cart-items-list" id="cart-items-list">
          <div className="empty-cart-message">
            <p>Your bag is currently empty.</p>
            <Link href="/#products" className="btn btn-discover">Discover Formulations</Link>
          </div>
        </div>

        <div className="cart-footer">
          <div className="cart-subtotal-row">
            <span>Subtotal</span>
            <span className="subtotal-val" id="cart-subtotal">₹0</span>
          </div>
          <p className="taxes-notice">Shipping and taxes calculated at checkout. Instant coupon VEDA15 available.</p>
          <button className="btn btn-checkout" id="checkout-btn">
            Proceed to Checkout • <span id="checkout-amount">₹0</span>
          </button>
        </div>
      </aside>
    </>
  );
};
