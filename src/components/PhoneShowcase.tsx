'use client';
import React, { useState } from 'react';
import { DeviceFrame } from './phone/DeviceFrame';
import { HomeScreen } from './phone/HomeScreen';
import { TabBar } from './ui/TabBar';

const TABS = [
  { key: 'home', label: 'Nhà', icon: 'heart', iconActive: 'heart-fill' },
  { key: 'chat', label: 'Nhắn', icon: 'chat' },
  { key: 'pet', label: 'Mây', icon: 'sparkles' },
  { key: 'memories', label: 'Kỷ niệm', icon: 'image' },
  { key: 'profile', label: 'Hồ sơ', icon: 'user' },
];

export function PhoneShowcase() {
  const [active, setActive] = useState('home');
  return (
    <div style={{ transform: 'scale(0.86)', transformOrigin: 'center' }}>
      <DeviceFrame>
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          <HomeScreen/>
        </div>
        <TabBar tabs={TABS} active={active} onChange={setActive}/>
      </DeviceFrame>
    </div>
  );
}
