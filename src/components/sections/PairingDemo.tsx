'use client';
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--blush-600)', marginBottom: 8 }}>{eyebrow}</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 3.4vw, 34px)', color: 'var(--ink-900)', margin: 0 }}>{title}</h2>
      {sub && <p style={{ fontSize: 16, color: 'var(--ink-500)', marginTop: 10, maxWidth: 520 }}>{sub}</p>}
    </div>
  );
}

function genCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let out = '';
  for (let i = 0; i < 6; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out.slice(0, 3) + '-' + out.slice(3);
}

export function PairingDemo() {
  const [code, setCode] = useState(genCode);
  const [copied, setCopied] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleNew = () => {
    setSpin(true);
    setCode(genCode());
    setCopied(false);
    setTimeout(() => setSpin(false), 400);
  };
  const handleCopy = () => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section style={{ background: 'var(--gradient-cream)', padding: '72px 20px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,420px)', gap: 40, alignItems: 'center' }} className="pairing-grid">
        <div>
          <SectionHeading eyebrow="Ghép đôi" title="Ghép đôi trong tích tắc" sub="Tạo một mã, gửi cho người ấy — không gian riêng của hai người đã sẵn sàng."/>
          <ul style={{ listStyle: 'none', margin: '24px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {['Tạo mã ghép đôi trong ứng dụng', 'Gửi mã cho người thương qua tin nhắn bất kỳ', 'Người ấy nhập mã — cả hai vào chung một không gian'].map((t, i) => (
              <li key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--white)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--blush-500)' }}>{i+1}</div>
                <span style={{ fontSize: 15, color: 'var(--ink-700)', lineHeight: 1.5, paddingTop: 3 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <Card radius="2xl" pad={28} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, color: 'var(--ink-500)', fontWeight: 600, marginBottom: 14 }}>Mã ghép đôi của mình</div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, letterSpacing: '0.06em',
            color: 'var(--ink-900)', background: 'var(--surface-tint)', borderRadius: 'var(--radius-lg)',
            padding: '18px 12px', margin: '0 0 18px',
            transition: 'opacity 220ms var(--ease-out)', opacity: spin ? 0.3 : 1,
          }}>{code}</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="primary" size="md" style={{ flex: 1 }} onClick={handleNew} iconLeft="sparkles">Tạo mã mới</Button>
            <Button variant="soft" size="md" style={{ flex: 1 }} onClick={handleCopy} iconLeft={copied ? 'check' : undefined}>{copied ? 'Đã sao chép' : 'Sao chép'}</Button>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-400)', marginTop: 14 }}>Mã minh hoạ — mở app để tạo mã ghép đôi thật của tụi mình.</div>
        </Card>
      </div>
    </section>
  );
}
