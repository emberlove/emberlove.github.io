'use client';
import React from 'react';
import { Icon } from './Icon';

interface Tab { key: string; label: string; icon: string; iconActive?: string; }

interface TabBarProps {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
}

export function TabBar({ tabs, active, onChange }: TabBarProps) {
  return (
    <div style={{
      height: 'var(--tabbar-height)', display: 'flex', alignItems: 'flex-start',
      paddingTop: 8, background: 'rgba(255,248,245,0.92)',
      backdropFilter: 'blur(12px)', borderTop: '1px solid var(--cream-300)', flex: 'none',
    }}>
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
              padding: '6px 0', border: 'none', background: 'none', cursor: 'pointer',
              color: isActive ? 'var(--blush-500)' : 'var(--ink-400)',
              transition: 'color var(--dur-base) var(--ease-standard)',
            }}
          >
            <Icon
              name={isActive && tab.iconActive ? tab.iconActive : tab.icon}
              size={22}
              color={isActive ? 'var(--blush-500)' : 'var(--ink-400)'}
            />
            <span style={{ fontSize: 10, fontFamily: 'var(--font-display)', fontWeight: isActive ? 700 : 500 }}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
