import React from 'react';

interface AvatarProps {
  src?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  ring?: boolean;
  ringColor?: string;
  status?: 'together' | 'away' | 'offline';
  style?: React.CSSProperties;
}

const SIZES = { xs: 28, sm: 36, md: 48, lg: 64, xl: 88 };

export function Avatar({ src, name = '', size = 'md', ring = false, ringColor = 'var(--blush-300)', status, style }: AvatarProps) {
  const dim = typeof size === 'number' ? size : (SIZES[size] || SIZES.md);
  const initials = name.trim().split(/\s+/).slice(-2).map((w: string) => w[0]).join('').toUpperCase().slice(0, 2);
  const dot = dim >= 64 ? 16 : dim >= 48 ? 13 : 10;

  return (
    <div style={{ position: 'relative', width: dim, height: dim, flex: 'none', ...style }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: 'var(--radius-pill)', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: src ? 'var(--cream-200)' : 'var(--lavender-200)',
        color: 'var(--lavender-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: dim * 0.36,
        boxShadow: ring ? `0 0 0 3px var(--bg-app), 0 0 0 6px ${ringColor}` : 'var(--shadow-xs)',
      }}>
        {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : (initials || '♥')}
      </div>
      {status && (
        <span style={{
          position: 'absolute', right: 0, bottom: 0, width: dot, height: dot, borderRadius: '50%',
          background: status === 'together' ? 'var(--mint-500)' : status === 'away' ? 'var(--honey-500)' : 'var(--ink-300)',
          boxShadow: '0 0 0 2.5px var(--bg-app)',
        }} />
      )}
    </div>
  );
}
