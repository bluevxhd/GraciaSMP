import React, { useMemo } from 'react';
import { DANA_BISNIS_QRIS_IMAGE_URL, RankItem } from '../data/ranks';

export function WhatsAppLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="16" cy="16" r="15" fill="#25D366" />
      <path
        d="M23.4 8.5A10.4 10.4 0 0 0 7.1 21.1L5.6 26.4l5.5-1.4a10.4 10.4 0 0 0 4.9 1.2h.1a10.4 10.4 0 0 0 7.3-17.7Zm-7.4 16a8.6 8.6 0 0 1-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3a8.6 8.6 0 1 1 7.3 4Zm4.7-6.4c-.3-.1-1.5-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.1-.3 0-.4.1-.6l.4-.4.3-.4c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.1 2.8c.2.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function OvoLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#4C3494] text-white shadow-sm ${className}`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="3.2" />
        <circle cx="12" cy="12" r="3.2" fill="#A78BFA" />
      </svg>
      <span className="font-sans font-extrabold text-xs tracking-wider leading-none">OVO</span>
    </div>
  );
}

export function GoPayLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#00AED6] text-white shadow-sm ${className}`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="4" fill="white" fillOpacity="0.22" stroke="white" strokeWidth="2" />
        <circle cx="15.5" cy="12" r="2.2" fill="white" />
      </svg>
      <span className="font-sans font-extrabold text-xs tracking-wide leading-none">gopay</span>
    </div>
  );
}

export function DanaLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#118EEA] text-white shadow-sm ${className}`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-hidden="true">
        <path
          d="M4.5 9.5C7.2 7.4 9.7 7.4 12 9.5C14.3 11.6 16.8 11.6 19.5 9.5V14.5C16.8 16.6 14.3 16.6 12 14.5C9.7 12.4 7.2 12.4 4.5 14.5V9.5Z"
          fill="white"
        />
      </svg>
      <span className="font-sans font-extrabold text-xs tracking-wider leading-none">DANA</span>
    </div>
  );
}

