'use client';

import React from 'react';

export const QuickLookModal: React.FC = () => {
  return (
    <>
      <div className="modal-overlay" id="quick-modal-overlay" aria-hidden="true">
        <div className="modal-dialog">
          <button className="modal-close" id="modal-close-btn" aria-label="Close dialog">&times;</button>
          <div className="modal-content-grid" id="modal-content-container">
            {/* Populated dynamically via js/products.js */}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Expert Assistant */}
      <a
        href="https://wa.me/919999999999?text=Hello%20Health%20Veda%20Team!%20I%20need%20assistance%20with%20choosing%20the%20right%20supplement."
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Wellness Expert on WhatsApp"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/health-veda-organics-vegan-products-be-vegan.assets/whatsapp_widget.svg"
          alt="WhatsApp Icon"
        />
      </a>
    </>
  );
};
