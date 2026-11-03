import React from 'react';

interface UniautoLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'horizontal' | 'vertical' | 'badge-only';
  className?: string;
  darkText?: boolean;
}

export const OFFICIAL_LOGO_URL = 'https://i.postimg.cc/QdsDWQ6P/Logo-UNIAUTO-com-Gradiente-Vibrante.png';

export const UniautoLogo: React.FC<UniautoLogoProps> = ({
  size = 'md',
  showText = true,
  variant = 'horizontal',
  className = '',
  darkText = true,
}) => {
  // Dimension mappings keeping aspect ratio with transparent background
  const imgSizes = {
    sm: 'h-10 w-10',
    md: 'h-13 w-13 sm:h-14 sm:w-14',
    lg: 'h-16 w-16 sm:h-20 sm:w-20',
    xl: 'h-24 w-24 sm:h-28 sm:w-28',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
  };

  const subTextSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div
      className={`inline-flex items-center gap-3 select-none bg-transparent ${
        variant === 'vertical' ? 'flex-col text-center' : ''
      } ${className}`}
    >
      {/* Official Transparent Logo Image - Strictly respecting transparency without background boxes */}
      <div className={`relative ${imgSizes[size]} shrink-0 flex items-center justify-center bg-transparent group`}>
        <img
          src={OFFICIAL_LOGO_URL}
          alt="Uniauto Maceió Alagoas - Proteção Veicular"
          className="w-full h-full object-contain bg-transparent transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
          loading="eager"
        />
      </div>

      {/* Typography with official brand colors */}
      {showText && (
        <div className="flex flex-col justify-center text-left bg-transparent">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-black tracking-tight uppercase ${
                darkText ? 'text-[#003DA5]' : 'text-slate-900'
              } ${textSizes[size]}`}
              style={{ letterSpacing: '0.02em' }}
            >
              UNIAUTO
            </span>
            <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#00A859]/10 text-[#00A859] border border-[#00A859]/20 uppercase tracking-wider">
              Brasil
            </span>
          </div>

          <div className="flex items-center gap-1 mt-0.5">
            <span
              className={`font-extrabold tracking-wider uppercase text-[#00A859] ${subTextSizes[size]}`}
            >
              MACEIÓ ALAGOAS
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold hidden sm:block">
            Proteção Veicular & Patrimonial
          </span>
        </div>
      )}
    </div>
  );
};
