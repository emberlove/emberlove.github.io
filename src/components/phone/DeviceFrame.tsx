import React from 'react';
import { StatusBar } from './StatusBar';

interface DeviceFrameProps {
  children: React.ReactNode;
  bg?: string;
  dark?: boolean;
}

export function DeviceFrame({ children, bg = 'var(--bg-app)', dark = false }: DeviceFrameProps) {
  return (
    <div style={{
      width: 'var(--device-width)', height: 'var(--device-height)',
      background: bg, borderRadius: 44, overflow: 'hidden', position: 'relative',
      boxShadow: '0 30px 80px rgba(45,38,54,.28), 0 0 0 11px #1b1622, 0 0 0 13px #2d2636',
      display: 'flex', flexDirection: 'column',
    }}>
      <StatusBar dark={dark} />
      <div style={{
        position: 'absolute', top: 13, left: '50%', transform: 'translateX(-50%)',
        width: 116, height: 32, background: '#1b1622', borderRadius: 999, zIndex: 50,
      }} />
      {children}
    </div>
  );
}
