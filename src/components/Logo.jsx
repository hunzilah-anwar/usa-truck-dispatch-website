import React from 'react';

export default function Logo({ variant = 'light', size = 'md', className = '' }) {
  const isLight = variant === 'light';
  
  const textSizeClass = size === 'sm' 
    ? 'text-xs leading-none' 
    : size === 'lg' 
    ? 'text-xl leading-none' 
    : 'text-sm sm:text-base leading-tight';

  return (
    <div className={`logo-container inline-flex items-center gap-2 cursor-pointer select-none ${className}`}>
      {/* Text Component */}
      <div className={`flex flex-col font-extrabold tracking-wider ${textSizeClass}`}>
        <span className={isLight ? 'text-white' : 'text-slate-900'} style={{ letterSpacing: '0.08em' }}>
          TRUCK
        </span>
        <span className={isLight ? 'text-amber-400' : 'text-amber-600'} style={{ letterSpacing: '0.04em' }}>
          DISPATCHER
        </span>
      </div>

      {/* Flag Badge & USA Emblem */}
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 120 70"
          className={size === 'sm' ? 'w-10 h-6' : size === 'lg' ? 'w-18 h-10' : 'w-14 h-8'}
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="usa-map-clip">
              {/* Detailed Stylized Silhouette of Contiguous United States */}
              <path d="M 12 18 C 15 15, 25 15, 35 17 C 45 19, 52 14, 60 14 C 70 14, 82 12, 90 12 C 98 12, 105 15, 110 18 C 113 22, 114 28, 112 32 C 110 38, 108 42, 104 46 C 102 52, 98 56, 94 62 C 92 65, 88 64, 84 56 C 80 50, 75 52, 70 54 C 65 56, 58 64, 52 64 C 46 64, 42 55, 36 54 C 30 52, 24 50, 18 45 C 14 42, 8 36, 6 28 C 5 22, 8 19, 12 18 Z" />
            </clipPath>
          </defs>

          {/* Map Silhouette with Stripes */}
          <g clipPath="url(#usa-map-clip)">
            {/* White base background */}
            <rect width="120" height="70" fill="#FFFFFF" />
            {/* Red stripes */}
            <rect y="0" width="120" height="10" fill="#DC2626" />
            <rect y="20" width="120" height="10" fill="#DC2626" />
            <rect y="40" width="120" height="10" fill="#DC2626" />
            <rect y="60" width="120" height="10" fill="#DC2626" />
            {/* Blue canton */}
            <rect x="0" y="0" width="48" height="40" fill="#1D4ED8" />
            {/* Star dots */}
            <circle cx="12" cy="10" r="2.5" fill="#FFFFFF" />
            <circle cx="24" cy="10" r="2.5" fill="#FFFFFF" />
            <circle cx="36" cy="10" r="2.5" fill="#FFFFFF" />
            <circle cx="18" cy="20" r="2.5" fill="#FFFFFF" />
            <circle cx="30" cy="20" r="2.5" fill="#FFFFFF" />
            <circle cx="12" cy="30" r="2.5" fill="#FFFFFF" />
            <circle cx="24" cy="30" r="2.5" fill="#FFFFFF" />
            <circle cx="36" cy="30" r="2.5" fill="#FFFFFF" />
          </g>

          {/* Golden/Silver Border around US Map outline */}
          <path
            d="M 12 18 C 15 15, 25 15, 35 17 C 45 19, 52 14, 60 14 C 70 14, 82 12, 90 12 C 98 12, 105 15, 110 18 C 113 22, 114 28, 112 32 C 110 38, 108 42, 104 46 C 102 52, 98 56, 94 62 C 92 65, 88 64, 84 56 C 80 50, 75 52, 70 54 C 65 56, 58 64, 52 64 C 46 64, 42 55, 36 54 C 30 52, 24 50, 18 45 C 14 42, 8 36, 6 28 C 5 22, 8 19, 12 18 Z"
            fill="none"
            stroke={isLight ? '#FFFFFF' : '#0F172A'}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* USA Text Overlay */}
          <text
            x="60"
            y="42"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="900"
            fontSize="26"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="3.5"
            paintOrder="stroke fill"
            style={{ letterSpacing: '1px' }}
          >
            USA
          </text>
        </svg>
      </div>
    </div>
  );
}
