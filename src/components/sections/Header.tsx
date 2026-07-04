import React from 'react';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40, background: 'rgba(255,248,245,0.85)',
      backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px max(20px, calc((100% - 1120px)/2))',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 'var(--radius-md)',
          background: 'var(--gradient-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <Icon name="heart-fill" size={17} color="#fff"/>
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--ink-900)' }}>
          Chúng Mình
        </span>
      </div>
      <Button variant="primary" size="sm">
        Tải app
      </Button>
    </header>
  );
}
