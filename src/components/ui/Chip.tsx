'use client';
import React, { useState } from 'react';

interface ChipProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Chip({ children, selected = false, onClick, disabled = false, style }: ChipProps) {
  const [press, setPress] = useState(false);
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onPointerDown={() => setPress(true)}
      onPointerUp={() => setPress(false)}
      onPointerLeave={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, height: 36, padding: '0 16px',
        border: 'none', borderRadius: 'var(--radius-pill)',
        background: selected ? 'var(--blush-300)' : 'var(--white)',
        color: selected ? '#fff' : 'var(--ink-700)',
        boxShadow: selected ? 'var(--shadow-blush)' : 'var(--shadow-sm)',
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        transform: press ? 'scale(var(--press-scale))' : 'scale(1)',
        transition: 'transform var(--dur-fast) var(--ease-bounce)',
        WebkitTapHighlightColor: 'transparent',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
