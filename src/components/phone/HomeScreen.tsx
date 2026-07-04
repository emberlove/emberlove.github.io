'use client';
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';
import { Chip } from '../ui/Chip';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';

function CountdownRing({ pct = 60, size = 84 }: { pct?: number; size?: number }) {
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ flex: 'none' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={stroke}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#fff" strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c*(1-pct/100)}
        transform={`rotate(-90 ${size/2} ${size/2})`}/>
      <text x="50%" y="53%" textAnchor="middle" dominantBaseline="middle"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, fill: '#fff' }}>12</text>
    </svg>
  );
}

function CloudPet({ size = 72 }: { size?: number }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, flex: 'none' }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '46% 54% 52% 48% / 58% 52% 48% 42%',
        background: 'linear-gradient(160deg, #FFFFFF 0%, #EAE2FC 100%)',
        boxShadow: 'var(--shadow-sm), inset 0 -6px 10px rgba(142,109,214,0.10)',
      }}/>
      <div style={{ position: 'absolute', width: 12, height: 8, borderRadius: '50%', background: 'var(--blush-200)', opacity: 0.8, left: '18%', top: '58%' }}/>
      <div style={{ position: 'absolute', width: 12, height: 8, borderRadius: '50%', background: 'var(--blush-200)', opacity: 0.8, right: '18%', top: '58%' }}/>
      <div style={{ position: 'absolute', width: 6, height: 8, borderRadius: '50%', background: 'var(--ink-900)', left: '33%', top: '44%' }}/>
      <div style={{ position: 'absolute', width: 6, height: 8, borderRadius: '50%', background: 'var(--ink-900)', right: '33%', top: '44%' }}/>
      <div style={{ position: 'absolute', width: 14, height: 7, left: '50%', top: '54%', transform: 'translateX(-50%)', borderBottom: '2.5px solid var(--ink-900)', borderRadius: '0 0 14px 14px' }}/>
    </div>
  );
}

export function HomeScreen() {
  const [mood, setMood] = useState<string | null>(null);
  const moods = [
    { key: 'happy', e: '😊' }, { key: 'love', e: '🥰' }, { key: 'calm', e: '😌' },
    { key: 'tired', e: '😴' }, { key: 'sad', e: '🥺' },
  ];

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--bg-app)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 20px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar name="Anh" size="sm" ring ringColor="var(--blush-300)" style={{ zIndex: 2 }}/>
          <div style={{ width: 22, height: 22, marginLeft: -8, marginRight: -8, zIndex: 3, borderRadius: '50%', background: 'var(--white)', boxShadow: '0 0 0 3px var(--bg-app)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="heart-fill" size={12} color="var(--blush-400)"/>
          </div>
          <Avatar name="Venus" size="sm" ring ringColor="var(--lavender-300)" style={{ zIndex: 2 }}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--white)', borderRadius: 'var(--radius-pill)', padding: '6px 14px', boxShadow: 'var(--shadow-sm)' }}>
          <span style={{ fontSize: 14 }}>💛</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--ink-900)' }}>Ngày 247 bên nhau</span>
        </div>
        <div style={{ width: 36, height: 36 }}/>
      </div>

      <div style={{ padding: '0 20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Card tone="gradient" radius="2xl" pad={22}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <CountdownRing pct={60}/>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, lineHeight: 1.3, color: '#fff' }}>
                Còn 12 ngày tới<br/>sinh nhật Ice 🎂
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 6, fontWeight: 600 }}>Chuẩn bị một điều bất ngờ nhé</div>
            </div>
          </div>
        </Card>

        <Card tone="lavender" radius="xl" pad={16} interactive>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <CloudPet/>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--ink-900)' }}>Mây</span>
                <span style={{ fontSize: 13, color: 'var(--lavender-700)', fontWeight: 600 }}>Mây đang vui 😊</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 4 }}>Chạm để trò chuyện với Mây nhé</div>
            </div>
            <Icon name="chevron-right" size={20} color="var(--lavender-500)"/>
          </div>
        </Card>

        <Card pad={18}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>Câu hỏi hôm nay ✨</div>
          <div style={{ fontSize: 16, color: 'var(--ink-900)', lineHeight: 1.5, margin: '8px 0 16px' }}>Điều khiến em cười nhất tuần này là gì?</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="primary" size="md" style={{ flex: 1.4, whiteSpace: 'nowrap' }}>Trả lời ngay</Button>
            <Button variant="ghost" size="md" style={{ flex: 1, whiteSpace: 'nowrap', boxShadow: 'inset 0 0 0 1.5px var(--cream-400)' }}>Để sau</Button>
          </div>
        </Card>

        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--ink-900)', margin: '4px 4px 10px' }}>Hôm nay bạn đang thế nào?</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {moods.map((m) => (
              <Chip key={m.key} selected={mood === m.key} onClick={() => setMood(m.key)}
                style={{ flex: 1, justifyContent: 'center', fontSize: 20, height: 44, padding: 0 }}>
                {m.e}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
