import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const RightTimeFXLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
}) => {
  // Height sizing
  const svgHeight = size === 'sm' ? 36 : size === 'lg' ? 56 : 44;
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-2xl';
  const subSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[12px]' : 'text-[11px]';

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* 3D Metallic Red 'R' Wing Emblem matching user provided reference */}
      <svg
        height={svgHeight}
        viewBox="0 0 140 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-[0_4px_16px_rgba(225,29,72,0.45)] transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {/* Main 3D Crimson Red Gradient */}
          <linearGradient id="red3dBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3843" />
            <stop offset="40%" stopColor="#E11D48" />
            <stop offset="80%" stopColor="#991B1B" />
            <stop offset="100%" stopColor="#50070B" />
          </linearGradient>

          {/* Top Bevel Highlight */}
          <linearGradient id="red3dHighlight" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FF858B" />
            <stop offset="60%" stopColor="#FF2E3B" />
            <stop offset="100%" stopColor="#BE123C" />
          </linearGradient>

          {/* Dark Metallic Shadow */}
          <linearGradient id="red3dShadow" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#881337" />
            <stop offset="100%" stopColor="#3F0408" />
          </linearGradient>

          {/* Gloss Metallic Edge */}
          <linearGradient id="glossEdge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#FF6B75" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* --- 1. Top Sharp Wing --- */}
        <path
          d="M 10 32 L 130 32 L 110 48 L 32 48 Z"
          fill="url(#red3dHighlight)"
        />
        <path
          d="M 10 32 L 130 32 L 112 37 L 22 37 Z"
          fill="url(#glossEdge)"
        />

        {/* --- 2. Left Wing Blade --- */}
        <path
          d="M 10 32 L 48 58 L 22 100 L 10 32 Z"
          fill="url(#red3dBase)"
        />
        <path
          d="M 10 32 L 34 58 L 22 100 Z"
          fill="url(#red3dShadow)"
        />

        {/* --- 3. Central Curved R Loop (3D Beveled Arc) --- */}
        <path
          d="M 32 48 C 75 48, 128 50, 118 72 C 108 92, 60 92, 45 74 L 62 62 C 72 74, 98 74, 102 66 C 106 58, 70 58, 48 58 Z"
          fill="url(#red3dBase)"
        />
        {/* Inner Loop Highlight */}
        <path
          d="M 48 48 C 80 48, 122 50, 114 68 C 108 80, 80 82, 62 68 Z"
          fill="url(#red3dHighlight)"
          opacity="0.9"
        />

        {/* --- 4. Right Sweeping Tail Blade --- */}
        <path
          d="M 52 62 L 122 102 C 126 104, 118 105, 110 102 L 32 75 Z"
          fill="url(#red3dBase)"
        />
        <path
          d="M 52 62 L 122 102 L 100 92 L 42 70 Z"
          fill="url(#red3dHighlight)"
        />
        <path
          d="M 32 75 L 110 102 L 85 92 L 32 75 Z"
          fill="url(#red3dShadow)"
        />

        {/* --- 5. Sharp Metallic Facet Highlights --- */}
        <path
          d="M 32 48 L 110 48 L 98 53 L 42 53 Z"
          fill="#FFA3A8"
          opacity="0.8"
        />
      </svg>

      {/* Thin Vertical Metallic Separator */}
      <div className="h-8 sm:h-9 w-[1px] bg-white/20 mx-0.5 shrink-0" />

      {/* Exact Brand Typography matching Logo Reference */}
      <div className="flex flex-col justify-center leading-none">
        {/* Main Brand Title: Right Time FX */}
        <div className={`flex items-baseline font-heading tracking-tight font-black ${textSize}`}>
          {/* 'Right' in Solid Vivid Crimson Red */}
          <span className="text-[#E5101A] drop-shadow-[0_2px_10px_rgba(229,16,26,0.5)]">
            Right
          </span>

          {/* 'Time' in Crisp White with thin silver outline effect */}
          <span 
            className="text-white mx-1 font-normal tracking-tight"
            style={{
              textShadow: '0 0 1px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)',
              WebkitTextStroke: '0.4px rgba(220, 225, 235, 0.6)'
            }}
          >
            Time
          </span>

          {/* 'FX' in Solid Vivid Crimson Red */}
          <span className="text-[#E5101A] font-black drop-shadow-[0_2px_10px_rgba(229,16,26,0.5)] ml-0.5">
            FX
          </span>
        </div>

        {/* Subtitle: S T U D I O */}
        <div className={`font-heading font-semibold tracking-[0.36em] text-white/90 uppercase mt-1 ${subSize}`}>
          STUDIO
        </div>

        {showTagline && (
          <span className="text-[9px] font-body text-red-400/90 tracking-wider uppercase mt-1">
            Transforming Imagination Into Cinematic Reality
          </span>
        )}
      </div>
    </div>
  );
};

