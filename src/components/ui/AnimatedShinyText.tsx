import React, { CSSProperties, FC, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <span
      style={
        {
          '--shimmer-width': `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        'mx-auto max-w-md text-slate-800/80',
        // Shimmer effect
        'animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',
        // Shimmer gradient
        'bg-gradient-to-r from-transparent via-[#003DA5]/80 via-50% to-transparent dark:via-white/80',
        className
      )}
    >
      {children}
    </span>
  );
};
