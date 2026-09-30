'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-top-grid">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/health-veda-organics-vegan-products-be-vegan.assets/Health_Veda_Logo_1.png"
              alt="Health Veda Organics"
              className="footer-logo"
            />
            <p className="footer-tagline">
              Health Veda Organics represents a synthesis of ancient Ayurvedic botanical wisdom and contemporary clinical bio-nutrition. 100% Plant-Based, always.
            </p>
            <div className="social-links">
              <a href="https://instagram.com/healthvedaaorganics" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
              <a href="https://facebook.com/healthvedaaorganics" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
              <a href="https://youtube.com/@healthvedaaorganics" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
              <a href="https://x.com/healthvedaaorganics" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">X</a>
            </div>
          </div>

          {/* Column 2: Health Categories */}
          <div className="footer-col">
            <h4 className="footer-heading">Health Goals</h4>
            <ul className="footer-nav">
              <li><Link href="/#categories">Bone &amp; Joint Mobility</Link></li>
              <li><Link href="/#categories">Immunity &amp; Antioxidants</Link></li>
              <li><Link href="/#categories">Gut Biome &amp; Digestion</Link></li>
              <li><Link href="/#categories">Skin Glow &amp; Anti-Aging</Link></li>
              <li><Link href="/#categories">Hair &amp; Follicle Vitality</Link></li>
              <li><Link href="/#categories">Brain Focus &amp; Rest</Link></li>
            </ul>
          </div>

          {/* Column 3: Transparency & Founder */}
          <div className="footer-col">
            <h4 className="footer-heading">Transparency</h4>
            <ul className="footer-nav">
              <li><Link href="/about">About Health Veda Organics</Link></li>
              <li><Link href="/about#founder">Founder&apos;s Vision</Link></li>
              <li><Link href="/#science">The Science of Veda</Link></li>
              <li><Link href="/#certifications">Third-Party Lab Reports</Link></li>
              <li><Link href="/#certifications">Our Purity Standards</Link></li>
              <li><Link href="/#journal">Editorial Journal</Link></li>
              <li><Link href="/about#manifesto">Our Indore Roots</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">The Wellness Circle</h4>
            <p>Subscribe for evidence-based nutrition essays, early botanical batch reservations, and secret subscriber rewards.</p>
            <form className="newsletter-form" id="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Welcome to the Health Veda Circle!'); }}>
              <input type="email" placeholder="Enter your email address" required className="newsletter-input" />
              <button type="submit" className="btn btn-subscribe">Join</button>
            </form>
            <span className="privacy-note">We strictly protect your privacy. Zero spam ever.</span>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Health Veda Organics. All rights reserved. Formulated with pride in Indore, India.
          </div>
          <div className="footer-legal-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Shipping &amp; Returns</Link>
            <span className="fssai-pill">FSSAI Lic. #10020051003445</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
