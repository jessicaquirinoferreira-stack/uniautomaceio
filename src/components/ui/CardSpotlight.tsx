import React, { useRef, useState, MouseEvent } from 'react';
import { cn } from '../../lib/utils';

export const CardSpotlight = ({
  children,
  radius = 280,
  color = 'rgba(0, 61, 165, 0.08)',
  spotlightColor,
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  spotlightColor?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const activeColor = spotlightColor || color;
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.current = clientX - left;
    mouseY.current = clientY - top;
  }

  return (
    <div
      className={cn(
        'group/spotlight relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(${radius}px circle at ${mouseX.current}px ${mouseY.current}px, ${activeColor}, transparent 80%)`
            : '',
        }}
      />
      {children}
    </div>
  );
};
