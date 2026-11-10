import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

export const ScrollProgress = ({ className }: { className?: string }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(3)) * 100);
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-[#003DA5] via-[#00A3E0] to-[#00A859] transition-all duration-75',
        className
      )}
      style={{
        width: `${progress}%`,
      }}
    />
  );
};
