import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        <span>🌿 100% Certified Plant-Based &amp; Vegan Formulations</span>
        <span className="dot">•</span>
        <span>Free Express Delivery Across India on Orders Above ₹499</span>
        <span className="dot">•</span>
        <span>Zero Harmful Fillers &amp; Heavy Metals Lab Tested</span>
        <span className="dot">•</span>
        <span>Use Code <strong>VEDA15</strong> for 15% Off Your First Order</span>
      </div>
    </div>
  );
};

