import React from 'react';
import { Icon } from './Icon';

interface BadgeProps {
  children: React.ReactNode;
  tone?: 'blush' | 'lavender' | 'mint' | 'honey' | 'coral' | 'neutral';
  solid?: boolean;
  icon?: string;
  style?: React.CSSProperties;
}

const toneMap: Record<string, { soft: string[]; solid: string[] }> = {
  blush: { soft: ['var(--blush-50)', 'var(--blush-600)'], solid: ['var(--blush-300)', '#fff'] },
  lavender: { soft: ['var(--lavender-50)', 'var(--lavender-600)'], solid: ['var(--lavender-300)', 'var(--ink-900)'] },
  mint: { soft: ['#E6F6EE', 'var(--mint-500)'], solid: ['var(--mint-500)', '#fff'] },
  honey: { soft: ['#FDF1DD', 'var(--honey-500)'], solid: ['var(--honey-500)', '#fff'] },
  coral: { soft: ['#FDEAE6', 'var(--coral-500)'], solid: ['var(--coral-500)', '#fff'] },
  neutral: { soft: ['var(--cream-200)', 'var(--ink-500)'], solid: ['var(--ink-500)', '#fff'] },
};

export function Badge({ children, tone = 'blush', solid = false, icon, style }: BadgeProps) {
  const [bg, fg] = (toneMap[tone] || toneMap.blush)[solid ? 'solid' : 'soft'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4, height: 24, padding: '0 10px',
      borderRadius: 'var(--radius-pill)', background: bg, color: fg,
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: '0.01em',
      ...style,
    }}>
      {icon && <Icon name={icon} size={13} color={fg} />}
      {children}
    </span>
  );
}
