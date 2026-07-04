'use client';
import React, { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  tone?: 'plain' | 'tint' | 'lavender' | 'sunken' | 'gradient';
  radius?: string;
  pad?: number | string;
  interactive?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const tones: Record<string, React.CSSProperties> = {
  plain: { background: 'var(--white)', color: 'var(--ink-900)' },
  tint: { background: 'var(--blush-50)', color: 'var(--ink-900)' },
  lavender: { background: 'var(--lavender-50)', color: 'var(--ink-900)' },
  sunken: { background: 'var(--cream-200)', color: 'var(--ink-900)' },
  gradient: { background: 'var(--gradient-warm)', color: '#fff' },
};

export function Card({ children, tone = 'plain', radius = 'lg', pad = 16, interactive = false, onClick, style }: CardProps) {
  const [press, setPress] = useState(false);
  return (
    <div
      onClick={onClick}
      onPointerDown={() => interactive && setPress(true)}
      onPointerUp={() => setPress(false)}
      onPointerLeave={() => setPress(false)}
      style={{
        borderRadius: `var(--radius-${radius})`,
        padding: typeof pad === 'number' ? pad : pad,
        boxShadow: tone === 'gradient' ? 'var(--shadow-blush)' : 'var(--shadow-md)',
        transition: 'transform var(--dur-base) var(--ease-bounce)',
        transform: press ? 'scale(0.985)' : 'scale(1)',
        cursor: interactive ? 'pointer' : 'default',
        ...(tones[tone] || tones.plain),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
