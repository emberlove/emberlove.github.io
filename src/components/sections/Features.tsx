import React from 'react';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';

function SectionHeading({ eyebrow, title, sub, center }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--blush-600)', marginBottom: 8 }}>{eyebrow}</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 3.4vw, 34px)', color: 'var(--ink-900)', margin: 0, letterSpacing: 'var(--ls-tight)' }}>{title}</h2>
      {sub && <p style={{ fontSize: 16, color: 'var(--ink-500)', marginTop: 10, maxWidth: 520, marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>{sub}</p>}
    </div>
  );
}

const FEATURES = [
  { icon: 'chat', tone: 'plain' as const, title: 'Nhắn nhủ nhau mỗi ngày', body: 'Tin nhắn, sticker, và cảm xúc — chỉ hai mình thấy.' },
  { icon: 'image', tone: 'tint' as const, title: 'Lưu giữ kỷ niệm', body: 'Ảnh, ngày kỷ niệm, những khoảnh khắc nhỏ — ở một nơi.' },
  { icon: 'calendar', tone: 'lavender' as const, title: 'Đếm từng ngày bên nhau', body: 'Biết chính xác đã đi cùng nhau bao lâu, và còn bao lâu tới ngày đặc biệt.' },
  { icon: 'sparkles', tone: 'plain' as const, title: 'Người bạn nhỏ tên Mây', body: 'Trò chuyện, tâm sự cùng Mây bất cứ khi nào cần.' },
];

export function Features() {
  return (
    <section style={{ maxWidth: 1120, margin: '0 auto', padding: '24px 20px 72px' }}>
      <SectionHeading eyebrow="Tính năng" title="Mọi thứ tụi mình cần, ở một nơi"/>
      <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 32 }}>
        {FEATURES.map((f) => (
          <Card key={f.title} tone={f.tone} radius="xl" pad={22}>
            <div style={{
              width: 46, height: 46, borderRadius: 'var(--radius-md)',
              background: f.tone === 'lavender' ? 'rgba(255,255,255,0.5)' : 'var(--blush-100)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
            }}>
              <Icon name={f.icon} size={22} color={f.tone === 'lavender' ? 'var(--lavender-700)' : 'var(--blush-500)'}/>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--ink-900)', marginBottom: 6 }}>{f.title}</div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--ink-500)' }}>{f.body}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
