import React, { useMemo } from 'react';

export function QRPlaceholder({ size = 132 }: { size?: number }) {
  const cells = 11;
  const seedPattern = useMemo(() => {
    let seed = 42;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    const grid = [];
    for (let y = 0; y < cells; y++) {
      const row = [];
      for (let x = 0; x < cells; x++) {
        const inFinder = (x < 3 && y < 3) || (x > cells - 4 && y < 3) || (x < 3 && y > cells - 4);
        row.push(inFinder ? 1 : rand() > 0.56 ? 1 : 0);
      }
      grid.push(row);
    }
    return grid;
  }, []);
  const cell = size / cells;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <rect width={size} height={size} rx={12} fill="#fff"/>
      {seedPattern.map((row, y) => row.map((v, x) => v ? (
        <rect key={`${x}-${y}`} x={x*cell+1} y={y*cell+1} width={cell-2} height={cell-2} rx={2} fill="var(--ink-900)"/>
      ) : null))}
    </svg>
  );
}
