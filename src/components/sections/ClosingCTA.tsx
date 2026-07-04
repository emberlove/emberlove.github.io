import React from 'react';

function StoreButton({ platform }: { platform: 'ios' | 'android' }) {
  const isIOS = platform === 'ios';
  return (
    <button className="store-btn" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 18px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.5)', cursor: 'pointer' }}>
      {isIOS ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M16.365 1.43c0 1.14-.462 2.098-1.226 2.833-.83.8-2.052 1.42-3.062 1.34-.117-1.09.463-2.253 1.19-2.98.79-.79 2.16-1.37 3.098-1.193zM20.61 17.24c-.55 1.27-.81 1.84-1.51 2.96-.98 1.55-2.36 3.48-4.08 3.5-1.53.02-1.92-1-4-1-2.08 0-2.52.98-4.05.96-1.72-.02-3.02-1.76-4-3.31C.31 16.68-.6 11.83 1.35 8.58c.97-1.62 2.71-2.65 4.6-2.68 1.63-.03 3.17 1.1 4.16 1.1.99 0 2.87-1.36 4.84-1.16.82.03 3.13.33 4.62 2.5-.12.08-2.76 1.62-2.73 4.82.04 3.83 3.35 5.1 3.39 5.12-.03.08-.53 1.83-1.64 3.26z"/></svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M3.6 2.6c-.3.3-.5.75-.5 1.24v16.3c0 .5.2.94.5 1.24l.1.08 9.13-9.13v-.22L3.7 2.53l-.1.08zM16.8 12.6l-3.05-1.76 3.05-3.05 3.5 2c1 .58 1 1.53 0 2.1l-3.5 2.02v.02zM4.4 21.4l8.4-8.4 2.72 1.56-8.7 5.03c-.72.42-1.63.35-2.42-.19zM4.4 2.6c.8-.55 1.7-.6 2.42-.18l8.7 5.02-2.72 1.56L4.4 2.6z"/></svg>
      )}
      <span style={{ color: '#fff', fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap' }}>
        {isIOS ? 'Tải trên App Store' : 'Tải trên Google Play'}
      </span>
    </button>
  );
}

export function ClosingCTA() {
  return (
    <section style={{ maxWidth: 1120, margin: '0 auto', padding: '0 20px 80px' }}>
      <div style={{ background: 'var(--gradient-warm)', borderRadius: 'var(--radius-2xl)', padding: '56px 40px', textAlign: 'center', boxShadow: 'var(--shadow-blush)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 3.2vw, 32px)', color: '#fff', marginBottom: 12 }}>Tụi mình bắt đầu chứ?</div>
        <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', marginBottom: 28 }}>Tải Chúng Mình và tạo không gian riêng ngay hôm nay.</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <StoreButton platform="ios"/>
          <StoreButton platform="android"/>
        </div>
      </div>
    </section>
  );
}
