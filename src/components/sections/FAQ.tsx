'use client';
import React, { useState } from 'react';
import { Icon } from '../ui/Icon';

const FAQS = [
  { q: 'Mình cần đăng ký bằng gì?', a: 'Chỉ cần số điện thoại hoặc email — không cần thêm giấy tờ gì khác.' },
  { q: 'Ghép đôi có mất phí không?', a: 'Không. Tạo tài khoản, ghép đôi và các tính năng cơ bản đều miễn phí.' },
  { q: 'Dữ liệu của tụi mình có an toàn không?', a: 'Có. Tin nhắn và kỷ niệm chỉ hai người trong cặp đôi xem được, được mã hoá khi lưu trữ.' },
  { q: 'Ứng dụng có trên Android không?', a: 'Có, Chúng Mình có mặt trên cả App Store và Google Play.' },
  { q: 'Nếu chia tay thì sao?', a: 'Bạn có thể huỷ ghép đôi bất cứ lúc nào trong phần cài đặt — dữ liệu chung sẽ được xử lý theo lựa chọn của bạn.' },
];

function FAQItem({ item, open, onToggle }: { item: { q: string; a: string }; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderRadius: 'var(--radius-lg)', background: 'var(--white)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
      <button onClick={onToggle} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>{item.q}</span>
        <span style={{ transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 220ms var(--ease-bounce)', flex: 'none' }}>
          <Icon name="chevron-right" size={18} color="var(--ink-400)"/>
        </span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, transition: 'max-height 260ms var(--ease-out)', overflow: 'hidden' }}>
        <div style={{ padding: '0 20px 18px', fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-500)' }}>{item.a}</div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section style={{ maxWidth: 720, margin: '0 auto', padding: '72px 20px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--blush-600)', marginBottom: 8 }}>Hỏi đáp</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 3.4vw, 34px)', color: 'var(--ink-900)', margin: 0 }}>Câu hỏi thường gặp</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 32 }}>
        {FAQS.map((item, i) => (
          <FAQItem key={item.q} item={item} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}/>
        ))}
      </div>
    </section>
  );
}
