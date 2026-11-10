import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

export const NumberTicker = ({
  value,
  direction = 'up',
  delay = 0,
  duration = 1.6,
  className,
  prefix = '',
  suffix = '',
}: {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
  delay?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [current, setCurrent] = useState(direction === 'down' ? value : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      let startTimestamp: number | null = null;
      const durationMs = duration < 50 ? duration * 1000 : duration;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
        // Ease out quad
        const easeOut = progress * (2 - progress);
        const val =
          direction === 'down'
            ? Math.floor(value * (1 - easeOut))
            : Math.floor(value * easeOut);
        setCurrent(val);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCurrent(value);
        }
      };
      window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [hasStarted, value, direction, delay]);

  return (
    <span ref={ref} className={cn('inline-block tabular-nums', className)}>
      {prefix}
      {current.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};
