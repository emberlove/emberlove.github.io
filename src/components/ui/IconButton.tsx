'use client';
import React, { useState } from 'react';
import { Icon } from './Icon';

interface IconButtonProps {
  icon: string;
  variant?: 'solid' | 'tonal' | 'ghost' | 'plain';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  badge?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
  style?: React.CSSProperties;
}

const SIZES = { sm: 36, md: 44, lg: 52 };
const ICON = { sm: 18, md: 20, lg: 24 };

export function IconButton({ icon, variant = 'plain', size = 'md', disabled = false, badge = false, onClick, 'aria-label': ariaLabel, style }: IconButtonProps) {
  const dim = SIZES[size] || SIZES.md;
  const [press, setPress] = useState(false);

  const variants: Record<string, React.CSSProperties> = {
    solid: { background: 'var(--blush-300)', color: '#fff', boxShadow: press ? 'var(--shadow-xs)' : 'var(--shadow-blush)' },
    tonal: { background: 'var(--blush-50)', color: 'var(--blush-600)', boxShadow: 'none' },
    ghost: { background: 'transparent', color: 'var(--ink-700)', boxShadow: 'none' },
    plain: { background: 'var(--white)', color: 'var(--ink-700)', boxShadow: press ? 'var(--shadow-xs)' : 'var(--shadow-sm)' },
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      onPointerDown={() => setPress(true)}
      onPointerUp={() => setPress(false)}
      onPointerLeave={() => setPress(false)}
      style={{
        position: 'relative', width: dim, height: dim,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: 'none', borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transform: press && !disabled ? 'scale(var(--press-scale))' : 'scale(1)',
        transition: 'transform var(--dur-fast) var(--ease-bounce)',
        WebkitTapHighlightColor: 'transparent',
        ...(variants[variant] || variants.plain),
        ...style,
      }}
    >
      <Icon name={icon} size={ICON[size] || ICON.md} />
      {badge && (
        <span style={{ position: 'absolute', top: 6, right: 6, width: 9, height: 9, borderRadius: '50%', background: 'var(--coral-500)', boxShadow: '0 0 0 2px var(--white)' }} />
      )}
    </button>
  );
}
