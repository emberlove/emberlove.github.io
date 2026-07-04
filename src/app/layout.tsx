import type { Metadata } from 'next';
import { Nunito, Quicksand } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin', 'vietnamese'],
  weight: ['500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chúng Mình — Không gian riêng của hai người',
  description: 'Chúng Mình là không gian riêng để nhắn nhủ, đếm ngày và lưu giữ kỷ niệm — chỉ hai mình biết với nhau.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${nunito.variable} ${quicksand.variable}`}>
      <head>
        <style>{`
          :root {
            --font-display: var(--font-quicksand), var(--font-nunito), ui-rounded, system-ui, sans-serif;
            --font-body: var(--font-nunito), ui-rounded, system-ui, sans-serif;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
