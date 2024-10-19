// src/components/Banner.tsx
import React from 'react';
import './Banner.css'; // Add styles specific to the banner

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <h2>Welcome to Migration Hub</h2>
      <p>Your trusted partner for a smooth migration experience.</p>
    </div>
  );
};

export default Banner;