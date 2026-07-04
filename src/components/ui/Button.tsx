'use client';
import React, { useState } from 'react';
import { Icon } from './Icon';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'accent' | 'soft' | 'ghost' | 'plain';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  disabled?: boolean;
  iconLeft?: string;
  iconRight?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

const SIZES = {
  sm: { h: 38, px: 16, fs: 14, gap: 6, icon: 16 },
  md: { h: 48, px: 22, fs: 16, gap: 8, icon: 18 },
  lg: { h: 56, px: 28, fs: 17, gap: 10, icon: 20 },
};

export function Button({ children, variant = 'primary', size = 'md', block = false, disabled = false, iconLeft, iconRight, onClick, type = 'button', style }: ButtonProps) {
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;

  const variants: Record<string, React.CSSProperties> = {
    primary: { background: 'var(--blush-300)', color: '#fff', boxShadow: press ? 'var(--shadow-sm)' : 'var(--shadow-blush)' },
    accent: { background: 'var(--lavender-300)', color: 'var(--ink-900)', boxShadow: press ? 'var(--shadow-sm)' : 'var(--shadow-lavender)' },
    soft: { background: 'var(--blush-50)', color: 'var(--blush-600)', boxShadow: 'none' },
    ghost: { background: 'transparent', color: 'var(--ink-700)', boxShadow: 'none' },
    plain: { background: 'var(--white)', color: 'var(--ink-900)', boxShadow: press ? 'var(--shadow-xs)' : 'var(--shadow-sm)' },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onPointerDown={() => setPress(true)}
      onPointerUp={() => setPress(false)}
      onPointerLeave={() => setPress(false)}
      style={{
        display: block ? 'flex' : 'inline-flex',
        width: block ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.h,
        padding: `0 ${s.px}px`,
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: s.fs,
        letterSpacing: '0.005em',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'transform var(--dur-fast) var(--ease-bounce), box-shadow var(--dur-base) var(--ease-standard)',
        transform: press && !disabled ? 'scale(var(--press-scale))' : 'scale(1)',
        opacity: disabled ? 0.45 : 1,
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        ...(variants[variant] || variants.primary),
        ...style,
      }}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}
