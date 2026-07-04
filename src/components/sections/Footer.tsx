import React from 'react';
import { Icon } from '../ui/Icon';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--cream-300)', padding: '32px 20px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="heart-fill" size={16} color="var(--blush-400)"/>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--ink-700)' }}>Chúng Mình</span>
          <span style={{ fontSize: 13, color: 'var(--ink-400)' }}>© 2026</span>
        </div>
        <div style={{ display: 'flex', gap: 24, fontSize: 13, color: 'var(--ink-500)' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Điều khoản</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Bảo mật</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Liên hệ</a>
        </div>
      </div>
    </footer>
  );
}