export function RankEmblem({ variant }: { variant: RankItem['emblemVariant'] }) {
  const palette: Record<RankItem['emblemVariant'], { bg: string; inner: string; stroke: string }> = {
    vip: { bg: 'from-yellow-400 to-amber-500', inner: '#422006', stroke: '#FDE047' },
    'vip-plus': { bg: 'from-emerald-400 to-green-600', inner: '#052E16', stroke: '#6EE7B7' },
    mvp: { bg: 'from-sky-400 to-blue-600', inner: '#0C4A6E', stroke: '#7DD3FC' },
    'mvp-plus': { bg: 'from-red-500 to-rose-600', inner: '#450A0A', stroke: '#FCA5A5' },
    gracia: { bg: 'from-purple-500 to-violet-600', inner: '#3B0764', stroke: '#D8B4FE' },
  };

  const c = palette[variant];

  return (
    <div
      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.bg} p-0.5 shadow-md shrink-0 flex items-center justify-center`}
      aria-hidden="true"
    >
      <div className="w-full h-full rounded-[10px] bg-[#071530]/95 flex items-center justify-center">
        {variant === 'gracia' ? (
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
            <path d="M4 17L6 8L10.5 12L12 5L13.5 12L18 8L20 17H4Z" fill={c.inner} stroke={c.stroke} strokeWidth="2" strokeLinejoin="round" />
            <rect x="4" y="18" width="16" height="2.5" rx="1" fill={c.stroke} />
          </svg>
        ) : variant === 'mvp-plus' || variant === 'mvp' ? (
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
            <path d="M12 3L20 9.5L12 21L4 9.5L12 3Z" fill={c.inner} stroke={c.stroke} strokeWidth="2" strokeLinejoin="round" />
            <path d="M4 9.5H20M12 3L8.5 9.5L12 21L15.5 9.5L12 3Z" stroke={c.stroke} strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
            <path d="M12 3L19 6V12C19 16.5 16 19.8 12 21C8 19.8 5 16.5 5 12V6L12 3Z" fill={c.inner} stroke={c.stroke} strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 7.5V16.5M8.5 11.5H15.5" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>
    </div>
  );
}

/**
 * Generates a realistic deterministic QR matrix SVG for the DANA Bisnis QRIS preview
 * until the owner plugs in their real DANA_BISNIS_QRIS_IMAGE_URL.
 */
export function DanaBisnisQrisCard({ rankName, priceFormatted }: { rankName?: string; priceFormatted?: string }) {
  const [imgFailed, setImgFailed] = React.useState(false);

  const matrix = useMemo(() => {
    const size = 25;
    const grid: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));

    const drawFinder = (startR: number, startC: number) => {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          const isOuter = r === 0 || r === 6 || c === 0 || c === 6;
          const isInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
          grid[startR + r][startC + c] = isOuter || isInner;
        }
      }
    };

    drawFinder(0, 0);
    drawFinder(0, size - 7);
    drawFinder(size - 7, 0);

    // Deterministic pattern seeded by rankName
    const seedStr = `GRACIASMP-DANA-BISNIS-${rankName || 'STORE'}`;
    let hash = 2166136261;
    for (let i = 0; i < seedStr.length; i++) {
      hash ^= seedStr.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const inTopLeft = r < 8 && c < 8;
        const inTopRight = r < 8 && c >= size - 8;
        const inBottomLeft = r >= size - 8 && c < 8;
        const inCenterLogo = r >= 10 && r <= 14 && c >= 10 && c <= 14;
        if (inTopLeft || inTopRight || inBottomLeft || inCenterLogo) continue;

        hash ^= (r * 31 + c * 17);
        hash = Math.imul(hash, 16777619);
        grid[r][c] = (Math.abs(hash) % 10) < 5;
      }
    }

    return grid;
  }, [rankName]);

  if (DANA_BISNIS_QRIS_IMAGE_URL && !imgFailed) {
    return (
      <div className="rounded-2xl bg-white p-3.5 border border-white/80 shadow-lg flex flex-col items-center w-full max-w-[290px] mx-auto">
        <img
          src={DANA_BISNIS_QRIS_IMAGE_URL}
          alt="QRIS DANA Bisnis GraciaSMP"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="w-full h-auto rounded-xl object-contain"
        />
        {priceFormatted && (
          <p className="mt-2.5 font-mono font-bold text-xs text-[#0C2340] tabular-nums">
            Nominal Transfer: {priceFormatted}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-sky-200 shadow-md overflow-hidden w-full max-w-[280px] mx-auto">
      {/* Top Red/Blue QRIS Header Strip */}
      <div className="bg-gradient-to-r from-[#118EEA] to-[#0B6FC2] px-4 py-2.5 flex items-center justify-between text-white">
        <div className="flex items-center gap-1.5">
          <span className="font-sans font-extrabold text-sm tracking-tight">QRIS</span>
          <span className="text-[10px] font-sans font-semibold opacity-90">Standar Pembayaran</span>
        </div>
        <span className="font-sans font-extrabold text-[11px] bg-white/20 px-2 py-0.5 rounded">
          DANA BISNIS
        </span>
      </div>

      {/* Merchant Identity */}
      <div className="px-4 pt-3 pb-1 text-center">
        <p className="font-sans font-extrabold text-xs text-slate-900 tracking-wide">
          GRACIASMP OFFICIAL STORE
        </p>
        <p className="font-mono text-[10px] text-slate-500 mt-0.5">
          NMID: ID1026889509860
        </p>
      </div>

      {/* QR Code SVG */}
      <div className="px-5 py-2.5 flex items-center justify-center">
        <div className="relative p-2.5 rounded-xl border border-slate-200 bg-white">
          <svg
            viewBox="0 0 25 25"
            className="w-44 h-44"
            shapeRendering="crispEdges"
            role="img"
            aria-label="Kode QRIS DANA Bisnis GraciaSMP"
          >
            <rect width="25" height="25" fill="#FFFFFF" />
            {matrix.map((row, rIdx) =>
              row.map((filled, cIdx) =>
                filled ? (
                  <rect
                    key={`${rIdx}-${cIdx}`}
                    x={cIdx}
                    y={rIdx}
                    width="1"
                    height="1"
                    fill="#0C2340"
                  />
                ) : null
              )
            )}
          </svg>
          {/* Center DANA Bisnis Mark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-9 h-9 rounded-lg bg-[#118EEA] border-2 border-white shadow flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
                <path
                  d="M4.5 9.5C7.2 7.4 9.7 7.4 12 9.5C14.3 11.6 16.8 11.6 19.5 9.5V14.5C16.8 16.6 14.3 16.6 12 14.5C9.7 12.4 7.2 12.4 4.5 14.5V9.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Nominal & Footer */}
      <div className="px-4 pb-3 pt-1 text-center border-t border-slate-100 bg-sky-50/50">
        {priceFormatted ? (
          <p className="font-mono font-bold text-xs text-[#0C2340] tabular-nums">
            Nominal: {priceFormatted}
          </p>
        ) : (
          <p className="font-sans font-bold text-[11px] text-slate-600">
            Scan menggunakan OVO, GoPay, atau DANA
          </p>
        )}
        <p className="font-sans font-bold text-[10px] text-sky-700 mt-0.5">
          Pratinjau QRIS DANA Bisnis (Siap Ganti URL)
        </p>
      </div>
    </div>
  );
}
