'use client';

import { ReactNode, CSSProperties } from 'react';
import { useReveal } from '@/lib/hooks';

interface AnimProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  style?: CSSProperties;
  className?: string;
}

export function Anim({ children, delay = 0, y = 60, style = {}, className }: AnimProps) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translateY(${y}px)`,
        transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function ScaleIn({ children, delay = 0, style = {}, className }: AnimProps) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.92)',
        transition: `all 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
