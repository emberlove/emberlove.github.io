import React from 'react';

export function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? '#fff' : 'var(--ink-900)';
  return (
    <div style={{
      height: 'var(--statusbar-height)', display: 'flex', alignItems: 'flex-end',
      justifyContent: 'space-between', padding: '0 28px 8px', flex: 'none',
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: c,
    }}>
      <span>9:41</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="18" height="12" viewBox="0 0 18 12" fill={c}>
          <rect x="0" y="7" width="3" height="5" rx="1"/>
          <rect x="5" y="4" width="3" height="8" rx="1"/>
          <rect x="10" y="1.5" width="3" height="10.5" rx="1"/>
          <rect x="15" y="0" width="3" height="12" rx="1" opacity="0.35"/>
        </svg>
        <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
          <rect x="1" y="1" width="17" height="10" rx="3" stroke={c} strokeOpacity="0.5"/>
          <rect x="3" y="3" width="12" height="6" rx="1.5" fill={c}/>
          <rect x="19" y="4" width="2" height="4" rx="1" fill={c} fillOpacity="0.5"/>
        </svg>
      </div>
    </div>
  );
}
