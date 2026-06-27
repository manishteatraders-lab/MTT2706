import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10" }) => {
  // Colors extracted from the user's design
  const borderColor = '#8B2E2E'; // Deep Red/Brown Border
  const contentColor = '#4A5D23'; // Dark Olive Green (Text & Bowl)
  const steamColor = '#C19A6B';   // Light Brown/Tan (Steam)
  const bgColor = '#F7F7F2';      // Cream/Off-white Background

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      aria-label="Manish Tea Traders Logo"
    >
      {/* 
        Design: "Chinese Tea House Seal"
        - Square frame with deep red border.
        - Chinese Character '茶' (Tea).
        - Minimalist Bowl.
        - Rising Steam.
      */}

      {/* Background & Border */}
      <rect x="5" y="5" width="90" height="90" fill={bgColor} stroke={borderColor} strokeWidth="6" />

      {/* The Character '茶' (Tea) 
          Using a standard serif font which usually renders this character well. 
          Positioned centrally above the bowl.
      */}
      <text
        x="50"
        y="52"
        textAnchor="middle"
        fill={contentColor}
        fontSize="38"
        fontFamily="'Kaiti', 'SimKai', 'serif', 'Noto Serif SC'"
        fontWeight="bold"
        style={{ letterSpacing: '-2px' }}
      >
        茶
      </text>

      {/* The Bowl (Semi-circle) */}
      <path
        d="M 25 65 Q 50 95 75 65 Z"
        fill={contentColor}
        stroke={contentColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bowl Rim (Flat line) */}
      <line x1="25" y1="65" x2="75" y2="65" stroke={bgColor} strokeWidth="2" />

      {/* Steam Lines (Left side) */}
      <path
        d="M 18 50 Q 12 40 20 30"
        stroke={steamColor}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 25 55 Q 18 45 26 35"
        stroke={steamColor}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

    </svg>
  );
};

export default Logo;