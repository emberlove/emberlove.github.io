import React from 'react';
import { Badge } from '../ui/Badge';
import { QRPlaceholder } from '../QRPlaceholder';
import { PhoneShowcase } from '../PhoneShowcase';

function StoreButton({ platform }: { platform: 'ios' | 'android' }) {
  const isIOS = platform === 'ios';
  return (
    <button className="store-btn" style={{
      display: 'flex', alignItems: 'center', gap: 10, padding: '11px 18px',
      borderRadius: 'var(--radius-pill)', background: 'var(--ink-900)', border: 'none',
      cursor: 'pointer', boxShadow: 'var(--shadow-md)',
    }}>
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

export function Hero() {
  return (
    <section style={{
      maxWidth: 1120, margin: '0 auto', padding: '48px 20px 64px',
      display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,460px)', gap: 40, alignItems: 'center',
    }} className="hero-grid">
      <div>
        <Badge tone="lavender" icon="sparkles" style={{ marginBottom: 18 }}>Cho hai người, và chỉ hai người</Badge>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px, 5vw, 52px)',
          lineHeight: 1.12, color: 'var(--ink-900)', margin: 0, letterSpacing: 'var(--ls-tight)',
        }}>
          Một nơi nhỏ,<br/>chỉ dành cho hai người.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-500)', margin: '18px 0 32px', maxWidth: 440 }}>
          Chúng Mình là không gian riêng để nhắn nhủ, đếm ngày và lưu giữ kỷ niệm — chỉ hai mình biết với nhau.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
          <StoreButton platform="ios"/>
          <StoreButton platform="android"/>
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 14, background: 'var(--white)',
          borderRadius: 'var(--radius-xl)', padding: 14, boxShadow: 'var(--shadow-md)',
        }}>
          <QRPlaceholder size={78}/>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--ink-900)' }}>Quét mã để tải</div>
            <div style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 2, maxWidth: 180 }}>Mở camera điện thoại và hướng vào mã nhé</div>
          </div>
        </div>
      </div>
      <div className="hero-phone" style={{ display: 'flex', justifyContent: 'center' }}>
        <PhoneShowcase/>
      </div>
    </section>
  );
}
