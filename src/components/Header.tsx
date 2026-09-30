'use client';

import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="site-header" id="site-header">
      <div className="header-container">
        <Link href="/" className="brand-link" aria-label="Health Veda Organics Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/health-veda-organics-vegan-products-be-vegan.assets/Health_Veda_Logo_1.png"
            alt="Health Veda Organics"
            className="site-logo"
          />
        </Link>

        <nav className="main-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><Link href="/#hero">Overview</Link></li>
            <li><Link href="/#categories">Shop Goals</Link></li>
            <li><Link href="/#products">Best Sellers</Link></li>
            <li><Link href="/#science">The Science</Link></li>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/#certifications">Purity Standard</Link></li>
            <li><Link href="/#reviews">Reviews</Link></li>
            <li><Link href="/#journal">Journal</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/#products" className="btn btn-nav-discover">Explore Blends</Link>
          <button className="btn btn-cart" id="open-cart-btn" aria-label="Open Shopping Cart">
            <span className="cart-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </span>
            <span>Cart</span>
            <span className="cart-badge" id="cart-badge-count">0</span>
          </button>
          <button className="mobile-nav-toggle" id="mobile-nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className="mobile-nav-drawer" id="mobile-nav-drawer" aria-hidden="true">
        <div className="mobile-nav-backdrop" id="mobile-nav-backdrop"></div>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/health-veda-organics-vegan-products-be-vegan.assets/Health_Veda_Logo_1.png"
              alt="Health Veda Organics"
              className="mobile-nav-logo"
            />
            <button className="mobile-nav-close" id="mobile-nav-close" aria-label="Close menu">&times;</button>
          </div>
          <ul className="mobile-nav-list">
            <li><Link href="/#hero" className="mobile-nav-link">Overview</Link></li>
            <li><Link href="/#categories" className="mobile-nav-link">Shop Goals</Link></li>
            <li><Link href="/#products" className="mobile-nav-link">Best Sellers</Link></li>
            <li><Link href="/#science" className="mobile-nav-link">The Science</Link></li>
            <li><Link href="/about" className="mobile-nav-link">Our Story &amp; Founder</Link></li>
            <li><Link href="/#certifications" className="mobile-nav-link">Purity Standard</Link></li>
            <li><Link href="/#reviews" className="mobile-nav-link">Reviews</Link></li>
            <li><Link href="/#journal" className="mobile-nav-link">Journal</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
